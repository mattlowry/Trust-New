export interface InsuranceProvider {
  name: string;
  slug: string;
  logo?: string;
}

export const insuranceProviders: InsuranceProvider[] = [
  { name: 'Aetna', slug: 'aetna' },
  { name: 'Anthem Blue Cross', slug: 'anthem-blue-cross' },
  { name: 'Blue Shield of California', slug: 'blue-shield-of-california' },
  { name: 'Cigna', slug: 'cigna' },
  { name: 'Humana', slug: 'humana' },
  { name: 'Kaiser Permanente', slug: 'kaiser-permanente' },
  { name: 'Magellan Health', slug: 'magellan-health' },
  { name: 'MHN', slug: 'mhn' },
  { name: 'Optum', slug: 'optum' },
  { name: 'TriCare', slug: 'tricare' },
  { name: 'UnitedHealthcare', slug: 'unitedhealthcare' },
  { name: 'Beacon Health', slug: 'beacon-health' },
];
