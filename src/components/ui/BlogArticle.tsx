import { Info, AlertTriangle, Lightbulb, Quote } from 'lucide-react';

import type { ContentSection, ContentCallout } from '@/data/blog/types';

// ---------------------------------------------------------------------------
// Callout block
// ---------------------------------------------------------------------------

const calloutConfig = {
  info: {
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    text: 'text-sky-800',
    Icon: Info,
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    Icon: AlertTriangle,
  },
  tip: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    text: 'text-teal-800',
    Icon: Lightbulb,
  },
  quote: {
    bg: 'bg-slate-50',
    border: 'border-slate-300',
    text: 'text-slate-700',
    Icon: Quote,
  },
} as const;

function CalloutBlock({ callout }: { callout: ContentCallout }) {
  const cfg = calloutConfig[callout.type];
  const { Icon } = cfg;

  return (
    <div
      className={`my-6 rounded-xl border ${cfg.border} ${cfg.bg} p-5`}
    >
      <div className="flex gap-3">
        <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${cfg.text}`} />
        <div>
          <p className={`text-sm leading-relaxed ${cfg.text}`}>
            {callout.text}
          </p>
          {callout.attribution && (
            <p className="mt-2 text-xs font-medium text-slate-500">
              &mdash; {callout.attribution}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Subsection renderer
// ---------------------------------------------------------------------------

function SubsectionBlock({
  sub,
}: {
  sub: NonNullable<ContentSection['subsections']>[number];
}) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl scroll-mt-24">
        {sub.heading}
      </h3>
      {sub.paragraphs.map((p, i) => (
        <p key={i} className="mt-3 text-lg leading-relaxed text-slate-600">
          {p}
        </p>
      ))}
      {sub.bullets && (
        <ul className="mt-4 space-y-2">
          {sub.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              <span className="text-slate-600">{b}</span>
            </li>
          ))}
        </ul>
      )}
      {sub.numberedList && (
        <ol className="mt-4 space-y-3">
          {sub.numberedList.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                {i + 1}
              </span>
              <span className="text-slate-600 pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      )}
      {sub.callout && <CalloutBlock callout={sub.callout} />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main article renderer
// ---------------------------------------------------------------------------

interface BlogArticleProps {
  sections: ContentSection[];
}

export function BlogArticle({ sections }: BlogArticleProps) {
  return (
    <div className="prose-custom">
      {sections.map((section, i) => (
        <section key={i} className="mb-10">
          <h2
            id={section.heading
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '')}
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl scroll-mt-24"
          >
            {section.heading}
          </h2>

          {section.paragraphs.map((p, j) => (
            <p
              key={j}
              className="mt-3 text-lg leading-relaxed text-slate-600"
            >
              {p}
            </p>
          ))}

          {section.bullets && (
            <ul className="mt-4 space-y-2">
              {section.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                  <span className="text-slate-600">{b}</span>
                </li>
              ))}
            </ul>
          )}

          {section.numberedList && (
            <ol className="mt-4 space-y-3">
              {section.numberedList.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                    {j + 1}
                  </span>
                  <span className="text-slate-600 pt-0.5">{item}</span>
                </li>
              ))}
            </ol>
          )}

          {section.callout && <CalloutBlock callout={section.callout} />}

          {section.subsections?.map((sub, k) => (
            <SubsectionBlock key={k} sub={sub} />
          ))}
        </section>
      ))}
    </div>
  );
}
