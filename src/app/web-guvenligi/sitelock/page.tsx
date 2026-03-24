import ProductHero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import PricingSection from "@/components/pricing/PricingSection";
import InfoSection from "@/components/marketing/InfoSection";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function SiteLockPage() {
  const [products] = await Promise.all([
    getProducts("WEB_SECURITY", "SiteLock"),
    getBrands("WEB_SECURITY"),
  ]);

  const sortedProducts = sortByBrand(products);

  return (
    <main className="bg-white text-slate-900">
      <ProductHero
        badge={{
          icon: "shield",
          label: "Website Protection",
        }}
        title="SiteLock"
        subtitle="SiteLock ile web sitenizi zararlı yazılım saldırılarına, veri ihlallerine ve güvenlik tehditlerine karşı koruyun."
        imageSrc="/images/sitelock-hero.png"
        primaryButton={{
          label: "Hemen Başla",
          href: "#pricing",
        }}
        items={[
          {
            icon: "shield",
            title: "Gelişmiş Malware Koruması",
            desc: "Web sitenizi zararlı yazılımlara karşı sürekli korur",
          },
          {
            icon: "lock",
            title: "Otomatik Temizleme",
            desc: "Tespit edilen malware’leri otomatik temizler",
          },
          {
            icon: "zap",
            title: "Gerçek Zamanlı İzleme",
            desc: "7/24 aktif güvenlik kontrolü sağlar",
          },
        ]}
      />

      <TrustBar
        title="Web siteniz her zaman güvende"
        description="SiteLock, sürekli tarama ve gelişmiş güvenlik katmanları ile sitenizi korur."
        imageSrc="/images/sitelock-visual.jpg"
        stats={[
          { value: "1M+", label: "Korunan Website" },
          { value: "250K+", label: "Temizlenen Malware" },
        ]}
      />

      <PricingSection
        id="pricing"
        title="SiteLock Paketleri"
        subtitle="Web sitenizi zararlı yazılımlara ve saldırılara karşı koruyan güçlü güvenlik paketleri."
        products={sortedProducts}
      />

      <InfoSection
        title="SiteLock ile Neler Sağlanır?"
        items={[
          {
            title: "Günlük Malware Taraması",
            desc: "Web siteniz düzenli olarak zararlı yazılımlara karşı taranır.",
          },
          {
            title: "Otomatik Temizleme",
            desc: "Tespit edilen zararlı içerikler otomatik olarak kaldırılır.",
          },
          {
            title: "Blacklist Monitoring",
            desc: "Google blacklist ve itibar durumunuz sürekli kontrol edilir.",
          },
          {
            title: "WAF Koruması",
            desc: "Web Application Firewall ile saldırılar engellenir.",
          },
          {
            title: "Zafiyet Taraması",
            desc: "Güvenlik açıkları erken tespit edilir.",
          },
          {
            title: "7/24 İzleme",
            desc: "Siteniz sürekli olarak izlenir ve tehditler anında tespit edilir.",
          },
        ]}
      />
    </main>
  );
}
