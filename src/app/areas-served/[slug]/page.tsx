import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Navigation,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { JsonLd } from '@/components/ui/JsonLd';

import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import {
  getAllCitySlugs,
  getCityBySlug,
  allCities,
} from '@/data/cities';

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return generatePageMetadata({
    title: `Drug & Alcohol Rehab Near ${city.name}, CA`,
    description: city.metaDescription,
    path: `/areas-served/${city.slug}`,
  });
}

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

export default async function AreaServedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  // Find nearby cities in the same county for interlinking
  const nearbyCities = allCities
    .filter(
      (c) =>
        c.slug !== city.slug &&
        c.countySlug === city.countySlug &&
        Math.abs(c.distanceMiles - city.distanceMiles) < 15
    )
    .slice(0, 6);

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(city.faqs)} />

      {/* Hero */}
      <PageHero
        title={`Drug & Alcohol Rehab Near ${city.name}, CA`}
        subtitle={`JCAHO-accredited addiction treatment ${city.driveTime} from ${city.name}`}
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Areas Served', href: '/areas-served' },
            { label: city.name },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Near {city.name}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>{city.description}</p>
              <p>
                Trust SoCal is located at{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.full}
                </span>
                , approximately {city.distanceMiles} miles {city.direction} of{' '}
                {city.name}. Whether you are dealing with alcohol addiction,
                opioid dependence, stimulant use, or co-occurring mental health
                conditions, our clinical team builds personalized treatment plans
                tailored to each individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Driving Directions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Getting to Trust SoCal from {city.name}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />

            {/* Driving Info Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm mb-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <Navigation className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-slate-500">Drive Time</p>
                    <p className="font-semibold text-slate-900">
                      ~{city.driveTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-slate-500">Distance</p>
                    <p className="font-semibold text-slate-900">
                      ~{city.distanceMiles} miles
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-slate-500">Route</p>
                    <p className="font-semibold text-slate-900">
                      {city.drivingRoute}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>{city.whyChoose}</p>
              <p>
                {city.name} is home to notable landmarks including{' '}
                {city.landmarks.slice(0, -1).join(', ')}
                {city.landmarks.length > 1 ? ' and ' : ''}
                {city.landmarks[city.landmarks.length - 1]}. While {city.name}{' '}
                offers many reasons to call it home, residents struggling with
                addiction deserve access to world-class treatment. Trust SoCal
                provides that access with JCAHO-accredited care just{' '}
                {city.driveTime} away.
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
              Treatment Programs for {city.name} Residents
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />
            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Trust SoCal offers {city.name} residents a full continuum of care,
              from medically supervised detox through long-term outpatient
              support and aftercare programming.
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
                Common questions about drug and alcohol rehab near {city.name}.
              </p>
            </div>
            <FAQAccordion faqs={city.faqs} />
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
                Nearby Areas We Serve
              </h2>
              <p className="mt-4 mb-10 text-lg text-slate-600 text-center">
                Trust SoCal also provides addiction treatment services to these
                nearby {city.county} communities.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {nearbyCities.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/areas-served/${nearby.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <span className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                        {nearby.name}
                      </span>
                      <p className="text-xs text-slate-500">
                        ~{nearby.driveTime} from our facility
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center">
              Contact Trust SoCal
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <MapPin className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                <p className="text-sm text-slate-600">
                  {SITE_CONFIG.address.full}
                </p>
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
