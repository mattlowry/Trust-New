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
  'Aliso Viejo',
  'Anaheim',
  'Brea',
  'Buena Park',
  'Costa Mesa',
  'Cypress',
  'Dana Point',
  'Fountain Valley',
  'Fullerton',
  'Garden Grove',
  'Huntington Beach',
  'Irvine',
  'La Habra',
  'La Palma',
  'Laguna Beach',
  'Laguna Hills',
  'Laguna Niguel',
  'Laguna Woods',
  'Lake Forest',
  'Los Alamitos',
  'Mission Viejo',
  'Newport Beach',
  'Orange',
  'Placentia',
  'Rancho Santa Margarita',
  'San Clemente',
  'San Juan Capistrano',
  'Santa Ana',
  'Seal Beach',
  'Stanton',
  'Tustin',
  'Villa Park',
  'Westminster',
  'Yorba Linda',
] as const;

/** Los Angeles County cities served. */
export const LA_COUNTY_CITIES: string[] = [
  'Alhambra',
  'Arcadia',
  'Artesia',
  'Azusa',
  'Baldwin Park',
  'Bell',
  'Bellflower',
  'Beverly Hills',
  'Burbank',
  'Carson',
  'Cerritos',
  'Claremont',
  'Compton',
  'Covina',
  'Culver City',
  'Diamond Bar',
  'Downey',
  'Duarte',
  'El Monte',
  'Gardena',
  'Glendale',
  'Glendora',
  'Hawthorne',
  'Hermosa Beach',
  'Huntington Park',
  'Inglewood',
  'La Mirada',
  'La Verne',
  'Lakewood',
  'Lancaster',
  'Lawndale',
  'Long Beach',
  'Los Angeles',
  'Lynwood',
  'Manhattan Beach',
  'Monrovia',
  'Montebello',
  'Monterey Park',
  'Norwalk',
  'Palmdale',
  'Paramount',
  'Pasadena',
  'Pico Rivera',
  'Pomona',
  'Rancho Palos Verdes',
  'Redondo Beach',
  'Rosemead',
  'San Dimas',
  'San Gabriel',
  'Santa Clarita',
  'Santa Fe Springs',
  'Santa Monica',
  'Signal Hill',
  'South Gate',
  'South Pasadena',
  'Temple City',
  'Torrance',
  'Walnut',
  'West Covina',
  'West Hollywood',
  'Whittier',
] as const;

/** San Diego County cities served. */
export const SAN_DIEGO_COUNTY_CITIES: string[] = [
  'Carlsbad',
  'Chula Vista',
  'Coronado',
  'Del Mar',
  'El Cajon',
  'Encinitas',
  'Escondido',
  'Imperial Beach',
  'La Mesa',
  'Lemon Grove',
  'National City',
  'Oceanside',
  'Poway',
  'San Diego',
  'San Marcos',
  'Santee',
  'Solana Beach',
  'Vista',
] as const;

/** All Southern California cities served. */
export const ALL_SERVED_CITIES: string[] = [
  ...ORANGE_COUNTY_CITIES,
  ...LA_COUNTY_CITIES,
  ...SAN_DIEGO_COUNTY_CITIES,
];
