"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/seller/dashboard",
    label: "Overview",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />,
  },
  {
    href: "/seller/dashboard/products",
    label: "Products",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />,
  },
  {
    href: "/seller/dashboard/orders",
    label: "Orders",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75h.75m0 0h1.5" />,
  },
  {
    href: "/seller/dashboard/analytics",
    label: "Analytics",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />,
  },
  {
    href: "/seller/dashboard/payouts",
    label: "Payouts",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9-1.5h10.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v11.25c0 .414.336.75.75.75h.75" />,
  },
  {
    href: "/seller/dashboard/settings",
    label: "Store settings",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  },
];

function NavContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="p-4">
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 flex items-center gap-2.5 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-[#0A0A14] font-black text-[13px] flex-shrink-0">EK</div>
        <div className="min-w-0">
          <p className="text-[12px] font-extrabold text-white truncate">ElectroKS</p>
          <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">● Verified</p>
        </div>
      </div>

      <nav className="space-y-0.5">
        {items.map((it) => {
          const active = pathname === it.href || (it.href !== "/seller/dashboard" && pathname?.startsWith(it.href));
          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                active ? "bg-amber-400 text-[#0A0A14]" : "text-white/55 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                {it.icon}
              </svg>
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 pt-5 border-t border-white/5">
        <Link href="/seller/login" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[12px] font-bold text-white/40 hover:text-white hover:bg-white/5 transition-colors">
          <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          Log out
        </Link>
        <Link href="/" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[12px] font-bold text-white/40 hover:text-white hover:bg-white/5 transition-colors">
          <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12" />
          </svg>
          View shop
        </Link>
      </div>
    </div>
  );
}

/* Desktop sidebar — hidden on mobile */
export function SellerDesktopSidebar() {
  return (
    <aside className="hidden lg:block w-[240px] flex-shrink-0 border-r border-white/5 bg-[#08080F] min-h-[calc(100vh-64px)] sticky top-[64px]">
      <NavContent />
    </aside>
  );
}

/* Mobile drawer — full-screen overlay */
export function SellerMobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="lg:hidden fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-[280px] bg-[#08080F] overflow-y-auto shadow-xl animate-slide-in-left">
        <div className="sticky top-0 bg-[#08080F] z-10 px-4 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-0.5">
            <span className="text-[18px] font-extrabold text-white">kahsya</span>
            <span className="text-[18px] font-extrabold text-amber-400">.</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 text-white/40">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <NavContent onNavigate={onClose} />
      </div>
    </div>
  );
}

/* Default export for backwards compat */
export default function SellerSidebar() {
  return <SellerDesktopSidebar />;
}
