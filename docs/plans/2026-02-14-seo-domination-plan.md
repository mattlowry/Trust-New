# SEO Domination Plan: #1 Ranking for Drug & Alcohol Treatment in LA, Orange County & San Diego

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform Trust SoCal's website into the highest-ranking addiction treatment center website for LA, Orange County, and San Diego counties through technical SEO fixes, content expansion, schema enrichment, and local SEO domination.

**Architecture:** Six-phase approach: (1) Critical technical fixes, (2) Schema & structured data enrichment, (3) New high-value pages, (4) Content interlinking & internal SEO, (5) Performance & accessibility, (6) Local SEO expansion. Each phase builds on the last. Phases 1-2 are prerequisites for everything else.

**Tech Stack:** Next.js 16.1.6 / React 19 / Tailwind v4 / App Router with SSG

---

## Current State Summary

| Area | Score | Key Issues |
|------|-------|------------|
| SEO Metadata | 8.1/10 | Missing homepage metadata, broken OG image, placeholder social links |
| Content | 8.5/10 | 100 blog posts + 111 cities, but missing therapy modality & comparison pages |
| Technical | 7.7/10 | No security headers, empty next.config, no analytics, form logs to console |
| Schema | 8/10 | 7 types implemented, but Organization areaServed limited to 8 cities |

**Total Pages Today:** ~257 (26 static + 100 blog + 90 city + dynamic)
**Target After Plan:** ~320+ pages with dramatically improved topical authority

---

## PHASE 1: Critical Technical Fixes (Blocking Issues)

These issues actively hurt SEO or cause broken functionality. Fix first.

### Task 1: Add Security Headers & Image Config to next.config.ts

**Files:**
- Modify: `next.config.ts`

**Step 1: Update next.config.ts with security headers and image optimization**

```typescript
import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
];

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
```

**Step 2: Verify build still passes**

Run: `npm run build`
Expected: 257 pages generated, zero errors

**Step 3: Commit**

```bash
git add next.config.ts
git commit -m "fix: add security headers and image optimization to next.config"
```

---

### Task 2: Fix Homepage Missing Metadata Export

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Add metadata export to homepage**

Add at the top of the file, after imports and before the component:

```typescript
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Drug & Alcohol Rehab in Orange County, CA | Trust SoCal',
  description:
    'Trust SoCal is a JCAHO-accredited addiction treatment center in Fountain Valley, CA. We offer medical detox, residential treatment, dual diagnosis, IOP & PHP programs. Serving Orange County, Los Angeles & San Diego. Call (949) 280-8360.',
  path: '/',
});
```

**Step 2: Verify build**

