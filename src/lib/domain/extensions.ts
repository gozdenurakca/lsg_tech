// TLD listesi (source of truth)
import type { Extension } from "./types";
export const QUICK_EXTENSIONS = [
  ".com.tr",
  ".com",
  ".net",
  ".org",
  ".io",
  ".net.tr",
];


export const EXTENSIONS: Extension[] = [
  {
    ext: ".com.tr",
    tagline: "Türkiye'nin güvenilir dijital adresi",
    price: 149,
    oldPrice: 299,
    color: "bg-blue-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    highlights: [
      "Türkiye'de #1 tercih",
      "Yerel SEO avantajı",
      "NIC.tr güvencesi",
    ],
    featured: true,
  },
  {
    ext: ".com",
    tagline: "Dünyanın en tanınan alan adı",
    price: 299,
    oldPrice: null,
    color: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    highlights: [
      "Global erişim",
      "En yüksek güven skoru",
      "Her sektöre uygun",
    ],
  },
  {
    ext: ".net",
    tagline: "Teknoloji markaları için",
    price: 259,
    oldPrice: 349,
    color: "bg-violet-600",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-200",
    highlights: [
      "IT & yazılım için ideal",
      ".com'dan sonra #2",
      "Teknik otorite",
    ],
  },
  {
    ext: ".org",
    tagline: "Sivil toplum ve vakıflar için",
    price: 229,
    oldPrice: null,
    color: "bg-rose-600",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-200",
    highlights: [
      "NGO & dernekler için",
      "Güven & şeffaflık",
      "Wikipedia ile aynı",
    ],
  },
  {
    ext: ".io",
    tagline: "Startup ve SaaS ürünleri için",
    price: 699,
    oldPrice: null,
    color: "bg-cyan-600",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    highlights: [
      "Tech startup standardı",
      "SaaS & API'ler için",
      "Yatırımcı dostu",
    ],
  },
  {
    ext: ".net.tr",
    tagline: "Türkiye'deki ağ projeleri için",
    price: 149,
    oldPrice: 249,
    color: "bg-amber-600",
    lightBg: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
    highlights: [
      "ISP & ağ sektörü",
      "Yerel teknoloji kimliği",
      "Uygun fiyat",
    ],
  },
];

/*
export type ExtensionUI = {
  tagline: string;
  color: string;
  lightBg: string;
  textColor: string;
  borderColor: string;
  highlights: string[];
  oldPrice?: number | null;
};

export type Extension = {
  ext: string;
  price: number;
  period: string;
  featured?: boolean;
  ui: ExtensionUI;
};

export const EXTENSIONS: Extension[] = [
  {
    ext: ".com.tr",
    price: 149,
    period: "yıl",
    featured: true,
    ui: {
      tagline: "Türkiye'nin güvenilir dijital adresi",
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      highlights: [
        "Türkiye'de #1 tercih",
        "Yerel SEO avantajı",
        "NIC.tr güvencesi",
      ],
      oldPrice: 299,
    },
  },
  {
    ext: ".com",
    price: 299,
    period: "yıl",
    ui: {
      tagline: "Dünyanın en tanınan alan adı",
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      highlights: [
        "Global erişim",
        "En yüksek güven skoru",
        "Her sektöre uygun",
      ],
      oldPrice: null,
    },
  },
  {
    ext: ".net",
    price: 259,
    period: "yıl",
    ui: {
      tagline: "Teknoloji markaları için",
      color: "bg-violet-600",
      lightBg: "bg-violet-50",
      textColor: "text-violet-600",
      borderColor: "border-violet-200",
      highlights: [
        "IT & yazılım için ideal",
        ".com'dan sonra #2",
        "Teknik otorite",
      ],
      oldPrice: 349,
    },
  },
  {
    ext: ".org",
    price: 229,
    period: "yıl",
    ui: {
      tagline: "Sivil toplum ve vakıflar için",
      color: "bg-rose-600",
      lightBg: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      highlights: [
        "NGO & dernekler için",
        "Güven & şeffaflık",
        "Wikipedia ile aynı",
      ],
      oldPrice: null,
    },
  },
  {
    ext: ".io",
    price: 699,
    period: "yıl",
    ui: {
      tagline: "Startup ve SaaS ürünleri için",
      color: "bg-cyan-600",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      highlights: [
        "Tech startup standardı",
        "SaaS & API'ler için",
        "Yatırımcı dostu",
      ],
      oldPrice: null,
    },
  },
  {
    ext: ".net.tr",
    price: 149,
    period: "yıl",
    ui: {
      tagline: "Türkiye'deki ağ projeleri için",
      color: "bg-amber-600",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      highlights: [
        "ISP & ağ sektörü",
        "Yerel teknoloji kimliği",
        "Uygun fiyat",
      ],
      oldPrice: 249,
    },
  },
];
*/