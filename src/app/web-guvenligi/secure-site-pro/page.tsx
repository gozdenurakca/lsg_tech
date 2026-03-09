import SSLHero from "@/components/ssl/SSLHero";
import SSLTrustBar from "@/components/ssl/SSLTrustBar";
import SSLPricingSection from "@/components/ssl/SSLPricingSection";
import SSLInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function SecureSiteProPage() {
  const [products, brands] = await Promise.all([
    getProducts("WEB_SECURITY", "SecureSitePro"),
    getBrands("WEB_SECURITY"),
  ]);

  const sortedProducts = sortByBrand(products);

  return (
    <main className="bg-white text-slate-900">
      <SSLHero
        badge="Advanced Website Security"
        title="Secure Site Pro"
        description="Secure Site Pro, web sitenizi zararlı yazılımlar, güvenlik açıkları ve siber tehditlere karşı koruyan gelişmiş bir güvenlik platformudur. Web siteniz sürekli izlenir, potansiyel riskler erken aşamada tespit edilir."
        cardTitle="Advanced Threat Protection"
        cardDescription="Malware detection • Vulnerability scanning • Continuous monitoring"
        stats={[
          { k: "Malware Tarama", v: "Günlük Otomatik" },
          { k: "Zafiyet Analizi", v: "Gerçek zamanlı" },
          { k: "Website Monitoring", v: "7/24 Aktif" },
          { k: "Tehdit Tespiti", v: "Anında Bildirim" },
        ]}
        note="* Secure Site Pro web sitenizi sürekli analiz eder ve güvenlik tehditlerini erken aşamada tespit ederek koruma sağlar."
      />

      <SSLTrustBar
        items={[
          { icon: "shield", text: "Gelişmiş Web Site Koruması" },
          { icon: "lock", text: "Zararlı Yazılım Tespiti" },
          { icon: "badge", text: "Zafiyet Tarama" },
          { icon: "zap", text: "Gerçek Zamanlı Güvenlik İzleme" },
        ]}
      />

      <SSLPricingSection
        title="Secure Site Pro Paketleri"
        description="Web sitenizi zararlı yazılımlara ve saldırılara karşı koruyan güvenlik paketleri."
        products={sortedProducts}
      />

      <SSLInfoSection
        title="Secure Site Pro ile Neler Sağlanır?"
        description="Secure Site Pro web sitenizi sürekli analiz eder, potansiyel güvenlik açıklarını tespit eder ve zararlı yazılım saldırılarına karşı gelişmiş koruma sağlar. Böylece web siteniz hem ziyaretçileriniz hem de arama motorları için güvenli kalır."
        features={[
          "E-ticaret siteleri için gelişmiş güvenlik",
          "Finans ve ödeme platformları için veri koruması",
          "Kurumsal web sitelerinde marka güveni",
          "SaaS ve web uygulamalarında güvenli veri iletişimi",
          "Hassas veri işleyen platformlar için güçlü şifreleme",
        ]}
        stats={[
          {
            title: "Korunan Website",
            desc: "500K+",
          },
          {
            title: "Tespit Edilen Tehdit",
            desc: "200K+",
          },
        ]}
      />
    </main>
  );
}
