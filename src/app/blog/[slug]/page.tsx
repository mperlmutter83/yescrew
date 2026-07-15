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
    return { title: 'Post Not Found' };
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

  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-400">
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
          <h2 key={index} className="text-xl font-bold text-white mt-8 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-lg font-semibold text-white mt-6 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ')) {
        const text = trimmedLine.replace(/^- \*\*(.+)\*\*:?/, '$1:').replace(/^- /, '');
        currentList.push(text);
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine.length > 0) {
        flushList();
        const formattedText = trimmedLine.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>');
        elements.push(
          <p
            key={index}
            className="text-gray-400 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formattedText }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-red-500 hover:text-red-400 text-sm font-medium mb-6 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span key={category} className="text-xs bg-red-900/50 text-red-400 px-3 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <article>
            {formatContent(post.content)}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6">
            Apply for Risk Free Marketing and start growing your business with zero upfront cost.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
