import SSLHero from "@/components/ssl/SSLHero";
import SSLTrustBar from "@/components/ssl/SSLTrustBar";
import SSLPricingSection from "@/components/ssl/SSLPricingSection";
import SSLInfoSection from "@/components/ssl/SSLInfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function SiteLockPage() {
  const [products, brands] = await Promise.all([
    getProducts("WEB_SECURITY", "SiteLock"),
    getBrands("WEB_SECURITY"),
  ]);

  const sortedProducts = sortByBrand(products);

  return (
    <main className="bg-white text-slate-900">
      <SSLHero
        badge="Website Protection"
        title="SiteLock"
        description="SiteLock ile web sitenizi zararlı yazılım saldırılarına, veri ihlallerine ve güvenlik tehditlerine karşı koruyun."
        cardTitle="Website Security Platform"
        cardDescription="Malware scanning + blacklist monitoring + website protection"
        stats={[
          { k: "Güvenlik Tarama", v: "Günlük" },
          { k: "Zararlı Yazılım Temizleme", v: "Otomatik" },
          { k: "Blacklist Monitoring", v: "Google Safe Browsing vb." },
          { k: "Web Uygulama Güvenlik Duvarı", v: "Opsiyonel" },
        ]}
        note="* SiteLock web sitenizi zararlı yazılımlara ve güvenlik tehditlerine karşı korur."
      />

      <SSLTrustBar
        items={[
          { icon: "shield", text: "Gelişmiş Malware Koruması" },
          { icon: "lock", text: "Otomatik Zararlı Yazılım Temizleme" },
          { icon: "badge", text: "Blacklist ve Reputation Monitoring" },
          { icon: "zap", text: "24/7 Website Security Monitoring" },
        ]}
      />

      <SSLPricingSection
        title="SiteLock Paketleri"
        description="SiteLock web sitenizi zararlı yazılımlara, saldırılara ve güvenlik açıklarına karşı koruyan güçlü bir güvenlik çözümüdür."
        products={sortedProducts}
      />

      <SSLInfoSection
        title="SiteLock ile Neler Sağlanır?"
        description="SiteLock, web sitenizi zararlı yazılımlar, güvenlik açıkları ve siber saldırılara karşı koruyan kapsamlı bir web güvenliği çözümüdür. Otomatik tarama ve sürekli izleme sayesinde potansiyel tehditler erken aşamada tespit edilir ve web siteniz güvenli kalır."
        features={[
          "Günlük malware ve güvenlik taraması",
          "Otomatik malware temizleme",
          "Google blacklist ve itibar izleme",
          "Web Application Firewall (WAF) koruması",
          "Zafiyet taraması ve tehdit uyarıları",
          "7/24 gerçek zamanlı web site izleme",
        ]}
        stats={[
          {
            title: "Korunan Website",
            desc: "1M+",
          },
          {
            title: "Temizlenen Malware",
            desc: "250K+",
          },
        ]}
      />
    </main>
  );
}
