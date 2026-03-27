import { getProducts } from "@/lib/api/products";
import SSLPageClient from "@/components/ssl/PageClient";

export default async function Page() {
  const raw = await getProducts("DV", "Standard");

  const products = (raw as any[]).map((p) => ({
    name: p.name ?? "",
    slug: p.slug ?? "", // 🔥 ZORUNLU (hata buradan geliyordu)
    brand: p.brand ?? "",

    price: {
      oneYear: typeof p.price === "object" ? p.price?.oneYear : (p.price ?? 0),
      twoYear: typeof p.price === "object" ? p.price?.twoYear : undefined,
      threeYear: typeof p.price === "object" ? p.price?.threeYear : undefined,
    },

    period: p.period ?? "/yıl",
    tag: p.tag ?? null,
    featured: p.featured ?? false,
    description: p.description ?? "",
    features: p.features ?? [],
    warranty: p.warranty ?? "",
    issuance: p.issuance ?? "",

    // 🔥 daha güvenli href
    href: p.slug ? `/ssl/${p.slug}` : p._id ? `/ssl/${p._id}` : "#",
  }));

  return <SSLPageClient products={products} />;
}
