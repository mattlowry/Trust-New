import Link from 'next/link';
import {
  ShieldCheck,
  GraduationCap,
  Award,
  HeartHandshake,
  Mail,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';
import { JsonLd } from '@/components/ui/JsonLd';

import { generatePageMetadata } from '@/lib/metadata';
import { generateOrganizationSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';
import { teamMembers } from '@/data/team';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Our Team | Expert Addiction Treatment Professionals',
  description:
    'Meet the dedicated addiction treatment professionals at Trust SoCal. Our licensed therapists, medical doctors, and clinical staff provide compassionate, evidence-based care in Orange County, CA.',
  path: '/our-team',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const credentials = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Accredited',
    description:
      'Every clinical team member holds active state licensure or certification. Trust SoCal is JCAHO accredited, meeting the highest national standards for healthcare quality.',
  },
  {
    icon: GraduationCap,
    title: 'Advanced Training',
    description:
      'Our staff maintains ongoing education in the latest evidence-based treatment modalities, including CBT, DBT, EMDR, trauma-informed care, and medication-assisted treatment.',
  },
  {
    icon: Award,
    title: 'Specialized Expertise',
    description:
      'Our team includes board-certified addiction medicine physicians, licensed marriage and family therapists, licensed clinical social workers, and certified alcohol and drug counselors.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Care',
    description:
      'Many of our team members have personal connections to recovery, bringing authenticity and empathy to every client interaction. We treat every individual with dignity and respect.',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function OurTeamPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateOrganizationSchema()} />

      {/* Hero */}
      <PageHero
        title="Our Team"
        subtitle="Dedicated professionals committed to guiding you through every step of your recovery journey"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Our Team' },
          ]}
        />
      </div>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Experts Who Care About Your Recovery
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-slate-600">
              At Trust SoCal, our team is the foundation of everything we do. Each
              member brings years of specialized experience in addiction medicine,
              behavioral health, and clinical therapy. From our board-certified
              medical director to our compassionate admissions coordinators, every
              person on our staff is driven by a shared purpose: helping you or your
              loved one build a lasting, meaningful recovery. We believe that the
              relationship between client and care team is one of the most powerful
              factors in successful treatment outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Team Member Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet Our Clinical Team
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              Our multidisciplinary team of physicians, therapists, nurses, and
              counselors works together to deliver individualized care for every
              client.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                title={member.title}
                credentials={member.credentials}
                bio={member.bio}
                image={member.image}
                specialties={member.specialties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Standards &amp; Credentials
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              We hold ourselves to the highest professional and ethical standards
              in addiction treatment. Our licensing and accreditation reflect our
              commitment to clinical excellence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Join Our Team
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-slate-600 mb-8">
              Are you a passionate addiction treatment professional looking to make a
              difference? Trust SoCal is always seeking talented, compassionate
              individuals who share our commitment to evidence-based care and client
              dignity. We offer a collaborative work environment, competitive
              compensation, and the opportunity to be part of a team that changes
              lives every day.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Career%20Inquiry`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
            >
              <Mail className="h-5 w-5" />
              Contact Us About Careers
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
