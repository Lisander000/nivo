"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const searchQuery = searchParams.get("q") || "";

  const [sortBy, setSortBy] = useState("popular");
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [maxPrice, setMaxPrice] = useState(2000);
  const [freeDeliveryOnly, setFreeDeliveryOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const category = categories.find(c => c.slug === slug);
  const isAll = slug === "all";

  const baseProducts = useMemo(() => {
    let result = isAll ? products : getProductsByCategory(slug);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)));
    }
    return result;
  }, [slug, isAll, searchQuery]);

  const filteredProducts = useMemo(() => {
    let result = baseProducts;
    if (selectedBrands.size > 0) result = result.filter(p => selectedBrands.has(p.brand));
    if (maxPrice < 2000) result = result.filter(p => p.price <= maxPrice);
    if (freeDeliveryOnly) result = result.filter(p => p.deliveryFree);
    if (minRating > 0) result = result.filter(p => p.rating >= minRating);

    switch (sortBy) {
      case "price-low": return [...result].sort((a, b) => a.price - b.price);
      case "price-high": return [...result].sort((a, b) => b.price - a.price);
      case "rating": return [...result].sort((a, b) => b.rating - a.rating);
      case "newest": return [...result];
      default: return [...result].sort((a, b) => b.reviews - a.reviews);
    }
  }, [baseProducts, sortBy, selectedBrands, maxPrice, freeDeliveryOnly, minRating]);

  // Brand counts — show how many products each brand has (bol.com pattern)
  const availableBrands = useMemo(() => {
    const m = new Map<string, number>();
    baseProducts.forEach(p => m.set(p.brand, (m.get(p.brand) || 0) + 1));
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [baseProducts]);

  // Rating counts
  const ratingCounts = useMemo(() => {
    return [4, 3, 2].map(r => ({
      rating: r,
      count: baseProducts.filter(p => p.rating >= r).length,
    }));
  }, [baseProducts]);

  // Delivery count
  const freeDeliveryCount = useMemo(() => baseProducts.filter(p => p.deliveryFree).length, [baseProducts]);

  const toggleBrand = (b: string) => setSelectedBrands(prev => { const n = new Set(prev); n.has(b) ? n.delete(b) : n.add(b); return n; });
  const clearFilters = () => { setSelectedBrands(new Set()); setMaxPrice(2000); setFreeDeliveryOnly(false); setMinRating(0); };
  const activeCount = selectedBrands.size + (maxPrice < 2000 ? 1 : 0) + (freeDeliveryOnly ? 1 : 0) + (minRating > 0 ? 1 : 0);

  const Filters = () => (
    <div className="space-y-3">
      {/* Categories */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <h3 className="text-[13px] font-bold text-ink mb-3">Category</h3>
        <div className="space-y-0.5">
          <Link href="/category/all" className={`block text-[13px] py-1.5 px-3 rounded-xl transition-colors ${isAll ? "bg-primary text-white font-semibold" : "text-ink-secondary hover:bg-bg"}`}>All products</Link>
          {categories.map(c => (
            <Link key={c.slug} href={`/category/${c.slug}`} className={`flex items-center gap-2 text-[13px] py-1.5 px-3 rounded-xl transition-colors ${slug === c.slug ? "bg-primary text-white font-semibold" : "text-ink-secondary hover:bg-bg"}`}>
              <span className="text-[14px]">{c.icon}</span>
              <span className="flex-1">{c.name}</span>
              <span className={`text-[11px] ${slug === c.slug ? "text-white/70" : "text-ink-faint"}`}>{c.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Brands with counts */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <h3 className="text-[13px] font-bold text-ink mb-3">Brand</h3>
        <div className="space-y-1">
          {availableBrands.map(([brand, count]) => (
            <label key={brand} className="flex items-center gap-2.5 cursor-pointer py-1 group">
              <input type="checkbox" checked={selectedBrands.has(brand)} onChange={() => toggleBrand(brand)} className="w-4 h-4 rounded accent-primary" />
              <span className="text-[13px] text-ink-secondary group-hover:text-ink flex-1 transition-colors">{brand}</span>
              <span className="text-[11px] text-ink-faint font-medium">({count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <h3 className="text-[13px] font-bold text-ink mb-3">Price</h3>
        <input type="range" min={0} max={2000} step={50} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-full accent-primary" />
        <div className="flex justify-between mt-2">
          <span className="text-[12px] text-ink-muted">&euro;0</span>
          <span className="text-[13px] font-bold text-primary">&euro;{maxPrice},-</span>
        </div>
      </div>

      {/* Rating with counts */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <h3 className="text-[13px] font-bold text-ink mb-3">Rating</h3>
        <div className="space-y-1">
          {ratingCounts.map(({ rating: r, count }) => (
            <button key={r} onClick={() => setMinRating(minRating === r ? 0 : r)} className={`flex items-center gap-2 w-full py-1.5 px-3 rounded-xl text-[13px] transition-colors ${minRating === r ? "bg-primary-light text-primary font-medium" : "text-ink-secondary hover:bg-bg"}`}>
              <div className="flex gap-[1px]">{[...Array(5)].map((_, i) => <svg key={i} className={`w-3.5 h-3.5 ${i < r ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>
              <span className="flex-1 text-left">& up</span>
              <span className="text-[11px] text-ink-faint font-medium">({count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Delivery with count */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-success" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span className="text-[13px] text-ink-secondary font-medium">Free delivery</span>
            <span className="text-[11px] text-ink-faint">({freeDeliveryCount})</span>
          </div>
          <input type="checkbox" checked={freeDeliveryOnly} onChange={e => setFreeDeliveryOnly(e.target.checked)} className="w-4 h-4 accent-primary rounded" />
        </label>
      </div>

      {activeCount > 0 && (
        <button onClick={clearFilters} className="text-[13px] text-danger font-semibold hover:underline flex items-center gap-1 px-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          Clear all filters ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-4">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">{searchQuery ? `"${searchQuery}"` : isAll ? "All products" : category?.name}</span>
      </nav>

      <h1 className="text-[24px] font-bold text-ink mb-1">
        {searchQuery ? `Results for "${searchQuery}"` : isAll ? "All products" : category?.name}
      </h1>
      {category && !isAll && <p className="text-[14px] text-ink-muted mb-4">{category.description}</p>}

      <div className="flex gap-6 mt-4">
        <aside className="w-[260px] flex-shrink-0 hidden lg:block"><Filters /></aside>

        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-card px-5 py-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-[13px] text-ink-secondary font-medium">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
                Filters
                {activeCount > 0 && <span className="bg-primary text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{activeCount}</span>}
              </button>

              {/* Result count */}
              <span className="text-[13px] text-ink-muted hidden lg:block">
                <span className="font-semibold text-ink">{filteredProducts.length}</span> results
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* View toggle */}
              <div className="hidden md:flex items-center border border-border rounded-xl overflow-hidden">
                <button onClick={() => setViewMode("grid")} className={`w-8 h-8 flex items-center justify-center transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "text-ink-muted hover:bg-bg"}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg>
                </button>
                <button onClick={() => setViewMode("list")} className={`w-8 h-8 flex items-center justify-center transition-colors ${viewMode === "list" ? "bg-primary text-white" : "text-ink-muted hover:bg-bg"}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                </button>
              </div>

              {/* Sort */}
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="text-[13px] border border-border rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white font-medium">
                <option value="popular">Best selling</option>
                <option value="rating">Best rated</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Active filters pills */}
          {activeCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {[...selectedBrands].map(b => (
                <button key={b} onClick={() => toggleBrand(b)} className="flex items-center gap-1 bg-primary-light text-primary text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                  {b}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              ))}
              {maxPrice < 2000 && (
                <button onClick={() => setMaxPrice(2000)} className="flex items-center gap-1 bg-primary-light text-primary text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                  Max &euro;{maxPrice}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              )}
              {minRating > 0 && (
                <button onClick={() => setMinRating(0)} className="flex items-center gap-1 bg-primary-light text-primary text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                  {minRating}+ stars
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              )}
              {freeDeliveryOnly && (
                <button onClick={() => setFreeDeliveryOnly(false)} className="flex items-center gap-1 bg-primary-light text-primary text-[12px] font-medium px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors">
                  Free delivery
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              )}
              <button onClick={clearFilters} className="text-[12px] text-danger font-semibold hover:underline ml-1">Clear all</button>
            </div>
          )}

          {showFilters && <div className="lg:hidden mb-4"><Filters /></div>}

          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-card text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-bg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
              </div>
              <p className="text-[15px] font-semibold text-ink mb-1">No products found</p>
              <p className="text-[13px] text-ink-muted mb-4">Try adjusting your search or filters</p>
              <button onClick={clearFilters} className="h-[38px] px-6 bg-primary text-white text-[13px] font-bold rounded-xl hover:bg-primary-dark transition-colors">Clear filters</button>
            </div>
          ) : viewMode === "list" ? (
            <div className="space-y-3">
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} listView />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}

          {/* Category description — SEO text like bol.com */}
          {category && !isAll && (
            <div className="mt-8 bg-white rounded-2xl shadow-card p-6">
              <h2 className="text-[15px] font-bold text-ink mb-2">{category.name} at Nivo</h2>
              <p className="text-[13px] text-ink-muted leading-relaxed">
                Discover our wide range of {category.name.toLowerCase()} at the best prices in Kosovo. All products come with local warranty, free delivery, and 14-day returns. Shop from 150+ verified sellers and pay in installments with 0% interest.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
