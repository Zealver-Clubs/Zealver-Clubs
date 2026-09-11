"use client";

import { useEffect, useRef, useState } from "react";
import { Type, Sun, Moon, Contrast, X, Check, Languages, Globe } from "lucide-react";
import { LANGUAGES, currentLanguage, setLanguage } from "@/components/translate";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark" | "contrast";
type TextSize = "normal" | "large" | "larger";

const THEMES: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "contrast", label: "High contrast", Icon: Contrast },
];

const SIZES: { value: TextSize; label: string; sample: string }[] = [
  { value: "normal", label: "Normal", sample: "A" },
  { value: "large", label: "Large", sample: "A+" },
  { value: "larger", label: "Larger", sample: "A++" },
];

export function AccessibilityControls() {
  const [open, setOpen] = useState(false);
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLang] = useState("en");
  const [size, setSizeState] = useState<TextSize>("normal");
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sync UI with whatever the no-flash script already applied.
  useEffect(() => {
    const root = document.documentElement;
    setThemeState((root.dataset.theme as Theme) || "light");
    setLang(currentLanguage());
    setSizeState((root.dataset.text as TextSize) || "normal");
  }, []);

  useEffect(() => {
    if (!open) return;
    // Move focus into the panel so keyboard and screen-reader users land there.
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const setTheme = (value: Theme) => {
    setThemeState(value);
    const root = document.documentElement;
    if (value === "light") delete root.dataset.theme;
    else root.dataset.theme = value;
    try {
      localStorage.setItem("zc-theme", value);
    } catch {}
  };

  const setSize = (value: TextSize) => {
    setSizeState(value);
    const root = document.documentElement;
    if (value === "normal") delete root.dataset.text;
    else root.dataset.text = value;
    try {
      localStorage.setItem("zc-text", value);
    } catch {}
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Text size, language and colour options"
        onClick={() => setOpen((v) => !v)}
        title="Text size, language and colour"
        className="inline-flex min-h-12 items-center gap-1.5 rounded-full border-2 border-border px-3 text-secondary transition-colors hover:border-primary hover:bg-secondary-soft"
      >
        {/* "A" for text size, globe for language: two things people recognise
            faster than one symbol standing for everything. */}
        <span className="text-lg font-extrabold leading-none" aria-hidden>
          A
        </span>
        <Globe className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden whitespace-nowrap text-sm font-bold xl:inline">
          Text &amp; language
        </span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Text size, language and colour options"
          className="absolute right-0 z-50 mt-2 w-72 rounded-2xl border border-border bg-card p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-heading">Text &amp; language</h2>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* Text size */}
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Type className="h-4 w-4 text-primary" aria-hidden /> Text size
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2" role="group" aria-label="Text size">
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  aria-pressed={size === s.value}
                  onClick={() => setSize(s.value)}
                  className={cn(
                    "min-h-11 rounded-xl border-2 font-extrabold transition-colors",
                    size === s.value
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-border text-foreground hover:border-primary/50",
                  )}
                >
                  {s.sample}
                  <span className="sr-only"> {s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Contrast className="h-4 w-4 text-primary" aria-hidden /> Colour theme
            </p>
            <div className="mt-2 flex flex-col gap-2" role="group" aria-label="Colour theme">
              {THEMES.map(({ value, label, Icon }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={theme === value}
                  onClick={() => setTheme(value)}
                  className={cn(
                    "flex min-h-12 items-center gap-3 rounded-xl border-2 px-3 font-bold transition-colors",
                    theme === value
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-border text-foreground hover:border-primary/50",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                  {label}
                  {theme === value && (
                    <Check className="ml-auto h-5 w-5" aria-hidden />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="mt-4">
            <p className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Languages className="h-4 w-4 text-primary" aria-hidden /> Language
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2" role="group" aria-label="Language">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  lang={l.code}
                  translate="no"
                  aria-pressed={lang === l.code}
                  onClick={() => setLanguage(l.code)}
                  className={cn(
                    "notranslate min-h-12 rounded-xl border-2 px-2 font-bold transition-colors",
                    lang === l.code
                      ? "border-primary bg-primary-soft text-primary"
                      : "border-border text-foreground hover:border-primary/50",
                  )}
                >
                  {l.native}
                  {l.native !== l.label && (
                    <span className="sr-only"> ({l.label})</span>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Translated automatically by Google. Wording may not be exact, so
              the English page stays the original.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
