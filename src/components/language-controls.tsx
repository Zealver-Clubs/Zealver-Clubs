"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, X } from "lucide-react";
import { LANGUAGES, currentLanguage, setLanguage } from "@/components/translate";
import { cn } from "@/lib/utils";

/**
 * Language switcher, deliberately its own control rather than an item inside
 * the display settings menu.
 *
 * The reader who most needs this is the one whose English is weakest, and that
 * reader cannot read a label telling them where translation lives. A globe on
 * its own is the one thing they can find without reading anything, so it sits
 * in the header in its own right and shows the current language beside it.
 */
export function LanguageControls() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setLang(currentLanguage()), []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (
        !panelRef.current?.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        translate="no"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Change language. Currently ${active.label}`}
        title="Change language"
        onClick={() => setOpen((v) => !v)}
        className="notranslate inline-flex min-h-12 items-center gap-1.5 rounded-full border-2 border-border px-3 text-secondary transition-colors hover:border-primary hover:bg-secondary-soft"
      >
        <Globe className="h-6 w-6 shrink-0" aria-hidden />
        <span className="text-sm font-extrabold leading-none" aria-hidden>
          {active.code.toUpperCase()}
        </span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Choose a language"
          className="absolute right-0 z-50 mt-2 w-64 rounded-2xl border border-border bg-card p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-heading">Language</h2>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div
            className="mt-3 flex flex-col gap-2"
            role="group"
            aria-label="Language"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                lang={l.code}
                translate="no"
                aria-pressed={lang === l.code}
                onClick={() => setLanguage(l.code)}
                className={cn(
                  "notranslate flex min-h-12 items-center gap-3 rounded-xl border-2 px-3 text-lg font-bold transition-colors",
                  lang === l.code
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border text-foreground hover:border-primary/50",
                )}
              >
                {l.native}
                {l.native !== l.label && (
                  <span className="sr-only"> ({l.label})</span>
                )}
                {lang === l.code && (
                  <Check className="ml-auto h-5 w-5 shrink-0" aria-hidden />
                )}
              </button>
            ))}
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Translated automatically by Google. Wording may not be exact, so the
            English page stays the original.
          </p>
        </div>
      )}
    </div>
  );
}
