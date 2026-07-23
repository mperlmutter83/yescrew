const API_BASE = "https://yescrew-dashboard.vercel.app/api/posts";

export interface ApiBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  image_url: string | null;
  category: string | null;
  author: string;
  publish_at: string | null;
  created_at: string;
}

export interface RenderPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  content: string;
}

export async function getPosts(siteDomain: string): Promise<ApiBlogPost[]> {
  try {
    const res = await fetch(
      `${API_BASE}?site=${encodeURIComponent(siteDomain)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.posts || [];
  } catch {
    return [];
  }
}

export async function getPost(
  siteDomain: string,
  slug: string
): Promise<ApiBlogPost | null> {
  try {
    const res = await fetch(
      `${API_BASE}?site=${encodeURIComponent(siteDomain)}&slug=${encodeURIComponent(slug)}`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.post || null;
  } catch {
    return null;
  }
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function toRenderPost(p: ApiBlogPost): RenderPost {
  return {
    slug: p.slug,
    title: p.title,
    date: formatDate(p.publish_at || p.created_at),
    category: p.category || "Marketing",
    excerpt: p.excerpt || "",
    image: p.image_url || undefined,
    content: p.content,
  };
}
