import Link from 'next/link';
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { JsonLd } from '@/components/ui/JsonLd';

import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Drug & Alcohol Rehab Near Costa Mesa, CA',
  description:
    'Trust SoCal offers drug and alcohol rehab near Costa Mesa, CA. Just a 15-minute drive. JCAHO-accredited medical detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/costa-mesa',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a rehab near Costa Mesa, CA?',
    answer:
      'Yes. Trust SoCal is located in Fountain Valley, approximately 15 minutes from Costa Mesa. Our JCAHO-accredited facility offers a full continuum of addiction treatment services including medical detox, residential treatment, PHP, IOP, and dual diagnosis care -- all within easy reach of the Costa Mesa community.',
  },
  {
    question: 'How far is Trust SoCal from Costa Mesa?',
    answer:
      'Trust SoCal is approximately a 15-minute drive from Costa Mesa, located at 16537 Elm Cir, Fountain Valley, CA 92708. The facility is easily reached via the 405 or 55 freeways, or through surface streets such as Harbor Boulevard.',
  },
  {
    question: 'Why should Costa Mesa residents choose Trust SoCal?',
    answer:
      'Costa Mesa is known as a hub for the recovery community in Orange County, and Trust SoCal complements that culture with JCAHO-accredited clinical treatment. Our proximity to Costa Mesa means clients can access medical detox and residential care while remaining connected to Costa Mesa\'s robust sober living and recovery support networks after completing primary treatment.',
  },
  {
    question: 'Does Trust SoCal offer step-down care for Costa Mesa residents?',
    answer:
      'Yes. Trust SoCal offers a seamless step-down from residential treatment to PHP and IOP, allowing Costa Mesa residents to transition from intensive care to flexible outpatient treatment while living at home or in a sober living environment. Our aftercare planning also connects clients with local Costa Mesa recovery resources.',
  },
];

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const programs = [
  'Medical Detoxification',
  'Residential / Inpatient Treatment',
  'Partial Hospitalization Program (PHP)',
  'Intensive Outpatient Program (IOP)',
  'Dual Diagnosis Treatment',
  'Medication-Assisted Treatment (MAT)',
  'Individual & Group Therapy',
  'Family Therapy Program',
  'Aftercare & Alumni Support',
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function CostaMesaPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Costa Mesa, CA"
        subtitle="JCAHO-accredited addiction treatment just 15 minutes from Costa Mesa's recovery community"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Costa Mesa' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Costa Mesa
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Costa Mesa has long been recognized as one of the strongest
                recovery communities in Orange County, with an established network
                of sober living homes, 12-step meetings, and recovery support
                services. Trust SoCal is located just a 15-minute drive from
                Costa Mesa at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                , providing the clinical treatment component that complements
                Costa Mesa&apos;s vibrant recovery ecosystem.
              </p>
              <p>
                Our JCAHO-accredited facility offers medical detox, residential
                treatment, and outpatient programs that give Costa Mesa residents
                access to the highest level of addiction care without traveling far
                from home. Whether you are taking the first step toward sobriety
                or looking for structured step-down care after completing primary
                treatment elsewhere, Trust SoCal is here to support your recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Trust SoCal from Costa Mesa
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Costa Mesa residents understand recovery culture, and Trust SoCal
                matches that understanding with clinical depth. Our treatment
                programs are designed to provide the medical supervision,
                therapeutic interventions, and structured environment that are
                essential during the early stages of recovery -- the foundation
                upon which long-term sobriety is built.
              </p>
              <p>
                Our proximity to Costa Mesa also means that clients who complete
                residential treatment at Trust SoCal can easily transition into
                the Costa Mesa recovery community for ongoing sober living,
                outpatient appointments, and peer support. This continuity of
                care between clinical treatment and community-based recovery
                dramatically improves long-term outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Treatment Programs Available
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              From medically supervised detox through outpatient care, Trust SoCal
              provides Costa Mesa residents with every level of addiction treatment
              they may need.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-slate-700">{program}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                View All Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Common questions about drug and alcohol rehab near Costa Mesa.
              </p>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
              Contact Trust SoCal
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                <p className="text-sm text-slate-600">{SITE_CONFIG.address.full}</p>
              </div>
              <div className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Phone className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                <a
                  href={SITE_CONFIG.phone.href}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  {SITE_CONFIG.phone.formatted}
                </a>
              </div>
              <div className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Clock className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Hours</h3>
                <p className="text-sm text-slate-600">
                  {SITE_CONFIG.hours.description}, 7 Days a Week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
