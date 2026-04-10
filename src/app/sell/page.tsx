import Link from "next/link";

export default function SellPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Sell on Nivo</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="bg-gradient-to-br from-[#001847] to-[#0046BE] p-8 md:p-12 text-white">
          <h1 className="text-[32px] font-extrabold leading-tight mb-3">Reach 50,000+ customers in Kosovo</h1>
          <p className="text-[16px] text-white/60 max-w-[480px] leading-relaxed">
            Join 150+ verified sellers on Kosovo&apos;s fastest-growing tech marketplace. Low commissions, fast payouts, and full logistics support.
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-[18px] font-bold text-ink mb-4">Why sell on Nivo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Low commission", desc: "Starting from just 5% per sale. No hidden fees, no monthly subscription." },
                { title: "Fast payouts", desc: "Get paid within 3 business days after successful delivery to the customer." },
                { title: "Fulfillment by Nivo", desc: "Store your products in our warehouse. We handle packing, shipping, and returns." },
                { title: "Seller dashboard", desc: "Track sales, manage inventory, and view analytics in real-time." },
                { title: "Marketing support", desc: "Featured placements, deal promotions, and social media exposure." },
                { title: "Seller protection", desc: "Insurance against fraud and chargebacks. We have your back." },
              ].map(item => (
                <div key={item.title} className="bg-bg rounded-xl p-4">
                  <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                  <p className="text-[13px] text-ink-secondary mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-4">How it works</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Apply online", desc: "Fill in your business details and upload your KYC documents. Approval takes 1-2 business days." },
                { step: "2", title: "List your products", desc: "Upload your catalog manually or via CSV. Set your prices, stock levels, and shipping options." },
                { step: "3", title: "Start selling", desc: "Your products go live on Nivo. Customers order, we notify you, and you ship — or let us handle fulfillment." },
              ].map(item => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white text-[14px] font-bold flex items-center justify-center flex-shrink-0">{item.step}</div>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                    <p className="text-[13px] text-ink-secondary mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Commission structure</h2>
            <div className="bg-bg rounded-xl overflow-hidden">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-divider">
                    <th className="text-left p-3 font-semibold text-ink">Category</th>
                    <th className="text-left p-3 font-semibold text-ink">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Smartphones & Tablets", "5%"],
                    ["Laptops & Computers", "5%"],
                    ["Audio & Wearables", "7%"],
                    ["Gaming", "6%"],
                    ["Smart Home", "8%"],
                    ["Accessories", "10%"],
                  ].map(([cat, comm], i) => (
                    <tr key={cat} className={i % 2 === 1 ? "bg-white" : ""}>
                      <td className="p-3 text-ink-secondary">{cat}</td>
                      <td className="p-3 text-ink font-semibold">{comm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="bg-primary-light rounded-xl p-6 text-center">
            <p className="text-[16px] font-bold text-ink mb-2">Ready to grow your business?</p>
            <p className="text-[13px] text-ink-secondary mb-4">Contact us at <span className="font-semibold">partners@nivo.ks</span> or call +383 44 123 456</p>
            <Link href="/contact" className="inline-flex items-center h-[44px] px-7 bg-primary text-white text-[14px] font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-sm">
              Apply now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
