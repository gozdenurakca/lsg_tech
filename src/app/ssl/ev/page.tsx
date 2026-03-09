import SSLHero from "@/components/ssl/SSLHero";
import SSLTrustBar from "@/components/ssl/SSLTrustBar";
import SSLPricingSection from "@/components/ssl/SSLPricingSection";
import SSLInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function EVMarketingPage() {
  const [standardProducts, wildcardProducts, brands] = await Promise.all([
    getProducts("EV", "Standard"),
    getProducts("EV", "Wildcard"),
    getBrands("EV"),
  ]);

  const sortedStandard = sortByBrand(standardProducts);
  const sortedWildcard = sortByBrand(wildcardProducts);

  return (
    <main className="bg-white text-slate-900">
      <SSLHero
        badge="Extended Validation SSL"
        title="EV SSL Sertifikaları"
        description="En kapsamlı doğrulama ile maksimum güven. Bankacılık, finans ve yüksek güven gerektiren platformlar için ideal."
        cardTitle="En Yüksek Güven"
        cardDescription="Extended Validation + maksimum güven"
        stats={[
          { k: "Aktivasyon", v: "3–7 gün" },
          { k: "Şifreleme", v: "256-bit" },
          { k: "Doğrulama", v: "EV doğrulama" },
          { k: "Prestij", v: "En yüksek seviye" },
        ]}
      />

      <SSLTrustBar
        items={[
          { icon: "zap", text: "En güçlü güven sinyali" },
          { icon: "lock", text: "256-bit Şifreleme" },
          { icon: "shield", text: "Kurumsal doğrulama" },
          { icon: "badge", text: "Yüksek riskli sektörler" },
        ]}
      />

      <SSLPricingSection
        title="EV SSL Paketleri"
        description="En kapsamlı doğrulama ile maksimum kurumsal güven."
        products={sortedStandard}
        wildcardProducts={sortedWildcard}
        brands={brands}
      />

      <SSLInfoSection
        title="EV SSL Nedir?"
        description="Genişletilmiş Doğrulama (EV) sertifikası, sertifika sahibinin web sitesinin gerçek ve meşru olduğunu onaylamak için en kapsamlı inceleme ve kimlik doğrulama süreçlerinden geçtiğini doğrulayan bir TLS/SSL sertifikası türüdür."
        stats={[
          { title: "3–7 gün", desc: "Aktivasyon" },
          { title: "EV", desc: "En kapsamlı doğrulama" },
          { title: "256-bit", desc: "Güvenli şifreleme" },
          { title: "Prestij", desc: "Kurumsal imaj" },
        ]}
        features={[
          "Bankacılık / finans uygulamaları",
          "Ödeme ve kimlik doğrulama platformları",
          "Kurumsal marka sayfaları",
        ]}
      />
    </main>
  );
}
