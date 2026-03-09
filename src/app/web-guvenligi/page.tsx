import SSLHero from "@/components/ssl/SSLHero";
import SSLTrustBar from "@/components/ssl/SSLTrustBar";
import SSLInfoSection from "@/components/ssl/SSLInfoSection";

import SecurityProducts from "@/components/security/SecurityProducts";
import FaqItem from "@/components/security/FaqItem";
import { FAQ_ITEMS } from "@/components/security/data";

export default function WebsiteSecurityPage() {
  return (
    <main className="bg-white text-slate-900">
      <SSLHero
        badge="Website Security"
        title="Web Sitesi Güvenliği"
        description="Web sitenizi zararlı yazılımlara, saldırılara ve güvenlik açıklarına karşı koruyun."
        cardTitle="Website Protection"
        cardDescription="Malware scanning + WAF + monitoring"
        stats={[
          { k: "Tarama", v: "Günlük" },
          { k: "Koruma", v: "WAF" },
          { k: "İzleme", v: "24/7" },
          { k: "Temizleme", v: "Otomatik" },
        ]}
      />

      <SSLTrustBar
        items={[
          { icon: "shield", text: "Malware tarama" },
          { icon: "lock", text: "WAF koruması" },
          { icon: "badge", text: "Blacklist monitoring" },
          { icon: "zap", text: "7/24 monitoring" },
        ]}
      />

      <SSLInfoSection
        title="Web Güvenliği ile Sitenizi Nasıl Korursunuz?"
        description="Malware taraması, WAF koruması ve sürekli izleme ile web sitenizi saldırılara karşı koruyun."
        stats={[
          {
            title: "Malware Tarama",
            desc: "Web sitenizi zararlı yazılımlara karşı düzenli olarak tarar",
          },
          {
            title: "WAF Koruması",
            desc: "Saldırıları engelleyen web uygulama güvenlik duvarı",
          },
          {
            title: "7/24 İzleme",
            desc: "Web siteniz sürekli güvenlik takibinde tutulur",
          },
          {
            title: "Blacklist Monitoring",
            desc: "Google ve diğer blacklist listeleri kontrol edilir",
          },
        ]}
        features={[
          "E-ticaret siteleri (müşteri verisi koruması)",
          "Kurumsal web siteleri",
          "WordPress ve CMS tabanlı siteler",
          "Yüksek trafik alan platformlar",
        ]}
      />

      <SecurityProducts />

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Sık Sorulan Sorular
          </h2>

          <div className="border rounded-2xl divide-y">
            {FAQ_ITEMS.map((item) => (
              <div key={item.q} className="px-6">
                <FaqItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
