"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartWrapper from "@/components/CartWrapper";

export default function ChromeSwitch({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  // Seller platform has its own chrome — no customer header/footer/cart.
  const isSeller = pathname.startsWith("/seller");

  if (isSeller) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartWrapper />
    </>
  );
}
