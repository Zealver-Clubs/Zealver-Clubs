"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accessible horizontal slider with large arrows, optional autoplay and dots.
 * Scroll-snap driven, so swipe and keyboard both work. Autoplay pauses on
 * hover/focus and is disabled entirely for prefers-reduced-motion.
 */
export function SliderRail({
  children,
  ariaLabel,
  basis = "100%",
  autoPlay = false,
  interval = 6000,
  showDots = false,
  className,
}: {
  children: ReactNode;
  ariaLabel: string;
  basis?: string;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  className?: string;
}) {
  const items = (Array.isArray(children) ? children : [children]).filter(Boolean);
  const count = items.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = (i + count) % count;
      const slide = track.children[clamped] as HTMLElement | undefined;
      if (!slide) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: reduce ? "auto" : "smooth",
      });
      setIndex(clamped);
    },
    [count],
  );

  // Keep dots/index in sync when the user swipes or scrolls manually.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const sl = track.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((c, i) => {
      const d = Math.abs((c as HTMLElement).offsetLeft - sl);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setIndex(best);
  }, []);

  // Autoplay: advance on a timer, reset whenever index/pause changes.
  useEffect(() => {
    if (!autoPlay || paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => goTo(index + 1), interval);
    return () => clearTimeout(id);
  }, [autoPlay, paused, count, index, interval, goTo]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <ul
        ref={trackRef}
        onScroll={onScroll}
        aria-label={ariaLabel}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, i) => (
          <li
            key={i}
            className="shrink-0 snap-start"
            style={{ flexBasis: basis, width: basis, maxWidth: "100%" }}
          >
            {child}
          </li>
        ))}
      </ul>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-secondary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden />
          </button>

          {showDots && (
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-3 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-primary"
                      : "w-3 bg-border hover:bg-secondary/40",
                  )}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(index + 1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-secondary hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
          >
            <ChevronRight className="h-7 w-7" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}
