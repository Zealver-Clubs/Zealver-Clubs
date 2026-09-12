import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Tag, UserRound, ArrowRight, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { experienceItems, getExperienceItem } from "@/content/experience";
import { getTopic } from "@/content/topics";
import { site } from "@/content/site";

export function generateStaticParams() {
  return experienceItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperienceItem(slug);
  if (!item) return { title: "Not found | Zealver Clubs" };
  return {
    title: `${item.title} | Zealver Clubs`,
    description: item.blurb,
    alternates: { canonical: `${site.url}/experience/${item.slug}` },
  };
}

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getExperienceItem(slug);
  if (!item) notFound();

  const related = item.relatedTopics
    .map((s) => getTopic(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const facts = [
    { Icon: CalendarDays, label: "Schedule", value: item.schedule },
    { Icon: Tag, label: "Pricing", value: item.price },
    { Icon: UserRound, label: "Trainer", value: item.trainer },
  ];

  return (
    <Section className="py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Experience", href: "/experience" },
          { label: item.title },
        ]}
      />

      <p className="text-sm font-bold uppercase tracking-wide text-primary">
        {item.meta}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-heading sm:text-4xl">
        {item.title}
      </h1>

      <div className="mt-6 overflow-hidden rounded-xl">
        <MediaImage
          src={item.image}
          alt={item.title}
          label={`Photo, ${item.title}`}
          ratio="16/9"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{item.blurb}</p>

      {/* Facts */}
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {facts.map(({ Icon, label, value }) => (
          <div key={label} className="rounded-xl bg-muted p-4">
            <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary">
              <Icon className="h-5 w-5" aria-hidden /> {label}
            </dt>
            <dd className="mt-1 font-bold text-heading">{value}</dd>
          </div>
        ))}
      </dl>

      {item.location ? (
        <div className="mt-6 rounded-xl border border-border bg-card p-5">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden /> Where
          </h2>
          <p className="mt-2 text-lg font-bold text-heading">
            {item.location.name}
          </p>
          <p className="mt-1 text-lg leading-relaxed text-foreground">
            {item.location.address}
          </p>
          <a
            href={item.location.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-bold text-link hover:underline"
          >
            Open in Maps
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href={site.contact.whatsappHref} size="lg">
          Book on WhatsApp
        </ButtonLink>
        <ButtonLink href="/experience" variant="outline" size="lg">
          Back to all options
        </ButtonLink>
      </div>

      {/* Related reading -> Knowledge Hub */}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-heading">Related reading</h2>
          <p className="mt-1 text-muted-foreground">
            From the Knowledge Hub, to help you get the most from this class.
          </p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((t) => (
              <li key={t.slug}>
                <Card className="relative h-full transition-colors hover:border-secondary/40">
                  <CardBody>
                    <h3 className="text-lg font-extrabold text-heading">
                      <Link
                        href={`/knowledge-hub/topics/${t.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {t.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-muted-foreground">{t.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1 font-bold text-link">
                      Read topic <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
