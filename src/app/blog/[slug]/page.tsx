import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getAllPostSlugs } from "@/lib/blog-data";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found - Yes Crew" };
  return {
    title: `${post.title} - Yes Crew`,
    description: post.excerpt,
  };
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];

  const flushList = (key: string) => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key} className="list-disc list-inside space-y-2 text-neutral-300 mb-6 ml-2">
          {listBuffer.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  blocks.forEach((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
      listBuffer.push(...items.map((l) => l.trim().slice(2)));
      return;
    }

    flushList(`list-${idx}`);

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={idx} className="text-2xl text-white mt-10 mb-4">
          {renderInline(trimmed.slice(4))}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={idx} className="text-3xl text-white mt-12 mb-5">
          {renderInline(trimmed.slice(3))}
        </h2>
      );
    } else {
      elements.push(
        <p key={idx} className="text-neutral-300 text-lg leading-relaxed mb-6">
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushList("list-final");
  return elements;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="bg-black">
      <article className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-[#2ea3f2] text-sm font-semibold hover:underline font-sans"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl text-white mt-6 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-neutral-500 text-sm mb-10 font-sans">
            by mperlmutter | {post.date} | {post.category}
          </p>
          {post.image && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div>{renderContent(post.content)}</div>
        </div>
      </article>

      {/* RELATED POSTS */}
      <section className="py-16 px-6 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-white mb-10">
            More from Yes Crew
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                {p.image && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-neutral-900">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-lg text-white group-hover:text-[#2ea3f2] transition-colors">
                  {p.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-1 font-sans">
                  {p.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl text-white mb-6">
          Ready to Get Clients with Zero Upfront Cost?
        </h2>
        <Link
          href="/apply-to-risk-free-marketing"
          className="inline-block bg-[#2ea3f2] text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
        >
          👉 Apply for Risk FREE Marketing®
        </Link>
      </section>
    </div>
  );
}
