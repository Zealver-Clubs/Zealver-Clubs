import { JsonLd } from "@/components/json-ld";

export type FaqItem = {
  question: string;
  /** Paragraphs, then an optional list of points. */
  answer: string[];
  points?: string[];
};

/**
 * Frequently asked questions.
 *
 * Deliberately not an accordion: this audience is often reading on a phone
 * at arm's length, and content hidden behind a tap is content many people
 * never find. Everything is open, and the questions are headings so a
 * screen reader can jump between them.
 *
 * Also emits FAQPage structured data, which is what lets a search engine
 * show the answer directly.
 */
export function Faq({
  items,
  heading = "Common questions",
  intro,
}: {
  items: FaqItem[];
  heading?: string;
  intro?: string;
}) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: [...item.answer, ...(item.points ?? [])].join(" "),
      },
    })),
  };

  return (
    <div className="mt-12">
      <JsonLd data={schema} />
      <h2 className="text-2xl font-extrabold text-heading">{heading}</h2>
      {intro ? (
        <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      ) : null}
      <dl className="mt-5 flex flex-col gap-5">
        {items.map((item) => (
          <div
            key={item.question}
            className="rounded-xl border border-border bg-card p-5 sm:p-6"
          >
            <dt className="text-xl font-extrabold text-heading">
              {item.question}
            </dt>
            <dd className="mt-2">
              {item.answer.map((para, i) => (
                <p key={i} className="mt-2 text-lg leading-relaxed text-foreground">
                  {para}
                </p>
              ))}
              {item.points?.length ? (
                <ul className="mt-3 flex flex-col gap-2.5">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-lg leading-relaxed text-foreground"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
