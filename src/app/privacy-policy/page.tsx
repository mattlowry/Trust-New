import Link from 'next/link';
import { Shield, Lock, FileText, Eye, Cookie, Server, UserCheck, Mail } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';

import { SITE_CONFIG } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description:
    'Read the Trust SoCal privacy policy to understand how we collect, use, and protect your personal and health information in compliance with HIPAA and 42 CFR Part 2.',
  path: '/privacy-policy',
});

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]}
        />
      </div>

      {/* Policy Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-sm text-slate-500">
              Last updated: January 1, 2025
            </p>

            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <p className="text-lg leading-relaxed text-slate-600">
                  {SITE_CONFIG.name} (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) is committed to protecting the privacy and
                  confidentiality of all individuals who use our services, visit
                  our website, or otherwise interact with our organization. This
                  Privacy Policy describes how we collect, use, disclose, and
                  safeguard your information when you visit our website at{' '}
                  <Link href="/" className="text-primary hover:text-primary/80">
                    {SITE_CONFIG.url}
                  </Link>{' '}
                  or engage with our treatment services.
                </p>
              </div>

              {/* Section 1: Information We Collect */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    1. Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>We may collect the following types of information:</p>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Personal Information
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Name, email address, phone number, and mailing address
                    </li>
                    <li>Date of birth and demographic information</li>
                    <li>
                      Insurance information and financial details for billing
                      purposes
                    </li>
                    <li>Emergency contact information</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Protected Health Information (PHI)
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Medical history, treatment records, and clinical
                      assessments
                    </li>
                    <li>
                      Substance use history and mental health information
                    </li>
                    <li>Diagnoses, treatment plans, and progress notes</li>
                    <li>Laboratory results and medication information</li>
                  </ul>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Website Usage Information
                  </h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>IP address, browser type, and operating system</li>
                    <li>Pages visited, time spent, and referring URLs</li>
                    <li>
                      Device identifiers and general geographic location
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    2. How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      To provide, manage, and improve our addiction treatment
                      services
                    </li>
                    <li>
                      To process insurance verification and manage billing
                    </li>
                    <li>
                      To communicate with you about your treatment, appointments,
                      and aftercare
                    </li>
                    <li>
                      To respond to your inquiries, requests, and contact form
                      submissions
                    </li>
                    <li>
                      To comply with legal and regulatory requirements,
                      including HIPAA and state licensing regulations
                    </li>
                    <li>
                      To improve our website, services, and user experience
                    </li>
                    <li>
                      To send relevant information about our programs, with your
                      consent
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Disclosure of Information */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    3. Disclosure of Information
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may disclose your information only in the
                    following circumstances:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium text-slate-800">
                        Treatment purposes:
                      </span>{' '}
                      To healthcare providers involved in your care, with your
                      written authorization
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Payment:
                      </span>{' '}
                      To insurance companies and billing entities to process
                      claims
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Legal requirements:
                      </span>{' '}
                      When required by law, court order, or government
                      investigation
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Emergency situations:
                      </span>{' '}
                      To prevent or lessen a serious and imminent threat to
                      health or safety
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Service providers:
                      </span>{' '}
                      To trusted third-party vendors who assist in operating
                      our website and services, subject to confidentiality
                      agreements
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: HIPAA & 42 CFR Part 2 */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    4. HIPAA and 42 CFR Part 2 Compliance
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    As a substance abuse treatment provider, {SITE_CONFIG.name}{' '}
                    is subject to the Health Insurance Portability and
                    Accountability Act (HIPAA) and the federal regulations
                    governing the Confidentiality of Substance Use Disorder
                    Patient Records under 42 CFR Part 2.
                  </p>
                  <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6">
                    <h3 className="mb-3 text-lg font-semibold text-slate-800">
                      Your records are protected by federal law
                    </h3>
                    <p>
                      Under 42 CFR Part 2, information about your participation
                      in a substance use disorder treatment program is
                      confidential and cannot be disclosed without your written
                      consent, except in limited circumstances as permitted by
                      law. This includes disclosures to law enforcement,
                      employers, and family members unless you provide specific
                      written authorization.
                    </p>
                  </div>
                  <p>
                    We maintain a separate Notice of Privacy Practices that
                    provides detailed information about how we may use and
                    disclose your protected health information. This notice is
                    provided to all clients upon admission and is available
                    upon request.
                  </p>
                </div>
              </div>

              {/* Section 5: Cookies */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Cookie className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    5. Cookies and Tracking Technologies
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Our website uses cookies and similar tracking technologies
                    to enhance your browsing experience and gather analytics
                    data. These may include:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <span className="font-medium text-slate-800">
                        Essential cookies:
                      </span>{' '}
                      Required for the website to function properly
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Analytics cookies:
                      </span>{' '}
                      Help us understand how visitors interact with our website
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Marketing cookies:
                      </span>{' '}
                      Used to deliver relevant content and measure campaign
                      effectiveness
                    </li>
                  </ul>
                  <p>
                    You can control cookie preferences through your browser
                    settings. Disabling certain cookies may affect the
                    functionality of our website. We do not use cookies to
                    collect protected health information.
                  </p>
                </div>
              </div>

              {/* Section 6: Data Security */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Server className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    6. Data Security
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    We implement robust administrative, technical, and physical
                    safeguards to protect your personal and health information,
                    including:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      SSL/TLS encryption for all data transmitted through our
                      website
                    </li>
                    <li>
                      Encrypted storage of electronic health records and
                      personal data
                    </li>
                    <li>
                      Access controls limiting data access to authorized
                      personnel only
                    </li>
                    <li>
                      Regular security assessments and staff training on
                      privacy practices
                    </li>
                    <li>
                      Physical security measures for paper records and
                      on-site systems
                    </li>
                  </ul>
                  <p>
                    While we strive to protect your information, no method of
                    transmission over the Internet or method of electronic
                    storage is completely secure. We cannot guarantee absolute
                    security but are committed to maintaining the highest
                    reasonable standard of data protection.
                  </p>
                </div>
              </div>

              {/* Section 7: Your Rights */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <UserCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    7. Your Rights
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Under HIPAA, 42 CFR Part 2, and applicable state laws, you
                    have the right to:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      Access and obtain a copy of your health records
                    </li>
                    <li>
                      Request corrections to inaccurate information in your
                      records
                    </li>
                    <li>
                      Request restrictions on certain uses and disclosures of
                      your information
                    </li>
                    <li>
                      Receive an accounting of disclosures of your health
                      information
                    </li>
                    <li>
                      Revoke your authorization for disclosure at any time (in
                      writing)
                    </li>
                    <li>
                      File a complaint with us or with the U.S. Department of
                      Health and Human Services if you believe your privacy
                      rights have been violated
                    </li>
                    <li>
                      Request that we communicate with you through alternative
                      means or at alternative locations
                    </li>
                  </ul>
                  <p>
                    California residents may have additional rights under the
                    California Consumer Privacy Act (CCPA), including the right
                    to know what personal information is collected and the right
                    to request deletion of personal information not covered by
                    HIPAA exemptions.
                  </p>
                </div>
              </div>

              {/* Section 8: Contact for Privacy Questions */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    8. Contact Us About Privacy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy, wish to
                    exercise your privacy rights, or would like to file a
                    complaint, please contact our Privacy Officer:
                  </p>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-semibold text-slate-900">
                      {SITE_CONFIG.name} -- Privacy Officer
                    </p>
                    <p className="mt-2">{SITE_CONFIG.address.full}</p>
                    <p className="mt-1">
                      Phone:{' '}
                      <a
                        href={SITE_CONFIG.phone.href}
                        className="text-primary hover:text-primary/80"
                      >
                        {SITE_CONFIG.phone.formatted}
                      </a>
                    </p>
                    <p className="mt-1">
                      Email:{' '}
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-primary hover:text-primary/80"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  </div>
                  <p>
                    You may also file a complaint with the U.S. Department of
                    Health and Human Services, Office for Civil Rights, by
                    visiting{' '}
                    <a
                      href="https://www.hhs.gov/ocr/complaints"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      www.hhs.gov/ocr/complaints
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Changes Notice */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="mb-3 text-lg font-semibold text-slate-900">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices, legal requirements, or
                  operational needs. When we make material changes, we will
                  update the &quot;Last updated&quot; date at the top of this
                  page. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
