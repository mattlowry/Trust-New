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
  title: 'Drug & Alcohol Rehab in Orange County, CA',
  description:
    'Trust SoCal provides comprehensive drug and alcohol rehab in Orange County, CA. JCAHO-accredited treatment including medical detox, residential, PHP, and IOP programs. Call (949) 280-8360.',
  path: '/locations/orange-county',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'What is the best drug rehab in Orange County?',
    answer:
      'Trust SoCal is one of Orange County\'s top-rated addiction treatment centers, offering JCAHO-accredited care that includes medical detox, residential treatment, PHP, IOP, and dual diagnosis programs. Our evidence-based approach, experienced clinical team, and individualized treatment plans set us apart from other facilities in the area.',
  },
  {
    question: 'How much does rehab cost in Orange County?',
    answer:
      'The cost of rehab in Orange County varies depending on the level of care needed. Trust SoCal accepts most major PPO insurance plans and offers assistance with insurance verification. Our admissions team will work with you to understand your coverage and explore payment options so that finances do not stand in the way of getting help.',
  },
  {
    question: 'Does Trust SoCal serve all of Orange County?',
    answer:
      'Yes. While our facility is located in Fountain Valley, we serve individuals and families from every city in Orange County, including Huntington Beach, Costa Mesa, Irvine, Santa Ana, Anaheim, Newport Beach, and many more. Our central location provides easy access from anywhere in the county.',
  },
  {
    question: 'What types of addiction does Trust SoCal treat in Orange County?',
    answer:
      'Trust SoCal treats a wide range of substance use disorders including alcohol addiction, opioid addiction (heroin, fentanyl, prescription painkillers), benzodiazepine dependence, stimulant addiction (methamphetamine, cocaine), and polydrug use. We also specialize in dual diagnosis treatment for co-occurring mental health conditions.',
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

export default function OrangeCountyPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab in Orange County, CA"
        subtitle="Comprehensive addiction treatment serving all of Orange County from our Fountain Valley center"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Orange County' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Orange County&apos;s Trusted Addiction Treatment Center
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Trust SoCal is a JCAHO-accredited addiction treatment center
                located in Fountain Valley, serving individuals and families from
                every corner of Orange County. Our central location at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>{' '}
                provides easy freeway access from the 405, 22, 55, 57, and 91,
                making us one of the most conveniently located treatment centers in
                the region.
              </p>
              <p>
                Orange County has one of the highest rates of substance use in
                Southern California, and the need for accessible, high-quality
                treatment has never been greater. Trust SoCal was founded to meet
                that need with evidence-based clinical programs, a compassionate
                team of licensed professionals, and a commitment to treating every
                client as an individual with unique needs and goals. From medical
                detox through aftercare, we provide a full continuum of care
                designed for lasting recovery.
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
              Why Choose Trust SoCal for Orange County Rehab
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Staying local for addiction treatment offers significant
                advantages. Clients remain connected to their families, local
                support networks, and the community they will return to after
                completing treatment. Research consistently shows that family
                involvement improves long-term recovery outcomes, and our Fountain
                Valley location makes it easy for loved ones to participate in
                family therapy sessions and visiting hours.
              </p>
              <p>
                Trust SoCal stands out among Orange County treatment centers
                because of our JCAHO accreditation, our experienced multidisciplinary
                clinical team, and our dedication to evidence-based care. We do not
                take a one-size-fits-all approach. Every treatment plan is built
                around the individual, incorporating the specific therapies,
                medical interventions, and holistic supports that will give them
                the best chance at sustained recovery.
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
              Our full continuum of care ensures that every Orange County resident
              can access the right level of treatment for their needs, from
              crisis-level detox through long-term outpatient support.
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
                Common questions about addiction treatment in Orange County.
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
