import Link from "next/link";

export default function SellPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Sell on Nivo</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-10">
        <div className="absolute -top-32 -right-20 w-[560px] h-[560px] rounded-full bg-accent/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-6 border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">For sellers</span>
              </div>
              <h1 className="text-[44px] md:text-[68px] font-black leading-[0.95] tracking-tight mb-5">
                Sell to <span className="text-accent">50,000+</span><br />
                customers.
              </h1>
              <p className="text-[16px] md:text-[18px] text-white/75 max-w-[520px] leading-relaxed mb-8">
                Join 150+ verified sellers on Kosovo&apos;s fastest-growing tech marketplace. Low fees, fast payouts, and full logistics support — you focus on selling, we handle the rest.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="group inline-flex items-center gap-2 h-[56px] px-8 rounded-xl bg-accent text-white text-[15px] font-extrabold hover:bg-accent-dark transition-all shadow-[0_8px_24px_rgba(255,103,0,0.4)] hover:shadow-[0_12px_32px_rgba(255,103,0,0.5)] hover:-translate-y-0.5">
                  Start selling today
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
                <a href="#how" className="inline-flex items-center h-[56px] px-7 rounded-xl bg-white/10 backdrop-blur-sm text-white text-[14px] font-extrabold hover:bg-white/15 transition-all border border-white/15">
                  How it works
                </a>
              </div>
            </div>

            {/* Right stat cards */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {[
                { num: "5%", label: "Starting commission", color: "from-accent/20 to-accent/5" },
                { num: "3 days", label: "Payout window", color: "from-white/15 to-white/5" },
                { num: "150+", label: "Active sellers", color: "from-white/15 to-white/5" },
                { num: "24h", label: "Approval time", color: "from-accent/20 to-accent/5" },
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.color} backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10`}>
                  <p className="text-[28px] md:text-[36px] font-black text-white leading-none tracking-tight">{s.num}</p>
                  <p className="text-[11px] md:text-[12px] text-white/60 font-bold mt-2 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS GRID */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Why sellers choose us</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Everything you need to grow</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Low commission", desc: "Starting from just 5% per sale. No hidden fees, no monthly subscription.", icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z", grad: "from-blue-50 to-blue-100" },
            { title: "Fast payouts", desc: "Get paid within 3 business days after successful delivery to the customer.", icon: "M13 10V3L4 14h7v7l9-11h-7z", grad: "from-orange-50 to-orange-100" },
            { title: "Fulfillment by Nivo", desc: "Store in our warehouse. We handle packing, shipping, and returns for you.", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z", grad: "from-purple-50 to-purple-100" },
            { title: "Seller dashboard", desc: "Track sales, manage inventory, and view analytics in real-time.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z", grad: "from-green-50 to-green-100" },
            { title: "Marketing support", desc: "Featured placements, deal promotions, and social media exposure.", icon: "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46", grad: "from-pink-50 to-pink-100" },
            { title: "Seller protection", desc: "Insurance against fraud and chargebacks. We have your back.", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", grad: "from-cyan-50 to-cyan-100" },
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

      {/* HOW IT WORKS */}
      <div id="how" className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Simple process</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Get started in 3 steps</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { step: "01", title: "Apply online", desc: "Fill in your business details and upload KYC documents. Approval takes 1-2 business days." },
            { step: "02", title: "List your products", desc: "Upload your catalog manually or via CSV. Set prices, stock, and shipping options." },
            { step: "03", title: "Start selling", desc: "Your products go live. Orders roll in — you ship, or let Fulfillment by Nivo handle it." },
          ].map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-2xl shadow-card p-7 hover:-translate-y-1 hover:shadow-card-hover transition-all">
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-5 z-10">
                  <svg className="w-6 h-6 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
              <p className="text-[48px] font-black text-primary/10 leading-none tracking-tighter mb-2">{s.step}</p>
              <h3 className="text-[19px] font-black text-ink tracking-tight mb-2">{s.title}</h3>
              <p className="text-[13px] text-ink-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* COMMISSION TABLE */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Transparent pricing</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Commission structure</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-divider">
            {[
              ["Smartphones & Tablets", "5%"],
              ["Laptops & Computers", "5%"],
              ["Audio & Wearables", "7%"],
              ["Gaming", "6%"],
              ["Smart Home", "8%"],
              ["Accessories", "10%"],
            ].map(([cat, comm]) => (
              <div key={cat} className="flex items-center justify-between px-6 py-5 hover:bg-bg transition-colors">
                <span className="text-[14px] text-ink font-semibold">{cat}</span>
                <span className="text-[20px] font-black text-primary tracking-tight">{comm}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-primary/40 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-3">Ready?</p>
            <h2 className="text-[30px] md:text-[40px] font-black leading-tight tracking-tight mb-3">
              Grow your business <br className="hidden md:block" />
              with Nivo.
            </h2>
            <p className="text-[14px] text-white/70 leading-relaxed">
              Contact us at <span className="font-extrabold text-white">partners@nivo.ks</span> or <span className="font-extrabold text-white">+383 44 123 456</span>
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-[56px] px-8 rounded-xl bg-accent text-white text-[15px] font-extrabold hover:bg-accent-dark transition-all shadow-[0_8px_24px_rgba(255,103,0,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
            Apply now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
