"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-[calc(100vh-80px)] bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-10 items-stretch">
          {/* LEFT — Brand panel */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white order-2 lg:order-1 min-h-[420px] lg:min-h-[640px]">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-white/5 blur-2xl pointer-events-none" />

            <div className="relative h-full flex flex-col p-8 md:p-12">
              {/* Logo */}
              <Link href="/" className="flex items-baseline gap-0.5 self-start">
                <span className="text-[28px] font-black text-white">kahsya</span>
                <span className="text-[28px] font-black text-accent">.</span>
              </Link>

              {/* Headline */}
              <div className="flex-1 flex flex-col justify-center py-10">
                <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5 self-start border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">Members club</span>
                </div>
                <h1 className="text-[36px] md:text-[48px] font-black leading-[1.02] tracking-tight mb-4">
                  Welcome to <br /> the <span className="text-accent">club.</span>
                </h1>
                <p className="text-[15px] text-white/70 max-w-[400px] leading-relaxed">
                  Join 50,000+ people who shop the latest tech on Kosovo&apos;s premium gadget marketplace.
                </p>
              </div>

              {/* Perks */}
              <div className="space-y-3.5">
                {[
                  { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Priority access to drops & deals" },
                  { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3Z", text: "Split any order in 3 payments" },
                  { icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z", text: "14-day no-questions returns" },
                  { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", text: "Every seller verified" },
                ].map((p) => (
                  <div key={p.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </div>
                    <p className="text-[13px] text-white/85 font-semibold">{p.text}</p>
                  </div>
                ))}
              </div>

              {/* Trust row */}
              <div className="flex items-center gap-5 pt-8 mt-8 border-t border-white/10">
                <div>
                  <p className="text-[22px] font-black text-white leading-none">50k+</p>
                  <p className="text-[11px] text-white/50 font-medium mt-1">Members</p>
                </div>
                <div className="w-px h-9 bg-white/15" />
                <div>
                  <p className="text-[22px] font-black text-white leading-none">4.8★</p>
                  <p className="text-[11px] text-white/50 font-medium mt-1">2,400+ reviews</p>
                </div>
                <div className="w-px h-9 bg-white/15" />
                <div>
                  <p className="text-[22px] font-black text-white leading-none">24h</p>
                  <p className="text-[11px] text-white/50 font-medium mt-1">Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Auth form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-card p-6 md:p-10">
              {/* Tab switcher */}
              <div className="relative flex bg-bg rounded-xl p-1 mb-7">
                <div
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-transform duration-200"
                  style={{ transform: tab === "register" ? "translateX(calc(100% + 0px))" : "translateX(0)" }}
                />
                <button onClick={() => setTab("login")} className={`relative flex-1 py-2.5 text-[13px] font-extrabold text-center transition-colors ${tab === "login" ? "text-ink" : "text-ink-muted hover:text-ink"}`}>
                  Log in
                </button>
                <button onClick={() => setTab("register")} className={`relative flex-1 py-2.5 text-[13px] font-extrabold text-center transition-colors ${tab === "register" ? "text-ink" : "text-ink-muted hover:text-ink"}`}>
                  Create account
                </button>
              </div>

              <h2 className="text-[26px] md:text-[30px] font-black text-ink tracking-tight leading-tight mb-1.5">
                {tab === "login" ? "Welcome back" : "Join Kahsya"}
              </h2>
              <p className="text-[13px] text-ink-muted mb-6">
                {tab === "login" ? "Sign in to continue shopping" : "It takes less than 30 seconds"}
              </p>

              {/* Social auth */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <button className="h-[46px] flex items-center justify-center gap-2 rounded-xl border-2 border-border hover:border-ink hover:bg-bg transition-all text-[13px] font-bold text-ink">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="h-[46px] flex items-center justify-center gap-2 rounded-xl border-2 border-border hover:border-ink hover:bg-bg transition-all text-[13px] font-bold text-ink">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  Apple
                </button>
              </div>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-divider" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-3 text-[11px] text-ink-muted font-bold uppercase tracking-wider">or with email</span></div>
              </div>

              {tab === "login" ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="your@email.com" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
                      <span className="text-[13px] text-ink-secondary font-medium">Remember me</span>
                    </label>
                    <button className="text-[13px] text-primary font-bold hover:underline">Forgot?</button>
                  </div>
                  <button className="w-full h-[52px] bg-primary hover:bg-primary-dark text-white text-[14px] font-extrabold rounded-xl transition-all shadow-[0_6px_20px_rgba(0,70,190,0.25)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5">
                    Log in
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">First name</label>
                      <input type="text" placeholder="Arta" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Last name</label>
                      <input type="text" placeholder="Krasniqi" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="your@email.com" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-ink mb-1.5 uppercase tracking-wider">Password</label>
                    <input type="password" placeholder="Min. 8 characters" className="w-full h-[48px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder:text-ink-faint transition-all" />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-primary rounded mt-0.5" />
                    <span className="text-[12px] text-ink-muted leading-relaxed">I agree to the <Link href="/terms" className="text-primary font-bold hover:underline">Terms</Link> and <Link href="/privacy" className="text-primary font-bold hover:underline">Privacy Policy</Link></span>
                  </label>
                  <button className="w-full h-[52px] bg-primary hover:bg-primary-dark text-white text-[14px] font-extrabold rounded-xl transition-all shadow-[0_6px_20px_rgba(0,70,190,0.25)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5">
                    Create account
                  </button>
                </div>
              )}

              {/* Security line */}
              <div className="flex items-center justify-center gap-1.5 mt-6 pt-5 border-t border-divider">
                <svg className="w-3.5 h-3.5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                <p className="text-[11px] text-ink-muted font-medium">Bank-level encryption · Your data never sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
