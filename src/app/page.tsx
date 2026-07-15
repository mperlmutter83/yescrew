import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">Unlock New Opportunities</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Say Yes with<br />Yes Crew
          </h1>
          <p className="text-gray-400 max-w-xl mb-8">
            Join our network to get clients from Risk FREE Marketing®, referrals from the network and watch your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Our Vision and Mission</h2>
            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed">
              Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business to free up their time so they can do what they love.
            </p>
            <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed mt-4">
              We then unite them together in a concept I call Yes Crew. Yes Crew unites small businesses together to look like a large corporations to give small business passive income by offering additional services through our network. Thus delivering exceptional value and see the world from a win-win perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Warren Buffett Quote */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl italic text-gray-300">
            &ldquo;If you don&apos;t find a way to make money while you sleep, you will work until you die.&rdquo;
          </p>
          <p className="text-gray-500 mt-4">-Warren Buffett</p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Grow Your Business */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Grow Your Business</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get clients sent to your business with no upfront cost. Risk FREE Marketing® puts up all the money to get you clients and only gets paid a performance fee once we deliver your business a paying client.
              </p>
              <Link href="/apply" className="inline-block border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors">
                Learn More
              </Link>
            </div>

            {/* Expand Your Network */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Expand Your Network</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get referred opportunities through our network. We call it Yes Crew. Members of our network offer each other&apos;s services and get paid referral fees for referring to the network.
              </p>
              <Link href="/contact" className="inline-block bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors">
                Discover How
              </Link>
            </div>

            {/* Make Passive Income */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Make Passive Income</h3>
              <p className="text-gray-400 text-sm mb-6">
                Make money while you sleep. Get paid by referring to the network. Make your small business look like a large company with our network.
              </p>
              <Link href="/apply" className="inline-block border border-white text-white px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Risk FREE Marketing */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Discover Risk FREE Marketing®</h2>
          <p className="text-red-500 text-lg mb-1">No upfront cost</p>
          <p className="text-red-500 text-lg mb-1">No contracts</p>
          <p className="text-red-500 text-lg mb-8">You only pay when you get paid</p>
          <Link
            href="/apply"
            className="inline-block bg-yellow-500 text-black px-6 py-3 rounded text-sm font-semibold hover:bg-yellow-400 transition-colors"
          >
            👉 APPLY FOR RISK FREE MARKETING®
          </Link>
        </div>
      </section>

      {/* Real Results / Video Testimonials */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Real Results from Businesses Like Yours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[9/16] bg-zinc-800 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Danny Thousand Oaks Barber Testimonial</p>
              </div>
            </div>
            <div className="aspect-[9/16] bg-zinc-800 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Eli the Barber Testimonial</p>
              </div>
            </div>
            <div className="aspect-[9/16] bg-zinc-800 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">&quot;I Only Pay for Results&quot; Testimonial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Isn't Like Other Marketing */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why This Isn&apos;t Like Other Marketing</h2>
              <p className="text-gray-600 mb-4">Most marketing agencies charge you upfront and hope it works.</p>
            </div>
            <div>
              <p className="text-red-600 text-2xl font-semibold mb-6">We do the opposite.</p>
              <ul className="space-y-2 text-gray-700">
                <li>We build everything for you</li>
                <li>We send you real clients</li>
                <li>You only pay after you get paid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Everything You Need — <span className="text-red-600">$0 Upfront</span></h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <p className="text-red-600 font-semibold mb-3">🚀 Get More Clients</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Website</li>
                <li>• SEO</li>
                <li>• Social Media</li>
              </ul>
            </div>
            <div>
              <p className="text-red-600 font-semibold mb-3">💰 Close More Clients</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Appointment Booking</li>
                <li>• CRM System</li>
              </ul>
            </div>
            <div>
              <p className="text-red-600 font-semibold mb-3">🤖 Automate Everything</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• AI Assistant</li>
                <li>• Follow-Ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">How It Works</h2>
          <p className="text-gray-400 text-sm mb-12">Discover how Yes Crew helps small businesses seize new opportunities with ease.</p>
          
          <div className="bg-zinc-900 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Join the Network</h3>
                <p className="text-gray-400 text-sm">
                  Sign up and become a part of the Yes Crew community, where businesses support each other through referrals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Share Opportunities</h3>
                <p className="text-gray-400 text-sm">
                  Post opportunities that your business can&apos;t take on and refer them to other members in the network.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Receive Referrals</h3>
                <p className="text-gray-400 text-sm">
                  Get referrals from other businesses in the network, allowing you to say yes to more opportunities and grow your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Yes Crew Today!</h2>
          <p className="text-gray-400 mb-8">
            Don&apos;t miss out on valuable opportunities. Join Yes Crew and start saying yes to new business prospects. Together, we can bring businesses together and help each other succeed.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white text-black px-6 py-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}
