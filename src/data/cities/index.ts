// ---------------------------------------------------------------------------
// Trust SoCal -- Combined City Data Index
// ---------------------------------------------------------------------------

import type { CityData } from './types';
import { orangeCountyCities } from './orange-county';
import { laCountyCities } from './la-county';
import { sanDiegoCountyCities } from './san-diego-county';

export type { CityData, CityFAQ } from './types';

/** All cities across all counties, sorted alphabetically by name. */
export const allCities: CityData[] = [
  ...orangeCountyCities,
  ...laCountyCities,
  ...sanDiegoCountyCities,
].sort((a, b) => a.name.localeCompare(b.name));

/** Grouped by county for display purposes. */
export const citiesByCounty = {
  'orange-county': {
    label: 'Orange County',
    cities: orangeCountyCities.sort((a, b) => a.name.localeCompare(b.name)),
  },
  'los-angeles-county': {
    label: 'Los Angeles County',
    cities: laCountyCities.sort((a, b) => a.name.localeCompare(b.name)),
  },
  'san-diego-county': {
    label: 'San Diego County',
    cities: sanDiegoCountyCities.sort((a, b) => a.name.localeCompare(b.name)),
  },
} as const;

/** Look up a city by its URL slug. */
export function getCityBySlug(slug: string): CityData | undefined {
  return allCities.find((city) => city.slug === slug);
}

/** Get all unique slugs for generateStaticParams(). */
export function getAllCitySlugs(): string[] {
  return allCities.map((city) => city.slug);
}
