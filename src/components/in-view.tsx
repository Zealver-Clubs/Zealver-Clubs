"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Defers rendering of heavy children (third-party embeds) until they are near
 * the viewport. Reserves a min-height so there is no layout shift. Improves
 * initial load and Lighthouse by keeping Instagram/YouTube off the critical path.
 */
export function InView({
  children,
  minHeight = 420,
  rootMargin = "300px",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown, rootMargin]);

  return (
    <div ref={ref} style={shown ? undefined : { minHeight }}>
      {shown ? children : null}
    </div>
  );
}
