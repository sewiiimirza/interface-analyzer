export const PLANS = [
  {
    id: "standard",
    name: "Standard Plan",
    price: 900,
    days: 10,
    color: "var(--brand-green)",
    badge: null,
    highlight: false,
    features: ["Limited videos", "Limited AI script credits", "Basic captions", "1 niche slot", "Email support"],
  },
  {
    id: "unlimited",
    name: "Unlimited Plan",
    price: 1500,
    days: 30,
    color: "var(--brand-2)",
    badge: null,
    highlight: false,
    features: ["Unlimited videos", "Unlimited AI scripts", "All TTS voices", "5 niche slots", "All editor tools", "Priority queue"],
  },
  {
    id: "super",
    name: "Super Unlimited Plan",
    price: 2500,
    days: 30,
    color: "var(--brand-3)",
    badge: "BEST VALUE",
    highlight: true,
    features: ["Everything in Unlimited", "Unlimited niches", "Channel analyzer", "TikTok automation", "Lip-sync video gen", "Priority Support 24/7"],
  },
];

export const PAYMENT_METHODS = [
  { id: "binance", name: "Binance", icon: "🟡", account: "Sawera", number: "03059526598", note: "Binance Pay ID" },
  { id: "easypaisa", name: "Easypaisa", icon: "💚", account: "Sawera", number: "03059526598", note: "Mobile wallet" },
  { id: "jazzcash", name: "JazzCash", icon: "🔴", account: "Sawera", number: "03059526598", note: "Mobile wallet" },
  { id: "meezan", name: "Meezan Bank", icon: "🏦", account: "Sawera", number: "03059526598", note: "IBAN available on request" },
];

export const WHATSAPP_NUMBER = "923059526598";

export const TOOLS = [
  { id: "ai-script", name: "AI Script Generator", desc: "Generate viral scripts in your niche", icon: "📝", active: true },
  { id: "ai-clips", name: "AI Video Clips", desc: "Auto-cut long videos into shorts", icon: "🎬", active: true },
  { id: "tts", name: "Text to Speech", desc: "Multi-character premium TTS voices", icon: "🔊", active: true },
  { id: "captions", name: "Dynamic Captions", desc: "Animated, viral-style captions", icon: "💬", active: true },
  { id: "seo", name: "SEO Optimization", desc: "Title, tags & description optimizer", icon: "📈", active: true },
  { id: "publish", name: "One-Click Publishing", desc: "Cross-post to YouTube & TikTok", icon: "🚀", active: true },
  { id: "thumbnails", name: "AI Thumbnails", desc: "High CTR thumbnail generator", icon: "🖼️", active: true },
  { id: "lipsync", name: "Lip Sync Studio", desc: "AI lip-sync to any voice track", icon: "👄", active: false },
  { id: "channel", name: "Channel Analyzer", desc: "Deep insights on any channel", icon: "📊", active: true },
  { id: "trends", name: "Trend Radar", desc: "Find rising topics in your niche", icon: "🔥", active: true },
];

export const NICHES = [
  { id: 1, name: "Tech Reviews", videos: 142, images: 68, docs: 12, status: "active" },
  { id: 2, name: "Crypto News", videos: 98, images: 41, docs: 8, status: "active" },
  { id: 3, name: "Gaming Highlights", videos: 215, images: 92, docs: 4, status: "active" },
  { id: 4, name: "Food & Recipes", videos: 67, images: 120, docs: 22, status: "paused" },
  { id: 5, name: "Travel Vlogs", videos: 88, images: 154, docs: 10, status: "active" },
  { id: 6, name: "Fitness Shorts", videos: 130, images: 48, docs: 6, status: "active" },
];

export const USERS = [
  { id: 1, name: "Sawera", email: "sawera@sasviral.app", role: "super_admin", status: "active", plan: "Super Unlimited" },
  { id: 2, name: "Faizan", email: "faizan@sasviral.app", role: "admin", status: "active", plan: "Unlimited" },
  { id: 3, name: "Ahmed", email: "ahmed@sasviral.app", role: "admin", status: "active", plan: "Unlimited" },
  { id: 4, name: "Ayesha Khan", email: "ayesha@gmail.com", role: "user", status: "active", plan: "Super Unlimited" },
  { id: 5, name: "Bilal Raza", email: "bilal@gmail.com", role: "user", status: "active", plan: "Unlimited" },
  { id: 6, name: "Hira Tariq", email: "hira@gmail.com", role: "user", status: "suspended", plan: "Standard" },
  { id: 7, name: "Usman Ali", email: "usman@gmail.com", role: "user", status: "active", plan: "Standard" },
];

export const KPIS = [
  { label: "Total Users", value: "10,248", change: "+12.4%", trend: "up", color: "var(--brand)" },
  { label: "Active Subs", value: "3,512", change: "+8.1%", trend: "up", color: "var(--brand-green)" },
  { label: "Videos Generated", value: "184,932", change: "+22.7%", trend: "up", color: "var(--brand-2)" },
  { label: "MRR (PKR)", value: "₨ 4.92M", change: "+5.6%", trend: "up", color: "var(--brand-pink)" },
];

export const CHART_DATA = [
  { day: "Mon", videos: 1240, signups: 84 },
  { day: "Tue", videos: 1532, signups: 102 },
  { day: "Wed", videos: 1890, signups: 121 },
  { day: "Thu", videos: 2104, signups: 98 },
  { day: "Fri", videos: 2632, signups: 145 },
  { day: "Sat", videos: 2980, signups: 188 },
  { day: "Sun", videos: 2412, signups: 132 },
];

export const ACTIVITY = [
  { dot: "var(--brand)", title: "New niche uploaded", meta: "Crypto News · 24 videos", color: "var(--brand)" },
  { dot: "var(--brand-green)", title: "New user subscribed", meta: "Super Unlimited Plan", color: "var(--brand-green)" },
  { dot: "var(--brand-2)", title: "Viral post detected", meta: "Gaming Highlights", color: "var(--brand-2)" },
  { dot: "var(--brand-yellow)", title: "Tool launched", meta: "AI Script Generator", color: "var(--brand-yellow)" },
  { dot: "var(--brand-pink)", title: "Subscription renewed", meta: "Unlimited Plan", color: "var(--brand-pink)" },
];
