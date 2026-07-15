import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'linear-gradient(-90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.9) 100%), url("/e3803745-d93f-49f4-a7f3-3abd67d1775e.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Unlock New Opportunities</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-6">
            Say Yes with<br />Yes Crew
          </h1>
          <p className="text-gray-300 max-w-lg mb-8 text-sm">
            Join our network to get clients from Risk FREE Marketing®, referrals from the network and watch your business grow.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Join Now <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif text-center mb-6 text-amber-100">Our Vision and Mission</h2>
            <p className="text-gray-300 text-center text-sm leading-relaxed mb-4">
              Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. We invest in them to get them clients and give them AI powered systems that support their business to free up their time so they can do what they love.
            </p>
            <p className="text-gray-300 text-center text-sm leading-relaxed">
              We then unite them together in a concept I call Yes Crew. Yes Crew unites small businesses together to look like a large corporations to give small business passive income by offering additional services through our network. Thus delivering exceptional value and see the world from a win-win perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Warren Buffett Quote */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-serif italic text-gray-200">
            &ldquo;If you don&apos;t find a way to make money while you sleep, you will work until you die.&rdquo;
          </p>
          <p className="text-gray-400 mt-4 font-serif">-Warren Buffett</p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Grow Your Business */}
            <div>
              <h3 className="text-lg font-serif italic mb-4">Grow Your Business</h3>
              <div className="mb-4">
                <Image
                  src="/AdobeStock_389578103-scaled.jpeg"
                  alt="Grow Your Business"
                  width={400}
                  height={267}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Get clients sent to your business with no upfront cost. Risk FREE Marketing® puts up all the money to get you clients and only gets paid a performance fee once we deliver your business a paying client.
              </p>
              <Link 
                href="/apply" 
                className="inline-flex items-center bg-transparent border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Learn More <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Expand Your Network */}
            <div>
              <h3 className="text-lg font-serif italic mb-4">Expand Your Network</h3>
              <div className="mb-4">
                <Image
                  src="/AdobeStock_683895359-scaled.jpeg"
                  alt="Expand Your Network"
                  width={400}
                  height={224}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Get referred opportunities through our network.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                We call it Yes Crew. Members of our network offer each other&apos;s services and get paid referral fees for referring to the network.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 transition-colors"
              >
                Discover How <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Make Passive Income */}
            <div>
              <h3 className="text-lg font-serif italic mb-4">Make Passive Income</h3>
              <div className="mb-4">
                <Image
                  src="/AdobeStock_804340095-scaled.jpeg"
                  alt="Make Passive Income"
                  width={400}
                  height={267}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <p className="text-gray-400 text-sm mb-2">
                Make money while you sleep. Get paid by referring to the network.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Make your small business look like a large company with our network.
              </p>
              <Link 
                href="/apply" 
                className="inline-flex items-center bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 transition-colors"
              >
                Get Started <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Risk FREE Marketing */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Discover Risk FREE Marketing®</h2>
          <p className="text-red-500 text-lg font-medium">No upfront cost</p>
          <p className="text-red-500 text-lg font-medium">No contracts</p>
          <p className="text-red-500 text-lg font-medium mb-8">You only pay when you get paid</p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-yellow-500 text-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:from-yellow-500 hover:to-yellow-400 transition-colors"
          >
            <span className="mr-2">👉</span> APPLY FOR RISK FREE MARKETING®
          </Link>
        </div>
      </section>

      {/* Real Results / Video Testimonials */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">Real Results from Businesses Like Yours</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/Z9xA3wD-Fus?rel=0" 
                title="Danny Thousand Oaks Barber Testimonial for Risk FREE Marketing®"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/iDDmGwxzzsU?rel=0" 
                title="Eli the Barber Seems Very Happy with Risk FREE Marketing®"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/qDfnPrZIUTE?rel=0" 
                title="I Only Pay for Results – Real Experience with Yes Crew & Risk Free Marketing®"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Isn't Like Other Marketing */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Why This Isn&apos;t Like Other Marketing</h2>
            </div>
            <div>
              <p className="text-gray-400 mb-4">Most marketing agencies charge you upfront and hope it works.</p>
              <p className="text-red-500 text-xl font-semibold mb-4">We do the opposite.</p>
              <p className="text-gray-300 text-sm">We build everything for you</p>
              <p className="text-gray-300 text-sm">We send you real clients</p>
              <p className="text-gray-300 text-sm">You only pay after you get paid!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="py-16 px-4 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            Everything You Need — <span className="text-red-600">$0 Upfront</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-red-600 font-semibold mb-3">🚀 Get More Clients</p>
              <ul className="text-gray-600 text-sm space-y-1 ml-6">
                <li>• Website</li>
                <li>• SEO</li>
                <li>• Social Media</li>
              </ul>
            </div>
            <div>
              <p className="text-red-600 font-semibold mb-3">💰 Close More Clients</p>
              <ul className="text-gray-600 text-sm space-y-1 ml-6">
                <li>• Appointment Booking</li>
                <li>• CRM System</li>
              </ul>
            </div>
            <div>
              <p className="text-red-600 font-semibold mb-3">🤖 Automate Everything</p>
              <ul className="text-gray-600 text-sm space-y-1 ml-6">
                <li>• AI Assistant</li>
                <li>• Follow-Ups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/xpAbdkNeDns?rel=0" 
              title="Yes Crew & Risk Free Marketing® Gets Businesses Client with Zero Upfront Cost"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-2">How It Works</h2>
          <p className="text-gray-400 text-sm mb-12">Discover how Yes Crew helps small businesses seize new opportunities with ease.</p>
          
          <div className="bg-zinc-900 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500 font-bold">
                  1
                </div>
                <h3 className="font-serif italic mb-2">Join the Network</h3>
                <p className="text-gray-400 text-sm">
                  Sign up and become a part of the Yes Crew community, where businesses support each other through referrals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500 font-bold">
                  2
                </div>
                <h3 className="font-serif italic mb-2">Share Opportunities</h3>
                <p className="text-gray-400 text-sm">
                  Post opportunities that your business can&apos;t take on and refer them to other members in the network.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 border-2 border-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500 font-bold">
                  3
                </div>
                <h3 className="font-serif italic mb-2">Receive Referrals</h3>
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
          <h2 className="text-2xl md:text-3xl font-serif italic mb-4">Join Yes Crew Today!</h2>
          <p className="text-gray-400 text-sm mb-8">
            Don&apos;t miss out on valuable opportunities. Join Yes Crew and start saying yes to new business prospects. Together, we can bring businesses together and help each other succeed.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Join Now <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
