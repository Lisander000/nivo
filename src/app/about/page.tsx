import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">About Us</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="bg-gradient-to-br from-[#001847] to-[#0046BE] p-8 md:p-12 text-white">
          <div className="flex items-baseline gap-0.5 mb-4">
            <span className="text-[36px] font-extrabold">nivo</span>
            <span className="text-[36px] font-extrabold text-accent">.</span>
          </div>
          <p className="text-[20px] font-bold leading-tight max-w-[400px]">
            Kosovo&apos;s premium gadget marketplace
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Our mission</h2>
            <p className="text-[14px] text-ink-secondary leading-relaxed">
              Nivo was founded in 2024 with a simple goal: give people in Kosovo access to the latest technology with the same shopping experience they&apos;d find in Western Europe. Local warranty, fast delivery, verified sellers, and transparent pricing — the way it should be.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Nivo in numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: "15,000+", label: "Products" },
                { num: "150+", label: "Verified sellers" },
                { num: "50,000+", label: "Happy customers" },
                { num: "24h", label: "Average delivery" },
              ].map(s => (
                <div key={s.label} className="bg-bg rounded-xl p-4 text-center">
                  <p className="text-[24px] font-extrabold text-primary">{s.num}</p>
                  <p className="text-[12px] text-ink-muted font-medium mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Why Nivo?</h2>
            <ul className="space-y-3">
              {[
                { title: "Local warranty", desc: "Every product comes with warranty that you can claim locally, through our partner network in Kosovo." },
                { title: "Verified sellers", desc: "Every seller on Nivo goes through a KYC verification process. We check their business registration, tax ID, and track record." },
                { title: "Free delivery", desc: "Free delivery across all of Kosovo. Order before 23:00 and receive your product the next day in Prishtina." },
                { title: "Easy returns", desc: "Changed your mind? Return any product within 14 days for a full refund. No questions asked." },
                { title: "Pay your way", desc: "Visa, Mastercard, bank transfer, cash on delivery, or split into 3, 6, or 12 monthly installments." },
              ].map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-[14px] font-semibold text-ink">{item.title}</p>
                    <p className="text-[13px] text-ink-secondary mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[18px] font-bold text-ink mb-3">Contact</h2>
            <div className="bg-bg rounded-xl p-5 space-y-2">
              <p className="text-[14px] text-ink"><span className="font-semibold">Nivo sh.p.k.</span></p>
              <p className="text-[13px] text-ink-secondary">Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo</p>
              <p className="text-[13px] text-ink-secondary">Email: info@nivo.ks &middot; Phone: +383 44 123 456</p>
              <p className="text-[13px] text-ink-secondary">Business nr: 811234567 &middot; VAT: KS811234567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
