import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';

import { generatePageMetadata } from '@/lib/metadata';
import { generateLocalBusinessSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Locations | Addiction Treatment in Orange County',
  description:
    'Trust SoCal provides drug and alcohol rehab services throughout Orange County, CA. Located in Fountain Valley, we serve Huntington Beach, Costa Mesa, Irvine, Santa Ana, Anaheim, Newport Beach, and surrounding cities.',
  path: '/locations',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const cityPages = [
  {
    name: 'Fountain Valley',
    slug: 'fountain-valley',
    label: 'Our Home City',
    distance: 'Walking distance',
  },
  {
    name: 'Orange County',
    slug: 'orange-county',
    label: 'County-Wide Coverage',
    distance: 'Serving all of OC',
  },
  {
    name: 'Huntington Beach',
    slug: 'huntington-beach',
    label: 'Beach Community',
    distance: '~10 min drive',
  },
  {
    name: 'Costa Mesa',
    slug: 'costa-mesa',
    label: 'Recovery Community',
    distance: '~15 min drive',
  },
  {
    name: 'Irvine',
    slug: 'irvine',
    label: 'South OC Access',
    distance: '~20 min drive',
  },
  {
    name: 'Santa Ana',
    slug: 'santa-ana',
    label: 'Central OC',
    distance: '~15 min drive',
  },
  {
    name: 'Anaheim',
    slug: 'anaheim',
    label: 'North OC Access',
    distance: '~20 min drive',
  },
  {
    name: 'Newport Beach',
    slug: 'newport-beach',
    label: 'Coastal Setting',
    distance: '~15 min drive',
  },
];

const allCitiesServed = [
  'Fountain Valley',
  'Huntington Beach',
  'Costa Mesa',
  'Newport Beach',
  'Irvine',
  'Santa Ana',
  'Anaheim',
  'Garden Grove',
  'Westminster',
  'Orange',
  'Fullerton',
  'Tustin',
  'Lake Forest',
  'Mission Viejo',
  'Laguna Beach',
  'Laguna Niguel',
  'Seal Beach',
  'Cypress',
  'Buena Park',
  'Yorba Linda',
  'Brea',
  'San Clemente',
  'Dana Point',
  'Aliso Viejo',
  'Placentia',
  'La Habra',
  'Rancho Santa Margarita',
  'San Juan Capistrano',
  'Stanton',
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function LocationsPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />

      {/* Hero */}
      <PageHero
        title="Our Locations"
        subtitle="Serving all of Orange County from our Fountain Valley treatment center"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Locations' },
          ]}
        />
      </div>

      {/* Service Area Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Addiction Treatment Across Orange County
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-slate-600">
              Trust SoCal is centrally located in Fountain Valley, California,
              providing convenient access to individuals and families throughout
              Orange County. Our treatment center at{' '}
              <span className="font-medium text-slate-800">
                {SITE_CONFIG.address.full}
              </span>{' '}
              is easily accessible from major freeways including the 405, 22, and
              55, making it simple to reach us from any city in the county. Whether
              you are in Huntington Beach, Costa Mesa, Irvine, or Anaheim, quality
              addiction treatment is just a short drive away.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Our Address</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {SITE_CONFIG.address.full}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Call Us</h3>
                <a
                  href={SITE_CONFIG.phone.href}
                  className="mt-1 block text-sm text-primary hover:text-primary/80"
                >
                  {SITE_CONFIG.phone.formatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Hours</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Available {SITE_CONFIG.hours.description}, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Us on the Map
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              Centrally located in Fountain Valley with easy access from the 405,
              22, and 55 freeways.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Trust SoCal Location - 16537 Elm Cir, Fountain Valley, CA 92708"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5!2d-117.9533!3d33.7175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s16537+Elm+Cir%2C+Fountain+Valley%2C+CA+92708!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* City Pages Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Areas We Serve
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              Learn more about our addiction treatment services available to
              residents in these Orange County communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cityPages.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{city.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{city.distance}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities Served */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              All Cities We Serve
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              Trust SoCal welcomes clients from across Orange County and beyond. If
              your city is not listed below, call us -- we likely serve your area.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 md:grid-cols-4">
              {allCitiesServed.map((city) => (
                <p key={city} className="text-sm text-slate-600">
                  {city}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
