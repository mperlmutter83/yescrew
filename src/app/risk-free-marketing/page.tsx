import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Risk FREE Marketing® - Yes Crew",
  description:
    "We Bring You Clients. Get a Website, Leads, and Systems Built For You — $0 Upfront. We build everything for you, we send you real clients, you only pay after you get paid.",
};

const everythingYouNeed = [
  { emoji: "🚀", title: "Get More Clients", items: ["Website", "SEO", "Social Media"] },
  { emoji: "💰", title: "Close More Clients", items: ["Appointment Booking", "CRM System"] },
  { emoji: "🤖", title: "Automate Everything", items: ["AI Assistant", "Follow-Ups"] },
];

const steps = [
  { title: "Step 1:", text: "We build your system" },
  { title: "Step 2:", text: "We send you clients" },
  { title: "Step 3:", text: "You only pay when you get results" },
];

const testimonialVideos = [
  { id: "Z9xA3wD-Fus", title: "Danny Thousand Oaks Barber Testimonial for Risk FREE Marketing®" },
  { id: "iDDmGwxzzsU", title: "Eli the Barber Seems Very Happy with Risk FREE Marketing®" },
  { id: "qDfnPrZIUTE", title: "\u201cI Only Pay for Results\u201d \u2013 Real Experience with Yes Crew & Risk Free Marketing®" },
];

const faqs = [
  {
    question: "How Much Does Yes Crew Get Paid For Each Client Referred?",
    answer:
      "We just ask for a fair percentage of each sale. We allow you to determine what is fair. We hope you consider our worth since we do not invest in all projects.\n\nSince we are putting up our own money to get you clients we want to make sure we find the right partners.",
  },
  {
    question: "Does Yes Crew Get Paid for Returning Clients?",
    answer:
      "Each industry is different and unique. We consider many circumstances when we decide what industry or service providers to partner with. In your offer of what you think is fair to pay us we would like to hear your thoughts on this too.",
  },
  {
    question: "Does Yes Crew Take Anything if I Bring in My Own Clients?",
    answer:
      "No! We only get paid on the clients we bring you. If you bring in your own clients you keep 100%.",
  },
  {
    question: "How Does Yes Crew Track it's Leads?",
    answer:
      "We will be setting up a separate website, social media channels and other marketing assets to Yes Crew will own. Including a new phone number used for tracking purposes. We have various systems to monitor our leads using AI and special algorithms to determine how leads are performing.",
  },
  {
    question: "What are the Service Providers Responsibilities?",
    answer:
      "We ask that as a partner you get us updates, follow up with leads and do a good job with clients.",
  },
  {
    question: "Can I Refer Clients to Yes Crew?",
    answer:
      "Yes! Everytime you refer a client to our network you make 20% of our commission.",
  },
  {
    question: "Can I Refer Service Providers to Yes Crew?",
    answer:
      "Yes! Everytime you refer a service provider to our network you make 20% of our commissions we make off your service provider referred.",
  },
];

const successStories = [
  {
    logo: "/Jukegymequip-Logo.png",
    quote: "Excellent work, my business has grown tenfold.",
    name: "Jesse Nicassio",
    role: "CEO, Juke Performance",
  },
  {
    logo: "/DR-Judy-vectorized-logo-11-3-22.png",
    quote:
      "I recommend this company to everyone who is looking for marketing, They have been incredible!",
    name: "Judy Rosenberg",
    role: "Founder & CEO, Psychological Healing Center",
  },
  {
    logo: "/Logo-Example-White.png",
    quote: "Quality customers every day!",
    name: "Adam Khoda",
    role: "Founder, The Elite Fashion Group",
  },
];

export default function RiskFreeMarketing() {
  return (
    <div className="bg-black">
      {/* HERO */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#ff0000] text-2xl md:text-3xl font-bold font-sans mb-4">
            ONLY PAY FOR RESULTS
          </p>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            We Bring You Clients
          </h1>
          <p className="text-xl text-neutral-300 mb-2">
            Get a Website, Leads, and Systems Built For You
          </p>
          <p className="text-2xl text-white font-bold font-sans mb-8">
            $0 Upfront
          </p>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-[#2ea3f2] text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            👉 Apply in 30 Seconds
          </Link>
        </div>
      </section>

      {/* RISK FREE MARKETING + IMAGE */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-10">
            Risk FREE Marketing®
          </h2>
          <div className="relative w-full max-w-3xl mx-auto mb-10">
            <Image
              src="/ChatGPT-Image-May-7-2026-02_54_09-PM.png"
              alt="Risk FREE Marketing®"
              width={1280}
              height={567}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-[#ff0000] text-2xl md:text-3xl font-bold space-y-2 font-sans">
            <p>No upfront cost</p>
            <p>No contracts</p>
            <p>You only pay when you get paid</p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden bg-neutral-900">
          <iframe
            src="https://www.youtube.com/embed/OW-HNpLj3fs"
            title="Pay for Performance Marketing: Only Pay When You Get Customers"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* WHY THIS ISN'T LIKE OTHER MARKETING */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white mb-8">
            Why This Isn’t Like Other Marketing
          </h2>
          <p className="text-neutral-400 text-xl mb-4">
            Most marketing agencies charge you upfront and hope it works.
          </p>
          <p className="text-[#ff0000] text-3xl md:text-4xl font-bold font-sans mb-8">
            We do the opposite.
          </p>
          <div className="space-y-3 text-xl text-white">
            <p>We build everything for you</p>
            <p>We send you real clients</p>
            <p>You only pay after you get paid!</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.title}>
                <p className="text-[#2ea3f2] font-bold text-xl font-sans mb-2">
                  {step.title}
                </p>
                <p className="text-white text-lg">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white text-center mb-14">
            Everything You Need —{" "}
            <span className="text-[#ff0000]">$0 Upfront</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {everythingYouNeed.map((col) => (
              <div key={col.title} className="text-center md:text-left">
                <h3 className="text-2xl text-white mb-5 font-sans font-bold">
                  {col.emoji} {col.title}
                </h3>
                <ul className="space-y-2 text-neutral-300 text-lg">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 justify-center md:justify-start"
                    >
                      <span className="text-[#2ea3f2]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL RESULTS */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-white text-center mb-14">
            Real Results from Businesses Like Yours
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialVideos.map((video) => (
              <div
                key={video.id}
                className="aspect-[9/16] max-h-[560px] w-full mx-auto rounded-lg overflow-hidden bg-neutral-900"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITED SPOTS / CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Limited Spots Available
          </h2>
          <p className="text-neutral-300 text-lg mb-10">
            We only work with a limited number of businesses per area to avoid
            competition.
          </p>
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Start Getting Clients Risk-Free
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            We put up all the money! Pay us nothing until you start making
            money.
          </p>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-[#2ea3f2] text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            👉 Apply Now (Takes 30 Seconds)
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-14">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.name}
                className="bg-white rounded-lg p-8 text-center flex flex-col items-center"
              >
                <div className="h-16 flex items-center mb-6">
                  <Image
                    src={story.logo}
                    alt={story.role}
                    width={200}
                    height={64}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-neutral-700 italic mb-6 flex-1">
                  “{story.quote}”
                </p>
                <p className="text-[#0e0c19] font-bold font-sans">
                  {story.name}
                </p>
                <p className="text-neutral-500 text-sm">{story.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
