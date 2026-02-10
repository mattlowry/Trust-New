import Link from 'next/link';
import {
  ShieldCheck,
  FlaskConical,
  Brain,
  Leaf,
  Users,
  HeartHandshake,
  Activity,
  MessageSquare,
  Sparkles,
  Pill,
  UserCircle,
  Layers,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';

import { SITE_CONFIG } from '@/lib/constants';
import { generateFAQSchema } from '@/lib/schemas';
import { generatePageMetadata } from '@/lib/metadata';
import { getFAQsByPage } from '@/data/faqs';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'About Trust SoCal | Addiction Treatment Center Orange County',
  description:
    'Learn about Trust SoCal, a JCAHO-accredited addiction treatment center in Fountain Valley, Orange County. Our evidence-based programs help individuals and families overcome addiction.',
  path: '/about-us',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'JCAHO Accredited',
    description:
      'We meet the highest national standards for healthcare quality and patient safety as recognized by The Joint Commission.',
  },
  {
    icon: FlaskConical,
    title: 'Evidence-Based',
    description:
      'Every treatment modality we use is grounded in clinical research and proven to deliver measurable results for lasting recovery.',
  },
  {
    icon: Brain,
    title: 'Dual Diagnosis Expertise',
    description:
      'Our integrated clinical team treats co-occurring mental health conditions alongside addiction for comprehensive healing.',
  },
  {
    icon: Leaf,
    title: 'Holistic Approach',
    description:
      'We combine clinical therapies with yoga, meditation, nutrition counseling, and wellness practices to treat the whole person.',
  },
  {
    icon: Users,
    title: 'Family-Centered',
    description:
      'Our family therapy program helps loved ones understand addiction, rebuild trust, and create a supportive home environment.',
  },
  {
    icon: HeartHandshake,
    title: 'Aftercare Support',
    description:
      'Recovery does not end at discharge. Our alumni program provides ongoing connection, accountability, and resources for up to a year and beyond.',
  },
];

const modalities = [
  {
    icon: MessageSquare,
    name: 'Cognitive Behavioral Therapy (CBT)',
    description:
      'Identifies and restructures negative thought patterns that drive addictive behavior, building healthier coping mechanisms.',
  },
  {
    icon: Activity,
    name: 'Dialectical Behavior Therapy (DBT)',
    description:
      'Teaches emotional regulation, mindfulness, distress tolerance, and interpersonal skills for managing intense emotions.',
  },
  {
    icon: Sparkles,
    name: 'EMDR Therapy',
    description:
      'Processes traumatic memories that contribute to substance use, reducing their emotional impact and breaking the trauma-addiction cycle.',
  },
  {
    icon: Pill,
    name: 'Medication-Assisted Treatment (MAT)',
    description:
      'Uses FDA-approved medications alongside therapy to manage withdrawal, reduce cravings, and support sustained recovery.',
  },
  {
    icon: UserCircle,
    name: 'Group Therapy',
    description:
      'Facilitated peer support groups that foster connection, accountability, and shared learning in a safe therapeutic environment.',
  },
  {
    icon: Layers,
    name: 'Holistic Therapies',
    description:
      'Yoga, meditation, art therapy, and nutritional counseling that restore physical health and emotional balance during recovery.',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Lives Changed' },
  { value: '24/7', label: 'Support Available' },
  { value: '95%', label: 'Completion Rate' },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AboutPage() {
  const aboutFAQs = getFAQsByPage('about');

  return (
    <>
      {/* Hero */}
      <PageHero
        title="About Trust SoCal"
        subtitle="Compassionate, evidence-based addiction treatment in the heart of Orange County"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About Us' },
          ]}
        />
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <article className="rounded-2xl border-l-4 border-l-primary bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                To provide compassionate, individualized addiction treatment that empowers every person who walks through our doors to reclaim their life. We are committed to delivering the highest standard of clinical care in a safe, dignified environment where healing can begin and lasting recovery can take root.
              </p>
            </article>

            {/* Vision */}
            <article className="rounded-2xl border-l-4 border-l-teal-400 bg-white p-8 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                A world where every individual struggling with addiction has access to effective, evidence-based treatment and the support they need to build a meaningful life in recovery. We envision communities strengthened by families reunited, potential restored, and the stigma of addiction replaced with understanding and hope.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mb-8" />

            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                Trust SoCal was founded on a deeply personal belief: that every person deserves a real chance at recovery, regardless of where they have been or what they have been through. Our founders, driven by firsthand experience with the devastation of addiction, set out to build a treatment center that combines clinical excellence with genuine human compassion in the heart of Orange County.
              </p>
              <p>
                Located in{' '}
                <span className="font-medium text-slate-800">
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}
                </span>
                , our facility was designed to feel like a place of refuge, not an institution. From our comfortable residential environment to our welcoming clinical spaces, every detail reflects our commitment to treating each client with dignity and respect. We believe that the setting in which someone heals matters as much as the therapies they receive.
              </p>
              <p>
                Over the years, Trust SoCal has grown into one of Southern California&apos;s most trusted addiction treatment providers, earning{' '}
                <span className="font-medium text-slate-800">JCAHO accreditation</span>{' '}
                and the confidence of hundreds of families. But our mission remains the same: to walk alongside individuals and families through the hardest chapter of their lives and help them write a new one. We never lose sight of the fact that behind every admission is a person who deserves hope, care, and a community that believes in their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Trust SoCal
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              What sets us apart is not just what we do, but how we do it. These core principles guide every aspect of our care.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
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

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Evidence-Based Approach
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600">
              We use clinically proven therapeutic modalities to address the root causes of addiction and equip our clients with the tools they need for sustained recovery.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modalities.map((modality) => (
              <article
                key={modality.name}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <modality.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  {modality.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {modality.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-teal-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Hundreds of Families
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-teal-100/90">
              Our track record reflects our unwavering commitment to helping individuals and families find lasting recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-teal-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Common questions about Trust SoCal, our approach to treatment, and what you can expect as a client or family member.
              </p>
            </div>

            <FAQAccordion faqs={aboutFAQs} />
            <JsonLd data={generateFAQSchema(aboutFAQs)} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
