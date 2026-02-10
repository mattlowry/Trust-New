import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { insuranceProviders } from '@/data/insurance-providers';

export function InsuranceLogos() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Insurance We Accept
          </h2>
          <p className="mt-2 text-slate-600">
            We work with most major insurance providers to make treatment accessible.
          </p>
        </div>

        {/* Provider grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {insuranceProviders.map((provider) => (
            <div
              key={provider.slug}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-teal-300 hover:shadow-md"
            >
              {provider.name}
            </div>
          ))}
        </div>

        {/* Fallback link */}
        <div className="mt-8 text-center">
          <p className="text-slate-600">
            Don&apos;t see your insurance?{' '}
            <Link
              href="/insurance"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact us to verify your coverage
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
