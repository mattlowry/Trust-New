import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { ProgramCard } from '@/components/ui/ProgramCard';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema } from '@/lib/schemas';
import { programs } from '@/data/programs';
import { getFAQsByPage } from '@/data/faqs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Addiction Treatment Programs | Detox, Residential & Outpatient',
  description:
    "Explore Trust SoCal's full continuum of addiction treatment programs in Orange County including medical detox, residential, dual diagnosis, IOP, and PHP.",
  path: '/programs',
});

const continuumSteps = [
  { label: 'Detox', description: 'Medical stabilization', slug: 'detox' },
  { label: 'Residential', description: 'Immersive inpatient care', slug: 'residential' },
  { label: 'PHP', description: 'Structured day treatment', slug: 'php' },
  { label: 'IOP', description: 'Flexible outpatient care', slug: 'iop' },
  { label: 'Aftercare', description: 'Ongoing alumni support', slug: 'aftercare' },
];

export default function ProgramsPage() {
  const pageFaqs = getFAQsByPage('programs');

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title="Treatment Programs"
        subtitle="A full continuum of evidence-based care tailored to your recovery journey"
      />

      {/* 2. Breadcrumbs */}
      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Treatment Programs' },
          ]}
        />
      </div>

      {/* 3. Continuum of Care */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Continuum of Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Recovery is not one-size-fits-all. Our step-down model guides you
              from intensive stabilization through independent, supported living.
            </p>
          </div>

          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-start justify-between gap-2">
            {continuumSteps.map((step, index) => (
              <div key={step.slug} className="flex items-start flex-1">
                <Link
                  href={`/programs/${step.slug}`}
                  className="group flex flex-col items-center text-center flex-1"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-xl font-bold text-white shadow-lg group-hover:shadow-xl transition-shadow">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {step.description}
                  </p>
                </Link>

                {index < continuumSteps.length - 1 && (
                  <div className="flex items-center pt-7 px-1 flex-shrink-0">
                    <ArrowRight className="h-5 w-5 text-teal-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="md:hidden space-y-1">
            {continuumSteps.map((step, index) => (
              <div key={step.slug}>
                <Link
                  href={`/programs/${step.slug}`}
                  className="group flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-slate-50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-lg font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {step.label}
                    </h3>
                    <p className="text-sm text-slate-500">{step.description}</p>
                  </div>
                </Link>

                {index < continuumSteps.length - 1 && (
                  <div className="ml-10 flex h-6 items-center">
                    <div className="h-full w-0.5 bg-teal-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Programs Grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              All Treatment Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Each program is designed to address a specific stage or need in
              your recovery journey. Click any program to learn more.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard
                key={program.slug}
                name={program.name}
                slug={program.slug}
                tagline={program.tagline}
                icon={program.icon}
                duration={program.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Treatment Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('/images/generated/programs_therapy_session.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border-l-4 border-primary">
                  <p className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">Clinical Excellence</p>
                  <p className="text-xs text-slate-600">Individualized care plans for every client</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Our Evidence-Based Approach
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-8" />

              <div className="prose prose-lg text-slate-600">
                <p className="mb-6">
                  At Trust SoCal, every treatment plan is grounded in clinical
                  research and tailored to the individual. We integrate
                  evidence-based modalities such as <span className="font-semibold text-primary">Cognitive Behavioral Therapy (CBT)</span>, <span className="font-semibold text-primary">Dialectical Behavior Therapy (DBT)</span>, EMDR, and
                  medication-assisted treatment (MAT) with holistic practices
                  including mindfulness, yoga, and nutritional counseling.
                </p>
                <p>
                  Our multidisciplinary team of physicians, psychiatrists, licensed
                  therapists, and certified counselors collaborates daily to ensure
                  every client receives coordinated, comprehensive care. From the
                  moment you walk through our doors to the day you join our alumni
                  network, we are committed to supporting your recovery with
                  compassion, clinical excellence, and respect for your unique
                  journey.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                  <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                  Trauma-Informed
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Dual Diagnosis
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  Family-Centered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      {pageFaqs.length > 0 && (
        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={pageFaqs} />
            <JsonLd data={generateFAQSchema(pageFaqs)} />
          </div>
        </section>
      )}

      {/* 7. CTA Banner */}
      <CTABanner />
    </>
  );
}
