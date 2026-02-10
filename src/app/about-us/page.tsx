import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Heart, Shield, Users } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTABanner } from '@/components/ui/CTABanner';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { H2, Lead, Paragraph } from '@/components/ui/Typography';

import { getFAQsByPage } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'About Us | Trust SoCal - Premier Addiction Treatment in Orange County',
  description: 'Learn about Trust SoCal, a JCAHO-accredited addiction treatment center in Fountain Valley. Our mission is to provide compassionate, evidence-based care for lasting recovery.',
};

const differentiators = [
  {
    title: 'Clinical Excellence',
    description: 'Our programs are led by licensed medical professionals and therapists who specialize in addiction medicine and dual diagnosis treatment.',
    icon: Shield,
  },
  {
    title: 'Compassionate Care',
    description: 'We believe in treating every individual with dignity and respect. Our staff provides a supportive, non-judgmental environment for healing.',
    icon: Heart,
  },
  {
    title: 'Personalized Treatment',
    description: 'No two recovery journeys are the same. We create customized treatment plans tailored to your unique history, needs, and goals.',
    icon: Users,
  },
  {
    title: 'Committed to Results',
    description: 'We use evidence-based therapies with proven outcomes. Our goal is to help you build a solid foundation for long-term sobriety.',
    icon: CheckCircle2,
  },
];

const modalities = [
  'Cognitive Behavioral Therapy (CBT)',
  'Dialectical Behavior Therapy (DBT)',
  'Trauma-Informed Care',
  'Family Systems Therapy',
  'Motivational Interviewing',
  'Holistic Therapies (Yoga, Meditation)',
];

const stats = [
  { label: 'Success Rate', value: '95%', sub: 'Client Satisfaction' },
  { label: 'Clinical Staff', value: '24/7', sub: 'Medical Coverage' },
  { label: 'Recovery', value: '100%', sub: 'Commitment to You' },
];

export default function AboutPage() {
  const faqs = getFAQsByPage('about');

  return (
    <>
      <PageHero
        title="About Trust SoCal"
        subtitle="A sanctuary for healing and transformation in the heart of Orange County."
        backgroundImage="/images/generated/about_facility_garden.png"
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about-us' },
        ]}
      />

      {/* Mission & Vision - Split Layout */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2">Our Mission</h3>
                <H2 className="mb-6">Empowering Lasting Recovery</H2>
                <div className="h-1 w-20 bg-primary rounded-full mb-8" />
                <Lead>
                  Our mission is to empower individuals to reclaim their lives from addiction through comprehensive, evidence-based treatment in a supportive and dignified environment.
                </Lead>
              </div>

              <div className="space-y-6">
                <Paragraph>
                  We strive to be more than just a treatment center; we aim to be a partner in your journey to wellness. By addressing the root causes of addiction and providing the tools for sustainable change, we help our clients build a future filled with hope and purpose.
                </Paragraph>
                <Paragraph>
                  At Trust SoCal, we combine medical expertise with holistic care to treat the whole person—mind, body, and spirit.
                </Paragraph>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {modalities.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder/Loading state */}
                <Image
                  src="/images/generated/home_about_interior.png" // Reusing high-quality interior shot
                  alt="Trust SoCal Interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating Value Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden lg:block">
                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                <p className="text-slate-900 font-bold text-lg mb-1">Years of Excellence</p>
                <p className="text-slate-500 text-sm">Serving the Orange County community with dedication and integrity.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Story / Founder's Message */}
      <Section variant="muted">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <H2>Our Story & Approach</H2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4 mb-6" />
            <Lead>
              Trust SoCal was founded on the belief that everyone deserves high-quality, compassionate care. We identified a need for a treatment center that bridges the gap between luxury comfort and rigorous clinical standards.
            </Lead>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/generated/about_facility_garden.png"
                alt="Peaceful Garden at Trust SoCal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-teal-900/10 transition-colors" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                <div className="absolute -top-4 -left-4 text-6xl text-teal-100 font-serif">"</div>
                <Paragraph className="italic text-lg text-slate-700 relative z-10">
                  Recovery is not just about stopping substance use; it&apos;s about creating a life you don&apos;t want to escape from. Our goal is to provide the safe, nurturing environment where that transformation can begin.
                </Paragraph>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-12 w-12 bg-slate-200 rounded-full overflow-hidden relative">
                    {/* Placeholder for founder image */}
                    <div className="absolute inset-0 bg-teal-500 flex items-center justify-center text-white font-bold">T</div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Leadership Team</p>
                    <p className="text-sm text-primary">Trust SoCal</p>
                  </div>
                </div>
              </div>

              <Paragraph>
                Located in the coastal community of Fountain Valley, specifically chosen for its serene atmosphere and proximity to medical resources, Trust SoCal provides the ideal setting for detox and residential treatment.
              </Paragraph>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Us - Grid */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <h3 className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2">The Trust SoCal Difference</h3>
            <H2>Why Choose Us?</H2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4 mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((diff) => (
              <div key={diff.title} className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-white text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <diff.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{diff.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section with Image Background */}
      <Section variant="brand" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/about_stats_texture.png"
            alt="Abstract Texture"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-xl font-medium text-teal-400 mb-1">{stat.label}</p>
                <p className="text-sm text-slate-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <H2>Questions About Our Center?</H2>
              <Lead className="mt-4">
                Common questions about our facility, staff, and admission requirements.
              </Lead>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </Container>
      </Section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
