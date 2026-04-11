export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  author: string;
  date: string;
}

export interface BundleItem {
  productId: string;
  discount: number; // percentage off when bought together
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  categorySlug: string;
  rating: number;
  reviews: number;
  reviewsList: Review[];
  faq: FAQ[];
  badge?: string;
  description: string;
  highlights: string[];
  specs: Record<string, string>;
  inStock: boolean;
  stockCount?: number;
  deliveryDays: number;
  deliveryFree: boolean;
  warranty: string;
  seller: string;
  sellerRating: number;
  verified: boolean;
  sku: string;
  bundleWith?: BundleItem[];
  tags: string[];
}

export interface SubCategory {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: number;
  image: string;
  subs: SubCategory[];
}

export const categories: Category[] = [
  { name: "Home & Living", slug: "home-living", description: "Furniture, decor & interior style", icon: "🛋️", count: 18420, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    subs: [{ name: "Furniture", slug: "home-living" }, { name: "Lighting", slug: "home-living" }, { name: "Bedding & Textiles", slug: "home-living" }, { name: "Wall Decor", slug: "home-living" }, { name: "Storage", slug: "home-living" }, { name: "Rugs & Carpets", slug: "home-living" }] },
  { name: "Fashion", slug: "fashion", description: "Clothing, shoes & accessories", icon: "👗", count: 24150, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
    subs: [{ name: "Women's Clothing", slug: "fashion" }, { name: "Men's Clothing", slug: "fashion" }, { name: "Kids & Baby", slug: "fashion" }, { name: "Shoes", slug: "fashion" }, { name: "Bags & Wallets", slug: "fashion" }, { name: "Accessories", slug: "fashion" }] },
  { name: "Electronics", slug: "electronics", description: "Phones, laptops & gadgets", icon: "📱", count: 12840, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    subs: [{ name: "Smartphones", slug: "smartphones" }, { name: "Laptops", slug: "laptops" }, { name: "Audio", slug: "audio" }, { name: "Wearables", slug: "wearables" }, { name: "Gaming", slug: "gaming" }, { name: "Smart Home", slug: "smart-home" }] },
  { name: "Beauty & Care", slug: "beauty", description: "Makeup, skincare & fragrance", icon: "💄", count: 9870, image: "https://images.unsplash.com/photo-1522335789203-aaa9dc5f5a4d?w=400&h=300&fit=crop",
    subs: [{ name: "Skincare", slug: "beauty" }, { name: "Makeup", slug: "beauty" }, { name: "Haircare", slug: "beauty" }, { name: "Fragrance", slug: "beauty" }, { name: "Men's Grooming", slug: "beauty" }, { name: "Tools & Devices", slug: "beauty" }] },
  { name: "Kitchen & Dining", slug: "kitchen", description: "Cookware, appliances & tableware", icon: "🍳", count: 11230, image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    subs: [{ name: "Small Appliances", slug: "kitchen" }, { name: "Cookware", slug: "kitchen" }, { name: "Knives & Tools", slug: "kitchen" }, { name: "Tableware", slug: "kitchen" }, { name: "Food Storage", slug: "kitchen" }, { name: "Coffee & Tea", slug: "kitchen" }] },
  { name: "Toys & Kids", slug: "toys", description: "Toys, games & baby essentials", icon: "🧸", count: 8560, image: "https://images.unsplash.com/photo-1558877385-8c1fa66454ab?w=400&h=300&fit=crop",
    subs: [{ name: "Building Sets", slug: "toys" }, { name: "Dolls & Figures", slug: "toys" }, { name: "Board Games", slug: "toys" }, { name: "Outdoor Toys", slug: "toys" }, { name: "Baby Gear", slug: "toys" }, { name: "Learning Toys", slug: "toys" }] },
  { name: "Sports & Outdoor", slug: "sports", description: "Fitness, cycling & adventure", icon: "⚽", count: 7340, image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop",
    subs: [{ name: "Fitness Equipment", slug: "sports" }, { name: "Cycling", slug: "sports" }, { name: "Running", slug: "sports" }, { name: "Camping & Hiking", slug: "sports" }, { name: "Team Sports", slug: "sports" }, { name: "Water Sports", slug: "sports" }] },
  { name: "Books & Media", slug: "books", description: "Books, music, movies & games", icon: "📚", count: 15980, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
    subs: [{ name: "Fiction", slug: "books" }, { name: "Non-Fiction", slug: "books" }, { name: "Children's Books", slug: "books" }, { name: "Textbooks", slug: "books" }, { name: "Music & Vinyl", slug: "books" }, { name: "Movies & TV", slug: "books" }] },
  { name: "Garden & DIY", slug: "garden", description: "Plants, tools & outdoor living", icon: "🌿", count: 6420, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    subs: [{ name: "Plants & Seeds", slug: "garden" }, { name: "Outdoor Furniture", slug: "garden" }, { name: "Power Tools", slug: "garden" }, { name: "Hand Tools", slug: "garden" }, { name: "BBQ & Grilling", slug: "garden" }, { name: "Garden Decor", slug: "garden" }] },
  { name: "Health & Wellness", slug: "health", description: "Supplements, fitness & self-care", icon: "💊", count: 5210, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop",
    subs: [{ name: "Vitamins", slug: "health" }, { name: "Personal Care", slug: "health" }, { name: "Medical Devices", slug: "health" }, { name: "Sleep & Relaxation", slug: "health" }, { name: "Oral Care", slug: "health" }] },
  { name: "Pet Supplies", slug: "pets", description: "Food, toys & care for every pet", icon: "🐾", count: 3840, image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop",
    subs: [{ name: "Dog Supplies", slug: "pets" }, { name: "Cat Supplies", slug: "pets" }, { name: "Small Animals", slug: "pets" }, { name: "Aquarium", slug: "pets" }, { name: "Pet Food", slug: "pets" }] },
  { name: "Groceries", slug: "groceries", description: "Pantry, drinks & specialty foods", icon: "🛒", count: 4960, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    subs: [{ name: "Pantry Staples", slug: "groceries" }, { name: "Snacks", slug: "groceries" }, { name: "Drinks", slug: "groceries" }, { name: "Breakfast", slug: "groceries" }, { name: "Specialty & Organic", slug: "groceries" }] },
  // Legacy tech sub-category slugs (kept so existing products keep routing)
  { name: "Smartphones", slug: "smartphones", description: "Latest flagship & budget phones", icon: "📱", count: 48, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    subs: [{ name: "iPhones", slug: "smartphones" }, { name: "Samsung Galaxy", slug: "smartphones" }, { name: "Xiaomi", slug: "smartphones" }, { name: "Cases & Protection", slug: "smartphones" }, { name: "Chargers & Cables", slug: "smartphones" }, { name: "Screen Protectors", slug: "smartphones" }] },
  { name: "Laptops", slug: "laptops", description: "Power meets portability", icon: "💻", count: 35, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    subs: [{ name: "MacBooks", slug: "laptops" }, { name: "Windows Laptops", slug: "laptops" }, { name: "Chromebooks", slug: "laptops" }, { name: "Laptop Bags", slug: "laptops" }, { name: "Monitors", slug: "laptops" }, { name: "Keyboards & Mice", slug: "laptops" }] },
  { name: "Audio", slug: "audio", description: "Headphones, earbuds & speakers", icon: "🎧", count: 52, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    subs: [{ name: "Wireless Earbuds", slug: "audio" }, { name: "Over-ear Headphones", slug: "audio" }, { name: "Bluetooth Speakers", slug: "audio" }, { name: "Soundbars", slug: "audio" }, { name: "Microphones", slug: "audio" }, { name: "Audio Accessories", slug: "audio" }] },
  { name: "Wearables", slug: "wearables", description: "Smartwatches & fitness trackers", icon: "⌚", count: 28, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    subs: [{ name: "Apple Watch", slug: "wearables" }, { name: "Samsung Galaxy Watch", slug: "wearables" }, { name: "Fitness Trackers", slug: "wearables" }, { name: "Watch Bands", slug: "wearables" }, { name: "Smart Rings", slug: "wearables" }] },
  { name: "Gaming", slug: "gaming", description: "Consoles, accessories & gear", icon: "🎮", count: 41, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&h=300&fit=crop",
    subs: [{ name: "PlayStation", slug: "gaming" }, { name: "Xbox", slug: "gaming" }, { name: "Nintendo Switch", slug: "gaming" }, { name: "Gaming Headsets", slug: "gaming" }, { name: "Controllers", slug: "gaming" }, { name: "Gaming Chairs", slug: "gaming" }] },
  { name: "Smart Home", slug: "smart-home", description: "Connected living devices", icon: "🏠", count: 33, image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=400&h=300&fit=crop",
    subs: [{ name: "Smart Speakers", slug: "smart-home" }, { name: "Smart Lighting", slug: "smart-home" }, { name: "Security Cameras", slug: "smart-home" }, { name: "Robot Vacuums", slug: "smart-home" }, { name: "Thermostats", slug: "smart-home" }] },
];