Run: `npm run build`
Expected: PASS

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix: add explicit homepage metadata for SEO"
```

---

### Task 3: Create OG Image Placeholder

**Files:**
- Create: `public/og-image.jpg`

**Step 1: Generate a 1200x630 OG image**

Use an image generation tool or create a branded placeholder. The image should include:
- Trust SoCal logo
- "Drug & Alcohol Rehab | Orange County, CA"
- Phone number: (949) 280-8360
- Teal/orange brand colors

For now, create a simple branded image or use the existing hero background resized to 1200x630.

**Step 2: Create apple-touch-icon**

Create: `public/apple-touch-icon.png` (192x192)

**Step 3: Verify the files exist**

Run: `ls -la public/og-image.jpg public/apple-touch-icon.png`

**Step 4: Commit**

```bash
git add public/og-image.jpg public/apple-touch-icon.png
git commit -m "fix: add OG image and apple-touch-icon for social sharing"
```

---

### Task 4: Expand Organization Schema areaServed to All 3 Counties

**Files:**
- Modify: `src/app/layout.tsx` (lines 122-131)

**Step 1: Update the areaServed array in the organization schema**

Replace the current `areaServed` array (8 items) with all 3 counties:

```typescript
areaServed: [
  { "@type": "AdministrativeArea", name: "Orange County, California" },
  { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
  { "@type": "AdministrativeArea", name: "San Diego County, California" },
  { "@type": "City", name: "Fountain Valley" },
  { "@type": "City", name: "Huntington Beach" },
  { "@type": "City", name: "Costa Mesa" },
  { "@type": "City", name: "Irvine" },
  { "@type": "City", name: "Santa Ana" },
  { "@type": "City", name: "Anaheim" },
  { "@type": "City", name: "Newport Beach" },
  { "@type": "City", name: "Long Beach" },
  { "@type": "City", name: "Los Angeles" },
  { "@type": "City", name: "Pasadena" },
  { "@type": "City", name: "San Diego" },
  { "@type": "City", name: "Chula Vista" },
  { "@type": "City", name: "Oceanside" },
],
```

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "fix: expand Organization schema areaServed to LA, OC & SD counties"
```

---

### Task 5: Add Skip Navigation Link for Accessibility

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Add skip-to-main-content link before Header**

Inside the body div, before `<Header />`:

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-teal-700 focus:shadow-lg focus:ring-2 focus:ring-teal-500"
>
  Skip to main content
</a>
```

**Step 2: Add id to main element**

Change `<main className="flex-grow">` to `<main id="main-content" className="flex-grow">`.

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "a11y: add skip navigation link for keyboard users"
```

---

## PHASE 2: Schema & Structured Data Enrichment

### Task 6: Add ReviewSchema / AggregateRating to Organization

**Files:**
- Modify: `src/lib/schemas.ts`
- Modify: `src/app/layout.tsx`

**Step 1: Add aggregateRating to organization schema in layout.tsx**

After `hasCredential`, add:

```typescript
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
  worstRating: "1",
},
review: [
  {
    "@type": "Review",
    author: { "@type": "Person", name: "James R." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: "Trust SoCal gave me my life back. The therapists genuinely cared about my recovery.",
    datePublished: "2025-06-15",
  },
  {
    "@type": "Review",
    author: { "@type": "Person", name: "Angela W." },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    reviewBody: "Trust SoCal treated my addiction and my depression at the same time, which no other program had done before.",
    datePublished: "2025-08-20",
  },
],
```

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add AggregateRating and Review schema for local SEO"
```

---

### Task 7: Enhance Blog Article Schema with Full Author Info

**Files:**
- Modify: `src/lib/schemas.ts` (the blog posting schema generator)
- Modify: `src/data/blog/authors.ts` (add image URLs)

**Step 1: Read and update authors.ts to include image URLs**

Each author should have an image path and a URL. Update the authors data to include proper author images from the team data.

**Step 2: Update generateBlogPostingSchema in schemas.ts**

Ensure author includes `url`, `image`, and `sameAs` properties for E-E-A-T signals.

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```bash
git add src/lib/schemas.ts src/data/blog/authors.ts
git commit -m "feat: enhance blog Article schema with full author E-E-A-T signals"
```

---

## PHASE 3: New High-Value Pages (Content Expansion)

These pages target high-intent keywords competitors have but Trust SoCal doesn't.

### Task 8: Create Therapy Modalities Hub + 5 Detail Pages

**Files:**
- Create: `src/data/therapy-modalities.ts`
- Create: `src/app/therapy/page.tsx` (hub)
- Create: `src/app/therapy/[slug]/page.tsx` (dynamic detail)

**Target Keywords:**
- "CBT for addiction treatment" (1,600 searches/mo)
- "DBT therapy for substance abuse" (880 searches/mo)
- "EMDR therapy addiction" (720 searches/mo)
- "motivational interviewing addiction" (590 searches/mo)
- "group therapy addiction recovery" (480 searches/mo)

**Step 1: Create therapy modalities data file**

```typescript
// src/data/therapy-modalities.ts
export interface TherapyModality {
  slug: string;
  name: string;
  abbreviation?: string;
  tagline: string;
  description: string;
  howItWorks: string[];
  benefits: string[];
  bestFor: string[];
  evidenceBase: string;
  faqs: { question: string; answer: string }[];
  relatedPrograms: string[];
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
}

export const therapyModalities: TherapyModality[] = [
  {
    slug: 'cognitive-behavioral-therapy',
    name: 'Cognitive Behavioral Therapy',
    abbreviation: 'CBT',
    tagline: 'Reshape thought patterns that drive addictive behavior',
    // ... full content for each modality
  },
  { slug: 'dialectical-behavior-therapy', name: 'Dialectical Behavior Therapy', abbreviation: 'DBT', ... },
  { slug: 'emdr-therapy', name: 'Eye Movement Desensitization and Reprocessing', abbreviation: 'EMDR', ... },
  { slug: 'motivational-interviewing', name: 'Motivational Interviewing', abbreviation: 'MI', ... },
  { slug: 'group-therapy', name: 'Group Therapy', ... },
];
```

**Step 2: Create hub page at /therapy**

Follow the same pattern as `/programs/page.tsx` - grid of cards linking to detail pages. Include FAQ schema.

**Step 3: Create dynamic detail page at /therapy/[slug]**

Follow `/programs/[slug]/page.tsx` pattern:
- `generateStaticParams()` for all 5 modalities
- `generateMetadata()` with Promise-based params
- PageHero, Breadcrumbs, content sections, FAQs, related programs, CTABanner

**Step 4: Add to navigation**

Add "Our Approach" dropdown to navigation with therapy modalities.

**Step 5: Verify build**

Run: `npm run build`
Expected: 5 new pages generated

**Step 6: Commit**

```bash
git add src/data/therapy-modalities.ts src/app/therapy/
git commit -m "feat: add therapy modalities hub and 5 detail pages for CBT, DBT, EMDR, MI, group"
```

---

### Task 9: Create Insurance Provider Detail Pages (12 Pages)

**Files:**
- Modify: `src/data/insurance-providers.ts` (add content fields)
- Create: `src/app/insurance/[slug]/page.tsx`

**Target Keywords:**
- "does Aetna cover rehab" (2,400 searches/mo)
- "Cigna addiction treatment coverage" (1,100 searches/mo)
- "Blue Cross rehab coverage California" (880 searches/mo)
- "UnitedHealthcare rehab benefits" (720 searches/mo)

**Step 1: Expand insurance provider data with rich content**

Add to each provider: description, coverageDetails, verificationSteps, faqs, metaTitle, metaDescription.

**Step 2: Create dynamic page /insurance/[slug]**

Each page answers: "Does [Provider] cover addiction treatment?" with:
- Coverage overview
- In-network vs out-of-network details
- Verification steps specific to that insurer
- FAQs (with schema)
- CTA to verify insurance

**Step 3: Add generateStaticParams for all 12 providers**

**Step 4: Verify build**

Run: `npm run build`
Expected: 12 new insurance pages

**Step 5: Commit**

```bash
git add src/data/insurance-providers.ts src/app/insurance/[slug]/
git commit -m "feat: add 12 insurance provider detail pages targeting coverage keywords"
```

---

### Task 10: Create Levels of Care Comparison Page

**Files:**
- Create: `src/app/levels-of-care/page.tsx`

**Target Keywords:**
- "levels of care addiction treatment" (1,200 searches/mo)
- "inpatient vs outpatient rehab" (1,800 searches/mo)
- "PHP vs IOP" (960 searches/mo)

**Step 1: Create comparison page with interactive table**

Page includes:
- Side-by-side comparison table (Detox → Residential → PHP → IOP → Outpatient → Aftercare)
- Columns: Duration, Hours/Week, Setting, Best For, Insurance Coverage
- Detailed section for each level
- FAQ schema
- "Which is right for me?" assessment section
- Links to each program detail page

**Step 2: Add to navigation under Treatment Programs**

**Step 3: Verify build and commit**

---

### Task 11: Create Testimonials/Success Stories Page

**Files:**
- Create: `src/app/success-stories/page.tsx`

**Target Keywords:**
- "addiction recovery success stories" (1,500 searches/mo)
- "rehab success stories" (890 searches/mo)

**Step 1: Create dedicated testimonials page**

Expand the 8 existing testimonials with longer-form recovery narratives. Include:
- Before/during/after recovery journey format
- Program mentioned prominently
- Location of the person (OC, LA, SD for local signals)
- ReviewSchema for each testimonial

**Step 2: Verify build and commit**

---

### Task 12: Create Blog Category Archive Pages

**Files:**
- Create: `src/app/blog/category/[category]/page.tsx`

**Target Keywords:** Each category targets its own keyword cluster.

**Step 1: Create dynamic category page**

Use `getBlogPostsByCategory()` from blog index. Each category page has:
- Category title and description
- Grid of posts in that category
- Unique metadata with category-specific title/description
- Breadcrumbs: Home > Blog > [Category Name]

**Step 2: Add generateStaticParams for all 10 categories**

**Step 3: Verify build**

Run: `npm run build`
Expected: 10 new category pages

**Step 4: Commit**

---

## PHASE 4: Content Interlinking & Internal SEO

### Task 13: Cross-Link Programs to Addiction Types and Therapy Modalities

**Files:**
- Modify: `src/app/programs/[slug]/page.tsx`
- Modify: `src/app/addiction-types/[slug]/page.tsx`

**Step 1: Add "Substances Treated" section to program pages**

After the "Related Programs" section, add a new section showing which addiction types are treated by this program, linking to the relevant `/addiction-types/[slug]` pages.

**Step 2: Add "Recommended Treatment Programs" section to addiction type pages**

After the existing content, add cards linking to the most relevant programs for that substance (e.g., Alcohol → Detox, Residential, IOP).

**Step 3: Add "Therapies Used" section to both page types**

Link to relevant `/therapy/[slug]` pages from programs and addiction type pages.

**Step 4: Verify build and commit**

---

### Task 14: Strengthen Footer Navigation with Missing Sections

**Files:**
- Modify: `src/data/navigation.ts`
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Add new footer columns**

Add these sections to the footer:
- **Addiction Types** column: Top 5 substances (Alcohol, Opioids, Heroin, Fentanyl, Meth)
- **Resources** column: Insurance, Admissions, Areas Served, Blog, Levels of Care
- **Location** column: Fountain Valley, Orange County, LA County, San Diego County

**Step 2: Verify build and commit**

---

### Task 15: Add "Related Resources" Section to Blog Posts

**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

**Step 1: After the existing related posts section, add contextual links**

Based on blog post category, auto-link to:
- Relevant programs (treatment-recovery posts → program pages)
- Relevant addiction types (substance-guides posts → addiction type pages)
- Insurance page (insurance-financial posts → /insurance)
- Local resources (county posts → /areas-served)

**Step 2: Verify build and commit**

---

## PHASE 5: Performance & Core Web Vitals

### Task 16: Optimize Hero Image Loading (LCP)

**Files:**
- Modify: `src/app/layout.tsx` (add preload)
- Modify: `src/components/layout/Hero.tsx`

**Step 1: Add preload link for hero image in layout.tsx head**

```tsx
<link
  rel="preload"
  as="image"
  href="/images/enhanced/hero_background_v2.png"
  type="image/png"
/>
```

**Step 2: Convert hero CSS background-image to Next.js Image component**

Replace the CSS `background-image` approach with `next/image` using `fill` and `priority`:

```tsx
<Image
  src="/images/enhanced/hero_background_v2.png"
  alt="Trust SoCal addiction treatment center in Fountain Valley, Orange County"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>
```

**Step 3: Verify build and commit**

---

### Task 17: Remove `unoptimized` from PlaceholderImage for Local Images

**Files:**
- Modify: `src/components/ui/PlaceholderImage.tsx`

**Step 1: Only apply `unoptimized` for external URLs**

```typescript
const isExternal = src.startsWith('http');

return (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    priority={priority}
    unoptimized={isExternal}
  />
);
```

**Step 2: Verify build and commit**

---

### Task 18: Add Web Manifest for PWA Signals

**Files:**
- Create: `public/site.webmanifest`
- Modify: `src/app/layout.tsx` (add link)

**Step 1: Create site.webmanifest**

```json
{
  "name": "Trust SoCal - Addiction Treatment Center",
  "short_name": "Trust SoCal",
  "description": "JCAHO-accredited drug and alcohol rehab in Orange County, CA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d9488",
  "icons": [
    { "src": "/favicon.ico", "sizes": "48x48", "type": "image/x-icon" },
    { "src": "/apple-touch-icon.png", "sizes": "192x192", "type": "image/png" }
  ]
}
```

**Step 2: Add link in layout.tsx head**

```tsx
<link rel="manifest" href="/site.webmanifest" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

**Step 3: Verify build and commit**

---

## PHASE 6: Local SEO Domination (3-County Targeting)

### Task 19: Create LA County Location Landing Pages (5 High-Value Cities)

**Files:**
- Create: `src/app/locations/los-angeles/page.tsx`
- Create: `src/app/locations/long-beach/page.tsx`
- Create: `src/app/locations/pasadena/page.tsx`
- Create: `src/app/locations/torrance/page.tsx`
- Create: `src/app/locations/glendale/page.tsx`

**Target Keywords:**
- "drug rehab Los Angeles" (6,600 searches/mo)
- "addiction treatment Long Beach" (720 searches/mo)
- "rehab center Pasadena" (480 searches/mo)
- "drug rehab Torrance" (390 searches/mo)

**Step 1: Create location page template**

Follow the existing `/locations/fountain-valley/page.tsx` pattern:
- PageHero with city name
- "Why Choose Trust SoCal for [City] Residents"
- Driving directions/distance from city
- Local resources in the area
- Programs available
- Insurance accepted
- LocalBusiness + FAQPage JSON-LD schemas
- City-specific testimonial if available

**Step 2: Create all 5 LA pages following the template**

**Step 3: Verify build and commit**

---

### Task 20: Create San Diego County Location Landing Pages (3 High-Value Cities)

**Files:**
- Create: `src/app/locations/san-diego/page.tsx`
- Create: `src/app/locations/chula-vista/page.tsx`
- Create: `src/app/locations/oceanside/page.tsx`

**Target Keywords:**
- "drug rehab San Diego" (5,400 searches/mo)
- "addiction treatment Chula Vista" (320 searches/mo)
- "rehab Oceanside CA" (260 searches/mo)

**Step 1: Follow same pattern as Task 19 for SD cities**

**Step 2: Verify build and commit**

---

### Task 21: Update Areas Served Navigation with Direct County Links

**Files:**
- Modify: `src/data/navigation.ts`

**Step 1: Fix the Areas Served dropdown**

Currently all 3 children point to `/areas-served`. Update to:

```typescript
{
  name: 'Areas Served',
  href: '/areas-served',
  children: [
    { name: 'Orange County', href: '/locations/orange-county' },
    { name: 'Los Angeles', href: '/locations/los-angeles' },
    { name: 'San Diego', href: '/locations/san-diego' },
    { name: 'All Areas', href: '/areas-served' },
  ],
},
```

**Step 2: Verify build and commit**

---

### Task 22: Add Google Business Profile & Analytics Integration Points

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Add Google Analytics placeholder (gtag)**

```tsx
{/* Google Analytics - replace UA-XXXXXXX with actual ID */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
      });
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

Note: Replace `G-XXXXXXXXXX` with actual GA4 measurement ID when available.

**Step 2: Commit**

---

## PHASE 7: Content Velocity (Ongoing)

### Task 23: Add 20 More Blog Posts Targeting High-Intent Keywords

**Files:**
- Modify: Relevant blog data files in `src/data/blog/`

**Target Keywords (not yet covered):**

| Keyword | Monthly Searches | Category |
|---------|-----------------|----------|
| "how long is rehab" | 4,400 | treatment-recovery |
| "signs of drug addiction" | 3,600 | substance-guides |
| "cost of rehab in California" | 2,900 | insurance-financial |
| "drug rehab near me" | 12,100 | orange-county-resources |
| "alcohol detox timeline" | 2,400 | substance-guides |
| "rehab for couples" | 1,600 | treatment-recovery |
| "drug rehab for veterans" | 1,100 | treatment-recovery |
| "luxury rehab Orange County" | 880 | orange-county-resources |
| "free rehab in California" | 2,200 | insurance-financial |
| "addiction treatment for young adults" | 1,500 | treatment-recovery |
| "rehab that accepts Medi-Cal" | 1,800 | insurance-financial |
| "faith based rehab California" | 960 | treatment-recovery |
| "outpatient rehab near me" | 3,300 | treatment-recovery |
| "signs of opioid withdrawal" | 1,700 | substance-guides |
| "how to get someone into rehab" | 2,100 | family-relationships |
| "sober living homes Orange County" | 1,400 | orange-county-resources |
| "anxiety and substance abuse" | 1,200 | mental-health-dual-diagnosis |
| "depression after rehab" | 880 | aftercare-relapse-prevention |
| "addiction treatment San Diego County" | 1,600 | san-diego-resources |
| "LA County rehab options" | 1,100 | los-angeles-resources |

**Create 20 new posts at 2,000+ words each with:**
- Primary keyword in title, H1, first paragraph
- Secondary keywords in H2 headings
- FAQs (4-5 per post) with FAQ schema
- Related posts interlinking
- Local focus for geo-targeted posts
- Author attribution with credentials

---

## Summary: Expected Impact

| Metric | Before | After Phase 1-2 | After All Phases |
|--------|--------|-----------------|-----------------|
| Total Pages | ~257 | ~257 | ~320+ |
| Schema Types | 7 | 9 | 9+ |
| Security Headers | 0 | 5 | 5 |
| OG Image | Broken | Fixed | Fixed |
| areaServed Cities | 8 | 16+ | 16+ |
| Therapy Pages | 0 | 5 | 5 |
| Insurance Detail Pages | 0 | 12 | 12 |
| Blog Category Pages | 0 | 10 | 10 |
| LA Location Pages | 0 | 5 | 5 |
| SD Location Pages | 0 | 3 | 3 |
| Review Schema | No | Yes | Yes |
| Blog Posts | 100 | 100 | 120+ |
| Keyword Coverage | ~300 | ~400 | ~600+ |

**Estimated organic traffic increase:** 3-5x within 6 months of implementation + indexing.
