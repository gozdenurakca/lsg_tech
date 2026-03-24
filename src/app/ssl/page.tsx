import { getProducts } from "@/lib/api/products";
import SSLPageClient from "@/components/ssl/PageClient";

export default async function Page() {
  const raw = await getProducts("DV", "Standard");

  const products = (raw as any[]).map((p) => ({
    name: p.name ?? "",
    brand: p.brand ?? "",
    price: {
      oneYear: typeof p.price === "object" ? p.price?.oneYear : p.price,
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
    href: (p.href ?? p.slug) ? `/ssl/${p.slug}` : `/ssl/${p._id}`,
  }));

  return <SSLPageClient products={products} />;
}
