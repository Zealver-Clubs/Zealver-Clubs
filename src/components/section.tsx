import { cn } from "@/lib/utils";

type IconType = React.ComponentType<{ className?: string }>;

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("mx-auto w-full max-w-6xl px-3.5 sm:px-6", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  intro,
  as = "h2",
  align = "left",
}: {
  eyebrow?: string;
  icon?: IconType;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
}) {
  const Tag = as;
  const centered = align === "center";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-primary",
            centered && "justify-center",
          )}
        >
          {Icon ? (
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary-soft">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          ) : null}
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-extrabold text-heading",
          as === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
        )}
      >
        {title}
      </Tag>
      {intro ? (
        <p className="mt-3 text-lg text-muted-foreground">{intro}</p>
      ) : null}
    </div>
  );
}
