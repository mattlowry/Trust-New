import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  image: string;
  specialties: string[];
}

export function TeamMemberCard({
  name,
  title,
  credentials,
  bio,
  image,
  specialties,
}: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm',
        'transition-all duration-300 hover:shadow-lg hover:border-teal-200'
      )}
    >
      {/* Image area */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${title}`}
          width={400}
          height={400}
          unoptimized
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>

        {/* Title */}
        <p className="text-sm font-medium text-primary">{title}</p>

        {/* Credentials */}
        <p className="mb-3 text-xs text-slate-500">{credentials}</p>

        {/* Bio */}
        <p className="mb-4 text-sm leading-relaxed text-slate-600">{bio}</p>

        {/* Specialty badges */}
        {specialties.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="inline-block rounded-full bg-teal-50 border border-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-700"
              >
                {specialty}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
