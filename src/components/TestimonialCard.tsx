import Avatar from "./Avatar";
import type { Testimonial } from "@/data/community";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 md:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10 flex flex-col">
      {/* Big quote mark */}
      <svg className="absolute top-5 right-5 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" fill="currentColor" viewBox="0 0 32 32" aria-hidden>
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      {/* Stars */}
      <div className="flex gap-[1px] mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < t.rating ? "text-star" : "text-ink-faint/40"}`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] md:text-[15px] text-ink leading-[1.55] font-medium flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Product tag */}
      <div className="mt-5 mb-5 inline-flex self-start items-center gap-1.5 text-[11px] text-primary font-extrabold bg-primary-light px-2.5 py-1 rounded-full uppercase tracking-wider">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272" />
        </svg>
        {t.product}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-divider">
        <Avatar name={t.name} size={44} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[13px] font-extrabold text-ink truncate">{t.name}</p>
            {t.verified && (
              <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <p className="text-[11px] text-ink-muted font-medium">{t.role} · {t.city}</p>
        </div>
        <span className="text-[11px] text-ink-faint font-medium">{t.date}</span>
      </div>
    </div>
  );
}
