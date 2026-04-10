import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      kicker="The rules of the road"
      title="Terms of Service"
      subtitle="These terms govern your use of the Nivo marketplace. By using our platform, you agree to them."
      lastUpdated="January 1, 2026"
      sections={[
        {
          id: "general",
          title: "General",
          content: (
            <p>
              These Terms of Service govern your use of the Nivo marketplace platform operated by <strong>Nivo sh.p.k.</strong>, registered in Kosovo under business number 811234567. By using our platform, you agree to these terms.
            </p>
          ),
        },
        {
          id: "account",
          title: "Account registration",
          content: (
            <p>
              To place orders, you must create an account with accurate information. You are responsible for maintaining the security of your account credentials. You must be at least <strong>18 years old</strong> to create an account.
            </p>
          ),
        },
        {
          id: "orders",
          title: "Orders and pricing",
          content: (
            <p>
              All prices on Nivo are in EUR and include VAT unless stated otherwise. An order is confirmed when you receive an order confirmation email. We reserve the right to cancel orders in case of pricing errors or stock unavailability.
            </p>
          ),
        },
        {
          id: "delivery",
          title: "Delivery",
          content: (
            <p>
              We offer <strong>free delivery across Kosovo</strong>. Standard delivery takes 1-3 business days. Delivery times are estimates and not guaranteed. Risk of loss transfers to you upon delivery.
            </p>
          ),
        },
        {
          id: "returns",
          title: "Returns and refunds",
          content: (
            <p>
              You have the right to return most products within <strong>14 days</strong> of delivery for a full refund, no questions asked. Products must be in their original condition and packaging. Certain items (e.g., hygiene products, opened software) may be excluded. Refunds are processed within 5 business days after we receive the returned item. See our <a href="/returns">Returns page</a> for details.
            </p>
          ),
        },
        {
          id: "warranty",
          title: "Warranty",
          content: (
            <p>
              All products sold on Nivo come with the manufacturer&apos;s warranty, claimable locally through our partner network. The <strong>minimum warranty period is 24 months</strong> from the date of delivery, as required by Kosovo consumer protection law.
            </p>
          ),
        },
        {
          id: "marketplace",
          title: "Marketplace model",
          content: (
            <p>
              Nivo operates as a marketplace. Products are sold by independent, verified sellers. While we verify each seller and facilitate transactions, the sale agreement is between you and the seller. Nivo acts as an intermediary and guarantees buyer protection.
            </p>
          ),
        },
        {
          id: "ip",
          title: "Intellectual property",
          content: (
            <p>
              All content on the Nivo platform, including but not limited to logos, text, images, and software, is the property of Nivo sh.p.k. or its licensors and is protected by copyright law.
            </p>
          ),
        },
        {
          id: "liability",
          title: "Limitation of liability",
          content: (
            <p>
              Nivo is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability is limited to the amount you paid for the relevant product or service.
            </p>
          ),
        },
        {
          id: "law",
          title: "Governing law",
          content: (
            <p>
              These terms are governed by the laws of the <strong>Republic of Kosovo</strong>. Any disputes shall be resolved by the competent courts in Prishtina, Kosovo.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p>
              For questions about these terms, contact us at <strong>legal@nivo.ks</strong> or Nivo sh.p.k., Rr. Agim Ramadani 40, 10000 Prishtina, Kosovo.
            </p>
          ),
        },
      ]}
    />
  );
}
