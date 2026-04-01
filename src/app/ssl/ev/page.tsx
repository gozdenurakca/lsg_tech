import type { Product } from "@/lib/ssl/types";
import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import SslFilteredPricing from "@/components/ssl/SslFilteredPricing";

import { getProducts } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function EVMarketingPage() {
  const products: Product[] = await getProducts({
    validation: "EV",
  });

  // 🔥 TAB mantığı (UI = productType)
  const standardProducts = products.filter(
    (p) => p?.productType === "Standard",
  );

  const multiDomainProducts = products.filter(
    (p) => p?.productType === "Multi-Domain",
  );

  // 🔥 Marka sıralaması (DigiCert üstte)
  const sortedStandard = sortByBrand(standardProducts ?? []);
  const sortedMultiDomain = sortByBrand(multiDomainProducts ?? []);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: "Extended Validation SSL",
        }}
        title="EV SSL Sertifikaları"
        subtitle="En kapsamlı doğrulama ile maksimum güven. Bankacılık, finans ve yüksek güven gerektiren platformlar için ideal."
        imageSrc="/images/ev.png"
        primaryButton={{
          label: "Sertifika Seç",
          href: "#pricing",
        }}
      />

      {/* TRUST BAR */}
      <TrustBar
        id="guven"
        title="En güçlü güven sinyali"
        description="256-bit şifreleme, kurumsal doğrulama ve yüksek güven gerektiren platformlar için ideal SSL altyapısı."
        imageSrc="/images/ev2.png"
        stats={[
          { value: "3–7 gün", label: "Aktivasyon" },
          { value: "256-bit", label: "Şifreleme" },
          { value: "EV", label: "Doğrulama" },
          { value: "Prestij", label: "En yüksek seviye" },
        ]}
      />

      {/* 🔥 TAB'LI PRICING (Single | Multi) */}
      <SslFilteredPricing
        singleDomainProducts={sortedStandard}
        multiDomainProducts={sortedMultiDomain}
        title="EV SSL Paketleri"
        subtitle="En kapsamlı doğrulama ile maksimum kurumsal güven."
        eyebrow="Extended Validation"
        eyebrowColor="text-violet-500"
      />

      {/* INFO */}
      <InfoSection
        title="EV SSL Nedir?"
        items={[
          {
            title:
              "Genişletilmiş Doğrulama (EV) SSL sertifikaları, bir web sitesinin arkasındaki kuruluşun kimliğini doğrulamak için en kapsamlı inceleme süreçlerinden geçen en üst düzey SSL türüdür.",
            desc: "Bu doğrulama sayesinde kullanıcılar web sitesinin güvenilir bir kuruluşa ait olduğunu kolayca anlayabilir.",
          },
          {
            title: "3–7 gün",
            desc: "Aktivasyon süresi",
          },
          {
            title: "EV",
            desc: "En kapsamlı doğrulama",
          },
          {
            title: "256-bit",
            desc: "Güvenli şifreleme",
          },
          {
            title: "Prestij",
            desc: "Kurumsal güven",
          },
          {
            title: "Kullanım alanı",
            desc: "Bankacılık ve finans uygulamaları, ödeme sistemleri, fintech platformları ve kurumsal marka web siteleri",
          },
        ]}
      />
    </main>
  );
}
