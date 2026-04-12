import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChromeSwitch from "@/components/ChromeSwitch";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kahsya — Kosovo's everything marketplace",
  description: "Fashion, home, beauty, electronics, groceries & more. Verified sellers, fast delivery across Kosovo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <CartProvider>
          <ChromeSwitch>{children}</ChromeSwitch>
        </CartProvider>
      </body>
    </html>
  );
}
