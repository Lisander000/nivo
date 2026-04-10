"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductById, getRelatedProducts, getBundleProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/format";

type Tab = "description" | "specs" | "reviews" | "questions";
type ReviewFilter = "all" | 5 | 4 | 3 | 2 | 1;

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [bundleChecked, setBundleChecked] = useState<Set<string>>(new Set());
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20 text-center">
        <p className="text-[16px] font-bold text-ink mb-2">Product not found</p>
        <Link href="/category/all" className="text-[13px] text-primary hover:underline">Browse all products</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 6);
  const bundles = getBundleProducts(product);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  const ratingBars = [
    { stars: 5, pct: 68, count: Math.round(product.reviews * 0.68) },
    { stars: 4, pct: 22, count: Math.round(product.reviews * 0.22) },
    { stars: 3, pct: 7, count: Math.round(product.reviews * 0.07) },
    { stars: 2, pct: 2, count: Math.round(product.reviews * 0.02) },
    { stars: 1, pct: 1, count: Math.round(product.reviews * 0.01) },
  ];

  const filteredReviews = product.reviewsList.filter(r => {
    if (reviewFilter !== "all" && r.rating !== reviewFilter) return false;
    if (verifiedOnly && !r.verified) return false;
    return true;
  });

  const toggleBundle = (id: string) => {
    setBundleChecked(prev => { const n = new Set(prev); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  };

  const bundleTotal = product.price + bundles.reduce((s, b) =>
    s + (bundleChecked.has(b.product.id) ? Math.round(b.product.price * (1 - b.discount / 100)) : 0), 0);

  const handleAddToCart = () => { for (let i = 0; i < qty; i++) addToCart(product); };

  const scrollToTabs = (tab: Tab) => {
    setActiveTab(tab);
    document.getElementById("product-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 pb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-ink-muted mb-12 flex-wrap">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <span className="text-ink-faint">/</span>
        <Link href={`/category/${product.categorySlug}`} className="hover:text-ink transition-colors">{product.category}</Link>
        <span className="text-ink-faint">/</span>
        <span className="text-ink truncate max-w-[300px]">{product.name}</span>
      </nav>

      {/* MAIN — 2 column: gallery + info/buy */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20">
        {/* LEFT: IMAGE GALLERY */}
        <div>
          <div className="flex gap-3">
            {/* Vertical thumbs */}
            {product.images.length > 1 && (
              <div className="hidden lg:flex flex-col gap-2 flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setSelectedImage(i)}
                    onClick={() => setSelectedImage(i)}
                    className={`w-[72px] h-[72px] overflow-hidden bg-primary-light transition-all ${
                      selectedImage === i ? "ring-1 ring-ink" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="flex-1 relative group">
              <div className="aspect-[4/5] bg-primary-light overflow-hidden flex items-center justify-center p-10 md:p-16">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {discount > 0 && (
                <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.16em] text-accent">
                  −{discount}%
                </div>
              )}

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-all active:scale-95"
                aria-label="Add to wishlist"
              >
                <svg className={`w-5 h-5 ${wishlisted ? "text-accent fill-accent" : "text-ink-secondary"}`} fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile thumbnails */}
          {product.images.length > 1 && (
            <div className="lg:hidden flex gap-2 mt-4 overflow-x-auto no-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-[60px] h-[60px] rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: PRODUCT INFO + BUY */}
        <div className="lg:sticky lg:top-[140px] lg:self-start">
          {/* Brand */}
          <Link href={`/category/${product.categorySlug}`} className="text-[10px] uppercase tracking-[0.2em] text-ink-muted hover:text-ink transition-colors">{product.brand}</Link>

          {/* Title */}
          <h1 className="font-display text-[40px] md:text-[48px] text-ink leading-[0.98] tracking-tight mt-4">{product.name}</h1>

          {/* Rating */}
          <button onClick={() => scrollToTabs("reviews")} className="flex items-center gap-2 mt-5 text-[11px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink transition-colors">
            <span>★ {product.rating}</span>
            <span className="text-ink-faint">·</span>
            <span>{product.reviews} reviews</span>
          </button>

          {/* Short description */}
          <p className="text-[13px] text-ink-secondary leading-[1.75] mt-6 max-w-[380px]">{product.description}</p>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Price */}
          <div>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[44px] text-ink leading-none tabular-nums">€{product.price}</span>
              {product.originalPrice && (
                <span className="text-[14px] text-ink-muted line-through tabular-nums">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {savings > 0 && (
              <p className="text-[11px] uppercase tracking-[0.14em] text-accent mt-3">You save €{savings}</p>
            )}
            <p className="text-[11px] text-ink-muted mt-2">
              Or €{Math.ceil(product.price / 12)} / month — 0% interest
            </p>
          </div>

          {/* Key features — minimal */}
          <ul className="mt-8 space-y-2.5">
            {product.highlights.slice(0, 4).map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-[12px] text-ink-secondary leading-relaxed">
                <span className="w-3 h-px bg-ink-muted mt-2 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Quantity + CTA */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center border border-border rounded-full h-[52px]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-full flex items-center justify-center text-ink-muted hover:text-ink transition-colors">−</button>
              <span className="w-8 text-center text-[13px] text-ink tabular-nums">{qty}</span>
              <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-11 h-full flex items-center justify-center text-ink-muted hover:text-ink transition-colors">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 h-[52px] bg-ink hover:bg-accent text-bg text-[11px] uppercase tracking-[0.16em] font-medium rounded-full transition-colors active:scale-[0.98]"
            >
              Add to bag
            </button>
          </div>

          {/* Delivery + stock */}
          <div className="mt-6 text-[11px] uppercase tracking-[0.14em] text-ink-muted flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full ${product.stockCount && product.stockCount <= 5 ? "bg-accent" : "bg-success"}`} />
            <span>
              {product.stockCount && product.stockCount <= 5 ? `Only ${product.stockCount} remaining` : "In stock"}
            </span>
            <span className="text-ink-faint">·</span>
            <span>{product.deliveryDays <= 1 ? "Delivered tomorrow" : `In ${product.deliveryDays} days`}</span>
          </div>

          {/* Seller + trust */}
          <div className="mt-10 pt-8 border-t border-border space-y-3 text-[11px] text-ink-muted">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-[0.14em]">Seller</span>
              <span className="text-ink">{product.seller} · {product.sellerRating}★</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-[0.14em]">Warranty</span>
              <span className="text-ink">{product.warranty}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-[0.14em]">Returns</span>
              <span className="text-ink">14 days, complimentary</span>
            </div>
          </div>
        </div>
      </div>

      {/* FREQUENTLY BOUGHT TOGETHER */}
      {bundles.length > 0 && (
        <section className="mt-24 pt-16 border-t border-border">
          <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-4">Curated pairings</p>
          <h2 className="font-display text-[36px] md:text-[44px] text-ink leading-none tracking-tight mb-10">Complete the set</h2>
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="flex items-center gap-3 flex-wrap flex-1">
              <div className="text-center">
                <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden bg-[#FAFBFD] border-2 border-primary">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-[11px] text-ink-muted mt-2 font-semibold">This item</p>
                <p className="text-[12px] font-bold text-ink">€{product.price},-</p>
              </div>
              {bundles.map(b => (
                <div key={b.product.id} className="flex items-center gap-3">
                  <span className="text-[28px] text-ink-faint font-light">+</span>
                  <button onClick={() => toggleBundle(b.product.id)} className="text-center group">
                    <div className={`w-[100px] h-[100px] rounded-2xl overflow-hidden bg-[#FAFBFD] border-2 transition-all ${bundleChecked.has(b.product.id) ? "border-primary" : "border-border opacity-60 group-hover:opacity-100"}`}>
                      <img src={b.product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-1 justify-center mt-2">
                      <input type="checkbox" checked={bundleChecked.has(b.product.id)} readOnly className="w-3.5 h-3.5 accent-primary rounded" />
                      <span className="text-[11px] text-ink-secondary font-semibold truncate max-w-[80px]">{b.product.brand}</span>
                    </div>
                    <p className="text-[12px] font-bold text-ink">€{Math.round(b.product.price * (1 - b.discount / 100))},-</p>
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:ml-auto min-w-[240px] w-full lg:w-auto lg:pl-10 lg:border-l lg:border-border">
              <p className="text-[10px] uppercase tracking-[0.16em] text-ink-muted">Total</p>
              <p className="font-display text-[40px] text-ink leading-none mt-2 tabular-nums">€{bundleTotal}</p>
              <button
                onClick={() => { addToCart(product); bundles.forEach(b => { if (bundleChecked.has(b.product.id)) addToCart(b.product); }); }}
                className="w-full h-[48px] mt-6 bg-ink hover:bg-accent text-bg text-[11px] uppercase tracking-[0.16em] font-medium rounded-full transition-colors"
              >
                Add bundle
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TABS */}
      <section id="product-tabs" className="mt-24 pt-16 border-t border-border scroll-mt-[140px]">
        <div className="flex gap-10 border-b border-border overflow-x-auto no-scrollbar">
          {([
            ["description", "Description"],
            ["specs", "Specifications"],
            ["reviews", `Reviews (${product.reviews})`],
            ["questions", `Questions (${product.faq.length})`],
          ] as const).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-5 text-[11px] uppercase tracking-[0.16em] border-b -mb-px transition-colors whitespace-nowrap ${
                activeTab === tab ? "border-ink text-ink" : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="py-12">
          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="max-w-[680px] space-y-10">
              <p className="text-[15px] text-ink-secondary leading-[1.8]">{product.description}</p>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-5">Highlights</h3>
                <ul className="space-y-3">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-4 text-[14px] text-ink-secondary leading-relaxed">
                      <span className="text-[11px] tabular-nums text-ink-muted mt-1">0{i + 1}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-5">In the box</h3>
                <ul className="space-y-2 text-[14px] text-ink-secondary">
                  <li>1 × {product.name}</li>
                  <li>1 × USB-C cable</li>
                  <li>1 × Quick start guide</li>
                  <li>1 × Warranty card</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-5">Warranty</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">
                  {product.warranty}, claimable locally through our partner network in Kosovo.
                </p>
              </div>
            </div>
          )}

          {/* SPECIFICATIONS */}
          {activeTab === "specs" && (
            <div className="max-w-[680px]">
              <dl className="divide-y divide-border">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex py-4 text-[13px]">
                    <dt className="w-[220px] text-[11px] uppercase tracking-[0.14em] text-ink-muted flex-shrink-0">{key}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <p className="font-display text-[88px] text-ink leading-none">{product.rating}</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-muted mt-3">Out of 5 · {product.reviews} reviews</p>
                <div className="space-y-3 mt-8">
                  {ratingBars.map(r => (
                    <button key={r.stars} onClick={() => setReviewFilter(r.stars as ReviewFilter)} className="w-full flex items-center gap-3 text-[11px] hover:opacity-70 transition-opacity">
                      <span className="w-3 text-ink-muted text-right tabular-nums">{r.stars}</span>
                      <div className="flex-1 h-px bg-border relative overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="w-10 text-right text-ink-muted tabular-nums">{r.count}</span>
                    </button>
                  ))}
                </div>
                <button className="mt-8 text-[11px] uppercase tracking-[0.16em] text-ink hover:text-accent transition-colors underline underline-offset-4 decoration-ink-faint">
                  Write a review
                </button>
              </div>

              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-8 flex-wrap">
                  <button onClick={() => setReviewFilter("all")} className={`text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-colors ${reviewFilter === "all" ? "bg-ink text-bg border-ink" : "border-border text-ink-secondary hover:border-ink"}`}>All</button>
                  {([5, 4, 3, 2, 1] as const).map(s => (
                    <button key={s} onClick={() => setReviewFilter(s)} className={`text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border transition-colors ${reviewFilter === s ? "bg-ink text-bg border-ink" : "border-border text-ink-secondary hover:border-ink"}`}>
                      {s} ★
                    </button>
                  ))}
                  <label className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-ink-secondary cursor-pointer ml-2">
                    <input type="checkbox" checked={verifiedOnly} onChange={() => setVerifiedOnly(!verifiedOnly)} className="w-3 h-3 accent-ink" />
                    Verified only
                  </label>
                </div>
                {filteredReviews.length > 0 ? (
                  <div className="divide-y divide-border">
                    {filteredReviews.map(r => (
                      <div key={r.id} className="py-8 first:pt-0">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em]">
                            <span className="text-ink">{r.author}</span>
                            {r.verified && <span className="text-success">Verified</span>}
                            <span className="text-ink-muted">{r.date}</span>
                          </div>
                          <span className="text-[11px] text-ink-muted">{"★".repeat(r.rating)}</span>
                        </div>
                        <p className="font-display text-[20px] text-ink leading-tight">{r.title}</p>
                        <p className="text-[13px] text-ink-secondary mt-3 leading-[1.75]">{r.body}</p>
                        <button className="text-[10px] uppercase tracking-[0.14em] text-ink-muted hover:text-ink mt-4 transition-colors">Helpful ({r.helpful})</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-ink-muted text-[12px] uppercase tracking-[0.14em]">No reviews match your filters</div>
                )}
              </div>
            </div>
          )}

          {/* QUESTIONS */}
          {activeTab === "questions" && (
            <div className="max-w-[680px]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">Customer questions</h3>
                <button className="h-[40px] px-6 border border-ink text-ink text-[11px] uppercase tracking-[0.14em] rounded-full hover:bg-ink hover:text-bg transition-colors">
                  Ask a question
                </button>
              </div>
              <div className="divide-y divide-border">
                {product.faq.map((f, i) => (
                  <div key={i} className="py-8 first:pt-0">
                    <p className="font-display text-[20px] text-ink leading-tight">{f.question}</p>
                    <p className="text-[13px] text-ink-secondary mt-3 leading-[1.75]">{f.answer}</p>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-ink-muted mt-4">— {f.author} · {f.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-24 pt-16 border-t border-border">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">More to consider</p>
              <h2 className="font-display text-[36px] md:text-[44px] text-ink leading-none tracking-tight">You may also like</h2>
            </div>
            <Link href={`/category/${product.categorySlug}`} className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-secondary hover:text-ink transition-colors pb-2">
              View all
              <span className="w-6 h-px bg-ink-secondary" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {related.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
