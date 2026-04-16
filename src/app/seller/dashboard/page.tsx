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
  { name: "Samsung Galaxy A55", sold: 48, revenue: "€14,352" },
  { name: "JBL Tune 510BT", sold: 36, revenue: "€1,440" },
  { name: "Anker 20W charger", sold: 118, revenue: "€1,652" },
  { name: "Samsung Galaxy Watch 6", sold: 14, revenue: "€3,920" },
];

const chart = [20, 28, 22, 35, 30, 42, 38, 55, 48, 60, 52, 68, 62, 75];

export default function SellerOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Dashboard</p>
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Good morning, Endrit</h1>
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
              { label: "12 orders ready to ship", iconPath: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z", href: "/seller/dashboard/orders", urgent: true },
              { label: "3 products low on stock", iconPath: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z", href: "/seller/dashboard/products", urgent: true },
              { label: "2 customer messages", iconPath: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z", href: "/seller/dashboard/orders" },
              { label: "Payout available: €2,140", iconPath: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z", href: "/seller/dashboard/payouts" },
            ].map((t) => (
              <Link key={t.label} href={t.href} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/5 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-amber-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={t.iconPath} /></svg>
                </div>
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
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[11px] font-bold text-white/40 flex-shrink-0">{p.name.split(" ").map(w => w[0]).slice(0, 2).join("")}</div>
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
