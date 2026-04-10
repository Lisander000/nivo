import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Privacy Policy</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
        <h1 className="text-[24px] font-bold text-ink mb-2">Privacy Policy</h1>
        <p className="text-[13px] text-ink-muted mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">1. Who we are</h2>
            <p>Nivo sh.p.k. (&quot;Nivo&quot;, &quot;we&quot;, &quot;us&quot;) is registered in Kosovo under business number 811234567, with its registered office at Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo. We operate the marketplace platform available at nivo.ks.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">2. What data we collect</h2>
            <p className="mb-2">When you use Nivo, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Account information: name, email address, phone number, delivery address</li>
              <li>Order data: products purchased, payment method, delivery preferences</li>
              <li>Device data: IP address, browser type, device type, operating system</li>
              <li>Usage data: pages visited, search queries, clicks, and browsing behavior</li>
              <li>Communication data: messages with sellers or our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">3. How we use your data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process and deliver your orders</li>
              <li>To manage your account and provide customer support</li>
              <li>To personalize your shopping experience and show relevant products</li>
              <li>To send order updates and, with your consent, marketing communications</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">4. Data sharing</h2>
            <p>We share your data only when necessary to fulfill your orders (e.g., with sellers and delivery partners) or when required by law. We never sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">5. Cookies</h2>
            <p>We use cookies and similar technologies to keep you logged in, remember your preferences, and analyze platform usage. You can manage your cookie preferences in your browser settings.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">6. Your rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">7. Data security</h2>
            <p>We use industry-standard security measures including encryption, secure servers, and regular security audits to protect your data.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">8. Contact</h2>
            <p>For any privacy-related questions, contact our Data Protection Officer at <span className="font-semibold text-ink">privacy@nivo.ks</span> or write to Nivo sh.p.k., Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
