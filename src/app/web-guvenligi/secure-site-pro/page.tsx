import ProductHero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import HowItWorks from "@/components/marketing/HowItWorks";
import CTASection from "@/components/marketing/CTASection";
import FaqSection from "@/components/marketing/FaqSection";

import SSLPricingSection from "@/components/ssl/SslPricingSection";

import { ICONS } from "@/lib/icons";

import { getProducts, getBrands } from "@/lib/api/products";
import { sortByBrand } from "@/lib/utils/sortProducts";

export default async function SecureSiteProPage() {
  const [products] = await Promise.all([
    getProducts("WEB_SECURITY", "SecureSitePro"),
  ]);

  const sortedProducts = sortByBrand(products);

  return (
    <main className="bg-white text-slate-900">
      <ProductHero
        badge={{
          icon: "shield",
          label: "Advanced Website Security",
        }}
        title={
          <>
            Secure Site Pro ile
            <br />
            <span className="text-blue-600">Web Sitenizi Koruyun</span>
          </>
        }
        subtitle="Web sitenizi zararlı yazılımlar, güvenlik açıkları ve siber tehditlere karşı 7/24 koruyun."
        imageSrc="/images/security-hero.png"
        primaryButton={{
          label: "Paketleri İncele",
          href: "#pricing",
        }}
        secondaryButton={{
          label: "Daha Fazla Bilgi",
          href: "/kaynaklar/web-guvenligi",
        }}
        items={[
          {
            icon: "shield",
            title: "Gerçek zamanlı koruma",
            desc: "Siteniz sürekli izlenir ve tehditler anında engellenir.",
          },
          {
            icon: "lock",
            title: "Zararlı yazılım temizleme",
            desc: "Tespit edilen malware otomatik olarak kaldırılır.",
          },
          {
            icon: "zap",
            title: "Anında bildirim",
            desc: "Tüm tehditler size anlık olarak bildirilir.",
          },
        ]}
      />

      <TrustBar
        title="Binlerce web sitesi Secure Site Pro ile korunuyor"
        description="Güvenlik açıklarını tespit edin, saldırıları önleyin ve kullanıcılarınıza güven verin."
        stats={[
          { value: "500K+", label: "Korunan Website" },
          { value: "200K+", label: "Engellenen Tehdit" },
          { value: "7/24", label: "Aktif İzleme" },
          { value: "%99.9", label: "Uptime" },
        ]}
        imageSrc="/images/security-trust.jpg"
      />

      <FeatureGrid
        title="Secure Site Pro Özellikleri"
        subtitle="Web sitenizi uçtan uca koruyan gelişmiş güvenlik katmanları"
        products={[
          {
            type: "Security",
            name: "Malware Detection",
            desc: "Zararlı yazılımları tespit eder ve temizler",
            icon: "alert",
            color: "bg-red-50 text-red-600 border-red-100",
            href: "#",
          },
          {
            type: "Monitoring",
            name: "Real-time Monitoring",
            desc: "Sitenizi 7/24 izler",
            icon: "globe",
            color: "bg-blue-50 text-blue-600 border-blue-100",
            href: "#",
          },
          {
            type: "Infrastructure",
            name: "Server Protection",
            desc: "Sunucu seviyesinde güvenlik sağlar",
            icon: "server",
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
            href: "#",
          },
        ]}
      />

      <HowItWorks
        title="Nasıl Çalışır?"
        subtitle="3 adımda web sitenizi güvence altına alın"
        visual="number"
        steps={[
          {
            title: "Tarama",
            desc: "Web siteniz sürekli olarak güvenlik taramasından geçer.",
          },
          {
            title: "Tespit",
            desc: "Zararlı yazılımlar ve açıklar belirlenir.",
          },
          {
            title: "Koruma",
            desc: "Tehditler otomatik olarak engellenir.",
          },
        ]}
      />

      <SSLPricingSection
        title="Secure Site Pro Paketleri"
        description="Web sitenizi korumak için en uygun planı seçin."
        products={sortedProducts}
      />

      <InfoSection
        title="Secure Site Pro ile Neler Sağlanır?"
        items={[
          {
            title: "Zararlı Yazılım Koruması",
            desc: "Web siteniz sürekli taranır ve zararlı içerikler anında temizlenir.",
          },
          {
            title: "Zafiyet Analizi",
            desc: "Güvenlik açıkları tespit edilir ve önlem alınır.",
          },
          {
            title: "SEO Güvenliği",
            desc: "Google blacklist riskini azaltır.",
          },
        ]}
      />

      <FaqSection
        title="Sık Sorulan Sorular"
        faqs={[
          {
            q: "Secure Site Pro ne işe yarar?",
            a: "Web sitenizi zararlı yazılımlar ve saldırılara karşı korur.",
          },
          {
            q: "Kurulumu zor mu?",
            a: "Hayır, birkaç dakika içinde aktif hale gelir.",
          },
        ]}
      />

      <CTASection />
    </main>
  );
}
