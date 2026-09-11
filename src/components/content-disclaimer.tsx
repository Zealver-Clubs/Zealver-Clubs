import Link from "next/link";
import { reviewer, contentPolicy } from "@/content/site";

/**
 * Closing block for every Knowledge Hub article and guide: the medical
 * disclaimer, then a quieter note on how the piece was produced. Caveats sit
 * at the end of the page by design, so the reviewer line leads and this follows.
 */
export function ContentDisclaimer() {
  return (
    <aside className="mt-12 rounded-xl border border-border bg-muted p-6">
      <h2 className="text-lg font-extrabold text-heading">
        {contentPolicy.disclaimerHeading}
      </h2>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        {contentPolicy.disclaimer}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {contentPolicy.aiNote} Reviewed by{" "}
        <Link
          href={reviewer.href}
          className="font-bold underline decoration-primary decoration-2 underline-offset-4 hover:text-secondary"
        >
          {reviewer.fullName}, {reviewer.credentials}
        </Link>
        , on{" "}
        <time dateTime={reviewer.lastReviewed}>{reviewer.lastReviewedLabel}</time>.
      </p>
    </aside>
  );
}
