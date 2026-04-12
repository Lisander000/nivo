import Link from "next/link";

export const metadata = { title: "Seller login · Kahsya Partners" };

export default function SellerLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Link href="/seller/login" className="flex items-baseline gap-1.5">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[22px] font-extrabold text-white">kahsya</span>
              <span className="text-[22px] font-extrabold text-amber-400">.</span>
            </div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400 border-l border-white/15 pl-2 ml-1">Partners</span>
          </Link>
          <Link href="/" className="text-[12px] font-extrabold text-white/60 hover:text-white transition-colors">← Back to shop</Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[440px]">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Seller portal</span>
            </div>
            <h1 className="text-[36px] md:text-[44px] font-black leading-[1.02] tracking-tight text-white">
              Welcome back, <br /><span className="text-amber-400">partner.</span>
            </h1>
            <p className="text-[13px] text-white/55 mt-3 max-w-[340px] mx-auto">Sign in to your Kahsya store. Track sales, manage inventory, ship orders.</p>
          </div>

          {/* Form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7 backdrop-blur-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Store email</label>
                <input type="email" placeholder="you@yourstore.ks" className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 focus:bg-white/[0.07] transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-white/70 mb-1.5 uppercase tracking-wider">Password</label>
                <input type="password" placeholder="Enter password" className="w-full h-[48px] px-4 rounded-xl bg-white/5 border-2 border-white/10 text-white text-[14px] placeholder:text-white/25 focus:outline-none focus:border-amber-400 focus:bg-white/[0.07] transition-all" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-amber-400 rounded" />
                  <span className="text-[12px] text-white/60 font-medium">Keep me signed in</span>
                </label>
                <button className="text-[12px] text-amber-400 font-extrabold hover:underline">Forgot?</button>
              </div>
              <Link
                href="/seller/dashboard"
                className="w-full h-[52px] flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-[#0A0A14] text-[14px] font-black rounded-xl transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(251,191,36,0.25)]"
              >
                Sign in to dashboard
              </Link>
            </div>

            {/* 2FA notice */}
            <div className="mt-5 pt-5 border-t border-white/8 flex items-center gap-2 justify-center">
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <p className="text-[11px] text-white/40 font-medium">Seller accounts require 2FA verification</p>
            </div>
          </div>

          {/* Become a seller */}
          <div className="mt-4 bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[13px] font-extrabold text-white">New to Kahsya?</p>
              <p className="text-[11px] text-white/50 font-medium">Apply to open your store — 48h review.</p>
            </div>
            <Link href="/seller/register" className="flex-shrink-0 h-[38px] inline-flex items-center gap-1 px-4 rounded-xl border border-amber-400/40 text-amber-400 text-[12px] font-extrabold hover:bg-amber-400 hover:text-[#0A0A14] transition-colors">
              Apply
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>

          {/* Customer redirect — prevents mix-up */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/20 to-transparent p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-extrabold text-white">Looking to shop?</p>
                <p className="text-[11px] text-white/50 font-medium truncate">You&apos;re on the seller portal by mistake.</p>
              </div>
            </div>
            <Link href="/account/login" className="flex-shrink-0 h-[38px] inline-flex items-center gap-1 px-4 rounded-xl bg-white text-[#0A0A14] text-[12px] font-extrabold hover:bg-white/90 transition-colors">
              Customer login
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 py-5 flex items-center justify-between text-[11px] text-white/30 font-medium">
          <p>© 2026 Kahsya sh.p.k. Partners portal</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white/60">Terms</Link>
            <Link href="/privacy" className="hover:text-white/60">Privacy</Link>
            <Link href="/help" className="hover:text-white/60">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
