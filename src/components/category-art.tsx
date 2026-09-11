import { cn } from "@/lib/utils";

/**
 * On-brand illustrated assets for Knowledge Hub categories. Scalable SVG, no
 * licensing needed, tuned to the brand palette (orange #f5760a, indigo #2e3194)
 * with a distinct calm mood per category. 16:9.
 */

type ArtProps = { className?: string };

function ArtFrame({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("overflow-hidden bg-muted", className)}
      style={{ aspectRatio: "16 / 9" }}
    >
      <svg
        viewBox="0 0 800 450"
        role="img"
        aria-label={label}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {children}
      </svg>
    </div>
  );
}

/* Balance & safety: seated figure reaching up + a safety shield. */
export function BalanceSafetyArt({ className }: ArtProps) {
  return (
    <ArtFrame
      className={className}
      label="Illustration: a seated person reaching up for balance, with a safety shield"
    >
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3e8" />
          <stop offset="1" stopColor="#ffe6d0" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bs-bg)" />
      <circle cx="250" cy="180" r="150" fill="#ffd9b8" opacity="0.55" />
      <rect x="0" y="360" width="800" height="90" fill="#efe1d1" />
      <g fill="none" stroke="#f5760a" strokeWidth="6" strokeLinecap="round" opacity="0.5">
        <path d="M300 120 q60 -30 120 0" />
        <path d="M470 150 q40 -20 78 6" />
      </g>
      <g fill="#f5760a" opacity="0.7">
        <circle cx="560" cy="120" r="7" />
        <circle cx="210" cy="120" r="6" />
      </g>
      <g fill="#2e3194">
        <rect x="300" y="300" width="150" height="16" rx="8" />
        <rect x="306" y="316" width="14" height="60" rx="7" />
        <rect x="430" y="316" width="14" height="60" rx="7" />
        <rect x="430" y="210" width="14" height="106" rx="7" />
      </g>
      <path d="M360 300 q-6 -70 30 -96 q30 -20 54 6 q14 40 6 90 z" fill="#f5760a" />
      <path d="M405 214 q30 -50 66 -96" fill="none" stroke="#f5760a" strokeWidth="20" strokeLinecap="round" />
      <path d="M372 236 q-46 6 -78 34" fill="none" stroke="#f5760a" strokeWidth="18" strokeLinecap="round" />
      <circle cx="426" cy="150" r="30" fill="#f6a15a" />
      <path d="M400 138 q26 -30 52 0 q-6 -20 -26 -20 q-20 0 -26 20 z" fill="#3a2a1f" />
      <path d="M362 300 q0 40 -34 58" fill="none" stroke="#2e3194" strokeWidth="22" strokeLinecap="round" />
      <path d="M406 300 q4 42 -18 58" fill="none" stroke="#24276f" strokeWidth="22" strokeLinecap="round" />
      <g transform="translate(600 250)">
        <path d="M60 0 L112 20 V70 C112 108 90 134 60 148 C30 134 8 108 8 70 V20 Z" fill="#2e3194" />
        <path d="M60 12 L100 27 V70 C100 100 83 122 60 134 C37 122 20 100 20 70 V27 Z" fill="#3a3fb0" />
        <path d="M40 74 l14 16 l30 -38" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </ArtFrame>
  );
}

/* Movement: a figure with arms raised, music notes and motion. */
export function MovementArt({ className }: ArtProps) {
  return (
    <ArtFrame className={className} label="Illustration: a person dancing with music notes">
      <defs>
        <linearGradient id="mv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1e6" />
          <stop offset="1" stopColor="#ffdcc4" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#mv-bg)" />
      <circle cx="400" cy="200" r="160" fill="#ffd0ad" opacity="0.5" />
      <rect x="0" y="368" width="800" height="82" fill="#f0e0d0" />
      {/* motion arcs */}
      <g fill="none" stroke="#f5760a" strokeWidth="7" strokeLinecap="round" opacity="0.55">
        <path d="M250 250 q-40 -40 -20 -96" />
        <path d="M560 250 q40 -40 20 -96" />
      </g>
      {/* figure */}
      <path d="M368 300 q-8 -74 32 -100 q34 -18 56 10 q14 44 4 90 z" fill="#f5760a" />
      <path d="M406 214 q40 -46 84 -70" fill="none" stroke="#f5760a" strokeWidth="20" strokeLinecap="round" />
      <path d="M372 220 q-40 -44 -78 -66" fill="none" stroke="#f5760a" strokeWidth="20" strokeLinecap="round" />
      <circle cx="424" cy="150" r="30" fill="#f6a15a" />
      <path d="M398 140 q26 -30 52 0 q-6 -22 -26 -22 q-20 0 -26 22 z" fill="#3a2a1f" />
      <path d="M372 300 q-6 44 -40 60" fill="none" stroke="#2e3194" strokeWidth="22" strokeLinecap="round" />
      <path d="M414 300 q10 40 44 54" fill="none" stroke="#24276f" strokeWidth="22" strokeLinecap="round" />
      {/* music notes */}
      <g fill="#2e3194">
        <circle cx="196" cy="176" r="16" />
        <rect x="209" y="112" width="9" height="66" rx="4" />
        <circle cx="612" cy="150" r="14" />
        <rect x="623" y="92" width="8" height="60" rx="4" />
        <path d="M623 92 q26 6 30 26 q-14 -16 -30 -10 z" />
      </g>
    </ArtFrame>
  );
}

