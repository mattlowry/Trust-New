import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { ContactForm } from '@/components/ui/ContactForm';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2, Lead, Paragraph, H3 } from '@/components/ui/Typography';
import { JsonLd } from '@/components/ui/JsonLd';

import { SITE_CONFIG, ORANGE_COUNTY_CITIES } from '@/lib/constants';
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schemas';
import { generatePageMetadata } from '@/lib/metadata';
import { getFAQsByPage } from '@/data/faqs';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata = generatePageMetadata({
  title: 'Contact Us | Trust SoCal Addiction Treatment',
  description:
    'Contact Trust SoCal for confidential addiction treatment help. Call (949) 280-8360 or fill out our form. Located in Fountain Valley, serving all of Orange County 24/7.',
  path: '/contact',
});

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const contactFAQs = getFAQsByPage('contact');

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(contactFAQs)} />

      {/* Hero */}
      <PageHero
        title="Contact Us"
        subtitle="We are here to help. Reach out today for a free, confidential consultation about your treatment options."
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact' },
        ]}
      />

      {/* ----------------------------------------------------------------- */}
      {/* Contact Info + Form -- Two-Column Layout                           */}
      {/* ----------------------------------------------------------------- */}
      <Section variant="soft-primary">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* ---- Left Column: Contact Information ---- */}
            <div>
              <H2 className="mb-2">Get in Touch</H2>
              <div className="mb-8 h-1 w-20 rounded-full bg-primary" />
              <Lead className="mb-10">
                Whether you are seeking help for yourself or a loved one, our
                compassionate admissions team is available around the clock to
                answer your questions and guide you through the next steps. All
                calls and inquiries are completely confidential.
              </Lead>

              {/* Semantic address block */}
              <address className="not-italic space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Phone (24/7)
                    </p>
                    <a
                      href={SITE_CONFIG.phone.href}
                      className="text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      {SITE_CONFIG.phone.formatted}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Address
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {SITE_CONFIG.address.street}
                    </p>
                    <p className="text-slate-600">
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateCode}{' '}
                      {SITE_CONFIG.address.zip}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Hours</p>
                    <p className="text-lg font-semibold text-slate-900">
                      Open {SITE_CONFIG.hours.description}
                    </p>
                    <p className="text-slate-600">
                      Admissions and crisis support available any time
                    </p>
                  </div>
                </div>
              </address>

              {/* Quick action buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={SITE_CONFIG.phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <Link
                  href="/insurance"
                  className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-teal-50"
                >
                  Verify Insurance
                </Link>
              </div>
            </div>

            {/* ---- Right Column: Contact Form ---- */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <H3 className="mb-2">Send Us a Message</H3>
              <Paragraph className="mb-8 text-slate-600">
                Fill out the form below and a member of our admissions team will
                reach out within 24 hours. All information is kept strictly
                confidential.
              </Paragraph>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* Google Maps Embed                                                  */}
      {/* ----------------------------------------------------------------- */}
      <Section variant="muted">
        <Container>
          <div className="mb-12 text-center">
            <H2>Our Location</H2>
            <Lead className="mx-auto mt-4 max-w-2xl">
              Located in the heart of Fountain Valley, Trust SoCal is easily
              accessible from anywhere in Orange County and the greater Southern
              California area.
            </Lead>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <iframe
              title="Trust SoCal Location - 16537 Elm Cir, Fountain Valley, CA 92708"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.123456789!2d-117.9533!3d33.7175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s16537+Elm+Cir%2C+Fountain+Valley%2C+CA+92708!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONFIG.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium transition-colors hover:text-primary/80"
            >
              <MapPin className="h-5 w-5" />
              Get Directions on Google Maps
            </a>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* Cities Served                                                      */}
      {/* ----------------------------------------------------------------- */}
      <Section variant="soft-secondary">
        <Container>
          <div className="mb-12 text-center">
            <H2>Proudly Serving Orange County</H2>
            <Lead className="mx-auto mt-4 max-w-2xl">
              Trust SoCal provides addiction treatment services to individuals
              and families across Orange County and the greater Southern
              California region. No matter where you are, help is within reach.
            </Lead>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {ORANGE_COUNTY_CITIES.map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-slate-700">{city}</span>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-slate-500">
              Do not see your city listed? We welcome clients from across
              Southern California and nationwide.{' '}
              <a
                href={SITE_CONFIG.phone.href}
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Call us
              </a>{' '}
              to learn more.
            </p>
          </div>
        </Container>
      </Section>

      {/* ----------------------------------------------------------------- */}
      {/* FAQ Section                                                        */}
      {/* ----------------------------------------------------------------- */}
      <Section variant="muted">
        <Container className="max-w-3xl">
          <div className="mb-12 text-center">
            <H2>Frequently Asked Questions</H2>
            <Lead className="mt-4">
              Have questions about getting started? Find answers to the most
              common questions about contacting Trust SoCal and beginning your
              recovery journey.
            </Lead>
          </div>

          <FAQAccordion faqs={contactFAQs} />
        </Container>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Take the First Step?"
        subtitle="Our admissions team is standing by 24/7 to help you or your loved one begin the journey to recovery. The call is free and completely confidential."
      />
    </>
  );
}
