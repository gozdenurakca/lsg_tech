import SslHero from "@/components/ssl/SSLHero";
import SslTrustBar from "@/components/ssl/SSLTrustBar";
import SslPricingSection from "@/components/ssl/SSLPricingSection";
import SslInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

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
      <SslHero
        badge="Domain Validation SSL"
        title="DV SSL Sertifikaları"
        description="Dakikalar içinde aktif olan HTTPS koruması. Bloglar, kişisel siteler ve küçük işletmeler için ideal."
        stats={[
          { k: "Aktivasyon", v: "5–10 dk" },
          { k: "Şifreleme", v: "256-bit" },
          { k: "Uyumluluk", v: "Modern tarayıcılar" },
          { k: "Garanti", v: "Temel güvence" },
        ]}
        note="* DV SSL sertifikaları yalnızca alan adının sahipliğini doğrular ve en hızlı kurulan SSL türüdür."
      />

      <SslTrustBar
        items={[
          { icon: "zap", text: "Dakikalar içinde aktivasyon" },
          { icon: "lock", text: "256-bit şifreleme" },
          { icon: "shield", text: "HTTPS güven kilidi" },
          { icon: "badge", text: "SEO avantajı" },
        ]}
      />

      <SslPricingSection
        title="DV SSL Paketleri"
        description="Hızlı aktivasyon ve bütçe dostu HTTPS güvenliği."
        products={standardProducts}
        wildcardProducts={[]}
        brands={[]}
      />

      <SslInfoSection
        title="DV SSL Nedir?"
        description="DV SSL (Domain Validation), SSL sertifikaları arasında en hızlı ve en kolay kurulan seçenektir. Sertifika yalnızca alan adının kontrolünü doğrular ve kimlik veya şirket belgeleri gerektirmez."
        stats={[
          { title: "5–10 dk", desc: "Hızlı aktivasyon" },
          { title: "256-bit", desc: "Güvenli şifreleme" },
          { title: "HTTPS", desc: "Tarayıcı güven kilidi" },
          { title: "SEO", desc: "Sıralama avantajı" },
        ]}
        features={[
          "Blog ve kişisel web siteleri",
          "Startup landing page'leri",
          "Küçük işletme siteleri",
        ]}
      />
    </main>
  );
}
