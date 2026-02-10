import Link from 'next/link';
import {
  FileCheck,
  Stethoscope,
  AlertTriangle,
  Copyright,
  ShieldAlert,
  Link2,
  Scale,
  RefreshCw,
  Mail,
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
  title: 'Terms of Service',
  description:
    'Review the Terms of Service for Trust SoCal. These terms govern the use of our website and describe our addiction treatment services, disclaimers, and legal obligations.',
  path: '/terms-of-service',
});

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Service' },
          ]}
        />
      </div>

      {/* Terms Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-sm text-slate-500">
              Last updated: January 1, 2025
            </p>

            <div className="space-y-12">
              {/* Section 1: Acceptance of Terms */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    1. Acceptance of Terms
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    By accessing or using the {SITE_CONFIG.name} website located
                    at{' '}
                    <Link
                      href="/"
                      className="text-primary hover:text-primary/80"
                    >
                      {SITE_CONFIG.url}
                    </Link>{' '}
                    (the &quot;Site&quot;), you agree to be bound by these Terms
                    of Service (&quot;Terms&quot;). If you do not agree to all
                    of these Terms, you must not access or use the Site.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between
                    you and {SITE_CONFIG.legalName}. Your continued use of the
                    Site following the posting of changes to these Terms will
                    mean you accept those changes.
                  </p>
                </div>
              </div>

              {/* Section 2: Description of Services */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    2. Description of Services
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    {SITE_CONFIG.name} is a JCAHO-accredited addiction treatment
                    center located in {SITE_CONFIG.address.city},{' '}
                    {SITE_CONFIG.address.state}. We provide substance abuse
                    treatment services including but not limited to:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Medical detoxification</li>
                    <li>Residential treatment</li>
                    <li>Partial hospitalization programs (PHP)</li>
                    <li>Intensive outpatient programs (IOP)</li>
                    <li>Dual diagnosis treatment</li>
                    <li>Trauma therapy</li>
                    <li>Family therapy programs</li>
                    <li>Aftercare and alumni support</li>
                  </ul>
                  <p>
                    The information provided on this Site is intended to offer
                    general information about our facility and programs. Actual
                    treatment services are subject to clinical assessment,
                    insurance verification, and availability.
                  </p>
                </div>
              </div>

              {/* Section 3: Not Medical Advice */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    3. Not Medical Advice
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-6">
                    <p className="font-medium text-slate-800">
                      Important Disclaimer
                    </p>
                    <p className="mt-2">
                      The content on this Site is provided for informational
                      purposes only and does not constitute medical advice,
                      diagnosis, or treatment. Nothing on this Site should be
                      construed as a substitute for professional medical advice
                      from a qualified healthcare provider.
                    </p>
                  </div>
                  <p>
                    Always seek the advice of your physician or other qualified
                    health provider with any questions you may have regarding a
                    medical condition or treatment. Never disregard professional
                    medical advice or delay in seeking it because of something
                    you have read on this Site.
                  </p>
                  <p>
                    If you are experiencing a medical emergency, call 911 or go
                    to your nearest emergency room immediately. If you or someone
                    you know is in crisis, contact the{' '}
                    <span className="font-medium text-slate-800">
                      SAMHSA National Helpline at 1-800-662-4357
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Section 4: Intellectual Property */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Copyright className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    4. Intellectual Property
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    All content on this Site, including but not limited to text,
                    graphics, logos, images, photographs, audio, video, software,
                    and the compilation thereof, is the property of{' '}
                    {SITE_CONFIG.legalName} or its content suppliers and is
                    protected by United States and international copyright,
                    trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative
                    works of, publicly display, publicly perform, republish,
                    download, store, or transmit any material from this Site
                    without the prior written consent of {SITE_CONFIG.name},
                    except for your personal, non-commercial use and provided
                    that you do not modify the content and retain all copyright
                    and proprietary notices.
                  </p>
                </div>
              </div>

              {/* Section 5: Limitation of Liability */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <ShieldAlert className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    5. Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    To the fullest extent permitted by applicable law,{' '}
                    {SITE_CONFIG.legalName}, its officers, directors, employees,
                    agents, and affiliates shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages,
                    including but not limited to loss of profits, data, use, or
                    goodwill, arising out of or in connection with:
                  </p>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Your access to or use of (or inability to use) the Site</li>
                    <li>
                      Any conduct or content of any third party on the Site
                    </li>
                    <li>Any content obtained from the Site</li>
                    <li>
                      Unauthorized access, use, or alteration of your
                      transmissions or content
                    </li>
                  </ul>
                  <p>
                    The Site and all content are provided on an &quot;as is&quot;
                    and &quot;as available&quot; basis without warranties of any
                    kind, either express or implied. We do not warrant that the
                    Site will be uninterrupted, secure, or error-free.
                  </p>
                </div>
              </div>

              {/* Section 6: Privacy Policy Reference */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Link2 className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    6. Privacy Policy
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Your use of the Site is also governed by our{' '}
                    <Link
                      href="/privacy-policy"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      Privacy Policy
                    </Link>
                    , which describes how we collect, use, and protect your
                    personal information. By using the Site, you consent to the
                    practices described in our Privacy Policy.
                  </p>
                  <p>
                    As a substance abuse treatment provider, we are subject to
                    additional federal and state privacy protections, including
                    HIPAA and 42 CFR Part 2. Our Privacy Policy provides
                    detailed information about these protections.
                  </p>
                </div>
              </div>

              {/* Section 7: Modifications */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <RefreshCw className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    7. Modifications to Terms
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    We reserve the right to modify these Terms at any time at
                    our sole discretion. When we make changes, we will update
                    the &quot;Last updated&quot; date at the top of this page.
                    Material changes will be communicated through a prominent
                    notice on the Site.
                  </p>
                  <p>
                    Your continued use of the Site after any such changes
                    constitutes your acceptance of the new Terms. If you do not
                    agree to the modified Terms, you must stop using the Site.
                  </p>
                </div>
              </div>

              {/* Section 8: Governing Law */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Scale className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    8. Governing Law
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of the State of California, without regard to
                    its conflict of law provisions. Any legal action or
                    proceeding arising under these Terms will be brought
                    exclusively in the federal or state courts located in
                    Orange County, California, and you consent to the personal
                    jurisdiction and venue of such courts.
                  </p>
                  <p>
                    If any provision of these Terms is found to be
                    unenforceable or invalid, that provision will be limited or
                    eliminated to the minimum extent necessary so that the
                    remaining Terms will otherwise remain in full force and
                    effect.
                  </p>
                </div>
              </div>

              {/* Section 9: Contact */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    9. Contact Information
                  </h2>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <p className="font-semibold text-slate-900">
                      {SITE_CONFIG.name}
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
                </div>
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
