"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

export default function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems, addToCart } = useCart();

  const suggestions = products.filter(p => !items.some(i => i.product.id === p.id)).slice(0, 3);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-[460px] bg-bg flex flex-col animate-slide-in-right shadow-xl">
        {/* Header */}
        <div className="bg-white px-6 py-5 flex items-center justify-between border-b border-divider">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-ink">Shopping cart</h2>
              <p className="text-[12px] text-ink-muted">{totalItems} {totalItems === 1 ? "item" : "items"}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-bg text-ink-muted hover:text-ink transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Delivery strip */}
        {items.length > 0 && (
          <div className="bg-success-light px-6 py-2.5 flex items-center gap-2">
            <svg className="w-4 h-4 text-success" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
            </svg>
            <span className="text-[12px] text-success-dark font-semibold">Free delivery on your order!</span>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-20 px-6">
              <div className="w-16 h-16 rounded-2xl bg-bg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <p className="text-[15px] font-semibold text-ink mb-1">Your cart is empty</p>
              <p className="text-[13px] text-ink-muted mb-4">Discover our latest products and deals</p>
              <button onClick={onClose} className="h-[38px] px-6 bg-primary text-white text-[13px] font-bold rounded-xl hover:bg-primary-dark transition-colors">
                Continue shopping
              </button>
            </div>
          ) : (
            <>
              <div className="divide-y divide-divider">
                {items.map(item => (
                  <div key={item.product.id} className="bg-white px-6 py-4 flex gap-4">
                    <Link href={`/product/${item.product.id}`} onClick={onClose} className="w-[72px] h-[72px] rounded-xl overflow-hidden bg-[#FAFBFD] flex-shrink-0">
                      <img src={item.product.image} alt="" className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.product.id}`} onClick={onClose} className="text-[13px] font-medium text-ink hover:text-primary line-clamp-2 leading-tight transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="text-[11px] text-ink-muted mt-1">Sold by {item.product.seller}</p>
                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-border rounded-xl overflow-hidden">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-ink-muted hover:bg-bg hover:text-ink text-[14px] transition-colors">
                            {item.quantity === 1 ? (
                              <svg className="w-4 h-4 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                            ) : "−"}
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center text-[13px] font-bold bg-bg text-ink">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-ink-muted hover:bg-bg hover:text-ink text-[14px] transition-colors">+</button>
                        </div>
                        <span className="text-[16px] font-bold text-ink">&euro;{item.product.price * item.quantity}<span className="text-[12px] font-semibold text-ink-muted">,-</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="px-6 py-5 bg-white mt-2">
                  <p className="text-[13px] font-bold text-ink mb-3">Others also bought</p>
                  <div className="space-y-2.5">
                    {suggestions.map(p => (
                      <div key={p.id} className="flex items-center gap-3 rounded-xl p-2.5 border border-divider hover:border-border-hover transition-colors">
                        <Link href={`/product/${p.id}`} onClick={onClose} className="w-[44px] h-[44px] rounded-lg bg-[#FAFBFD] overflow-hidden flex-shrink-0">
                          <img src={p.image} alt="" className="w-full h-full object-cover" />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] text-ink truncate font-medium">{p.name}</p>
                          <p className="text-[13px] font-bold text-ink">&euro;{p.price}<span className="text-[10px] text-ink-muted">,-</span></p>
                        </div>
                        <button onClick={() => addToCart(p)} className="text-[12px] font-bold text-primary hover:bg-primary-light px-3 py-1.5 rounded-lg transition-colors flex-shrink-0">
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="bg-white border-t border-divider px-6 py-5 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-[13px] text-ink-secondary">Subtotal ({totalItems} items)</span>
              <span className="text-[24px] font-extrabold text-ink">&euro;{totalPrice}<span className="text-[14px] text-ink-muted">,-</span></span>
            </div>
            <button className="w-full h-[48px] bg-accent hover:bg-accent-dark text-white text-[15px] font-bold rounded-xl transition-colors active:scale-[0.98] shadow-md hover:shadow-lg">
              Go to checkout
            </button>
            <p className="text-[11px] text-ink-muted text-center">
              or &euro;{Math.ceil(totalPrice / 12)}/mo &times; 12 monthly installments
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
