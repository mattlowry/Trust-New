/**
 * Server component -- full-width hero banner for page tops.
 *
 * Renders a ~40vh hero with an optional background image (dark overlay applied)
 * or falls back to a teal-900 gradient. Content is centered white text with an
 * H1 title and descriptive subtitle.
 */
interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-24 pb-16"
      style={
        hasImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Overlay / gradient fallback */}
      {hasImage ? (
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900"
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
