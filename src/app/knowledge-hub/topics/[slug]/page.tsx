import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Compass } from "lucide-react";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Card, CardBody } from "@/components/ui/card";
import { MediaEmbed } from "@/components/media-embed";
import { MediaImage } from "@/components/media-image";
import { categoryArt } from "@/components/category-art";
import { ListenButton } from "@/components/listen-button";
import { JsonLd } from "@/components/json-ld";
import { site, reviewer } from "@/content/site";
import { ReviewedBy } from "@/components/reviewed-by";
import { ContentDisclaimer } from "@/components/content-disclaimer";
import { ReferencesList } from "@/components/references-list";
import { topics, getTopic, topicParagraphs } from "@/content/topics";
import { getGuide } from "@/content/guides";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Not found | Zealver Clubs" };
  return { title: `${topic.title} | Knowledge Hub`, description: topic.summary };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const related = topic.relatedTopics
    .map((s) => getTopic(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const inGuides = topic.guides
    .map((s) => getGuide(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));
  const Art = categoryArt(topic.category);

  const url = `${site.url}/knowledge-hub/topics/${topic.slug}`;
  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.summary,
    articleBody: topicParagraphs(topic).join("\n\n"),
    about: topic.category,
    inLanguage: "en",
    mainEntityOfPage: url,
    url,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    reviewedBy: {
      "@type": "Person",
      honorificPrefix: reviewer.honorificPrefix,
      name: reviewer.name,
      jobTitle: reviewer.jobTitle,
      url: `${site.url}${reviewer.href}`,
    },
    lastReviewed: reviewer.lastReviewed,
    ...(topic.references?.length
      ? {
          citation: topic.references.map((r) => ({
            "@type": "CreativeWork",
            name: r.title,
            publisher: { "@type": "Organization", name: r.publisher },
            datePublished: r.year,
            ...(r.url ? { url: r.url } : {}),
          })),
        }
      : {}),
    ...(topic.youtubeId
      ? {
          video: {
            "@type": "VideoObject",
            name: topic.title,
            description: topic.summary,
            embedUrl: `https://www.youtube.com/embed/${topic.youtubeId}`,
            contentUrl: `https://www.youtube.com/watch?v=${topic.youtubeId}`,
            thumbnailUrl: `https://i.ytimg.com/vi/${topic.youtubeId}/hqdefault.jpg`,
          },
        }
      : {}),
  };

  return (
    <Section className="max-w-3xl py-8">
      <JsonLd data={articleSchema} />
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub" },
          { label: "Topics", href: "/knowledge-hub" },
          { label: topic.title },
        ]}
      />

      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">
        {topic.title}
      </h1>
      <ReviewedBy />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-soft px-3 py-1 text-sm font-bold text-secondary">
          {topic.category}
        </span>
        <ListenButton
          text={`${topic.title}. ${topic.summary} ${topicParagraphs(topic).join(" ")}`}
        />
      </div>

      {/* Video first, full width. Falls back to a photo, category art, then a placeholder. */}
      <div className="mt-6">
        {topic.youtubeId ? (
          <MediaEmbed
            youtubeId={topic.youtubeId}
            title={topic.title}
            label={`Video, ${topic.title} (Zealver channel)`}
          />
        ) : !topic.image && Art ? (
          <Art className="rounded-xl" />
        ) : (
          <figure>
            <MediaImage
              src={topic.image}
              alt={topic.title}
              label={`Video, ${topic.title} (Zealver channel)`}
              ratio="16/9"
              className="rounded-xl"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            {topic.image && topic.imageCredit ? (
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {topic.imageCredit}
              </figcaption>
            ) : null}
          </figure>
        )}
      </div>

      {/* Summary directly under the video */}
      <p className="mt-5 text-xl text-foreground">{topic.summary}</p>

      {/* Scannable takeaways, and a snippet target for search */}
      {topic.keyPoints && topic.keyPoints.length > 0 ? (
        <aside className="mt-6 rounded-xl border-2 border-primary/25 bg-primary-soft/40 p-5">
          <h2 className="text-xl font-extrabold text-heading">In short</h2>
          <ul className="mt-3 flex flex-col gap-2.5">
            {topic.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2.5 text-lg leading-relaxed text-foreground">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      {/* Full write-up. Sections give the page a real heading outline. */}
      {topic.sections && topic.sections.length > 0 ? (
        topic.sections.map((sec, i) => (
          <div key={i} className="mt-8">
            <h2 className="text-2xl font-extrabold text-heading">{sec.heading}</h2>
            <div className="mt-3 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
              {sec.body.map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold text-heading">What to know</h2>
          <div className="mt-3 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
            {topic.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}

      {/* Related topics */}
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-heading">Related topics</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {related.map((t) => (
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

      {/* Appears in these guides */}
      {inGuides.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-heading">
            Appears in these guides
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {inGuides.map((g) => (
              <li key={g.slug}>
                <Card className="relative h-full transition-colors hover:border-secondary/40">
                  <CardBody>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-sm font-bold text-primary">
                      <Compass className="h-4 w-4" aria-hidden /> Guide
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold text-heading">
                      <Link
                        href={`/knowledge-hub/guides/${g.slug}`}
                        className="after:absolute after:inset-0"
                      >
                        {g.title}
                      </Link>
                    </h3>
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ReferencesList references={topic.references} />
      <ContentDisclaimer />
    </Section>
  );
}
