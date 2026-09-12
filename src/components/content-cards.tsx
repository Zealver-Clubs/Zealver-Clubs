import Link from "next/link";
import { ArrowRight, BookOpen, Compass, CookingPot } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";
import { MediaImage } from "@/components/media-image";
import type { Topic } from "@/content/topics";
import type { Guide } from "@/content/guides";
import type { Recipe } from "@/content/recipes";
import type { ExperienceItem } from "@/content/experience";

/** Compact topic card: title, category, summary, link. */
export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Card className="h-full transition-colors hover:border-secondary/40">
      <CardBody className="flex h-full flex-col">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-soft px-3 py-1 text-sm font-bold text-secondary">
          <BookOpen className="h-4 w-4" aria-hidden /> {topic.category}
        </span>
        <h3 className="mt-3 text-xl font-extrabold text-heading">
          <Link
            href={`/knowledge-hub/topics/${topic.slug}`}
            className="after:absolute after:inset-0"
          >
            {topic.title}
          </Link>
        </h3>
        <p className="mt-2 text-muted-foreground">{topic.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-bold text-link">
          Read topic <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </CardBody>
    </Card>
  );
}

/** Guide card with a photo placeholder, kept at equal visual weight. */
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Card className="relative h-full transition-colors hover:border-secondary/40">
      <MediaImage
        src={guide.image}
        alt={guide.imageAlt ?? guide.title}
        label={`Photo, ${guide.title}`}
        ratio="3/2"
        className="border-b"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <CardBody className="flex h-full flex-col">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-sm font-bold text-primary">
          <Compass className="h-4 w-4" aria-hidden /> Guide
        </span>
        <h3 className="mt-3 text-xl font-extrabold text-heading">
          <Link
            href={`/knowledge-hub/guides/${guide.slug}`}
            className="after:absolute after:inset-0"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="mt-2 text-muted-foreground">{guide.intro}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-bold text-link">
          Open guide <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </CardBody>
    </Card>
  );
}

/** Experience listing card (club / event / instructor). */
export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card className="relative h-full transition-colors hover:border-secondary/40">
      <MediaImage
        src={item.image}
        alt={item.title}
        label={`Photo, ${item.title}`}
        ratio="3/2"
        className="border-b"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <CardBody className="flex h-full flex-col">
        <p className="text-sm font-bold uppercase tracking-wide text-primary">
          {item.meta}
        </p>
        <h3 className="mt-2 text-xl font-extrabold text-heading">
          {item.comingSoon ? (
            item.title
          ) : (
            <Link
              href={`/experience/${item.slug}`}
              className="after:absolute after:inset-0"
            >
              {item.title}
            </Link>
          )}
        </h3>
        <p className="mt-2 text-muted-foreground">{item.blurb}</p>
        {item.comingSoon ? (
          <span className="mt-4 inline-flex w-fit items-center rounded-full bg-muted px-3 py-1 text-sm font-bold text-muted-foreground">
            Coming soon
          </span>
        ) : (
          <span className="mt-4 inline-flex items-center gap-1 font-bold text-link">
            View details <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </CardBody>
    </Card>
  );
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="relative h-full transition-colors hover:border-secondary/40">
      <MediaImage
        src={recipe.image}
        alt={recipe.imageAlt ?? recipe.title}
        label={`Photo, ${recipe.title}`}
        ratio="3/2"
        className="border-b"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <CardBody className="flex h-full flex-col">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-sm font-bold text-primary">
          <CookingPot className="h-4 w-4" aria-hidden /> {recipe.tag}
        </span>
        <h3 className="mt-2 text-lg font-extrabold text-heading">
          <Link
            href={`/knowledge-hub/recipes/${recipe.slug}`}
            className="after:absolute after:inset-0"
          >
            {recipe.title}
          </Link>
        </h3>
        <p className="mt-2 text-muted-foreground">{recipe.summary}</p>
      </CardBody>
    </Card>
  );
}
