import { headers } from "next/headers";

function getBaseUrl() {
  const h = headers();
  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  return `${protocol}://${host}`;
}

async function safeFetch(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  const contentType = res.headers.get("content-type") || "";

  if (!res.ok || !contentType.includes("application/json")) {
    const text = await res.text().catch(() => "");
    console.error("API ERROR:", res.status, text.slice(0, 200));
    return [];
  }

  const data = await res.json();

  return data.data || [];
}

export async function getProducts(validation: string, type: string) {
  const baseUrl = getBaseUrl();

  return safeFetch(
    `${baseUrl}/api/products?category=SSL&validation=${validation}&type=${type}&limit=50`
  );
}

export async function getBrands(validation: string) {
  const baseUrl = getBaseUrl();

  return safeFetch(
    `${baseUrl}/api/products/brands?category=SSL&validation=${validation}`
  );
}