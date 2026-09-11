import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { site } from "@/content/site";
import { legalDocuments } from "@/content/legal";

export function generateStaticParams() {
  return legalDocuments.map((d) => ({ slug: d.slug }));
}

function getDoc(slug: string) {
  return legalDocuments.find((d) => d.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return { title: "Not found | Zealver Clubs" };
  return {
    title: `${doc.title} | Zealver Clubs`,
    description: `${doc.title} for Zealver Clubs, a brand operated by ${site.legalName}. Effective ${doc.effective}.`,
    alternates: { canonical: `${site.url}/${doc.slug}` },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  return (
    <Section className="max-w-3xl py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: doc.title }]} />
      <SectionHeading
        as="h1"
        title={doc.title}
        intro={`Zealver Clubs™, a brand operated by ${site.legalName}. Effective ${doc.effective}.`}
      />

      <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        {doc.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {doc.sections.map((sec, i) => (
        <section key={i} className="mt-8">
          {sec.heading ? (
            <h2 className="text-2xl font-extrabold text-heading">
              {sec.heading}
            </h2>
          ) : null}
          {sec.paragraphs?.length ? (
            <div
              className={
                sec.emphasis
                  ? "mt-3 flex flex-col gap-3 text-lg font-bold leading-relaxed text-heading"
                  : "mt-3 flex flex-col gap-3 text-lg leading-relaxed text-foreground"
              }
            >
              {sec.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ) : null}
          {sec.list?.length ? (
            <ul className="mt-3 flex flex-col gap-2.5 text-lg leading-relaxed text-foreground">
              {sec.list.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span className={sec.emphasis ? "font-bold" : undefined}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </Section>
  );
}
