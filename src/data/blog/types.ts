// ---------------------------------------------------------------------------
// Trust SoCal -- Blog Post Types & Interfaces
// ---------------------------------------------------------------------------

export type BlogCategory =
  | 'treatment-recovery'
  | 'substance-guides'
  | 'mental-health-dual-diagnosis'
  | 'family-relationships'
  | 'orange-county-resources'
  | 'los-angeles-resources'
  | 'san-diego-resources'
  | 'insurance-financial'
  | 'aftercare-relapse-prevention'
  | 'wellness-lifestyle';

export interface BlogAuthor {
  name: string;
  credentials: string;
  title: string;
  image: string;
}

export interface ContentCallout {
  type: 'info' | 'warning' | 'tip' | 'quote';
  text: string;
  attribution?: string;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  numberedList?: string[];
  callout?: ContentCallout;
  subsections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    numberedList?: string[];
    callout?: ContentCallout;
  }[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishDate: string;
  heroImage: string;
  excerpt: string;
  readingTime: number;
  keyTakeaways: string[];
  sections: ContentSection[];
  faqs: BlogFAQ[];
  relatedPosts: string[];
  localFocus?: {
    city?: string;
    county: string;
  };
  primaryKeyword: string;
  secondaryKeywords: string[];
}
