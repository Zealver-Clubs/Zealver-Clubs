import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { reviewer } from "@/content/site";

/**
 * Review line. Sits directly under the page title, above the content,
 * so the reviewer's credentials are visible without scrolling. The name links
 * to the reviewer's bio page, which is what establishes the person is real.
 */
export function ReviewedBy() {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-muted-foreground">
      <BadgeCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden />
      <span>
        Reviewed by{" "}
        <Link
          href={reviewer.href}
          className="font-bold text-heading underline decoration-primary decoration-2 underline-offset-4 hover:text-secondary"
        >
          {reviewer.fullName}, {reviewer.credentials}
        </Link>
      </span>
      <span aria-hidden>·</span>
      <span>
        Last reviewed{" "}
        <time dateTime={reviewer.lastReviewed}>{reviewer.lastReviewedLabel}</time>
      </span>
    </p>
  );
}
