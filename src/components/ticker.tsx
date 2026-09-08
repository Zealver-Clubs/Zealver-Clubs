import {
  Activity,
  Music,
  Brain,
  Sparkles,
  Dumbbell,
  Users,
  Smile,
  HeartHandshake,
  Scale,
  Star,
  Link as LinkIcon,
  Sun,
  type LucideIcon,
} from "lucide-react";

const KEYWORDS: { label: string; Icon: LucideIcon }[] = [
  { label: "Movement", Icon: Activity },
  { label: "Music", Icon: Music },
  { label: "Memory", Icon: Brain },
  { label: "Meaning", Icon: Sparkles },
  { label: "Fitness", Icon: Dumbbell },
  { label: "Friendship", Icon: Users },
  { label: "Happiness", Icon: Smile },
  { label: "Community", Icon: HeartHandshake },
  { label: "Balance", Icon: Scale },
  { label: "Confidence", Icon: Star },
  { label: "Connection", Icon: LinkIcon },
  { label: "Joy", Icon: Sun },
];

function ChipRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden}>
      {KEYWORDS.map(({ label, Icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 font-bold text-secondary"
        >
          <Icon className="h-4 w-4 text-primary" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}

/**
 * Slow, continuous keyword ticker. CSS-driven marquee that pauses on hover and
 * becomes a static wrapped row for reduced-motion users. Two identical rows sit
 * in the track so the loop is seamless; only the first is read by screen readers.
 */
export function Ticker() {
  return (
    <div
      className="ticker-mask w-full py-1"
      role="group"
      aria-label="What Zealver Clubs is about"
    >
      <div className="ticker-track">
        <ChipRow />
        <ChipRow hidden />
      </div>
    </div>
  );
}
