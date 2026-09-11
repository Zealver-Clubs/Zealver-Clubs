import { ExternalLink } from "lucide-react";
import type { Reference } from "@/content/references";

/**
 * Sources for an article or guide. Deliberately quiet: it sits above the
 * disclaimer, in smaller type, so it reassures without turning a practical
 * page for readers 60+ into something that looks like a journal paper.
 */
export function ReferencesList({ references }: { references?: Reference[] }) {
  if (!references || references.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby="references-heading">
      <h2
        id="references-heading"
        className="text-2xl font-extrabold text-heading"
      >
        Sources
      </h2>
      <p className="mt-1 text-muted-foreground">
        The guidance on this page draws on the following.
      </p>
      <ol className="mt-4 flex flex-col gap-4">
        {references.map((r, i) => (
          <li
            key={i}
            className="rounded-xl border border-border bg-card p-4 text-base leading-relaxed"
          >
            <p className="font-bold text-heading">
              {r.url ? (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1.5 underline decoration-primary decoration-2 underline-offset-4 hover:text-secondary"
                >
                  {r.title}
                  <ExternalLink className="h-4 w-4 shrink-0 self-center" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                r.title
              )}
            </p>
            <p className="mt-1 text-muted-foreground">
              {r.publisher} · {r.year}
            </p>
            <p className="mt-1 text-muted-foreground">
              <span className="font-bold">Supports:</span> {r.supports}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
