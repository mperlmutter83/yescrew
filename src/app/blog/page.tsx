import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on marketing, local business growth, AI automation, and Risk Free Marketing from Yes Crew.',
};

export default function BlogPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Check Out Some of Our Latest Content</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Tips, insights, and strategies for growing your local business with Risk Free Marketing.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <span key={category} className="text-xs bg-red-900/50 text-red-400 px-2 py-1 rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-lg font-semibold mb-2 hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-red-100 mb-8">
            Apply for Risk Free Marketing today and start getting clients with zero upfront cost.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-red-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
