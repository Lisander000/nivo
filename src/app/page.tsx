import Link from "next/link";
import { categories, getFeaturedProducts, getDeals, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const under500 = products.filter((p) => p.price < 500).slice(0, 4);

  return (
    <div>
      {/* Hero — editorial, full-bleed */}
      <section className="relative border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 md:pt-24 pb-16 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-muted mb-8">Issue 01 — Spring 2026</p>
              <h1 className="font-display text-[56px] md:text-[88px] lg:text-[112px] text-ink leading-[0.92] tracking-tight">
                Objects of<br />
                <span className="italic">quiet</span> desire.
              </h1>
              <p className="text-[15px] text-ink-secondary mt-8 max-w-[480px] leading-relaxed">
                A considered selection of the gadgets worth owning. Verified sellers, local warranty, complimentary delivery across Kosovo.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/category/all"
                  className="group inline-flex items-center gap-3 h-[52px] px-8 bg-ink text-bg text-[12px] uppercase tracking-[0.16em] font-medium rounded-full hover:bg-accent transition-colors"
                >
                  Shop the edit
                  <span className="w-4 h-px bg-bg group-hover:w-8 transition-all" />
                </Link>
                <Link href="/category/all" className="text-[12px] uppercase tracking-[0.16em] text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-ink-faint">
                  Browse all
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-10">
              <div className="grid grid-cols-2 gap-4">
                <Link href="/category/smartphones" className="group block">
                  <div className="aspect-[3/4] bg-primary-light rounded-sm overflow-hidden flex items-end p-5 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.04),transparent_70%)]" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-ink-muted">New</p>
                      <p className="font-display text-[22px] text-ink leading-none mt-1">iPhone 16 Pro</p>
                    </div>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mt-3 group-hover:text-ink transition-colors">View →</p>
                </Link>
                <Link href="/category/gaming" className="group block lg:mt-10">
                  <div className="aspect-[3/4] bg-accent-light rounded-sm overflow-hidden flex items-end p-5 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(200,70,30,0.08),transparent_70%)]" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-accent">Featured</p>
                      <p className="font-display text-[22px] text-ink leading-none mt-1">PlayStation 5</p>
                    </div>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mt-3 group-hover:text-ink transition-colors">View →</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The promise — horizontal typographic row */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["01", "Complimentary delivery", "Across Kosovo, every order"],
            ["02", "Verified sellers", "Every partner KYC-checked"],
            ["03", "Local warranty", "Up to 2 years, claimed here"],
            ["04", "14-day returns", "No questions, no friction"],
          ].map(([n, t, d]) => (
            <div key={n}>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{n}</p>
              <p className="font-display text-[20px] text-ink mt-3 leading-tight">{t}</p>
              <p className="text-[12px] text-ink-secondary mt-1.5">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories — editorial index */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">The Index</p>
              <h2 className="font-display text-[44px] md:text-[60px] text-ink leading-none tracking-tight">Shop by category</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-bg hover:bg-primary-light px-6 py-10 text-center transition-colors group"
              >
                <span className="text-[32px] block mb-4 opacity-80 group-hover:scale-110 transition-transform duration-500 inline-block">{cat.icon}</span>
                <p className="font-display text-[18px] text-ink leading-none">{cat.name}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-ink-muted mt-2">{cat.count} pieces</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <EditorialHeader kicker="The Edit" title="Quietly popular" href="/category/all" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Deals */}
      {deals.length > 0 && (
        <section className="border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
            <EditorialHeader kicker="Limited" title="On offer this week" href="/category/all" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
              {deals.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Editorial break — installments */}
      <section className="border-b border-border bg-primary-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">Flexible payments</p>
              <h2 className="font-display text-[44px] md:text-[64px] text-ink leading-[0.95] tracking-tight">
                Own it <span className="italic">today.</span><br />Pay across months.
              </h2>
              <p className="text-[14px] text-ink-secondary mt-6 max-w-[440px] leading-relaxed">
                Split any purchase over €50 into 3, 6, or 12 monthly payments. No interest. No hidden fees.
              </p>
            </div>
            <div className="lg:col-span-5 flex gap-4">
              {[3, 6, 12].map((m) => (
                <div key={m} className="flex-1 border border-ink/15 rounded-sm px-5 py-8 text-center bg-bg/40">
                  <p className="font-display text-[48px] text-ink leading-none">{m}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-ink-muted mt-3">months</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top rated */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <EditorialHeader kicker="Loved" title="Top rated by customers" href="/category/all" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {topRated.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Under €500 */}
      <section className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <EditorialHeader kicker="Accessible" title="Under €500" href="/category/all" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {under500.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Newsletter — editorial */}
      <section className="bg-ink text-bg">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-24 md:py-32 text-center">
          <p className="text-[10px] uppercase tracking-[0.22em] text-bg/50 mb-6">The dispatch</p>
          <h2 className="font-display text-[44px] md:text-[64px] leading-[0.95] tracking-tight">
            New editions,<br />
            <span className="italic">delivered</span> weekly.
          </h2>
          <p className="text-[14px] text-bg/60 mt-6 max-w-[460px] mx-auto leading-relaxed">
            Join 10,000+ in Kosovo. One curated dispatch per week. Unsubscribe any time.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-[52px] px-6 rounded-full text-[13px] text-bg bg-transparent border border-bg/20 focus:outline-none focus:border-bg placeholder:text-bg/40"
            />
            <button className="h-[52px] px-8 bg-bg text-ink text-[12px] uppercase tracking-[0.16em] font-medium rounded-full hover:bg-accent hover:text-bg transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function EditorialHeader({ kicker, title, href }: { kicker: string; title: string; href?: string }) {
  return (
    <div className="flex items-end justify-between mb-14">
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">{kicker}</p>
        <h2 className="font-display text-[44px] md:text-[60px] text-ink leading-none tracking-tight">{title}</h2>
      </div>
      {href && (
        <Link href={href} className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-secondary hover:text-ink transition-colors pb-3">
          View all
          <span className="w-6 h-px bg-ink-secondary" />
        </Link>
      )}
    </div>
  );
}
