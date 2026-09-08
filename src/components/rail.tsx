import { cn } from "@/lib/utils";

/**
 * Horizontal swipe rail: one row of cards that scrolls sideways.
 * Used on the home page for "From the Knowledge Hub" and "Follow our journey".
 * Each child sets its own width. Announced as a list for screen readers.
 */
export function Rail({
  children,
  label,
  itemClassName,
}: {
  children: React.ReactNode;
  label: string;
  itemClassName?: string;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <ul className="rail" aria-label={label}>
      {items.map((child, i) => (
        <li key={i} className={cn("min-w-[15rem]", itemClassName)}>
          {child}
        </li>
      ))}
    </ul>
  );
}
