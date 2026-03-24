import SslHero from "@/components/ssl/SSLHero";
import SslTrustBar from "@/components/ssl/SSLTrustBar";
import SslPricingSection from "@/components/ssl/SSLPricingSection";
import SslInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

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
      <SslHero
        badge="Extended Validation SSL"
        title="EV SSL Sertifikaları"
        description="En kapsamlı doğrulama ile maksimum güven. Bankacılık, finans ve yüksek güven gerektiren platformlar için ideal."
        stats={[
          { k: "Aktivasyon", v: "3–7 gün" },
          { k: "Şifreleme", v: "256-bit" },
          { k: "Doğrulama", v: "EV doğrulama" },
          { k: "Prestij", v: "En yüksek seviye" },
        ]}
        note="* EV SSL sertifikaları en kapsamlı doğrulama sürecinden geçer ve yüksek güven gerektiren platformlar için önerilir."
      />

      <SslTrustBar
        items={[
          { icon: "shield", text: "En güçlü güven sinyali" },
          { icon: "lock", text: "256-bit şifreleme" },
          { icon: "badge", text: "Kurumsal doğrulama" },
          { icon: "zap", text: "Yüksek güven gerektiren platformlar" },
        ]}
      />

      <SslPricingSection
        title="EV SSL Paketleri"
        description="En kapsamlı doğrulama ile maksimum kurumsal güven."
        products={sortedStandard}
        wildcardProducts={sortedMultiDomain}
        brands={brands}
      />

      <SslInfoSection
        title="EV SSL Nedir?"
        description="Genişletilmiş Doğrulama (EV) SSL sertifikaları, bir web sitesinin arkasındaki kuruluşun kimliğini doğrulamak için en kapsamlı inceleme süreçlerinden geçen en üst düzey SSL türüdür. Bu doğrulama sayesinde kullanıcılar web sitesinin güvenilir bir kuruluşa ait olduğunu kolayca anlayabilir."
        stats={[
          { title: "3–7 gün", desc: "Aktivasyon süresi" },
          { title: "EV", desc: "En kapsamlı doğrulama" },
          { title: "256-bit", desc: "Güvenli şifreleme" },
          { title: "Prestij", desc: "Kurumsal güven" },
        ]}
        features={[
          "Bankacılık ve finans uygulamaları",
          "Ödeme sistemleri ve fintech platformları",
          "Kurumsal marka web siteleri",
        ]}
      />
    </main>
  );
}
