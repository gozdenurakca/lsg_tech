import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import PricingSection from "@/components/pricing/PricingSection";

import SslPricingRow from "@/components/ssl/SslPricingRow";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function WildcardMarketingPage() {
  const [wildcardProducts, brands] = await Promise.all([
    getProducts("DV", "Wildcard"),
    getBrands("DV"),
  ]);

  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{
          icon: "layers",
          label: "Wildcard SSL",
        }}
        title="Wildcard SSL Sertifikaları"
        subtitle="Tek sertifika ile tüm alt domainlerinizi koruyun. Subdomain sayısı ne olursa olsun ekstra maliyet yok."
        imageSrc="/images/wildcard.jpg"
        primaryButton={{
          label: "Paketleri Gör",
          href: "#pricing",
        }}
      />

      <TrustBar
        id="guven"
        title="Sınırsız subdomain, tek sertifika"
        description="Wildcard SSL ile tüm alt domainlerinizi tek bir sertifika altında yönetin ve maliyetleri düşürün."
        imageSrc="/images/wildcard2.png"
        stats={[
          { value: "Sınırsız", label: "Subdomain" },
          { value: "256-bit", label: "Şifreleme" },
          { value: "10–30 dk", label: "Aktivasyon" },
          { value: "Tek sertifika", label: "Yönetim" },
        ]}
      />

      <PricingSection<Product>
        id="pricing"
        layout="list"
        title="Wildcard SSL Paketleri"
        subtitle="Tüm alt domainlerinizi tek sertifikayla koruyun — ekstra maliyet yok."
        products={sortedWildcard}
        renderRow={(product: Product, idx: number) => (
          <SslPricingRow
            key={product._id ?? product.slug}
            product={product}
            defaultYears={3}
            featured={product.featured || idx === 0}
          />
        )}
      />

      <InfoSection
        title="Wildcard SSL Nedir?"
        items={[
          {
            title:
              "Wildcard SSL sertifikası, *.siteniz.com formatındaki tüm subdomainleri kapsar.",
            desc: "Tek bir sertifika ile sınırsız sayıda alt domain güvence altına alınır.",
          },
          {
            title: "Sınırsız",
            desc: "Subdomain kapsamı",
          },
          {
            title: "256-bit",
            desc: "Güçlü şifreleme",
          },
          {
            title: "10–30 dk",
            desc: "Hızlı aktivasyon",
          },
          {
            title: "Tek sertifika",
            desc: "Kolay yönetim",
          },
          {
            title: "Kullanım alanı",
            desc: "SaaS platformları, API servisleri, çoklu subdomain kullanan projeler",
          },
        ]}
      />
    </main>
  );
}
