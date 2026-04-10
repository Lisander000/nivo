import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function WishlistPage() {
  const recommended = getFeaturedProducts().slice(0, 8);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">My Wishlist</span>
      </nav>

      {/* Hero empty state */}
      <div className="relative bg-white rounded-3xl shadow-card overflow-hidden mb-8">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-24 -right-20 w-[380px] h-[380px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />

        <div className="relative px-6 md:px-16 py-14 md:py-20 text-center">
          {/* Floating heart icon */}
          <div className="relative inline-flex mb-6">
            <div className="absolute inset-0 bg-danger/20 rounded-3xl blur-2xl" />
            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-danger to-accent flex items-center justify-center shadow-[0_12px_32px_rgba(214,59,47,0.35)]">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          </div>

          <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.15em] mb-3">Your favorites, saved</p>
          <h1 className="text-[32px] md:text-[44px] font-black text-ink tracking-tight leading-[1.05] mb-3">
            Your wishlist is <span className="text-accent">empty</span>
          </h1>
          <p className="text-[15px] text-ink-muted max-w-[440px] mx-auto leading-relaxed mb-7">
            Tap the heart on any product to save it here. Your list syncs across devices so you can come back anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/category/all"
              className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl bg-primary text-white text-[14px] font-extrabold hover:bg-primary-dark transition-all shadow-[0_6px_20px_rgba(0,70,190,0.25)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5"
            >
              Discover products
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/category/smartphones"
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-xl bg-bg text-ink text-[14px] font-extrabold hover:bg-border transition-all border border-border"
            >
              Browse smartphones
            </Link>
          </div>

          {/* Features row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-[560px] mx-auto mt-10 pt-8 border-t border-divider">
            {[
              { icon: "M12 6v12m6-6H6", title: "Save anything", desc: "One tap to save" },
              { icon: "M4.5 12.75l6 6 9-13.5", title: "Synced", desc: "Across devices" },
              { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0", title: "Price alerts", desc: "Get notified" },
            ].map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <p className="text-[12px] font-extrabold text-ink">{f.title}</p>
                <p className="text-[11px] text-ink-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended section */}
      <div className="flex items-end justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Discover</p>
            <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">
              You might love these
            </h2>
          </div>
        </div>
        <Link href="/category/all" className="group text-[13px] text-primary font-extrabold hover:text-primary-dark flex items-center gap-1.5 pb-1">
          View all
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {recommended.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
