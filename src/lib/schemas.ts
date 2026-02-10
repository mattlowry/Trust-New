// ---------------------------------------------------------------------------
// Trust SoCal -- JSON-LD Structured Data Schema Generators
// ---------------------------------------------------------------------------

import { SITE_CONFIG, ORANGE_COUNTY_CITIES } from '@/lib/constants';

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

/** Generic JSON-LD object. Values are intentionally loose to match schema.org. */
export type JsonLd = Record<string, unknown>;

// ---------------------------------------------------------------------------
// 1. Organization + MedicalBusiness
// ---------------------------------------------------------------------------

export function generateOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalBusiness'],
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone.formatted,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateCode,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.youtube,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone.formatted,
      contactType: 'customer service',
      availableLanguage: ['English', 'Spanish'],
      areaServed: 'US',
    },
    accreditation: SITE_CONFIG.accreditation,
    medicalSpecialty: 'Psychiatric',
    isAcceptingNewPatients: true,
  };
}

// ---------------------------------------------------------------------------
// 2. LocalBusiness (with geo, hours, areaServed)
// ---------------------------------------------------------------------------

export function generateLocalBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    telephone: SITE_CONFIG.phone.formatted,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.stateCode,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: SITE_CONFIG.hours.open,
      closes: SITE_CONFIG.hours.close,
    },
    areaServed: ORANGE_COUNTY_CITIES.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    })),
    priceRange: '$$$',
  };
}

// ---------------------------------------------------------------------------
// 3. FAQPage
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// 4. BreadcrumbList
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// 5. MedicalTherapy (Service)
// ---------------------------------------------------------------------------

export interface ServiceInput {
  name: string;
  description: string;
  url: string;
}

export function generateServiceSchema(service: ServiceInput): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'MedicalBusiness',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    availableService: {
      '@type': 'MedicalProcedure',
      name: service.name,
      description: service.description,
    },
    medicalSpecialty: 'Psychiatric',
  };
}

// ---------------------------------------------------------------------------
// 6. WebSite (with SearchAction)
// ---------------------------------------------------------------------------

export function generateWebSiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
