"use client";

import { useState } from "react";
import Link from "next/link";

const steps = ["Store", "Legal", "Products", "Review"];

export default function SellerRegisterPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Link href="/seller/login" className="flex items-baseline gap-1.5">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[22px] font-extrabold text-white">kahsya</span>
              <span className="text-[22px] font-extrabold text-amber-400">.</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400 border-l border-white/15 pl-2 ml-1">Partners</span>
          </Link>
          <Link href="/seller/login" className="text-[12px] font-extrabold text-white/60 hover:text-white transition-colors">Already a partner? Sign in →</Link>
        </div>
      </header>

      <div className="flex-1 flex items-start justify-center px-6 py-12">
        <div className="w-full max-w-[720px]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Open a store</span>
            </div>
            <h1 className="text-[36px] md:text-[44px] font-black tracking-tight leading-[1.05] text-white">Sell on Kahsya</h1>
            <p className="text-[13px] text-white/55 mt-3 max-w-[460px] mx-auto">Reach 50,000+ active shoppers across Kosovo. 48h review, 0% listing fee, payouts every Monday.</p>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-7 gap-3">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black flex-shrink-0 transition-all ${
                  i < step ? "bg-amber-400 text-[#0A0A14]" : i === step ? "bg-amber-400 text-[#0A0A14] ring-4 ring-amber-400/20" : "bg-white/5 text-white/40"
                }`}>
                  {i < step ? "✓" : i + 1}
                </div>
                <span className={`text-[12px] font-extrabold uppercase tracking-wider truncate hidden md:inline ${i <= step ? "text-white" : "text-white/35"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`flex-1 h-[2px] rounded-full ${i < step ? "bg-amber-400" : "bg-white/5"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7 backdrop-blur-sm">
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Store name</label>
                  <input placeholder="e.g. Prishtina Home Co." className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Store URL</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl bg-white/5 border-2 border-r-0 border-white/10 text-white/40 text-[13px] font-bold">kahsya.ks/store/</span>
                    <input placeholder="prishtina-home" className="flex-1 h-[48px] px-4 rounded-r-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Contact email</label>
                  <input type="email" placeholder="team@yourstore.ks" className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Phone</label>
                  <input placeholder="+383 44 ..." className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Legal entity</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Sole trader", "Sh.p.k / LLC"].map((t) => (
                      <button key={t} className="h-[48px] rounded-xl bg-white/5 border-2 border-white/10 text-white text-[13px] font-extrabold hover:border-amber-400 transition-all">{t}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Business number (NF/NUI)</label>
                  <input placeholder="810XXXXXX" className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">IBAN (for payouts)</label>
                  <input placeholder="XK05 ..." className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Registered address</label>
                  <input placeholder="Street, city, postal code" className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 transition-all" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-2 uppercase tracking-wider">Primary categories</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {["Fashion", "Home", "Electronics", "Beauty", "Kids", "Sports", "Books", "Garden", "Groceries"].map((c) => (
                      <label key={c} className="flex items-center gap-2 h-[42px] px-3 rounded-xl bg-white/5 border-2 border-white/10 cursor-pointer hover:border-amber-400/60 transition-colors">
                        <input type="checkbox" className="accent-amber-400" />
                        <span className="text-[12px] text-white font-bold">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Estimated catalog size</label>
                  <select className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] focus:outline-none focus:border-amber-400 transition-all">
                    <option className="bg-[#0A0A14]">1 – 20 products</option>
                    <option className="bg-[#0A0A14]">20 – 100 products</option>
                    <option className="bg-[#0A0A14]">100 – 500 products</option>
                    <option className="bg-[#0A0A14]">500+ products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Fulfillment</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="h-[70px] rounded-xl bg-white/5 border-2 border-amber-400 text-white text-[12px] font-extrabold px-3 text-left">
                      <p className="text-amber-400 text-[10px] uppercase tracking-wider mb-1">Recommended</p>
                      Fulfilled by Kahsya
                    </button>
                    <button className="h-[70px] rounded-xl bg-white/5 border-2 border-white/10 text-white text-[12px] font-extrabold px-3 text-left hover:border-amber-400/60 transition-colors">
                      Self-fulfill
                      <p className="text-white/40 text-[10px] font-medium mt-1">You ship each order</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="rounded-2xl bg-amber-400/10 border border-amber-400/20 p-5">
                  <p className="text-[13px] font-extrabold text-amber-400 mb-3">Almost there!</p>
                  <p className="text-[12px] text-white/70 leading-relaxed">We&apos;ll review your application within <span className="font-extrabold text-white">48 hours</span>. You&apos;ll get an email with the next steps (verification call + catalog import).</p>
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" className="accent-amber-400 mt-0.5" />
                  <span className="text-[12px] text-white/70 leading-relaxed">I agree to the <Link href="/terms" className="text-amber-400 font-bold hover:underline">Partner Agreement</Link>, <Link href="/privacy" className="text-amber-400 font-bold hover:underline">Privacy Policy</Link> and Kahsya&apos;s <span className="text-amber-400 font-bold">12% commission structure</span>.</span>
                </label>
              </div>
            )}

            {/* Nav */}
            <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/8 gap-3">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="h-[44px] px-5 rounded-xl border border-white/15 text-white/60 text-[12px] font-extrabold hover:bg-white/5 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="h-[44px] px-6 bg-amber-400 hover:bg-amber-300 text-[#0A0A14] text-[12px] font-black rounded-xl transition-all"
                >
                  Continue →
                </button>
              ) : (
                <Link
                  href="/seller/dashboard"
                  className="h-[44px] px-6 bg-amber-400 hover:bg-amber-300 text-[#0A0A14] text-[12px] font-black rounded-xl transition-all inline-flex items-center"
                >
                  Submit application
                </Link>
              )}
            </div>
          </div>

          {/* Customer redirect */}
          <div className="mt-5 text-center">
            <p className="text-[11px] text-white/35">
              Just want to shop? <Link href="/account/login" className="text-white/80 font-extrabold hover:text-white">Customer login →</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
