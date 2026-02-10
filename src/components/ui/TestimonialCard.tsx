import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  relation: string;
  rating: number;
}

export function TestimonialCard({ quote, name, relation, rating }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white p-8 shadow-sm border border-slate-100',
        'transition-all duration-300 hover:shadow-md'
      )}
    >
      {/* Decorative quotation mark */}
      <span
        className="pointer-events-none absolute -top-2 left-4 select-none text-8xl font-serif leading-none text-teal-100"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Star rating */}
      <div className="relative mb-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-5 w-5',
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-slate-200 text-slate-200'
            )}
          />
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="relative mb-6 text-slate-700 italic leading-relaxed">
        {quote}
      </blockquote>

      {/* Attribution */}
      <div className="relative border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-slate-900">
          {name}
          <span className="mx-2 text-slate-300" aria-hidden="true">&mdash;</span>
          <span className="font-normal text-slate-500">{relation}</span>
        </p>
      </div>
    </div>
  );
}
