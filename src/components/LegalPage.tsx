"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function LegalPage({
  kicker,
  title,
  subtitle,
  lastUpdated,
  sections,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">{title}</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="absolute -top-28 -right-20 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-14 py-12 md:py-16">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5 border border-white/10">
            <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">{kicker}</span>
          </div>
          <h1 className="text-[36px] md:text-[52px] font-black leading-[1.02] tracking-tight mb-3">{title}</h1>
          <p className="text-[15px] md:text-[16px] text-white/70 max-w-[560px] leading-relaxed">{subtitle}</p>
          <p className="text-[12px] text-white/40 font-semibold mt-5">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content with sticky TOC */}
      <div className="grid lg:grid-cols-[240px_1fr] gap-6">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-[10px] font-extrabold text-ink-muted uppercase tracking-[0.15em] mb-3 pl-4">On this page</p>
            <nav className="space-y-0.5">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block text-[13px] py-2 px-4 rounded-xl transition-all border-l-2 ${
                    activeId === s.id
                      ? "bg-primary-light text-primary font-extrabold border-primary"
                      : "text-ink-muted hover:text-ink border-transparent hover:border-ink-faint"
                  }`}
                >
                  <span className="inline-block w-6 text-ink-faint tabular-nums font-bold">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Sections */}
        <div className="bg-white rounded-2xl shadow-card p-7 md:p-12">
          <div className="max-w-[680px] space-y-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] font-black text-primary tabular-nums bg-primary-light rounded-lg px-2.5 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[20px] md:text-[22px] font-black text-ink tracking-tight">{s.title}</h2>
                </div>
                <div className="text-[14px] text-ink-secondary leading-[1.75] space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-ink [&_strong]:font-bold [&_a]:text-primary [&_a]:font-bold hover:[&_a]:underline">
                  {s.content}
                </div>
              </section>
            ))}

            {/* Help row */}
            <div className="mt-12 pt-8 border-t border-divider flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[13px] font-extrabold text-ink">Questions about this policy?</p>
                <p className="text-[12px] text-ink-muted mt-0.5">Our team is here to help.</p>
              </div>
              <Link href="/contact" className="inline-flex items-center h-[44px] px-5 rounded-xl bg-primary text-white text-[13px] font-extrabold hover:bg-primary-dark transition-all shadow-[0_4px_12px_rgba(0,70,190,0.2)] hover:-translate-y-0.5">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
