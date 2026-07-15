import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Yes Crew and Risk Free Marketing® - our vision, mission, and philosophy for empowering independent professionals and building a more human economy.',
};

export default function AboutPage() {
  const coreValues = [
    { title: 'Passion for Craft', description: 'We believe that the best work is produced by those who are passionate about their craft.' },
    { title: 'Independence', description: 'Yes Crew champions the idea that individuals should have the freedom to work for themselves.' },
    { title: 'Customer Experience First', description: 'Exceptional customer experiences are the cornerstone of successful businesses.' },
    { title: 'Fair Exchange of Value', description: 'We believe in partnerships where value is created first, and compensation follows.' },
    { title: 'Community Over Competition', description: 'Independent professionals become stronger when they support one another.' },
    { title: 'Integrity and Transparency', description: 'Trust is the foundation of any successful network.' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Independent Professionals</h1>
          <p className="text-gray-400 text-lg mb-8">
            Join the Movement for Thriving Local Economies
          </p>
          <Link
            href="/apply"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Vision and Mission</h2>
            <p className="text-gray-300 text-center leading-relaxed mb-4">
              Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business to free up their time so they can do what they love.
            </p>
            <p className="text-gray-300 text-center leading-relaxed">
              Then we unite them to make their small business look like a large corporation by offering additional services through our network. Thus allowing them to make passive income, deliver exceptional value and see the world from a win-win perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Core Values of Yes Crew</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Dream */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">The Dream</h2>
          <div className="text-gray-300 space-y-4">
            <p>We believe work should mean something.</p>
            <p>Too many people spend their lives doing work they do not care about, building someone else&apos;s dream while their own talents sit unused.</p>
            <p>But throughout every community there are people who love what they do.</p>
            <p className="text-white font-medium">The barber who perfects every cut. The trainer who transforms lives. The massage therapist who helps someone finally feel relief. The electrician who solves problems others cannot.</p>
            <p>These people are <span className="text-red-500">craftsmen</span>. They are <span className="text-red-500">professionals</span>. They are <span className="text-red-500">creators of value</span>.</p>
            <p className="text-xl font-semibold text-center mt-8">When people love what they do, everyone wins.</p>
          </div>
        </div>
      </section>

      {/* Risk Free Marketing Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Risk Free Marketing®</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-500 mb-2">Performance-Based Marketing</h3>
              <p className="text-gray-400 text-sm">Instead of upfront costs, providers only pay when they gain paying clients.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-500 mb-2">Aligned Interests</h3>
              <p className="text-gray-400 text-sm">Marketers focus on delivering results, service providers benefit from increased business.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-500 mb-2">Value Creation</h3>
              <p className="text-gray-400 text-sm">Our model encourages sustainable growth for all stakeholders.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-500 mb-2">Collaborative Success</h3>
              <p className="text-gray-400 text-sm">The entire network strengthens and everyone thrives together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Yes Crew and Transform Your Professional Journey</h2>
          <Link
            href="/apply"
            className="inline-block bg-white text-red-600 px-6 py-3 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
}
