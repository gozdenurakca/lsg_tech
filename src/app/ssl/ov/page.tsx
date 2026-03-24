import SslHero from "@/components/ssl/SSLHero";
import SslTrustBar from "@/components/ssl/SSLTrustBar";
import SslPricingSection from "@/components/ssl/SSLPricingSection";
import SslInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function OVMarketingPage() {
  const [standardProducts, wildcardProducts, brands] = await Promise.all([
    getProducts("OV", "Standard"),
    getProducts("OV", "Wildcard"),
    getBrands("OV"),
  ]);

  const sortedStandard = sortByBrand(standardProducts);
  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <SslHero
        badge="Organization Validation SSL"
        title="OV SSL Sertifikaları"
        description="Şirket doğrulaması ile daha güçlü güven sinyali. Kurumsal web siteleri ve e-ticaret platformları için ideal SSL çözümü."
        stats={[
          { k: "Aktivasyon", v: "1–3 gün" },
          { k: "Şifreleme", v: "256-bit" },
          { k: "Doğrulama", v: "Şirket / kurum" },
          { k: "Güven", v: "Kurumsal seviye" },
        ]}
        note="* OV SSL sertifikaları alan adı sahipliğine ek olarak şirketin yasal varlığını doğrular ve ziyaretçilere daha güçlü güven sinyali sağlar."
      />

      <SslTrustBar
        items={[
          { icon: "shield", text: "Şirket doğrulaması" },
          { icon: "lock", text: "256-bit şifreleme" },
          { icon: "badge", text: "Marka güveni" },
          { icon: "zap", text: "E-ticaret için ideal" },
        ]}
      />

      <SslPricingSection
        title="OV SSL Paketleri"
        description="Kurumsal güven için şirket doğrulamalı SSL çözümleri."
        products={sortedStandard}
        wildcardProducts={sortedWildcard}
        brands={brands}
      />

      <SslInfoSection
        title="OV SSL Nedir?"
        description="OV (Organization Validation) SSL, alan adı doğrulamasına ek olarak başvuran şirketin yasal varlığını doğrulayan SSL sertifikasıdır. Bu sayede ziyaretçiler web sitesinin gerçek bir işletmeye ait olduğunu görebilir."
        stats={[
          { title: "1–3 gün", desc: "Aktivasyon süresi" },
          { title: "OV", desc: "Şirket doğrulaması" },
          { title: "256-bit", desc: "Güvenli şifreleme" },
          { title: "Güven", desc: "Kurumsal itibar" },
        ]}
        features={[
          "Kurumsal web siteleri",
          "E-ticaret ve ödeme platformları",
          "Müşteri verisi toplayan siteler",
        ]}
      />
    </main>
  );
}
