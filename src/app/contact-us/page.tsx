import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Yes Crew",
  description:
    "Contact Yes Crew — info@yescrew.com · (424) 999-0653 · Los Angeles, CA. Hours: M-F 10am-8pm.",
};

const contactCards = [
  {
    title: "Office Address",
    lines: ["Los Angeles, CA"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    title: "Contact Us",
    lines: ["info@yescrew.com", "(424) 999-0653"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    title: "Hours of Operation",
    lines: ["M-F: 10am – 8pm", "S-S: Closed (sometimes)"],
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6 4.2 2.5-.8 1.3-5.4-3.2V7h2v5.6z" />
      </svg>
    ),
  },
];

export default function ContactUs() {
  return (
    <div className="bg-black">
      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-6xl text-white mb-4">
            Let’s Build Something
          </h1>
          <p className="text-neutral-300 text-lg">We would love to help you.</p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#1d1c24] rounded-lg p-8 text-center"
            >
              <div className="text-[#2ea3f2] flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl text-white mb-4">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-neutral-300">
                  {line === "info@yescrew.com" ? (
                    <a
                      href="mailto:info@yescrew.com"
                      className="hover:text-[#2ea3f2] transition-colors"
                    >
                      {line}
                    </a>
                  ) : line === "(424) 999-0653" ? (
                    <a
                      href="tel:+14249990653"
                      className="hover:text-[#2ea3f2] transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SEND A MESSAGE */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Send a Message
            </h2>
            <p className="text-neutral-300 text-lg mb-8">
              Interested in driving growth? Have a general question? We’re just
              an email away.
            </p>
            <Image
              src="/mperlmutter_crm_and_analytical_systems_58f8d47e-7f77-463b-bf06-ef8be4c45f3c-1.png"
              alt="Yes Crew CRM and analytical systems"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="bg-white rounded-lg p-2 overflow-hidden">
            <iframe
              aria-label="Contact Us"
              src="https://forms.zohopublic.com/mikeyes1/form/ContactUs/formperma/CQZf1ja4nk3uFHK5sWMPt8ElJWTsckV6pq62Fv7kHJY"
              style={{ height: "1200px", width: "100%", border: "none" }}
              title="Contact Us"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
