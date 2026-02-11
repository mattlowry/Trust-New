import type { MetadataRoute } from 'next';

import { getAllBlogSlugs } from '@/data/blog';

const BASE_URL = 'https://www.trustsocal.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // -------------------------------------------------------------------------
  // Homepage
  // -------------------------------------------------------------------------
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // -------------------------------------------------------------------------
  // Main Pages (priority 0.8)
  // -------------------------------------------------------------------------
  const mainPages = [
    '/about-us',
    '/programs',
    '/addiction-types',
    '/contact',
    '/insurance',
    '/admissions',
    '/our-team',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // -------------------------------------------------------------------------
  // Program Pages (priority 0.7)
  // -------------------------------------------------------------------------
  const programPages = [
    '/programs/detox',
    '/programs/residential',
    '/programs/dual-diagnosis',
    '/programs/trauma',
    '/programs/family',
    '/programs/aftercare',
    '/programs/iop',
    '/programs/php',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // -------------------------------------------------------------------------
  // Addiction Type Pages (priority 0.7)
  // -------------------------------------------------------------------------
  const addictionPages = [
    '/addiction-types/alcohol',
    '/addiction-types/opioids',
    '/addiction-types/heroin',
    '/addiction-types/fentanyl',
    '/addiction-types/methamphetamine',
    '/addiction-types/cocaine',
    '/addiction-types/benzodiazepines',
    '/addiction-types/prescription-drugs',
    '/addiction-types/marijuana',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // -------------------------------------------------------------------------
  // Location Pages (priority 0.6)
  // -------------------------------------------------------------------------
  const locationPages = [
    '/locations',
    '/locations/fountain-valley',
    '/locations/orange-county',
    '/locations/huntington-beach',
    '/locations/costa-mesa',
    '/locations/irvine',
    '/locations/santa-ana',
    '/locations/anaheim',
    '/locations/newport-beach',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // -------------------------------------------------------------------------
  // Blog Pages (priority 0.6 - 0.8)
  // -------------------------------------------------------------------------
  const blogListing: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogPostPages = getAllBlogSlugs().map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // -------------------------------------------------------------------------
  // Legal / Utility Pages (priority 0.3)
  // -------------------------------------------------------------------------
  const legalPages = [
    '/privacy-policy',
    '/terms-of-service',
    '/careers',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [
    ...homepage,
    ...mainPages,
    ...programPages,
    ...addictionPages,
    ...locationPages,
    ...blogListing,
    ...blogPostPages,
    ...legalPages,
  ];
}
