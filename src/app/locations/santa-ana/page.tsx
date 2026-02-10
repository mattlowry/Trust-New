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
  title: 'Drug & Alcohol Rehab Near Santa Ana, CA',
  description:
    'Trust SoCal provides drug and alcohol rehab near Santa Ana, CA. Just a 15-minute drive. JCAHO-accredited medical detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/santa-ana',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a rehab center near Santa Ana?',
    answer:
      'Yes. Trust SoCal is located in Fountain Valley, approximately 15 minutes from Santa Ana. Our JCAHO-accredited facility provides medical detox, residential treatment, PHP, IOP, and dual diagnosis programs that are easily accessible to Santa Ana residents via the 405 or 55 freeways.',
  },
  {
    question: 'How far is Trust SoCal from Santa Ana?',
    answer:
      'Trust SoCal is approximately a 15-minute drive from Santa Ana, located at 16537 Elm Cir, Fountain Valley, CA 92708. The facility is conveniently located near the interchange of the 405 and 22 freeways, making it easy to reach from central Santa Ana.',
  },
  {
    question: 'Does Trust SoCal offer bilingual treatment for Santa Ana residents?',
    answer:
      'Trust SoCal recognizes the diverse needs of the Santa Ana community. Our clinical staff includes bilingual team members, and we strive to ensure that language is never a barrier to receiving quality addiction treatment. Contact our admissions team to discuss specific language needs.',
  },
  {
    question: 'What insurance plans does Trust SoCal accept for Santa Ana residents?',
    answer:
      'Trust SoCal accepts most major PPO insurance plans, including Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, and others. We also offer Medi-Cal referral assistance for residents who need additional support. Our admissions team provides free, confidential insurance verification.',
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

export default function SantaAnaPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Santa Ana, CA"
        subtitle="JCAHO-accredited addiction treatment just 15 minutes from downtown Santa Ana"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Santa Ana' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Santa Ana
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                As the county seat of Orange County and one of its most populous
                cities, Santa Ana is a vibrant, diverse community with deep roots
                and a strong sense of identity. Trust SoCal is proud to serve
                Santa Ana residents from our Fountain Valley treatment center,
                located just a 15-minute drive away at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                .
              </p>
              <p>
                We understand that accessing addiction treatment can be
                challenging, and our goal is to make the process as seamless as
                possible. Our admissions team handles insurance verification,
                clinical pre-assessments, and logistics so that Santa Ana
                residents and their families can focus on what matters most:
                beginning the recovery journey. Same-day admissions are often
                available for individuals in crisis.
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
              Why Choose Trust SoCal from Santa Ana
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Trust SoCal is committed to providing culturally competent,
                evidence-based care that meets the needs of Santa Ana&apos;s
                diverse community. Our clinical team understands that effective
                addiction treatment must account for cultural background, family
                dynamics, and individual life circumstances.
              </p>
              <p>
                Being just 15 minutes from Santa Ana means that families can
                participate actively in their loved one&apos;s recovery. Our
                family therapy program, visiting hours, and educational workshops
                are designed to be accessible for Santa Ana families. We also work
                closely with local community resources to ensure that clients
                have comprehensive support during and after treatment.
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
              Trust SoCal provides Santa Ana residents with access to a full
              continuum of addiction treatment services, each individualized to
              meet specific clinical needs.
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
                Common questions about drug and alcohol rehab near Santa Ana.
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
