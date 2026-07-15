import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-600">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- **') || trimmedLine.startsWith('- ')) {
        const text = trimmedLine.replace(/^- \*\*(.+)\*\*:?/, '$1:').replace(/^- /, '');
        currentList.push(text);
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine.length > 0) {
        flushList();
        // Handle bold text
        const formattedText = trimmedLine.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p
            key={index}
            className="text-gray-600 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span key={category} className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Apply for Risk Free Marketing and start growing your business with zero upfront cost.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
