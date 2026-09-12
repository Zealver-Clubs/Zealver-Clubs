"use client";

import { useState } from "react";
import { CalendarHeart, MonitorSmartphone, Users } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { ExperienceCard } from "@/components/content-cards";
import type { ExperienceItem } from "@/content/experience";
import { cn } from "@/lib/utils";

type Category = "in-person" | "online" | "events";

/**
 * Experience chooser: three cards are the only decision, matching the three
 * things the clubs actually run. An event is an event wherever it is held,
 * so `kind` decides that before `mode` is consulted.
 */
function categoryOf(item: ExperienceItem): Category {
  return item.kind === "event" ? "events" : item.mode;
}

const choices: {
  category: Category;
  title: string;
  blurb: string;
  Icon: typeof Users;
  img: string;
}[] = [
  {
    category: "in-person",
    title: "In-person classes",
    blurb:
      "Meet face to face for seated dance, tea and friendship afterwards.",
    Icon: Users,
    img: "/images/community-celebration.jpg",
  },
  {
    category: "online",
    title: "Online classes",
    blurb:
      "Join live sessions from home over Zoom, twice a week, with a friendly community.",
    Icon: MonitorSmartphone,
    img: "/images/class-seated-dance.jpg",
  },
  {
    category: "events",
    title: "Events",
    blurb:
      "Festival celebrations and get-togethers, open to members and their friends.",
    Icon: CalendarHeart,
    img: "/images/home-experience.jpg",
  },
];

export function ExperienceChooser({ items }: { items: ExperienceItem[] }) {
  const [category, setCategory] = useState<Category>("in-person");

  /**
   * Instructor spotlights are neither a class nor an event, so they do not
   * belong in any of the three. They are still reachable by their own page.
   */
  const listed = items.filter((i) => i.kind !== "instructor");
  const filtered = listed.filter((i) => categoryOf(i) === category);
  const heading =
    choices.find((c) => c.category === category)?.title ?? "Classes and events";

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {choices.map(({ category: c, title, blurb, Icon, img }) => {
          const selected = category === c;
          return (
            <Card
              key={c}
              className={cn(
                "flex flex-col transition-colors",
                selected ? "ring-2 ring-primary" : "hover:border-secondary/40",
              )}
            >
              <MediaImage
                src={img}
                alt={`${title} at Zealver Clubs`}
                label={`Photo, ${title}`}
                ratio="16/9"
                className="border-b"
              />
              <CardBody className="flex flex-1 flex-col">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-heading">
                  <Icon className="h-7 w-7 shrink-0 text-primary" aria-hidden />{" "}
                  {title}
                </h2>
                <p className="mt-2 flex-1 text-muted-foreground">{blurb}</p>
                <div className="mt-5">
                  <Button
                    size="lg"
                    variant={selected ? "primary" : "outline"}
                    className="w-full"
                    aria-pressed={selected}
                    onClick={() => setCategory(c)}
                  >
                    {selected ? `Showing ${title}` : `Choose ${title}`}
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">{heading}</h2>
        <p aria-live="polite" className="mt-1 text-muted-foreground">
          Showing {filtered.length} option{filtered.length === 1 ? "" : "s"}.
        </p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.slug} className="relative">
              <ExperienceCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
