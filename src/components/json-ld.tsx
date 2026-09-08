/**
 * Renders a JSON-LD structured-data block. Server component, plain script tag,
 * so search engines and AI crawlers can read the facts without executing JS.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
