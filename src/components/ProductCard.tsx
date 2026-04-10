"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, listView = false }: { product: Product; listView?: boolean }) {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  if (listView) {
    return (
      <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-200 flex overflow-hidden">
        {/* Image */}
        <Link href={`/product/${product.id}`} className="block w-[200px] flex-shrink-0 relative bg-[#FAFBFD]">
          <div className="aspect-square flex items-center justify-center p-4">
            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
          </div>
          {discount > 0 && (
            <span className="absolute top-2.5 left-2.5 bg-danger text-white text-[11px] font-bold px-2 py-[3px] rounded-lg shadow-sm">-{discount}%</span>
          )}
        </Link>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-[14px] text-ink leading-[1.45] line-clamp-2 hover:text-primary transition-colors font-medium">{product.name}</h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex gap-[1px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-[14px] h-[14px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[12px] text-ink-muted">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-3">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[24px] font-extrabold text-ink leading-none">{product.price}</span>
              <span className="text-[14px] font-bold text-ink-muted">,-</span>
            </div>
            {product.originalPrice && (
              <span className="text-[13px] text-ink-muted line-through">&euro;{product.originalPrice},-</span>
            )}
          </div>

          <div className="mt-auto pt-3 space-y-1.5">
            {/* Delivery */}
            <div className="flex items-center gap-1.5">
              <svg className="w-[14px] h-[14px] text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="text-[12px] text-success font-semibold">
                {product.deliveryDays <= 1 ? "Tomorrow at your door" : `In ${product.deliveryDays} days`}
              </span>
              {product.deliveryFree && <span className="text-[11px] text-success">&middot; Free</span>}
            </div>
            {/* Seller */}
            <p className="text-[11px] text-ink-muted">
              Sold by <span className="font-medium">{product.seller}</span> &middot; {product.sellerRating}/5
            </p>
          </div>
        </div>

        {/* Right: add to cart */}
        <div className="w-[160px] flex-shrink-0 p-5 flex flex-col justify-end border-l border-divider">
          <button
            onClick={() => addToCart(product)}
            className="w-full h-[40px] rounded-xl text-[13px] font-bold bg-primary text-white hover:bg-primary-dark active:scale-[0.97] transition-all shadow-sm"
          >
            Add to cart
          </button>
          <button className="mt-2 w-full h-[32px] text-[12px] text-ink-muted hover:text-primary transition-colors flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            Wishlist
          </button>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-200 flex flex-col h-full overflow-hidden">
      {/* Image */}
      <Link href={`/product/${product.id}`} className="block relative">
        <div className="aspect-[4/3] overflow-hidden bg-[#FAFBFD]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
        {discount > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-danger text-white text-[11px] font-bold px-2 py-[3px] rounded-lg shadow-sm">-{discount}%</span>
        )}
      </Link>

      {/* Content */}
      <div className="px-4 pt-3 pb-4 flex-1 flex flex-col">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[13px] text-ink leading-[1.45] line-clamp-2 group-hover:text-primary transition-colors font-medium">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex gap-[1px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-[14px] h-[14px] ${i < Math.floor(product.rating) ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[12px] text-ink-muted font-medium">{product.rating}</span>
          <span className="text-[11px] text-ink-faint">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3">
          {product.originalPrice && (
            <span className="text-[12px] text-ink-muted line-through block mb-0.5">&euro;{product.originalPrice},-</span>
          )}
          <div className="flex items-baseline gap-0.5">
            <span className="text-[22px] font-extrabold text-ink leading-none">{product.price}</span>
            <span className="text-[13px] font-bold text-ink-muted leading-none">,-</span>
          </div>
        </div>

        {/* Delivery — first-class citizen like bol.com */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <svg className="w-[14px] h-[14px] text-success flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          <span className="text-[12px] text-success font-semibold">
            {product.deliveryDays <= 1 ? "Tomorrow at your door" : `In ${product.deliveryDays} days`}
          </span>
        </div>

        {/* Seller */}
        <p className="text-[11px] text-ink-muted mt-1">
          Sold by <span className="font-medium">{product.seller}</span>
        </p>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full h-[38px] rounded-xl text-[13px] font-bold bg-primary text-white hover:bg-primary-dark active:scale-[0.97] transition-all duration-150 shadow-sm hover:shadow-md"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
