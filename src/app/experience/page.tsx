import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { MediaImage } from "@/components/media-image";
import { experienceCategories, experienceItemsIn } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience | Zealver Clubs",
  description:
    "Weekly seated dance fitness classes in person and online, plus events, from Zealver Clubs. Made for women 60+.",
  alternates: { canonical: `${site.url}/experience` },
};

export default function ExperiencePage() {
  return (
    <Section className="py-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Experience" }]}
      />
      <SectionHeading
        as="h1"
        title="Choose your experience"
        intro="Weekly classes in person, weekly classes online, and events through the year."
      />
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experienceCategories.map((c) => {
          const count = experienceItemsIn(c.category).length;
          return (
            <li key={c.slug} className="relative">
              <Card className="flex h-full flex-col transition-colors hover:border-secondary/40">
                <MediaImage
                  src={c.image}
                  alt={`${c.title} at Zealver Clubs`}
                  label={`Photo, ${c.title}`}
                  ratio="16/9"
                  className="border-b"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <CardBody className="flex flex-1 flex-col">
                  <h2 className="text-2xl font-extrabold text-heading">
                    <Link
                      href={`/experience/${c.slug}`}
                      className="after:absolute after:inset-0"
                    >
                      {c.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-muted-foreground">{c.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-bold text-link">
                    See {count} option{count === 1 ? "" : "s"}
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </span>
                </CardBody>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
