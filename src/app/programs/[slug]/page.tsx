import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle,
  ListChecks,
  Sparkles,
  Users,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import {
  programs,
  getProgramBySlug,
  getAllProgramSlugs,
} from '@/data/programs';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllProgramSlugs().map((slug) => ({ slug }));
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
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return generatePageMetadata({
    title: program.metaTitle,
    description: program.metaDescription,
    path: `/programs/${slug}`,
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  // Related programs -- look up by slug and filter out any that don't exist
  const relatedPrograms = program.relatedPrograms
    .map((s) => programs.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title={program.name}
        subtitle={program.tagline}
        backgroundImage={program.heroImage}
      />

      {/* 2. Breadcrumbs */}
      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Treatment Programs', href: '/programs' },
            { label: program.name },
          ]}
        />
      </div>

      {/* 3. Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <article className="prose prose-lg mx-auto text-slate-600">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              About {program.name}
            </h2>
            {program.description.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      {/* 4. Who Is This For */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Who Is This Program For?
            </h2>
          </div>
          <ul className="space-y-4">
            {program.whoIsItFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal-500" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. What to Expect */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <ListChecks className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              What to Expect
            </h2>
          </div>
          <ol className="space-y-4">
            {program.whatToExpect.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                  {i + 1}
                </span>
                <span className="text-slate-600 pt-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Treatment Modalities */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-8">
            Treatment Modalities
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {program.modalities.map((modality, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-slate-700 text-sm leading-relaxed">
                  {modality}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Benefits */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center mb-10">
            Benefits of {program.shortName}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {program.benefits.map((benefit, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-lg font-bold text-teal-600">
                  {i + 1}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center mb-10">
              Related Programs
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPrograms.map(
                (rp) =>
                  rp && (
                    <ProgramCard
                      key={rp.slug}
                      name={rp.name}
                      slug={rp.slug}
                      tagline={rp.tagline}
                      icon={rp.icon}
                      duration={rp.duration}
                    />
                  ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQ */}
      {program.faqs.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={program.faqs} />
            <JsonLd data={generateFAQSchema(program.faqs)} />
          </div>
        </section>
      )}

      {/* 10. CTA Banner */}
      <CTABanner />

      {/* 11. Service structured data */}
      <JsonLd
        data={generateServiceSchema({
          name: program.name,
          description: program.metaDescription,
          url: `${SITE_CONFIG.url}/programs/${program.slug}`,
        })}
      />
    </>
  );
}
