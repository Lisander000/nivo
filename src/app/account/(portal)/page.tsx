import Link from "next/link";

export const metadata = { title: "My Account · Kahsya" };

const recentOrders = [
  { id: "KA-20412", date: "Apr 09, 2026", total: "€128.90", status: "Delivered", items: "Samsung Galaxy A55 + 2 more" },
  { id: "KA-20358", date: "Apr 04, 2026", total: "€42.50", status: "In transit", items: "Nike Air Max + Socks" },
  { id: "KA-20301", date: "Mar 28, 2026", total: "€89.00", status: "Delivered", items: "IKEA Hemnes drawer" },
];

const quickActions = [
  { label: "Track package", icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75h.75m0 0h1.5m-1.5 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h3M8.25 19.5h7.5m0 0a1.5 1.5 0 0 0 3 0m-3 0a1.5 1.5 0 0 1 3 0", href: "/account/orders" },
  { label: "Return item", icon: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3", href: "/returns" },
  { label: "Add address", icon: "M12 4.5v15m7.5-7.5h-15", href: "/account/addresses" },
  { label: "Help center", icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z", href: "/help" },
];

export default function AccountOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Hero greeting */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white p-6 md:p-8">
        <div className="relative">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-accent">Welcome back</p>
          <h1 className="text-[26px] md:text-[32px] font-black tracking-tight mt-1">Hi, Arta</h1>
          <p className="text-[13px] text-white/75 mt-1 max-w-[420px]">You have <span className="font-extrabold text-white">3 active orders</span> and <span className="font-extrabold text-white">2 new deals</span> on items you saved.</p>
          <div className="flex gap-2 mt-5 flex-wrap">
            <Link href="/account/orders" className="inline-flex items-center gap-1.5 h-[40px] px-4 bg-white text-ink text-[12px] font-extrabold rounded-xl hover:-translate-y-0.5 transition-all shadow-sm">Track orders</Link>
            <Link href="/category/all" className="inline-flex items-center gap-1.5 h-[40px] px-4 bg-white/10 border border-white/20 text-white text-[12px] font-extrabold rounded-xl hover:bg-white/15 transition-all">Continue shopping</Link>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {quickActions.map((a) => (
          <Link key={a.label} href={a.href} className="bg-white rounded-2xl border border-divider p-4 hover:border-primary/30 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={a.icon} /></svg>
            </div>
            <p className="text-[13px] font-extrabold text-ink">{a.label}</p>
          </Link>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-2xl shadow-card border border-divider overflow-hidden">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-divider">
          <h2 className="text-[16px] font-black text-ink">Recent orders</h2>
          <Link href="/account/orders" className="text-[12px] font-extrabold text-primary hover:underline">View all</Link>
        </div>
        <div className="divide-y divide-divider">
          {recentOrders.map((o) => (
            <div key={o.id} className="px-5 md:px-6 py-4 flex items-center justify-between gap-4 hover:bg-bg/50 transition-colors">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[13px] font-extrabold text-ink">{o.id}</p>
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full ${o.status === "Delivered" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>{o.status}</span>
                </div>
                <p className="text-[12px] text-ink-muted truncate">{o.items}</p>
                <p className="text-[11px] text-ink-faint font-medium mt-0.5">{o.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[14px] font-black text-ink">{o.total}</p>
                <Link href="/account/orders" className="text-[11px] font-extrabold text-primary hover:underline">Details →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deals on saved items */}
      <div className="bg-gradient-to-br from-accent/10 via-white to-primary/5 rounded-2xl border border-accent/15 p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-1 bg-accent text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Price drop
          </span>
          <h3 className="text-[15px] font-black text-ink">2 items you saved are now cheaper</h3>
        </div>
        <p className="text-[12px] text-ink-muted mb-4">Check your wishlist before they sell out.</p>
        <Link href="/wishlist" className="inline-flex items-center gap-1.5 h-[38px] px-4 bg-accent text-white text-[12px] font-extrabold rounded-xl hover:bg-accent-dark transition-colors">
          Open wishlist
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
        </Link>
      </div>
    </div>
  );
}
