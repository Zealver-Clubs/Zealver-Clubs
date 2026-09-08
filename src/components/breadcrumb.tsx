import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 text-base text-muted-foreground">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="min-h-11 inline-flex items-center font-bold text-secondary hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="min-h-11 inline-flex items-center font-bold text-foreground" aria-current="page">
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="h-4 w-4" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
