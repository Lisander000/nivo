"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [subject, setSubject] = useState("");

  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Contact Us</span>
      </nav>

      <h1 className="text-[24px] font-bold text-ink mb-2">Contact Us</h1>
      <p className="text-[14px] text-ink-muted mb-6">We&apos;d love to hear from you. Choose your preferred way to reach us.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Chat with us", desc: "Mon-Sat, 9:00-21:00", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>, action: "Start chat" },
          { title: "Email us", desc: "info@nivo.ks", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>, action: "Send email" },
          { title: "Call us", desc: "+383 44 123 456", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>, action: "Mon-Sat, 9:00-21:00" },
        ].map(c => (
          <div key={c.title} className="bg-white rounded-2xl shadow-card p-5 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mx-auto mb-3">
              {c.icon}
            </div>
            <p className="text-[15px] font-bold text-ink">{c.title}</p>
            <p className="text-[13px] text-ink-muted mt-1">{c.desc}</p>
            <p className="text-[12px] text-primary font-semibold mt-2">{c.action}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
        <h2 className="text-[18px] font-bold text-ink mb-5">Send us a message</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-medium text-ink mb-1.5">Name</label>
              <input type="text" placeholder="Your full name" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-ink mb-1.5">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
            </div>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-ink mb-1.5">Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 text-ink-secondary">
              <option value="">Select a topic</option>
              <option value="order">Order inquiry</option>
              <option value="return">Returns & Refunds</option>
              <option value="warranty">Warranty claim</option>
              <option value="payment">Payment issue</option>
              <option value="seller">Seller inquiry</option>
              <option value="business">Business account</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-ink mb-1.5">Order number (optional)</label>
            <input type="text" placeholder="e.g. NV-2026-12345" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-ink mb-1.5">Message</label>
            <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted resize-none" />
          </div>
          <button className="h-[48px] px-8 bg-primary hover:bg-primary-dark text-white text-[15px] font-bold rounded-xl transition-colors shadow-sm">
            Send message
          </button>
        </div>
      </div>

      <div className="mt-8 bg-bg rounded-2xl p-6">
        <h2 className="text-[16px] font-bold text-ink mb-3">Visit us</h2>
        <p className="text-[14px] text-ink-secondary">Nivo sh.p.k.</p>
        <p className="text-[14px] text-ink-secondary">Rr. Agim Ramadani 40</p>
        <p className="text-[14px] text-ink-secondary">10000 Prishtina, Kosovo</p>
        <p className="text-[13px] text-ink-muted mt-2">Office hours: Mon-Fri, 9:00-17:00</p>
      </div>
    </div>
  );
}
