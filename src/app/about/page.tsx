import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Yes Crew and Risk Free Marketing® - our vision, mission, and philosophy for empowering independent professionals and building a more human economy.',
};

export default function AboutPage() {
  const coreValues = [
    { title: 'Passion for Craft', description: 'We believe that the best work is produced by those who are passionate about their craft. At Yes Crew, we support professionals who take pride in their work and continuously strive to improve their skills.' },
    { title: 'Independence', description: 'Yes Crew champions the idea that individuals should have the freedom to work for themselves, building lives that align with their skills, passions, and values.' },
    { title: 'Customer Experience First', description: 'Exceptional customer experiences are the cornerstone of successful businesses. At Yes Crew, we prioritize customer satisfaction, ensuring that when our clients succeed, everyone benefits.' },
    { title: 'Fair Exchange of Value', description: 'We believe in partnerships where value is created first, and compensation follows. Our Risk Free Marketing® model exemplifies this philosophy.' },
    { title: 'Community Over Competition', description: 'Independent professionals become stronger when they support one another. Yes Crew is built on collaboration, referrals, and shared opportunity.' },
    { title: 'Integrity and Transparency', description: 'Trust is the foundation of any successful network. We believe in honest relationships between customers, service providers, and partners.' },
  ];

  const rfmFeatures = [
    { title: 'Performance-Based Marketing', description: 'Our Risk Free Marketing® model revolutionizes traditional marketing by aligning the interests of marketers, service providers, and customers. Instead of upfront costs, providers only pay when they gain paying clients.' },
    { title: 'Aligned Interests', description: 'This approach creates a harmonious relationship between all parties involved. Marketers focus on delivering results, service providers benefit from increased business, and customers enjoy improved services.' },
    { title: 'Value Creation', description: 'By prioritizing value creation over speculative investments, our model encourages sustainable growth for all stakeholders.' },
    { title: 'Collaborative Success', description: 'Through collaboration and shared goals, the Risk Free Marketing® model strengthens the entire network, fostering an ecosystem where everyone thrives.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Vision and Mission</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-8">
            Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business to free up their time so they can do what they love. Then we unite them to make their small business look like a large corporation by offering additional services through our network. Thus allowing them to make passive income, deliver exceptional value and see the world from a win-win perspective.
          </p>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 font-semibold text-center mb-4">Empowering Independent Professionals</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">Join the Movement for Thriving Local Economies</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Discover a dynamic network where passionate professionals connect, collaborate, and create value, transforming communities and redefining success.
          </p>
          <div className="text-center">
            <Link
              href="/apply"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Core Values of Yes Crew</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            At Yes Crew, we are driven by a set of core values that guide our mission to empower independent professionals and transform local economies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Dream */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">The Dream</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>We believe work should mean something.</p>
            <p>Too many people spend their lives doing work they do not care about, building someone else&apos;s dream while their own talents sit unused.</p>
            <p>But throughout every community there are people who love what they do.</p>
            <div className="bg-orange-50 rounded-xl p-6 my-6">
              <p className="text-gray-800">The barber who perfects every cut.</p>
              <p className="text-gray-800">The trainer who transforms lives.</p>
              <p className="text-gray-800">The massage therapist who helps someone finally feel relief.</p>
              <p className="text-gray-800">The electrician who solves problems others cannot.</p>
            </div>
            <p>These people are <strong>craftsmen</strong>. They are <strong>professionals</strong>. They are <strong>creators of value</strong>.</p>
            <p>Yet too often they struggle not because they lack skill—but because they lack systems, support, and opportunity.</p>
            <p className="text-xl font-semibold text-orange-500">Yes Crew exists to change that.</p>
            <p>We believe that when passionate professionals come together, something powerful happens. Customers receive better service. Professionals build independent lives. Communities become stronger.</p>
            <p className="text-lg font-semibold text-gray-900 mt-8">This is the Yes Crew movement.</p>
            <p>Where people say <strong>YES</strong> to opportunity. <strong>YES</strong> to independence. <strong>YES</strong> to serving their communities.</p>
            <p className="text-xl font-bold text-orange-500">When people love what they do, everyone wins.</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">The Yes Crew Philosophy</h2>
          <h3 className="text-xl text-gray-700 text-center mb-12">A More Human Economy</h3>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>Modern economies are often built around large institutions, centralized employment, and systems that distance people from the work they perform.</p>
            <p>But at the local level, something different is possible.</p>
            <p>A more human economic model can exist—one built around <strong>independent professionals, community networks, and real relationships</strong> between service providers and customers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-orange-500 mb-2">Customer Wins</h4>
              <p className="text-gray-600">Customers receive better service from professionals who truly care about their work.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-orange-500 mb-2">Service Provider Wins</h4>
              <p className="text-gray-600">Professionals gain independence, control of their schedule, and the ability to earn based on value.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h4 className="text-lg font-bold text-orange-500 mb-2">Network Wins</h4>
              <p className="text-gray-600">Through collaboration, referrals, and shared opportunity, the entire ecosystem grows stronger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Free Marketing® */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Risk Free Marketing®</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rfmFeatures.map((feature) => (
              <div key={feature.title} className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Yes Crew and Transform Your Professional Journey</h2>
          <Link
            href="/apply"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
}
