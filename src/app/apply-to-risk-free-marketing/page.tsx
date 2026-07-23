import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Risk FREE Marketing® - Yes Crew",
  description:
    "Apply in 30 seconds to start getting clients. ONLY PAY FOR RESULTS. Risk FREE Marketing® by Yes Crew.",
};

export default function Apply() {
  return (
    <div className="bg-black">
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-white mb-6">
            Apply in 30 Seconds to Start Getting Clients
          </h1>
          <p className="text-[#ff0000] text-2xl md:text-3xl font-bold font-sans mb-12">
            ONLY PAY FOR RESULTS
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 overflow-hidden">
          <iframe
            aria-label="Apply for Risk Free Marketing"
            src="https://forms.zohopublic.com/mikeyes1/form/ApplyforRiskFreeMarketing/formperma/nBMjbKRrBsYrtIUElxmWHEAM-oK1OAB9RD4EtZyevq0"
            style={{ height: "1800px", width: "100%", border: "none" }}
            title="Apply for Risk Free Marketing"
          />
        </div>
      </section>
    </div>
  );
}
