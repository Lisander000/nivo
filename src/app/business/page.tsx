import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Kahsya Business</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A0A1E] via-[#001847] to-[#0046BE] text-white mb-10">
        <div className="absolute -top-32 -right-20 w-[560px] h-[560px] rounded-full bg-primary/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />

        <div className="relative px-6 md:px-16 py-16 md:py-24">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-6 border border-white/15">
            <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">Kahsya Business · B2B</span>
          </div>
          <h1 className="text-[44px] md:text-[68px] font-black leading-[0.95] tracking-tight mb-5 max-w-[800px]">
            Tech for teams. <br />
            <span className="text-accent">Built for scale.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/75 max-w-[560px] leading-relaxed mb-8">
            Volume pricing, dedicated account management, and Net 30 invoicing. Everything your business needs to move faster, for less.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link href="/contact" className="group inline-flex items-center gap-2 h-[56px] px-8 rounded-xl bg-accent text-white text-[15px] font-extrabold hover:bg-accent-dark transition-all shadow-[0_8px_24px_rgba(255,103,0,0.4)] hover:-translate-y-0.5">
              Open business account
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </Link>
            <a href="mailto:business@kahsya.ks" className="inline-flex items-center h-[56px] px-7 rounded-xl bg-white/10 backdrop-blur-sm text-white text-[14px] font-extrabold hover:bg-white/15 transition-all border border-white/15">
              business@kahsya.ks
            </a>
          </div>

          {/* Trust logos line */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.15em] mb-4">Trusted by teams across Kosovo</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-white/60">
              {["KosovoTech", "Prishtina Hotel", "EuroMart KS", "BallkanBank", "RKS Logistics", "Alba Group"].map((l) => (
                <span key={l} className="text-[14px] font-black tracking-tight">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SAVINGS CALCULATOR HIGHLIGHT */}
      <div className="grid md:grid-cols-4 gap-3 md:gap-4 mb-10">
        {[
          { num: "25%", label: "Max volume discount", color: "text-accent" },
          { num: "Net 30", label: "Invoice billing", color: "text-primary" },
          { num: "Same-day", label: "Delivery in Prishtina", color: "text-success" },
          { num: "3 years", label: "Extended warranty", color: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl shadow-card p-6 hover:-translate-y-1 hover:shadow-card-hover transition-all">
            <p className={`text-[30px] md:text-[36px] font-black ${s.color} leading-none tracking-tight`}>{s.num}</p>
            <p className="text-[12px] text-ink-muted font-bold mt-2 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>

      {/* BENEFITS GRID */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Built for business</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Benefits that move the needle</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Volume discounts", desc: "Save up to 25% on bulk orders. The more you buy, the more you save.", icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", grad: "from-blue-50 to-blue-100" },
            { title: "Net 30 invoicing", desc: "Pay later with invoice billing. No upfront payments for approved accounts.", icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z", grad: "from-green-50 to-green-100" },
            { title: "Dedicated manager", desc: "A personal account manager who knows your business inside out.", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z", grad: "from-purple-50 to-purple-100" },
            { title: "Priority delivery", desc: "Same-day delivery in Prishtina for orders before 14:00. Next-day across Kosovo.", icon: "M13 10V3L4 14h7v7l9-11h-7z", grad: "from-orange-50 to-orange-100" },
            { title: "Extended warranty", desc: "Up to 3 years on all business purchases with on-site repair service.", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", grad: "from-cyan-50 to-cyan-100" },
            { title: "VAT invoices", desc: "Proper VAT invoices for every purchase. Easy expense tracking & tax compliance.", icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z", grad: "from-pink-50 to-pink-100" },
          ].map((b) => (
            <div key={b.title} className={`group bg-gradient-to-br ${b.grad} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/50 relative overflow-hidden`}>
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/30 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="text-[17px] font-black text-ink mb-1.5 tracking-tight">{b.title}</h3>
                <p className="text-[13px] text-ink-secondary leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* USE CASES */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Popular</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Loved by businesses like yours</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { tag: "IT & Offices", title: "Office IT", desc: "Laptops, monitors, peripherals, and networking equipment for your team." },
            { tag: "Hospitality", title: "Hospitality tech", desc: "Smart TVs, tablets, POS systems, and digital signage for hotels and restaurants." },
            { tag: "Logistics", title: "Fleet devices", desc: "Smartphones and tablets for field teams with MDM-ready configuration." },
          ].map((u) => (
            <div key={u.title} className="group bg-white rounded-2xl shadow-card p-7 hover:-translate-y-1 hover:shadow-card-hover transition-all border border-transparent hover:border-primary/10">
              <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-[0.12em] bg-primary-light px-2.5 py-1 rounded-full mb-4">{u.tag}</span>
              <h3 className="text-[20px] font-black text-ink tracking-tight mb-2">{u.title}</h3>
              <p className="text-[13px] text-ink-secondary leading-relaxed">{u.desc}</p>
              <p className="text-[13px] text-primary font-extrabold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative bg-gradient-to-br from-primary-light to-primary-50 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">Ready to start?</p>
            <h2 className="text-[28px] md:text-[38px] font-black text-ink leading-tight tracking-tight mb-3">
              Open a business account <span className="text-primary">today.</span>
            </h2>
            <p className="text-[14px] text-ink-secondary leading-relaxed">
              Contact our B2B team at <span className="font-extrabold text-ink">business@kahsya.ks</span> or <span className="font-extrabold text-ink">+383 44 123 456</span>
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-xl bg-primary text-white text-[15px] font-extrabold hover:bg-primary-dark transition-all shadow-[0_8px_24px_rgba(0,70,190,0.3)] hover:shadow-[0_12px_32px_rgba(0,70,190,0.45)] hover:-translate-y-0.5 whitespace-nowrap">
            Get started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
