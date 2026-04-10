import Link from "next/link";
import { categories, getFeaturedProducts, getDeals, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const under500 = products.filter((p) => p.price < 500).slice(0, 4);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 space-y-10">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 relative bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-3xl overflow-hidden p-8 md:p-12 lg:p-14 text-white min-h-[360px] flex flex-col justify-center">
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 w-[280px] h-[280px] rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-1.5 mb-5">
              <span className="flex items-center gap-1 bg-accent text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Live
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">Now in Kosovo</span>
            </div>
            <h1 className="text-[36px] md:text-[56px] lg:text-[64px] font-black leading-[0.95] mb-4 tracking-[-0.02em]">
              15,000+ gadgets.<br />
              <span className="text-accent">One marketplace.</span>
            </h1>
            <p className="text-[15px] md:text-[16px] text-white/70 mb-8 max-w-[460px] leading-relaxed">
              150+ verified sellers. Local warranty. Free delivery tomorrow. The way shopping should be.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/category/all"
                className="group inline-flex items-center gap-2 h-[52px] px-8 bg-accent text-white text-[15px] font-extrabold rounded-2xl hover:bg-accent-dark transition-all active:scale-[0.97] shadow-[0_8px_24px_rgba(255,103,0,0.4)] hover:shadow-[0_12px_32px_rgba(255,103,0,0.5)] hover:-translate-y-0.5"
              >
                Shop all products
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/category/all"
                className="inline-flex items-center gap-2 h-[52px] px-6 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[14px] font-bold rounded-2xl hover:bg-white/15 transition-all"
              >
                Today&apos;s deals
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-[12px] text-white/60">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                <span>Free delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                <span>14-day returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                <span>2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <Link href="/category/smartphones" className="flex-1 relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden hover:-translate-y-1">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary-light opacity-60 group-hover:scale-125 transition-transform duration-500" />
            <div className="relative">
              <span className="inline-block text-[10px] font-extrabold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-1 rounded-full">New arrival</span>
              <p className="text-[22px] font-black text-ink mt-3 leading-tight">iPhone 16 Pro</p>
              <p className="text-[13px] text-ink-secondary mt-1">From <span className="font-bold text-ink">&euro;1.199,-</span></p>
              <span className="text-[13px] text-primary font-extrabold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Shop now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
          <Link href="/category/gaming" className="flex-1 relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group overflow-hidden hover:-translate-y-1">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent-light opacity-60 group-hover:scale-125 transition-transform duration-500" />
            <div className="relative">
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-white uppercase tracking-wider bg-danger px-2.5 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Hot deal −20%
              </span>
              <p className="text-[22px] font-black text-ink mt-3 leading-tight">PlayStation 5</p>
              <p className="text-[13px] text-ink-secondary mt-1"><span className="font-bold text-ink">&euro;499,-</span> &middot; free delivery</p>
              <span className="text-[13px] text-accent font-extrabold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Shop now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white rounded-3xl shadow-card p-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {[
          { title: "Free delivery", desc: "On every order across Kosovo", icon: <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
          { title: "Verified sellers", desc: "Every partner is KYC-checked", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg> },
          { title: "Local warranty", desc: "Up to 2 years, claimed locally", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg> },
          { title: "Easy returns", desc: "14-day return policy, no hassle", icon: <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg> },
        ].map((v) => (
          <div key={v.title} className="flex items-start gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:[&>svg]:text-white transition-colors">
              {v.icon}
            </div>
            <div>
              <p className="text-[14px] font-extrabold text-ink">{v.title}</p>
              <p className="text-[12px] text-ink-muted leading-relaxed mt-0.5">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section>
        <SectionHeader title="Shop by category" kicker="Browse" />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat, i) => {
            const tints = [
              "from-blue-50 to-blue-100",
              "from-orange-50 to-orange-100",
              "from-purple-50 to-purple-100",
              "from-pink-50 to-pink-100",
              "from-green-50 to-green-100",
              "from-cyan-50 to-cyan-100",
            ];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`relative bg-gradient-to-br ${tints[i % tints.length]} rounded-3xl p-5 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
              >
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-white/40 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <span className="text-[36px] block mb-2 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 inline-block">{cat.icon}</span>
                  <p className="text-[13px] font-extrabold text-ink">{cat.name}</p>
                  <p className="text-[11px] text-ink-muted font-medium mt-0.5">{cat.count} items</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Deals */}
      {deals.length > 0 && (
        <section className="relative bg-gradient-to-br from-danger/5 via-accent/5 to-transparent rounded-3xl p-6 md:p-8 border border-danger/10">
          <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 bg-danger text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_4px_12px_rgba(214,59,47,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Deal
              </span>
              <div>
                <p className="text-[11px] font-extrabold text-danger uppercase tracking-wider">Limited time</p>
                <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Today&apos;s hottest deals</h2>
              </div>
            </div>
            <Link href="/category/all" className="group text-[13px] text-danger font-extrabold hover:text-danger/80 flex items-center gap-1.5">
              See all deals
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {deals.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* Featured */}
      <section>
        <SectionHeader title="Popular right now" kicker="Trending" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Top rated */}
      <section>
        <SectionHeader title="Top rated by customers" kicker="★ Loved" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {topRated.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Installments */}
      <div className="relative bg-gradient-to-br from-primary-light via-white to-primary-50 rounded-3xl shadow-card overflow-hidden border border-primary/10">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
        <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-extrabold text-primary uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">Flexible payments</span>
            <p className="text-[26px] md:text-[32px] font-black text-ink mt-3 leading-tight tracking-tight">Pay in installments.<br /><span className="text-primary">No interest.</span></p>
            <p className="text-[14px] text-ink-secondary mt-3 leading-relaxed max-w-[440px]">
              Split any purchase over &euro;50 into 3, 6, or 12 monthly payments. No hidden fees. No paperwork.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {[3, 6, 12].map((m) => (
              <div key={m} className="text-center bg-white rounded-2xl px-5 py-5 min-w-[82px] shadow-card border border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all">
                <p className="text-[32px] font-black text-primary leading-none">{m}</p>
                <p className="text-[11px] text-ink-muted font-bold mt-1.5 uppercase tracking-wider">months</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Under €500 */}
      <section>
        <SectionHeader title="Under €500" kicker="Budget" href="/category/all" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {under500.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Newsletter */}
      <div className="relative bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-3xl p-10 md:p-14 text-center text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-[560px] mx-auto">
          <span className="inline-block text-[11px] font-extrabold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">Weekly drop</span>
          <p className="text-[28px] md:text-[36px] font-black mt-4 leading-tight tracking-tight">
            Get the best deals<br />in your inbox.
          </p>
          <p className="text-[14px] text-white/60 mt-3 mb-7">Join 10,000+ tech lovers in Kosovo. Weekly deals. No spam, ever.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-[52px] px-5 rounded-2xl text-[14px] text-ink bg-white focus:outline-none focus:ring-4 focus:ring-accent/30 placeholder:text-ink-muted font-medium"
            />
            <button className="h-[52px] px-8 bg-accent text-white text-[15px] font-extrabold rounded-2xl hover:bg-accent-dark transition-all hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(255,103,0,0.4)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, href, kicker }: { title: string; href?: string; kicker?: string }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div className="flex items-center gap-3">
        <span className="w-1 h-8 bg-accent rounded-full" />
        <div>
          {kicker && <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">{kicker}</p>}
          <h2 className="text-[22px] md:text-[24px] font-black text-ink tracking-tight leading-tight">{title}</h2>
        </div>
      </div>
      {href && (
        <Link href={href} className="group text-[13px] text-primary font-extrabold hover:text-primary-dark flex items-center gap-1.5 pb-1">
          View all
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      )}
    </div>
  );
}
