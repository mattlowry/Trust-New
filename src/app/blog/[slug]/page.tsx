import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BlogArticle } from '@/components/ui/BlogArticle';
import { KeyTakeaways } from '@/components/ui/KeyTakeaways';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { AuthorBio } from '@/components/ui/AuthorBio';
import { RelatedPosts } from '@/components/ui/RelatedPosts';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema, generateArticleSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import {
  getAllBlogSlugs,
  getBlogPostBySlug,
  getRelatedPosts,
  BLOG_CATEGORIES,
} from '@/data/blog';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    ...generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      path: `/blog/${slug}`,
    }),
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      images: [{ url: post.heroImage, width: 1200, height: 630 }],
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const categoryMeta = BLOG_CATEGORIES[post.category];

  // Build TOC items from sections
  const tocItems = post.sections.map((section) => ({
    id: section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, ''),
    text: section.heading,
  }));

  return (
    <>
      {/* Hero */}
      <PageHero
        title={post.title}
        subtitle={`By ${post.author.name}, ${post.author.credentials}`}
        backgroundImage={post.heroImage}
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />
      </div>

      {/* Meta bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {new Date(post.publishDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime} min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            {categoryMeta.label}
          </span>
        </div>
      </div>

      {/* Two-column layout: article + TOC sidebar */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-12">
            {/* Main content */}
            <article className="min-w-0 max-w-4xl flex-1">
              <KeyTakeaways takeaways={post.keyTakeaways} />
              <BlogArticle sections={post.sections} />
              <AuthorBio author={post.author} />
            </article>

            {/* Sidebar TOC -- visible on xl screens only */}
            <aside className="hidden w-64 flex-shrink-0 xl:block">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {post.faqs.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={post.faqs} />
            <JsonLd data={generateFAQSchema(post.faqs)} />
          </div>
        </section>
      )}

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />

      {/* CTA Banner */}
      <CTABanner />

      {/* BlogPosting JSON-LD */}
      <JsonLd
        data={generateArticleSchema({
          title: post.title,
          description: post.metaDescription,
          image: post.heroImage,
          publishDate: post.publishDate,
          author: post.author,
          slug: post.slug,
          keyTakeaways: post.keyTakeaways,
          category: categoryMeta.label,
          tags: post.tags,
          wordCount: post.sections.reduce(
            (acc, s) =>
              acc +
              s.paragraphs.join(' ').split(/\s+/).length +
              (s.subsections?.reduce(
                (sub, ss) => sub + ss.paragraphs.join(' ').split(/\s+/).length,
                0,
              ) ?? 0),
            0,
          ),
          readingTime: post.readingTime,
        })}
      />
    </>
  );
}
