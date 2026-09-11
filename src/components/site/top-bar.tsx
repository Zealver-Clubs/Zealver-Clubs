"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { AccessibilityControls } from "@/components/accessibility-controls";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo height={38} priority />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 font-bold text-foreground hover:bg-secondary-soft hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right controls: accessibility always, plus Join (desktop) / menu (mobile) */}
        <div className="flex items-center gap-1">
          <AccessibilityControls />
          <div className="hidden lg:block">
            <ButtonLink href={site.joinHref} target="_blank" rel="noreferrer">
              Join Our Club
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-full text-secondary hover:bg-secondary-soft lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn("lg:hidden", open ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="border-t border-border px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-4 text-lg font-bold text-foreground hover:bg-secondary-soft hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href={site.joinHref}
                target="_blank"
                rel="noreferrer"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Join Our Club
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
