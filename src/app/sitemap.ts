import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { topics } from "@/content/topics";
import { guides } from "@/content/guides";
import { experienceItems } from "@/content/experience";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${site.url}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/experience"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/knowledge-hub"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: u("/our-approach"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/become-a-host"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = experienceItems.map((e) => ({
    url: u(`/experience/${e.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const topicRoutes: MetadataRoute.Sitemap = topics.map((t) => ({
    url: u(`/knowledge-hub/topics/${t.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: u(`/knowledge-hub/guides/${g.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...experienceRoutes, ...topicRoutes, ...guideRoutes];
}
