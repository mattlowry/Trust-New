// ---------------------------------------------------------------------------
// Trust SoCal -- Blog Data Aggregator & Helpers
// ---------------------------------------------------------------------------

import { BlogCategory, BlogPost } from './types';
// import { treatmentRecoveryPosts } from './treatment-recovery';
// import { substanceGuidesPosts } from './substance-guides';
// import { mentalHealthDualDiagnosisPosts } from './mental-health-dual-diagnosis';
// import { familyRelationshipsPosts } from './family-relationships';
// import { orangeCountyResourcesPosts } from './orange-county-resources';
// import { losAngelesResourcesPosts } from './los-angeles-resources';
// import { sanDiegoResourcesPosts } from './san-diego-resources';
// import { insuranceFinancialPosts } from './insurance-financial';
// import { aftercareRelapsePreventionPosts } from './aftercare-relapse-prevention';
// import { wellnessLifestylePosts } from './wellness-lifestyle';

// ---------------------------------------------------------------------------
// All posts combined, sorted newest-first
// ---------------------------------------------------------------------------

export const allBlogPosts: BlogPost[] = [
  // ...treatmentRecoveryPosts,
  // ...substanceGuidesPosts,
  // ...mentalHealthDualDiagnosisPosts,
  // ...familyRelationshipsPosts,
  // ...orangeCountyResourcesPosts,
  // ...losAngelesResourcesPosts,
  // ...sanDiegoResourcesPosts,
  // ...insuranceFinancialPosts,
  // ...aftercareRelapsePreventionPosts,
  // ...wellnessLifestylePosts,
] as BlogPost[]).sort(
  (a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
);

// ---------------------------------------------------------------------------
// Category metadata
// ---------------------------------------------------------------------------

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: string; description: string }
> = {
  'treatment-recovery': {
    label: 'Treatment & Recovery',
    description:
      'Learn about rehab programs, detox, and what to expect during addiction treatment.',
  },
  'substance-guides': {
    label: 'Substance-Specific Guides',
    description:
      'In-depth guides on alcohol, opioids, meth, and other substance addictions.',
  },
  'mental-health-dual-diagnosis': {
    label: 'Mental Health & Dual Diagnosis',
    description:
      'Understanding the link between mental health conditions and substance use disorders.',
  },
  'family-relationships': {
    label: 'Family & Relationships',
    description:
      'Resources for families and loved ones navigating the challenges of addiction.',
  },
  'orange-county-resources': {
    label: 'Orange County Resources',
    description:
      'Local addiction treatment resources, rehab centers, and recovery support in Orange County, CA.',
  },
  'los-angeles-resources': {
    label: 'Los Angeles Resources',
    description:
      'Addiction treatment resources and recovery support across Los Angeles County.',
  },
  'san-diego-resources': {
    label: 'San Diego Resources',
    description:
      'Rehab options, sober living, and recovery programs in San Diego County.',
  },
  'insurance-financial': {
    label: 'Insurance & Financial',
    description:
      'Navigate insurance coverage, costs, and financial planning for addiction treatment.',
  },
  'aftercare-relapse-prevention': {
    label: 'Aftercare & Relapse Prevention',
    description:
      'Strategies, tools, and support for maintaining long-term sobriety after treatment.',
  },
  'wellness-lifestyle': {
    label: 'Wellness & Lifestyle',
    description:
      'Holistic approaches to recovery including fitness, nutrition, mindfulness, and self-care.',
  },
};

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return allBlogPosts.map((post) => post.slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return allBlogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(
  post: BlogPost,
  count: number = 3,
): BlogPost[] {
  return post.relatedPosts
    .map((slug) => allBlogPosts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined)
    .slice(0, count);
}
