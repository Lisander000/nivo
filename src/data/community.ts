// Community data — testimonials, Instagram posts, ambassadors.
// Used on homepage, /about, and /community.

export interface Testimonial {
  name: string;
  city: string;
  role: string;
  rating: number;
  quote: string;
  product: string;
  verified: boolean;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Arta Krasniqi",
    city: "Prishtina",
    role: "Designer",
    rating: 5,
    quote: "Ordered my MacBook on Tuesday at 22:30, it was at my door Wednesday morning. Sealed box, local VAT invoice, and actual human WhatsApp support. Wild.",
    product: "MacBook Air M3",
    verified: true,
    date: "2 days ago",
  },
  {
    name: "Driton Berisha",
    city: "Peja",
    role: "Developer",
    rating: 5,
    quote: "Been buying tech from grey imports for years. First time paying Kahsya the extra 30€ — warranty, receipts, the works. Never going back.",
    product: "Sony WH-1000XM5",
    verified: true,
    date: "5 days ago",
  },
  {
    name: "Elira Gashi",
    city: "Gjakova",
    role: "Photographer",
    rating: 5,
    quote: "Split my €1,400 camera in 6 interest-free payments. Real customer service in Albanian. This is what we've been waiting for in Kosovo.",
    product: "Sony A7 IV",
    verified: true,
    date: "1 week ago",
  },
  {
    name: "Blerim Hoxha",
    city: "Mitrovica",
    role: "Student",
    rating: 5,
    quote: "Returned a mouse that didn't fit my hand. Zero drama, refund in 3 days. I literally took a picture of the courier pickup.",
    product: "Logitech MX Master 3S",
    verified: true,
    date: "1 week ago",
  },
  {
    name: "Fatlinda Maloku",
    city: "Prishtina",
    role: "Marketing lead",
    rating: 5,
    quote: "Bought iPhones for our whole team through Kahsya Business. Bulk discount, VAT invoice for accounting, next-day delivery. Chef's kiss.",
    product: "iPhone 15 Pro · x6",
    verified: true,
    date: "2 weeks ago",
  },
  {
    name: "Agon Rexhepi",
    city: "Ferizaj",
    role: "Gamer",
    rating: 5,
    quote: "PS5 bundle arrived in 18 hours to Ferizaj. Eighteen. Hours. Someone tell Amazon how it's done.",
    product: "PS5 Slim Bundle",
    verified: true,
    date: "3 weeks ago",
  },
];

export const liveActivity = [
  { name: "Arta K.", city: "Prishtina", action: "just bought", product: "iPhone 15 Pro", time: "2 min ago" },
  { name: "Driton B.", city: "Peja", action: "is viewing", product: "MacBook Pro 14", time: "3 min ago" },
  { name: "Elira G.", city: "Gjakova", action: "saved", product: "Sony A7 IV", time: "5 min ago" },
  { name: "Blerim H.", city: "Mitrovica", action: "just bought", product: "AirPods Pro 2", time: "7 min ago" },
  { name: "Fatlinda M.", city: "Prishtina", action: "left a 5★ review", product: "Galaxy S24", time: "9 min ago" },
  { name: "Agon R.", city: "Ferizaj", action: "just bought", product: "PS5 Slim", time: "12 min ago" },
];

export interface InstagramPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  author: string;
  gradient: string;
  emoji: string;
}

export const instagramPosts: InstagramPost[] = [
  { id: "1", caption: "Unboxing the new iPhone 16 Pro 📱", likes: 1240, comments: 48, author: "arta.k", gradient: "from-blue-500 to-purple-600", emoji: "📱" },
  { id: "2", caption: "Studio setup complete thanks to @kahsya", likes: 892, comments: 31, author: "driton.dev", gradient: "from-orange-500 to-pink-500", emoji: "💻" },
  { id: "3", caption: "First camera, first love 📸 #KahsyaKS", likes: 2104, comments: 87, author: "elira.shoots", gradient: "from-pink-500 to-rose-600", emoji: "📸" },
  { id: "4", caption: "Gaming rig upgrade 🎮 PS5 Day 1", likes: 1567, comments: 52, author: "agon.plays", gradient: "from-indigo-500 to-blue-600", emoji: "🎮" },
  { id: "5", caption: "Home office goals ✨", likes: 743, comments: 24, author: "fatlinda.m", gradient: "from-green-500 to-teal-600", emoji: "✨" },
  { id: "6", caption: "New AirPods, who dis? 🎧", likes: 1189, comments: 38, author: "blerim.h", gradient: "from-purple-500 to-indigo-600", emoji: "🎧" },
  { id: "7", caption: "Watch unboxing asmr 🤌", likes: 2341, comments: 102, author: "teuta.ks", gradient: "from-red-500 to-orange-600", emoji: "⌚" },
  { id: "8", caption: "Smart home era has begun 🏠", likes: 567, comments: 19, author: "valon.smart", gradient: "from-cyan-500 to-blue-600", emoji: "🏠" },
];

export const ambassadors = [
  { name: "Arta Krasniqi", handle: "@arta.k", role: "Designer · 48k followers", specialty: "Apple ecosystem" },
  { name: "Driton Berisha", handle: "@driton.dev", role: "Dev · 22k followers", specialty: "Laptops & coding gear" },
  { name: "Elira Gashi", handle: "@elira.shoots", role: "Photographer · 91k followers", specialty: "Cameras & lenses" },
  { name: "Agon Rexhepi", handle: "@agon.plays", role: "Streamer · 34k followers", specialty: "Gaming & consoles" },
];

export const pressQuotes = [
  { outlet: "Koha Ditore", quote: "Kosovo's answer to bol.com — and honestly, sharper." },
  { outlet: "Balkan Insight", quote: "A local tech marketplace built with Western-standard UX." },
  { outlet: "Telegrafi", quote: "Finally, online shopping in Kosovo that actually works." },
  { outlet: "Gazeta Express", quote: "Kahsya is reshaping how Kosovars buy technology." },
];
