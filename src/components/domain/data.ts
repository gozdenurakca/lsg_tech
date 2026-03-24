/*import type { Extension } from "../../lib/domain/types";

// ─── Sorgulanacak uzantılar ve fiyatlar

// Backend bağlandığında fiyatlar API'den gelecek; şimdilik statik.

export const EXTENSIONS: Extension[] = [
  { ext: ".com.tr", label: ".com.tr", price: 149, period: "yıl", featured: true },
  { ext: ".com",    label: ".com",    price: 299, period: "yıl", featured: false },
  { ext: ".net",    label: ".net",    price: 259, period: "yıl", featured: false },
  { ext: ".org",    label: ".org",    price: 229, period: "yıl", featured: false },
  { ext: ".net.tr", label: ".net.tr", price: 149, period: "yıl", featured: false },
  { ext: ".io",     label: ".io",     price: 699, period: "yıl", featured: false },
  { ext: ".biz",    label: ".biz",    price: 319, period: "yıl", featured: false },
  { ext: ".co",     label: ".co",     price: 499, period: "yıl", featured: false },
];

export const POPULAR_EXTENSIONS = [
  { ext: ".com.tr", desc: "Türkiye'nin tercihi", price: "₺149" },
  { ext: ".com",    desc: "Global standart",      price: "₺299" },
  { ext: ".net",    desc: "Teknoloji alanları",   price: "₺259" },
  { ext: ".org",    desc: "Sivil kuruluşlar",      price: "₺229" },
  { ext: ".io",     desc: "Tech startuplar",       price: "₺699" },
  { ext: ".net.tr", desc: "Türkiye ağları",        price: "₺149" },
];


export const QUICK_EXTENSIONS = [".com.tr", ".com", ".net", ".org", ".io", ".net.tr"];

const ALL_EXTS = [".com.tr", ".net.tr", ".org.tr", ".com", ".net", ".org", ".io", ".biz", ".co"];

export function stripExtension(raw: string): string {
  let base = raw
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//, "")
    .replace(/\/$/, "");
  ALL_EXTS.forEach((e) => {
    if (base.endsWith(e)) base = base.slice(0, -e.length);
  });
  return base;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!
// Mock availability check — backend gelince bu fonksiyon değişecek

// Değiştirilecek tek yer burası:
//   const res = await fetch(`/api/domain/check?domain=${domain}`)
//   return (await res.json()).available
export async function checkAvailability(_domain: string): Promise<boolean> {
  await new Promise((r) => setTimeout(r, 600 + Math.random() * 500));
  return Math.random() > 0.35; // mock
}
*/
