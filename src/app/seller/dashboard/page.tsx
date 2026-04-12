import Link from "next/link";

export const metadata = { title: "Dashboard · Kahsya Partners" };

const kpis = [
  { label: "Revenue (30d)", value: "€18,420", delta: "+12.4%", up: true, sub: "vs. last 30d" },
  { label: "Orders (30d)", value: "342", delta: "+8.1%", up: true, sub: "vs. last 30d" },
  { label: "Avg order", value: "€53.85", delta: "+3.9%", up: true, sub: "vs. last 30d" },
  { label: "Conversion", value: "4.2%", delta: "-0.3%", up: false, sub: "vs. last 30d" },
];

const recentOrders = [
  { id: "KA-20412", customer: "Arta K.", items: 3, total: "€128.90", status: "To ship", when: "12m ago" },
  { id: "KA-20411", customer: "Driton H.", items: 1, total: "€49.00", status: "Paid", when: "28m ago" },
  { id: "KA-20409", customer: "Besa M.", items: 2, total: "€76.50", status: "To ship", when: "52m ago" },
  { id: "KA-20405", customer: "Leart B.", items: 1, total: "€215.00", status: "Paid", when: "1h ago" },
  { id: "KA-20402", customer: "Edona V.", items: 4, total: "€312.40", status: "Shipped", when: "2h ago" },
];

const topProducts = [
  { emoji: "📱", name: "Samsung Galaxy A55", sold: 48, revenue: "€14,352" },
  { emoji: "🎧", name: "JBL Tune 510BT", sold: 36, revenue: "€1,440" },
  { emoji: "🔌", name: "Anker 20W charger", sold: 118, revenue: "€1,652" },
  { emoji: "⌚", name: "Samsung Galaxy Watch 6", sold: 14, revenue: "€3,920" },
];

const chart = [20, 28, 22, 35, 30, 42, 38, 55, 48, 60, 52, 68, 62, 75];

export default function SellerOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Dashboard</p>
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Good morning, Endrit 👋</h1>
          <p className="text-[13px] text-white/50 mt-1">Here&apos;s how ElectroKS is doing today.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-[36px] sm:h-[42px] px-3 sm:px-4 rounded-xl bg-white/5 border border-white/10 text-white text-[11px] sm:text-[12px] font-extrabold hover:bg-white/10 transition-colors">Last 30 days ▾</button>
          <Link href="/seller/dashboard/products" className="hidden sm:inline-flex h-[42px] px-5 rounded-xl bg-amber-400 text-[#0A0A14] text-[12px] font-black hover:bg-amber-300 transition-colors items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            Add product
          </Link>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 sm:p-5 hover:border-white/20 transition-colors">
            <p className="text-[10px] sm:text-[11px] font-bold text-white/50 uppercase tracking-wider">{k.label}</p>
            <p className="text-[20px] sm:text-[26px] md:text-[32px] font-black text-white tracking-tight leading-none mt-1 sm:mt-2">{k.value}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <span className={`text-[11px] font-extrabold ${k.up ? "text-emerald-400" : "text-red-400"}`}>
                {k.up ? "↗" : "↘"} {k.delta}
              </span>
              <span className="text-[11px] text-white/35 font-medium">{k.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4">
        {/* Revenue chart */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Revenue</p>
              <p className="text-[22px] font-black text-white mt-0.5">€18,420</p>
            </div>
            <div className="flex gap-1">
              {["7d", "30d", "90d"].map((t, i) => (
                <button key={t} className={`h-[30px] px-3 rounded-lg text-[11px] font-extrabold ${i === 1 ? "bg-amber-400 text-[#0A0A14]" : "text-white/50 hover:bg-white/5"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="h-[180px] flex items-end gap-1.5">
            {chart.map((v, i) => (
              <div key={i} className="flex-1 relative group">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-amber-400/20 to-amber-400 hover:from-amber-300/30 hover:to-amber-300 transition-all cursor-pointer"
                  style={{ height: `${(v / 75) * 100}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-[10px] text-white/30 font-medium">
            <span>Mar 28</span><span>Apr 04</span><span>Apr 11</span>
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
          <h3 className="text-[13px] font-black text-white mb-4">Needs your attention</h3>
          <div className="space-y-2.5">
            {[
              { label: "12 orders ready to ship", icon: "📦", href: "/seller/dashboard/orders", urgent: true },
              { label: "3 products low on stock", icon: "⚠️", href: "/seller/dashboard/products", urgent: true },
              { label: "2 customer messages", icon: "💬", href: "/seller/dashboard/orders" },
              { label: "Payout available: €2,140", icon: "💰", href: "/seller/dashboard/payouts" },
            ].map((t) => (
              <Link key={t.label} href={t.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/5 transition-all group">
                <span className="text-[20px]">{t.icon}</span>
                <p className={`flex-1 text-[12px] font-extrabold ${t.urgent ? "text-white" : "text-white/70"}`}>{t.label}</p>
                <svg className="w-3.5 h-3.5 text-white/30 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Recent orders + top products */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-[13px] font-black text-white">Recent orders</h3>
            <Link href="/seller/dashboard/orders" className="text-[11px] font-extrabold text-amber-400 hover:underline">All orders →</Link>
          </div>
          <div className="divide-y divide-white/5">
            {recentOrders.map((o) => (
              <div key={o.id} className="px-5 py-3 flex items-center justify-between gap-3 hover:bg-white/[0.02] transition-colors">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[12px] font-extrabold text-white">{o.id}</p>
                    <span className={`text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                      o.status === "To ship" ? "bg-amber-400/15 text-amber-400" : o.status === "Shipped" ? "bg-emerald-400/15 text-emerald-400" : "bg-blue-400/15 text-blue-400"
                    }`}>{o.status}</span>
                  </div>
                  <p className="text-[11px] text-white/40 font-medium truncate mt-0.5">{o.customer} · {o.items} item{o.items > 1 ? "s" : ""} · {o.when}</p>
                </div>
                <p className="text-[13px] font-black text-white flex-shrink-0">{o.total}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-[13px] font-black text-white">Top products</h3>
            <Link href="/seller/dashboard/products" className="text-[11px] font-extrabold text-amber-400 hover:underline">All products →</Link>
          </div>
          <div className="divide-y divide-white/5">
            {topProducts.map((p) => (
              <div key={p.name} className="px-5 py-3 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[20px] flex-shrink-0">{p.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-extrabold text-white truncate">{p.name}</p>
                  <p className="text-[11px] text-white/40 font-medium">{p.sold} sold</p>
                </div>
                <p className="text-[13px] font-black text-amber-400 flex-shrink-0">{p.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