/* Memory: a calm profile head with a warm spark and gentle waves. */
export function MemoryArt({ className }: ArtProps) {
  return (
    <ArtFrame className={className} label="Illustration: a calm mind with a warm spark">
      <defs>
        <linearGradient id="mem-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f0eefb" />
          <stop offset="1" stopColor="#e2e0f6" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#mem-bg)" />
      <circle cx="540" cy="210" r="150" fill="#cfcbf0" opacity="0.6" />
      {/* head */}
      <path
        d="M300 360 q-70 0 -70 -110 q0 -120 130 -120 q120 0 120 118 q0 34 -22 52 q10 10 10 30 q0 30 -34 30 z"
        fill="#2e3194"
      />
      <path
        d="M312 348 q-52 0 -52 -100 q0 -100 110 -100 q100 0 100 100 q0 26 -18 42 q10 8 10 26 q0 22 -28 22 z"
        fill="#4a4fc0"
      />
      {/* warm spark / memory glow */}
      <g transform="translate(360 232)">
        <circle r="34" fill="#f5760a" />
        <g stroke="#f5760a" strokeWidth="8" strokeLinecap="round">
          <path d="M0 -56 V-42" />
          <path d="M0 56 V42" />
          <path d="M-56 0 H-42" />
          <path d="M56 0 H42" />
          <path d="M-40 -40 l10 10" />
          <path d="M40 40 l-10 -10" />
          <path d="M40 -40 l-10 10" />
          <path d="M-40 40 l10 -10" />
        </g>
      </g>
      {/* gentle waves */}
      <g fill="none" stroke="#7c78d6" strokeWidth="6" strokeLinecap="round" opacity="0.7">
        <path d="M470 300 q40 -22 80 0" />
        <path d="M470 336 q40 -22 80 0" />
      </g>
    </ArtFrame>
  );
}

/* Food & energy: a warm bowl of colourful vegetables and an apple. */
export function FoodEnergyArt({ className }: ArtProps) {
  return (
    <ArtFrame className={className} label="Illustration: a bowl of colourful vegetables">
      <defs>
        <linearGradient id="fe-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef6e6" />
          <stop offset="1" stopColor="#dcecca" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#fe-bg)" />
      <circle cx="300" cy="190" r="150" fill="#c9e2a3" opacity="0.55" />
      <rect x="0" y="366" width="800" height="84" fill="#e2ecd2" />
      {/* veg poking above the bowl */}
      <circle cx="330" cy="228" r="46" fill="#e24b4a" />
      <circle cx="404" cy="216" r="52" fill="#f5760a" />
      <circle cx="474" cy="232" r="42" fill="#639922" />
      <path d="M404 168 q-6 -30 18 -44 q-6 26 -18 44 z" fill="#3b6d11" />
      {/* bowl */}
      <path d="M262 250 h256 a12 12 0 0 1 12 12 q0 92 -140 92 q-140 0 -140 -92 a12 12 0 0 1 12 -12 z" fill="#2e3194" />
      <path d="M280 262 h220 q-8 60 -110 60 q-102 0 -110 -60 z" fill="#4a4fc0" />
      {/* apple */}
      <g transform="translate(560 250)">
        <path d="M0 20 q-30 -22 -30 8 q0 44 30 52 q30 -8 30 -52 q0 -30 -30 -8 z" fill="#e24b4a" />
        <rect x="-3" y="-4" width="6" height="22" rx="3" fill="#3b6d11" />
        <path d="M4 2 q22 -12 30 4 q-20 -2 -30 -4 z" fill="#639922" />
      </g>
    </ArtFrame>
  );
}

