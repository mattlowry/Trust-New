/**
 * Server component -- semantic breadcrumb navigation with inline JSON-LD.
 *
 * Renders an accessible <nav> with an ordered list and automatically outputs a
 * BreadcrumbList structured data script via the JsonLd component.
 */
import Link from 'next/link';

import { JsonLd } from '@/components/ui/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import { SITE_CONFIG } from '@/lib/constants';

interface BreadcrumbItemProps {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemProps[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Map component props to the schema generator's expected shape
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: item.href ? `${SITE_CONFIG.url}${item.href}` : SITE_CONFIG.url,
  }));

  return (
    <>
      {/* Structured data */}
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />

      {/* Visible breadcrumb trail */}
      <nav aria-label="Breadcrumb" className="px-4 py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1">
                {/* Separator */}
                {index > 0 && (
                  <span
                    className="text-slate-400 select-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}

                {isLast || !item.href ? (
                  <span
                    className="text-slate-500"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-primary transition-colors hover:text-primary/80"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
