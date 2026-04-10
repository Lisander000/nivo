"use client";

import { useEffect, useRef, useState } from "react";
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
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const buyBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buyBoxRef.current) return;
      const rect = buyBoxRef.current.getBoundingClientRect();
      setShowStickyBar(rect.bottom < 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Short tagline = first sentence of description
  const shortTagline = product.description.split(". ")[0] + ".";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // Group specs into sections for bol.com-style specs display
  const specGroups: Record<string, [string, string][]> = {
    "Main specs": [],
    "Other specs": [],
  };
  Object.entries(product.specs).forEach(([k, v], i) => {
    if (i < Math.ceil(Object.keys(product.specs).length / 2)) specGroups["Main specs"].push([k, v]);
    else specGroups["Other specs"].push([k, v]);
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4 pb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href={`/category/${product.categorySlug}`} className="hover:text-primary transition-colors">{product.category}</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <Link href={`/category/${product.categorySlug}`} className="hover:text-primary transition-colors">{product.brand}</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary truncate max-w-[300px] font-medium">{product.name}</span>
      </nav>

      {/* PRODUCT HEADER — above the main grid, full width */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Link href={`/category/${product.categorySlug}`} className="text-[13px] text-primary font-semibold hover:underline">{product.brand}</Link>
          {product.badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded">{product.badge}</span>
          )}
        </div>
        <h1 className="text-[24px] md:text-[28px] font-extrabold text-ink leading-tight max-w-[900px]">{product.name}</h1>

        {/* Rating + social proof row */}
        <div className="flex items-center gap-3 mt-3 flex-wrap">
          <div className="flex items-center gap-1.5">
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
          <span className="text-ink-faint">·</span>
          <button onClick={() => setActiveTab("questions")} className="text-[13px] text-primary font-medium hover:underline">{product.faq.length} questions</button>
          <span className="text-ink-faint">·</span>
          <span className="text-[13px] text-ink-muted">SKU: <span className="font-medium text-ink-secondary">{product.sku}</span></span>
        </div>
      </div>

      {/* MAIN GRID — gallery | info | buy box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT: IMAGE GALLERY with vertical thumbs */}
        <div className="lg:col-span-5">
          <div className="flex gap-3">
            {/* Vertical thumbnails (desktop only) */}
            {product.images.length > 1 && (
              <div className="hidden lg:flex flex-col gap-2 flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setSelectedImage(i)}
                    onClick={() => setSelectedImage(i)}
                    className={`w-[64px] h-[64px] rounded-xl overflow-hidden border-2 bg-white transition-all duration-150 ${
                      selectedImage === i ? "border-primary shadow-sm" : "border-border hover:border-border-hover"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image with zoom */}
            <div className="flex-1 bg-white rounded-2xl shadow-card overflow-hidden">
              <div
                className="aspect-square bg-[#FAFBFD] p-6 md:p-10 flex items-center justify-center relative cursor-zoom-in overflow-hidden"
                onMouseEnter={() => setIsZooming(true)}
                onMouseLeave={() => setIsZooming(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                  style={isZooming ? {
                    transform: `scale(1.6)`,
                    transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  } : undefined}
                />

                {/* Badges overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {discount > 0 && (
                    <span className="bg-danger text-white text-[12px] font-bold px-3 py-1.5 rounded-lg shadow-sm">-{discount}%</span>
                  )}
                  {product.stockCount && product.stockCount <= 5 && (
                    <span className="bg-white text-danger text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm border border-danger/20">
                      Only {product.stockCount} left
                    </span>
                  )}
                </div>

                {/* Wishlist button */}
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-card hover:shadow-card-hover flex items-center justify-center transition-all active:scale-95"
                  aria-label="Add to wishlist"
                >
                  <svg className={`w-5 h-5 transition-colors ${wishlisted ? "text-danger fill-danger" : "text-ink-muted"}`} fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>

                {/* Zoom hint */}
                {!isZooming && (
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 text-[11px] text-ink-muted font-medium flex items-center gap-1 shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" /></svg>
                    Hover to zoom
                  </div>
                )}
              </div>

              {/* Mobile thumbnails */}
              {product.images.length > 1 && (
                <div className="lg:hidden flex gap-2 p-3 border-t border-divider overflow-x-auto no-scrollbar">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-[56px] h-[56px] rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${
                        selectedImage === i ? "border-primary" : "border-border"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Share + save row */}
          <div className="flex items-center gap-2 mt-4">
            <button className="flex items-center gap-1.5 text-[12px] text-ink-muted hover:text-ink transition-colors font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>
              Share
            </button>
            <span className="text-ink-faint">·</span>
            <button className="flex items-center gap-1.5 text-[12px] text-ink-muted hover:text-ink transition-colors font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              Report issue
            </button>
          </div>

          {/* Description below the photo */}
          <div className="mt-5 bg-white rounded-2xl shadow-card p-5">
            <h2 className="text-[14px] font-bold text-ink mb-2">About this product</h2>
            <p className="text-[13px] text-ink-secondary leading-relaxed">{product.description}</p>
            <button onClick={() => { setActiveTab("description"); document.getElementById("product-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="text-[13px] text-primary font-semibold hover:underline mt-3 inline-flex items-center gap-1">
              Read full description
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        {/* MIDDLE: PRODUCT INFO */}
        <div className="lg:col-span-4 space-y-5">
          {/* Key features / USPs */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <h2 className="text-[14px] font-bold text-ink mb-3">Key features</h2>
            <ul className="space-y-2.5">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-secondary leading-relaxed">
                  <svg className="w-[18px] h-[18px] text-success flex-shrink-0 mt-px" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Nivo — trust block */}
          <div className="bg-white rounded-2xl shadow-card p-5">
            <h2 className="text-[14px] font-bold text-ink mb-3">Why buy from Nivo?</h2>
            <div className="space-y-2.5">
              {[
                { icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>, title: "Local warranty", desc: product.warranty },
                { icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25" /></svg>, title: "Free fast delivery", desc: "Tomorrow at your door across Kosovo" },
                { icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" /></svg>, title: "14-day returns", desc: "Changed your mind? Return for free" },
                { icon: <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>, title: "Secure payment", desc: "All major cards + installments" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-ink leading-tight">{item.title}</p>
                    <p className="text-[12px] text-ink-muted mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: BUY BOX — conversion element */}
        <div className="lg:col-span-3">
          <div ref={buyBoxRef} className="bg-white rounded-2xl shadow-card sticky top-[180px] overflow-hidden">
            {/* Price section */}
            <div className="p-5 space-y-3">
              {/* Social proof pill */}
              <div className="inline-flex items-center gap-1.5 bg-success-light text-success-dark text-[11px] font-bold px-2.5 py-1 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Ordered {Math.round(product.reviews / 3)}+ times this month
              </div>

              <div>
                {product.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px] text-ink-muted line-through">{formatPrice(product.originalPrice)}</span>
                    <span className="text-[11px] font-bold text-white bg-danger px-2 py-0.5 rounded-md">-{discount}%</span>
                  </div>
                )}
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[36px] font-extrabold text-ink leading-none tracking-tight">€{product.price}</span>
                  <span className="text-[18px] font-bold text-ink-muted">,-</span>
                </div>
                {savings > 0 && (
                  <p className="text-[12px] text-success-dark font-semibold mt-1">You save €{savings},-</p>
                )}
                <p className="text-[12px] text-ink-secondary mt-2 leading-relaxed">{shortTagline}</p>
                <p className="text-[12px] text-ink-muted mt-2">
                  Or <span className="font-semibold text-ink-secondary">€{Math.ceil(product.price / 12)}/month</span> × 12 — 0% interest
                </p>
              </div>

              {/* Delivery — prominent green box */}
              <div className="bg-success-light rounded-xl p-3.5 space-y-2">
                <div className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-[13px] font-bold text-success-dark">
                      {product.deliveryDays <= 1 ? "Tomorrow at your door" : `Delivered in ${product.deliveryDays} days`}
                    </p>
                    <p className="text-[11px] text-success-dark/75 mt-0.5">
                      Order before <span className="font-bold">23:00</span> — {product.deliveryFree ? "free delivery" : "delivery fee applies"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-success-dark/70 pl-7">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                  Prishtina · change delivery address
                </div>
              </div>

              {/* Stock status */}
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${product.stockCount && product.stockCount <= 5 ? "bg-danger animate-pulse" : "bg-success"}`} />
                <p className={`text-[12px] font-semibold ${product.stockCount && product.stockCount <= 5 ? "text-danger" : "text-success-dark"}`}>
                  {product.stockCount && product.stockCount <= 5 ? `Hurry! Only ${product.stockCount} left in stock` : "In stock, ready to ship"}
                </p>
              </div>
            </div>

            {/* Action section */}
            <div className="px-5 pb-5 space-y-2.5">
              {/* Quantity */}
              <div className="flex items-center gap-2 mb-1">
                <label className="text-[12px] text-ink-muted font-medium">Quantity:</label>
                <div className="flex items-center border border-border rounded-lg overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center hover:bg-bg transition-colors text-ink-muted">−</button>
                  <span className="w-8 h-8 flex items-center justify-center text-[13px] font-semibold text-ink border-x border-border">{qty}</span>
                  <button onClick={() => setQty(Math.min(10, qty + 1))} className="w-8 h-8 flex items-center justify-center hover:bg-bg transition-colors text-ink-muted">+</button>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={handleAddToCart}
                className="w-full h-[50px] bg-accent hover:bg-accent-dark text-white text-[15px] font-bold rounded-xl transition-all active:scale-[0.98] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                Add to cart
              </button>

              {/* Secondary — buy now */}
              <button
                onClick={handleAddToCart}
                className="w-full h-[44px] bg-primary hover:bg-primary-dark text-white text-[14px] font-bold rounded-xl transition-colors shadow-sm"
              >
                Buy now
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="w-full h-[40px] border-2 border-border hover:border-border-hover text-[13px] font-semibold text-ink-secondary rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <svg className={`w-4 h-4 ${wishlisted ? "text-danger fill-danger" : ""}`} fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                {wishlisted ? "In wishlist" : "Add to wishlist"}
              </button>
            </div>

            {/* Seller card */}
            <div className="border-t border-divider px-5 py-4">
              <p className="text-[11px] text-ink-muted font-semibold uppercase tracking-wider mb-2">Sold by</p>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0">
                  {product.seller.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[13px] font-bold text-ink truncate">{product.seller}</span>
                    <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 text-star" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-[11px] font-semibold text-ink">{product.sellerRating}</span>
                    <span className="text-[11px] text-ink-muted">· Verified partner</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 text-[11px] text-ink-muted">
                    <span className="flex items-center gap-1"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>Replies in 2h</span>
                  </div>
                </div>
              </div>
              <button className="text-[12px] text-primary font-semibold hover:underline mt-3">Visit seller&apos;s store →</button>
            </div>

            {/* Payment methods */}
            <div className="border-t border-divider px-5 py-4">
              <p className="text-[11px] text-ink-muted font-semibold uppercase tracking-wider mb-2">Payment methods</p>
              <div className="flex flex-wrap gap-1.5">
                {["Visa", "MC", "Bank", "COD", "3×", "6×", "12×"].map(m => (
                  <span key={m} className="text-[10px] bg-bg text-ink-secondary px-2 py-1 rounded-md font-semibold border border-border">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FREQUENTLY BOUGHT TOGETHER */}
      {bundles.length > 0 && (
        <section className="mt-8 bg-white rounded-2xl shadow-card p-6 md:p-8">
          <h2 className="text-[18px] font-bold text-ink mb-1">Frequently bought together</h2>
          <p className="text-[13px] text-ink-muted mb-5">Save when you buy these items as a bundle</p>
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="flex items-center gap-3 flex-wrap flex-1">
              <div className="text-center">
                <div className="w-[100px] h-[100px] rounded-xl border-2 border-primary overflow-hidden bg-[#FAFBFD] shadow-sm">
                  <img src={product.image} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-[11px] text-ink-muted mt-2 font-semibold">This item</p>
                <p className="text-[12px] font-bold text-ink">€{product.price},-</p>
              </div>
              {bundles.map(b => (
                <div key={b.product.id} className="flex items-center gap-3">
                  <span className="text-[28px] text-ink-faint font-light">+</span>
                  <button onClick={() => toggleBundle(b.product.id)} className="text-center group">
                    <div className={`w-[100px] h-[100px] rounded-xl border-2 overflow-hidden bg-[#FAFBFD] transition-all shadow-sm ${bundleChecked.has(b.product.id) ? "border-primary" : "border-border opacity-60 group-hover:opacity-100"}`}>
                      <img src={b.product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-1 justify-center mt-2">
                      <input type="checkbox" checked={bundleChecked.has(b.product.id)} readOnly className="w-3.5 h-3.5 accent-primary rounded" />
                      <span className="text-[11px] text-ink-secondary font-semibold truncate max-w-[80px]">{b.product.brand}</span>
                    </div>
                    <p className="text-[12px] font-bold text-ink">€{Math.round(b.product.price * (1 - b.discount / 100))},-</p>
                    <p className="text-[10px] text-success-dark font-bold bg-success-light px-1.5 py-0.5 rounded mt-0.5 inline-block">Save {b.discount}%</p>
                  </button>
                </div>
              ))}
            </div>
            <div className="lg:ml-auto bg-bg rounded-2xl p-5 min-w-[220px] w-full lg:w-auto">
              <p className="text-[12px] text-ink-muted font-semibold">Bundle total</p>
              <p className="text-[28px] font-extrabold text-ink leading-none mt-1">€{bundleTotal}<span className="text-[14px] text-ink-muted">,-</span></p>
              <p className="text-[12px] text-success-dark font-semibold mt-1">
                {bundleChecked.size > 0 ? `${bundleChecked.size} item${bundleChecked.size > 1 ? "s" : ""} selected` : "Select items to bundle"}
              </p>
              <button
                onClick={() => { addToCart(product); bundles.forEach(b => { if (bundleChecked.has(b.product.id)) addToCart(b.product); }); }}
                className="w-full h-[44px] mt-3 bg-accent hover:bg-accent-dark text-white text-[14px] font-bold rounded-xl transition-colors active:scale-[0.98] shadow-sm"
              >
                Add bundle to cart
              </button>
            </div>
          </div>
        </section>
      )}

      {/* TABS SECTION */}
      <section id="product-tabs" className="mt-8 scroll-mt-[180px]">
        <div className="flex gap-0 border-b-2 border-divider overflow-x-auto no-scrollbar">
          {([
            ["description", "Description"],
            ["specs", "Specifications"],
            ["reviews", `Reviews (${product.reviews})`],
            ["questions", `Questions (${product.faq.length})`],
          ] as const).map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3.5 text-[14px] font-semibold border-b-2 -mb-[2px] transition-colors whitespace-nowrap ${
                activeTab === tab ? "border-primary text-primary" : "border-transparent text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-b-2xl shadow-card p-6 md:p-8">
          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="max-w-[720px] space-y-5">
              <h3 className="text-[18px] font-bold text-ink">About the {product.brand} {product.name.split(" ").slice(1, 4).join(" ")}</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed">{product.description}</p>
              <div>
                <h4 className="text-[15px] font-bold text-ink mb-3">What&apos;s in the box</h4>
                <ul className="space-y-2">
                  {[`1× ${product.name}`, "1× Quick start guide", "1× USB-C cable", "1× Warranty card"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] text-ink-secondary">
                      <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-ink mb-3">Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.highlights.map((h, i) => (
                    <div key={i} className="bg-bg rounded-xl p-3 flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 text-primary text-[11px] font-bold">{i + 1}</div>
                      <p className="text-[13px] text-ink-secondary leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-light rounded-xl p-5">
                <h4 className="text-[14px] font-bold text-ink mb-2">Warranty & support</h4>
                <p className="text-[13px] text-ink-secondary leading-relaxed">
                  This product includes <span className="font-semibold">{product.warranty}</span>, claimable through our local partner network in Kosovo. Our customer support is available Mon-Sat, 9:00-21:00 to help with any questions.
                </p>
              </div>
            </div>
          )}

          {/* SPECIFICATIONS */}
          {activeTab === "specs" && (
            <div className="max-w-[720px]">
              {Object.entries(specGroups).map(([group, entries]) => entries.length > 0 && (
                <div key={group} className="mb-8 last:mb-0">
                  <h3 className="text-[15px] font-bold text-ink mb-3">{group}</h3>
                  <div className="divide-y divide-divider">
                    {entries.map(([key, value], i) => (
                      <div key={key} className={`flex py-3 text-[13px] ${i % 2 === 0 ? "bg-bg -mx-4 px-4 md:-mx-5 md:px-5 rounded-lg" : ""}`}>
                        <span className="w-[180px] md:w-[220px] text-ink-muted flex-shrink-0 font-medium">{key}</span>
                        <span className="text-ink font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                {/* Rating summary */}
                <div className="lg:col-span-4">
                  <div className="bg-bg rounded-2xl p-5">
                    <div className="text-center mb-5">
                      <p className="text-[56px] font-extrabold text-ink leading-none">{product.rating}</p>
                      <div className="flex justify-center gap-[1px] mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-[20px] h-[20px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[13px] text-ink-muted mt-2">Based on {product.reviews} reviews</p>
                    </div>
                    <div className="space-y-2">
                      {ratingBars.map(r => (
                        <button key={r.stars} onClick={() => setReviewFilter(r.stars as ReviewFilter)} className="w-full flex items-center gap-2 text-[12px] hover:bg-white rounded-lg p-1.5 -mx-1.5 transition-colors">
                          <span className="w-3 text-ink-secondary text-right font-semibold">{r.stars}</span>
                          <svg className="w-3.5 h-3.5 text-star" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          <div className="flex-1 h-[6px] bg-divider rounded-full overflow-hidden">
                            <div className="h-full bg-star rounded-full transition-all" style={{ width: `${r.pct}%` }} />
                          </div>
                          <span className="w-10 text-right text-ink-muted font-medium">{r.count}</span>
                        </button>
                      ))}
                    </div>
                    <button className="w-full h-[44px] mt-5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold rounded-xl transition-colors">
                      Write a review
                    </button>
                  </div>
                </div>

                {/* Reviews list */}
                <div className="lg:col-span-8">
                  {/* Filters */}
                  <div className="flex items-center gap-2 mb-5 flex-wrap">
                    <button onClick={() => setReviewFilter("all")} className={`text-[12px] px-3 py-1.5 rounded-lg font-semibold transition-colors ${reviewFilter === "all" ? "bg-primary text-white" : "bg-bg text-ink-secondary hover:bg-border"}`}>
                      All reviews
                    </button>
                    {([5, 4, 3, 2, 1] as const).map(s => (
                      <button key={s} onClick={() => setReviewFilter(s)} className={`text-[12px] px-3 py-1.5 rounded-lg font-semibold transition-colors flex items-center gap-1 ${reviewFilter === s ? "bg-primary text-white" : "bg-bg text-ink-secondary hover:bg-border"}`}>
                        {s} <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
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
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-[12px] font-bold">
                                {r.author.charAt(0)}
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-ink">{r.author}</p>
                                <div className="flex items-center gap-2 text-[11px] text-ink-muted">
                                  {r.verified && (
                                    <span className="text-success-dark font-semibold flex items-center gap-0.5">
                                      <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                      Verified buyer
                                    </span>
                                  )}
                                  <span>·</span>
                                  <span>{r.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-[1px]">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-[14px] font-bold text-ink mt-3">{r.title}</p>
                          <p className="text-[13px] text-ink-secondary mt-1.5 leading-relaxed">{r.body}</p>
                          <button className="text-[12px] text-ink-muted hover:text-primary mt-3 font-semibold transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m7.573-7.032.001.001" /></svg>
                            Helpful ({r.helpful})
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-ink-muted text-[13px]">
                      No reviews match your filters
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* QUESTIONS */}
          {activeTab === "questions" && (
            <div className="max-w-[720px]">
              <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-[15px] font-bold text-ink">Customer questions</h3>
                <button className="h-[40px] px-5 bg-primary hover:bg-primary-dark text-white text-[13px] font-bold rounded-xl transition-colors">
                  Ask a question
                </button>
              </div>
              <div className="divide-y divide-divider">
                {product.faq.map((f, i) => (
                  <div key={i} className="py-5 first:pt-0">
                    <div className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary-light text-primary flex items-center justify-center flex-shrink-0 text-[12px] font-bold">Q</div>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-ink">{f.question}</p>
                        <div className="flex gap-3 mt-3">
                          <div className="w-7 h-7 rounded-full bg-success-light text-success-dark flex items-center justify-center flex-shrink-0 text-[12px] font-bold">A</div>
                          <div>
                            <p className="text-[13px] text-ink-secondary leading-relaxed">{f.answer}</p>
                            <p className="text-[11px] text-ink-muted mt-2 font-medium">— {f.author} · {f.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3 ml-10">
                          <button className="text-[11px] text-ink-muted hover:text-primary font-semibold transition-colors">👍 Helpful</button>
                          <button className="text-[11px] text-ink-muted hover:text-primary font-semibold transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED PRODUCTS - horizontal scroll */}
      {related.length > 0 && (
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[18px] font-bold text-ink">Others also viewed</h2>
            <Link href={`/category/${product.categorySlug}`} className="text-[13px] text-primary font-semibold hover:underline">See all →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      {/* RECENTLY VIEWED */}
      <section className="mt-10">
        <h2 className="text-[18px] font-bold text-ink mb-4">Recently viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.filter(p => p.id !== product.id).slice(0, 6).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* STICKY ADD-TO-CART BAR — appears when scrolling past buy box */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-40 animate-fadeIn">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FAFBFD] flex-shrink-0 hidden md:block">
              <img src={product.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1 hidden md:block">
              <p className="text-[13px] font-semibold text-ink truncate">{product.name}</p>
              <div className="flex items-center gap-2 text-[11px]">
                <div className="flex gap-[1px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-ink-muted">({product.reviews})</span>
                <span className="text-success-dark font-semibold">· Tomorrow in stock</span>
              </div>
            </div>
            <div className="flex items-baseline gap-0.5 flex-shrink-0">
              <span className="text-[22px] font-extrabold text-ink">€{product.price}</span>
              <span className="text-[13px] font-bold text-ink-muted">,-</span>
            </div>
            <button
              onClick={handleAddToCart}
              className="h-[44px] px-6 md:px-8 bg-accent hover:bg-accent-dark text-white text-[14px] font-bold rounded-xl transition-all active:scale-[0.98] shadow-md flex items-center gap-2 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              <span className="hidden sm:inline">Add to cart</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
