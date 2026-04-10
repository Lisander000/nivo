import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href="/help" className="hover:text-primary transition-colors">Help</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Returns & Refunds</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="absolute -top-28 -right-20 w-[480px] h-[480px] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-16 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5 border border-white/10">
                <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">No questions asked</span>
              </div>
              <h1 className="text-[40px] md:text-[60px] font-black leading-[0.98] tracking-tight mb-4">
                Returns, <br />
                made <span className="text-accent">effortless.</span>
              </h1>
              <p className="text-[15px] md:text-[17px] text-white/70 max-w-[480px] leading-relaxed">
                Changed your mind? You have 14 days to return any product. Free shipping both ways, refunded in 5 business days.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "14", label: "Days to return" },
                { num: "€0", label: "Return shipping" },
                { num: "5d", label: "Refund window" },
                { num: "100%", label: "Money back" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15">
                  <p className="text-[32px] font-black text-accent leading-none tracking-tight">{s.num}</p>
                  <p className="text-[11px] text-white/60 font-bold mt-2 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div className="mb-10">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Step by step</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">How to return a product</h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Start your return", desc: "Log in, go to 'My Orders', and click 'Return item'. Select products and reason.", icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z" },
            { step: "02", title: "Pack the product", desc: "Use the original packaging. Include all accessories and attach the return label.", icon: "M21 8.25c-.83 0-1.626.33-2.213.919L10.96 16.979a6.75 6.75 0 0 1-9.546-9.547L11.92 1.418a1.5 1.5 0 0 1 2.122 0l1.47 1.47M7.8 10.2l3.75 3.75" },
            { step: "03", title: "Ship it back", desc: "Drop off at any Posta e Kosoves office or schedule free pickup from your address.", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25" },
            { step: "04", title: "Get your refund", desc: "Refund is processed within 5 business days to your original payment method.", icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75" },
          ].map((s, i) => (
            <div key={s.step} className="relative bg-white rounded-2xl shadow-card p-6 hover:-translate-y-1 hover:shadow-card-hover transition-all">
              {i < 3 && (
                <div className="hidden lg:block absolute top-10 -right-5 z-10">
                  <svg className="w-5 h-5 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <p className="text-[36px] font-black text-primary/10 leading-none tracking-tighter">{s.step}</p>
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
              </div>
              <h3 className="text-[16px] font-black text-ink tracking-tight mb-1.5">{s.title}</h3>
              <p className="text-[12px] text-ink-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* POLICY + EXCEPTIONS — two column */}
      <div className="grid lg:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-card p-7 md:p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 rounded-xl bg-success-light flex items-center justify-center">
              <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-[18px] font-black text-ink tracking-tight">Our return policy</h2>
          </div>
          <div className="space-y-4">
            {[
              { title: "14-day return window", desc: "You have 14 days from delivery to return any product for any reason." },
              { title: "Original condition", desc: "Products must be unused and in their original packaging with all accessories." },
              { title: "Free return shipping", desc: "Return shipping is always free. We provide a prepaid return label." },
              { title: "Full refund", desc: "You receive a full refund including original shipping costs (if any)." },
            ].map((i) => (
              <div key={i.title} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-[14px] font-extrabold text-ink">{i.title}</p>
                  <p className="text-[13px] text-ink-secondary mt-0.5 leading-relaxed">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-danger-light to-orange-50 rounded-2xl shadow-card p-7 md:p-8 border border-danger/5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
              <svg className="w-5 h-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 className="text-[18px] font-black text-ink tracking-tight">Exceptions</h2>
          </div>
          <p className="text-[13px] text-ink-secondary mb-4 leading-relaxed">The following products cannot be returned once opened:</p>
          <ul className="space-y-2.5">
            {[
              "Hygiene-sensitive products (earbuds, in-ear headphones)",
              "Software with activated license keys",
              "Personalized or custom-made products",
              "Gift cards and prepaid vouchers",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-danger flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <span className="text-[13px] text-ink-secondary">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Damaged / wrong item CTA */}
      <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-10 text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-accent/25 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <p className="text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] mb-2">Got a problem?</p>
            <h2 className="text-[24px] md:text-[30px] font-black leading-tight tracking-tight mb-2">
              Damaged or wrong item?
            </h2>
            <p className="text-[14px] text-white/70 max-w-[520px] leading-relaxed">
              Contact us immediately. We&apos;ll arrange a free pickup and send a replacement or full refund — no need to wait.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl bg-accent text-white text-[14px] font-extrabold hover:bg-accent-dark transition-all shadow-[0_8px_24px_rgba(255,103,0,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
            Contact support
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
