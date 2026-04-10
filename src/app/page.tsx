import Link from "next/link";
import { categories, getFeaturedProducts, getDeals, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const under500 = products.filter((p) => p.price < 500).slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 space-y-8">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-2xl overflow-hidden p-8 md:p-10 lg:p-12 text-white min-h-[280px] flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">Now live in Kosovo</span>
            </div>
            <h1 className="text-[28px] md:text-[40px] font-extrabold leading-[1.1] mb-3 tracking-tight">
              15,000+ gadgets.<br />One marketplace.
            </h1>
            <p className="text-[14px] md:text-[15px] text-white/60 mb-6 max-w-[420px] leading-relaxed">
              150+ verified sellers. Local warranty. Free delivery. The way shopping should be.
            </p>
            <Link
              href="/category/all"
              className="inline-flex items-center gap-2 h-[44px] px-7 bg-accent text-white text-[14px] font-bold rounded-xl hover:bg-accent-dark transition-all active:scale-[0.97] shadow-lg"
            >
              Shop all products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <Link href="/category/smartphones" className="flex-1 bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all group">
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider">New arrival</span>
            <p className="text-[17px] font-bold text-ink mt-1">iPhone 16 Pro</p>
            <p className="text-[13px] text-ink-secondary mt-0.5">From &euro;1,199,-</p>
            <span className="text-[13px] text-primary font-semibold mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </span>
          </Link>
          <Link href="/category/gaming" className="flex-1 bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all group">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-danger uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-danger" />
              Hot deal
            </span>
            <p className="text-[17px] font-bold text-ink mt-1">PlayStation 5</p>
            <p className="text-[13px] text-ink-secondary mt-0.5">&euro;499,- &mdash; free delivery</p>
            <span className="text-[13px] text-primary font-semibold mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white rounded-2xl shadow-card p-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: "Free delivery", desc: "On every order across Kosovo", icon: <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
          { title: "Verified sellers", desc: "Every partner is KYC-checked", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg> },
          { title: "Local warranty", desc: "Up to 2 years, claimed locally", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg> },
          { title: "Easy returns", desc: "14-day return policy, no hassle", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg> },
        ].map((v) => (
          <div key={v.title} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-bg flex items-center justify-center flex-shrink-0">
              {v.icon}
            </div>
            <div>
              <p className="text-[13px] font-bold text-ink">{v.title}</p>
              <p className="text-[12px] text-ink-muted leading-relaxed mt-0.5">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section>
        <SectionHeader title="Shop by category" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="bg-white rounded-2xl p-4 text-center shadow-card hover:shadow-card-hover transition-all group"
            >
              <span className="text-[28px] block mb-2 group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
              <p className="text-[13px] font-semibold text-ink">{cat.name}</p>
              <p className="text-[11px] text-ink-muted mt-0.5">{cat.count} items</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Deals */}
      {deals.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="bg-danger text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">DEAL</span>
              <h2 className="text-[18px] font-bold text-ink">Today&apos;s deals</h2>
            </div>
            <div className="flex-1" />
            <Link href="/category/all" className="text-[13px] text-primary font-semibold hover:underline">See all deals</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {deals.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Featured */}
      <section>
        <SectionHeader title="Popular right now" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Top rated */}
      <section>
        <SectionHeader title="Top rated by customers" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {topRated.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Installments */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Flexible payments</span>
            <p className="text-[20px] font-bold text-ink mt-1">Pay in installments</p>
            <p className="text-[14px] text-ink-secondary mt-1.5 leading-relaxed max-w-[400px]">
              Split any purchase over &euro;50 into 3, 6, or 12 monthly payments. No hidden fees. No interest.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {[3, 6, 12].map((m) => (
              <div key={m} className="text-center bg-primary-50 rounded-2xl px-5 py-4 min-w-[72px]">
                <p className="text-[24px] font-extrabold text-primary leading-none">{m}</p>
                <p className="text-[11px] text-primary/60 font-medium mt-1">months</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Under €500 */}
      <section>
        <SectionHeader title="Under €500" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {under500.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-[#001847] to-[#0046BE] rounded-2xl p-8 md:p-10 text-center text-white">
        <p className="text-[20px] font-bold">Get the best deals in your inbox</p>
        <p className="text-[14px] text-white/50 mt-1.5 mb-5">Join 10,000+ tech lovers in Kosovo. Weekly deals, no spam.</p>
        <div className="flex flex-col sm:flex-row gap-2.5 max-w-[420px] mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-[44px] px-4 rounded-xl text-[14px] text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-ink-muted"
          />
          <button className="h-[44px] px-7 bg-accent text-white text-[14px] font-bold rounded-xl hover:bg-accent-dark transition-colors shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[18px] font-bold text-ink">{title}</h2>
      {href && (
        <Link href={href} className="text-[13px] text-primary font-semibold hover:underline flex items-center gap-1">
          View all
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      )}
    </div>
  );
}
