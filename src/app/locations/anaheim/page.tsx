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
  title: 'Drug & Alcohol Rehab Near Anaheim, CA',
  description:
    'Trust SoCal provides drug and alcohol rehab near Anaheim, CA. Approximately 20 minutes away. JCAHO-accredited medical detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/anaheim',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a drug rehab near Anaheim?',
    answer:
      'Yes. Trust SoCal is located in Fountain Valley, approximately 20 minutes from Anaheim via the 5 or 22 freeways. Our JCAHO-accredited treatment center provides medical detox, residential treatment, partial hospitalization, intensive outpatient, and dual diagnosis programs for Anaheim residents.',
  },
  {
    question: 'How far is Trust SoCal from Anaheim?',
    answer:
      'Trust SoCal is approximately a 20-minute drive from Anaheim, located at 16537 Elm Cir, Fountain Valley, CA 92708. The most direct routes are via the 22 freeway heading west or the 5 freeway south to the 405 freeway.',
  },
  {
    question: 'Can Anaheim residents attend outpatient treatment at Trust SoCal?',
    answer:
      'Yes. Trust SoCal offers both Partial Hospitalization (PHP) and Intensive Outpatient (IOP) programs that are well-suited for Anaheim residents who want to receive structured treatment while living at home. The 20-minute commute makes it practical to attend programming during the day and return home in the evening.',
  },
  {
    question: 'Does Trust SoCal treat opioid addiction for Anaheim residents?',
    answer:
      'Yes. Trust SoCal specializes in treating opioid use disorders, including addiction to heroin, fentanyl, and prescription painkillers. Our programs include Medication-Assisted Treatment (MAT) with FDA-approved medications, evidence-based therapy, and comprehensive aftercare planning.',
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

export default function AnaheimPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Anaheim, CA"
        subtitle="JCAHO-accredited addiction treatment approximately 20 minutes from Anaheim"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Anaheim' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Anaheim
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Anaheim is one of the largest cities in Orange County, and its
                diverse population includes many individuals and families affected
                by substance use disorders. Trust SoCal is located approximately
                20 minutes south of Anaheim in Fountain Valley at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                , providing convenient access to JCAHO-accredited addiction
                treatment for north Orange County residents.
              </p>
              <p>
                Whether you are dealing with alcohol addiction, opioid
                dependence, stimulant use, or polydrug use, our clinical team has
                the experience and credentials to help. We treat every client as
                an individual, building personalized treatment plans that address
                the specific substances involved, any co-occurring mental health
                conditions, and the life circumstances that contribute to
                addictive behavior.
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
              Why Choose Trust SoCal from Anaheim
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Anaheim residents choosing Trust SoCal benefit from our
                comprehensive approach to addiction treatment. Our facility
                provides a quiet, therapeutic environment that is a welcome
                contrast to the busy urban settings of north Orange County,
                giving clients the space they need to focus entirely on their
                recovery.
              </p>
              <p>
                At just 20 minutes away, Trust SoCal remains close enough for
                Anaheim families to stay involved in the treatment process. Our
                family therapy program, regular visiting opportunities, and
                family education workshops are all designed to help loved ones
                understand addiction and support recovery. Research consistently
                shows that family involvement is one of the strongest predictors
                of long-term sobriety.
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
              Trust SoCal offers Anaheim residents a full continuum of care, from
              medically supervised detox through long-term outpatient support and
              aftercare programming.
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
                Common questions about drug and alcohol rehab near Anaheim.
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
