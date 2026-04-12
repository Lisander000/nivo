"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [subject, setSubject] = useState("");

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Contact us</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="absolute -top-28 -right-20 w-[480px] h-[480px] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-16 py-14 md:py-20">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">Team online now</span>
          </div>
          <h1 className="text-[40px] md:text-[60px] font-black leading-[0.98] tracking-tight mb-4">
            Let&apos;s <span className="text-accent">talk.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/70 max-w-[520px] leading-relaxed">
            Question, feedback or just saying hi — our team reads everything and replies within 2 hours.
          </p>
        </div>
      </div>

      {/* Quick contact strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { title: "Live chat", desc: "Mon-Sat, 9:00-21:00", color: "bg-success", action: "Start chat", icon: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" },
          { title: "Email us", desc: "info@kahsya.ks", color: "bg-primary", action: "Send email", icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" },
          { title: "Call us", desc: "+383 44 123 456", color: "bg-accent", action: "Call now", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" },
        ].map((c) => (
          <button key={c.title} className="group bg-white rounded-2xl shadow-card p-6 text-left hover:-translate-y-1 hover:shadow-card-hover transition-all">
            <div className={`w-12 h-12 rounded-2xl ${c.color} text-white flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
              </svg>
            </div>
            <p className="text-[17px] font-black text-ink">{c.title}</p>
            <p className="text-[13px] text-ink-muted mt-0.5">{c.desc}</p>
            <p className="text-[13px] text-primary font-extrabold mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
              {c.action}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </p>
          </button>
        ))}
      </div>

      {/* Form + sidebar */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
          <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-2">Send a message</p>
          <h2 className="text-[26px] md:text-[30px] font-black text-ink tracking-tight leading-tight mb-2">Write to us</h2>
          <p className="text-[13px] text-ink-muted mb-7">We reply within 2 hours on business days.</p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Name</label>
                <input type="text" placeholder="Your full name" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Subject</label>
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 bg-white transition-all">
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
              <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Order number <span className="text-ink-muted normal-case font-medium">(optional)</span></label>
              <input type="text" placeholder="e.g. NV-2026-12345" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Message</label>
              <textarea rows={6} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint resize-none transition-all" />
            </div>
            <button className="h-[52px] px-8 bg-primary hover:bg-primary-dark text-white text-[14px] font-extrabold rounded-xl transition-all shadow-[0_6px_20px_rgba(0,70,190,0.25)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5 flex items-center gap-2">
              Send message
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Office card with map-style gradient */}
          <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-card p-7 text-white overflow-hidden">
            <div className="absolute -top-16 -right-16 w-[240px] h-[240px] rounded-full bg-accent/20 blur-3xl" />
            {/* Fake map lines */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)"
            }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/15 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <p className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-2">Visit our HQ</p>
              <p className="text-[18px] font-black leading-tight mb-1">Kahsya sh.p.k.</p>
              <p className="text-[13px] text-white/70 leading-relaxed">
                Rr. Agim Ramadani 40<br />
                10000 Prishtina, Kosovo
              </p>
              <div className="mt-5 pt-5 border-t border-white/15">
                <p className="text-[11px] text-white/50 font-bold uppercase tracking-wider mb-1">Office hours</p>
                <p className="text-[13px] font-bold">Mon-Fri · 9:00 – 17:00</p>
              </div>
            </div>
          </div>

          {/* Socials card */}
          <div className="bg-white rounded-2xl shadow-card p-7">
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-2">Follow us</p>
            <h3 className="text-[18px] font-black text-ink tracking-tight mb-4">Stay in the loop</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Instagram", bg: "hover:bg-pink-50 hover:text-pink-600" },
                { name: "Facebook", bg: "hover:bg-blue-50 hover:text-blue-600" },
                { name: "TikTok", bg: "hover:bg-gray-50 hover:text-ink" },
              ].map((s) => (
                <a key={s.name} href="#" className={`flex items-center justify-center h-[44px] rounded-xl border-2 border-border text-ink-muted text-[12px] font-bold transition-all ${s.bg}`}>
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Business inquiry */}
          <div className="bg-accent-light rounded-2xl p-6 border border-accent/10">
            <p className="text-[11px] font-extrabold text-accent-dark uppercase tracking-wider mb-1">Business inquiry?</p>
            <p className="text-[13px] text-ink-secondary leading-relaxed mb-3">
              Looking to sell on Kahsya or open a business account?
            </p>
            <div className="flex gap-2">
              <Link href="/partners" className="text-[12px] font-extrabold text-accent-dark hover:underline">Sell on Kahsya →</Link>
              <span className="text-ink-faint">·</span>
              <Link href="/business" className="text-[12px] font-extrabold text-accent-dark hover:underline">Kahsya Business →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
