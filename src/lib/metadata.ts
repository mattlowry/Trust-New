// ---------------------------------------------------------------------------
// Trust SoCal -- Next.js Metadata Helper
// ---------------------------------------------------------------------------

import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export interface PageMetadataProps {
  /** Page title (layout.tsx handles the template / suffix). */
  title: string;
  /** Meta description for the page. */
  description: string;
  /** Path segment relative to site root, e.g. "/about-us". Leading slash optional. */
  path?: string;
  /** Open Graph image path relative to site root. */
  ogImage?: string;
}

/**
 * Generate a complete Next.js `Metadata` object for any page.
 *
 * Usage:
 * ```ts
 * export const metadata = generatePageMetadata({
 *   title: 'About Us',
 *   description: 'Learn about Trust SoCal...',
 *   path: '/about-us',
 * });
 * ```
 */
export function generatePageMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
}: PageMetadataProps): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE_CONFIG.url}${normalizedPath}`;
  const ogImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_CONFIG.url}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_CONFIG.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
