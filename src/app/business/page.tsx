import Link from "next/link";

export default function BusinessPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Nivo Business</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="bg-gradient-to-br from-[#001847] to-[#0046BE] p-8 md:p-12 text-white">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">B2B</span>
          </div>
          <h1 className="text-[32px] font-extrabold leading-tight mb-3">Nivo Business</h1>
          <p className="text-[16px] text-white/60 max-w-[480px] leading-relaxed">
            Technology solutions for businesses in Kosovo. Volume pricing, dedicated account management, and invoice billing.
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-[18px] font-bold text-ink mb-4">Business benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Volume discounts", desc: "Save up to 25% on bulk orders. The more you buy, the more you save." },
                { title: "Net 30 invoicing", desc: "Pay later with invoice billing. No upfront payments required for approved accounts." },
                { title: "Dedicated manager", desc: "A personal account manager who knows your business and helps you find the right products." },
                { title: "Priority delivery", desc: "Same-day delivery in Prishtina for orders placed before 14:00. Next-day across Kosovo." },
                { title: "Extended warranty", desc: "Up to 3 years warranty on all business purchases with on-site repair service." },
                { title: "VAT invoices", desc: "Proper VAT invoices for every purchase. Easy expense tracking and tax compliance." },
              ].map(item => (
                <div key={item.title} className="bg-bg rounded-xl p-4">
                  <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                  <p className="text-[13px] text-ink-secondary mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-4">Popular for businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { title: "Office IT", desc: "Laptops, monitors, peripherals, and networking equipment for your team." },
                { title: "Hospitality tech", desc: "Smart TVs, tablets, POS systems, and digital signage for hotels and restaurants." },
                { title: "Fleet devices", desc: "Smartphones and tablets for field teams with MDM-ready configuration." },
              ].map(item => (
                <div key={item.title} className="border-2 border-border rounded-xl p-4 hover:border-primary transition-colors">
                  <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                  <p className="text-[13px] text-ink-secondary mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-primary-light rounded-xl p-6 text-center">
            <p className="text-[16px] font-bold text-ink mb-2">Open a business account</p>
            <p className="text-[13px] text-ink-secondary mb-4">Contact us at <span className="font-semibold">business@nivo.ks</span> or call +383 44 123 456</p>
            <Link href="/contact" className="inline-flex items-center h-[44px] px-7 bg-primary text-white text-[14px] font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-sm">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
