import type { MetadataRoute } from "next";

const base = "https://www.yescrew.com";

export const dynamic = "force-dynamic";

const CENTRAL_API =
  "https://yescrew-dashboard.vercel.app/api/posts?site=yescrew.com";

interface CentralPost {
  slug: string;
  publish_at: string | null;
}

// Blog posts: no local /api/posts feed on this site, so pull the central blog
// API directly and include every published post (publish_at <= now).
async function getPublishedPosts(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(CENTRAL_API, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    const now = new Date().toISOString();
    return ((data.posts ?? []) as CentralPost[])
      .filter((p) => p.publish_at !== null && p.publish_at <= now)
      .map((p) => ({
        url: `${base}/blog/${p.slug}`,
        lastModified: (p.publish_at as string).slice(0, 10),
      }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["","/about-us","/apply-to-risk-free-marketing","/blog","/contact-us","/privacy-policy","/risk-free-marketing","/service-provider-opt-in","/terms-of-service"];
  const posts = await getPublishedPosts();
  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...posts,
  ];
}
