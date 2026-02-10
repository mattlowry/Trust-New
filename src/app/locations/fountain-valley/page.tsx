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
  title: 'Drug & Alcohol Rehab in Fountain Valley, CA',
  description:
    'Trust SoCal is located in Fountain Valley, CA, offering drug and alcohol rehab, medical detox, residential treatment, and outpatient programs. JCAHO accredited. Call (949) 280-8360.',
  path: '/locations/fountain-valley',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there an addiction treatment center in Fountain Valley?',
    answer:
      'Yes. Trust SoCal is located right in Fountain Valley at 16537 Elm Cir, Fountain Valley, CA 92708. As a JCAHO-accredited treatment center, we offer medical detox, residential treatment, partial hospitalization (PHP), and intensive outpatient (IOP) programs directly in the Fountain Valley community.',
  },
  {
    question: 'What types of rehab programs are available in Fountain Valley?',
    answer:
      'Trust SoCal offers a full continuum of care in Fountain Valley, including medical detoxification, residential/inpatient treatment, partial hospitalization (PHP), intensive outpatient (IOP), and dual diagnosis treatment for co-occurring mental health conditions. All programs are evidence-based and individualized.',
  },
  {
    question: 'Does Trust SoCal accept insurance for rehab in Fountain Valley?',
    answer:
      'Yes, Trust SoCal accepts most major health insurance plans including PPO policies from providers such as Aetna, Blue Cross Blue Shield, Cigna, United Healthcare, and others. Our admissions team provides free, confidential insurance verification to help you understand your coverage.',
  },
  {
    question: 'How do I get started with treatment at Trust SoCal in Fountain Valley?',
    answer:
      'Getting started is simple. Call our admissions team at (949) 280-8360 any time, 24/7. We will conduct a confidential pre-assessment, verify your insurance, and help coordinate your admission. Same-day or next-day admissions are often available for individuals in crisis.',
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

export default function FountainValleyPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab in Fountain Valley, CA"
        subtitle="Our home city -- evidence-based addiction treatment steps from your door"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Fountain Valley' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment in the Heart of Fountain Valley
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Trust SoCal is proud to call Fountain Valley home. Our treatment
                center is located at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                , right in the heart of this quiet, family-friendly Orange County
                community. For Fountain Valley residents, accessing world-class
                addiction treatment has never been easier -- our facility is within
                walking distance of many neighborhoods in the city.
              </p>
              <p>
                As a JCAHO-accredited treatment center, we provide the highest
                standard of addiction care available. Our clinical team includes
                board-certified physicians, licensed therapists, and experienced
                counselors who specialize in treating substance use disorders and
                co-occurring mental health conditions. Being located in Fountain
                Valley means clients can stay close to their families, support
                systems, and local recovery community throughout treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us from Fountain Valley */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Trust SoCal in Fountain Valley
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Choosing a rehab center in your own city eliminates one of the
                biggest barriers to getting help: distance. There is no long drive,
                no flight, and no unfamiliar city to navigate. At Trust SoCal,
                Fountain Valley residents can begin treatment the same day they
                decide to get help.
              </p>
              <p>
                Our location on Elm Circle offers a peaceful, residential setting
                that feels like a sanctuary rather than a clinical facility. The
                quiet streets and well-maintained surroundings of Fountain Valley
                provide exactly the kind of calm environment that supports early
                recovery. Families can visit easily, participate in family therapy
                sessions, and stay involved in their loved one&apos;s treatment
                without major disruptions to daily life.
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
              Trust SoCal offers a full continuum of care designed to meet you
              wherever you are in your recovery journey. Each program is
              individualized to address your unique needs, challenges, and goals.
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
                Common questions about addiction treatment in Fountain Valley.
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
