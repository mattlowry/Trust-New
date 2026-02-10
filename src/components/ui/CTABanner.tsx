/**
 * Server component -- call-to-action banner section.
 *
 * Dark teal background with a title, subtitle, insurance verification button,
 * and an optional phone number link. Designed to be placed at the bottom of
 * content pages to drive conversions.
 */
import Link from 'next/link';
import { Phone } from 'lucide-react';

import { SITE_CONFIG } from '@/lib/constants';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  showPhone?: boolean;
}

export function CTABanner({
  title = 'Ready to Start Your Journey?',
  subtitle = 'Recovery begins with a single step. Our compassionate team is here to guide you every step of the way.',
  showPhone = true,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-20 sm:py-24">
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 drop-shadow-md">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-teal-100/80 mb-10 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/insurance"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-500 hover:bg-teal-400 px-8 text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition-all hover:scale-105"
          >
            Verify Insurance Now
          </Link>

          {showPhone && (
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-8 text-base font-semibold text-white transition-all backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.phone.formatted}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
