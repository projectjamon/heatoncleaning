import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { cities } from "@/lib/data/cities";
import { getAllPosts } from "@/lib/blog";

const staticRoutes = [
  "",
  "our-services",
  "how-we-work",
  "faq",
  "careers",
  "contact",
  "blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}/${route ? `${route}/` : ""}`,
    lastModified: now,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/${s.slug}/`,
    lastModified: now,
  }));

  const cityEntries: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${site.url}/${c.slug}/`,
    lastModified: now,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${site.url}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
  }));

  return [...staticEntries, ...serviceEntries, ...cityEntries, ...postEntries];
}
