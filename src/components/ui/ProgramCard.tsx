import Link from 'next/link';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  name: string;
  slug: string;
  tagline: string;
  icon: string;
  duration: string;
}

export function ProgramCard({ name, slug, tagline, icon, duration }: ProgramCardProps) {
  return (
    <Link
      href={`/programs/${slug}`}
      className={cn(
        'group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm',
        'transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
      )}
    >
      {/* Icon circle with first letter */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-xl font-bold text-white shadow-md">
        {name.charAt(0)}
      </div>

      {/* Program name */}
      <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Tagline */}
      <p className="mb-5 text-sm leading-relaxed text-slate-600">
        {tagline}
      </p>

      {/* Duration badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
        <Clock className="h-3.5 w-3.5" />
        {duration}
      </div>
    </Link>
  );
}
