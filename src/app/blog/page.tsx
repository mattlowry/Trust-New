import { Metadata } from 'next';
import Link from 'next/link';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BlogCard } from '@/components/ui/BlogCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import {
  allBlogPosts,
  BLOG_CATEGORIES,
  getBlogPostsByCategory,
} from '@/data/blog';
import type { BlogCategory } from '@/data/blog/types';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMetadata({
  title: 'Addiction Treatment Blog | Trust SoCal',
  description:
    'Expert articles on addiction treatment, recovery strategies, mental health, and local resources in Southern California. Written by licensed clinicians.',
  path: '/blog',
});

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BlogPage() {
  const latestPosts = allBlogPosts.slice(0, 6);
  const categories = Object.entries(BLOG_CATEGORIES) as [
    BlogCategory,
    (typeof BLOG_CATEGORIES)[BlogCategory],
  ][];

  return (
    <>
      <PageHero
        title="Addiction Treatment Blog"
        subtitle="Expert-written articles on recovery, mental health, family support, and local resources across Southern California."
      />

      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        />
      </div>

      {/* Latest Posts */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-10">
            Latest Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {categories.map(([key, meta], idx) => {
        const posts = getBlogPostsByCategory(key).slice(0, 4);
        if (posts.length === 0) return null;

        return (
          <section
            key={key}
            className={`py-16 sm:py-20 ${idx % 2 === 1 ? 'bg-slate-50' : ''}`}
          >
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {meta.label}
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-600">
                    {meta.description}
                  </p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Banner */}
      <CTABanner />

      {/* CollectionPage JSON-LD */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Addiction Treatment Blog',
          description:
            'Expert articles on addiction treatment, recovery, and mental health resources in Southern California.',
          url: `${SITE_CONFIG.url}/blog`,
          publisher: {
            '@type': 'Organization',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          numberOfItems: allBlogPosts.length,
        }}
      />
    </>
  );
}
