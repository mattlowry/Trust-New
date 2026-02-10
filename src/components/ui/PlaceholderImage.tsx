/**
 * Server component -- thin wrapper around next/image with a fallback
 * placeholder div when no src is provided.
 *
 * Uses `unoptimized` for external URLs (e.g. Unsplash) so Next.js does not
 * attempt to run them through its image optimisation pipeline.
 */
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: PlaceholderImageProps) {
  if (!src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-slate-200 text-slate-400',
          className
        )}
        style={{ width, height }}
        role="img"
        aria-label={alt || 'Image placeholder'}
      >
        <span className="text-sm">Image Placeholder</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
