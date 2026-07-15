import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on marketing, local business growth, AI automation, and Risk Free Marketing from Yes Crew. Learn how to get more clients without upfront costs.',
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Check Out Some of Our Latest Content</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Tips, insights, and strategies for growing your local business with Risk Free Marketing.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <span key={category} className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
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
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Apply for Risk Free Marketing today and start getting clients with zero upfront cost.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
