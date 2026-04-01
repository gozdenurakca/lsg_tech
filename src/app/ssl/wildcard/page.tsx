import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import SslFilteredPricing from "@/components/ssl/SslFilteredPricing";

import { getProducts } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function WildcardMarketingPage() {
  // 🔥 TÜM ürünleri çek (tek source)
  const products: Product[] = await getProducts();

  // 🔥 SADECE wildcard ürünleri al
  const wildcardProducts = products.filter(
    (p) => p?.productType === "Wildcard",
  );

  // 🔥 İSTEĞE GÖRE VALIDATION AYRIMI (DV / OV / EV)
  const dvWildcard = wildcardProducts.filter((p) => p.validation === "DV");
  const ovWildcard = wildcardProducts.filter((p) => p.validation === "OV");
  const evWildcard = wildcardProducts.filter((p) => p.validation === "EV");

  // 🔥 HEPSİNİ TEK LİSTEDE GÖSTER (senin istediğin UX)
  const allWildcard = sortByBrand([
    ...dvWildcard,
    ...ovWildcard,
    ...evWildcard,
  ]);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
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

      {/* TRUST */}
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

      {/* 🔥 PRICING */}
      <SslFilteredPricing
        singleDomainProducts={allWildcard}
        multiDomainProducts={[]} // wildcard'ta multi yok
        title="Wildcard SSL Paketleri"
        subtitle="Tüm alt domainlerinizi tek sertifikayla koruyun — ekstra maliyet yok."
        eyebrow="Wildcard SSL"
        eyebrowColor="text-orange-500"
      />

      {/* INFO */}
      <InfoSection
        title="Wildcard SSL Nedir?"
        items={[
          {
            title:
              "Wildcard SSL sertifikası, *.siteniz.com formatındaki tüm subdomainleri kapsar.",
            desc: "Tek bir sertifika ile sınırsız sayıda alt domain güvence altına alınır.",
          },
          { title: "Sınırsız", desc: "Subdomain kapsamı" },
          { title: "256-bit", desc: "Güçlü şifreleme" },
          { title: "10–30 dk", desc: "Hızlı aktivasyon" },
          { title: "Tek sertifika", desc: "Kolay yönetim" },
          {
            title: "Kullanım alanı",
            desc: "SaaS platformları, API servisleri, çoklu subdomain kullanan projeler",
          },
        ]}
      />
    </main>
  );
}
