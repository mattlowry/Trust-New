import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';

import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import { citiesByCounty } from '@/data/cities';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Areas Served | Addiction Treatment in Southern California',
  description:
    'Trust SoCal provides drug and alcohol rehab services across Southern California. Serving Orange County, Los Angeles County, and San Diego County from our Fountain Valley treatment center. Call (949) 280-8360.',
  path: '/areas-served',
});

// ---------------------------------------------------------------------------
// County display order & colors
// ---------------------------------------------------------------------------

const countyOrder = [
  'orange-county',
  'los-angeles-county',
  'san-diego-county',
] as const;

const countyDescriptions: Record<string, string> = {
  'orange-county':
    'Our home county. Trust SoCal is centrally located in Fountain Valley, providing convenient access to residents across all of Orange County.',
  'los-angeles-county':
    'We serve residents throughout Los Angeles County. Our Fountain Valley location is easily accessible via the 405, 5, and 91 freeways.',
  'san-diego-county':
    'San Diego County residents benefit from our residential treatment programs. The I-5 corridor provides direct access to our facility in Orange County.',
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AreasServedPage() {
  const totalCities = countyOrder.reduce(
    (sum, key) => sum + citiesByCounty[key].cities.length,
    0
  );

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <PageHero
        title="Areas We Serve"
        subtitle="JCAHO-accredited addiction treatment serving Southern California"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Areas Served' }]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Serving {totalCities}+ Communities Across Southern California
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-slate-600">
              Trust SoCal is centrally located in Fountain Valley, California,
              providing convenient access to individuals and families across
              Orange County, Los Angeles County, and San Diego County. Our
              JCAHO-accredited treatment center at{' '}
              <span className="font-medium text-slate-800">
                {SITE_CONFIG.address.full}
              </span>{' '}
              offers medical detox, residential treatment, partial
              hospitalization, intensive outpatient, and dual diagnosis programs
              for residents throughout Southern California.
            </p>
            <div className="mt-8">
              <a
                href={SITE_CONFIG.phone.href}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                Call {SITE_CONFIG.phone.formatted}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* County Sections */}
      {countyOrder.map((countySlug, index) => {
        const { label, cities } = citiesByCounty[countySlug];
        const isEven = index % 2 === 0;

        return (
          <section
            key={countySlug}
            className={`py-20 ${isEven ? 'bg-slate-50' : ''}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {label}
                </h2>
                <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
                  {countyDescriptions[countySlug]}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  {cities.length} cities served
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas-served/${city.slug}`}
                    className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        ~{city.driveTime} &middot; {city.distanceMiles} mi
                      </p>
                    </div>
                    <ArrowRight className="ml-auto mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
