import type { Metadata } from "next";
import { ExperienceCategoryPage } from "@/components/experience-category";
import { experienceCategoryBySlug } from "@/content/experience";
import { pageMeta } from "@/lib/seo";

const SLUG = "in-person-classes";
const category = experienceCategoryBySlug.get(SLUG)!;

export const metadata: Metadata = pageMeta({
  title: category.title,
  description: category.intro,
  path: `/experience/${SLUG}`,
  image: category.image,
  imageAlt: `${category.title} at Zealver Clubs`,
});

export default function Page() {
  return <ExperienceCategoryPage slug={SLUG} />;
}
