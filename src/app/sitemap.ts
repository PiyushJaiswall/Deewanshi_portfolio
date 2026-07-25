import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/data-fetchers";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: `${SITE_CONFIG.url}/`, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${SITE_CONFIG.url}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_CONFIG.url}/work`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_CONFIG.url}/copywriting`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_CONFIG.url}/gallery`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_CONFIG.url}/contact`, changeFrequency: "yearly" as const, priority: 0.6 },
  ];

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${SITE_CONFIG.url}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
