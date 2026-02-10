/**
 * Server component that renders a JSON-LD structured data script tag.
 *
 * Usage:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", ... }} />
 */
export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
