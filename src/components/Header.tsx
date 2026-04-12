"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { primaryCategories as categories } from "@/data/products";

export default function Header() {
  const { totalItems, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    if (!megaMenuOpen) return;
    const h = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaMenuOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [megaMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/category/all?q=${encodeURIComponent(searchQuery.trim())}`);
      searchRef.current?.blur();
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top deals strip */}
      <div className="bg-gradient-to-r from-[#001847] via-primary to-[#001847] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[34px] flex items-center justify-center">
          <Link href="/category/all" className="group inline-flex items-center gap-2 text-[12px] font-bold">
            <span className="inline-flex items-center gap-1 bg-accent text-white text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
              Sale
            </span>
            <span className="text-white/90">Spring Sale is live — up to −50% across every category</span>
            <span className="inline-flex items-center gap-1 text-accent font-extrabold group-hover:gap-1.5 transition-all">
              Shop now
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "shadow-xs"}`}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-4 lg:gap-6 h-[72px]">
            {/* Mobile hamburger */}
            <button className="lg:hidden -ml-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-bg text-ink-secondary" onClick={() => setMobileMenuOpen(true)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-0.5 flex-shrink-0">
              <span className="text-[28px] font-extrabold text-primary tracking-tight leading-none">kahsya</span>
              <span className="text-[28px] font-extrabold text-accent leading-none">.</span>
            </Link>

            {/* Desktop mega menu trigger — bol.com differentiator */}
            <div className="hidden lg:block relative" ref={megaRef}>
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`group flex items-center gap-2.5 h-[44px] pl-3 pr-5 rounded-xl text-[14px] font-extrabold transition-all ${
                  megaMenuOpen
                    ? "bg-primary text-white shadow-[0_6px_20px_rgba(0,70,190,0.3)]"
                    : "bg-primary-light text-primary hover:bg-primary hover:text-white hover:shadow-[0_6px_20px_rgba(0,70,190,0.3)]"
                }`}
              >
                {/* Animated 3-line burger */}
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className={`absolute w-5 h-[2.5px] rounded-full bg-current transition-all duration-300 ${megaMenuOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
                  <span className={`absolute w-5 h-[2.5px] rounded-full bg-current transition-all duration-300 ${megaMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
                  <span className={`absolute w-5 h-[2.5px] rounded-full bg-current transition-all duration-300 ${megaMenuOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
                </div>
                <span>{megaMenuOpen ? "Close" : "All categories"}</span>
              </button>

              {/* Full-width mega menu */}
              {megaMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 top-[106px] bg-black/30 backdrop-blur-sm z-40 animate-fade-in" onClick={() => setMegaMenuOpen(false)} />
                  <div className="fixed left-0 right-0 top-[106px] bg-white shadow-2xl border-t border-divider z-50 animate-fade-in">
                    <div className="max-w-[1280px] mx-auto px-6 py-8">
                      <div className="grid grid-cols-[260px_1fr_280px] gap-8">
                        {/* Column 1: main categories */}
                        <div className="border-r border-divider pr-6">
                          <p className="text-[10px] font-extrabold text-ink-muted uppercase tracking-[0.15em] mb-3 px-3">Browse</p>
                          {categories.map((cat, i) => (
                            <button
                              key={cat.slug}
                              onMouseEnter={() => setActiveCat(i)}
                              onClick={() => { router.push(`/category/${cat.slug}`); setMegaMenuOpen(false); }}
                              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all group/cat ${
                                activeCat === i ? "bg-primary-light text-primary" : "text-ink hover:bg-bg"
                              }`}
                            >
                              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-[22px] transition-all ${
                                activeCat === i ? "bg-white shadow-sm scale-110" : "bg-bg group-hover/cat:bg-white"
                              }`}>{cat.icon}</span>
                              <div className="flex-1 min-w-0">
                                <p className="text-[14px] font-extrabold">{cat.name}</p>
                                <p className={`text-[11px] font-semibold ${activeCat === i ? "text-primary/70" : "text-ink-muted"}`}>{cat.count} items</p>
                              </div>
                              <svg className={`w-4 h-4 transition-all ${activeCat === i ? "text-primary translate-x-0.5" : "text-ink-faint"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </button>
                          ))}
                        </div>

                        {/* Column 2: subcategories */}
                        <div className="py-2">
                          <div className="flex items-baseline gap-2 mb-4">
                            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em]">{categories[activeCat]?.name}</p>
                            <span className="text-[11px] text-ink-muted font-semibold">· {categories[activeCat]?.description}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-5">
                            {categories[activeCat]?.subs.map((sub) => (
                              <Link
                                key={sub.name}
                                href={`/category/${sub.slug}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="group/sub flex items-center gap-2 text-[13px] text-ink-secondary hover:text-primary py-2 font-medium transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-ink-faint group-hover/sub:bg-primary group-hover/sub:w-2 transition-all" />
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                          <Link
                            href={`/category/${categories[activeCat]?.slug}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="inline-flex items-center gap-1.5 h-[40px] px-5 bg-primary-light text-primary text-[13px] font-extrabold rounded-xl hover:bg-primary hover:text-white transition-all group/view"
                          >
                            View all in {categories[activeCat]?.name}
                            <svg className="w-3.5 h-3.5 group-hover/view:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        </div>

                        {/* Column 3: promo card */}
                        <div className="space-y-3">
                          <Link
                            href="/category/all"
                            onClick={() => setMegaMenuOpen(false)}
                            className="group/promo relative block rounded-2xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] text-white p-5 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover min-h-[180px]"
                          >
                            <div className="absolute -right-6 -bottom-6 text-[120px] leading-none opacity-20 group-hover/promo:scale-110 group-hover/promo:rotate-6 transition-transform duration-500">⚡</div>
                            <div className="relative">
                              <span className="inline-flex items-center gap-1 bg-accent text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
                                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                                Live
                              </span>
                              <p className="text-[18px] font-black mt-3 leading-tight">Spring Sale<br />−50% off</p>
                              <p className="text-[11px] text-white/70 mt-1 font-medium">Limited time</p>
                              <span className="inline-flex items-center gap-1 text-[12px] font-extrabold mt-3 text-accent group-hover/promo:gap-1.5 transition-all">
                                Shop deals
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                              </span>
                            </div>
                          </Link>
                          <Link
                            href="/business"
                            onClick={() => setMegaMenuOpen(false)}
                            className="group/promo2 relative block rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-white border border-primary/10 p-4 hover:shadow-card-hover transition-all"
                          >
                            <p className="text-[10px] font-extrabold text-primary uppercase tracking-wider">For business</p>
                            <p className="text-[14px] font-black text-ink mt-1">Bulk orders?</p>
                            <p className="text-[11px] text-ink-muted font-medium mt-0.5">Dedicated account manager</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex-1 hidden md:block max-w-[640px]">
              <div className="relative">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Zoek in heel kahsya..."
                  className={`w-full h-[44px] pl-4 pr-[52px] rounded-[10px] text-[14px] text-ink bg-bg border-2 focus:outline-none placeholder:text-ink-muted transition-all duration-200 ${
                    searchFocused
                      ? "border-primary bg-white shadow-[0_0_0_3px_rgba(0,70,190,0.1)]"
                      : "border-transparent hover:border-border-hover"
                  }`}
                />
                <button type="submit" className="absolute right-1.5 top-1.5 w-[36px] h-[36px] bg-primary rounded-[8px] flex items-center justify-center hover:bg-primary-dark transition-colors active:scale-95">
                  <svg className="w-[18px] h-[18px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Right actions */}
            <div className="flex items-center gap-0.5 ml-auto">
              <Link href="/sell" className="hidden xl:inline-flex items-center gap-1.5 h-[38px] px-3 rounded-xl text-[12px] font-extrabold text-primary hover:bg-primary-light transition-colors mr-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72" />
                </svg>
                Sell on Kahsya
              </Link>
              <Link href="/account" className="hidden sm:flex flex-col items-center px-3 py-1.5 rounded-xl text-ink-secondary hover:text-ink hover:bg-bg transition-colors">
                <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="text-[10px] font-medium mt-0.5 hidden lg:block">Mijn kahsya</span>
              </Link>
              <Link href="/wishlist" className="hidden sm:flex flex-col items-center px-3 py-1.5 rounded-xl text-ink-secondary hover:text-ink hover:bg-bg transition-colors">
                <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span className="text-[10px] font-medium mt-0.5 hidden lg:block">Wishlist</span>
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex flex-col items-center px-3 py-1.5 rounded-xl text-ink-secondary hover:text-ink hover:bg-bg transition-colors relative"
              >
                <div className="relative">
                  <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1 animate-count-up shadow-sm">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium mt-0.5 hidden lg:block">Mandje</span>
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <form onSubmit={handleSearch} className="md:hidden pb-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek producten..."
                className="w-full h-[42px] pl-4 pr-12 rounded-[10px] text-[14px] text-ink bg-bg border-2 border-transparent focus:outline-none focus:border-primary focus:bg-white placeholder:text-ink-muted"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 w-[34px] h-[34px] bg-primary rounded-[8px] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[320px] bg-white overflow-y-auto animate-slide-in-left shadow-xl">
            <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-divider flex items-center justify-between">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[20px] font-extrabold text-primary">kahsya</span>
                <span className="text-[20px] font-extrabold text-accent">.</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-bg text-ink-muted">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="py-2">
              <p className="px-5 py-2 text-[11px] font-bold text-ink-muted uppercase tracking-wider">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="flex items-center justify-between px-5 py-3.5 text-[14px] text-ink hover:bg-bg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[18px]">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </div>
                  <svg className="w-4 h-4 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
              <div className="border-t border-divider mt-2 pt-2 mx-5" />
              <Link href="/category/all" className="flex items-center px-5 py-3.5 text-[14px] text-accent font-semibold" onClick={() => setMobileMenuOpen(false)}>Deals</Link>
              <Link href="/community" className="flex items-center px-5 py-3.5 text-[14px] text-ink" onClick={() => setMobileMenuOpen(false)}>Community</Link>
              <Link href="/help" className="flex items-center px-5 py-3.5 text-[14px] text-ink" onClick={() => setMobileMenuOpen(false)}>Customer Service</Link>
              <Link href="/account" className="flex items-center px-5 py-3.5 text-[14px] text-ink" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
              <div className="border-t border-divider mt-2 pt-2 mx-5" />
              <p className="px-5 py-2 text-[11px] font-bold text-ink-muted uppercase tracking-wider">Partners</p>
              <Link href="/sell" className="flex items-center px-5 py-3.5 text-[14px] text-ink" onClick={() => setMobileMenuOpen(false)}>Sell on Kahsya</Link>
              <Link href="/seller/login" className="flex items-center px-5 py-3.5 text-[14px] text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>Seller login →</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
