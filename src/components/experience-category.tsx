import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { ExperienceCard } from "@/components/content-cards";
import {
  experienceCategoryBySlug,
  experienceItemsIn,
  experienceCategories,
} from "@/content/experience";

/**
 * One category of experience, as its own page. The three pages are thin
 * wrappers around this so that headings, breadcrumbs and the onward links
 * stay identical between them.
 */
export function ExperienceCategoryPage({ slug }: { slug: string }) {
  const category = experienceCategoryBySlug.get(slug);
  if (!category) return null;

  const items = experienceItemsIn(category.category);
  const others = experienceCategories.filter((c) => c.slug !== slug);

  return (
    <Section className="py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Experience", href: "/experience" },
          { label: category.title },
        ]}
      />
      <SectionHeading as="h1" title={category.title} intro={category.intro} />

      {items.length > 0 ? (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.slug} className="relative">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-xl border border-border bg-card p-6 text-lg text-muted-foreground">
          Nothing is scheduled here just now. Do get in touch and we will let
          you know as soon as something is.
        </p>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">
          Other ways to join
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {others.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/experience/${c.slug}`}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 font-bold text-heading hover:border-primary hover:text-secondary"
              >
                {c.title}
                <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
