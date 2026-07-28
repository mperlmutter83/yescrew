"use client";

import { useState, useEffect, useRef } from "react";

const CONSENT_TEXT =
  "I agree to receive recurring SMS messages from Yes Crew regarding appointment or customer-status updates and service-provider support. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase. Mobile opt-in information will not be sold or shared with third parties for promotional or marketing purposes.";

export default function OptInForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [accepted, setAccepted] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const loadTime = useRef<number>(0);
  const submissionId = useRef<string>("");

  useEffect(() => {
    loadTime.current = Date.now();
    submissionId.current = crypto.randomUUID();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = data.get("first_name");
    const lastName = data.get("last_name");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          phone: data.get("phone"),
          email: data.get("email"),
          service_needed:
            "SERVICE PROVIDER OPT-IN FORM SUBMISSION (yescrew.com)." +
            (smsConsent
              ? " SMS CONSENT: YES — Consented to receive recurring SMS messages regarding appointment or customer-status updates and service-provider support."
              : " SMS CONSENT: NO — Did not opt in to SMS messages.") +
            (data.get("phone") ? "" : " (No phone provided — email-only submission.)"),
          company_website: data.get("company_website"),
          elapsed_ms: Date.now() - loadTime.current,
          submission_id: submissionId.current,
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setAccepted(false);
        setSmsConsent(false);
        loadTime.current = Date.now();
        submissionId.current = crypto.randomUUID();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-lg p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl text-[#0e0c19] mb-3">Thank You!</h3>
        <p className="text-neutral-600">
          Your submission has been received.
          {smsConsent &&
            " You will now receive SMS notifications from Yes Crew."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-8 md:p-10 space-y-5"
    >
      <h3 className="text-2xl text-[#0e0c19] mb-2">Service Provider Opt-in</h3>

      {/* Honeypot - invisible to humans */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute opacity-0 -z-10 h-0 w-0"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="first_name" className="block text-sm font-semibold text-neutral-700 mb-1">
            First Name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#2ea3f2]"
          />
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-semibold text-neutral-700 mb-1">
            Last Name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#2ea3f2]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-1">
            Phone <span className="font-normal text-neutral-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#2ea3f2]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#2ea3f2]"
          />
        </div>
      </div>

      <div className="border border-neutral-200 rounded-lg p-4 bg-neutral-50 space-y-4">
        <p className="text-sm text-neutral-600 leading-relaxed">
          {CONSENT_TEXT}{" "}
          View our{" "}
          <a href="/privacy-policy" className="text-[#2ea3f2] underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" className="text-[#2ea3f2] underline">
            Terms of Service
          </a>
          .
        </p>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[#2ea3f2]"
          />
          <span className="text-sm font-semibold text-neutral-800">
            I agree to receive recurring SMS messages from Yes Crew as
            described above. <span className="font-normal text-neutral-500">(optional)</span>
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[#2ea3f2]"
            required
          />
          <span className="text-sm font-semibold text-neutral-800">
            I accept the Terms and Conditions. *
          </span>
        </label>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || !accepted}
        className="w-full bg-black text-white font-semibold py-3.5 rounded-full hover:bg-[#2ea3f2] hover:text-white transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
