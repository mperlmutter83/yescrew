import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Yes Crew for Risk Free Marketing®. Call (424) 999-0653 or send us a message. We help local businesses grow with zero upfront cost.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 font-semibold mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let&apos;s Build Something</h1>
          <p className="text-xl text-gray-600 max-w-2xl">We would love to help you.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <span className="text-4xl">📍</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Office Address</h3>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <span className="text-4xl">📞</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Contact Us</h3>
              <a href="mailto:info@yescrew.com" className="text-orange-500 hover:text-orange-600 block">info@yescrew.com</a>
              <a href="tel:+14249990653" className="text-orange-500 hover:text-orange-600 block">(424) 999-0653</a>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <span className="text-4xl">🕐</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Hours of Operation</h3>
              <p className="text-gray-600">M-F: 10am – 8pm</p>
              <p className="text-gray-600">S-S: Closed (sometimes)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Send a Message</h2>
              <p className="text-gray-600 text-center mb-6">
                Interested in driving growth? Have a general question? We&apos;re just an email away.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                    Industry You Are In?
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Country / City You Are Located In?
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
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
