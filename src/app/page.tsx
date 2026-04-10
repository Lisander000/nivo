import Link from "next/link";
import { categories, getFeaturedProducts, getDeals, products } from "@/data/products";
import { testimonials, instagramPosts } from "@/data/community";
import ProductCard from "@/components/ProductCard";
import ProductRail from "@/components/ProductRail";
import TestimonialCard from "@/components/TestimonialCard";
import LiveActivity from "@/components/LiveActivity";
import { AvatarStack } from "@/components/Avatar";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const under500 = products.filter((p) => p.price < 500).slice(0, 10);
  const newIn = [...products].slice(0, 10);
  const communityNames = testimonials.map((t) => t.name);

  // Bol.com-style brand tiles
  const brands = [
    { name: "Apple", bg: "bg-[#F5F5F7]", text: "text-ink", logo: "" },
    { name: "Samsung", bg: "bg-[#1428A0]", text: "text-white", logo: "" },
    { name: "Sony", bg: "bg-black", text: "text-white", logo: "" },
    { name: "Xiaomi", bg: "bg-[#FF6700]", text: "text-white", logo: "" },
    { name: "Logitech", bg: "bg-white", text: "text-ink", logo: "" },
    { name: "JBL", bg: "bg-[#FF3300]", text: "text-white", logo: "" },
    { name: "Nintendo", bg: "bg-[#E60012]", text: "text-white", logo: "" },
    { name: "Bose", bg: "bg-[#141414]", text: "text-white", logo: "" },
    { name: "HP", bg: "bg-[#0096D6]", text: "text-white", logo: "" },
    { name: "Lenovo", bg: "bg-[#E2231A]", text: "text-white", logo: "" },
    { name: "Dyson", bg: "bg-[#FFD100]", text: "text-ink", logo: "" },
    { name: "Canon", bg: "bg-[#CC0000]", text: "text-white", logo: "" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-5 lg:py-6 space-y-8 lg:space-y-10">
      {/* ═══════════════════════════════════════════════════════
          HERO — bol.com style: 1 wide banner + 2 stacked tiles
          ═══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-3 lg:gap-4">
        {/* Main hero banner — light, bright, bol-style */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8F1FF] via-[#F4F7FF] to-[#FFE8D6] min-h-[340px] lg:min-h-[400px] group">
          {/* Decorative pattern */}
          <div className="absolute -top-20 -right-16 w-[380px] h-[380px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-[320px] h-[320px] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute top-8 right-8 text-[200px] lg:text-[260px] leading-none opacity-[0.12] select-none pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">📱</div>

          <div className="relative h-full p-8 md:p-12 lg:p-14 flex flex-col justify-center max-w-[560px]">
            <div className="inline-flex self-start items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1 mb-5 shadow-sm">
              <span className="flex items-center gap-1 bg-danger text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Deals
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink">Tech week · Up to −40%</span>
            </div>
            <h1 className="text-[34px] md:text-[48px] lg:text-[56px] font-black leading-[0.95] mb-4 tracking-[-0.02em] text-ink">
              Tech you love,<br />
              <span className="text-primary">prices you&apos;ll</span><br />
              <span className="text-accent">love more.</span>
            </h1>
            <p className="text-[14px] md:text-[15px] text-ink-secondary mb-7 max-w-[420px] leading-relaxed font-medium">
              15,000+ gadgets. 150+ verified sellers. Free delivery tomorrow across Kosovo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/category/all"
                className="group/btn inline-flex items-center gap-2 h-[48px] px-7 bg-primary text-white text-[14px] font-extrabold rounded-xl hover:bg-primary-dark transition-all active:scale-[0.97] shadow-[0_6px_20px_rgba(0,70,190,0.3)] hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] hover:-translate-y-0.5"
              >
                Shop the deals
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/category/all"
                className="inline-flex items-center h-[48px] px-6 bg-white text-ink text-[14px] font-bold rounded-xl hover:bg-white/80 transition-all shadow-sm border border-border"
              >
                Browse catalog
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <AvatarStack names={communityNames} size={28} max={4} />
              <p className="text-[11px] text-ink-muted font-bold">
                <span className="text-ink font-black">50,000+</span> shoppers from Kosovo
              </p>
            </div>
          </div>
        </div>

        {/* Right: 2 stacked promo tiles */}
        <div className="grid grid-cols-1 gap-3 lg:gap-4">
          <Link href="/category/smartphones" className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-[#003AAA] text-white p-6 lg:p-7 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover min-h-[190px]">
            <div className="absolute -right-6 -bottom-6 text-[160px] leading-none opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">📱</div>
            <div className="relative">
              <span className="inline-block text-[10px] font-extrabold text-accent uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">New in</span>
              <p className="text-[24px] font-black mt-3 leading-tight">iPhone 16 Pro</p>
              <p className="text-[12px] text-white/70 mt-1 font-medium">From <span className="text-white font-black">€1.199,-</span></p>
              <span className="inline-flex items-center gap-1 text-[12px] font-extrabold mt-4 text-accent group-hover:gap-2 transition-all">
                Shop now
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
          <Link href="/category/gaming" className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-[#E05A00] text-white p-6 lg:p-7 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover min-h-[190px]">
            <div className="absolute -right-6 -bottom-6 text-[160px] leading-none opacity-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">🎮</div>
            <div className="relative">
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-white uppercase tracking-wider bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                Hot −20%
              </span>
              <p className="text-[24px] font-black mt-3 leading-tight">PlayStation 5</p>
              <p className="text-[12px] text-white/75 mt-1 font-medium"><span className="text-white font-black">€499,-</span> · free delivery</p>
              <span className="inline-flex items-center gap-1 text-[12px] font-extrabold mt-4 text-white group-hover:gap-2 transition-all">
                Shop now
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CATEGORY CIRCLES — bol.com's signature row
          ═══════════════════════════════════════════════════════ */}
      <div className="relative -mx-4 lg:mx-0">
        <div className="flex lg:grid lg:grid-cols-6 gap-3 lg:gap-4 overflow-x-auto px-4 lg:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {categories.map((cat, i) => {
            const tints = [
              "from-blue-100 to-blue-200",
              "from-orange-100 to-orange-200",
              "from-purple-100 to-purple-200",
              "from-pink-100 to-pink-200",
              "from-green-100 to-green-200",
              "from-cyan-100 to-cyan-200",
            ];
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group flex-shrink-0 w-[110px] lg:w-auto flex flex-col items-center snap-start"
              >
                <div className={`w-[86px] h-[86px] lg:w-[96px] lg:h-[96px] rounded-full bg-gradient-to-br ${tints[i % tints.length]} flex items-center justify-center shadow-sm group-hover:shadow-card-hover group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                  <span className="text-[44px] lg:text-[48px] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">{cat.icon}</span>
                </div>
                <p className="text-[12px] font-extrabold text-ink mt-2.5 text-center">{cat.name}</p>
                <p className="text-[10px] text-ink-muted font-semibold">{cat.count} items</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          PROMO STRIP — 4 colorful tiles bol-style
          ═══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { title: "Pay in 3", sub: "Interest-free", bg: "bg-gradient-to-br from-primary to-[#0039AA]", text: "text-white", accent: "text-accent", href: "/help", icon: "💳" },
          { title: "Free returns", sub: "14 days, no drama", bg: "bg-gradient-to-br from-success to-[#0E7A52]", text: "text-white", accent: "text-white/70", href: "/returns", icon: "↩️" },
          { title: "Nivo Business", sub: "Tech for teams", bg: "bg-gradient-to-br from-ink to-[#0F172A]", text: "text-white", accent: "text-accent", href: "/business", icon: "💼" },
          { title: "Sell on Nivo", sub: "150+ partners", bg: "bg-gradient-to-br from-accent to-[#D65400]", text: "text-white", accent: "text-white/70", href: "/sell", icon: "🚀" },
        ].map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className={`group relative rounded-2xl p-5 ${p.bg} ${p.text} overflow-hidden hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover`}
          >
            <div className="absolute -right-2 -bottom-2 text-[80px] leading-none opacity-20 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">{p.icon}</div>
            <div className="relative">
              <p className="text-[16px] font-black leading-tight">{p.title}</p>
              <p className={`text-[11px] font-bold mt-0.5 ${p.accent}`}>{p.sub}</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold mt-3 group-hover:gap-1.5 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════
          DEALS RAIL — horizontal scrolling, deal tint
          ═══════════════════════════════════════════════════════ */}
      {deals.length > 0 && (
        <div className="relative bg-gradient-to-br from-danger/5 via-accent/5 to-transparent rounded-3xl p-5 md:p-6 lg:p-7 border border-danger/10">
          <ProductRail
            title="Today's hottest deals"
            kicker="⚡ Limited time"
            href="/category/all"
            accent="danger"
            trailing={
              <div className="hidden lg:flex items-center gap-1 bg-white border border-danger/20 rounded-full px-3 py-1.5 mr-1">
                <svg className="w-3.5 h-3.5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                <span className="text-[11px] font-extrabold text-danger uppercase tracking-wider">Ends in 8h 24m</span>
              </div>
            }
          >
            {deals.map((p) => (
              <div key={p.id} className="w-[180px] md:w-[220px] flex-shrink-0 snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </ProductRail>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════
          POPULAR RAIL
          ═══════════════════════════════════════════════════════ */}
      <ProductRail title="Popular right now" kicker="Trending" href="/category/all">
        {featured.map((p) => (
          <div key={p.id} className="w-[180px] md:w-[220px] flex-shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </ProductRail>

      {/* ═══════════════════════════════════════════════════════
          FULL-WIDTH PROMO BANNER — student discount
          ═══════════════════════════════════════════════════════ */}
      <Link
        href="/category/laptops"
        className="relative block rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFE8D6] via-[#FFF4E8] to-[#E8F1FF] p-8 md:p-10 lg:p-12 group hover:shadow-card-hover transition-all shadow-card"
      >
        <div className="absolute -right-10 -top-10 text-[220px] leading-none opacity-15 select-none pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700">💻</div>
        <div className="absolute -left-16 -bottom-16 w-[280px] h-[280px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div className="max-w-[560px]">
            <span className="inline-block text-[10px] font-extrabold text-accent uppercase tracking-[0.15em] bg-white px-3 py-1 rounded-full shadow-sm">Student Week</span>
            <p className="text-[26px] md:text-[36px] font-black text-ink mt-3 leading-[1.05] tracking-tight">
              15% off all laptops<br />
              <span className="text-primary">with valid student ID.</span>
            </p>
            <p className="text-[13px] md:text-[14px] text-ink-secondary mt-3 font-medium">
              MacBooks, Windows laptops, Chromebooks — all in. Until March 31.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl bg-primary text-white text-[14px] font-extrabold shadow-[0_6px_20px_rgba(0,70,190,0.3)] group-hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] group-hover:-translate-y-0.5 transition-all flex-shrink-0 self-start md:self-center whitespace-nowrap">
            Claim discount
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </div>
        </div>
      </Link>

      {/* ═══════════════════════════════════════════════════════
          NEW IN RAIL
          ═══════════════════════════════════════════════════════ */}
      <ProductRail title="New arrivals" kicker="Just dropped" href="/category/all" accent="accent">
        {newIn.map((p) => (
          <div key={p.id} className="w-[180px] md:w-[220px] flex-shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </ProductRail>

      {/* ═══════════════════════════════════════════════════════
          BRAND GRID — bol.com style brand tiles
          ═══════════════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Verified partners</p>
            <h2 className="text-[20px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Top brands on Nivo</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={`/category/all?q=${encodeURIComponent(b.name)}`}
              className={`group h-[84px] rounded-2xl ${b.bg} ${b.text} flex items-center justify-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all border border-border/40 relative overflow-hidden`}
            >
              <span className="text-[18px] font-black tracking-tight relative z-10">{b.name}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TOP RATED RAIL
          ═══════════════════════════════════════════════════════ */}
      <ProductRail title="Top rated by customers" kicker="★ Loved" href="/category/all">
        {topRated.map((p) => (
          <div key={p.id} className="w-[180px] md:w-[220px] flex-shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </ProductRail>

      {/* ═══════════════════════════════════════════════════════
          TRUST BAR — inline stats
          ═══════════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════════
          COMMUNITY — testimonials
          ═══════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="flex items-end justify-between mb-5 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <div>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Real people · Real reviews</p>
              <h2 className="text-[20px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Loved by Kosovo</h2>
            </div>
          </div>
          <div className="hidden md:block">
            <LiveActivity />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Link href="/community" className="group inline-flex items-center gap-1.5 text-primary font-extrabold hover:text-primary-dark text-[13px]">
            Read 12,000+ reviews
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          UNDER €500 RAIL
          ═══════════════════════════════════════════════════════ */}
      <ProductRail title="Under €500" kicker="Budget picks" href="/category/all" accent="accent">
        {under500.map((p) => (
          <div key={p.id} className="w-[180px] md:w-[220px] flex-shrink-0 snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </ProductRail>

      {/* ═══════════════════════════════════════════════════════
          INSTALLMENTS BANNER
          ═══════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-br from-primary-light via-white to-primary-50 rounded-3xl shadow-card overflow-hidden border border-primary/10">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-primary/10 blur-2xl" />
        <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-extrabold text-primary uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">Flexible payments</span>
            <p className="text-[26px] md:text-[32px] font-black text-ink mt-3 leading-tight tracking-tight">Pay in installments.<br /><span className="text-primary">No interest.</span></p>
            <p className="text-[14px] text-ink-secondary mt-3 leading-relaxed max-w-[440px]">
              Split any purchase over €50 into 3, 6, or 12 monthly payments. No hidden fees. No paperwork.
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

      {/* ═══════════════════════════════════════════════════════
          INSTAGRAM WALL — community tail
          ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-pink-50 rounded-3xl p-6 md:p-10 border border-primary/10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[280px] h-[280px] rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full" />
              <div>
                <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">#NivoKS on Instagram</p>
                <h2 className="text-[20px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Tag us. Get featured.</h2>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[44px] px-5 bg-white text-ink text-[13px] font-extrabold rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all border border-border"
            >
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════ */}
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