// Primary navigable categories (shown on homepage / mega menu main row)
export const primaryCategories = categories.slice(0, 12);

const sharedReviews: Review[] = [
  { id: "r1", author: "Arta M.", date: "2026-03-28", rating: 5, title: "Best purchase I've made this year", body: "Absolutely love it. The build quality is premium and it performs exactly as advertised. Delivery was fast too.", verified: true, helpful: 24 },
  { id: "r2", author: "Besnik H.", date: "2026-03-15", rating: 4, title: "Great product, minor issues", body: "Overall very happy with the purchase. Small learning curve but worth it. Kahsya delivery was on time.", verified: true, helpful: 12 },
  { id: "r3", author: "Dren K.", date: "2026-03-02", rating: 5, title: "Exceeded my expectations", body: "I compared prices everywhere and Kahsya had the best deal with actual warranty. Product is flawless.", verified: true, helpful: 18 },
  { id: "r4", author: "Fjolla S.", date: "2026-02-20", rating: 4, title: "Solid choice", body: "Good value for money. The seller was very responsive when I had questions about setup.", verified: true, helpful: 8 },
  { id: "r5", author: "Gent R.", date: "2026-02-10", rating: 5, title: "Highly recommended", body: "Ordered for my business, arrived next day in perfect packaging. Already ordering more.", verified: true, helpful: 31 },
];

