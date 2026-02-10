import Link from 'next/link';
import { Home, BookOpen, Phone, Mail } from 'lucide-react';

import { SITE_CONFIG } from '@/lib/constants';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-lg text-center">
        {/* 404 indicator */}
        <p className="text-7xl font-bold text-teal-600 sm:text-8xl">404</p>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          We could not find the page you are looking for. It may have been
          moved, removed, or the URL may be incorrect. Let us help you find
          what you need.
        </p>

        {/* Navigation Links */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/programs"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-base font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <BookOpen className="h-4 w-4" />
            Our Programs
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-slate-300 bg-white px-6 text-base font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        {/* Phone Number */}
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            Need immediate help? Call us now:
          </p>
          <a
            href={SITE_CONFIG.phone.href}
            className="mt-2 inline-flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {SITE_CONFIG.phone.formatted}
          </a>
        </div>
      </div>
    </section>
  );
}
