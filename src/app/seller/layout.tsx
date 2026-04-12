import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kahsya Partner Portal",
  description: "Manage your store, products, orders and payouts on Kahsya.",
};

// Seller platform has its own chrome — the root ChromeSwitch already
// suppresses the customer Header/Footer for /seller/* routes.
export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A14] text-white">
      {children}
    </div>
  );
}
