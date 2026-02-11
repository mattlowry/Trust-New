import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AddictionTypeCardProps {
  name: string;
  slug: string;
  description: string;
}

export function AddictionTypeCard({ name, slug, description }: AddictionTypeCardProps) {
  return (
    <Link
      href={`/addiction-types/${slug}`}
      className={cn(
        'group block rounded-2xl border border-slate-100 border-l-4 border-l-teal-500 bg-white p-6 shadow-sm',
        'transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1'
      )}
    >
      {/* Addiction type name */}
      <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Truncated description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
        {description}
      </p>

      {/* Learn More link */}
      <span className="inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-teal-700">
        Learn More
        <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
