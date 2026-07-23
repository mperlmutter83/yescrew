import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Yes Crew",
  description:
    "Check out the latest content from Yes Crew on marketing, AI, and growing your local service business with zero upfront cost.",
};

export default function Blog() {
  return (
    <div className="bg-black">
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-white text-center mb-16">
            Check Out Some of Our Latest Content Below
          </h1>
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {post.image ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block w-full aspect-video rounded-lg overflow-hidden bg-neutral-900"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative flex items-center justify-center w-full aspect-video rounded-lg bg-[#1d1c24]"
                  >
                    <span className="text-[#2ea3f2] font-serif text-xl px-6 text-center">
                      {post.title}
                    </span>
                  </Link>
                )}
                <div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl text-white mb-3 hover:text-[#2ea3f2] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-neutral-500 mb-4 font-sans">
                    by mperlmutter | {post.date} | {post.category}
                  </p>
                  <p className="text-neutral-400 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-[#2ea3f2] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
