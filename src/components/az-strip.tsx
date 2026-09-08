"use client";

import { cn } from "@/lib/utils";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/**
 * A-Z index strip. Scrolls horizontally on its own single row.
 * Letters with no entries are shown but disabled. Selecting a letter
 * filters the list below (state owned by the parent).
 */
export function AZStrip({
  active,
  available,
  onSelect,
  idPrefix,
}: {
  active: string | null;
  available: Set<string>;
  onSelect: (letter: string | null) => void;
  idPrefix: string;
}) {
  return (
    <div
      className="rail py-1"
      role="group"
      aria-label={`Jump to a letter, ${idPrefix}`}
    >
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={active === null}
        className={cn(
          "min-h-11 min-w-11 rounded-lg px-3 font-bold transition-colors",
          active === null
            ? "bg-secondary text-secondary-foreground"
            : "bg-muted text-foreground hover:bg-secondary-soft",
        )}
      >
        All
      </button>
      {LETTERS.map((letter) => {
        const has = available.has(letter);
        const isActive = active === letter;
        return (
          <button
            key={letter}
            type="button"
            disabled={!has}
            aria-pressed={isActive}
            onClick={() => onSelect(letter)}
            className={cn(
              "min-h-11 min-w-11 rounded-lg font-bold transition-colors",
              isActive && "bg-secondary text-secondary-foreground",
              !isActive && has && "bg-muted text-foreground hover:bg-secondary-soft",
              !has && "bg-transparent text-muted-foreground/40 cursor-not-allowed",
            )}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
