"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

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
              <span className="text-[28px] font-extrabold text-primary tracking-tight leading-none">nivo</span>
              <span className="text-[28px] font-extrabold text-accent leading-none">.</span>
            </Link>

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
                  placeholder="Zoek in heel nivo..."
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
              <Link href="/account" className="hidden sm:flex flex-col items-center px-3 py-1.5 rounded-xl text-ink-secondary hover:text-ink hover:bg-bg transition-colors">
                <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span className="text-[10px] font-medium mt-0.5 hidden lg:block">Mijn nivo</span>
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

        {/* Nav strip — bol.com style: only 3 items */}
        <div className="border-t border-divider hidden lg:block">
          <div className="max-w-[1280px] mx-auto px-6">
            <nav className="flex items-center h-[44px] gap-0 -mx-1">
              {/* Categories mega menu trigger */}
              <div className="relative" ref={megaRef}>
                <button
                  onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  className={`flex items-center gap-1.5 text-[14px] font-semibold px-4 py-2 rounded-lg transition-colors ${megaMenuOpen ? "text-primary bg-primary-light" : "text-ink hover:text-primary hover:bg-bg"}`}
                >
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  Categories
                  <svg className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Mega menu */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-border w-[640px] flex overflow-hidden animate-scale-in z-50">
                    {/* Left: main categories */}
                    <div className="w-[240px] border-r border-divider py-2">
                      {categories.map((cat, i) => (
                        <button
                          key={cat.slug}
                          onMouseEnter={() => setActiveCat(i)}
                          onClick={() => { router.push(`/category/${cat.slug}`); setMegaMenuOpen(false); }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                            activeCat === i ? "bg-primary-light text-primary" : "text-ink hover:bg-bg"
                          }`}
                        >
                          <span className="text-[18px] w-6 text-center">{cat.icon}</span>
                          <span className="text-[13px] font-medium">{cat.name}</span>
                          <svg className="w-3.5 h-3.5 ml-auto text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      ))}
                      <div className="border-t border-divider mt-2 pt-2 mx-2">
                        <Link href="/category/all" onClick={() => setMegaMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-semibold text-primary hover:bg-primary-light rounded-lg transition-colors">
                          All products
                          <svg className="w-3.5 h-3.5 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    {/* Right: subcategories */}
                    <div className="flex-1 p-5">
                      <p className="text-[11px] font-bold text-ink-muted uppercase tracking-wider mb-3">
                        {categories[activeCat]?.name}
                      </p>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {categories[activeCat]?.subs.map((sub) => (
                          <Link
                            key={sub.name}
                            href={`/category/${sub.slug}`}
                            onClick={() => setMegaMenuOpen(false)}
                            className="text-[13px] text-ink-secondary hover:text-primary py-1.5 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/category/${categories[activeCat]?.slug}`}
                        onClick={() => setMegaMenuOpen(false)}
                        className="inline-flex items-center gap-1 text-[13px] text-primary font-semibold mt-4 hover:underline"
                      >
                        All in {categories[activeCat]?.name}
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/category/all" className="text-[14px] font-semibold text-accent hover:text-accent-dark px-4 py-2 rounded-lg hover:bg-accent-light transition-colors">
                Deals
              </Link>
              <Link href="/community" className="text-[14px] text-ink-secondary hover:text-ink px-4 py-2 rounded-lg hover:bg-bg transition-colors">
                Community
              </Link>
              <Link href="/help" className="text-[14px] text-ink-secondary hover:text-ink px-4 py-2 rounded-lg hover:bg-bg transition-colors">
                Customer Service
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Delivery promise */}
      <div className="bg-success-light">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-[7px] flex items-center justify-center gap-2">
          <svg className="w-[16px] h-[16px] text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          <span className="text-[12px] text-success-dark font-semibold">Free delivery on all orders &mdash; order before 23:00, delivered tomorrow</span>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[320px] bg-white overflow-y-auto animate-slide-in-left shadow-xl">
            <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-divider flex items-center justify-between">
              <div className="flex items-baseline gap-0.5">
                <span className="text-[20px] font-extrabold text-primary">nivo</span>
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
