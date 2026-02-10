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
      className="relative flex min-h-[45vh] items-center justify-center overflow-hidden pt-32 pb-20"
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
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-slate-900/80 to-slate-900/90 mix-blend-multiply" />
        {!hasImage && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-100 text-xs font-medium mb-6 backdrop-blur-sm">
          Trust SoCal Treatment Center
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 shadow-black/10 drop-shadow-lg">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-teal-50/90 sm:text-xl leading-relaxed font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
