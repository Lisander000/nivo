import Link from "next/link";
import Avatar, { AvatarStack } from "@/components/Avatar";
import TestimonialCard from "@/components/TestimonialCard";
import LiveActivity from "@/components/LiveActivity";
import { testimonials, instagramPosts, ambassadors, pressQuotes } from "@/data/community";

export const metadata = {
  title: "Community · Nivo",
  description: "Real voices from the Nivo community in Kosovo.",
};

export default function CommunityPage() {
  const communityNames = testimonials.map((t) => t.name);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[12px] text-ink-muted mb-5">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <svg className="w-3 h-3 text-ink-faint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
        <span className="text-ink-secondary font-medium">Community</span>
      </nav>

      {/* HERO */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001847] via-[#0046BE] to-[#0057E0] text-white mb-8">
        <div className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

        <div className="relative px-6 md:px-16 py-16 md:py-24">
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 mb-6 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/90">50,000+ strong</span>
          </div>
          <h1 className="text-[44px] md:text-[72px] font-black leading-[0.95] tracking-tight mb-5 max-w-[780px]">
            This isn&apos;t a store. <br />
            It&apos;s a <span className="text-accent">community.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/75 max-w-[560px] leading-relaxed mb-8">
            Designers, devs, gamers, photographers, founders — every Nivo order is a story. Here are some of them.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <AvatarStack names={communityNames} size={40} />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] text-white/80 font-semibold mt-1">
                <span className="font-black text-white">4.8 / 5</span> from <span className="font-black text-white">12,400+</span> verified reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LIVE TICKER */}
      <div className="flex justify-center mb-10">
        <LiveActivity />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
        {[
          { num: "50k+", label: "Active shoppers", accent: "text-primary" },
          { num: "12.4k", label: "Verified reviews", accent: "text-accent" },
          { num: "4.8★", label: "Average rating", accent: "text-success" },
          { num: "98%", label: "Would buy again", accent: "text-primary" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl shadow-card p-5 md:p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
            <p className={`text-[32px] md:text-[40px] font-black ${s.accent} leading-none tracking-tight`}>{s.num}</p>
            <p className="text-[12px] text-ink-muted font-bold mt-2 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </div>

      {/* REVIEWS WALL */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Reviews wall</p>
            <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Straight from the source</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>

      {/* INSTAGRAM WALL */}
      <section className="mb-12 relative bg-gradient-to-br from-primary-light via-white to-pink-50 rounded-3xl p-6 md:p-10 border border-primary/10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1 h-8 bg-accent rounded-full" />
              <div>
                <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">#NivoKS</p>
                <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">From the feed</h2>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[44px] px-5 bg-white text-ink text-[13px] font-extrabold rounded-full shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all border border-border"
            >
              @nivo.ks
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-[72px] group-hover:scale-110 transition-transform duration-500">
                  {post.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-[11px] font-extrabold truncate">@{post.author}</p>
                  <p className="text-[10px] font-medium text-white/80 line-clamp-2 leading-tight mt-0.5">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AMBASSADORS */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">The Nivo Collective</p>
            <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">Ambassadors</h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ambassadors.map((a) => (
            <div key={a.name} className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all border border-transparent hover:border-primary/10">
              <Avatar name={a.name} size={64} />
              <p className="text-[16px] font-black text-ink mt-4">{a.name}</p>
              <p className="text-[12px] text-primary font-extrabold">{a.handle}</p>
              <p className="text-[11px] text-ink-muted mt-1.5 font-medium">{a.role}</p>
              <div className="mt-3 pt-3 border-t border-divider">
                <span className="inline-block text-[11px] font-extrabold text-primary bg-primary-light px-2.5 py-1 rounded-full uppercase tracking-wider">{a.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRESS */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-8 bg-accent rounded-full" />
          <div>
            <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">Press</p>
            <h2 className="text-[22px] md:text-[28px] font-black text-ink tracking-tight leading-tight">What they say about us</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pressQuotes.map((p) => (
            <div key={p.outlet} className="bg-white rounded-2xl shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all">
              <svg className="w-7 h-7 text-primary/15 mb-3" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <p className="text-[13px] text-ink leading-relaxed font-medium mb-4">&ldquo;{p.quote}&rdquo;</p>
              <p className="text-[11px] font-extrabold text-primary uppercase tracking-wider">— {p.outlet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <div className="relative bg-gradient-to-br from-[#001847] via-[#002D7A] to-[#0046BE] rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[280px] h-[280px] rounded-full bg-primary/30 blur-3xl" />
        <div className="relative max-w-[640px] mx-auto">
          <span className="inline-block text-[11px] font-extrabold text-accent uppercase tracking-[0.15em] bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">Join the movement</span>
          <p className="text-[30px] md:text-[44px] font-black mt-4 leading-[1.05] tracking-tight">
            Tag <span className="text-accent">#NivoKS</span><br />and get featured.
          </p>
          <p className="text-[14px] md:text-[15px] text-white/70 mt-4 mb-8 leading-relaxed">
            Share your unboxing, your setup, your wins. We repost the best every week — and the creators behind them get early access to launches.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-[52px] px-7 bg-accent text-white text-[15px] font-extrabold rounded-2xl hover:bg-accent-dark transition-all hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(255,103,0,0.4)]"
            >
              Follow @nivo.ks
            </a>
            <Link
              href="/category/all"
              className="inline-flex items-center h-[52px] px-7 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[14px] font-bold rounded-2xl hover:bg-white/15 transition-all"
            >
              Start shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
