"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProductById, getRelatedProducts, getBundleProducts, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "reviews" | "faq">("specs");
  const [bundleChecked, setBundleChecked] = useState<Set<string>>(new Set());

  if (!product) {
    return (
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-20 text-center">
        <p className="text-[16px] font-bold text-ink mb-2">Product not found</p>
        <Link href="/category/all" className="text-[13px] text-primary hover:underline">Browse all products</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 4);
  const bundles = getBundleProducts(product);
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const ratingBars = [
    { stars: 5, pct: 68 }, { stars: 4, pct: 22 }, { stars: 3, pct: 7 }, { stars: 2, pct: 2 }, { stars: 1, pct: 1 },
  ];

  const toggleBundle = (id: string) => {
    setBundleChecked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  };

  const bundleTotal = product.price + bundles.reduce((s, b) =>
    s + (bundleChecked.has(b.product.id) ? b.product.price * (1 - b.discount / 100) : 0), 0);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href={`/category/${product.categorySlug}`} className="hover:text-primary transition-colors">{product.category}</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary truncate max-w-[300px]">{product.name}</span>
      </nav>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* IMAGE GALLERY */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden sticky top-[180px]">
            <div className="aspect-square bg-[#FAFBFD] p-8 flex items-center justify-center relative">
              <img src={product.images[selectedImage]} alt={product.name} className="max-w-full max-h-full object-contain" />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-danger text-white text-[12px] font-bold px-2.5 py-1 rounded-lg shadow-sm">-{discount}%</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 p-4 border-t border-divider">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-[60px] h-[60px] rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all duration-150 ${
                      selectedImage === i ? "border-primary shadow-sm" : "border-transparent hover:border-border-hover"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="lg:col-span-4 space-y-5">
          <div>
            <Link href={`/category/${product.categorySlug}`} className="text-[12px] text-primary font-semibold hover:underline">{product.brand}</Link>
            <h1 className="text-[22px] font-bold text-ink leading-tight mt-1.5">{product.name}</h1>
          </div>

          {/* Rating row */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex items-center gap-1">
              <div className="flex gap-[1px]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-[16px] h-[16px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[14px] font-bold text-ink">{product.rating}</span>
            </div>
            <button onClick={() => setActiveTab("reviews")} className="text-[13px] text-primary font-medium hover:underline">{product.reviews} reviews</button>
            <span className="text-ink-faint">|</span>
            <button onClick={() => setActiveTab("faq")} className="text-[13px] text-primary font-medium hover:underline">{product.faq.length} questions</button>
          </div>

          {/* Key features */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <h2 className="text-[13px] font-bold text-ink mb-3">Key features</h2>
            <ul className="space-y-2">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-secondary">
                  <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-[13px] font-bold text-ink mb-2">About this product</h2>
            <p className="text-[14px] text-ink-secondary leading-relaxed">{product.description}</p>
          </div>
        </div>

        {/* BUY BOX — the conversion element, bol.com style */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-card sticky top-[180px] overflow-hidden">
            {/* Price section */}
            <div className="p-5 space-y-3">
              <div>
                {product.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[14px] text-ink-muted line-through">&euro;{product.originalPrice},-</span>
                    <span className="text-[12px] font-bold text-white bg-danger px-2 py-0.5 rounded-lg">-{discount}%</span>
                  </div>
                )}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[32px] font-extrabold text-ink leading-none">{product.price}</span>
                  <span className="text-[16px] font-bold text-ink-muted">,-</span>
                </div>
                <p className="text-[12px] text-ink-muted mt-1">
                  or &euro;{Math.ceil(product.price / 12)}/mo &times; 12 installments
                </p>
              </div>

              {/* Delivery — prominent, green, like bol.com */}
              <div className="bg-success-light rounded-xl p-3.5">
                <div className="flex items-center gap-2.5">
                  <svg className="w-5 h-5 text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-[13px] font-bold text-success-dark">
                      {product.deliveryDays <= 1 ? "Tomorrow at your door" : `In ${product.deliveryDays} days at your door`}
                    </p>
                    <p className="text-[12px] text-success-dark/70">
                      {product.deliveryFree ? "Free delivery" : "Delivery fee applies"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stock urgency */}
              {product.stockCount && product.stockCount <= 5 && (
                <p className="text-[12px] text-danger font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
                  Only {product.stockCount} left in stock
                </p>
              )}
            </div>

            {/* Action section */}
            <div className="px-5 pb-5 space-y-3">
              {/* Quantity */}
              <div className="flex items-center gap-3">
                <label className="text-[13px] text-ink-muted font-medium">Qty:</label>
                <select
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="h-[36px] px-3 border border-border rounded-xl text-[13px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => { for (let i = 0; i < qty; i++) addToCart(product); }}
                className="w-full h-[48px] bg-accent hover:bg-accent-dark text-white text-[15px] font-bold rounded-xl transition-all active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                Add to cart
              </button>

              {/* Wishlist */}
              <button className="w-full h-[40px] border-2 border-border hover:border-border-hover text-[13px] font-semibold text-ink-secondary rounded-xl transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                Add to wishlist
              </button>
            </div>

            {/* Seller — bol.com "Verkoop door" pattern */}
            <div className="border-t border-divider px-5 py-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[12px] text-ink-muted">Sold by</span>
                <span className="text-[13px] font-semibold text-ink">{product.seller}</span>
                <svg className="w-4 h-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center gap-3 text-[12px] text-ink-muted">
                <span>Seller rating: <span className="font-semibold text-ink">{product.sellerRating}/5</span></span>
                <span className="text-ink-faint">&middot;</span>
                <span className="text-primary font-medium">Verified partner</span>
              </div>
            </div>

            {/* Trust signals */}
            <div className="border-t border-divider px-5 py-4 space-y-2.5">
              {[
                { icon: <svg className="w-4 h-4 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, text: product.warranty },
                { icon: <svg className="w-4 h-4 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>, text: "14-day free returns" },
                { icon: <svg className="w-4 h-4 text-ink-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>, text: "Secure payment" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[12px] text-ink-secondary">
                  {t.icon}
                  <span>{t.text}</span>
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Visa", "MC", "Bank", "COD"].map(m => (
                  <span key={m} className="text-[10px] bg-bg text-ink-muted px-2.5 py-1 rounded-lg font-medium">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VAAK SAMEN GEKOCHT — bol.com "Frequently bought together" */}
      {bundles.length > 0 && (
        <section className="mt-8 bg-white rounded-2xl shadow-card p-6">
          <h2 className="text-[17px] font-bold text-ink mb-5">Frequently bought together</h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="text-center">
                <div className="w-[88px] h-[88px] rounded-xl border-2 border-primary overflow-hidden bg-[#FAFBFD]"><img src={product.image} alt="" className="w-full h-full object-cover" /></div>
                <p className="text-[11px] text-ink-muted mt-1.5 font-medium">This item</p>
              </div>
              {bundles.map(b => (
                <div key={b.product.id} className="flex items-center gap-3">
                  <span className="text-[22px] text-ink-faint font-light">+</span>
                  <button onClick={() => toggleBundle(b.product.id)} className="text-center group">
                    <div className={`w-[88px] h-[88px] rounded-xl border-2 overflow-hidden bg-[#FAFBFD] transition-all ${bundleChecked.has(b.product.id) ? "border-primary" : "border-border opacity-50 group-hover:opacity-75"}`}>
                      <img src={b.product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-1 justify-center mt-1.5">
                      <input type="checkbox" checked={bundleChecked.has(b.product.id)} readOnly className="w-3.5 h-3.5 accent-primary rounded" />
                      <span className="text-[11px] text-ink-secondary font-medium">{b.product.brand}</span>
                    </div>
                    <p className="text-[13px] font-bold text-ink">&euro;{Math.round(b.product.price * (1 - b.discount / 100))},-</p>
                    <p className="text-[10px] text-danger font-bold">Save {b.discount}%</p>
                  </button>
                </div>
              ))}
            </div>
            <div className="md:ml-auto bg-bg rounded-xl p-5 min-w-[200px]">
              <p className="text-[12px] text-ink-muted font-medium">Bundle price</p>
              <p className="text-[26px] font-extrabold text-ink leading-none mt-1">&euro;{Math.round(bundleTotal)}<span className="text-[14px] text-ink-muted">,-</span></p>
              <button
                onClick={() => { addToCart(product); bundles.forEach(b => { if (bundleChecked.has(b.product.id)) addToCart(b.product); }); }}
                className="w-full h-[40px] mt-3 bg-accent hover:bg-accent-dark text-white text-[13px] font-bold rounded-xl transition-colors active:scale-[0.98] shadow-sm"
              >
                Add all to cart
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TABS — specs, reviews, faq */}
      <section className="mt-8">
        <div className="flex gap-0 border-b-2 border-divider">
          {(["specs", "reviews", "faq"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3.5 text-[14px] font-semibold border-b-2 -mb-[2px] transition-colors ${
                activeTab === tab ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {tab === "specs" ? "Specifications" : tab === "reviews" ? `Reviews (${product.reviews})` : `Questions (${product.faq.length})`}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-b-2xl shadow-card p-6">
          {/* SPECS — striped table like bol.com */}
          {activeTab === "specs" && (
            <div className="max-w-[640px]">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={key} className={`flex py-3 text-[13px] ${i % 2 === 0 ? "bg-bg -mx-4 px-4 rounded-lg" : ""}`}>
                  <span className="w-[200px] text-ink-muted flex-shrink-0 font-medium">{key}</span>
                  <span className="text-ink">{value}</span>
                </div>
              ))}
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <div className="text-center mb-5">
                  <p className="text-[48px] font-extrabold text-ink leading-none">{product.rating}</p>
                  <div className="flex justify-center gap-[1px] mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-[18px] h-[18px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[13px] text-ink-muted mt-1.5">{product.reviews} reviews</p>
                </div>
                <div className="space-y-1.5">
                  {ratingBars.map(r => (
                    <div key={r.stars} className="flex items-center gap-2 text-[12px]">
                      <span className="w-3 text-ink-muted text-right font-medium">{r.stars}</span>
                      <svg className="w-3.5 h-3.5 text-star" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <div className="flex-1 h-[6px] bg-divider rounded-full overflow-hidden">
                        <div className="h-full bg-star rounded-full" style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className="w-8 text-right text-ink-muted">{r.pct}%</span>
                    </div>
                  ))}
                </div>
                <button className="w-full h-[40px] mt-5 border-2 border-primary text-primary text-[13px] font-bold rounded-xl hover:bg-primary-light transition-colors">
                  Write a review
                </button>
              </div>
              <div className="lg:col-span-2 divide-y divide-divider">
                {product.reviewsList.map(r => (
                  <div key={r.id} className="py-5 first:pt-0">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-[1px]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <span className="text-[14px] font-bold text-ink">{r.title}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5 text-[12px] text-ink-muted">
                      <span className="font-medium">{r.author}</span>
                      {r.verified && (
                        <span className="text-success font-semibold flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                          Verified
                        </span>
                      )}
                      <span>{r.date}</span>
                    </div>
                    <p className="text-[13px] text-ink-secondary mt-2 leading-relaxed">{r.body}</p>
                    <button className="text-[12px] text-ink-muted hover:text-ink mt-2.5 font-medium transition-colors flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.573-7.032.001.001" /></svg>
                      Helpful ({r.helpful})
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="max-w-[640px] divide-y divide-divider">
              {product.faq.map((f, i) => (
                <div key={i} className="py-5 first:pt-0">
                  <p className="text-[14px] font-bold text-ink">Q: {f.question}</p>
                  <p className="text-[13px] text-ink-secondary mt-2 leading-relaxed">A: {f.answer}</p>
                  <p className="text-[11px] text-ink-muted mt-1.5 font-medium">— {f.author} · {f.date}</p>
                </div>
              ))}
              <div className="pt-5">
                <button className="h-[40px] px-6 border-2 border-primary text-primary text-[13px] font-bold rounded-xl hover:bg-primary-light transition-colors">
                  Ask a question
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CROSS-SELL — "Anderen bekeken ook" */}
      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="text-[17px] font-bold text-ink mb-4">Others also viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* RECENTLY VIEWED */}
      <section className="mt-8 mb-6">
        <h2 className="text-[17px] font-bold text-ink mb-4">Recently viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {products.filter(p => p.id !== product.id).slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
