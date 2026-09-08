"use client";

import { useState } from "react";
import { MonitorSmartphone, Users } from "lucide-react";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MediaImage } from "@/components/media-image";
import { ExperienceCard } from "@/components/content-cards";
import type { ExperienceItem } from "@/content/experience";
import { cn } from "@/lib/utils";

type Mode = "in-person" | "online";

/**
 * Experience chooser: two large stacked cards are the only decision.
 * Choosing a mode filters the listing below. Both listings stay on the page
 * because users are actively comparing.
 */
export function ExperienceChooser({ items }: { items: ExperienceItem[] }) {
  const [mode, setMode] = useState<Mode>("in-person");
  const filtered = items.filter((i) => i.mode === mode);

  const choices: {
    mode: Mode;
    title: string;
    label: string;
    Icon: typeof Users;
    img: string;
  }[] = [
    {
      mode: "in-person",
      title: "In-Person",
      label: "Choose In-Person",
      Icon: Users,
      img: "/images/community-celebration.jpg",
    },
    {
      mode: "online",
      title: "Online",
      label: "Choose Online",
      Icon: MonitorSmartphone,
      img: "/images/class-seated-dance.jpg",
    },
  ];

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {choices.map(({ mode: m, title, label, Icon, img }) => {
          const selected = mode === m;
          return (
            <Card
              key={m}
              className={cn(
                "flex flex-col transition-colors",
                selected ? "ring-2 ring-primary" : "hover:border-secondary/40",
              )}
            >
              <MediaImage
                src={img}
                alt={`${title} Zealver session`}
                label={`Photo, ${title} class`}
                ratio="16/9"
                className="border-b"
              />
              <CardBody className="flex flex-1 flex-col">
                <h2 className="flex items-center gap-2 text-2xl font-extrabold text-heading">
                  <Icon className="h-7 w-7 text-primary" aria-hidden /> {title}
                </h2>
                <p className="mt-2 flex-1 text-muted-foreground">
                  {m === "in-person"
                    ? "Meet your local club face to face for seated dance, tea and friendship."
                    : "Join live sessions from home over Zoom, twice a week, with a friendly community."}
                </p>
                <div className="mt-5">
                  <Button
                    size="lg"
                    variant={selected ? "primary" : "outline"}
                    className="w-full"
                    aria-pressed={selected}
                    onClick={() => setMode(m)}
                  >
                    {selected ? `Showing ${title}` : label}
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">Clubs & Events</h2>
        <p aria-live="polite" className="mt-1 text-muted-foreground">
          Showing {filtered.length} {mode === "in-person" ? "in-person" : "online"} option
          {filtered.length === 1 ? "" : "s"}.
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
