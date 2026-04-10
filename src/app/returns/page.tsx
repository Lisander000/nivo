import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href="/help" className="hover:text-primary transition-colors">Customer Service</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Returns & Refunds</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
        <h1 className="text-[24px] font-bold text-ink mb-2">Returns & Refunds</h1>
        <p className="text-[14px] text-ink-muted mb-8">Easy returns within 14 days. No questions asked.</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-[18px] font-bold text-ink mb-4">How to return a product</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Start your return", desc: "Log in to your account, go to 'My Orders', find the order and click 'Return item'. Select the product(s) and reason for return." },
                { step: "2", title: "Pack the product", desc: "Place the product in its original packaging. Include all accessories, manuals, and cables. Attach the return label that was emailed to you." },
                { step: "3", title: "Ship it back", desc: "Drop off the package at any Posta e Kosoves office or schedule a free pickup from your address. Tracking is included." },
                { step: "4", title: "Get your refund", desc: "Once we receive and inspect the product, your refund will be processed within 5 business days to your original payment method." },
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
            <h2 className="text-[18px] font-bold text-ink mb-3">Return policy</h2>
            <div className="space-y-3">
              {[
                { title: "14-day return window", desc: "You have 14 days from delivery to return any product for any reason." },
                { title: "Original condition", desc: "Products must be unused and in their original packaging with all accessories." },
                { title: "Free return shipping", desc: "Return shipping is always free. We provide a prepaid return label." },
                { title: "Full refund", desc: "You receive a full refund including the original shipping costs (if any)." },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                    <p className="text-[13px] text-ink-secondary mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Exceptions</h2>
            <p className="text-[14px] text-ink-secondary mb-3">The following products cannot be returned once opened:</p>
            <ul className="list-disc pl-5 space-y-1 text-[14px] text-ink-secondary">
              <li>Hygiene-sensitive products (earbuds, in-ear headphones)</li>
              <li>Software with activated license keys</li>
              <li>Personalized or custom-made products</li>
              <li>Gift cards and prepaid vouchers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Damaged or wrong item?</h2>
            <p className="text-[14px] text-ink-secondary mb-3">
              If you received a damaged or incorrect product, contact us immediately. We&apos;ll arrange a free pickup and send a replacement or full refund — no need to wait.
            </p>
            <Link href="/contact" className="inline-flex items-center h-[40px] px-5 bg-primary text-white text-[13px] font-bold rounded-xl hover:bg-primary-dark transition-colors">
              Contact support
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
