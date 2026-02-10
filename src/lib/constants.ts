// ---------------------------------------------------------------------------
// Trust SoCal -- Centralized Site Configuration
// ---------------------------------------------------------------------------

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  twitter: string;
  youtube: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  stateCode: string;
  zip: string;
  country: string;
  full: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface Phone {
  raw: string;
  formatted: string;
  href: string;
}

export interface BusinessHours {
  open: string;
  close: string;
  days: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  email: string;
  phone: Phone;
  address: Address;
  geo: GeoCoordinates;
  accreditation: string;
  social: SocialLinks;
  hours: BusinessHours;
  description: string;
  tagline: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'Trust SoCal',
  legalName: 'Trust SoCal',
  url: 'https://www.trustsocal.com',
  email: 'info@trustsocal.com',

  phone: {
    raw: '9492808360',
    formatted: '(949) 280-8360',
    href: 'tel:+19492808360',
  },

  address: {
    street: '16537 Elm Cir',
    city: 'Fountain Valley',
    state: 'California',
    stateCode: 'CA',
    zip: '92708',
    country: 'US',
    full: '16537 Elm Cir, Fountain Valley, CA 92708',
  },

  geo: {
    latitude: 33.7175,
    longitude: -117.9533,
  },

  accreditation: 'JCAHO',

  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
    youtube: '#',
  },

  hours: {
    open: '00:00',
    close: '23:59',
    days: 'Mo-Su',
    description: '24/7',
  },

  description:
    'Premier addiction treatment center in Orange County, California. Evidence-based care, medical detox, residential treatment, and dual diagnosis support.',
  tagline: 'Recovery Starts With Trust',
} as const;

/** Orange County cities frequently referenced for area-served schemas. */
export const ORANGE_COUNTY_CITIES: string[] = [
  'Anaheim',
  'Santa Ana',
  'Irvine',
  'Huntington Beach',
  'Garden Grove',
  'Fountain Valley',
  'Orange',
  'Fullerton',
  'Costa Mesa',
  'Mission Viejo',
  'Westminster',
  'Newport Beach',
  'Lake Forest',
  'Buena Park',
  'Laguna Beach',
  'Laguna Niguel',
  'Tustin',
  'Yorba Linda',
  'San Clemente',
  'Dana Point',
  'Aliso Viejo',
  'Cypress',
  'La Habra',
  'Placentia',
  'Rancho Santa Margarita',
  'San Juan Capistrano',
  'Seal Beach',
  'Stanton',
  'Brea',
] as const;
