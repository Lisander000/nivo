export const metadata = { title: "Analytics · Kahsya Partners" };

const chart = [28, 35, 42, 38, 55, 48, 60, 52, 68, 62, 75, 70, 82, 78];
const sources = [
  { label: "Direct search", pct: 42, value: "€7,736" },
  { label: "Category browse", pct: 28, value: "€5,158" },
  { label: "Homepage rails", pct: 15, value: "€2,763" },
  { label: "Email campaigns", pct: 9, value: "€1,658" },
  { label: "Social referrals", pct: 6, value: "€1,105" },
];

export default function SellerAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-amber-400">Insights</p>
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] font-black text-white tracking-tight leading-tight">Analytics</h1>
          <p className="text-[13px] text-white/50 mt-1">How your store is performing across the marketplace.</p>
        </div>
        <button className="h-[42px] px-4 rounded-xl bg-white/5 border border-white/10 text-white text-[12px] font-extrabold hover:bg-white/10 transition-colors">Last 30 days ▾</button>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Store visits", value: "12,480", delta: "+18%", up: true },
          { label: "Product views", value: "48,290", delta: "+24%", up: true },
          { label: "Add to cart", value: "2,140", delta: "+9%", up: true },
          { label: "Checkout rate", value: "16.0%", delta: "-1.2%", up: false },
        ].map((k) => (
          <div key={k.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 sm:p-5">
            <p className="text-[10px] sm:text-[11px] font-bold text-white/50 uppercase tracking-wider">{k.label}</p>
            <p className="text-[20px] sm:text-[26px] md:text-[30px] font-black text-white tracking-tight mt-1 sm:mt-2">{k.value}</p>
            <span className={`text-[11px] font-extrabold ${k.up ? "text-emerald-400" : "text-red-400"}`}>
              {k.up ? "↗" : "↘"} {k.delta}
            </span>
          </div>
        ))}
      </div>

      {/* Revenue curve */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div>
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-wider">Revenue trend</p>
            <p className="text-[22px] sm:text-[28px] font-black text-white mt-1">€18,420</p>
            <p className="text-[11px] text-emerald-400 font-extrabold mt-0.5">↗ +12.4% vs previous period</p>
          </div>
        </div>
        <div className="h-[160px] sm:h-[220px] flex items-end gap-1">
          {chart.map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-amber-400/10 to-amber-400 hover:from-amber-300/20 hover:to-amber-300 transition-all"
              style={{ height: `${(v / 82) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Traffic sources */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6">
          <h3 className="text-[13px] font-black text-white mb-5">Traffic sources</h3>
          <div className="space-y-4">
            {sources.map((s) => (
              <div key={s.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[12px] font-extrabold text-white">{s.label}</p>
                  <p className="text-[12px] font-extrabold text-white/60">{s.value} <span className="text-white/40">· {s.pct}%</span></p>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-300 rounded-full" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 md:p-6">
          <h3 className="text-[13px] font-black text-white mb-5">Customer cities</h3>
          <div className="space-y-3">
            {[
              { city: "Prishtinë", orders: 142, pct: 42 },
              { city: "Prizren", orders: 56, pct: 17 },
              { city: "Pejë", orders: 41, pct: 12 },
              { city: "Ferizaj", orders: 33, pct: 10 },
              { city: "Gjakovë", orders: 28, pct: 8 },
              { city: "Mitrovicë", orders: 22, pct: 7 },
              { city: "Other", orders: 20, pct: 4 },
            ].map((c) => (
              <div key={c.city} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <p className="text-[12px] font-extrabold text-white w-[90px] flex-shrink-0">{c.city}</p>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400/70 rounded-full" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
                <p className="text-[12px] font-extrabold text-white/60 ml-3 flex-shrink-0">{c.orders}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
