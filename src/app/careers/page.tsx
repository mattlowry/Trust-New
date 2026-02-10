import {
  Heart,
  Clock,
  GraduationCap,
  DollarSign,
  Users,
  Leaf,
  Send,
  Briefcase,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';

import { SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Careers | Join Our Team',
  description:
    'Join the Trust SoCal team and make a meaningful difference in the lives of individuals and families battling addiction. Explore career opportunities at our Orange County treatment center.',
  path: '/careers',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const benefits = [
  {
    icon: Heart,
    title: 'Health Insurance',
    description:
      'Comprehensive medical, dental, and vision coverage for you and your eligible dependents.',
  },
  {
    icon: Clock,
    title: 'Paid Time Off',
    description:
      'Generous PTO policy including vacation days, sick leave, and paid holidays so you can recharge.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description:
      'Continuing education stipends, conference attendance, and clinical supervision for licensed professionals.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description:
      'Market-competitive salaries with performance-based bonuses and annual reviews.',
  },
  {
    icon: Users,
    title: 'Supportive Team Culture',
    description:
      'A collaborative, mission-driven environment where your contributions are valued and your growth is encouraged.',
  },
  {
    icon: Leaf,
    title: 'Wellness Programs',
    description:
      'Access to wellness initiatives including employee assistance programs, mindfulness resources, and team activities.',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Join Our Team"
        subtitle="Make a difference in people's lives"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Careers' },
          ]}
        />
      </div>

      {/* Intro Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Work With Purpose
            </h2>
            <div className="h-1 w-20 rounded-full bg-primary mb-8" />
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                At {SITE_CONFIG.name}, we believe that our team is the
                foundation of everything we do. Our staff members are not just
                employees -- they are compassionate professionals dedicated to
                helping individuals and families overcome addiction and build
                meaningful lives in recovery.
              </p>
              <p>
                We are always seeking talented, passionate individuals who share
                our commitment to evidence-based care and client-centered
                treatment. Whether you are a seasoned clinician, a recent
                graduate, or an administrative professional looking to work in a
                mission-driven environment, {SITE_CONFIG.name} offers a
                rewarding career where your work truly matters.
              </p>
              <p>
                As a JCAHO-accredited facility in{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                </span>
                , we hold ourselves to the highest standards of clinical
                excellence. We invest in our people because we know that the
                quality of our team directly impacts the quality of care our
                clients receive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Benefits and Perks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We take care of our team so they can take care of our clients.
              Here is what you can expect when you join {SITE_CONFIG.name}.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Current Openings
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600">
                We are always looking for talented individuals to join our
                growing team. While we may not have specific positions listed at
                this time, we welcome applications from qualified professionals
                in the following areas:
              </p>
              <ul className="mt-6 ml-6 list-disc space-y-2 text-slate-600">
                <li>Licensed Therapists (LMFT, LCSW, LPCC)</li>
                <li>Registered and Licensed Vocational Nurses</li>
                <li>Certified Drug and Alcohol Counselors (CADC, CATC)</li>
                <li>Behavioral Health Technicians</li>
                <li>Case Managers</li>
                <li>Admissions Coordinators</li>
                <li>Administrative and Support Staff</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How to Apply
              </h2>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600">
                Interested in joining {SITE_CONFIG.name}? We would love to hear
                from you. Please send your resume and a brief cover letter
                describing your interest and qualifications to:
              </p>
              <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50/50 p-6 text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-teal-700">
                  Email Your Resume To
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Career%20Inquiry%20-%20${encodeURIComponent(SITE_CONFIG.name)}`}
                  className="mt-2 inline-block text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Please include the position you are interested in (or
                &quot;General Inquiry&quot;) in the subject line of your email.
                We review all applications carefully and will reach out if your
                background aligns with our current or future needs.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {SITE_CONFIG.name} is an equal opportunity employer. We
                celebrate diversity and are committed to creating an inclusive
                environment for all team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Have Questions About Careers?"
        subtitle="Reach out to learn more about opportunities at Trust SoCal and how you can be part of our mission."
      />
    </>
  );
}
