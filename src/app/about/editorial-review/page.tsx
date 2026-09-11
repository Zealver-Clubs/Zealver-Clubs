import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { site, reviewer, contentPolicy } from "@/content/site";
import { topics } from "@/content/topics";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: `How we write and review | Zealver Clubs`,
  description: `Knowledge Hub articles and guides are reviewed by ${reviewer.fullName}, ${reviewer.credentials}, before publishing. How our health content is written, reviewed and kept up to date.`,
  alternates: { canonical: `${site.url}${reviewer.href}` },
};

export default function EditorialReviewPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    honorificPrefix: reviewer.honorificPrefix,
    name: reviewer.name,
    jobTitle: reviewer.jobTitle,
    description: reviewer.bio[0],
    url: `${site.url}${reviewer.href}`,
    hasCredential: reviewer.credentials
      .split(", ")
      .map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: c,
      })),
    worksFor: { "@type": "Organization", name: site.name, url: site.url },
    sameAs: [reviewer.linkedin],
  };

  return (
    <Section className="max-w-3xl py-8">
      <JsonLd data={personSchema} />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "How we write and review" }]}
      />
      <SectionHeading
        as="h1"
        title="How we write and review"
        intro="How the Knowledge Hub is written, reviewed and kept up to date."
      />

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <p className="flex items-center gap-2 text-sm font-bold text-primary">
          <BadgeCheck className="h-5 w-5 shrink-0" aria-hidden /> Reviewer
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-heading">
          {reviewer.fullName}
        </h2>
        <p className="mt-1 text-lg text-muted-foreground">
          {reviewer.credentials}
        </p>
        <p className="mt-1 text-base text-muted-foreground">
          {reviewer.jobTitle}
        </p>
        <div className="mt-4 flex flex-col gap-3 text-lg leading-relaxed text-foreground">
          {reviewer.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">
          How we write and review
        </h2>
        <div className="mt-3 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
          <p>
            Knowledge Hub articles and guides are written by the Zealver Clubs
            team, drawing on the scripts and sessions we run with our members.
            We use AI assistance in drafting, and every piece is then read and
            reviewed by {reviewer.fullName} before it is published.
          </p>
          <p>
            Our content is activity-first. It is about movement, habits,
            confidence and connection, and it is written for women 60+ who want
            practical things they can try this week. We revisit each article
            periodically and update the review date when we do.
          </p>
          <p>{contentPolicy.disclaimer}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">
          Reviewed content
        </h2>
        <p className="mt-1 text-muted-foreground">
          {topics.length} topics and {guides.length} guides, all reviewed by{" "}
          {reviewer.fullName}.
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/knowledge-hub/guides/${g.slug}`}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 font-bold text-heading hover:border-primary hover:text-secondary"
              >
                {g.title}
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              </Link>
            </li>
          ))}
          {topics.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/knowledge-hub/topics/${t.slug}`}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 font-bold text-heading hover:border-primary hover:text-secondary"
              >
                {t.title}
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
