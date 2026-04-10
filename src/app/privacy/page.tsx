import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      kicker="Your privacy, our priority"
      title="Privacy Policy"
      subtitle="We take your privacy seriously. Here's exactly what we collect, how we use it, and your rights — in plain language."
      lastUpdated="January 1, 2026"
      sections={[
        {
          id: "who-we-are",
          title: "Who we are",
          content: (
            <p>
              <strong>Nivo sh.p.k.</strong> (&quot;Nivo&quot;, &quot;we&quot;, &quot;us&quot;) is registered in Kosovo under business number 811234567, with its registered office at Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo. We operate the marketplace platform available at nivo.ks.
            </p>
          ),
        },
        {
          id: "what-we-collect",
          title: "What data we collect",
          content: (
            <>
              <p>When you use Nivo, we may collect:</p>
              <ul>
                <li><strong>Account information:</strong> name, email address, phone number, delivery address</li>
                <li><strong>Order data:</strong> products purchased, payment method, delivery preferences</li>
                <li><strong>Device data:</strong> IP address, browser type, device type, operating system</li>
                <li><strong>Usage data:</strong> pages visited, search queries, clicks, and browsing behavior</li>
                <li><strong>Communication data:</strong> messages with sellers or our support team</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use",
          title: "How we use your data",
          content: (
            <ul>
              <li>To process and deliver your orders</li>
              <li>To manage your account and provide customer support</li>
              <li>To personalize your shopping experience and show relevant products</li>
              <li>To send order updates and, with your consent, marketing communications</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To comply with legal obligations</li>
            </ul>
          ),
        },
        {
          id: "data-sharing",
          title: "Data sharing",
          content: (
            <p>
              We share your data only when necessary to fulfill your orders (e.g., with sellers and delivery partners) or when required by law. <strong>We never sell your personal data to third parties.</strong>
            </p>
          ),
        },
        {
          id: "cookies",
          title: "Cookies",
          content: (
            <p>
              We use cookies and similar technologies to keep you logged in, remember your preferences, and analyze platform usage. You can manage your cookie preferences in your browser settings. See our <a href="/cookies">Cookie Policy</a> for details.
            </p>
          ),
        },
        {
          id: "your-rights",
          title: "Your rights",
          content: (
            <>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Lodge a complaint with the relevant data protection authority</li>
              </ul>
            </>
          ),
        },
        {
          id: "security",
          title: "Data security",
          content: (
            <p>
              We use industry-standard security measures including encryption, secure servers, and regular security audits to protect your data. Your payment details are handled by PCI-DSS compliant processors and never touch our servers.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p>
              For any privacy-related questions, contact our Data Protection Officer at <strong>privacy@nivo.ks</strong> or write to Nivo sh.p.k., Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo.
            </p>
          ),
        },
      ]}
    />
  );
}
