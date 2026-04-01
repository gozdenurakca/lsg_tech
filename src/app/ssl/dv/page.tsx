import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import SslFilteredPricing from "@/components/ssl/SslFilteredPricing";

import { getProducts } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function DVMarketingPage() {
  // 🔥 TEK API CALL
  const products: Product[] = await getProducts({
    validation: "DV",
  });

  // 🔥 TAB MANTIĞI
  const singleDomainProducts = products.filter(
    (p) => p?.productType === "Standard" || p?.productType === "Wildcard",
  );

  const multiDomainProducts = products.filter(
    (p) => p?.productType === "Multi-Domain",
  );

  // 🔥 SORT
  const sortedSingle = sortByBrand(singleDomainProducts);
  const sortedMultiDomain = sortByBrand(multiDomainProducts);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
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

      {/* TRUST BAR */}
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

      {/* 🔥 TAB'LI PRICING */}
      <SslFilteredPricing
        singleDomainProducts={sortedSingle}
        multiDomainProducts={sortedMultiDomain}
        title="DV SSL Paketleri"
        subtitle="Hızlı aktivasyon ve bütçe dostu HTTPS güvenliği."
        eyebrow="Domain Validation"
        eyebrowColor="text-blue-500"
      />

      {/* INFO */}
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
            desc: "Blog ve kişisel web siteleri, startup landing page'leri, küçük işletme siteleri",
          },
        ]}
      />
    </main>
  );
}
