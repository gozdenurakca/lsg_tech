import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import PricingSection from "@/components/pricing/PricingSection";

import SslPricingRow from "@/components/ssl/SslPricingRow";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function DVMarketingPage() {
  const [standardProducts, wildcardProducts, brands] = await Promise.all([
    getProducts("DV", "Standard"),
    getProducts("DV", "Wildcard"),
    getBrands("DV"),
  ]);

  const sortedStandard = sortByBrand(standardProducts);
  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: "Domain Validation SSL",
        }}
        title="DV SSL Sertifikaları"
        subtitle="Dakikalar içinde aktif olan HTTPS koruması. Bloglar, kişisel siteler ve küçük işletmeler için ideal."
        imageSrc="/images/dv.png"
        primaryButton={{
          label: "Sertifika Seç",
          href: "#pricing",
        }}
      />

      <TrustBar
        id="guven"
        title="Dakikalar içinde aktivasyon"
        description="256-bit şifreleme, HTTPS güven kilidi ve SEO avantajı ile sitenizi hızlıca güvenli hale getirin."
        imageSrc="/images/dv2.png"
        imageAlt="DV SSL sertifikası görseli"
        stats={[
          { value: "5–10 dk", label: "Aktivasyon" },
          { value: "256-bit", label: "Şifreleme" },
          { value: "HTTPS", label: "Güven kilidi" },
          { value: "SEO", label: "Avantaj" },
        ]}
      />

      <PricingSection<Product>
        id="pricing"
        layout="list"
        title="DV SSL Paketleri"
        subtitle="Hızlı aktivasyon ve bütçe dostu HTTPS güvenliği."
        products={sortedStandard}
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
        title="DV SSL Nedir?"
        items={[
          {
            title:
              "DV SSL (Domain Validation), SSL sertifikaları arasında en hızlı ve en kolay kurulan seçenektir.",
            desc: "Sertifika yalnızca alan adının kontrolünü doğrular ve kimlik veya şirket belgeleri gerektirmez.",
          },
          {
            title: "5–10 dk",
            desc: "Hızlı aktivasyon",
            icon: "zap",
          },
          {
            title: "256-bit",
            desc: "Güvenli şifreleme",
            icon: "lock",
          },
          {
            title: "HTTPS",
            desc: "Tarayıcı güven kilidi",
            icon: "shieldCheck",
          },
          {
            title: "SEO",
            desc: "Sıralama avantajı",
            icon: "trending",
          },
          {
            title: "Kullanım alanı",
            desc: "Blog ve kişisel web siteleri, Startup landing page'leri, Küçük işletme siteleri",
          },
        ]}
      />
    </main>
  );
}
