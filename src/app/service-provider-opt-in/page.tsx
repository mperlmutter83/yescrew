import type { Metadata } from "next";
import OptInForm from "@/components/OptInForm";

export const metadata: Metadata = {
  title: "Service Provider Opt-In - Yes Crew",
  description:
    "Opt in to receive recurring SMS messages from Yes Crew regarding customer-status updates and service-provider support.",
};

export default function ServiceProviderOptIn() {
  return (
    <div className="bg-black">
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-4xl text-white text-center mb-10 leading-snug">
            Fill Out the Form Below to Opt In to SMS Notifications from Yes
            Crew.
          </h1>
          <OptInForm />
        </div>
      </section>
    </div>
  );
}
