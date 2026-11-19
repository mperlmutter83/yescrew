'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (companyWebsite) return; // bot
    setStatus('sending');
    setErrorMsg('');
    const started = Date.now();
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim() || null,
          phone: phone.trim(),
          service_needed: [business.trim() && `Business: ${business.trim()}`, message.trim() && `Message: ${message.trim()}`]
            .filter(Boolean)
            .join(' | ') || 'Website contact form',
          company_website: companyWebsite,
          elapsed_ms: Date.now() - started,
          submission_id: `yescrew-contact-${Date.now()}`,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      setStatus('sent');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong — please email info@yescrew.com directly.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-black mb-3">Message received!</h3>
        <p className="text-neutral-600">Thanks for reaching out — we usually reply within one business day.</p>
      </div>
    );
  }

  const input = 'w-full border border-neutral-300 rounded-md px-4 py-3 text-black';

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-4" style={{ color: '#111' }}>
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#111' }}>Send us a message</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className={input} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">Phone *</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required className={input} placeholder="(310) 555-0123" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} placeholder="jane@business.com" />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">Business name</label>
          <input value={business} onChange={(e) => setBusiness(e.target.value)} className={input} placeholder="Jane's Barbershop" />
        </div>
      </div>
      <div>
        <label className="block font-semibold text-sm mb-1">How can we help?</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className={input} placeholder="Tell us about your business…" />
      </div>
      <input type="text" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === 'error' && <p className="text-red-600 font-medium">{errorMsg}</p>}
      <button type="submit" disabled={status === 'sending'} className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-neutral-800 disabled:opacity-50 transition-colors">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
