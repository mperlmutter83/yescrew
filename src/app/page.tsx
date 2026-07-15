import Link from 'next/link';

export default function Home() {
  const features = [
    { icon: '🚀', title: 'Website', description: 'Professional website built for conversions' },
    { icon: '📈', title: 'SEO', description: 'Get found on Google when clients search' },
    { icon: '📱', title: 'Social Media', description: 'Build your brand presence online' },
    { icon: '📅', title: 'Appointment Booking', description: 'Let clients book anytime, anywhere' },
    { icon: '💼', title: 'CRM System', description: 'Manage leads and clients in one place' },
    { icon: '🤖', title: 'AI Assistant', description: 'Automated follow-ups that close deals' },
  ];

  const steps = [
    { step: '1', title: 'Join the Network', description: 'Sign up and become a part of the Yes Crew community, where businesses support each other through referrals.' },
    { step: '2', title: 'Share Opportunities', description: 'Post opportunities that your business can\'t take on and refer them to other members in the network.' },
    { step: '3', title: 'Receive Referrals', description: 'Get referrals from other businesses in the network, allowing you to say yes to more opportunities and grow your business.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 font-semibold mb-4 text-lg">Unlock New Opportunities</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Say Yes with Yes Crew</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Join our network to get clients from Risk FREE Marketing®, referrals from the network and watch your business grow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              👉 Apply For Risk FREE Marketing®
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Our Vision and Mission</h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-8">
            Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business to free up their time so they can do what they love.
          </p>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            We then unite them together in a concept I call Yes Crew. Yes Crew unites small businesses together to look like large corporations to give small business passive income by offering additional services through our network.
          </p>
          <div className="mt-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic max-w-3xl mx-auto">
              &ldquo;If you don&apos;t find a way to make money while you sleep, you will work until you die.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-600 font-semibold">-Warren Buffett</p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grow Your Business</h3>
              <p className="text-gray-600 mb-4">
                Get clients sent to your business with no upfront cost. Risk FREE Marketing® puts up all the money to get you clients and only gets paid a performance fee once we deliver your business a paying client.
              </p>
              <Link href="/apply" className="text-orange-500 font-medium hover:text-orange-600">Learn More →</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expand Your Network</h3>
              <p className="text-gray-600 mb-4">
                Get referred opportunities through our network. We call it Yes Crew. Members of our network offer each other&apos;s services and get paid referral fees for referring to the network.
              </p>
              <Link href="/contact" className="text-orange-500 font-medium hover:text-orange-600">Discover How →</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Make Passive Income</h3>
              <p className="text-gray-600 mb-4">
                Make money while you sleep. Get paid by referring to the network. Make your small business look like a large company with our network.
              </p>
              <Link href="/apply" className="text-orange-500 font-medium hover:text-orange-600">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Risk FREE Marketing® */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Risk FREE Marketing®</h2>
          <p className="text-xl mb-8">No upfront cost • No contracts • You only pay when you get paid</p>
          <Link
            href="/apply"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            👉 Apply For Risk FREE Marketing®
          </Link>
        </div>
      </section>

      {/* Why This Isn't Like Other Marketing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Why This Isn&apos;t Like Other Marketing</h2>
          <p className="text-xl text-gray-600 text-center mb-8">Most marketing agencies charge you upfront and hope it works.</p>
          <p className="text-3xl font-bold text-orange-500 text-center mb-12">We do the opposite.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We build everything for you</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">👥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We send you real clients</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">You only pay after you get paid!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Everything You Need — $0 Upfront</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🚀 Get More Clients</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Website</li>
                <li>• SEO</li>
                <li>• Social Media</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">💰 Close More Clients</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Appointment Booking</li>
                <li>• CRM System</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-orange-500 mb-4">🤖 Automate Everything</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI Assistant</li>
                <li>• Follow-Ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12">
            Discover how Yes Crew helps small businesses seize new opportunities with ease.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Yes Crew Today!</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on valuable opportunities. Join Yes Crew and start saying yes to new business prospects. Together, we can bring businesses together and help each other succeed.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}
