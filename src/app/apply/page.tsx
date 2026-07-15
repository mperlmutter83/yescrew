import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply to Risk FREE Marketing®',
  description: 'Apply in 30 seconds to start getting clients. Only pay for results with Risk FREE Marketing® by Yes Crew. Zero upfront cost, zero risk.',
};

export default function ApplyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Apply in 30 Seconds to Start Getting Clients</h1>
          <p className="text-2xl font-bold text-orange-500 mb-8">ONLY PAY FOR RESULTS</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Apply for Risk Free Marketing®</h2>
            
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
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="https://"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  What City Are You Located In? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  What Industry Are You In? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., Barber, Trainer, Electrician, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do You Work From <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Home Office" className="mr-2 text-orange-500 focus:ring-orange-500" />
                    <span className="text-gray-700">Home Office</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Commercial or Retail Space" className="mr-2 text-orange-500 focus:ring-orange-500" />
                    <span className="text-gray-700">Commercial or Retail Space</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Go to Clients" className="mr-2 text-orange-500 focus:ring-orange-500" />
                    <span className="text-gray-700">Go to Clients&apos; Homes and/or Places of Business</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Other" className="mr-2 text-orange-500 focus:ring-orange-500" />
                    <span className="text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                  Who Referred You?
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Marketing Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select...</option>
                  <option value="$0">$0</option>
                  <option value="$1-$500">$1-$500</option>
                  <option value="$501-$1,000">$501-$1,000</option>
                  <option value="$1,001+">$1,001+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Apply?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Upfront Cost</h3>
              <p className="text-gray-600">No setup fees, no ad spend required from you. We invest in getting you clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pay Only for Results</h3>
              <p className="text-gray-600">You only pay when you get a paying client. If we don&apos;t deliver, you don&apos;t pay.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Join a Network</h3>
              <p className="text-gray-600">Become part of Yes Crew and earn referral fees by connecting with other members.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
