'use client';

import { useState } from 'react';

export default function ApplyForm() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [city, setCity] = useState('');
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
          service_needed: [
            'APPLICATION: Risk Free Marketing',
            business.trim() && `Business: ${business.trim()}`,
            service.trim() && `Service: ${service.trim()}`,
            city.trim() && `City: ${city.trim()}`,
          ].filter(Boolean).join(' | '),
          company_website: companyWebsite,
          elapsed_ms: Date.now() - started,
          submission_id: `yescrew-apply-${Date.now()}`,
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
      <div className="bg-white rounded-lg p-10 text-center">
        <h3 className="text-3xl font-bold mb-3" style={{ color: '#111' }}>Application received! 🎉</h3>
        <p className="mb-2" style={{ color: '#333' }}>Thanks {name.split(' ')[0] || 'there'} — we review applications within one business day.</p>
        <p style={{ color: '#555' }}>If we are a fit, we will call you to talk through your business and get you clients with zero upfront cost.</p>
      </div>
    );
  }

  const input = 'w-full border border-neutral-300 rounded-md px-4 py-3';

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Your name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required className={input} placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">Business name *</label>
          <input value={business} onChange={(e) => setBusiness(e.target.value)} required className={input} placeholder="Jane's Barbershop" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-sm mb-1">Phone *</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required className={input} placeholder="(310) 555-0123" />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} placeholder="jane@business.com" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold text-sm mb-1">What service do you provide? *</label>
          <input value={service} onChange={(e) => setService(e.target.value)} required className={input} placeholder="Barber, trainer, organizer…" />
        </div>
        <div>
          <label className="block font-semibold text-sm mb-1">City *</label>
          <input value={city} onChange={(e) => setCity(e.target.value)} required className={input} placeholder="Los Angeles" />
        </div>
      </div>
      <input type="text" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === 'error' && <p className="text-red-600 font-medium">{errorMsg}</p>}
      <button type="submit" disabled={status === 'sending'} className="w-full bg-black text-white font-bold py-4 rounded-md hover:bg-neutral-800 disabled:opacity-50 transition-colors text-lg">
        {status === 'sending' ? 'Submitting…' : 'Apply — $0 Upfront'}
      </button>
      <p className="text-center text-sm" style={{ color: '#666' }}>Takes 30 seconds. No contracts. You only pay when you get a paying client.</p>
    </form>
  );
}
