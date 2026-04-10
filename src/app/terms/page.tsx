import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Terms of Service</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
        <h1 className="text-[24px] font-bold text-ink mb-2">Terms of Service</h1>
        <p className="text-[13px] text-ink-muted mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">1. General</h2>
            <p>These Terms of Service govern your use of the Nivo marketplace platform operated by Nivo sh.p.k., registered in Kosovo under business number 811234567. By using our platform, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">2. Account registration</h2>
            <p>To place orders, you must create an account with accurate information. You are responsible for maintaining the security of your account credentials. You must be at least 18 years old to create an account.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">3. Orders and pricing</h2>
            <p>All prices on Nivo are in EUR and include VAT unless stated otherwise. An order is confirmed when you receive an order confirmation email. We reserve the right to cancel orders in case of pricing errors or stock unavailability.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">4. Delivery</h2>
            <p>We offer free delivery across Kosovo. Standard delivery takes 1-3 business days. Delivery times are estimates and not guaranteed. Risk of loss transfers to you upon delivery.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">5. Returns and refunds</h2>
            <p>You have the right to return most products within 14 days of delivery for a full refund, no questions asked. Products must be in their original condition and packaging. Certain items (e.g., hygiene products, opened software) may be excluded. Refunds are processed within 5 business days after we receive the returned item.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">6. Warranty</h2>
            <p>All products sold on Nivo come with the manufacturer&apos;s warranty, claimable locally through our partner network. The minimum warranty period is 24 months from the date of delivery, as required by Kosovo consumer protection law.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">7. Marketplace model</h2>
            <p>Nivo operates as a marketplace. Products are sold by independent, verified sellers. While we verify each seller and facilitate transactions, the sale agreement is between you and the seller. Nivo acts as an intermediary and guarantees buyer protection.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">8. Intellectual property</h2>
            <p>All content on the Nivo platform, including but not limited to logos, text, images, and software, is the property of Nivo sh.p.k. or its licensors and is protected by copyright law.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">9. Limitation of liability</h2>
            <p>Nivo is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid for the relevant product or service.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">10. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of Kosovo. Any disputes shall be resolved by the competent courts in Prishtina, Kosovo.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">11. Contact</h2>
            <p>For questions about these terms, contact us at <span className="font-semibold text-ink">legal@nivo.ks</span> or Nivo sh.p.k., Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
