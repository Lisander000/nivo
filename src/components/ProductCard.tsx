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
      <div className="group flex gap-6 py-6 border-b border-border">
        {/* Image */}
        <Link href={`/product/${product.id}`} className="block w-[200px] flex-shrink-0 relative bg-primary-light">
          <div className="aspect-square flex items-center justify-center p-6">
            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-[1.03] transition-transform duration-700" />
          </div>
          {discount > 0 && (
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.14em] text-accent">−{discount}%</span>
          )}
        </Link>

        {/* Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-[10px] uppercase tracking-[0.14em] text-ink-muted">{product.seller}</p>
          <Link href={`/product/${product.id}`}>
            <h3 className="font-display text-[22px] text-ink leading-tight mt-1.5 group-hover:text-accent transition-colors">{product.name}</h3>
          </Link>

          <div className="flex items-center gap-2 mt-3 text-[11px] text-ink-muted">
            <span>★ {product.rating}</span>
            <span className="text-ink-faint">·</span>
            <span>{product.reviews} reviews</span>
            <span className="text-ink-faint">·</span>
            <span>{product.deliveryDays <= 1 ? "Tomorrow" : `${product.deliveryDays} days`}</span>
          </div>

          <div className="mt-auto pt-4 flex items-end justify-between">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[28px] text-ink leading-none">€{product.price}</span>
              {product.originalPrice && (
                <span className="text-[12px] text-ink-muted line-through">€{product.originalPrice}</span>
              )}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="h-[42px] px-6 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium bg-ink text-bg hover:bg-accent transition-colors"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view — editorial gallery style
  return (
    <div className="group flex flex-col">
      <Link href={`/product/${product.id}`} className="block relative">
        <div className="aspect-[4/5] overflow-hidden bg-primary-light">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[800ms] ease-out"
          />
        </div>
        {discount > 0 && (
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.14em] text-accent">−{discount}%</span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); addToCart(product); }}
          className="absolute bottom-4 left-4 right-4 h-[42px] rounded-full text-[11px] uppercase tracking-[0.14em] font-medium bg-ink text-bg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent"
        >
          Add to bag
        </button>
      </Link>

      <div className="pt-5">
        <p className="text-[10px] uppercase tracking-[0.14em] text-ink-muted">{product.seller}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-display text-[18px] text-ink leading-tight mt-1.5 line-clamp-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline gap-3 mt-3">
          <span className="text-[14px] text-ink tabular-nums">€{product.price}</span>
          {product.originalPrice && (
            <span className="text-[12px] text-ink-muted line-through tabular-nums">€{product.originalPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2 text-[11px] text-ink-muted">
          <span>★ {product.rating}</span>
          <span className="text-ink-faint">·</span>
          <span>{product.deliveryDays <= 1 ? "Tomorrow" : `${product.deliveryDays}d`}</span>
        </div>
      </div>
    </div>
  );
}
