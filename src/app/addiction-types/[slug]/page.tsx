import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  HeartPulse,
  Pill,
  Stethoscope,
  BarChart3,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { AddictionTypeCard } from '@/components/ui/AddictionTypeCard';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema, generateServiceSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import {
  addictionTypes,
  getAddictionTypeBySlug,
  getAllAddictionTypeSlugs,
} from '@/data/addiction-types';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllAddictionTypeSlugs().map((slug) => ({ slug }));
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
  const type = getAddictionTypeBySlug(slug);
  if (!type) return {};
  return generatePageMetadata({
    title: type.metaTitle,
    description: type.metaDescription,
    path: `/addiction-types/${slug}`,
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function AddictionTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = getAddictionTypeBySlug(slug);

  if (!type) {
    notFound();
  }

  // Related types -- look up by slug and filter out any that don't exist
  const relatedTypes = type.relatedTypes
    .map((s) => addictionTypes.find((t) => t.slug === s))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title={type.name}
        subtitle="Compassionate, evidence-based treatment for lasting recovery"
        backgroundImage={type.heroImage}
      />

      {/* 2. Breadcrumbs */}
      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Addiction Types', href: '/addiction-types' },
            { label: type.name },
          ]}
        />
      </div>

      {/* 3. What Is [Substance] Addiction? */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <article className="prose prose-lg mx-auto text-slate-600">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              What Is {type.substanceName} Addiction?
            </h2>
            {type.description.split('\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      {/* 4. Signs & Symptoms */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="h-7 w-7 text-secondary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Signs &amp; Symptoms
            </h2>
          </div>
          <p className="text-slate-600 mb-6">
            Recognizing the signs of {type.substanceName.toLowerCase()} addiction
            is the first step toward getting help. Common indicators include:
          </p>
          <ul className="space-y-3">
            {type.signs.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                <span className="text-slate-600">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Health Effects */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <HeartPulse className="h-7 w-7 text-destructive flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Health Effects
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {type.healthEffects.map((effect, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-semibold text-red-600">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-600">
                  {effect}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Withdrawal & Detox */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <Pill className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Withdrawal &amp; Detox
            </h2>
          </div>
          <div className="prose prose-lg text-slate-600">
            <p>{type.withdrawalInfo}</p>
          </div>
        </div>
      </section>

      {/* 7. Treatment at Trust SoCal */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-3 mb-8">
            <Stethoscope className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Treatment at Trust SoCal
            </h2>
          </div>
          <div className="prose prose-lg text-slate-600">
            <p>{type.treatmentApproach}</p>
          </div>
        </div>
      </section>

      {/* 8. Statistics */}
      {type.statistics.length > 0 && (
        <section className="bg-teal-900 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-center gap-3 mb-10">
              <BarChart3 className="h-7 w-7 text-teal-200 flex-shrink-0" />
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Key Statistics
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {type.statistics.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
                >
                  <p className="text-sm leading-relaxed text-teal-100">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Types */}
      {relatedTypes.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl text-center mb-10">
              Related Addiction Types
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTypes.map(
                (rt) =>
                  rt && (
                    <AddictionTypeCard
                      key={rt.slug}
                      name={rt.name}
                      slug={rt.slug}
                      description={rt.description}
                    />
                  ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      {type.faqs.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={type.faqs} />
            <JsonLd data={generateFAQSchema(type.faqs)} />
          </div>
        </section>
      )}

      {/* 11. CTA Banner */}
      <CTABanner />

      {/* Service structured data */}
      <JsonLd
        data={generateServiceSchema({
          name: `${type.name} Treatment`,
          description: type.metaDescription,
          url: `${SITE_CONFIG.url}/addiction-types/${type.slug}`,
        })}
      />
    </>
  );
}
