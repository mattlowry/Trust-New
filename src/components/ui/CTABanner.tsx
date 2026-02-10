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
    <section className="relative overflow-hidden bg-teal-900 py-16 sm:py-20">
      {/* Subtle background pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-teal-100/90">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/insurance"
            className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-secondary/90"
          >
            Verify Insurance Now
          </Link>

          {showPhone && (
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-white/10"
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
