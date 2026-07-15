import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Yes Crew for Risk Free Marketing®. Call (424) 999-0653 or send us a message.',
};

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something</h1>
          <p className="text-gray-400">We would love to help you.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900 rounded-lg p-6 text-center">
              <span className="text-3xl">📍</span>
              <h3 className="font-semibold mt-4 mb-2">Office Address</h3>
              <p className="text-gray-400 text-sm">Los Angeles, CA</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 text-center">
              <span className="text-3xl">📞</span>
              <h3 className="font-semibold mt-4 mb-2">Contact Us</h3>
              <a href="mailto:info@yescrew.com" className="text-red-500 hover:text-red-400 text-sm block">info@yescrew.com</a>
              <a href="tel:+14249990653" className="text-red-500 hover:text-red-400 text-sm block">(424) 999-0653</a>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 text-center">
              <span className="text-3xl">🕐</span>
              <h3 className="font-semibold mt-4 mb-2">Hours of Operation</h3>
              <p className="text-gray-400 text-sm">M-F: 10am – 8pm</p>
              <p className="text-gray-400 text-sm">S-S: Closed (sometimes)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-zinc-900 rounded-lg p-8">
              <h2 className="text-xl font-bold mb-2 text-center">Send a Message</h2>
              <p className="text-gray-400 text-sm text-center mb-6">
                Interested in driving growth? Have a general question? We&apos;re just an email away.
              </p>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-400 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-400 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm text-gray-400 mb-1">
                    Industry You Are In?
                  </label>
                  <input
                    type="text"
                    id="industry"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm text-gray-400 mb-1">
                    Country / City You Are Located In?
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-8 py-4 rounded font-semibold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
