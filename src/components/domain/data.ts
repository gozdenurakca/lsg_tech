

// ─── Sorgulanacak uzantılar ve fiyatlar

// Backend bağlandığında fiyatlar API'den gelecek; şimdilik statik.



// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// Mock availability check — backend gelince bu fonksiyon değişecek

// Değiştirilecek tek yer burası:
//   const res = await fetch(`/api/domain/check?domain=${domain}`)
//   return (await res.json()).available

import type { Extension } from "../../lib/domain/types";

/*────────────────────────────────────────────
  EXTENSIONS (source of truth)
────────────────────────────────────────────*/
export const EXTENSIONS: Extension[] = [
  { ext: ".com.tr", label: ".com.tr", price: 149, period: "yıl", featured: true },
  { ext: ".com", label: ".com", price: 299, period: "yıl" },
  { ext: ".net", label: ".net", price: 259, period: "yıl" },
  { ext: ".org", label: ".org", price: 229, period: "yıl" },
  { ext: ".net.tr", label: ".net.tr", price: 149, period: "yıl" },
  { ext: ".io", label: ".io", price: 699, period: "yıl" },
  { ext: ".biz", label: ".biz", price: 319, period: "yıl" },
  { ext: ".co", label: ".co", price: 499, period: "yıl" },
];

/*────────────────────────────────────────────
  POPULAR (EXTENSIONS'tan derive et 🔥)
────────────────────────────────────────────*/
export const POPULAR_EXTENSIONS = EXTENSIONS.map((e) => ({
  ext: e.ext,
  desc: getExtensionDescription(e.ext),
  price: `₺${e.price}`,
}));

/*────────────────────────────────────────────
  QUICK EXTENSIONS
────────────────────────────────────────────*/
export const QUICK_EXTENSIONS = EXTENSIONS.map((e) => e.ext);

/*────────────────────────────────────────────
  EXTENSION DESCRIPTIONS
────────────────────────────────────────────*/
function getExtensionDescription(ext: string) {
  switch (ext) {
    case ".com.tr":
      return "Türkiye'nin tercihi";
    case ".com":
      return "Global standart";
    case ".net":
      return "Teknoloji alanları";
    case ".org":
      return "Sivil kuruluşlar";
    case ".io":
      return "Tech startuplar";
    case ".net.tr":
      return "Türkiye ağları";
    default:
      return "Alan adı uzantısı";
  }
}

/*────────────────────────────────────────────
  STRIP EXTENSION
────────────────────────────────────────────*/
const ALL_EXTS = EXTENSIONS.map((e) => e.ext);

export function stripExtension(raw: string): string {
  let base = raw
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/\/$/, "");

  ALL_EXTS.forEach((e) => {
    if (base.endsWith(e)) {
      base = base.slice(0, -e.length);
    }
  });

  return base;
}

/*────────────────────────────────────────────
  MOCK AVAILABILITY (API READY)
────────────────────────────────────────────*/
export async function checkAvailability(domain: string): Promise<boolean> {
  // FUTURE:
  // const res = await fetch(`/api/domain/check?domain=${domain}`)
  // return (await res.json()).available

  await new Promise((r) => setTimeout(r, 600 + Math.random() * 500));

  return Math.random() > 0.35;
}