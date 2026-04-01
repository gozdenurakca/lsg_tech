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

type GetProductsParams = {
  validation?: "DV" | "OV" | "EV";
  type?: "Standard" | "Wildcard";
};

export async function getProducts(params?: GetProductsParams) {
  const query = new URLSearchParams();

  if (params?.validation) {
    query.append("validation", params.validation);
  }

  if (params?.type) {
    query.append("type", params.type);
  }

  const res = await fetch(`/api/products?${query.toString()}`);

  return res.json();
}
export async function getBrands(validation: string) {
  const baseUrl = getBaseUrl();

  return safeFetch(
    `${baseUrl}/api/products/brands?category=SSL&validation=${validation}`
  );
}