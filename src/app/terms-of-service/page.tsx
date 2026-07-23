import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Yes Crew",
  description: "Yes Crew Terms of Service — performance-based lead generation platform terms.",
};

const sections = [
  {
    title: "1. Services Provided",
    body: [
      "1.1 The Platform generates qualified leads and connects Clients with Service Providers in our network.",
      "1.2 We only receive compensation based on a performance-based structure, meaning fees are incurred only when a lead results in a pre-agreed qualifying event (such as a sale, booked appointment, or another measurable conversion).",
      "1.3 We do not directly provide the products or services offered by the Service Providers and act solely as an intermediary.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "2.1 You must be at least 18 years old and authorized to enter into binding contracts to use this Platform.",
      "2.2 Businesses must provide accurate and verifiable information regarding their operations, services, and legal compliance.",
      "2.3 We reserve the right to approve, deny, or suspend participation in our network at our discretion.",
    ],
  },
  {
    title: "3. Performance-Based Payment",
    body: [
      "3.1 Our fees are due only when agreed-upon performance metrics are met (e.g., a closed sale, booked appointment, or another qualifying conversion).",
      "3.2 Specific performance triggers, payment amounts, and reporting processes will be defined in your individual Client Agreement, which is incorporated by reference into these Terms.",
      "3.3 All payments must be made within [X] days of invoice issuance unless otherwise specified. Late payments may incur a [X]% monthly fee.",
      "3.4 We reserve the right to suspend services or terminate access to the Platform for non-payment.",
    ],
  },
  {
    title: "4. Lead Qualification and Tracking",
    body: [
      "4.1 We use industry-standard methods to verify and track qualified leads, including tracking pixels, call tracking, booking logs, and third-party reporting tools.",
      "4.2 Clients are responsible for reviewing lead data and reporting any discrepancies within [5] business days of receipt.",
      "4.3 Failure to dispute a lead within the dispute period constitutes acceptance of the lead as valid and billable (if performance conditions are met).",
    ],
  },
  {
    title: "5. Client Responsibilities",
    body: [
      "5.1 You agree to: provide accurate information about your business, services, and target audience; promptly follow up on leads delivered by the Platform; comply with all applicable laws, including consumer protection and advertising laws.",
      "5.2 You may not use the Platform for any illegal, fraudulent, or deceptive purposes. Any violation may result in termination and legal action.",
    ],
  },
  {
    title: "6. Disclaimer of Warranties",
    body: [
      "6.1 The Platform, leads, and services are provided “as is” and “as available.” We make no guarantees regarding the volume, quality, or conversion rates of leads beyond the agreed performance terms.",
      "6.2 We do not guarantee that Service Providers referred to you will meet your expectations, and we are not responsible for any services rendered by Service Providers.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "7.1 To the maximum extent permitted by law, Yes Crew shall not be liable for any indirect, incidental, special, or consequential damages, including lost profits, arising out of your use of the Platform, leads, or referrals.",
      "7.2 Our total liability under these Terms shall not exceed the total amount paid by you to us in the three (3) months preceding the claim.",
    ],
  },
  {
    title: "8. Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless Yes Crew, its affiliates, officers, employees, and contractors from any claims, damages, liabilities, costs, or expenses arising out of your use of the Platform, your interactions with Service Providers, or your breach of these Terms.",
    ],
  },
  {
    title: "9. Term and Termination",
    body: [
      "9.1 These Terms remain in effect until terminated by either party.",
      "9.2 Either party may terminate with [30] days’ written notice.",
      "9.3 We may terminate immediately for cause, including non-payment, fraud, or violation of these Terms.",
    ],
  },
  {
    title: "10. Dispute Resolution",
    body: [
      "10.1 Any disputes shall first be attempted to be resolved through good-faith negotiations between the parties.",
      "10.2 If unresolved, disputes shall be submitted to binding arbitration in [Your County/State], under the rules of the American Arbitration Association (AAA).",
      "10.3 You waive your right to a jury trial or to participate in a class action lawsuit.",
    ],
  },
  {
    title: "11. Changes to Terms",
    body: [
      "We reserve the right to update or modify these Terms at any time. Updates will be effective upon posting to the Platform. Your continued use of the Platform constitutes acceptance of the updated Terms.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These Terms shall be governed by and construed under the laws of the State of [Your State], without regard to its conflict of law provisions.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="bg-black py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl text-white mb-4">Terms of Service</h1>
        <p className="text-neutral-500 mb-10 font-sans">Effective Date: 7/29/2025</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your use of Yes Crew
            (“Platform,” “we,” “our,” or “us”), a performance-based lead
            generation service that connects businesses (“Clients,” “you,” or
            “your”) with a qualified network of service providers (“Service
            Providers”) to help expand your business into new opportunities and
            services.
          </p>
          <p>
            By accessing or using the Platform, you agree to these Terms. If you
            do not agree, you may not use the Platform.
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl text-white mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-2xl text-white mb-4">13. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
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
