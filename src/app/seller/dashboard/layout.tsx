"use client";

import { useState } from "react";
import Link from "next/link";
import { SellerDesktopSidebar, SellerMobileDrawer } from "@/components/SellerSidebar";

export default function SellerDashboardLayout({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-40 h-[56px] lg:h-[64px] border-b border-white/5 bg-[#0A0A14]/95 backdrop-blur-sm">
        <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button onClick={() => setDrawerOpen(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 text-white/60">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <Link href="/seller/dashboard" className="flex items-baseline gap-1.5">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[18px] lg:text-[22px] font-extrabold text-white">kahsya</span>
                <span className="text-[18px] lg:text-[22px] font-extrabold text-amber-400">.</span>
              </div>
              <span className="hidden sm:inline text-[10px] lg:text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400 border-l border-white/15 pl-2 ml-1">Partners</span>
            </Link>
          </div>

          <div className="flex-1 max-w-[420px] hidden md:block">
            <div className="relative">
              <input placeholder="Search orders, SKUs..." className="w-full h-[38px] pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-amber-400/60 transition-all" />
              <svg className="absolute left-3 top-2.5 w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button className="relative w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-[#0A0A14]" />
            </button>
            <button className="inline-flex items-center gap-2 h-9 px-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-[#0A0A14] font-black text-[9px]">EK</div>
              <span className="text-[12px] font-extrabold text-white hidden sm:inline">Endrit</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <SellerDesktopSidebar />
        <SellerMobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <div className="flex-1 min-w-0 p-4 sm:p-5 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
