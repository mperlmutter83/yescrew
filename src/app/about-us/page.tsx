import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Yes Crew",
  description:
    "Risk Free Marketing® empowers people to do what they love by getting them clients with zero upfront costs. Discover the Yes Crew movement for thriving local economies.",
};

const coreValues = [
  {
    title: "Passion for Craft",
    text: "We believe that the best work is produced by those who are passionate about their craft. At Yes Crew, we support professionals who take pride in their work and continuously strive to improve their skills, ensuring exceptional service for their clients.",
  },
  {
    title: "Independence",
    text: "Yes Crew champions the idea that individuals should have the freedom to work for themselves, building lives that align with their skills, passions, and values. Our network provides the tools and opportunities needed to achieve true independence.",
  },
  {
    title: "Customer Experience First",
    text: "Exceptional customer experiences are the cornerstone of successful businesses. At Yes Crew, we prioritize customer satisfaction, ensuring that when our clients succeed, everyone benefits. Our network is designed to deliver outstanding value to every customer.",
  },
  {
    title: "Fair Exchange of Value",
    text: "We believe in partnerships where value is created first, and compensation follows. Our Risk Free Marketing® model exemplifies this philosophy, aligning the interests of service providers and clients to ensure a fair and rewarding exchange for all parties involved.",
  },
  {
    title: "Community Over Competition",
    text: "Independent professionals become stronger when they support one another. Yes Crew is built on collaboration, referrals, and shared opportunity.",
  },
  {
    title: "Integrity and Transparency",
    text: "Trust is the foundation of any successful network. We believe in honest relationships between customers, service providers, and partners.",
  },
  {
    title: "Growth Through Opportunity",
    text: "Everyone deserves the chance to build something meaningful with their skills. Our goal is to create systems that unlock opportunity for others.",
  },
];

