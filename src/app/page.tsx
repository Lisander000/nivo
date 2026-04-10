import Link from "next/link";
import { categories, getFeaturedProducts, getDeals, products } from "@/data/products";
import { testimonials, instagramPosts } from "@/data/community";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import LiveActivity from "@/components/LiveActivity";
import { AvatarStack } from "@/components/Avatar";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const under500 = products.filter((p) => p.price < 500).slice(0, 4);
  const communityNames = testimonials.map((t) => t.name);

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

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-7">
              <AvatarStack names={communityNames} size={34} />
              <div className="flex items-center gap-2">
                <div className="flex gap-[1px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[12px] text-white/80 font-semibold">
                  <span className="font-black text-white">4.8</span>
                  <span className="text-white/50"> · </span>
                  <span className="font-black text-white">50,000+</span> shoppers from Kosovo
                </p>
              </div>
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

      {/* Community testimonials */}
      <section className="relative">
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Real people · Real reviews</p>
              <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Loved by Kosovo</h2>
            </div>
          </div>
          <div className="hidden md:block">
            <LiveActivity />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-ink-muted font-semibold">
          <Link href="/community" className="group inline-flex items-center gap-1.5 text-primary font-extrabold hover:text-primary-dark">
            Read 12,000+ reviews
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Instagram / community wall */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-pink-50 rounded-3xl p-6 md:p-10 border border-primary/10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full" />
              <div>
                <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">#NivoKS on Instagram</p>
                <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Tag us. Get featured.</h2>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[44px] px-5 bg-white text-ink text-[13px] font-extrabold rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all border border-border"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @nivo.ks
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-[64px] md:text-[72px] group-hover:scale-110 transition-transform duration-500">
                  {post.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[11px] font-extrabold truncate">@{post.author}</p>
                  <p className="text-[10px] font-medium text-white/80 line-clamp-2 leading-tight mt-0.5">{post.caption}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-[10px] font-bold">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" clipRule="evenodd" /></svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-ink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
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
