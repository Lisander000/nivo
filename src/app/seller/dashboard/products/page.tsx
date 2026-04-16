"use client";

import { useState } from "react";

const allProducts = [
  { id: 1, name: "Samsung Galaxy A55 5G", sku: "SMG-A55-128", category: "Smartphones", price: 299, stock: 24, status: "Live", sold: 48 },
  { id: 2, name: "JBL Tune 510BT", sku: "JBL-510BT-BK", category: "Audio", price: 40, stock: 56, status: "Live", sold: 36 },
  { id: 3, name: "Anker 20W USB-C Charger", sku: "ANK-20W-01", category: "Accessories", price: 14, stock: 3, status: "Low stock", sold: 118 },
  { id: 4, name: "Samsung Galaxy Watch 6", sku: "SMG-WATCH6-44", category: "Wearables", price: 280, stock: 12, status: "Live", sold: 14 },
  { id: 5, name: "Logitech MX Master 3S", sku: "LOG-MX3S-GR", category: "Accessories", price: 109, stock: 0, status: "Out of stock", sold: 27 },
  { id: 6, name: "Keychron K2 Pro RGB", sku: "KC-K2PRO-RED", category: "Accessories", price: 135, stock: 18, status: "Live", sold: 22 },
  { id: 7, name: "Sony ZV-1F Vlog Camera", sku: "SON-ZV1F-BK", category: "Electronics", price: 549, stock: 6, status: "Low stock", sold: 8 },
  { id: 8, name: "LG UltraGear 27\" 165Hz", sku: "LG-27GN650-B", category: "Electronics", price: 299, stock: 9, status: "Draft", sold: 0 },
];

const statusStyle = (s: string) => {
  if (s === "Live") return "bg-emerald-400/15 text-emerald-400";
  if (s === "Low stock") return "bg-amber-400/15 text-amber-400";
  if (s === "Out of stock") return "bg-red-400/15 text-red-400";
  return "bg-white/10 text-white/50";
};

export default function SellerProductsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = allProducts.filter((p) => {
    if (filter !== "All" && p.status !== filter) return false;
    if (query && !p.name.toLowerCase().includes(query.toLowerCase()) && !p.sku.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const filters = ["All", "Live", "Low stock", "Out of stock", "Draft"];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Catalog</p>
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Products</h1>
          <p className="text-[13px] text-white/50 mt-1">{allProducts.length} total · {allProducts.filter((p) => p.status === "Live").length} live</p>
        </div>
        <div className="flex gap-2">
          <button className="hidden sm:inline-flex h-[42px] px-4 rounded-xl bg-white/5 border border-white/10 text-white text-[12px] font-extrabold hover:bg-white/10 transition-colors">Import CSV</button>
          <button className="h-[36px] sm:h-[42px] px-3 sm:px-5 rounded-xl bg-amber-400 text-[#0A0A14] text-[11px] sm:text-[12px] font-black hover:bg-amber-300 transition-colors inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            <span className="hidden sm:inline">New product</span><span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Filters + search */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3">
        <div className="flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-4 h-[38px] rounded-xl text-[12px] font-extrabold transition-all ${
                filter === f ? "bg-amber-400 text-[#0A0A14]" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
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
            placeholder="Search name or SKU..."
            className="w-full h-[38px] pl-9 pr-3 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-amber-400/60"
          />
          <svg className="absolute left-3 top-2.5 w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px]">
            <thead>
              <tr className="text-left text-[10px] font-extrabold uppercase tracking-wider text-white/40 border-b border-white/5">
                <th className="px-5 py-3 font-extrabold">Product</th>
                <th className="px-5 py-3 font-extrabold">Category</th>
                <th className="px-5 py-3 font-extrabold text-right">Price</th>
                <th className="px-5 py-3 font-extrabold text-right">Stock</th>
                <th className="px-5 py-3 font-extrabold text-right">Sold</th>
                <th className="px-5 py-3 font-extrabold">Status</th>
                <th className="px-5 py-3 font-extrabold w-[40px]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white/25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" /></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-extrabold text-white truncate">{p.name}</p>
                        <p className="text-[11px] text-white/40 font-medium">{p.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[12px] font-bold text-white/60">{p.category}</td>
                  <td className="px-5 py-3.5 text-[13px] font-black text-white text-right">€{p.price}</td>
                  <td className="px-5 py-3.5 text-[13px] font-extrabold text-white text-right">{p.stock}</td>
                  <td className="px-5 py-3.5 text-[13px] font-extrabold text-white/70 text-right">{p.sold}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusStyle(p.status)}`}>{p.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <button className="text-white/40 hover:text-white">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-[13px] text-white/40 font-bold">No products match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
