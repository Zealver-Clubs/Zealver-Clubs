import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Clock, Users } from "lucide-react";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { MediaImage } from "@/components/media-image";
import { ListenButton } from "@/components/listen-button";
import { JsonLd } from "@/components/json-ld";
import { ReviewedBy } from "@/components/reviewed-by";
import { ContentDisclaimer } from "@/components/content-disclaimer";
import { ReferencesList } from "@/components/references-list";
import { HubCta } from "@/components/hub-cta";
import { site, reviewer } from "@/content/site";
import { recipes, getRecipe } from "@/content/recipes";
import { getTopic } from "@/content/topics";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return { title: "Not found | Zealver Clubs" };
  return {
    title: `${recipe.title} | Knowledge Hub`,
    description: recipe.summary,
    alternates: { canonical: `${site.url}/knowledge-hub/recipes/${recipe.slug}` },
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  const related = recipe.relatedTopics
    .map((s) => getTopic(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const url = `${site.url}/knowledge-hub/recipes/${recipe.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title.replace(/^Recipe:\s*/, ""),
    description: recipe.summary,
    inLanguage: "en",
    mainEntityOfPage: url,
    url,
    recipeYield: `${recipe.serves} servings`,
    prepTime: recipe.prepTimeIso,
    recipeCategory: "Salad",
    recipeCuisine: "European",
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
    ...(recipe.image ? { image: `${site.url}${recipe.image}` } : {}),
    recipeIngredient: recipe.ingredients.flatMap((g) => g.items),
    recipeInstructions: recipe.method.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
  };

  return (
    <Section className="max-w-3xl py-8">
      <JsonLd data={schema} />
      <Breadcrumb
        items={[
          { label: "Knowledge Hub", href: "/knowledge-hub" },
          { label: "Recipes", href: "/knowledge-hub" },
          { label: recipe.title },
        ]}
      />

      <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">
        {recipe.title}
      </h1>
      <ReviewedBy />

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-soft px-3 py-1 text-sm font-bold text-secondary">
          <Users className="h-4 w-4" aria-hidden /> Serves {recipe.serves}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-soft px-3 py-1 text-sm font-bold text-secondary">
          <Clock className="h-4 w-4" aria-hidden /> {recipe.prepTime}
        </span>
        <ListenButton
          text={`${recipe.title}. ${recipe.summary} ${recipe.intro.join(" ")} Ingredients. ${recipe.ingredients
            .flatMap((g) => g.items)
            .join(". ")}. Method. ${recipe.method.join(" ")}`}
        />
      </div>

      {recipe.image ? (
        <figure className="mt-6">
          <MediaImage
            src={recipe.image}
            alt={recipe.imageAlt ?? recipe.title}
            label={`Photo, ${recipe.title}`}
            ratio="16/9"
            className="rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {recipe.imageCredit ? (
            <figcaption className="mt-2 text-sm text-muted-foreground">
              {recipe.imageCredit}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-foreground">
        {recipe.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {recipe.keyPoints?.length ? (
        <aside className="mt-6 rounded-xl border-2 border-primary/25 bg-primary-soft/40 p-5">
          <h2 className="text-xl font-extrabold text-heading">In short</h2>
          <ul className="mt-3 flex flex-col gap-2.5">
            {recipe.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2.5 text-lg leading-relaxed text-foreground">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-heading">Ingredients</h2>
        {recipe.ingredients.map((group, i) => (
          <div key={i} className="mt-4">
            {group.group ? (
              <h3 className="text-lg font-extrabold text-heading">{group.group}</h3>
            ) : null}
            <ul className="mt-2 flex flex-col gap-2.5 text-lg leading-relaxed text-foreground">
              {group.items.map((item, j) => (
                <li key={j} className="flex gap-3">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-extrabold text-heading">Method</h2>
        <ol className="mt-4 flex flex-col gap-4">
          {recipe.method.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-base font-extrabold text-secondary-foreground">
                {i + 1}
              </span>
              <p className="pt-1 text-lg leading-relaxed text-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {recipe.notes?.length ? (
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold text-heading">Good to know</h2>
          <ul className="mt-3 flex flex-col gap-3 text-lg leading-relaxed text-foreground">
            {recipe.notes.map((n, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-heading">Related reading</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {related.map((t) => (
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
      )}

      <HubCta />
      <ReferencesList references={recipe.references} />
      <ContentDisclaimer />
    </Section>
  );
}
