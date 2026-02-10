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
  title: 'Drug & Alcohol Rehab Near Irvine, CA',
  description:
    'Trust SoCal provides drug and alcohol rehab near Irvine, CA. Just a 20-minute drive from Irvine. JCAHO-accredited detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/irvine',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a drug rehab near Irvine, CA?',
    answer:
      'Yes. Trust SoCal is located in Fountain Valley, approximately 20 minutes from Irvine via the 405 or 55 freeways. Our JCAHO-accredited treatment center offers medical detox, residential treatment, PHP, IOP, and specialized dual diagnosis care for Irvine residents.',
  },
  {
    question: 'How far is Trust SoCal from Irvine?',
    answer:
      'Trust SoCal is approximately a 20-minute drive from Irvine, located at 16537 Elm Cir, Fountain Valley, CA 92708. The facility is easily accessible via the 405 freeway heading north or the 55 freeway heading west.',
  },
  {
    question: 'Does Trust SoCal accept insurance from Irvine-area employers?',
    answer:
      'Trust SoCal accepts most major PPO insurance plans, including those commonly offered by employers in the Irvine business community. Our admissions team provides free, confidential insurance verification so you can understand your benefits before beginning treatment.',
  },
  {
    question: 'What makes Trust SoCal a good choice for Irvine residents?',
    answer:
      'Irvine residents benefit from Trust SoCal\'s proximity, JCAHO accreditation, evidence-based clinical programs, and full continuum of care. Staying local for treatment allows families to participate in therapy sessions and helps clients maintain connections to their Irvine-based support systems throughout recovery.',
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

export default function IrvinePage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Irvine, CA"
        subtitle="JCAHO-accredited addiction treatment just 20 minutes from Irvine"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Irvine' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Irvine
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Irvine is one of Orange County&apos;s most populous and
                fast-growing cities, home to a large professional community,
                major universities, and diverse neighborhoods. Despite its
                reputation for safety and planning, Irvine residents are not
                immune to the challenges of substance use disorders. Trust SoCal
                provides comprehensive addiction treatment approximately 20
                minutes from Irvine at our Fountain Valley facility, located at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                .
              </p>
              <p>
                Our evidence-based programs are designed for professionals,
                students, and families who need effective addiction treatment
                without traveling far from home. From medical detox through
                outpatient care, Trust SoCal offers every level of treatment
                Irvine residents may need, all delivered by a multidisciplinary
                team of licensed clinicians and board-certified physicians.
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
              Why Choose Trust SoCal from Irvine
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Many Irvine residents are working professionals or students who
                need a treatment center that understands their unique
                circumstances. Trust SoCal offers flexible programming, including
                outpatient options that allow individuals to continue meeting
                professional and academic responsibilities while receiving
                structured treatment.
              </p>
              <p>
                Our JCAHO accreditation, experienced clinical team, and
                individualized treatment plans provide the level of care that
                discerning Irvine families expect. We focus on treating not just
                the addiction but also the underlying mental health conditions,
                trauma, and behavioral patterns that drive substance use. The
                result is a comprehensive treatment experience that prepares
                clients for sustainable, long-term recovery.
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
              Trust SoCal provides Irvine residents with a full spectrum of
              addiction treatment services, each tailored to the individual&apos;s
              clinical needs and personal goals.
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
                Common questions about drug and alcohol rehab near Irvine.
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
