"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductById, getRelatedProducts, getBundleProducts, products } from "@/data/products";
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
    <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-8 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href={`/category/${product.categorySlug}`} className="hover:text-primary transition-colors">{product.category}</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary truncate max-w-[300px] font-medium">{product.name}</span>
      </nav>

      {/* MAIN — 2 column: gallery + info/buy */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10 lg:gap-16">
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
                    className={`w-[68px] h-[68px] rounded-xl overflow-hidden border-2 bg-white transition-all ${
                      selectedImage === i ? "border-primary" : "border-border hover:border-border-hover"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="flex-1 relative group">
              <div className="aspect-square bg-[#FAFBFD] rounded-3xl overflow-hidden flex items-center justify-center p-8 md:p-14">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Discount badge */}
              {discount > 0 && (
                <div className="absolute top-5 left-5 bg-danger text-white text-[13px] font-bold px-3 py-1.5 rounded-lg">
                  −{discount}%
                </div>
              )}

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="absolute top-5 right-5 w-11 h-11 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center transition-all active:scale-95"
                aria-label="Add to wishlist"
              >
                <svg className={`w-5 h-5 ${wishlisted ? "text-danger fill-danger" : "text-ink-secondary"}`} fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
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
        <div className="lg:sticky lg:top-[160px] lg:self-start">
          {/* Brand + badge */}
          <div className="flex items-center gap-2 mb-2">
            <Link href={`/category/${product.categorySlug}`} className="text-[12px] text-primary font-bold uppercase tracking-wider hover:underline">{product.brand}</Link>
            {product.badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-ink/5 text-ink-secondary px-2 py-0.5 rounded">{product.badge}</span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[26px] md:text-[30px] font-extrabold text-ink leading-[1.15] tracking-tight">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-[1px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-[16px] h-[16px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-ink">{product.rating}</span>
            <button onClick={() => scrollToTabs("reviews")} className="text-[13px] text-ink-muted hover:text-primary hover:underline">({product.reviews} reviews)</button>
          </div>

          {/* Short description */}
          <p className="text-[14px] text-ink-secondary leading-relaxed mt-5">{product.description}</p>

          {/* Divider */}
          <div className="border-t border-divider my-6" />

          {/* Price */}
          <div>
            {product.originalPrice && (
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[14px] text-ink-muted line-through">{formatPrice(product.originalPrice)}</span>
                <span className="text-[11px] font-bold text-white bg-danger px-2 py-0.5 rounded-md">−{discount}%</span>
              </div>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-[40px] font-extrabold text-ink leading-none tracking-tight">€{product.price}</span>
              <span className="text-[18px] font-bold text-ink-muted">,-</span>
            </div>
            {savings > 0 && (
              <p className="text-[13px] text-success-dark font-semibold mt-1.5">You save €{savings},-</p>
            )}
            <p className="text-[12px] text-ink-muted mt-1.5">
              Or €{Math.ceil(product.price / 12)}/month × 12 — 0% interest
            </p>
          </div>

          {/* Key features — minimal */}
          <ul className="mt-6 space-y-2">
            {product.highlights.slice(0, 4).map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-secondary leading-relaxed">
                <svg className="w-[16px] h-[16px] text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Delivery promise */}
          <div className="mt-6 flex items-start gap-3 bg-success-light rounded-xl p-4">
            <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-[13px] font-bold text-success-dark leading-tight">
                {product.deliveryDays <= 1 ? "Tomorrow at your door" : `Delivered in ${product.deliveryDays} days`}
              </p>
              <p className="text-[12px] text-success-dark/70 mt-0.5">
                Order before 23:00 — {product.deliveryFree ? "free delivery" : "delivery fee applies"}
              </p>
            </div>
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 mt-4">
            <span className={`w-2 h-2 rounded-full ${product.stockCount && product.stockCount <= 5 ? "bg-danger animate-pulse" : "bg-success"}`} />
            <p className={`text-[12px] font-semibold ${product.stockCount && product.stockCount <= 5 ? "text-danger" : "text-success-dark"}`}>
              {product.stockCount && product.stockCount <= 5 ? `Only ${product.stockCount} left in stock` : "In stock"}
            </p>
          </div>

          {/* Quantity + CTA */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center border-2 border-border rounded-xl h-[52px]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-full flex items-center justify-center text-ink-muted hover:text-ink transition-colors text-[18px]">−</button>
              <span className="w-8 text-center text-[14px] font-bold text-ink">{qty}</span>
              <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-11 h-full flex items-center justify-center text-ink-muted hover:text-ink transition-colors text-[18px]">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 h-[52px] bg-accent hover:bg-accent-dark text-white text-[15px] font-bold rounded-xl transition-all active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              Add to cart
            </button>
          </div>

          {/* Seller + trust — small footer row */}
          <div className="mt-6 pt-5 border-t border-divider">
            <div className="flex items-center gap-2 text-[12px] mb-3">
              <span className="text-ink-muted">Sold by</span>
              <span className="font-semibold text-ink">{product.seller}</span>
              <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-ink-muted">· {product.sellerRating}★</span>
            </div>
            <div className="flex items-center gap-5 text-[11px] text-ink-muted">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                {product.warranty.split(" ").slice(0, 2).join(" ")}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>
                14-day returns
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                Secure payment
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FREQUENTLY BOUGHT TOGETHER */}
      {bundles.length > 0 && (
        <section className="mt-16">
          <h2 className="text-[20px] font-bold text-ink mb-1">Frequently bought together</h2>
          <p className="text-[13px] text-ink-muted mb-6">Save when you bundle these items</p>
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
            <div className="lg:ml-auto min-w-[220px] w-full lg:w-auto">
              <p className="text-[12px] text-ink-muted font-semibold">Bundle total</p>
              <p className="text-[32px] font-extrabold text-ink leading-none mt-1">€{bundleTotal}<span className="text-[16px] text-ink-muted">,-</span></p>
              <button
                onClick={() => { addToCart(product); bundles.forEach(b => { if (bundleChecked.has(b.product.id)) addToCart(b.product); }); }}
                className="w-full h-[48px] mt-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-bold rounded-xl transition-colors active:scale-[0.98] shadow-sm"
              >
                Add bundle to cart
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TABS */}
      <section id="product-tabs" className="mt-16 scroll-mt-[140px]">
        <div className="flex gap-8 border-b border-divider overflow-x-auto no-scrollbar">
          {([
            ["description", "Description"],
            ["specs", "Specifications"],
            ["reviews", `Reviews (${product.reviews})`],
            ["questions", `Questions (${product.faq.length})`],
          ] as const).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[14px] font-semibold border-b-2 -mb-[1px] transition-colors whitespace-nowrap ${
                activeTab === tab ? "border-ink text-ink" : "border-transparent text-ink-muted hover:text-ink-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="py-8">
          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="max-w-[720px] space-y-6">
              <p className="text-[15px] text-ink-secondary leading-relaxed">{product.description}</p>
              <div>
                <h3 className="text-[15px] font-bold text-ink mb-3">Highlights</h3>
                <ul className="space-y-2.5">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-ink-secondary leading-relaxed">
                      <svg className="w-[18px] h-[18px] text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-ink mb-3">What&apos;s in the box</h3>
                <ul className="space-y-2 text-[14px] text-ink-secondary">
                  <li>1× {product.name}</li>
                  <li>1× USB-C cable</li>
                  <li>1× Quick start guide</li>
                  <li>1× Warranty card</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-ink mb-2">Warranty</h3>
                <p className="text-[14px] text-ink-secondary leading-relaxed">
                  {product.warranty}, claimable locally through our partner network in Kosovo.
                </p>
              </div>
            </div>
          )}

          {/* SPECIFICATIONS */}
          {activeTab === "specs" && (
            <div className="max-w-[720px]">
              <dl className="divide-y divide-divider">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex py-3.5 text-[13px]">
                    <dt className="w-[200px] md:w-[240px] text-ink-muted flex-shrink-0">{key}</dt>
                    <dd className="text-ink font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="text-center">
                  <p className="text-[56px] font-extrabold text-ink leading-none">{product.rating}</p>
                  <div className="flex justify-center gap-[1px] mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-[20px] h-[20px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[13px] text-ink-muted mt-2">{product.reviews} reviews</p>
                </div>
                <div className="space-y-2 mt-6">
                  {ratingBars.map(r => (
                    <button key={r.stars} onClick={() => setReviewFilter(r.stars as ReviewFilter)} className="w-full flex items-center gap-2.5 text-[12px] hover:opacity-80 transition-opacity">
                      <span className="w-3 text-ink-secondary text-right font-semibold">{r.stars}</span>
                      <div className="flex-1 h-[6px] bg-divider rounded-full overflow-hidden">
                        <div className="h-full bg-star rounded-full" style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="w-10 text-right text-ink-muted">{r.count}</span>
                    </button>
                  ))}
                </div>
                <button className="w-full h-[44px] mt-6 border-2 border-ink text-ink text-[13px] font-bold rounded-xl hover:bg-ink hover:text-white transition-colors">
                  Write a review
                </button>
              </div>

              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-6 flex-wrap">
                  <button onClick={() => setReviewFilter("all")} className={`text-[12px] px-3 py-1.5 rounded-full font-semibold transition-colors ${reviewFilter === "all" ? "bg-ink text-white" : "bg-bg text-ink-secondary hover:bg-border"}`}>All</button>
                  {([5, 4, 3, 2, 1] as const).map(s => (
                    <button key={s} onClick={() => setReviewFilter(s)} className={`text-[12px] px-3 py-1.5 rounded-full font-semibold transition-colors ${reviewFilter === s ? "bg-ink text-white" : "bg-bg text-ink-secondary hover:bg-border"}`}>
                      {s}★
                    </button>
                  ))}
                  <label className="flex items-center gap-1.5 text-[12px] text-ink-secondary cursor-pointer ml-2">
                    <input type="checkbox" checked={verifiedOnly} onChange={() => setVerifiedOnly(!verifiedOnly)} className="w-3.5 h-3.5 accent-primary rounded" />
                    Verified only
                  </label>
                </div>
                {filteredReviews.length > 0 ? (
                  <div className="divide-y divide-divider">
                    {filteredReviews.map(r => (
                      <div key={r.id} className="py-5 first:pt-0">
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-semibold text-ink">{r.author}</span>
                            {r.verified && (
                              <span className="text-[11px] text-success-dark font-semibold">· Verified</span>
                            )}
                            <span className="text-[11px] text-ink-muted">· {r.date}</span>
                          </div>
                          <div className="flex gap-[1px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-[14px] font-semibold text-ink">{r.title}</p>
                        <p className="text-[13px] text-ink-secondary mt-1.5 leading-relaxed">{r.body}</p>
                        <button className="text-[12px] text-ink-muted hover:text-ink mt-3 font-medium transition-colors">Helpful ({r.helpful})</button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-ink-muted text-[13px]">No reviews match your filters</div>
                )}
              </div>
            </div>
          )}

          {/* QUESTIONS */}
          {activeTab === "questions" && (
            <div className="max-w-[720px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[15px] font-bold text-ink">Customer questions</h3>
                <button className="h-[40px] px-5 border-2 border-ink text-ink text-[13px] font-bold rounded-xl hover:bg-ink hover:text-white transition-colors">
                  Ask a question
                </button>
              </div>
              <div className="divide-y divide-divider">
                {product.faq.map((f, i) => (
                  <div key={i} className="py-5 first:pt-0">
                    <p className="text-[14px] font-bold text-ink">{f.question}</p>
                    <p className="text-[13px] text-ink-secondary mt-2 leading-relaxed">{f.answer}</p>
                    <p className="text-[11px] text-ink-muted mt-2">— {f.author} · {f.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[20px] font-bold text-ink">You may also like</h2>
            <Link href={`/category/${product.categorySlug}`} className="text-[13px] text-primary font-semibold hover:underline">See all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* RECENTLY VIEWED */}
      <section className="mt-16 mb-8">
        <h2 className="text-[20px] font-bold text-ink mb-6">Recently viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.filter(p => p.id !== product.id).slice(0, 6).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