const rfmPrinciples = [
  {
    title: "Performance-Based Marketing",
    text: "Our Risk Free Marketing® model revolutionizes traditional marketing by aligning the interests of marketers, service providers, and customers. Instead of upfront costs, providers only pay when they gain paying clients, ensuring a fair exchange of value.",
  },
  {
    title: "Aligned Interests",
    text: "This approach creates a harmonious relationship between all parties involved. Marketers focus on delivering results, service providers benefit from increased business, and customers enjoy improved services from motivated professionals.",
  },
  {
    title: "Value Creation",
    text: "By prioritizing value creation over speculative investments, our model encourages sustainable growth for all stakeholders. It empowers professionals to invest in their craft, knowing that their efforts will lead to tangible outcomes.",
  },
  {
    title: "Collaborative Success",
    text: "Through collaboration and shared goals, the Risk Free Marketing® model strengthens the entire network, fostering an ecosystem where everyone thrives. This innovative approach is a cornerstone of Yes Crew's commitment to building a more equitable and prosperous economy.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-black">
      {/* VISION AND MISSION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl text-white mb-8">
            Our Vision and Mission
          </h1>
          <p className="text-neutral-300 text-lg leading-relaxed">
            Risk Free Marketing® empowers people to do what they love by getting
            them clients with zero upfront costs. We invest in them to get them
            clients and give them AI powered systems that support their business
            to free up their time so they can do what they love. Then we unite
            them to make their small business look like a large corporation by
            offering additional services through our network. Thus allowing them
            to make passive income, deliver exceptional value and see the world
            from a win-win perspective.
          </p>
        </div>
      </section>

      {/* JOIN THE MOVEMENT */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Empowering Independent Professionals
          </p>
          <h2 className="text-3xl md:text-5xl text-white mb-6">
            Join the Movement for Thriving Local Economies
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Discover a dynamic network where passionate professionals connect,
            collaborate, and create value, transforming communities and
            redefining success.
          </p>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-[#2ea3f2] text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Explore Opportunities
          </Link>
        </div>
      </section>

      {/* UNLOCK YOUR POTENTIAL */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-white mb-6">
            Unlock Your Potential with Yes Crew
          </h3>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-[#2ea3f2] hover:text-white transition-colors"
          >
            Join Us Today
          </Link>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-6">
            Core Values of Yes Crew
          </h2>
          <p className="text-neutral-400 text-center max-w-3xl mx-auto mb-14">
            At Yes Crew, we are driven by a set of core values that guide our
            mission to empower independent professionals and transform local
            economies. These values are the foundation of our community,
            fostering collaboration and success for all members.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-[#1d1c24] rounded-lg p-8"
              >
                <h3 className="text-xl text-white mb-4">{value.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DREAM */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-10">
            The Dream
          </h2>
          <div className="space-y-5 text-neutral-300 text-lg leading-relaxed">
            <p>We believe work should mean something.</p>
            <p>
              Too many people spend their lives doing work they do not care
              about, building someone else’s dream while their own talents sit
              unused.
            </p>
            <p>
              But throughout every community there are people who love what they
              do.
            </p>
            <p>The barber who perfects every cut.</p>
            <p>The trainer who transforms lives.</p>
            <p>The massage therapist who helps someone finally feel relief.</p>
            <p>The electrician who solves problems others cannot.</p>
            <p>These people are craftsmen.</p>
            <p>They are professionals.</p>
            <p>They are creators of value.</p>
            <p>
              Yet too often they struggle not because they lack skill—but
              because they lack systems, support, and opportunity.
            </p>
            <p>Yes Crew exists to change that.</p>
            <p>
              We believe that when passionate professionals come together,
              something powerful happens.
            </p>
            <p>Customers receive better service.</p>
            <p>Professionals build independent lives.</p>
            <p>Communities become stronger.</p>
            <p>
              A new kind of economy emerges—one built not on corporations
              alone, but on{" "}
              <strong className="text-white">
                networks of skilled individuals helping one another succeed.
              </strong>
            </p>
            <p>This is the Yes Crew movement.</p>
            <p>
              Where people say <strong className="text-white">YES</strong> to
              opportunity.
            </p>
            <p>YES to independence.</p>
            <p>YES to serving their communities.</p>
            <p>When people love what they do, everyone wins.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-20 px-6 bg-[#0e0c19]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-4">
            The Yes Crew Philosophy
          </h2>
          <h3 className="text-2xl text-white text-center mb-10">
            A More Human Economy
          </h3>
          <div className="space-y-5 text-neutral-300 text-lg leading-relaxed">
            <p>
              Modern economies are often built around large institutions,
              centralized employment, and systems that distance people from the
              work they perform.
            </p>
            <p>But at the local level, something different is possible.</p>
            <p>
              A more human economic model can exist—one built around{" "}
              <strong className="text-white">
                independent professionals, community networks, and real
                relationships between service providers and customers.
              </strong>
            </p>
            <p>This is the philosophy behind Yes Crew.</p>
          </div>

          <div className="mt-16 space-y-14">
            <div>
              <h3 className="text-2xl text-white mb-6">The Win-Win-Win Model</h3>
              <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                <p>Traditional business often creates winners and losers.</p>
                <p>Yes Crew operates on a different principle:</p>
                <p>
                  <strong className="text-white">Customer Wins</strong>
                  <br />
                  Customers receive better service from professionals who truly
                  care about their work.
                </p>
                <p>
                  <strong className="text-white">Service Provider Wins</strong>
                  <br />
                  Professionals gain independence, control of their schedule,
                  and the ability to earn based on the value they provide.
                </p>
                <p>
                  <strong className="text-white">Network Wins</strong>
                  <br />
                  Through collaboration, referrals, and shared opportunity, the
                  entire ecosystem grows stronger.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-6">The Power of Passion</h3>
              <div className="space-y-2 text-neutral-300 text-lg leading-relaxed">
                <p>When someone loves their craft:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Quality improves</li>
                  <li>Customer experience improves</li>
                  <li>Word-of-mouth grows</li>
                  <li>Communities benefit</li>
                </ul>
                <p className="pt-3">
                  Passion is not just emotional—it is{" "}
                  <strong className="text-white">economically powerful</strong>.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-6">
                Risk-Free Value Creation
              </h3>
              <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                <p>
                  Many professionals struggle to grow because traditional
                  marketing demands large upfront investments with uncertain
                  results.
                </p>
                <p>Risk Free Marketing® changes this model.</p>
                <p>
                  Instead of paying first and hoping for results, professionals
                  only pay when value is delivered.
                </p>
                <p>
                  This creates alignment between marketers, service providers,
                  and customers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl text-white mb-6">Community Networks</h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Yes Crew is built around the idea that{" "}
                <strong className="text-white">
                  independent professionals should not have to succeed alone.
                </strong>{" "}
                Through networks of trusted providers, referrals, and shared
                opportunities, individuals can operate with the strength of a
                larger organization while maintaining their independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE YES CREW PRINCIPLE */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-8">
            The Yes Crew Principle
          </h2>
          <p className="text-neutral-300 text-lg leading-relaxed mb-4">
            At the heart of Yes Crew is one simple belief:
          </p>
          <p className="text-2xl text-white mb-8">
            When people love what they do, everyone wins.
          </p>
          <div className="space-y-2 text-neutral-300 text-lg">
            <p>Customers receive better experiences.</p>
            <p>Professionals build independent lives.</p>
            <p>Communities become stronger.</p>
            <p>And work becomes something people are proud of.</p>
          </div>
        </div>
      </section>

      {/* RISK FREE MARKETING PRINCIPLES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-14">
            Risk Free Marketing®
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rfmPrinciples.map((p) => (
              <div key={p.title} className="bg-white rounded-lg p-8">
                <h3 className="text-xl text-[#0e0c19] mb-4">{p.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-white mb-8">
            Join Yes Crew and Transform Your Professional Journey
          </h3>
          <Link
            href="/apply-to-risk-free-marketing"
            className="inline-block bg-[#2ea3f2] text-white font-semibold px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Become a Member Today
          </Link>
        </div>
      </section>
    </div>
  );
}
