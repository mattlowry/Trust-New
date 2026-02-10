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
  title: 'Drug & Alcohol Rehab Near Huntington Beach, CA',
  description:
    'Trust SoCal offers drug and alcohol rehab near Huntington Beach, CA. Just a 10-minute drive from Surf City. JCAHO-accredited medical detox, residential, PHP & IOP programs. Call (949) 280-8360.',
  path: '/locations/huntington-beach',
});

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

const faqs = [
  {
    question: 'Is there a drug rehab near Huntington Beach?',
    answer:
      'Yes. Trust SoCal is located in neighboring Fountain Valley, just a 10-minute drive from Huntington Beach. Our JCAHO-accredited facility offers medical detox, residential treatment, PHP, IOP, and dual diagnosis programs that are easily accessible to Huntington Beach residents.',
  },
  {
    question: 'How far is Trust SoCal from Huntington Beach?',
    answer:
      'Trust SoCal is approximately 10 minutes from Huntington Beach by car, located at 16537 Elm Cir, Fountain Valley, CA 92708. The drive is a straight shot via the 405 freeway or surface streets like Brookhurst or Beach Boulevard.',
  },
  {
    question: 'Does Trust SoCal offer outpatient rehab for Huntington Beach residents?',
    answer:
      'Yes. In addition to our residential program, Trust SoCal offers both Partial Hospitalization (PHP) and Intensive Outpatient (IOP) programs that allow Huntington Beach residents to receive structured treatment while continuing to live at home. This is ideal for individuals who have completed residential care or who need a flexible treatment schedule.',
  },
  {
    question: 'Can family members in Huntington Beach participate in treatment?',
    answer:
      'Absolutely. Trust SoCal\'s family therapy program is designed for family members to be actively involved in their loved one\'s recovery. Our Fountain Valley location is close enough for Huntington Beach families to attend sessions, family weekends, and educational workshops without significant travel.',
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

export default function HuntingtonBeachPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <PageHero
        title="Drug & Alcohol Rehab Near Huntington Beach, CA"
        subtitle="JCAHO-accredited addiction treatment just 10 minutes from Surf City"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations', href: '/locations' },
            { label: 'Huntington Beach' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near Huntington Beach
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Huntington Beach is one of Orange County&apos;s most vibrant beach
                communities, but like many coastal cities, it is not immune to the
                impact of substance use disorders. Trust SoCal provides
                comprehensive addiction treatment just a 10-minute drive from
                Huntington Beach at our Fountain Valley facility, located at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                .
              </p>
              <p>
                Our proximity to Huntington Beach means residents can access
                world-class rehab without traveling far from home. Whether you are
                seeking help for yourself or a loved one, our clinical team is
                ready to provide the individualized, evidence-based care that leads
                to lasting recovery. We understand the unique challenges that come
                with living in a beach community where social environments can
                include triggers, and we equip our clients with practical tools to
                navigate those situations successfully.
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
              Why Choose Trust SoCal from Huntington Beach
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                At just 10 minutes away, Trust SoCal is the closest
                JCAHO-accredited treatment center to Huntington Beach. Our
                Fountain Valley location offers a quiet, residential environment
                that provides the separation from daily triggers many clients need
                while remaining close enough for family involvement, which is a
                critical factor in successful long-term recovery.
              </p>
              <p>
                We treat the whole person, not just the addiction. Our
                multidisciplinary team addresses co-occurring mental health
                conditions, trauma, family dynamics, and lifestyle factors that
                contribute to substance use. Huntington Beach residents benefit
                from our full continuum of care, meaning you can progress from
                detox to residential to outpatient without changing facilities or
                clinical teams.
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
              Trust SoCal offers a complete range of addiction treatment programs
              for Huntington Beach residents, from medical detox through long-term
              aftercare support.
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
                Common questions about drug and alcohol rehab near Huntington Beach.
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
