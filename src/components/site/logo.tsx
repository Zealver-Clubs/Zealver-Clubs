import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Brand logo. Uses the real Zealver Clubs wordmark (orange + grey, with the
 * "Fun, Fitness & Friendship" tagline baked in). Kept as an accessible link
 * home. Height is controlled; width stays auto to preserve the ratio.
 */
export function Logo({
  className,
  height = 40,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Zealver Clubs, home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.png"
        alt="Zealver Clubs"
        width={755}
        height={203}
        priority={priority}
        className="w-auto"
        style={{ height }}
      />
    </Link>
  );
}
