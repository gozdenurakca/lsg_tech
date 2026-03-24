function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

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

export async function getProducts(validation?: string, type?: string) {
  const baseUrl = getBaseUrl();

  const params = new URLSearchParams({
    category: "SSL",
    limit: "50",
  });

  if (validation) params.append("validation", validation);
  if (type) params.append("type", type);

  return safeFetch(`${baseUrl}/api/products?${params}`);
}
export async function getBrands(validation: string) {
  const baseUrl = getBaseUrl();

  return safeFetch(
    `${baseUrl}/api/products/brands?category=SSL&validation=${validation}`
  );
}