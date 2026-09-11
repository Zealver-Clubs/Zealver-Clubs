import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { MediaImage } from "@/components/media-image";
import { ListenButton } from "@/components/listen-button";
import { JsonLd } from "@/components/json-ld";
import { site, reviewer } from "@/content/site";
import { ReviewedBy } from "@/components/reviewed-by";
import { ContentDisclaimer } from "@/components/content-disclaimer";
import { guides, getGuide } from "@/content/guides";
import { getTopic } from "@/content/topics";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Not found | Zealver Clubs" };
  return { title: `${guide.title} | Knowledge Hub`, description: guide.intro };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const topicList = guide.topics
    .map((s) => getTopic(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const otherGuides = guide.relatedGuides
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const url = `${site.url}/knowledge-hub/guides/${guide.slug}`;
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.title,
    description: guide.intro,
    inLanguage: "en",
    mainEntityOfPage: url,
    url,
    publisher: { "@type": "Organization", name: site.name },
    reviewedBy: {
      "@type": "Person",
      honorificPrefix: reviewer.honorificPrefix,
      name: reviewer.name,
      jobTitle: reviewer.jobTitle,
      url: `${site.url}${reviewer.href}`,
    },
    lastReviewed: reviewer.lastReviewed,
    ...(guide.image ? { image: `${site.url}${guide.image}` } : {}),
    step: guide.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.n,
      name: s.heading,
      text: s.text,
      url: `${site.url}/knowledge-hub/topics/${s.topicSlug}`,
    })),
  };

  return (
    <Section className="max-w-3xl py-8">
      <JsonLd data={howToSchema} />
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub" },
          { label: "Guides", href: "/knowledge-hub" },
          { label: guide.title },
        ]}
      />

      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">
        {guide.title}
      </h1>
      <ReviewedBy />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-sm font-bold text-primary">
          <Compass className="h-4 w-4" aria-hidden /> {guide.meta}
        </span>
        <ListenButton
          text={`${guide.title}. ${guide.intro} ${guide.steps
            .map((s) => `${s.heading}. ${s.text}`)
            .join(" ")}`}
        />
      </div>

      {/* Intro photo above the text */}
      <div className="mt-6 overflow-hidden rounded-xl">
        <figure>
          <MediaImage
            src={guide.image}
            alt={guide.imageAlt ?? guide.title}
            label={`Photo, ${guide.title}`}
            ratio={guide.imageRatio ?? "16/9"}
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {guide.image && guide.imageCredit ? (
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {guide.imageCredit}
            </figcaption>
          ) : null}
        </figure>
      </div>
      <p className="mt-5 text-xl text-foreground">{guide.intro}</p>

      {/* Step-by-step sections */}
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">Step by step</h2>
        <ol className="mt-5 flex flex-col gap-5">
          {guide.steps.map((step) => (
            <li key={step.n}>
              <Card>
                <CardBody className="flex gap-4">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 flex-none place-items-center rounded-full bg-secondary text-lg font-extrabold text-secondary-foreground"
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-heading">
                      <span className="sr-only">Step {step.n}: </span>
                      {step.heading}
                    </h3>
                    <p className="mt-2 text-foreground">{step.text}</p>
                    <Link
                      href={`/knowledge-hub/topics/${step.topicSlug}`}
                      className="mt-3 inline-flex min-h-11 items-center gap-1 font-bold text-link hover:underline"
                    >
                      Learn more: {step.topicLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </li>
          ))}
        </ol>
      </div>

      {/* All topics in this guide */}
      {topicList.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-heading">
            All topics in this guide
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {topicList.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/knowledge-hub/topics/${t.slug}`}
                  className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 font-bold text-heading hover:border-primary hover:text-secondary"
                >
                  {t.title}
                  <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Other guides you may like */}
      {otherGuides.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-heading">
            Other guides you may like
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {otherGuides.map((g) => (
              <li key={g.slug}>
                <Card className="relative h-full transition-colors hover:border-secondary/40">
                  <MediaImage
                    src={g.image}
                    alt={g.imageAlt ?? g.title}
                    label={`Photo, ${g.title}`}
                    ratio="3/2"
                    className="border-b"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <CardBody>
                    <h3 className="text-lg font-extrabold text-heading">
                      <Link
                        href={`/knowledge-hub/guides/${g.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {g.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-muted-foreground">{g.intro}</p>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ContentDisclaimer />
    </Section>
  );
}
