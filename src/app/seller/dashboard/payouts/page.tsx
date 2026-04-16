export const metadata = { title: "Payouts · Kahsya Partners" };

const payouts = [
  { id: "PO-2026-015", date: "Apr 07, 2026", amount: 2140.40, status: "Available", orders: 42 },
  { id: "PO-2026-014", date: "Mar 31, 2026", amount: 1890.00, status: "Paid", orders: 37 },
  { id: "PO-2026-013", date: "Mar 24, 2026", amount: 2420.75, status: "Paid", orders: 48 },
  { id: "PO-2026-012", date: "Mar 17, 2026", amount: 1550.20, status: "Paid", orders: 31 },
  { id: "PO-2026-011", date: "Mar 10, 2026", amount: 2180.00, status: "Paid", orders: 44 },
  { id: "PO-2026-010", date: "Mar 03, 2026", amount: 1290.50, status: "Paid", orders: 28 },
];

export default function SellerPayoutsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Finances</p>
        <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Payouts</h1>
        <p className="text-[13px] text-white/50 mt-1">Weekly bank transfers every Monday.</p>
      </div>

      {/* Balance hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400/15 via-amber-400/5 to-transparent border border-amber-400/20 p-4 sm:p-6 md:p-8">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">Available now</p>
            <p className="text-[32px] sm:text-[40px] md:text-[48px] font-black text-white tracking-tight leading-none mt-2">€2,140<span className="text-[18px] sm:text-[24px] text-white/50">.40</span></p>
            <button className="mt-3 sm:mt-4 h-[40px] sm:h-[44px] px-5 sm:px-6 bg-amber-400 hover:bg-amber-300 text-[#0A0A14] text-[12px] sm:text-[13px] font-black rounded-xl transition-colors">Withdraw now</button>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">Pending (clearing)</p>
            <p className="text-[28px] font-black text-white/90 tracking-tight mt-2">€1,325.00</p>
            <p className="text-[11px] text-white/40 font-medium mt-1">Clears Apr 14, 2026</p>
          </div>
          <div className="md:border-l md:border-white/10 md:pl-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-white/50">Next automatic payout</p>
            <p className="text-[28px] font-black text-white/90 tracking-tight mt-2">Mon, Apr 14</p>
            <p className="text-[11px] text-white/40 font-medium mt-1">IBAN ending ••• 4402</p>
          </div>
        </div>
      </div>

      {/* Fees breakdown */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6">
        <h3 className="text-[13px] font-black text-white mb-4">This week&apos;s breakdown</h3>
        <div className="space-y-3">
          {[
            { label: "Gross sales", value: "€2,487.50", sub: "42 orders" },
            { label: "Kahsya commission (12%)", value: "−€298.50", sub: "Platform fee" },
            { label: "Payment processing (1.9%)", value: "−€47.26", sub: "Card fees" },
            { label: "Refunds & returns", value: "−€1.34", sub: "1 partial refund" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between pb-3 border-b border-white/5 last:border-0 last:pb-0">
              <div>
                <p className="text-[13px] font-extrabold text-white">{r.label}</p>
                <p className="text-[11px] text-white/40 font-medium">{r.sub}</p>
              </div>
              <p className={`text-[14px] font-black ${r.value.startsWith("−") ? "text-red-400" : "text-white"}`}>{r.value}</p>
            </div>
          ))}
          <div className="flex items-center justify-between pt-3 border-t-2 border-amber-400/30">
            <p className="text-[13px] font-black text-amber-400 uppercase tracking-wider">Net payout</p>
            <p className="text-[18px] font-black text-amber-400">€2,140.40</p>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/5">
          <h3 className="text-[13px] font-black text-white">Payout history</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="text-left text-[10px] font-extrabold uppercase tracking-wider text-white/40 border-b border-white/5">
                <th className="px-5 py-3">Reference</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Orders</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {payouts.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-5 py-3.5 text-[12px] font-extrabold text-white">{p.id}</td>
                  <td className="px-5 py-3.5 text-[12px] font-medium text-white/60">{p.date}</td>
                  <td className="px-5 py-3.5 text-[12px] font-extrabold text-white/70 text-right">{p.orders}</td>
                  <td className="px-5 py-3.5 text-[13px] font-black text-white text-right">€{p.amount.toFixed(2)}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      p.status === "Available" ? "bg-amber-400/15 text-amber-400" : "bg-emerald-400/15 text-emerald-400"
                    }`}>{p.status}</span>
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
