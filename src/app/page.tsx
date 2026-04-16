import Link from "next/link";
import { primaryCategories, getFeaturedProducts, getDeals, products } from "@/data/products";
import { testimonials } from "@/data/community";
import ProductCard from "@/components/ProductCard";
import ProductRail from "@/components/ProductRail";
import { AvatarStack } from "@/components/Avatar";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const under500 = products.filter((p) => p.price < 500).slice(0, 10);
  const communityNames = testimonials.map((t) => t.name);

  // Bol.com-style brand tiles — mix of categories
  const brands = [
    { name: "IKEA", bg: "bg-[#0058A3]", text: "text-[#FFDB00]" },
    { name: "Apple", bg: "bg-[#F5F5F7]", text: "text-ink" },
    { name: "Zara", bg: "bg-black", text: "text-white" },
    { name: "LEGO", bg: "bg-[#FFCF00]", text: "text-[#E3000B]" },
    { name: "Dyson", bg: "bg-[#FFD100]", text: "text-ink" },
    { name: "Samsung", bg: "bg-[#1428A0]", text: "text-white" },
    { name: "Nike", bg: "bg-black", text: "text-white" },
    { name: "L'Oréal", bg: "bg-white", text: "text-ink" },
    { name: "Philips", bg: "bg-[#0A5EA4]", text: "text-white" },
    { name: "Adidas", bg: "bg-white", text: "text-ink" },
    { name: "Bosch", bg: "bg-[#E20015]", text: "text-white" },
    { name: "Sony", bg: "bg-black", text: "text-white" },
    { name: "H&M", bg: "bg-[#E50010]", text: "text-white" },
    { name: "Nivea", bg: "bg-[#002D6F]", text: "text-white" },
    { name: "Tefal", bg: "bg-[#E30613]", text: "text-white" },
    { name: "Nintendo", bg: "bg-[#E60012]", text: "text-white" },
    { name: "Maybelline", bg: "bg-[#0F1A4E]", text: "text-white" },
    { name: "Logitech", bg: "bg-white", text: "text-ink" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-5 lg:py-6 space-y-8 lg:space-y-10">
      {/* ═══════════════════════════════════════════════════════
          HERO — bol.com style: 1 wide banner + 2 stacked tiles
          ═══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-3 lg:gap-4">
        {/* Main hero banner — light, bright, bol-style */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8F1FF] via-[#F4F7FF] to-[#FFE8D6] min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
          <div className="relative h-full p-5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center max-w-[560px]">
            <div className="inline-flex self-start items-center gap-2 bg-white rounded-full pl-1.5 pr-4 py-1 mb-5 shadow-sm">
              <span className="flex items-center gap-1 bg-danger text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-white" />
                Sale
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-ink">Spring sale · Up to −50%</span>
            </div>
            <h1 className="text-[26px] sm:text-[34px] md:text-[48px] lg:text-[56px] font-black leading-[0.95] mb-4 tracking-[-0.02em] text-ink">
              Everything <span className="text-primary">you want.</span><br />
              <span className="text-accent">Delivered tomorrow.</span>
            </h1>
            <p className="text-[14px] md:text-[15px] text-ink-secondary mb-7 max-w-[440px] leading-relaxed font-medium">
              200,000+ products across 30 categories. Fashion, home, beauty, electronics, toys, books &amp; more. Free next-day delivery.
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
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
          <Link href="/category/fashion" className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F472B6] to-[#BE185D] text-white p-4 sm:p-6 lg:p-7 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover min-h-[140px] sm:min-h-[190px]">
            <div className="relative">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">New season</span>
              <p className="text-[16px] sm:text-[24px] font-black mt-2 sm:mt-3 leading-tight">Spring Fashion</p>
              <p className="text-[12px] text-white/80 mt-1 font-medium">24,000+ looks for him &amp; her</p>
              <span className="inline-flex items-center gap-1 text-[12px] font-extrabold mt-4 text-white group-hover:gap-2 transition-all">
                Shop now
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
            </div>
          </Link>
          <Link href="/category/home-living" className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-[#E05A00] text-white p-4 sm:p-6 lg:p-7 hover:-translate-y-0.5 transition-all shadow-card hover:shadow-card-hover min-h-[140px] sm:min-h-[190px]">
            <div className="relative">
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-white uppercase tracking-wider bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                Hot −30%
              </span>
              <p className="text-[16px] sm:text-[24px] font-black mt-2 sm:mt-3 leading-tight">Home refresh</p>
              <p className="text-[12px] text-white/80 mt-1 font-medium">Furniture, decor &amp; lighting</p>
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
          {primaryCategories.map((cat, i) => {
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
                  <span className="text-[44px] lg:text-[48px] group-hover:scale-105 transition-transform duration-300">{cat.icon}</span>
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
          { title: "Pay in 3", sub: "Interest-free", bg: "bg-gradient-to-br from-primary to-[#0039AA]", text: "text-white", accent: "text-accent", href: "/help", iconPath: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" },
          { title: "Free returns", sub: "14 days, no drama", bg: "bg-gradient-to-br from-success to-[#0E7A52]", text: "text-white", accent: "text-white/70", href: "/returns", iconPath: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" },
          { title: "Kahsya Business", sub: "Tech for teams", bg: "bg-gradient-to-br from-ink to-[#0F172A]", text: "text-white", accent: "text-accent", href: "/business", iconPath: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" },
          { title: "Sell on Kahsya", sub: "150+ partners", bg: "bg-gradient-to-br from-accent to-[#D65400]", text: "text-white", accent: "text-white/70", href: "/partners", iconPath: "M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" },
        ].map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className={`group relative rounded-2xl p-4 sm:p-5 ${p.bg} ${p.text} overflow-hidden hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover`}
          >
            <div className="absolute -right-2 -bottom-2 opacity-[0.08]">
              <svg className="w-[56px] h-[56px] sm:w-[80px] sm:h-[80px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d={p.iconPath} /></svg>
            </div>
            <div className="relative">
              <p className="text-[13px] sm:text-[16px] font-black leading-tight">{p.title}</p>
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
            kicker="Limited time"
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
        href="/category/all"
        className="relative block rounded-3xl overflow-hidden bg-gradient-to-r from-[#FFE8D6] via-[#FFF4E8] to-[#E8F1FF] p-5 sm:p-8 md:p-10 lg:p-12 group hover:shadow-card-hover transition-all shadow-card"
      >
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div className="max-w-[560px]">
            <span className="inline-block text-[10px] font-extrabold text-accent uppercase tracking-[0.15em] bg-white px-3 py-1 rounded-full shadow-sm">Spring Sale</span>
            <p className="text-[22px] sm:text-[26px] md:text-[36px] font-black text-ink mt-3 leading-[1.05] tracking-tight">
              Up to −50% off,<br />
              <span className="text-primary">across every aisle.</span>
            </p>
            <p className="text-[13px] md:text-[14px] text-ink-secondary mt-3 font-medium">
              Fashion, home, beauty, electronics, toys, garden — the whole marketplace. Until April 30.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 h-[44px] sm:h-[52px] px-5 sm:px-7 rounded-xl bg-primary text-white text-[13px] sm:text-[14px] font-extrabold shadow-[0_6px_20px_rgba(0,70,190,0.3)] group-hover:shadow-[0_10px_28px_rgba(0,70,190,0.4)] group-hover:-translate-y-0.5 transition-all flex-shrink-0 self-start md:self-center whitespace-nowrap">
            Shop the sale
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </div>
        </div>
      </Link>

      {/* ═══════════════════════════════════════════════════════
          BRAND GRID — bol.com style brand tiles
          ═══════════════════════════════════════════════════════ */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Verified partners</p>
            <h2 className="text-[17px] sm:text-[20px] md:text-[24px] font-black text-ink tracking-tight leading-tight">Brands you love, all in one place</h2>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {brands.map((b) => (
            <Link
              key={b.name}
              href={`/category/all?q=${encodeURIComponent(b.name)}`}
              className={`group h-[64px] sm:h-[84px] rounded-xl sm:rounded-2xl ${b.bg} ${b.text} flex items-center justify-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all border border-border/40 relative overflow-hidden`}
            >
              <span className="text-[13px] sm:text-[18px] font-black tracking-tight relative z-10">{b.name}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
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
        <div className="relative p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-5 sm:gap-8">
          <div className="flex-1">
            <span className="inline-block text-[11px] font-extrabold text-primary uppercase tracking-wider bg-white px-3 py-1 rounded-full shadow-sm">Flexible payments</span>
            <p className="text-[22px] sm:text-[26px] md:text-[32px] font-black text-ink mt-3 leading-tight tracking-tight">Pay in installments.<br /><span className="text-primary">No interest.</span></p>
            <p className="text-[14px] text-ink-secondary mt-3 leading-relaxed max-w-[440px]">
              Split any purchase over €50 into 3, 6, or 12 monthly payments. No hidden fees. No paperwork.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            {[3, 6, 12].map((m) => (
              <div key={m} className="text-center bg-white rounded-2xl px-3 sm:px-5 py-4 sm:py-5 min-w-[68px] sm:min-w-[82px] shadow-card border border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all">
                <p className="text-[24px] sm:text-[32px] font-black text-primary leading-none">{m}</p>
                <p className="text-[11px] text-ink-muted font-bold mt-1.5 uppercase tracking-wider">months</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          NEWSLETTER
          ═══════════════════════════════════════════════════════ */}
      <div className="relative bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-3xl p-6 sm:p-10 md:p-14 text-center text-white overflow-hidden">
        <div className="relative max-w-[560px] mx-auto">
          <span className="inline-block text-[11px] font-extrabold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">Weekly drop</span>
          <p className="text-[22px] sm:text-[28px] md:text-[36px] font-black mt-4 leading-tight tracking-tight">
            Get the best deals<br />in your inbox.
          </p>
          <p className="text-[14px] text-white/60 mt-3 mb-7">Join 50,000+ shoppers in Kosovo. Weekly deals across every category. No spam, ever.</p>
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
