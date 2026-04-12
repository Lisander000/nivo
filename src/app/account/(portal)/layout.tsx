import AccountSidebar from "@/components/AccountSidebar";
import Link from "next/link";

export default function AccountPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">My account</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        <AccountSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
