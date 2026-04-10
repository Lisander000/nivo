"use client";

import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

export default function CartWrapper() {
  const { isOpen, setIsOpen } = useCart();
  return <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
