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
  title: 'Drug & Alcohol Rehab Near Newport Beach, CA',
  description:
    'Trust SoCal provides drug and alcohol rehab near Newport Beach, CA. Just a 15-minute drive. JCAHO-accredited medical detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/newport-beach',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a drug rehab near Newport Beach?',
    answer:
      'Yes. Trust SoCal is located in Fountain Valley, approximately 15 minutes from Newport Beach. Our JCAHO-accredited facility offers medical detox, residential treatment, PHP, IOP, and dual diagnosis programs in a private, therapeutic setting that Newport Beach residents appreciate.',
  },
  {
    question: 'How far is Trust SoCal from Newport Beach?',
    answer:
      'Trust SoCal is approximately a 15-minute drive from Newport Beach, located at 16537 Elm Cir, Fountain Valley, CA 92708. The drive is convenient via the 405 freeway or Pacific Coast Highway to surface streets.',
  },
  {
    question: 'Does Trust SoCal offer private, confidential treatment for Newport Beach residents?',
    answer:
      'Absolutely. Trust SoCal understands that privacy and confidentiality are paramount. All treatment is conducted in strict compliance with HIPAA regulations and 42 CFR Part 2 federal confidentiality standards. Our residential setting provides a discreet environment where Newport Beach residents can focus on recovery without concern for public exposure.',
  },
  {
    question: 'What types of therapy does Trust SoCal offer near Newport Beach?',
    answer:
      'Trust SoCal offers a comprehensive range of evidence-based therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR, Motivational Interviewing, trauma-focused therapy, family therapy, and group counseling. We also incorporate holistic modalities such as yoga, meditation, and nutritional counseling.',
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

export default function NewportBeachPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Newport Beach, CA"
        subtitle="JCAHO-accredited addiction treatment just 15 minutes from Newport Beach's coastal community"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Newport Beach' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Newport Beach
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Newport Beach is one of Orange County&apos;s most prestigious
                coastal communities, but substance use disorders do not
                discriminate based on zip code or income level. Trust SoCal
                provides discreet, comprehensive addiction treatment just a
                15-minute drive from Newport Beach at our Fountain Valley
                facility, located at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                .
              </p>
              <p>
                We understand that Newport Beach residents often have unique
                concerns about privacy, professionalism, and the quality of their
                treatment experience. Trust SoCal was built to meet those
                expectations. Our JCAHO accreditation, experienced clinical team,
                comfortable residential environment, and strict confidentiality
                standards provide the level of care that discerning individuals
                and families expect. Every aspect of treatment is tailored to the
                individual, from the therapeutic modalities used to the aftercare
                plan developed for life after treatment.
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
              Why Choose Trust SoCal from Newport Beach
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Newport Beach residents seeking addiction treatment deserve a
                facility that matches their expectations for quality,
                professionalism, and discretion. Trust SoCal provides all three,
                along with the clinical depth that drives real, lasting results.
                Our board-certified medical director, licensed therapists, and
                experienced nursing staff deliver individualized care that
                addresses the medical, psychological, and social dimensions of
                addiction.
              </p>
              <p>
                The coastal lifestyle of Newport Beach can present specific
                challenges for individuals in recovery, including social
                environments where alcohol is prevalent and high-pressure
                professional demands. Our clinical team helps clients develop
                practical coping strategies and relapse prevention skills
                specifically tailored to the realities of their daily lives.
                Being just 15 minutes away, we also make it easy for Newport
                Beach families to participate in treatment and support their
                loved one&apos;s recovery.
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
              Trust SoCal offers Newport Beach residents a complete range of
              addiction treatment programs, from medical detox through
              comprehensive aftercare and alumni support.
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
                Common questions about drug and alcohol rehab near Newport Beach.
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