const sharedFaq: FAQ[] = [
  { question: "Is this product covered by local warranty?", answer: "Yes, all products on Kahsya come with local warranty handled through our verified seller network. You can claim warranty directly through your Kahsya account.", author: "Kahsya Support", date: "2026-03-01" },
  { question: "Can I pay in installments?", answer: "Yes! We offer 3, 6, or 12 month installment plans through our banking partners. Select 'Installments' at checkout to see your monthly payment.", author: "Kahsya Support", date: "2026-03-01" },
  { question: "How fast is delivery?", answer: "Prishtina: next-day delivery. Rest of Kosovo: 2-3 business days. You'll see the exact delivery date before checkout.", author: "Kahsya Support", date: "2026-03-01" },
];

export const products: Product[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro 256GB — Natural Titanium",
    brand: "Apple",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&h=800&fit=crop",
    ],
    category: "Smartphones",
    categorySlug: "smartphones",
    rating: 4.9,
    reviews: 234,
    reviewsList: sharedReviews,
    faq: [...sharedFaq, { question: "Does it come with a charger?", answer: "The iPhone 16 Pro comes with a USB-C to USB-C cable. A power adapter is not included but can be purchased separately.", author: "TechZone Prishtina", date: "2026-03-05" }],
    badge: "Bestseller",
    description: "The most advanced iPhone ever. Featuring the A18 Pro chip, a 48MP camera system with 5x optical zoom, and an aerospace-grade titanium design. Capture stunning spatial video and enjoy all-day battery life.",
    highlights: ["A18 Pro chip — fastest chip ever in a smartphone", "48MP camera with 5x optical zoom", "Titanium design, incredibly light and durable", "All-day battery life with USB-C fast charging", "Action Button for instant camera access"],
    specs: { "Display": "6.3\" Super Retina XDR OLED", "Chip": "A18 Pro", "Camera": "48MP Main + 48MP Ultra Wide + 12MP Telephoto", "Battery": "All-day battery life", "Storage": "256GB", "5G": "Yes", "Water Resistance": "IP68", "Weight": "199g", "OS": "iOS 18" },
    inStock: true,
    stockCount: 15,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "2 years official Apple warranty",
    seller: "TechZone Prishtina",
    sellerRating: 4.8,
    verified: true,
    sku: "APL-IP16P-256-NT",
    bundleWith: [
      { productId: "airpods-pro-2", discount: 10 },
      { productId: "apple-watch-ultra-2", discount: 5 },
    ],
    tags: ["apple", "iphone", "smartphone", "5g", "flagship"],
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air 13\" M3 Chip — Midnight",
    brand: "Apple",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=800&fit=crop",
    ],
    category: "Laptops",
    categorySlug: "laptops",
    rating: 4.8,
    reviews: 189,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    badge: "Popular",
    description: "Supercharged by M3. Strikingly thin design with up to 18 hours of battery life. The 13.6-inch Liquid Retina display brings everything to life in rich detail.",
    highlights: ["Apple M3 chip for blazing performance", "Up to 18 hours battery life", "13.6\" Liquid Retina display", "Fanless, silent design — only 1.24kg", "MagSafe charging + 2x Thunderbolt ports"],
    specs: { "Display": "13.6\" Liquid Retina", "Chip": "Apple M3", "RAM": "8GB unified", "Storage": "256GB SSD", "Battery": "Up to 18 hours", "Weight": "1.24 kg", "Ports": "2x Thunderbolt, MagSafe, 3.5mm", "Camera": "1080p FaceTime HD" },
    inStock: true,
    stockCount: 8,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "2 years official Apple warranty",
    seller: "Apple Store Kosovo",
    sellerRating: 4.9,
    verified: true,
    sku: "APL-MBA-M3-256-MN",
    bundleWith: [{ productId: "airpods-pro-2", discount: 10 }],
    tags: ["apple", "macbook", "laptop", "m3"],
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro 2nd Generation — USB-C",
    brand: "Apple",
    price: 279,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&h=800&fit=crop",
    ],
    category: "Audio",
    categorySlug: "audio",
    rating: 4.7,
    reviews: 412,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    description: "Rebuilt from the sound up. H2 chip powers Active Noise Cancellation up to 2x more effective. Adaptive Transparency and Personalized Spatial Audio immerse you in sound.",
    highlights: ["H2 chip with 2x better Active Noise Cancellation", "Adaptive Transparency mode", "Personalized Spatial Audio with head tracking", "6h listening, 30h total with case", "USB-C MagSafe charging case"],
    specs: { "Chip": "H2", "ANC": "Active Noise Cancellation", "Battery": "6h (30h with case)", "Water Resistance": "IPX4", "Connectivity": "Bluetooth 5.3", "Charging": "USB-C / MagSafe / Qi" },
    inStock: true,
    stockCount: 42,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "1 year official Apple warranty",
    seller: "SoundWave KS",
    sellerRating: 4.7,
    verified: true,
    sku: "APL-APP2-USBC",
    tags: ["apple", "airpods", "earbuds", "anc"],
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra 256GB — Titanium Black",
    brand: "Samsung",
    price: 1399,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&h=800&fit=crop",
    ],
    category: "Smartphones",
    categorySlug: "smartphones",
    rating: 4.8,
    reviews: 178,
    reviewsList: sharedReviews,
    faq: [...sharedFaq, { question: "Does the S Pen need charging?", answer: "No, the built-in S Pen works without a battery for basic functions. Bluetooth features charge automatically when docked.", author: "Samsung Kosovo", date: "2026-02-15" }],
    badge: "Sale",
    description: "The ultimate Galaxy experience. With Galaxy AI built in, a 200MP camera, titanium frame, and the embedded S Pen, this is the most powerful Galaxy smartphone ever.",
    highlights: ["Galaxy AI built-in for smart features", "200MP main camera with Nightography", "Titanium frame, flat display", "Built-in S Pen for notes and sketches", "5000mAh battery, fast wireless charging"],
    specs: { "Display": "6.8\" Dynamic AMOLED 2X, 120Hz", "Chip": "Snapdragon 8 Gen 3", "Camera": "200MP + 50MP + 12MP + 10MP", "Battery": "5000mAh", "Storage": "256GB", "S Pen": "Built-in", "Water Resistance": "IP68", "Weight": "232g" },
    inStock: true,
    stockCount: 6,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "2 years Samsung warranty",
    seller: "Samsung Kosovo",
    sellerRating: 4.9,
    verified: true,
    sku: "SAM-S24U-256-TB",
    bundleWith: [{ productId: "galaxy-buds3-pro", discount: 15 }],
    tags: ["samsung", "galaxy", "smartphone", "5g", "flagship", "ai"],
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling",
    brand: "Sony",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop",
    ],
    category: "Audio",
    categorySlug: "audio",
    rating: 4.8,
    reviews: 356,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    badge: "Sale",
    description: "Industry-leading noise cancellation optimized automatically. Crystal clear hands-free calling with 4 beamforming microphones. Up to 30 hours of battery life.",
    highlights: ["Industry-leading noise cancellation", "30 hours battery, 3 min charge = 3 hours", "Multipoint for 2 devices simultaneously", "Ultra-lightweight at 250g", "Speak-to-Chat pauses music automatically"],
    specs: { "Type": "Over-ear wireless", "ANC": "Adaptive Sound Control", "Battery": "30 hours", "Driver": "30mm carbon fiber composite", "Weight": "250g", "Connectivity": "Bluetooth 5.2, 3.5mm, USB-C", "Codec": "LDAC, AAC, SBC" },
    inStock: true,
    stockCount: 19,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "2 years Sony warranty",
    seller: "SoundWave KS",
    sellerRating: 4.7,
    verified: true,
    sku: "SNY-WH1000XM5-BK",
    tags: ["sony", "headphones", "anc", "wireless"],
  },
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2 — Titanium with Orange Band",
    brand: "Apple",
    price: 899,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=800&h=800&fit=crop",
    ],
    category: "Wearables",
    categorySlug: "wearables",
    rating: 4.9,
    reviews: 145,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    badge: "New",
    description: "The most capable Apple Watch ever. Brightest Always-On display. Precision dual-frequency GPS. Built for endurance, exploration, and adventure.",
    highlights: ["49mm titanium case, rugged yet refined", "3000 nit Always-On Retina display", "Up to 36 hours battery (72h low power)", "Precision dual-frequency GPS", "100m water resistance, depth gauge"],
    specs: { "Display": "49mm Always-On Retina LTPO2", "Chip": "S9 SiP", "Battery": "Up to 36 hours", "Water Resistance": "100m, EN13319", "GPS": "Precision dual-frequency L1/L5", "Case": "Titanium", "Sensors": "Heart rate, SpO2, temp, depth", "Weight": "61.4g" },
    inStock: true,
    stockCount: 4,
    deliveryDays: 2,
    deliveryFree: true,
    warranty: "2 years official Apple warranty",
    seller: "Apple Store Kosovo",
    sellerRating: 4.9,
    verified: true,
    sku: "APL-AWU2-TI-OR",
    bundleWith: [{ productId: "airpods-pro-2", discount: 10 }],
    tags: ["apple", "watch", "wearable", "fitness"],
  },
  {
    id: "ps5-slim",
    name: "PlayStation 5 Slim Disc Edition — 1TB",
    brand: "Sony",
    price: 499,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=800&fit=crop",
    ],
    category: "Gaming",
    categorySlug: "gaming",
    rating: 4.7,
    reviews: 523,
    reviewsList: sharedReviews,
    faq: [...sharedFaq, { question: "Is this the disc or digital version?", answer: "This is the Disc Edition which plays both physical discs and digital games.", author: "GameWorld Kosovo", date: "2026-02-20" }],
    badge: "Popular",
    description: "Experience lightning-fast loading, haptic feedback, adaptive triggers, and 3D Audio. Slimmer, lighter design with 1TB SSD.",
    highlights: ["1TB custom SSD for instant loading", "4K gaming up to 120fps", "DualSense controller with haptic feedback", "Ray tracing for stunning visuals", "Backwards compatible with PS4 games"],
    specs: { "Storage": "1TB custom SSD", "Resolution": "Up to 4K 120fps", "Ray Tracing": "Hardware-accelerated", "Audio": "Tempest 3D AudioTech", "Connectivity": "Wi-Fi 6, Bluetooth 5.1", "Disc Drive": "4K UHD Blu-ray", "Ports": "USB-A, USB-C, HDMI 2.1", "Weight": "3.2 kg" },
    inStock: true,
    stockCount: 11,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "2 years Sony warranty",
    seller: "GameWorld Kosovo",
    sellerRating: 4.6,
    verified: true,
    sku: "SNY-PS5S-DISC-1TB",
    tags: ["sony", "playstation", "gaming", "console"],
  },
  {
    id: "dyson-v15",
    name: "Dyson V15 Detect Absolute — Cordless Vacuum",
    brand: "Dyson",
    price: 749,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&h=800&fit=crop",
    ],
    category: "Smart Home",
    categorySlug: "smart-home",
    rating: 4.6,
    reviews: 89,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    description: "Intelligently optimizes suction. A laser reveals microscopic dust. LCD screen shows scientific proof of a deep clean in real time.",
    highlights: ["Green laser reveals invisible dust", "Piezo sensor counts and sizes particles", "230 AW of suction power", "Up to 60 minutes runtime", "Whole-machine HEPA filtration"],
    specs: { "Suction": "230 AW", "Runtime": "Up to 60 min", "Filtration": "Whole-machine HEPA", "Laser": "Green laser dust detection", "Display": "Piezo sensor LCD", "Weight": "3.1 kg", "Bin Volume": "0.76L" },
    inStock: true,
    stockCount: 3,
    deliveryDays: 2,
    deliveryFree: true,
    warranty: "2 years Dyson warranty",
    seller: "HomeTech Prishtina",
    sellerRating: 4.5,
    verified: true,
    sku: "DYS-V15-DET-ABS",
    tags: ["dyson", "vacuum", "smart-home", "cleaning"],
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15 — OLED 3.5K, i7, RTX 4060",
    brand: "Dell",
    price: 1599,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=800&fit=crop",
    ],
    category: "Laptops",
    categorySlug: "laptops",
    rating: 4.7,
    reviews: 167,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    badge: "Sale",
    description: "InfinityEdge OLED display for immersive viewing. Intel Core i7 and NVIDIA RTX 4060 for uncompromised performance in a stunning thin design.",
    highlights: ["15.6\" 3.5K OLED InfinityEdge display", "Intel Core i7-13700H 14-core", "NVIDIA GeForce RTX 4060 6GB", "16GB DDR5 RAM, 512GB NVMe SSD", "CNC machined aluminum chassis"],
    specs: { "Display": "15.6\" OLED 3.5K 400nit", "CPU": "Intel Core i7-13700H", "GPU": "NVIDIA RTX 4060 6GB", "RAM": "16GB DDR5 4800MHz", "Storage": "512GB PCIe 4.0 NVMe", "Battery": "86 Whr", "Weight": "1.86 kg", "Ports": "2x TB4, USB-C, SD, 3.5mm" },
    inStock: true,
    stockCount: 5,
    deliveryDays: 2,
    deliveryFree: true,
    warranty: "2 years Dell warranty",
    seller: "CompuStore KS",
    sellerRating: 4.6,
    verified: true,
    sku: "DEL-XPS15-OLED-I7",
    tags: ["dell", "xps", "laptop", "oled", "creator"],
  },
  {
    id: "galaxy-buds3-pro",
    name: "Samsung Galaxy Buds3 Pro — Silver",
    brand: "Samsung",
    price: 249,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=800&h=800&fit=crop",
    ],
    category: "Audio",
    categorySlug: "audio",
    rating: 4.5,
    reviews: 203,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    description: "Premium blade design with 2-way speakers. Galaxy AI enhances calls and translates conversations in real time. Hi-Fi 24bit audio.",
    highlights: ["2-way speaker: Planar + Dynamic driver", "Galaxy AI real-time translation", "Intelligent ANC adapts to surroundings", "24bit Hi-Fi audio with 360 Audio", "IP57 water and dust resistant"],
    specs: { "Driver": "2-way (Planar + Dynamic)", "ANC": "Intelligent Active Noise Cancellation", "Battery": "6h (26h with case)", "Audio": "24bit Hi-Fi, 360 Audio", "Water Resistance": "IP57", "Connectivity": "Bluetooth 5.4", "Codec": "Samsung Seamless, AAC, SBC" },
    inStock: true,
    stockCount: 22,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "1 year Samsung warranty",
    seller: "Samsung Kosovo",
    sellerRating: 4.9,
    verified: true,
    sku: "SAM-GB3P-SLV",
    tags: ["samsung", "earbuds", "anc", "ai"],
  },
  {
    id: "nintendo-switch-oled",
    name: "Nintendo Switch OLED Model — White",
    brand: "Nintendo",
    price: 349,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=800&fit=crop",
    ],
    category: "Gaming",
    categorySlug: "gaming",
    rating: 4.6,
    reviews: 389,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    description: "Vibrant 7-inch OLED screen, wide adjustable stand, wired LAN port, and 64GB storage. Play at home on TV or on the go.",
    highlights: ["7\" OLED screen with vivid colors", "64GB internal storage", "Wide adjustable kickstand", "Enhanced audio speakers", "Play on TV, tabletop, or handheld"],
    specs: { "Display": "7\" OLED 720p", "Storage": "64GB (expandable via microSD)", "Battery": "4.5-9 hours", "Output": "TV / Tabletop / Handheld", "Controllers": "Joy-Con (L/R) included", "Online": "Nintendo Switch Online compatible", "Weight": "420g (with Joy-Con)" },
    inStock: true,
    stockCount: 16,
    deliveryDays: 1,
    deliveryFree: true,
    warranty: "1 year Nintendo warranty",
    seller: "GameWorld Kosovo",
    sellerRating: 4.6,
    verified: true,
    sku: "NIN-SW-OLED-WHT",
    tags: ["nintendo", "switch", "gaming", "portable"],
  },
  {
    id: "google-pixel-watch-2",
    name: "Google Pixel Watch 2 — Champagne Gold",
    brand: "Google",
    price: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
    ],
    category: "Wearables",
    categorySlug: "wearables",
    rating: 4.4,
    reviews: 112,
    reviewsList: sharedReviews,
    faq: sharedFaq,
    description: "Best of Google and Fitbit combined. Advanced health tracking, stress management, and Google AI on your wrist. Beautiful domed design.",
    highlights: ["Google AI + Fitbit health tracking", "Heart rate, SpO2, ECG, skin temperature", "24 hour battery life", "Wear OS with Google apps built in", "Gorilla Glass 5 custom 3D dome"],
    specs: { "Display": "Custom AMOLED dome", "Chip": "Qualcomm 5100", "Battery": "24 hours", "Health": "Heart rate, SpO2, ECG, Skin temp", "GPS": "Multi-band GNSS", "Water Resistance": "5 ATM", "OS": "Wear OS 4" },
    inStock: true,
    stockCount: 7,
    deliveryDays: 2,
    deliveryFree: false,
    warranty: "1 year Google warranty",
    seller: "TechZone Prishtina",
    sellerRating: 4.8,
    verified: true,
    sku: "GOO-PW2-CG",
    tags: ["google", "pixel", "watch", "wearable", "fitbit"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge === "Bestseller" || p.badge === "Popular" || p.badge === "New");
}

export function getDeals(): Product[] {
  return products.filter((p) => p.originalPrice);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.tags.some((t) => product.tags.includes(t))))
    .slice(0, limit);
}

export function getBundleProducts(product: Product): { product: Product; discount: number }[] {
  if (!product.bundleWith) return [];
  return product.bundleWith
    .map((b) => {
      const p = getProductById(b.productId);
      return p ? { product: p, discount: b.discount } : null;
    })
    .filter((b): b is { product: Product; discount: number } => b !== null);
}
