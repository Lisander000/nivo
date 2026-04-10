import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 lg:px-6 py-8">
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-6">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Cookie Policy</span>
      </nav>

      <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
        <h1 className="text-[24px] font-bold text-ink mb-2">Cookie Policy</h1>
        <p className="text-[13px] text-ink-muted mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-[14px] text-ink-secondary leading-relaxed">
          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">What are cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">How we use cookies</h2>
            <div className="bg-bg rounded-xl overflow-hidden mt-3">
              <table className="w-full text-[13px]">
                <thead>
                  <tr className="border-b border-divider">
                    <th className="text-left p-3 font-semibold text-ink">Type</th>
                    <th className="text-left p-3 font-semibold text-ink">Purpose</th>
                    <th className="text-left p-3 font-semibold text-ink">Required</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Essential", "Login sessions, cart, security", "Yes"],
                    ["Functional", "Language, currency preferences", "No"],
                    ["Analytics", "Page views, click patterns", "No"],
                    ["Marketing", "Personalized recommendations", "No"],
                  ].map(([type, purpose, req], i) => (
                    <tr key={type} className={i % 2 === 1 ? "bg-white" : ""}>
                      <td className="p-3 font-medium text-ink">{type}</td>
                      <td className="p-3 text-ink-secondary">{purpose}</td>
                      <td className="p-3 text-ink-secondary">{req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">Managing cookies</h2>
            <p>You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect the functionality of the platform (e.g., you may not be able to log in or add items to your cart).</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">Third-party cookies</h2>
            <p>We use analytics services (e.g., Microsoft Clarity) that may set their own cookies to help us understand how visitors use our platform. These third parties have their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-[16px] font-bold text-ink mb-2">Contact</h2>
            <p>For questions about our cookie policy, contact us at <span className="font-semibold text-ink">privacy@nivo.ks</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
