"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AZStrip } from "@/components/az-strip";
import { TopicCard, GuideCard } from "@/components/content-cards";
import type { Topic } from "@/content/topics";
import type { Guide } from "@/content/guides";

const firstLetter = (s: string) => s.trim().charAt(0).toUpperCase();

export function HubBrowser({
  topics,
  guides,
}: {
  topics: Topic[];
  guides: Guide[];
}) {
  const [query, setQuery] = useState("");
  const [topicLetter, setTopicLetter] = useState<string | null>(null);
  const [guideLetter, setGuideLetter] = useState<string | null>(null);

  const q = query.trim().toLowerCase();

  const topicLetters = useMemo(
    () => new Set(topics.map((t) => firstLetter(t.title))),
    [topics],
  );
  const guideLetters = useMemo(
    () => new Set(guides.map((g) => firstLetter(g.title))),
    [guides],
  );

  const filteredTopics = topics.filter((t) => {
    const matchesQuery =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q);
    const matchesLetter = !topicLetter || firstLetter(t.title) === topicLetter;
    return matchesQuery && matchesLetter;
  });

  const filteredGuides = guides.filter((g) => {
    const matchesQuery =
      !q ||
      g.title.toLowerCase().includes(q) ||
      g.intro.toLowerCase().includes(q);
    const matchesLetter = !guideLetter || firstLetter(g.title) === guideLetter;
    return matchesQuery && matchesLetter;
  });

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-xl">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <label htmlFor="hub-search" className="sr-only">
          Search topics and guides
        </label>
        <input
          id="hub-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics & guides…"
          className="min-h-14 w-full rounded-full border-2 border-border bg-card pl-13 pr-5 text-lg text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
          style={{ paddingLeft: "3.25rem" }}
        />
      </div>

      {/* Guides */}
      <div className="mt-10">
        <h2 className="text-2xl font-extrabold text-heading">Guides</h2>
        <p className="mt-1 text-muted-foreground">
          Step-by-step walkthroughs that bring several topics together.
        </p>
        <div className="mt-4">
          <AZStrip
            idPrefix="guides"
            active={guideLetter}
            available={guideLetters}
            onSelect={setGuideLetter}
          />
        </div>
        {filteredGuides.length > 0 ? (
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGuides.map((g) => (
              <li key={g.slug} className="relative">
                <GuideCard guide={g} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-xl bg-muted p-6 text-muted-foreground">
            No guides match your search yet.
          </p>
        )}
      </div>

      {/* Topics, stacked below Guides, equal visual weight */}
      <div className="mt-14">
        <h2 className="text-2xl font-extrabold text-heading">Topics</h2>
        <p className="mt-1 text-muted-foreground">
          One subject at a time. Browse A–Z or search above.
        </p>
        <div className="mt-4">
          <AZStrip
            idPrefix="topics"
            active={topicLetter}
            available={topicLetters}
            onSelect={setTopicLetter}
          />
        </div>
        {filteredTopics.length > 0 ? (
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((t) => (
              <li key={t.slug} className="relative">
                <TopicCard topic={t} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 rounded-xl bg-muted p-6 text-muted-foreground">
            No topics match your search yet.
          </p>
        )}
      </div>
    </div>
  );
}
