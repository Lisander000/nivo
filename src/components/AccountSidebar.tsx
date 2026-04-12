"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/account",
    label: "Overview",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12 12 2.25 21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    ),
  },
  {
    href: "/account/orders",
    label: "Orders",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
    ),
  },
  {
    href: "/wishlist",
    label: "Wishlist",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    ),
  },
  {
    href: "/account/addresses",
    label: "Addresses",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    ),
  },
  {
    href: "/account/settings",
    label: "Settings",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.15.894c-.09.542-.56.94-1.109.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    ),
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-[260px] lg:flex-shrink-0">
      {/* Profile card */}
      <div className="bg-white rounded-2xl shadow-card p-5 mb-4 border border-divider">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#0057E0] flex items-center justify-center text-white font-black text-[16px] shadow-sm">AK</div>
          <div className="min-w-0">
            <p className="text-[14px] font-extrabold text-ink truncate">Arta Krasniqi</p>
            <p className="text-[11px] text-ink-muted font-medium truncate">arta@example.com</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-divider grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-[15px] font-black text-ink leading-none">24</p>
            <p className="text-[10px] text-ink-muted font-bold uppercase tracking-wider mt-1">Orders</p>
          </div>
          <div>
            <p className="text-[15px] font-black text-primary leading-none">8</p>
            <p className="text-[10px] text-ink-muted font-bold uppercase tracking-wider mt-1">Saved</p>
          </div>
          <div>
            <p className="text-[15px] font-black text-accent leading-none">3</p>
            <p className="text-[10px] text-ink-muted font-bold uppercase tracking-wider mt-1">Live</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-white rounded-2xl shadow-card p-2 border border-divider">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                active ? "bg-primary text-white shadow-sm" : "text-ink-secondary hover:bg-bg hover:text-ink"
              }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                {it.icon}
              </svg>
              <span>{it.label}</span>
            </Link>
          );
        })}
        <div className="h-px bg-divider my-2" />
        <Link href="/account/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-bold text-danger hover:bg-danger/5 transition-colors">
          <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          Log out
        </Link>
      </nav>
    </aside>
  );
}
