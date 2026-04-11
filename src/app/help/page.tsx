import Link from "next/link";

const topics = [
  {
    title: "Orders & Delivery",
    kicker: "Track & receive",
    grad: "from-blue-50 to-blue-100",
    icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
    items: ["Where is my order?", "Delivery times & costs", "Change my delivery address", "Delivery to pickup points"],
  },
  {
    title: "Returns & Refunds",
    kicker: "14-day window",
    grad: "from-orange-50 to-orange-100",
    icon: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3",
    items: ["How to return a product", "14-day return policy", "Refund timeline", "Damaged or wrong item"],
  },
  {
    title: "Payment",
    kicker: "Pay your way",
    grad: "from-green-50 to-green-100",
    icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z",
    items: ["Payment methods", "Pay in installments", "Invoice & VAT", "Payment failed"],
  },
  {
    title: "Warranty & Repairs",
    kicker: "Peace of mind",
    grad: "from-purple-50 to-purple-100",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
    items: ["Claim warranty", "Warranty conditions", "Repair service", "Extended warranty"],
  },
  {
    title: "My Account",
    kicker: "Your data",
    grad: "from-pink-50 to-pink-100",
    icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    items: ["Edit my details", "Change password", "Delete my account", "Newsletter preferences"],
  },
  {
    title: "Sellers & Products",
    kicker: "Marketplace",
    grad: "from-cyan-50 to-cyan-100",
    icon: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z",
    items: ["How seller ratings work", "Report a product", "Product authenticity", "Contact a seller"],
  },
];

const popular = [
  "How long does delivery take?",
  "Can I pay in installments?",
  "How do I return a product?",
  "Is my warranty valid in Kosovo?",
  "What if my package is late?",
  "Can I change my address?",
];

export default function HelpPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Help center</span>
      </nav>

      {/* HERO with search */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-16 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">Avg. reply in 2h</span>
          </div>
          <h1 className="text-[36px] md:text-[56px] font-black leading-[1.02] tracking-tight mb-4">
            How can we <span className="text-accent">help?</span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/70 max-w-[520px] mx-auto leading-relaxed mb-8">
            Search 200+ articles or reach our team directly — we&apos;re here 7 days a week.
          </p>

          {/* Search bar */}
          <div className="max-w-[640px] mx-auto relative">
            <input
              type="text"
              placeholder="Search 'how to return'..."
              className="w-full h-[60px] pl-14 pr-36 rounded-2xl bg-white text-ink text-[15px] font-medium placeholder:text-ink-muted focus:outline-none focus:ring-4 focus:ring-accent/30 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            />
            <svg className="w-5 h-5 text-ink-muted absolute left-5 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
            <button className="absolute right-2 top-2 h-[44px] px-5 rounded-xl bg-primary text-white text-[13px] font-extrabold hover:bg-primary-dark transition-colors">
              Search
            </button>
          </div>

          {/* Popular chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-[700px] mx-auto">
            <span className="text-[11px] text-white/50 font-bold uppercase tracking-wider mr-1 self-center">Popular:</span>
            {popular.slice(0, 4).map((q) => (
              <button key={q} className="text-[12px] text-white/80 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 font-semibold transition-colors">
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics grid */}
      <div className="flex items-end justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Browse</p>
            <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Browse by topic</h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {topics.map((topic) => (
          <div key={topic.title} className={`group bg-gradient-to-br ${topic.grad} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 border border-white/50 relative overflow-hidden`}>
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/30 group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                  </svg>
                </div>
                <span className="text-[9px] font-extrabold text-primary uppercase tracking-[0.12em] bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full">{topic.kicker}</span>
              </div>
              <h3 className="text-[17px] font-black text-ink mb-3 tracking-tight">{topic.title}</h3>
              <ul className="space-y-1.5">
                {topic.items.map((item) => (
                  <li key={item}>
                    <button className="group/item flex items-center gap-1.5 text-[13px] text-ink-secondary hover:text-primary font-semibold text-left transition-colors">
                      <svg className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Still need help — 3 contact cards */}
      <div className="relative bg-gradient-to-br from-primary-light to-primary-50 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-accent/15 blur-3xl" />
        <div className="relative">
          <div className="text-center mb-8">
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-2">Still stuck?</p>
            <h2 className="text-[28px] md:text-[36px] font-black text-ink tracking-tight leading-tight mb-2">We&apos;re one tap away</h2>
            <p className="text-[14px] text-ink-muted">Pick your preferred way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Live chat", desc: "Mon-Sat · 9:00-21:00", action: "Start chat", status: "Online now", color: "bg-success", icon: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" },
              { title: "Email", desc: "info@kahsya.ks", action: "Send email", status: "Reply in 2h", color: "bg-primary", icon: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" },
              { title: "Phone", desc: "+383 44 123 456", action: "Call us", status: "Mon-Sat 9-21", color: "bg-accent", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" },
            ].map((c) => (
              <button key={c.title} className="group bg-white rounded-2xl p-6 text-left hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${c.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[10px] font-extrabold text-success uppercase tracking-wider">{c.status}</span>
                  </div>
                </div>
                <p className="text-[17px] font-black text-ink mb-1">{c.title}</p>
                <p className="text-[13px] text-ink-muted mb-3">{c.desc}</p>
                <p className="text-[13px] text-primary font-extrabold flex items-center gap-1 group-hover:gap-2 transition-all">
                  {c.action}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
