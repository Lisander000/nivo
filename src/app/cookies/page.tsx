import LegalPage from "@/components/LegalPage";

export default function CookiesPage() {
  return (
    <LegalPage
      kicker="Small files, big role"
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies to make Nivo work better for you."
      lastUpdated="January 1, 2026"
      sections={[
        {
          id: "what-are-cookies",
          title: "What are cookies?",
          content: (
            <p>
              Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
            </p>
          ),
        },
        {
          id: "how-we-use",
          title: "How we use cookies",
          content: (
            <>
              <p>We use four categories of cookies:</p>
              <div className="grid sm:grid-cols-2 gap-3 not-prose mt-4">
                {[
                  { type: "Essential", purpose: "Login sessions, cart, security", required: true },
                  { type: "Functional", purpose: "Language & currency preferences", required: false },
                  { type: "Analytics", purpose: "Page views, click patterns", required: false },
                  { type: "Marketing", purpose: "Personalized recommendations", required: false },
                ].map((c) => (
                  <div key={c.type} className="bg-bg rounded-xl p-4 border border-border">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[13px] font-black text-ink">{c.type}</p>
                      {c.required ? (
                        <span className="text-[10px] font-extrabold text-danger bg-danger-light rounded-full px-2 py-0.5 uppercase tracking-wider">Required</span>
                      ) : (
                        <span className="text-[10px] font-extrabold text-success bg-success-light rounded-full px-2 py-0.5 uppercase tracking-wider">Optional</span>
                      )}
                    </div>
                    <p className="text-[12px] text-ink-muted">{c.purpose}</p>
                  </div>
                ))}
              </div>
            </>
          ),
        },
        {
          id: "managing",
          title: "Managing cookies",
          content: (
            <p>
              You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect the functionality of the platform (e.g., you may not be able to log in or add items to your cart).
            </p>
          ),
        },
        {
          id: "third-party",
          title: "Third-party cookies",
          content: (
            <p>
              We use analytics services (e.g., <strong>Microsoft Clarity</strong>) that may set their own cookies to help us understand how visitors use our platform. These third parties have their own privacy policies.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p>
              For questions about our cookie policy, contact us at <strong>privacy@nivo.ks</strong>.
            </p>
          ),
        },
      ]}
    />
  );
}
