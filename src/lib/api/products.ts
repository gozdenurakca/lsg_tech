function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  // Vercel ortamı
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // fallback (custom domain)
  return process.env.NEXT_PUBLIC_SITE_URL!;
}
async function safeFetch(url: string) {
  const res = await fetch(url, {
    next: { revalidate: 3600 }
  });

  const contentType = res.headers.get("content-type") || "";

  if (!res.ok || !contentType.includes("application/json")) {
    const text = await res.text().catch(() => "");
    console.error("API ERROR:", res.status, text.slice(0, 200));
    return [];
  }

  const data = await res.json();
  return data.data || [];
}

type GetProductsParams = {
  category?: string;
  validation?: "DV" | "OV" | "EV";
  type?: "Standard" | "Wildcard";
  productType?: string; // 🔥 EKLE
};
export async function getProducts(params?: GetProductsParams) {
  const baseUrl = getBaseUrl(); // 👈 EKLEDİK

  const query = new URLSearchParams();

  if (params?.validation) {
    query.append("validation", params.validation);
  }

  if (params?.type) {
    query.append("type", params.type);
  }

  const res = await fetch(
    `${baseUrl}/api/products?${query.toString()}`,
    {
      next: { revalidate: 3600 } // (opsiyonel ama iyi)
    }
  );

  const data = await res.json();
  return data.data || [];
}
export async function getBrands(validation: string) {
  const baseUrl = getBaseUrl();

  return safeFetch(
    `${baseUrl}/api/products/brands?category=SSL&validation=${validation}`
  );
}