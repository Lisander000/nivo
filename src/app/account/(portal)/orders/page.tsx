"use client";

import { useState } from "react";
import Link from "next/link";

type OrderStatus = "All" | "Processing" | "In transit" | "Delivered" | "Returned";

const orders = [
  { id: "KA-20412", date: "Apr 09, 2026", total: 128.90, status: "Delivered", items: [{ name: "Samsung Galaxy A55", qty: 1 }, { name: "JBL Tune 510BT", qty: 1 }, { name: "Anker 20W charger", qty: 2 }], seller: "ElectroKS", tracking: "KS-LKX-4418201" },
  { id: "KA-20358", date: "Apr 04, 2026", total: 42.50, status: "In transit", items: [{ name: "Nike Air Max 90", qty: 1 }, { name: "Cotton socks 5-pack", qty: 1 }], seller: "SportHouse", tracking: "KS-LKX-4418188" },
  { id: "KA-20301", date: "Mar 28, 2026", total: 89.00, status: "Delivered", items: [{ name: "IKEA Hemnes 3-drawer", qty: 1 }], seller: "HomeCo", tracking: "KS-LKX-4418144" },
  { id: "KA-20255", date: "Mar 21, 2026", total: 215.00, status: "Delivered", items: [{ name: "Logitech MX Master 3S", qty: 1 }, { name: "Keychron K2 Pro", qty: 1 }], seller: "TechZone", tracking: "KS-LKX-4417990" },
  { id: "KA-20198", date: "Mar 15, 2026", total: 34.00, status: "Returned", items: [{ name: "Zara linen shirt L", qty: 1 }], seller: "Zara Kosovo", tracking: "KS-LKX-4417822" },
  { id: "KA-20144", date: "Mar 08, 2026", total: 76.80, status: "Processing", items: [{ name: "Diffuser + oils bundle", qty: 1 }, { name: "Soy candle trio", qty: 1 }], seller: "AromaKS", tracking: "Pending" },
];

const statusStyle = (s: string) => {
  if (s === "Delivered") return "bg-success/10 text-success";
  if (s === "In transit") return "bg-accent/10 text-accent";
  if (s === "Processing") return "bg-primary/10 text-primary";
  if (s === "Returned") return "bg-danger/10 text-danger";
  return "bg-bg text-ink-muted";
};

export default function OrdersPage() {
  const [filter, setFilter] = useState<OrderStatus>("All");
  const [query, setQuery] = useState("");

  const filtered = orders.filter((o) => {
    if (filter !== "All" && o.status !== filter) return false;
    if (query && !o.id.toLowerCase().includes(query.toLowerCase()) && !o.items.some((i) => i.name.toLowerCase().includes(query.toLowerCase()))) return false;
    return true;
  });

  const filters: OrderStatus[] = ["All", "Processing", "In transit", "Delivered", "Returned"];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1 h-8 bg-accent rounded-full" />
        <div>
          <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">My orders</p>
          <h1 className="text-[18px] sm:text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Order history</h1>
        </div>
      </div>

      {/* Filters + search */}
      <div className="bg-white rounded-2xl shadow-card border border-divider p-4 mb-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-shrink-0 px-4 h-[38px] rounded-xl text-[12px] font-extrabold transition-all ${
                  filter === f ? "bg-primary text-white" : "bg-bg text-ink-secondary hover:bg-primary-light hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="relative flex-1 md:max-w-[300px] md:ml-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search orders..."
              className="w-full h-[38px] pl-9 pr-3 rounded-xl bg-bg border border-transparent text-[13px] focus:outline-none focus:border-primary focus:bg-white transition-all"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          </div>
        </div>
      </div>

      {/* Order list */}
      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-divider p-10 text-center">
            <p className="text-[14px] font-bold text-ink-muted">No orders match your filters.</p>
          </div>
        )}
        {filtered.map((o) => (
          <div key={o.id} className="bg-white rounded-2xl shadow-card border border-divider overflow-hidden hover:shadow-card-hover transition-all">
            <div className="px-5 py-3.5 bg-bg/60 border-b border-divider flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-[13px] font-extrabold text-ink">{o.id}</p>
                <span className="text-[11px] text-ink-muted font-medium">{o.date}</span>
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusStyle(o.status)}`}>{o.status}</span>
              </div>
              <p className="text-[15px] font-black text-ink">€{o.total.toFixed(2)}</p>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 flex-wrap">
                {o.items.map((it, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-bg rounded-xl px-3 py-2">
                    <div className="w-8 h-8 rounded-lg bg-divider flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-ink leading-tight">{it.name}</p>
                      <p className="text-[10px] text-ink-muted font-medium">Qty {it.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-divider flex-wrap gap-3">
                <div>
                  <p className="text-[11px] text-ink-muted font-medium">Sold by <span className="font-extrabold text-ink">{o.seller}</span></p>
                  <p className="text-[11px] text-ink-faint font-medium mt-0.5">Tracking: {o.tracking}</p>
                </div>
                <div className="flex gap-2">
                  <Link href="/help" className="inline-flex items-center h-[36px] px-4 rounded-xl border border-border text-[12px] font-extrabold text-ink-secondary hover:border-ink hover:text-ink transition-colors">Need help?</Link>
                  <button className="inline-flex items-center h-[36px] px-4 rounded-xl bg-primary text-white text-[12px] font-extrabold hover:bg-primary-dark transition-colors">Track →</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
