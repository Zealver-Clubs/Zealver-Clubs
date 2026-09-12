import type { Metadata } from "next";
import { ExperienceCategoryPage } from "@/components/experience-category";
import { experienceCategoryBySlug } from "@/content/experience";
import { site } from "@/content/site";

const SLUG = "online-classes";
const category = experienceCategoryBySlug.get(SLUG)!;

export const metadata: Metadata = {
  title: `${category.title} | Zealver Clubs`,
  description: category.intro,
  alternates: { canonical: `${site.url}/experience/${SLUG}` },
};

export default function Page() {
  return <ExperienceCategoryPage slug={SLUG} />;
}
