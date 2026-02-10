import { Metadata } from 'next';
import {
  AlertTriangle,
  Stethoscope,
} from 'lucide-react';

import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { JsonLd } from '@/components/ui/JsonLd';
import { AddictionTypeCard } from '@/components/ui/AddictionTypeCard';
import { generatePageMetadata } from '@/lib/metadata';
import { generateFAQSchema } from '@/lib/schemas';
import { addictionTypes } from '@/data/addiction-types';
import { getFAQsByPage } from '@/data/faqs';

export const metadata: Metadata = generatePageMetadata({
  title: 'Types of Addiction We Treat | Substance Use Disorders',
  description:
    "Learn about the types of addiction treated at Trust SoCal in Orange County including alcohol, opioids, fentanyl, meth, cocaine, benzodiazepines, and more.",
  path: '/addiction-types',
});

const warningSignsList = [
  'Inability to stop or control substance use despite a genuine desire to quit',
  'Needing increased amounts of a substance to achieve the same effect (tolerance)',
  'Experiencing physical or psychological withdrawal symptoms when not using',
  'Neglecting responsibilities at work, school, or home because of substance use',
  'Continuing to use despite worsening health, relationships, or financial situation',
  'Spending a significant amount of time obtaining, using, or recovering from substances',
  'Giving up hobbies, social activities, or interests that were previously enjoyed',
  'Using substances in physically dangerous situations, such as driving',
  'Hiding or lying about the extent of substance use to family and friends',
  'Feeling unable to cope with daily life without the substance',
];

export default function AddictionTypesPage() {
  const pageFaqs = getFAQsByPage('addiction-types');

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        title="Types of Addiction We Treat"
        subtitle="Understanding addiction is the first step toward recovery"
      />

      {/* 2. Breadcrumbs */}
      <div className="container mx-auto max-w-6xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Addiction Types' },
          ]}
        />
      </div>

      {/* 3. Understanding Addiction */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-8">
            Understanding Addiction
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Addiction is a chronic, relapsing medical condition that affects
              the brain&apos;s reward circuitry, motivation centers, and
              decision-making processes. It is not a matter of willpower, moral
              weakness, or personal choice. Like diabetes or hypertension,
              addiction involves measurable changes in brain chemistry and
              structure that require professional medical treatment to address
              effectively.
            </p>
            <p>
              Substance use disorders develop through a complex interaction of
              genetic predisposition, environmental factors, mental health
              conditions, and the pharmacological properties of the substance
              itself. At Trust SoCal, we approach every addiction as a
              treatable medical condition and design individualized treatment
              plans that address the biological, psychological, and social
              dimensions of the disease.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Addiction Types Grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Substances We Treat
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Trust SoCal provides specialized treatment for a wide range of
              substance use disorders. Select any substance below to learn
              more about our approach.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addictionTypes.map((type) => (
              <AddictionTypeCard
                key={type.slug}
                name={type.name}
                slug={type.slug}
                description={type.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Signs & Symptoms */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="h-7 w-7 text-secondary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              General Warning Signs of Addiction
            </h2>
          </div>
          <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">
            While every substance produces unique effects, the following
            behavioral and psychological signs are common across all forms
            of addiction.
          </p>
          <ul className="space-y-3">
            {warningSignsList.map((sign, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                <span className="text-slate-600">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Treatment Approach */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Stethoscope className="h-7 w-7 text-primary flex-shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How Trust SoCal Treats Substance Use Disorders
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              Our clinical team develops an individualized treatment plan for
              every client based on a comprehensive medical, psychiatric, and
              psychosocial assessment completed within the first 48 hours of
              admission. Treatment may include medically supervised detox,
              medication-assisted treatment (MAT), evidence-based individual
              and group therapies, holistic wellness practices, and robust
              aftercare planning.
            </p>
            <p>
              We treat the whole person, not just the substance. Co-occurring
              mental health conditions such as depression, anxiety, PTSD, and
              bipolar disorder are addressed simultaneously through our dual
              diagnosis program. Our full continuum of care -- including
              medical detox, residential treatment, PHP, and IOP -- ensures
              that each client receives the right level of support at every
              stage of their recovery.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      {pageFaqs.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={pageFaqs} />
            <JsonLd data={generateFAQSchema(pageFaqs)} />
          </div>
        </section>
      )}

      {/* 8. CTA Banner */}
      <CTABanner />
    </>
  );
}
