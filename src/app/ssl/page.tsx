import { getProducts } from "@/lib/api/products";
import SSLPageClient from "@/components/ssl/PageClient";
import type { Product } from "@/lib/ssl/types";

type SafeProduct = {
  name: string;
  slug: string;
  brand: string;
  price: {
    oneYear: number;
    twoYear?: number;
    threeYear?: number;
  };
  period: string;
  tag: string | null;
  featured: boolean;
  description: string;
  features: string[];
  warranty: string;
  issuance: string;
  href: string;
};

export default async function Page() {
  const raw = await getProducts({ validation: "DV", type: "Standard" });

  const safeArray = Array.isArray(raw) ? raw : [];

  const products: SafeProduct[] = safeArray.map((p: Partial<Product>) => {
    const priceObj =
      typeof p.price === "object" && p.price !== null
        ? p.price
        : { oneYear: Number(p.price) || 0 };

    const slug = p.slug ?? "";
    const fallbackId = (p as any)?._id ?? "";

    return {
      name: p.name ?? "",
      slug,

      brand: p.brand ?? "",

      price: {
        oneYear: Number(priceObj.oneYear) || 0,
        twoYear:
          priceObj.twoYear !== undefined ? Number(priceObj.twoYear) : undefined,
        threeYear:
          priceObj.threeYear !== undefined
            ? Number(priceObj.threeYear)
            : undefined,
      },

      period: p.period ?? "/yıl",
      tag: p.tag ?? null,
      featured: Boolean(p.featured),

      description: p.description ?? "",
      features: Array.isArray(p.features) ? p.features : [],

      warranty: p.warranty ?? "",
      issuance: p.issuance ?? "",

      // 🔥 SAFE HREF
      href: slug ? `/ssl/${slug}` : fallbackId ? `/ssl/${fallbackId}` : "#",
    };
  });

  return <SSLPageClient products={products} />;
}
