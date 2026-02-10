# Areas Served City Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create ~113 unique city pages across Orange County (34), LA County (61), and San Diego County (18) under `/areas-served/[slug]` with local landmarks, unique content, and local SEO optimization.

**Architecture:** Data-driven dynamic route. All city content lives in `src/data/cities/` split by county. A single `[slug]` dynamic route renders each page with `generateStaticParams()` for SSG. Each city gets unique intro, landmarks, driving directions, FAQs, and JSON-LD structured data.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind v4, existing components (PageHero, CTABanner, FAQAccordion, JsonLd, Breadcrumbs)

---

### Task 1: Create City Type Definitions

**Files:**
- Create: `src/data/cities/types.ts`

Define the `CityData` interface used by all county data files and the page template.

---

### Task 2: Create Orange County City Data (34 cities)

**Files:**
- Create: `src/data/cities/orange-county.ts`

All 34 OC incorporated cities with unique landmarks, intros, FAQs, and driving directions from Fountain Valley.

---

### Task 3: Create LA County City Data (~61 cities)

**Files:**
- Create: `src/data/cities/la-county.ts`

Major LA County cities with unique landmarks, intros, FAQs, and driving directions.

---

### Task 4: Create San Diego County City Data (18 cities)

**Files:**
- Create: `src/data/cities/san-diego-county.ts`

All 18 SD County incorporated cities with unique landmarks, intros, FAQs, and driving directions.

---

### Task 5: Create City Data Index

**Files:**
- Create: `src/data/cities/index.ts`

Combine all county exports into a single `allCities` array and `getCityBySlug()` lookup.

---

### Task 6: Create Dynamic Route Page

**Files:**
- Create: `src/app/areas-served/[slug]/page.tsx`

Dynamic route with `generateStaticParams()`, `generateMetadata()`, JSON-LD, PageHero, unique content sections, programs list, FAQs, nearby cities interlinks, contact info, and CTA. Follows exact pattern of existing `/locations/anaheim/page.tsx`.

---

### Task 7: Create Areas Served Index Page

**Files:**
- Create: `src/app/areas-served/page.tsx`

Lists all cities grouped by county with cards linking to individual pages. Includes county sections with city grids.

---

### Task 8: Update Navigation

**Files:**
- Modify: `src/data/navigation.ts`

Add "Areas Served" to main nav with county sub-items.

---

### Task 9: Update Constants & Schemas

**Files:**
- Modify: `src/lib/constants.ts` - Add LA_COUNTY_CITIES and SAN_DIEGO_COUNTY_CITIES arrays
- Modify: `src/lib/schemas.ts` - Update areaServed in LocalBusiness schema to include all counties

---

### Task 10: Build & Verify

Run `npm run build` and verify all ~155 static pages generate without errors.

---

## Execution Strategy

Tasks 2, 3, 4 are independent and should run in parallel (largest work items).
Tasks 6, 7 depend on Task 5.
Task 5 depends on Tasks 2, 3, 4.
Task 1 must go first.
