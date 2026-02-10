// ---------------------------------------------------------------------------
// Trust SoCal -- City Data Types for Areas Served Pages
// ---------------------------------------------------------------------------

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityData {
  /** Display name, e.g. "Huntington Beach" */
  name: string;
  /** URL slug, e.g. "huntington-beach" */
  slug: string;
  /** County name */
  county: 'Orange County' | 'Los Angeles County' | 'San Diego County';
  /** County slug for grouping */
  countySlug: 'orange-county' | 'los-angeles-county' | 'san-diego-county';
  /** Approximate drive time from Fountain Valley */
  driveTime: string;
  /** Approximate distance in miles from Fountain Valley */
  distanceMiles: number;
  /** Compass direction from Fountain Valley */
  direction: string;
  /** Major freeway route(s) to reach Fountain Valley */
  drivingRoute: string;
  /** 2-3 notable local landmarks or features */
  landmarks: string[];
  /** Unique intro paragraph for the city */
  description: string;
  /** Unique "why choose Trust SoCal" paragraph */
  whyChoose: string;
  /** 3-4 city-specific FAQs */
  faqs: CityFAQ[];
  /** Meta description for SEO (max ~160 chars) */
  metaDescription: string;
}
