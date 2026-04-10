"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import Link from "next/link";

export default function ProductRail({
  title,
  kicker,
  href,
  accent = "primary",
  children,
  trailing,
}: {
  title: string;
  kicker?: string;
  href?: string;
  accent?: "primary" | "accent" | "danger";
  children: ReactNode;
  trailing?: ReactNode;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  const accentText =
    accent === "accent" ? "text-accent" : accent === "danger" ? "text-danger" : "text-primary";
  const accentBar =
    accent === "accent" ? "bg-accent" : accent === "danger" ? "bg-danger" : "bg-accent";
  const hoverText =
    accent === "accent" ? "hover:text-accent-dark" : accent === "danger" ? "hover:text-danger/80" : "hover:text-primary-dark";

  return (
    <section className="relative">
      <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className={`w-1 h-8 rounded-full ${accentBar}`} />
          <div>
            {kicker && <p className={`text-[11px] font-extrabold uppercase tracking-wider ${accentText}`}>{kicker}</p>}
            <h2 className="text-[20px] md:text-[24px] font-black text-ink tracking-tight leading-tight">{title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {trailing}
          {href && (
            <Link href={href} className={`group text-[13px] font-extrabold ${accentText} ${hoverText} flex items-center gap-1.5 pr-2`}>
              View all
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          )}
          <div className="hidden md:flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary text-ink transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-ink disabled:hover:shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              disabled={!canRight}
              className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary text-ink transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-ink disabled:hover:shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Fade edges */}
      <div className="relative">
        {canLeft && <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg to-transparent z-10" />}
        {canRight && <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg to-transparent z-10" />}
        <div
          ref={scrollerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 -mx-4 px-4 lg:-mx-6 lg:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
