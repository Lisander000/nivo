"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <div className="max-w-[480px] mx-auto px-4 py-10">
      <div className="text-center mb-8">
        <div className="flex items-baseline gap-0.5 justify-center mb-2">
          <span className="text-[32px] font-extrabold text-primary">nivo</span>
          <span className="text-[32px] font-extrabold text-accent">.</span>
        </div>
        <p className="text-[14px] text-ink-muted">Log in or create your account</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        {/* Tab switcher */}
        <div className="flex border-b border-divider">
          <button onClick={() => setTab("login")} className={`flex-1 py-3.5 text-[14px] font-semibold text-center border-b-2 -mb-[1px] transition-colors ${tab === "login" ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"}`}>
            Log in
          </button>
          <button onClick={() => setTab("register")} className={`flex-1 py-3.5 text-[14px] font-semibold text-center border-b-2 -mb-[1px] transition-colors ${tab === "register" ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"}`}>
            Create account
          </button>
        </div>

        <div className="p-6 space-y-4">
          {tab === "login" ? (
            <>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Email address</label>
                <input type="email" placeholder="your@email.com" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-primary rounded" />
                  <span className="text-[13px] text-ink-secondary">Remember me</span>
                </label>
                <button className="text-[13px] text-primary font-medium hover:underline">Forgot password?</button>
              </div>
              <button className="w-full h-[48px] bg-primary hover:bg-primary-dark text-white text-[15px] font-bold rounded-xl transition-colors shadow-sm">
                Log in
              </button>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5">First name</label>
                  <input type="text" placeholder="First name" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5">Last name</label>
                  <input type="text" placeholder="Last name" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Email address</label>
                <input type="email" placeholder="your@email.com" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">Password</label>
                <input type="password" placeholder="Min. 8 characters" className="w-full h-[44px] px-4 rounded-xl border-2 border-border text-[14px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 placeholder:text-ink-muted" />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary rounded mt-0.5" />
                <span className="text-[12px] text-ink-muted leading-relaxed">I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></span>
              </label>
              <button className="w-full h-[48px] bg-primary hover:bg-primary-dark text-white text-[15px] font-bold rounded-xl transition-colors shadow-sm">
                Create account
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 bg-white rounded-2xl shadow-card p-5">
        <p className="text-[13px] text-ink-muted text-center">Shopping without worries at nivo</p>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {[
            { icon: <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, text: "Secure" },
            { icon: <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, text: "Free delivery" },
            { icon: <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>, text: "Easy returns" },
          ].map(t => (
            <div key={t.text} className="text-center">
              <div className="flex justify-center mb-1">{t.icon}</div>
              <p className="text-[11px] text-ink-muted font-medium">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
