"use client";

import { useState } from "react";

const orders = [
  { id: "KA-20412", customer: "Arta Krasniqi", city: "Prishtinë", items: 3, total: 128.90, status: "To ship", paid: "Today, 10:12", sku: "SMG-A55-128 +2" },
  { id: "KA-20411", customer: "Driton Haziri", city: "Prizren", items: 1, total: 49.00, status: "Paid", paid: "Today, 09:48", sku: "JBL-510BT-BK" },
  { id: "KA-20409", customer: "Besa Morina", city: "Pejë", items: 2, total: 76.50, status: "To ship", paid: "Today, 09:18", sku: "ANK-20W-01 +1" },
  { id: "KA-20405", customer: "Leart Berisha", city: "Gjakovë", items: 1, total: 215.00, status: "Paid", paid: "Today, 08:40", sku: "LOG-MX3S-GR" },
  { id: "KA-20402", customer: "Edona Vokshi", city: "Prishtinë", items: 4, total: 312.40, status: "Shipped", paid: "Yesterday", sku: "KC-K2PRO +3" },
  { id: "KA-20398", customer: "Fitim Gashi", city: "Ferizaj", items: 1, total: 549.00, status: "Shipped", paid: "Yesterday", sku: "SON-ZV1F-BK" },
  { id: "KA-20390", customer: "Rina Bytyqi", city: "Prishtinë", items: 2, total: 88.00, status: "Delivered", paid: "2 days ago", sku: "ANK-20W-01 +1" },
  { id: "KA-20381", customer: "Albin Krasniqi", city: "Mitrovicë", items: 1, total: 299.00, status: "Delivered", paid: "3 days ago", sku: "SMG-A55-128" },
  { id: "KA-20376", customer: "Mirjeta Shala", city: "Vushtrri", items: 3, total: 155.00, status: "Cancelled", paid: "3 days ago", sku: "JBL-510BT +2" },
];

const statusStyle = (s: string) => {
  if (s === "To ship") return "bg-amber-400/15 text-amber-400";
  if (s === "Paid") return "bg-blue-400/15 text-blue-400";
  if (s === "Shipped") return "bg-purple-400/15 text-purple-400";
  if (s === "Delivered") return "bg-emerald-400/15 text-emerald-400";
  return "bg-red-400/15 text-red-400";
};

export default function SellerOrdersPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "To ship", "Paid", "Shipped", "Delivered", "Cancelled"];
  const filtered = filter === "All" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Fulfillment</p>
        <h1 className="text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Orders</h1>
        <p className="text-[13px] text-white/50 mt-1">{orders.filter((o) => o.status === "To ship").length} need to be shipped today</p>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "To ship", value: orders.filter((o) => o.status === "To ship").length, color: "text-amber-400" },
          { label: "In transit", value: orders.filter((o) => o.status === "Shipped").length, color: "text-purple-400" },
          { label: "Delivered", value: orders.filter((o) => o.status === "Delivered").length, color: "text-emerald-400" },
          { label: "Cancelled", value: orders.filter((o) => o.status === "Cancelled").length, color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">{s.label}</p>
            <p className={`text-[26px] font-black ${s.color} tracking-tight mt-1`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex gap-1.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
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

      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px]">
            <thead>
              <tr className="text-left text-[10px] font-extrabold uppercase tracking-wider text-white/40 border-b border-white/5">
                <th className="px-5 py-3">Order</th>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Items</th>
                <th className="px-5 py-3 text-right">Total</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 w-[130px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((o) => (
                <tr key={o.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5">
                    <p className="text-[13px] font-extrabold text-white">{o.id}</p>
                    <p className="text-[11px] text-white/40 font-medium">{o.paid}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="text-[13px] font-bold text-white">{o.customer}</p>
                    <p className="text-[11px] text-white/40 font-medium">{o.city}</p>
                  </td>
                  <td className="px-5 py-3.5">
                    <p className="text-[12px] font-bold text-white/70">{o.items} item{o.items > 1 ? "s" : ""}</p>
                    <p className="text-[11px] text-white/40 font-medium truncate max-w-[180px]">{o.sku}</p>
                  </td>
                  <td className="px-5 py-3.5 text-right text-[14px] font-black text-white">€{o.total.toFixed(2)}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusStyle(o.status)}`}>{o.status}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    {o.status === "To ship" ? (
                      <button className="h-[32px] px-3 bg-amber-400 text-[#0A0A14] text-[11px] font-black rounded-lg hover:bg-amber-300 transition-colors">Print label</button>
                    ) : (
                      <button className="h-[32px] px-3 bg-white/5 border border-white/10 text-white/60 text-[11px] font-extrabold rounded-lg hover:bg-white/10 hover:text-white transition-colors">View</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
