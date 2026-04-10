import Link from "next/link";

export default function WishlistPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6">
      <h1 className="text-[24px] font-bold text-ink mb-6">My Wishlist</h1>

      <div className="bg-white rounded-2xl shadow-card text-center py-20 px-6">
        <div className="w-16 h-16 rounded-2xl bg-bg mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <p className="text-[16px] font-semibold text-ink mb-1">Your wishlist is empty</p>
        <p className="text-[14px] text-ink-muted mb-5 max-w-[300px] mx-auto">Save products you love by clicking the heart icon on any product page.</p>
        <Link href="/category/all" className="inline-flex items-center h-[44px] px-7 bg-primary text-white text-[14px] font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-sm">
          Discover products
        </Link>
      </div>
    </div>
  );
}
