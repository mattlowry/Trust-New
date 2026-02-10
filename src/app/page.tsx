import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { Hero } from '@/components/layout/Hero';
import { Features } from '@/components/layout/Features';
import { Button } from '@/components/ui/Button';
import { AddictionTypeCard } from '@/components/ui/AddictionTypeCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { InsuranceLogos } from '@/components/ui/InsuranceLogos';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';

import { SITE_CONFIG, ORANGE_COUNTY_CITIES } from '@/lib/constants';
import { generateFAQSchema, generateWebSiteSchema } from '@/lib/schemas';
import { getFAQsByPage } from '@/data/faqs';
import { testimonials } from '@/data/testimonials';
import { addictionTypes } from '@/data/addiction-types';

export default function Home() {
  const homeFAQs = getFAQsByPage('home');
  const featuredAddictionTypes = addictionTypes.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateWebSiteSchema()} />

      <Hero />

      <Features />

      {/* About Preview Section */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-slate-50 skew-y-3 transform origin-top-left -z-10 h-full w-full" />

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Healing with Compassion & Excellence
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  At Trust SoCal, we believe that recovery is possible for everyone. Our facility in Orange County provides a sanctuary for healing, combining luxury amenities with rigorous, evidence-based clinical care.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We don&apos;t just treat the addiction; we treat the whole person. From our comfortable accommodations to our gourmet nutrition plans and holistic therapies, every aspect of your stay is designed to support your journey to wellness.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about-us">
                  <Button size="lg" variant="outline">
                    About Our Vision
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg">
                    Contact Us Today
                  </Button>
                </Link>
              </div>

              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-slate-500">Lives Changed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-slate-500">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Types Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Types of Addiction We Treat
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              We provide specialized, evidence-based treatment for a wide range of substance use disorders. Every program is tailored to your unique needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAddictionTypes.map((type) => (
              <AddictionTypeCard
                key={type.slug}
                name={type.name}
                slug={type.slug}
                description={type.description}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/addiction-types">
              <Button variant="outline" size="lg">
                View All Addiction Types
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Real stories from individuals and families whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                relation={testimonial.relation}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <InsuranceLogos />

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Get answers to common questions about our addiction treatment programs, admissions process, and what to expect.
              </p>
            </div>

            <FAQAccordion faqs={homeFAQs} />
            <JsonLd data={generateFAQSchema(homeFAQs)} />
          </div>
        </div>
      </section>

      {/* Local SEO Block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Serving Orange County & Southern California
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Located in {SITE_CONFIG.address.city}, {SITE_CONFIG.address.stateCode}, Trust SoCal provides addiction treatment services to individuals and families throughout Orange County and the greater Southern California region.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {ORANGE_COUNTY_CITIES.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600">
              <span className="font-medium text-slate-800">{SITE_CONFIG.address.full}</span>
              {' '}&bull;{' '}
              <a
                href={SITE_CONFIG.phone.href}
                className="font-medium text-primary hover:underline"
              >
                {SITE_CONFIG.phone.formatted}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
