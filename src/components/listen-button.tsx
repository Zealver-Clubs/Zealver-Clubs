"use client";

import { useEffect, useState } from "react";
import { Volume2, Square, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type State = "idle" | "playing" | "paused";

/**
 * Read-aloud control for an article. Uses the browser's built-in speech
 * synthesis (no network, no cost). Hidden if the browser has no support.
 */
export function ListenButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [supported, setSupported] = useState(true);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!supported) return null;

  const start = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.lang = "en-IN";
    utter.onend = () => setState("idle");
    utter.onerror = () => setState("idle");
    synth.speak(utter);
    setState("playing");
  };

  const toggle = () => {
    const synth = window.speechSynthesis;
    if (state === "idle") return start();
    if (state === "playing") {
      synth.pause();
      setState("paused");
      return;
    }
    synth.resume();
    setState("playing");
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setState("idle");
  };

  const primaryLabel =
    state === "idle" ? "Listen to this page" : state === "playing" ? "Pause" : "Resume";
  const PrimaryIcon = state === "playing" ? Pause : state === "paused" ? Play : Volume2;

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <button
        type="button"
        onClick={toggle}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-secondary px-4 font-bold text-secondary hover:bg-secondary-soft"
      >
        <PrimaryIcon className="h-5 w-5" aria-hidden />
        {primaryLabel}
      </button>
      {state !== "idle" && (
        <button
          type="button"
          onClick={stop}
          aria-label="Stop"
          className="grid min-h-11 min-w-11 place-items-center rounded-full border-2 border-border text-foreground hover:border-secondary"
        >
          <Square className="h-4 w-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
