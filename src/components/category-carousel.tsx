"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SliderRail } from "@/components/slider-rail";
import { hubCategories } from "@/components/category-art";

/**
 * Home-page Knowledge Hub showcase: one category at a time, illustrated,
 * autoscrolling with manual arrows and dots. Each slide links into the Hub.
 */
export function CategoryCarousel() {
  return (
    <SliderRail
      ariaLabel="Knowledge Hub categories"
      basis="100%"
      autoPlay
      interval={5000}
      showDots
    >
      {hubCategories.map(({ category, blurb, Art }) => (
        <div
          key={category}
          className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2"
        >
          <Art className="h-full md:rounded-none" />
          <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary">
              Knowledge Hub
            </p>
            <h3 className="text-2xl font-extrabold text-heading sm:text-3xl">
              {category}
            </h3>
            <p className="text-lg text-muted-foreground">{blurb}</p>
            <Link
              href="/knowledge-hub"
              className="mt-1 inline-flex min-h-11 w-fit items-center gap-1.5 font-bold text-link hover:underline"
            >
              Browse {category} <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      ))}
    </SliderRail>
  );
}
