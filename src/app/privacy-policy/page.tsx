import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Yes Crew",
  description: "Yes Crew Privacy Policy — how we collect, use, store, and share your information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-white mb-4">Privacy Policy</h1>
        <p className="text-neutral-500 mb-2 font-sans">Effective Date: 7/29/2025</p>
        <p className="text-neutral-500 mb-10 font-sans">Last Updated: 7/29/2025</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <p>
            Yes Crew (“we,” “our,” “us”) is committed to protecting the privacy
            and security of the businesses and service providers who use our
            platform (“you,” “your”). This Privacy Policy explains how we
            collect, use, store, and share your information when you use our
            lead generation platform (the “Platform”), which operates on a
            performance-based model and connects businesses with a qualified
            network of service providers to help them expand into new
            opportunities and services.
          </p>
          <p>
            By accessing or using our Platform, you consent to the practices
            described in this Privacy Policy.
          </p>

          <div>
            <h2 className="text-2xl text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect the following types of information when you interact
              with our Platform:
            </p>
            <h3 className="text-xl text-white mb-2">a. Business and Contact Information</h3>
            <ul className="list-disc list-inside mb-4 ml-2 space-y-1">
              <li>
                Name, business name, email address, phone number, and any
                information you provide when registering or inquiring about our
                services.
              </li>
            </ul>
            <h3 className="text-xl text-white mb-2">b. Service and Transaction Data</h3>
            <ul className="list-disc list-inside mb-4 ml-2 space-y-1">
              <li>Information regarding the type of services you’re seeking or providing.</li>
              <li>
                Performance metrics, conversion data, and transaction
                information necessary to determine payments (since we only get
                paid based on results).
              </li>
            </ul>
            <h3 className="text-xl text-white mb-2">c. Technical and Usage Data</h3>
            <ul className="list-disc list-inside mb-4 ml-2 space-y-1">
              <li>
                IP addresses, browser type, operating system, and interactions
                with our Platform (e.g., page views, clicks, time spent) to
                improve our services and ensure proper functionality.
              </li>
            </ul>
            <h3 className="text-xl text-white mb-2">d. Referral and Lead Data</h3>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>
                For leads we generate or service provider connections, we may
                collect information such as business size, industry, service
                needs, and any additional qualifying details necessary to match
                you with the right partners.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ol className="list-decimal list-inside ml-2 space-y-2">
              <li>
                Match Businesses with Service Providers: Connect you with
                qualified partners and opportunities aligned with your business
                needs.
              </li>
              <li>
                Facilitate Performance-Based Payments: Track results and
                performance to ensure transparent billing and payment based only
                on successful outcomes.
              </li>
              <li>
                Improve and Personalize Our Services: Analyze usage patterns,
                improve functionality, and provide tailored recommendations.
              </li>
              <li>
                Communicate with You: Send updates, confirmations, and
                notifications regarding leads, opportunities, and transactions.
              </li>
              <li>
                Comply with Legal Obligations: Maintain records for auditing,
                dispute resolution, and compliance purposes.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">3. How We Share Your Information</h2>
            <p className="mb-3">We only share your information as needed to provide our services:</p>
            <ul className="list-disc list-inside ml-2 space-y-2 mb-4">
              <li>With Qualified Service Providers: To connect businesses with vetted partners.</li>
              <li>
                With Vendors and Technology Partners: Who help us operate our
                Platform (e.g., analytics, CRM, and payment processors).
              </li>
              <li>
                For Legal or Compliance Reasons: If required by law or to
                protect our rights, safety, or property.
              </li>
            </ul>
            <p>
              We do not sell your information to third parties. Any sharing is
              strictly for the purpose of facilitating the services you
              requested and fulfilling our performance-based agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">4. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your information from unauthorized access, disclosure, or
              misuse. While we strive to protect your data, no online
              transmission or storage system can be 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">5. Your Choices and Rights</h2>
            <p className="mb-3">You may:</p>
            <ul className="list-disc list-inside ml-2 space-y-2">
              <li>
                Access, Update, or Delete Your Information: Contact us at
                info@yescrew.com to request changes or deletion.
              </li>
              <li>
                Opt-Out of Communications: Unsubscribe from promotional emails
                at any time using the link provided in our communications.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">6. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill
              the purposes outlined in this Policy, including performance
              tracking, legal, and accounting obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">7. Children’s Privacy</h2>
            <p>
              Our Platform is not intended for individuals under 18 years of
              age, and we do not knowingly collect personal information from
              minors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make
              significant changes, we will notify you via email or by posting a
              notice on our Platform prior to the changes taking effect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-4">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, contact us at:
            </p>
            <p className="mt-3">
              Yes Crew
              <br />
              <a href="mailto:info@yescrew.com" className="text-[#2ea3f2] hover:underline">
                info@yescrew.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
