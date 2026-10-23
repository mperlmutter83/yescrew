import Link from "next/link";
import Image from "next/image";

export const metadata = {
  alternates: {
    canonical: "https://www.yescrew.com",
  },
};

const featureCards = [
  {
    title: "Grow Your Business",
    image: "/e3803745-d93f-49f4-a7f3-3abd67d1775e.png",
    text: "Get clients sent to your business with no upfront cost. Risk FREE Marketing® puts up all the money to get you clients and only gets paid a performance fee once we deliver your business a paying client.",
    cta: "Learn More",
  },
  {
    title: "Expand Your Network",
    image: "/AdobeStock_389578103-scaled.jpeg",
    text: "Get referred opportunities through our network. We call it Yes Crew. Members of our network offer each other's services and get paid referral fees for referring to the network.",
    cta: "Discover How",
  },
  {
    title: "Make Passive Income",
    image: "/AdobeStock_683895359-scaled.jpeg",
    text: "Make money while you sleep. Get paid by referring to the network. Make your small business look like a large company with our network.",
    cta: "Get Started",
  },
];

const testimonialVideos = [
  { id: "Z9xA3wD-Fus", title: "Danny Thousand Oaks Barber Testimonial for Risk FREE Marketing®" },
  { id: "iDDmGwxzzsU", title: "Eli the Barber Seems Very Happy with Risk FREE Marketing®" },
  { id: "qDfnPrZIUTE", title: "\u201cI Only Pay for Results\u201d \u2013 Real Experience with Yes Crew & Risk Free Marketing®" },
];

const everythingYouNeed = [
  { emoji: "🚀", title: "Get More Clients", items: ["Website", "Social Media"] },
  { emoji: "💰", title: "Close More Clients", items: ["Appointment Booking", "CRM System"] },
  { emoji: "🤖", title: "Automate Everything", items: ["AI Assistant", "Follow-Ups"] },
];

const steps = [
  {
    number: 1,
    title: "Join the Network",
    text: "Sign up and become a part of the Yes Crew community, where businesses support each other through referrals.",
  },
  {
    number: 2,
    title: "Share Opportunities",
    text: "Post opportunities that your business can't take on and refer them to other members in the network.",
  },
  {
    number: 3,
    title: "Receive Referrals",
    text: "Get referrals from other businesses in the network, allowing you to say yes to more opportunities and grow your business.",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(-90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%), url(/e3803745-d93f-49f4-a7f3-3abd67d1775e.png)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-white mb-4">
              Unlock New Opportunities
            </p>
            <h1 className="text-4xl md:text-6xl text-white leading-tight mb-6">
              Say Yes with Yes Crew
            </h1>
            <p className="text-lg text-neutral-200 mb-8">
              Join our network to get clients from Risk FREE Marketing®,
              referrals from the network and watch your business grow.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-[#2ea3f2] hover:text-white transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl text-[#0e0c19] mb-6">
            Our Vision and Mission
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Risk Free Marketing® gets you clients with zero upfront costs on
            a pay for performance basis. We invest in you to get you clients
            and give you AI powered systems to free up your time so you can
            do what you love.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Once freed to do what you love, we unite your business with our
            network to make your small business look like a large
            corporation. Our network allows you to offer additional services
            that make you passive income, deliver exceptional value and see
            the world from a win-win perspective.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-2xl md:text-3xl text-white leading-snug">
            “If you don’t find a way to make money while you sleep, you will
            work until you die.”
          </h2>
          <p className="text-xl text-white mt-4">-Warren Buffett</p>
        </div>
      </section>

      {/* 3 FEATURE CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {featureCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <h3 className="text-2xl text-neutral-300 mb-5">{card.title}</h3>
              <div className="relative w-full h-52 mb-5 rounded overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 flex-1">
                {card.text}
              </p>
              <div>
                <Link
                  href="/contact-us"
                  className="inline-block bg-[#2ea3f2] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVER RISK FREE MARKETING */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-8">
            Discover Risk FREE Marketing®
          </h2>
          <div className="text-[#ff0000] text-2xl md:text-3xl font-bold space-y-2 mb-10 font-sans">
            <p>No upfront cost</p>
            <p>No contracts</p>
            <p>You only pay when you get results</p>
          </div>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-[#1d1c24] border border-neutral-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-[#2ea3f2] transition-colors"
          >
            👉 APPLY FOR RISK FREE MARKETING®
          </Link>
        </div>
      </section>

      {/* REAL RESULTS - TESTIMONIAL VIDEOS */}
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

      {/* WHY THIS ISN'T LIKE OTHER MARKETING */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <h2 className="text-3xl md:text-5xl text-white leading-tight">
            Why This Isn’t Like Other Marketing
          </h2>
          <div>
            <p className="text-neutral-400 text-lg mb-4">
              Most marketing agencies charge you upfront and hope it works.
            </p>
            <p className="text-[#ff0000] text-3xl md:text-4xl font-bold mb-6 font-sans">
              We do the opposite.
            </p>
            <div className="space-y-3 text-xl text-white">
              <p>We build everything for you</p>
              <p>We connect you with real customers</p>
              <p>You only pay for real results!</p>
            </div>
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
                    <li key={item} className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="text-[#2ea3f2]">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN VIDEO */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden bg-neutral-900">
          <iframe
            src="https://www.youtube.com/embed/xpAbdkNeDns"
            title="Yes Crew & Risk Free Marketing® Gets Businesses Client with Zero Upfront Cost"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-10 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0e0c19] mb-4">
              How It Works
            </h2>
            <p className="text-neutral-600">
              Discover how Yes Crew helps small businesses seize new
              opportunities with ease.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full border-4 border-[#d4af37] flex items-center justify-center text-2xl font-bold text-[#0e0c19] font-sans">
                  {step.number}
                </div>
                <h3 className="text-xl text-[#0e0c19] mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN YES CREW TODAY */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%), url(/AdobeStock_804340095-scaled.jpeg)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl text-white mb-6">
              Join Yes Crew Today!
            </h2>
            <p className="text-neutral-200 text-lg mb-8">
              Don’t miss out on valuable opportunities. Join Yes Crew and start
              saying yes to new business prospects. Together, we can bring
              businesses together and help each other succeed.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-[#2ea3f2] hover:text-white transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
