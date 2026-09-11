"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { AZStrip } from "@/components/az-strip";
import { TopicCard, GuideCard, RecipeCard } from "@/components/content-cards";
import type { Topic } from "@/content/topics";
import type { Guide } from "@/content/guides";
import type { Recipe } from "@/content/recipes";

const firstLetter = (s: string) => s.trim().charAt(0).toUpperCase();

/** Cards shown initially, and added each time the reader asks for more. */
const STEP = 3;

/**
 * Incremental reveal. Three more each press rather than the whole list at
 * once, so the page grows at the reader's pace. Anyone who wants to jump
 * straight to a subject has the A-Z strip above.
 */
function ShowMore({
  shown,
  total,
  noun,
  onMore,
  onReset,
}: {
  shown: number;
  total: number;
  noun: string;
  onMore: () => void;
  onReset: () => void;
}) {
  if (total <= STEP) return null;
  const remaining = total - shown;
  const cls =
    "mt-5 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-border px-6 text-lg font-bold text-secondary transition-colors hover:border-primary hover:bg-secondary-soft";

  if (remaining <= 0) {
    return (
      <div className="mt-1">
        <p className="mt-4 text-muted-foreground">
          All {total} {noun} shown.
        </p>
        <button type="button" onClick={onReset} className={cls}>
          Show fewer <ChevronUp className="h-5 w-5 shrink-0" aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <div className="mt-1">
      <p className="mt-4 text-muted-foreground">
        Showing {shown} of {total} {noun}.
      </p>
      <button type="button" onClick={onMore} className={cls}>
        See {Math.min(STEP, remaining)} more
        <ChevronDown className="h-5 w-5 shrink-0" aria-hidden />
      </button>
    </div>
  );
}

export function HubBrowser({
  topics,
  guides,
  recipes,
}: {
  topics: Topic[];
  guides: Guide[];
  recipes: Recipe[];
}) {
  const [query, setQuery] = useState("");
  const [topicLetter, setTopicLetter] = useState<string | null>(null);
  const [guideLetter, setGuideLetter] = useState<string | null>(null);
  const [recipeLetter, setRecipeLetter] = useState<string | null>(null);
  const [guideCount, setGuideCount] = useState(STEP);
  const [topicCount, setTopicCount] = useState(STEP);
  const [recipeCount, setRecipeCount] = useState(STEP);

  const q = query.trim().toLowerCase();

  const topicLetters = useMemo(
    () => new Set(topics.map((t) => firstLetter(t.title))),
    [topics],
  );
  const guideLetters = useMemo(
    () => new Set(guides.map((g) => firstLetter(g.title))),
    [guides],
  );
  // Two letters per recipe: the dish name, and the tag, so every salad is
  // reachable from S whatever the dish happens to be called.
  const recipeLetters = useMemo(
    () =>
      new Set(
        recipes.flatMap((r) => [firstLetter(r.title), firstLetter(r.tag)]),
      ),
    [recipes],
  );

  const filteredRecipes = recipes.filter((r) => {
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.tag.toLowerCase().includes(q);
    const matchesLetter =
      !recipeLetter ||
      firstLetter(r.title) === recipeLetter ||
      firstLetter(r.tag) === recipeLetter;
    return matchesQuery && matchesLetter;
  });

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
          Search topics, guides and recipes
        </label>
        <input
          id="hub-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, guides & recipes…"
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
          <>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.slice(0, guideCount).map(
                (g) => (
                  <li key={g.slug} className="relative">
                    <GuideCard guide={g} />
                  </li>
                ),
              )}
            </ul>
            <ShowMore
              shown={Math.min(guideCount, filteredGuides.length)}
              total={filteredGuides.length}
              noun="guides"
              onMore={() => setGuideCount((n) => n + STEP)}
              onReset={() => setGuideCount(STEP)}
            />
          </>
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
          <>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTopics.slice(0, topicCount).map(
                (t) => (
                  <li key={t.slug} className="relative">
                    <TopicCard topic={t} />
                  </li>
                ),
              )}
            </ul>
            <ShowMore
              shown={Math.min(topicCount, filteredTopics.length)}
              total={filteredTopics.length}
              noun="topics"
              onMore={() => setTopicCount((n) => n + STEP)}
              onReset={() => setTopicCount(STEP)}
            />
          </>
        ) : (
          <p className="mt-6 rounded-xl bg-muted p-6 text-muted-foreground">
            No topics match your search yet.
          </p>
        )}
      </div>

      {/* Recipes */}
      <div className="mt-14">
        <h2 className="text-2xl font-extrabold text-heading">Recipes</h2>
        <p className="mt-1 text-muted-foreground">
          Simple, senior-friendly cooking. Filed by dish name, and by type,
          so every salad is under S.
        </p>
        <div className="mt-4">
          <AZStrip
            idPrefix="recipes"
            active={recipeLetter}
            available={recipeLetters}
            onSelect={setRecipeLetter}
          />
        </div>
        {filteredRecipes.length > 0 ? (
          <>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRecipes.slice(0, recipeCount).map(
                (r) => (
                  <li key={r.slug} className="relative">
                    <RecipeCard recipe={r} />
                  </li>
                ),
              )}
            </ul>
            <ShowMore
              shown={Math.min(recipeCount, filteredRecipes.length)}
              total={filteredRecipes.length}
              noun="recipes"
              onMore={() => setRecipeCount((n) => n + STEP)}
              onReset={() => setRecipeCount(STEP)}
            />
          </>
        ) : (
          <p className="mt-6 rounded-xl bg-muted p-6 text-muted-foreground">
            No recipes match your search yet.
          </p>
        )}
      </div>
    </div>
  );
}