/* Rest: a calm night with a crescent moon, stars and a soft cushion. */
export function RestArt({ className }: ArtProps) {
  return (
    <ArtFrame className={className} label="Illustration: a calm night for rest and recovery">
      <defs>
        <linearGradient id="rest-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef0fb" />
          <stop offset="1" stopColor="#dfe3f5" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#rest-bg)" />
      <circle cx="540" cy="180" r="150" fill="#cdd3ef" opacity="0.6" />
      {/* crescent moon */}
      <g transform="translate(520 170)">
        <circle r="70" fill="#f5760a" />
        <circle cx="26" cy="-14" r="62" fill="#eef0fb" />
      </g>
      {/* stars */}
      <g fill="#2e3194">
        <path d="M360 120 l6 16 l16 6 l-16 6 l-6 16 l-6 -16 l-16 -6 l16 -6 z" />
        <path d="M628 250 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5 l12 -5 z" />
        <circle cx="300" cy="200" r="5" />
      </g>
      {/* soft cushion */}
      <g transform="translate(150 300)">
        <rect x="0" y="0" width="230" height="120" rx="34" fill="#2e3194" />
        <rect x="16" y="16" width="198" height="88" rx="26" fill="#4a4fc0" />
      </g>
    </ArtFrame>
  );
}

/* Bones & strength: a standing figure lifting, with a strength arc. */
export function BonesStrengthArt({ className }: ArtProps) {
  return (
    <ArtFrame
      className={className}
      label="Illustration: a person standing tall and lifting, with a strength arc"
    >
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#eef0ff" />
          <stop offset="1" stopColor="#dcdffb" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#bs-bg)" />
      <circle cx="400" cy="205" r="165" fill="#c9cdf5" opacity="0.45" />
      <rect x="0" y="368" width="800" height="82" fill="#dfe1f2" />
      {/* strength arcs */}
      <g fill="none" stroke="#2e3194" strokeWidth="7" strokeLinecap="round" opacity="0.45">
        <path d="M236 236 q-34 -54 -6 -110" />
        <path d="M572 236 q34 -54 6 -110" />
      </g>
      {/* torso */}
      <path d="M366 304 q-6 -78 34 -104 q34 -16 56 12 q12 46 2 92 z" fill="#2e3194" />
      {/* arms raised, holding weights */}
      <path d="M404 214 q34 -48 74 -62" fill="none" stroke="#2e3194" strokeWidth="21" strokeLinecap="round" />
      <path d="M372 218 q-34 -46 -72 -60" fill="none" stroke="#2e3194" strokeWidth="21" strokeLinecap="round" />
      <rect x="458" y="132" width="46" height="24" rx="11" fill="#f5760a" />
      <rect x="276" y="134" width="46" height="24" rx="11" fill="#f5760a" />
      {/* head */}
      <circle cx="422" cy="152" r="30" fill="#f6a15a" />
      <path d="M396 142 q26 -30 52 0 q-6 -22 -26 -22 q-20 0 -26 22 z" fill="#3a2a1f" />
      {/* legs, planted */}
      <path d="M374 304 q-10 42 -34 64" fill="none" stroke="#24276f" strokeWidth="23" strokeLinecap="round" />
      <path d="M416 304 q10 42 36 64" fill="none" stroke="#24276f" strokeWidth="23" strokeLinecap="round" />
      {/* upward chevrons */}
      <g fill="none" stroke="#f5760a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M638 214 l26 -28 l26 28" />
        <path d="M638 262 l26 -28 l26 28" opacity="0.6" />
      </g>
    </ArtFrame>
  );
}

const byCategory: Record<string, (p: ArtProps) => React.ReactElement> = {
  "balance & safety": BalanceSafetyArt,
  movement: MovementArt,
  memory: MemoryArt,
  "food & energy": FoodEnergyArt,
  rest: RestArt,
  "bones & strength": BonesStrengthArt,
};

/** Returns an art component for a category, or null when none applies. */
export function categoryArt(category: string) {
  return byCategory[category.toLowerCase()] ?? null;
}

/** Ordered categories for the home-page Knowledge Hub carousel. */
export const hubCategories: {
  category: string;
  blurb: string;
  Art: (p: ArtProps) => React.ReactElement;
}[] = [
  {
    category: "Food & energy",
    blurb: "Everyday eating that gives you steady energy and lasting wellbeing.",
    Art: FoodEnergyArt,
  },
  {
    category: "Rest",
    blurb: "Calming routines for better sleep and gentle, restful recovery.",
    Art: RestArt,
  },
  {
    category: "Balance & safety",
    blurb: "Stay steady on your feet, prevent falls and make everyday spaces safer.",
    Art: BalanceSafetyArt,
  },
  {
    category: "Movement",
    blurb: "Gentle, music-led movement that builds strength and lifts your mood.",
    Art: MovementArt,
  },
  {
    category: "Memory",
    blurb: "Simple habits and activities that support memory and a sharp mind.",
    Art: MemoryArt,
  },
];
