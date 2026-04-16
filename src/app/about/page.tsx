import Link from "next/link";
import Avatar from "@/components/Avatar";
import { pressQuotes, ambassadors } from "@/data/community";

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">About Us</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="relative px-6 md:px-16 py-16 md:py-24">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">Founded 2024 · Prishtina</span>
          </div>
          <h1 className="text-[44px] md:text-[72px] font-black leading-[0.95] tracking-tight mb-5 max-w-[760px]">
            Kosovo&apos;s <br />
            marketplace, <span className="text-accent">done right.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/75 max-w-[580px] leading-relaxed mb-8">
            From fashion to furniture, beauty to electronics, groceries to garden tools — everything you need in one place. The shopping experience Kosovo deserves.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/category/all" className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl bg-accent text-white text-[14px] font-extrabold hover:bg-accent-dark transition-all shadow-[0_6px_20px_rgba(255,103,0,0.35)] hover:-translate-y-0.5">
              Start shopping
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
            <Link href="/partners" className="inline-flex items-center h-[52px] px-7 rounded-xl bg-white/10 backdrop-blur-sm text-white text-[14px] font-extrabold hover:bg-white/15 transition-all border border-white/15">
              Become a seller
            </Link>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
        {[
          { num: "200k+", label: "Products listed", accent: "text-primary" },
          { num: "30", label: "Categories", accent: "text-accent" },
          { num: "850+", label: "Verified sellers", accent: "text-success" },
          { num: "24h", label: "Avg. delivery", accent: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl shadow-card p-5 md:p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
            <p className={`text-[32px] md:text-[40px] font-black ${s.accent} leading-none tracking-tight`}>{s.num}</p>
            <p className="text-[12px] text-ink-muted font-bold mt-2 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>

      {/* MISSION — two column */}
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
          <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">The mission</p>
          <h2 className="text-[28px] md:text-[34px] font-black text-ink tracking-tight leading-[1.1] mb-4">
            Shopping, <br />without the friction.
          </h2>
          <p className="text-[14px] text-ink-secondary leading-relaxed">
            Whether it&apos;s a new sofa, skincare, a laptop, or weekly groceries — every product on Kahsya ships from a verified seller, carries local guarantees, and arrives at your door, usually within 24 hours. No grey imports, no fake reviews, no surprises at checkout.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-card p-8 md:p-10 text-white relative overflow-hidden">
          <div className="relative">
            <p className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-3">Why we exist</p>
            <h3 className="text-[22px] md:text-[26px] font-black leading-tight mb-5">A promise we&apos;ll keep:</h3>
            <div className="space-y-4">
              {[
                { t: "Local warranty", d: "Every product claimable locally, through our partner network." },
                { t: "Verified sellers only", d: "KYC checks, business registration, tax ID, track record." },
                { t: "Free 14-day returns", d: "Changed your mind? No questions, no restocking fees." },
                { t: "Pay your way", d: "Card, transfer, cash on delivery, or split in 3/6/12." },
              ].map((i) => (
                <div key={i.t} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-extrabold">{i.t}</p>
                    <p className="text-[12px] text-white/65 mt-0.5 leading-relaxed">{i.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VALUES GRID */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">What we stand for</p>
              <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Our values</h2>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Move fast", desc: "24h delivery across Kosovo. Orders before 23:00 arrive the next day.", grad: "from-orange-50 to-orange-100" },
            { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", title: "Stay honest", desc: "Transparent pricing, real reviews, zero hidden fees.", grad: "from-blue-50 to-blue-100" },
            { icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", title: "Local first", desc: "Built in Prishtina, for Kosovo. Every seller local, every claim handled here.", grad: "from-green-50 to-green-100" },
          ].map((v) => (
            <div key={v.title} className={`group bg-gradient-to-br ${v.grad} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/50 relative overflow-hidden`}>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/30 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h3 className="text-[18px] font-black text-ink mb-1.5 tracking-tight">{v.title}</h3>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOUNDER STORY */}
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
          <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">The story</p>
          <h2 className="text-[28px] md:text-[34px] font-black text-ink tracking-tight leading-[1.1] mb-5">
            It started with a bad order.
          </h2>
          <div className="space-y-4 text-[14px] text-ink-secondary leading-relaxed">
            <p>
              In 2023, our founder Arben ordered a &ldquo;premium&rdquo; coffee machine from a classifieds site in Prishtina. It arrived scratched, with no invoice, and a warranty &ldquo;valid only in Dubai.&rdquo; Two weeks later, it died. The seller ghosted him.
            </p>
            <p>
              That week he met Endrit — a logistics engineer who&apos;d just moved back from Rotterdam — at a coffee shop in Germia. They drew the first version of Kahsya on a napkin: <span className="font-bold text-ink">everything under one roof, real sellers, real guarantees, real receipts, and delivery that actually shows up.</span>
            </p>
            <p>
              Nine months later we launched with 40 sellers across 6 categories. Today we serve 50,000+ customers with 850+ verified sellers across 30 categories — from fashion to furniture, beauty to groceries. Still the same napkin principles.
            </p>
          </div>
          <div className="flex items-center gap-3 mt-7 pt-6 border-t border-divider">
            <Avatar name="Arben Krasniqi" size={48} />
            <div>
              <p className="text-[14px] font-extrabold text-ink">Arben Krasniqi</p>
              <p className="text-[12px] text-ink-muted font-medium">Co-founder &amp; CEO</p>
            </div>
            <div className="w-px h-10 bg-divider mx-3" />
            <Avatar name="Endrit Berisha" size={48} />
            <div>
              <p className="text-[14px] font-extrabold text-ink">Endrit Berisha</p>
              <p className="text-[12px] text-ink-muted font-medium">Co-founder &amp; COO</p>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="bg-gradient-to-br from-primary-light via-white to-pink-50 rounded-2xl shadow-card p-8 md:p-10 border border-primary/10 relative overflow-hidden">
          <div className="relative">
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">Milestones</p>
            <h3 className="text-[22px] font-black text-ink leading-tight mb-6">From napkin to nationwide.</h3>
            <div className="space-y-5 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-primary/20" />
              {[
                { year: "2023", title: "The napkin", desc: "Idea drawn over coffee in Prishtina." },
                { year: "2024 · Q1", title: "Launch", desc: "40 sellers across 6 categories." },
                { year: "2024 · Q3", title: "Fashion + Home", desc: "Expanded beyond tech into lifestyle." },
                { year: "2025", title: "Full marketplace", desc: "30 categories, 850+ sellers, installments." },
                { year: "2026", title: "You are here", desc: "200k+ products. Everything in Kosovo." },
              ].map((m, i) => (
                <div key={m.year} className="relative pl-8">
                  <div className={`absolute left-0 top-1 w-[22px] h-[22px] rounded-full border-[3px] border-white flex items-center justify-center ${i === 4 ? "bg-accent" : "bg-primary"}`}>
                    {i === 4 && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <p className="text-[10px] font-extrabold text-primary uppercase tracking-wider">{m.year}</p>
                  <p className="text-[14px] font-black text-ink mt-0.5">{m.title}</p>
                  <p className="text-[12px] text-ink-muted mt-0.5 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PRESS */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">As seen in</p>
            <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Press &amp; media</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pressQuotes.map((p) => (
            <div key={p.outlet} className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all border border-transparent hover:border-primary/10">
              <svg className="w-7 h-7 text-primary/15 mb-3" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-[13px] text-ink leading-relaxed font-medium mb-4">&ldquo;{p.quote}&rdquo;</p>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">— {p.outlet}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AMBASSADORS */}
      <div className="mb-10 bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-2">The Kahsya Collective</p>
              <h2 className="text-[28px] md:text-[36px] font-black tracking-tight leading-tight max-w-[480px]">
                Creators building the culture with us.
              </h2>
            </div>
            <Link href="/community" className="inline-flex items-center gap-2 h-[44px] px-5 bg-white text-primary text-[13px] font-extrabold rounded-full hover:-translate-y-0.5 transition-all shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
              Meet the collective
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ambassadors.map((a) => (
              <div key={a.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors">
                <Avatar name={a.name} size={56} />
                <p className="text-[15px] font-black text-white mt-3">{a.name}</p>
                <p className="text-[12px] text-accent font-bold">{a.handle}</p>
                <p className="text-[11px] text-white/60 mt-1.5 font-medium">{a.role}</p>
                <p className="text-[11px] text-white/80 mt-2 pt-2 border-t border-white/10 font-bold">{a.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT CARD */}
      <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider mb-2">Get in touch</p>
            <h2 className="text-[24px] md:text-[28px] font-black text-ink tracking-tight mb-2">Kahsya sh.p.k.</h2>
            <p className="text-[13px] text-ink-secondary">Rr. Agim Ramadani 40 · 10000 Prishtina · Kosovo</p>
            <p className="text-[13px] text-ink-secondary mt-1">
              <span className="font-bold text-ink">info@kahsya.ks</span> · +383 44 123 456
            </p>
            <p className="text-[11px] text-ink-muted mt-3">Business nr: 811234567 · VAT: KS811234567</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center h-[52px] px-7 rounded-xl bg-primary text-white text-[14px] font-extrabold hover:bg-primary-dark transition-all shadow-[0_6px_20px_rgba(0,70,190,0.25)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
