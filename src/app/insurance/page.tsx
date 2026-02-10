import Link from 'next/link';
import {
  Phone,
  ShieldCheck,
  FileSearch,
  ClipboardCheck,
  DollarSign,
  Building2,
  CreditCard,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { InsuranceForm } from '@/components/ui/InsuranceForm';
import { InsuranceLogos } from '@/components/ui/InsuranceLogos';
import { JsonLd } from '@/components/ui/JsonLd';

import { generateFAQSchema } from '@/lib/schemas';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_CONFIG } from '@/lib/constants';
import { getFAQsByCategory } from '@/data/faqs';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Insurance Verification | Rehab Coverage | Trust SoCal',
  description:
    'Verify your insurance coverage for addiction treatment at Trust SoCal. We accept most major PPO plans including Aetna, Anthem, Cigna, and UnitedHealthcare. Free, confidential verification.',
  path: '/insurance',
});

// ---------------------------------------------------------------------------
// Static Data
// ---------------------------------------------------------------------------

const verificationSteps = [
  {
    number: '1',
    icon: Phone,
    title: 'Submit Your Information',
    description:
      'Fill out our secure online form or call our admissions team. We only need basic insurance details to get started.',
  },
  {
    number: '2',
    icon: FileSearch,
    title: 'We Verify Your Benefits',
    description:
      'Our team contacts your insurance provider directly to review your coverage, deductibles, and any out-of-pocket costs.',
  },
  {
    number: '3',
    icon: ClipboardCheck,
    title: 'Review Your Coverage',
    description:
      'We walk you through your benefits in plain language so you understand exactly what is covered before treatment begins.',
  },
];

const coverageDetails = [
  {
    icon: DollarSign,
    title: 'Deductibles',
    description:
      'Your deductible is the amount you pay out of pocket before insurance begins covering treatment costs. Many plans reset deductibles annually. Our team will check whether your deductible has been met and how it applies to your treatment.',
  },
  {
    icon: CreditCard,
    title: 'Copays & Coinsurance',
    description:
      'After meeting your deductible, you may be responsible for a copay (a fixed amount per service) or coinsurance (a percentage of the total cost). We help you understand these costs upfront so there are no surprises during treatment.',
  },
  {
    icon: Building2,
    title: 'In-Network vs. Out-of-Network',
    description:
      'In-network providers have pre-negotiated rates with your insurance company, typically resulting in lower out-of-pocket costs. Trust SoCal works with most major PPO plans and can help you understand your in-network and out-of-network benefits.',
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Authorization',
    description:
      'Some insurance plans require pre-authorization before treatment begins. Our admissions team handles this process on your behalf, communicating directly with your insurer to secure approval quickly.',
  },
];

const selfPayBenefits = [
  'Flexible payment plans tailored to your budget',
  'Sliding-scale fees based on financial need',
  'No insurance paperwork or pre-authorization delays',
  'Same high-quality clinical care and amenities',
  'Complete privacy -- no insurance records',
  'Dedicated financial counselor to explore options',
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function InsurancePage() {
  const insuranceFAQs = getFAQsByCategory('insurance');

  return (
    <>
      {/* Hero */}
      <PageHero
        title="Insurance Verification"
        subtitle="Most major insurance plans cover addiction treatment. Verify your benefits in minutes -- it is free, fast, and completely confidential."
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Insurance' },
          ]}
        />
      </div>

      {/* Two-Column: Info + Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column -- Info */}
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Insurance Coverage for Rehab
              </h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-primary" />

              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Under the{' '}
                  <span className="font-medium text-slate-800">
                    Mental Health Parity and Addiction Equity Act
                  </span>{' '}
                  and the{' '}
                  <span className="font-medium text-slate-800">
                    Affordable Care Act
                  </span>
                  , most health insurance plans are required to cover substance abuse treatment at the same level as medical and surgical care. This means your plan likely covers detox, residential treatment, PHP, and IOP programs.
                </p>
                <p>
                  At Trust SoCal, we handle the insurance verification process for you so you can focus on what matters most -- getting help. Our admissions team will confirm your coverage, explain your benefits, and answer every question before treatment begins.
                </p>
              </div>

              {/* Verification Steps */}
              <div className="mt-10">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  How Verification Works
                </h3>
                <div className="space-y-6">
                  {verificationSteps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-lg font-bold text-primary">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-slate-900">
                          {step.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call CTA */}
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-teal-200 bg-teal-50 p-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-sm text-slate-700">
                  Prefer to verify by phone? Call{' '}
                  <a
                    href={SITE_CONFIG.phone.href}
                    className="font-semibold text-primary hover:underline"
                  >
                    {SITE_CONFIG.phone.formatted}
                  </a>{' '}
                  for immediate assistance, 24/7.
                </p>
              </div>
            </div>

            {/* Right Column -- Form */}
            <div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Verify Your Insurance
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Free and confidential. We will contact you within one business day.
                  </p>
                </div>
                <InsuranceForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Logos */}
      <div className="bg-slate-50">
        <InsuranceLogos />
      </div>

      {/* How Insurance Covers Treatment */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How Insurance Covers Treatment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Understanding your insurance benefits can feel overwhelming. Here is a plain-language breakdown of the key terms and how they apply to addiction treatment.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {coverageDetails.map((item) => (
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

          {/* Additional Coverage Note */}
          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-amber-200 bg-amber-50 p-6">
            <div className="flex gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              <div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  Every Plan Is Different
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  Coverage levels, deductibles, and out-of-pocket maximums vary widely between insurance plans. The only way to know exactly what your plan covers is to verify your specific benefits. Our admissions team does this at no cost and with complete confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left -- Content */}
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Self-Pay & Private Pay Options
              </h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-secondary" />

              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  No insurance? No problem. Trust SoCal believes financial barriers should never prevent anyone from accessing life-saving addiction treatment. We offer flexible self-pay options designed to make recovery accessible.
                </p>
                <p>
                  Our financial counselors work one-on-one with each client and family to create a payment arrangement that fits your situation. We can also help you explore whether you qualify for Medicaid, state-funded programs, or other forms of financial assistance.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-secondary/90"
                >
                  Discuss Payment Options
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right -- Benefits List */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-lg font-semibold text-slate-900">
                Self-Pay Benefits
              </h3>
              <ul className="space-y-4">
                {selfPayBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Insurance FAQs
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Common questions about insurance coverage, verification, and payment options for addiction treatment.
              </p>
            </div>

            <FAQAccordion faqs={insuranceFAQs} />
            <JsonLd data={generateFAQSchema(insuranceFAQs)} />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Verify Your Insurance?"
        subtitle="Our admissions team is standing by to check your coverage. It only takes a few minutes and costs nothing."
      />
    </>
  );
}
