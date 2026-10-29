import { ExternalLink } from "lucide-react";
import { getProduct, amazonUrl } from "@/content/products";

/**
 * "Recommended purchases" for a topic, recipe or guide, linked through our
 * Amazon Associates store. It sits straight after the article, where people
 * still are. The disclosure is required by the Associates agreement and must
 * sit next to the links, so it goes under the heading.
 */
const titleLink =
  "inline-flex items-baseline gap-1.5 text-lg font-extrabold text-heading underline decoration-primary decoration-2 underline-offset-4 hover:text-secondary";

function AmazonLink({
  asin,
  className,
  children,
}: {
  asin: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={amazonUrl(asin)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
    >
      {children}
      <ExternalLink className="h-4 w-4 shrink-0 self-center" aria-hidden />
      <span className="sr-only">(opens Amazon in a new tab)</span>
    </a>
  );
}

export function ProductPicks({ ids }: { ids?: string[] }) {
  const picks = (ids ?? [])
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (picks.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="product-picks-heading">
      <h2
        id="product-picks-heading"
        className="text-2xl font-extrabold text-heading"
      >
        Recommended purchases
      </h2>
      <p className="mt-1 text-muted-foreground">
        From our Amazon store. As an Amazon Associate, Zealver Clubs earns from
        qualifying purchases, at no extra cost to you.
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {picks.map((p) => (
          <li
            key={p.id}
            className="rounded-xl border border-border bg-card p-5"
          >
            {p.options ? (
              <h3 className="text-lg font-extrabold text-heading">{p.name}</h3>
            ) : (
              <AmazonLink asin={p.asin} className={titleLink}>
                {p.name}
              </AmazonLink>
            )}
            <p className="mt-1.5 text-lg leading-relaxed text-foreground">{p.why}</p>
            {p.options ? (
              <>
                <p className="mt-3 font-bold text-heading">Choose a brand:</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {p.options.map((o) => (
                    <li key={o.asin}>
                      <AmazonLink
                        asin={o.asin}
                        className="inline-flex min-h-12 items-center gap-1.5 rounded-full border-2 border-border px-4 font-bold text-secondary transition-colors hover:border-primary hover:bg-secondary-soft"
                      >
                        {o.label}
                      </AmazonLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
