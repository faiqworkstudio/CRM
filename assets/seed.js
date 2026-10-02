// Sample data for the demo. The company (Aeterna Estates), its projects,
// people and leads are all fictional; names were checked against real developments. Shared by the Netlify Function and the in-browser fallback.

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=70`;

// Languages switched on for the site and admin. German, Chinese and Arabic
// (right-to-left) are fully translated: add them back here to re-enable.
export const ALL_LANGS = ["en", "th", "de", "zh", "ar"];
export const LANGS = ["en", "th"];

export const CATEGORIES = ["beachfront", "city", "investment"];

export const REGIONS = ["bangkok", "phuket", "samui", "huahin", "chiangmai", "pattaya"];

export const FEATURES = ["private_pool", "sea_view", "beachfront", "rooftop_pool", "fitness", "spa", "near_transit", "smart_home", "rental_program", "concierge", "garden", "co_working"];

export const AGENTS = [

  { id: "a1", name: "Nicha Srisuk", role: "Sales Manager", langs: ["th", "en"] },
  { id: "a2", name: "Jonas Weber", role: "Sales Agent", langs: ["de", "en"] },
  { id: "a3", name: "Mei Lin Chen", role: "Sales Agent", langs: ["zh", "en"] },
  { id: "a4", name: "Omar Haddad", role: "Sales Agent", langs: ["ar", "en"] },
];

export const USERS = [
  { name: "Admin (Client)", email: "admin@aeterna-demo.com", role: "Owner" },
  { name: "Nicha Srisuk", email: "nicha@aeterna-demo.com", role: "Sales Manager" },
  { name: "Jonas Weber", email: "jonas@aeterna-demo.com", role: "Sales Agent" },
  { name: "Mei Lin Chen", email: "meilin@aeterna-demo.com", role: "Sales Agent" },
  { name: "Omar Haddad", email: "omar@aeterna-demo.com", role: "Sales Agent" },
  { name: "Content Team", email: "content@aeterna-demo.com", role: "Content Editor" },
  { name: "Web Developer", email: "developer@aeterna-demo.com", role: "Developer" },
];

export const STAGES = ["new", "contacted", "viewing", "negotiation", "won", "lost"];

export const PROJECTS = [
  {
    id: "kamala-hills",
    name: "Aeterna Kamala Hills Villas",
    categories: ["beachfront", "investment"],
    location: "Kamala, Phuket",
    region: "phuket",
    type: "villa",
    priceFrom: 1200000,
    beds: "3–5",
    size: "380–720 m²",
    status: "construction",
    completion: "Q4 2027",
    featured: true,
    published: true,
    image: img("1613490493576-7fde63acd811"),
    gallery: [img("1613490493576-7fde63acd811"), img("1600607687939-ce8a6c25118c"), img("1512917774080-9991f1c4c750")],
    features: ["private_pool", "sea_view", "smart_home", "rental_program", "concierge"],
    mapQuery: "Kamala Beach, Phuket",
    i18n: {
      en: { tagline: "Sea-view pool villas on Phuket's west coast.", description: "28 hillside villas above Kamala Bay, each with a private infinity pool and smart-home system. A managed rental programme and 24-hour concierge make it easy to own from abroad." },
      th: { tagline: "พูลวิลล่าวิวทะเลบนชายฝั่งตะวันตกของภูเก็ต", description: "วิลล่าบนเนินเขา 28 หลังเหนืออ่าวกมลา ทุกหลังมีสระอินฟินิตี้ส่วนตัวและระบบสมาร์ทโฮม พร้อมโปรแกรมบริหารการเช่าและบริการคอนเซียร์จตลอด 24 ชั่วโมง ดูแลง่ายแม้อยู่ต่างประเทศ" },
    },
  },
  {
    id: "samui-shore",
    name: "Aeterna Samui Shore Villas",
    categories: ["beachfront"],
    location: "Lipa Noi, Koh Samui",
    region: "samui",
    type: "villa",
    priceFrom: 890000,
    beds: "2–4",
    size: "260–480 m²",
    status: "selling",
    completion: "Ready 2026",
    featured: true,
    published: true,
    image: img("1571896349842-33c89424de2d"),
    gallery: [img("1571896349842-33c89424de2d"), img("1507525428034-b723cf961d3e"), img("1600566753190-17f0baa2a6c3")],
    features: ["beachfront", "private_pool", "spa", "rental_program"],
    mapQuery: "Lipa Noi, Koh Samui",
    i18n: {
      en: { tagline: "Beachfront villas on Samui's quiet west coast.", description: "Tropical villas steps from the sand, with sunset views, a resident spa and a beach club. Owners can join the managed rental programme to earn income while they are away." },
      th: { tagline: "วิลล่าริมหาดบนชายฝั่งตะวันตกอันเงียบสงบของเกาะสมุย", description: "วิลล่าเขตร้อนห่างจากหาดทรายเพียงไม่กี่ก้าว ชมพระอาทิตย์ตก พร้อมสปาและบีชคลับ เจ้าของสามารถเข้าร่วมโปรแกรมบริหารการเช่าเพื่อสร้างรายได้ในช่วงที่ไม่ได้เข้าพัก" },
    },
  },
  {
    id: "sukhumvit-residences",
    name: "Aeterna Sukhumvit Residences",
    categories: ["city", "investment"],
    location: "Sukhumvit, Bangkok",
    region: "bangkok",
    type: "condo",
    priceFrom: 280000,
    beds: "1–3",
    size: "45–160 m²",
    status: "selling",
    completion: "Q2 2027",
    featured: true,
    published: true,
    image: img("1600607687939-ce8a6c25118c"),
    gallery: [img("1600607687939-ce8a6c25118c"), img("1600566753190-17f0baa2a6c3"), img("1582719478250-c89cae4dc85b")],
    features: ["near_transit", "rooftop_pool", "fitness", "co_working", "smart_home"],
    mapQuery: "Sukhumvit Road, Bangkok",
    i18n: {
      en: { tagline: "City condominiums a short walk from the BTS.", description: "A 38-storey residence in the heart of Sukhumvit with a rooftop pool, fitness centre and co-working lounge. Strong rental demand makes it a popular choice for investors." },
      th: { tagline: "คอนโดใจกลางเมือง เดินไม่กี่นาทีถึง BTS", description: "อาคารพักอาศัย 38 ชั้นใจกลางสุขุมวิท พร้อมสระว่ายน้ำบนดาดฟ้า ฟิตเนส และโคเวิร์กกิ้งเลานจ์ ความต้องการเช่าสูง จึงเป็นตัวเลือกยอดนิยมของนักลงทุน" },
    },
  },
  {
    id: "riverside-penthouses",
    name: "Aeterna Riverside Penthouses",
    categories: ["city"],
    location: "Chao Phraya River, Bangkok",
    region: "bangkok",
    type: "penthouse",
    priceFrom: 2100000,
    beds: "3–4",
    size: "280–520 m²",
    status: "prelaunch",
    completion: "Q3 2028",
    featured: false,
    published: true,
    image: img("1600585154340-be6161a56a0c"),
    gallery: [img("1600585154340-be6161a56a0c"), img("1600607687939-ce8a6c25118c"), img("1600566753190-17f0baa2a6c3")],
    features: ["private_pool", "concierge", "smart_home", "fitness"],
    mapQuery: "Charoen Krung, Bangkok",
    i18n: {
      en: { tagline: "Limited-edition penthouses above the river.", description: "Pre-launch: twelve penthouses with private plunge pools and wide river views, served by a dedicated concierge team. Early registrants get priority selection." },
      th: { tagline: "เพนต์เฮาส์จำนวนจำกัดเหนือแม่น้ำเจ้าพระยา", description: "เปิดจองล่วงหน้า: เพนต์เฮาส์ 12 ยูนิต พร้อมสระพลันจ์ส่วนตัวและวิวแม่น้ำมุมกว้าง ดูแลโดยทีมคอนเซียร์จเฉพาะ ผู้ลงทะเบียนก่อนได้สิทธิ์เลือกก่อน" },
    },
  },
  {
    id: "huahin-beach-condos",
    name: "Aeterna Hua Hin Beach Condos",
    categories: ["beachfront", "investment"],
    location: "Khao Takiap, Hua Hin",
    region: "huahin",
    type: "condo",
    priceFrom: 310000,
    beds: "1–3",
    size: "55–170 m²",
    status: "ready",
    completion: "Ready to move in",
    featured: false,
    published: true,
    image: img("1520250497591-112f2f40a3f4"),
    gallery: [img("1520250497591-112f2f40a3f4"), img("1582719478250-c89cae4dc85b"), img("1540555700478-4be289fbecef")],
    features: ["beachfront", "sea_view", "spa", "fitness", "rental_program"],
    mapQuery: "Khao Takiap, Hua Hin",
    i18n: {
      en: { tagline: "Ready-to-move-in beachfront condos.", description: "Low-rise beachfront condominiums with sea views, a spa and fitness centre, three hours from Bangkok. Units are completed and can be rented out immediately." },
      th: { tagline: "คอนโดริมหาด พร้อมเข้าอยู่", description: "คอนโดมิเนียมแนวราบริมหาด วิวทะเล พร้อมสปาและฟิตเนส ห่างจากกรุงเทพฯ สามชั่วโมง ห้องสร้างเสร็จแล้วและปล่อยเช่าได้ทันที" },
    },
  },
  {
    id: "chiangmai-garden-homes",
    name: "Aeterna Chiang Mai Garden Homes",
    categories: ["investment"],
    location: "Hang Dong, Chiang Mai",
    region: "chiangmai",
    type: "villa",
    priceFrom: 240000,
    beds: "2–4",
    size: "150–320 m²",
    status: "selling",
    completion: "Ready 2026",
    featured: false,
    published: true,
    image: img("1600596542815-ffad4c1539a9"),
    gallery: [img("1600596542815-ffad4c1539a9"), img("1600566753190-17f0baa2a6c3"), img("1506126613408-eca07ce68773")],
    features: ["garden", "private_pool", "smart_home", "fitness"],
    mapQuery: "Hang Dong, Chiang Mai",
    i18n: {
      en: { tagline: "Family homes with gardens and mountain views.", description: "Detached homes in a gated community twenty minutes from Chiang Mai city, with private gardens, a clubhouse and 24-hour security." },
      th: { tagline: "บ้านสำหรับครอบครัว พร้อมสวนและวิวภูเขา", description: "บ้านเดี่ยวในหมู่บ้านปิดล้อม ห่างจากตัวเมืองเชียงใหม่ 20 นาที มีสวนส่วนตัว คลับเฮาส์ และระบบรักษาความปลอดภัยตลอด 24 ชั่วโมง" },
    },
  },
  {
    id: "pattaya-bay",
    name: "Aeterna Pattaya Bay Residences",
    categories: ["beachfront", "city", "investment"],
    location: "Pratumnak, Pattaya",
    region: "pattaya",
    type: "condo",
    priceFrom: 195000,
    beds: "1–2",
    size: "35–95 m²",
    status: "soldout",
    completion: "Completed",
    featured: false,
    published: true,
    image: img("1507525428034-b723cf961d3e"),
    gallery: [img("1507525428034-b723cf961d3e"), img("1600607687939-ce8a6c25118c"), img("1582719478250-c89cae4dc85b")],
    features: ["sea_view", "rooftop_pool", "fitness", "rental_program"],
    mapQuery: "Pratumnak Hill, Pattaya",
    i18n: {
      en: { tagline: "Sea-view condos on Pratumnak Hill.", description: "Sold out. Join the waiting list to hear about resale units and our next Pattaya project." },
      th: { tagline: "คอนโดวิวทะเลบนเขาพระตำหนัก", description: "ขายหมดแล้ว ลงชื่อรอคิวเพื่อรับข่าวห้องขายต่อและโครงการถัดไปในพัทยา" },
    },
  },
];

export const SETTINGS = {
  notifyEmail: "sales@aeterna-demo.com",
  autoAssign: true,
  autoReply: true,
  integrations: {
    forms: true,
    facebook: true,
    instagram: true,
    ga4: true,
    gsc: true,
    pixel: true,
    whatsapp: true,
    line: true,
    email: true,
    webhook: false,
  },
  ga4Id: "G-DEMO12345",
  pixelId: "000000000000000",
  whatsapp: "+66 00 000 0000",
  lineId: "@aeterna-demo",
  webhookUrl: "",
};

// Seeded leads are generated relative to "now" so the dashboard always looks current.
const PEOPLE = [
  ["Thomas Müller", "de", "DE"], ["Sabine Hoffmann", "de", "CH"], ["Lukas Schneider", "de", "AT"],
  ["Wang Lei", "zh", "CN"], ["Chen Jing", "zh", "SG"], ["Li Na", "zh", "HK"], ["Zhang Wei", "zh", "CN"],
  ["Ahmed Al Mansoori", "ar", "AE"], ["Fatima Al Saud", "ar", "SA"], ["Khalid Rahman", "ar", "QA"],
  ["Somchai Wongsakul", "th", "TH"], ["Pimchanok Rattana", "th", "TH"], ["Kittipong Chai", "th", "TH"],
  ["James Whitfield", "en", "GB"], ["Olivia Carter", "en", "US"], ["Daniel Brooks", "en", "AU"],
  ["Sophie Laurent", "en", "FR"], ["Ivan Petrov", "en", "RU"], ["Priya Nair", "en", "IN"],
  ["Michael Grant", "en", "US"], ["Anna Lindqvist", "en", "SE"], ["Hiroshi Tanaka", "en", "JP"],
  ["Markus Bauer", "de", "DE"], ["Layla Hassan", "ar", "KW"], ["Nattapong Sri", "th", "TH"],
  ["Emily Chen", "zh", "TW"], ["Robert King", "en", "CA"], ["Julia Fischer", "de", "DE"],
];

const SOURCES = [
  ["website", "google", "organic", ""],
  ["website", "google", "cpc", "bangkok-condos"],
  ["facebook", "facebook", "lead_ads", "phuket-villas"],
  ["facebook", "facebook", "lead_ads", "beachfront-launch"],
  ["instagram", "instagram", "lead_ads", "beachfront-launch"],
  ["website", "newsletter", "email", "october-update"],
  ["whatsapp", "whatsapp", "chat", ""],
  ["referral", "partner", "referral", "agent-network"],
];

const MESSAGES = [
  "Interested in a 4-bedroom villa. Please send the brochure and price list.",
  "Could we arrange a private viewing next month?",
  "What are the ownership options for foreign buyers?",
  "Looking for an investment property with rental income.",
  "Please share the rental yield and management fees.",
  "Is financing available? Budget around the starting price.",
  "We are relocating in 2027 and would like more information.",
  "",
];

const BUDGETS = ["<500k", "500k-1m", "1m-3m", "3m+"];

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

export function seedLeads(now = Date.now()) {
  const r = rng(20261002);
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const leads = [];
  const stageWeights = ["new", "new", "new", "contacted", "contacted", "contacted", "viewing", "viewing", "negotiation", "won", "lost"];
  for (let i = 0; i < 64; i++) {
    const [name, personLang, country] = PEOPLE[i % PEOPLE.length];
    const language = LANGS.includes(personLang) ? personLang : "en";
    const project = pick(PROJECTS);
    const [source, utmSource, utmMedium, utmCampaign] = pick(SOURCES);
    const ageDays = Math.floor(Math.pow(r(), 1.6) * 84); // spread over 12 weeks, slightly more recent
    const createdAt = now - ageDays * 86400000 - Math.floor(r() * 86400000);
    let stage = pick(stageWeights);
    if (ageDays < 2) stage = "new";
    const agent = language === "th" ? AGENTS[0] : AGENTS[1 + (i % 3)];
    const email = name.toLowerCase().normalize("NFD").replace(/[^a-z ]/g, "").trim().replace(/ +/g, ".") + "@example.com";
    const lead = {
      id: "L" + String(1001 + i),
      createdAt,
      name,
      email,
      phone: "+" + (10 + Math.floor(r() * 89)) + " " + String(Math.floor(r() * 9e8) + 1e8),
      country,
      language,
      projectId: project.id,
      budget: pick(BUDGETS),
      message: pick(MESSAGES),
      type: r() < 0.3 ? "brochure" : r() < 0.5 ? "viewing" : "enquiry",
      source,
      utm: { source: utmSource, medium: utmMedium, campaign: utmCampaign },
      page: source === "website" ? "/#/project/" + project.id : "",
      stage,
      agentId: stage === "new" && r() < 0.4 ? null : agent.id,
      value: project.priceFrom,
      notes: [],
      activity: [{ at: createdAt, text: `Lead created from ${source}` }],
    };
    if (stage !== "new") lead.activity.push({ at: createdAt + 3600000 * 5, text: `Stage changed to ${stage}` });
    if (stage === "viewing") lead.notes.push({ at: createdAt + 86400000, by: agent.name, text: "Viewing booked. Client flying in next month." });
    if (stage === "negotiation") lead.notes.push({ at: createdAt + 86400000, by: agent.name, text: "Offer received, waiting on developer approval." });
    leads.push(lead);
  }
  return leads.sort((a, b) => b.createdAt - a.createdAt);
}
