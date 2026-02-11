import Link from 'next/link';
import {
  Phone,
  ShieldCheck,
  ClipboardCheck,
  Plane,
  Heart,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  Lock,
  Shirt,
  Pill,
  CreditCard,
  BookOpen,
  Smile,
  Users,
  Stethoscope,
  BedDouble,
  UtensilsCrossed,
  CalendarCheck,
  FileText,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';

import { generateFAQSchema } from '@/lib/schemas';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { getFAQsByCategory } from '@/data/faqs';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Admissions Process | How to Get Started | Trust SoCal',
  description:
    'Learn about the admissions process at Trust SoCal. From your first phone call to beginning treatment, we make it simple. Same-day admission available. Call (949) 280-8360.',
  path: '/admissions',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const admissionsSteps = [
  {
    number: 1,
    icon: Phone,
    title: 'Call Our Admissions Team',
    description:
      'Reach out to us 24 hours a day, 7 days a week. Our compassionate admissions counselors will listen to your situation, answer your questions, and guide you through the next steps. This call is completely free and confidential.',
  },
  {
    number: 2,
    icon: ShieldCheck,
    title: 'Verify Your Insurance',
    description:
      'We contact your insurance provider directly to verify your benefits and determine your coverage. If you are self-pay, our financial team will work with you to create an affordable payment plan. This process typically takes less than an hour.',
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Clinical Assessment',
    description:
      'Our clinical team conducts a brief pre-assessment over the phone to understand your history, substance use, mental health needs, and treatment goals. This helps us determine the right level of care and prepare a personalized treatment plan.',
  },
  {
    number: 4,
    icon: Plane,
    title: 'Travel & Arrive',
    description:
      'Whether you are local to Orange County or traveling from out of state, we coordinate everything. We can arrange transportation from the airport, provide directions, and ensure someone is ready to welcome you when you arrive.',
  },
  {
    number: 5,
    icon: Heart,
    title: 'Begin Treatment',
    description:
      'From the moment you walk through our doors, you are supported. Our team will guide you through intake, introduce you to the facility and staff, and begin your individualized treatment plan right away.',
  },
];

const whatToBring = [
  {
    icon: Shirt,
    label: 'Comfortable clothing for 5-7 days',
  },
  {
    icon: Pill,
    label: 'Prescribed medications in original containers',
  },
  {
    icon: CreditCard,
    label: 'Valid photo ID and insurance card',
  },
  {
    icon: BookOpen,
    label: 'Journal, books, or recovery literature',
  },
  {
    icon: Phone,
    label: 'Phone charger (phone policy varies by program)',
  },
  {
    icon: Smile,
    label: 'Personal hygiene items and toiletries',
  },
];

const dayOneTimeline = [
  {
    icon: Users,
    title: 'Welcome & Orientation',
    description:
      'You will be greeted by our admissions team, given a tour of the facility, and introduced to key staff members. We want you to feel safe and comfortable from the very first moment.',
  },
  {
    icon: Stethoscope,
    title: 'Medical & Clinical Assessment',
    description:
      'Our nursing team will complete a comprehensive medical evaluation, and our therapists will conduct an in-depth clinical assessment. Together, these evaluations form the foundation of your individualized treatment plan.',
  },
  {
    icon: BedDouble,
    title: 'Get Settled In',
    description:
      'You will be shown to your room, meet your peers, and have time to unpack and get comfortable. Our staff is available to answer questions and help with anything you need.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Meals & Community',
    description:
      'Enjoy a nutritious meal prepared by our kitchen team and begin connecting with the recovery community. Many clients say the bonds formed in treatment become some of the most meaningful relationships of their lives.',
  },
  {
    icon: CalendarCheck,
    title: 'Review Your Schedule',
    description:
      'Your counselor will walk you through your personalized daily schedule, including therapy sessions, group activities, wellness programming, and free time. Structure and routine are key components of early recovery.',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AdmissionsPage() {
  const admissionsFAQs = getFAQsByCategory('admissions');

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Begin Your Recovery Journey"
        subtitle="Taking the first step is the hardest part. Our admissions process is designed to be simple, compassionate, and judgment-free."
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Admissions' },
          ]}
        />
      </div>

      {/* Intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Getting Started Is Easier Than You Think
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              At Trust SoCal, we understand that reaching out for help takes courage. That is why our admissions process is built to remove barriers, not create them. From your first phone call to your first day of treatment, our team handles the details so you can focus on healing. Same-day and next-day admissions are often available.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SITE_CONFIG.phone.href}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                Call {SITE_CONFIG.phone.formatted}
              </a>
              <Link
                href="/insurance"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                Verify Insurance
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The Admissions Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Five straightforward steps from your first call to the start of treatment. We guide you through every one.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* Vertical line connector */}
              <div
                className="absolute left-6 top-6 bottom-6 w-0.5 bg-teal-200 sm:left-8"
                aria-hidden="true"
              />

              <div className="space-y-10">
                {admissionsSteps.map((step) => (
                  <div key={step.number} className="relative flex gap-5 sm:gap-6">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-xl">
                      {step.number}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="mb-2 flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left -- Content */}
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What to Bring
              </h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-primary" />
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Packing for treatment does not need to be stressful. Here is what we recommend bringing. Our team will provide a detailed packing list when you confirm your admission.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {whatToBring.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-50 to-teal-100/50">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right -- What NOT to bring */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Please Leave Behind
              </h3>
              <p className="mb-6 text-sm text-slate-600">
                To maintain a safe, recovery-focused environment, the following items are not permitted:
              </p>
              <ul className="space-y-3">
                {[
                  'Weapons or sharp objects of any kind',
                  'Alcohol, drugs, or drug paraphernalia',
                  'Large amounts of cash or valuables',
                  'Over-the-counter medications (we provide these)',
                  'Revealing or inappropriate clothing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect on Day One */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What to Expect on Day One
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Your first day is about settling in, not diving into the deep end. Here is what the day looks like so you know exactly what to expect.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dayOneTimeline.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-teal-100/50">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Assurance */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl bg-teal-900 p-8 sm:p-12">
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                }}
              />

              <div className="relative z-10 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start sm:gap-8">
                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:mb-0">
                  <Lock className="h-10 w-10 text-teal-300" />
                </div>

                {/* Content */}
                <div>
                  <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Your Privacy Is Protected
                  </h2>
                  <div className="space-y-4 text-teal-100/90">
                    <p>
                      Trust SoCal adheres to all federal{' '}
                      <span className="font-semibold text-white">HIPAA</span>{' '}
                      regulations and{' '}
                      <span className="font-semibold text-white">
                        42 CFR Part 2
                      </span>{' '}
                      confidentiality requirements that specifically protect substance abuse treatment records. Your participation in treatment, medical records, and personal information are never shared without your explicit written consent.
                    </p>
                    <p>
                      From the moment you make your first call, everything you share with us is held in the strictest confidence. We maintain rigorous data security protocols and train every member of our staff on privacy compliance. You can seek help with complete peace of mind that your information is safe.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-teal-200">
                      <ShieldCheck className="h-4 w-4" />
                      HIPAA Compliant
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-teal-200">
                      <FileText className="h-4 w-4" />
                      42 CFR Part 2
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-teal-200">
                      <Lock className="h-4 w-4" />
                      Encrypted Records
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-teal-100/50">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Admissions FAQs
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Have questions about the admissions process? Here are answers to the most common questions we hear from clients and families.
              </p>
            </div>

            <FAQAccordion faqs={admissionsFAQs} />
            <JsonLd data={generateFAQSchema(admissionsFAQs)} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Take the First Step?"
        subtitle="Our admissions team is available 24/7. Call now or verify your insurance online to begin your recovery journey today."
      />
    </>
  );
}
