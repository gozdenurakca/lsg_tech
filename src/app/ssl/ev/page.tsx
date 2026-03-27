import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import PricingSection from "@/components/pricing/PricingSection";

import SslPricingRow from "@/components/ssl/SslPricingRow";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";
import type { Product } from "@/lib/ssl/types";

export default async function EVMarketingPage() {
  const [standardProducts, multiDomainProducts, brands] = await Promise.all([
    getProducts("EV", "Standard"),
    getProducts("EV", "Multi Domain"),
    getBrands("EV"),
  ]);

  const sortedStandard = sortByBrand(standardProducts);
  const sortedMultiDomain = sortByBrand(multiDomainProducts);

  return (
    <main className="bg-white text-slate-900">
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

      <PricingSection<Product>
        id="pricing"
        layout="list"
        title="EV SSL Paketleri"
        subtitle="En kapsamlı doğrulama ile maksimum kurumsal güven."
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

      {sortedMultiDomain.length > 0 && (
        <PricingSection<Product>
          title="Multi Domain EV SSL Paketleri"
          subtitle="Birden fazla domain için tek sertifika ile güvenlik sağlayın."
          products={sortedMultiDomain}
          renderRow={(product: Product, idx: number) => (
            <SslPricingRow
              key={product._id ?? product.slug}
              product={product}
              defaultYears={3}
              featured={product.featured || idx === 0}
            />
          )}
        />
      )}

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
            desc: "Bankacılık ve finans uygulamaları, Ödeme sistemleri ve fintech platformları, Kurumsal marka web siteleri",
          },
        ]}
      />
    </main>
  );
}
