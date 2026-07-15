import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apply to Risk FREE Marketing®',
  description: 'Apply in 30 seconds to start getting clients. Only pay for results with Risk FREE Marketing® by Yes Crew. Zero upfront cost, zero risk.',
};

export default function ApplyPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apply in 30 Seconds to Start Getting Clients</h1>
          <p className="text-red-500 text-2xl font-bold mb-8">ONLY PAY FOR RESULTS</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 rounded-lg p-8">
            <h2 className="text-xl font-bold mb-6 text-center">Apply for Risk Free Marketing®</h2>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-400 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
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
                    name="lastName"
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
                  name="phone"
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
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm text-gray-400 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm text-gray-400 mb-1">
                  What City Are You Located In? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm text-gray-400 mb-1">
                  What Industry Are You In? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  required
                  placeholder="e.g., Barber, Trainer, Electrician"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Do You Work From <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Home Office" className="mr-3 accent-red-500" />
                    <span className="text-gray-300">Home Office</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Commercial" className="mr-3 accent-red-500" />
                    <span className="text-gray-300">Commercial or Retail Space</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Mobile" className="mr-3 accent-red-500" />
                    <span className="text-gray-300">Go to Clients&apos; Homes/Places of Business</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="workFrom" value="Other" className="mr-3 accent-red-500" />
                    <span className="text-gray-300">Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="referral" className="block text-sm text-gray-400 mb-1">
                  Who Referred You?
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm text-gray-400 mb-1">
                  Your Marketing Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded text-white focus:outline-none focus:border-red-500"
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
                className="w-full bg-red-600 text-white px-8 py-4 rounded font-semibold hover:bg-red-700 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Why Apply?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="font-semibold mb-2">Zero Upfront Cost</h3>
              <p className="text-gray-400 text-sm">No setup fees, no ad spend required. We invest in getting you clients.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">📈</div>
              <h3 className="font-semibold mb-2">Pay Only for Results</h3>
              <p className="text-gray-400 text-sm">You only pay when you get a paying client. If we don&apos;t deliver, you don&apos;t pay.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🤝</div>
              <h3 className="font-semibold mb-2">Join a Network</h3>
              <p className="text-gray-400 text-sm">Become part of Yes Crew and earn referral fees by connecting with other members.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
