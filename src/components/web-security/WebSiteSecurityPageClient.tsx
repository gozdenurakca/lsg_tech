"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/marketing/hero/ProductHero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import SecurityPricingSection from "../pricing/SecurityPricingSection";
import WebSecurityVisual from "./WebSecurityVisual";
import { ICONS } from "@/lib/icons";

function SecurityNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Planlar", href: "#planlar" },
    { label: "Güven", href: "#guven" },
    { label: "Neden LSG?", href: "#neden-lsg" },
    { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
    { label: "SSS", href: "#sss" },
  ];

  const ArrowUpIcon = ICONS.arrowUp;
  const ArrowRightIcon = ICONS.arrowRight;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-500 flex items-center justify-center transition-all flex-shrink-0"
          aria-label="Başa dön"
        >
          <ArrowUpIcon size={15} />
        </button>

        <div className="w-px h-5 bg-slate-200 flex-shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-4 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-emerald-800 hover:bg-emerald-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex-shrink-0">
          <a
            href="#planlar"
            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition"
          >
            Başla <ArrowRightIcon size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function WebsiteSecurityPageClient() {
  return (
    <div className="bg-white font-sans">
      <Hero
        badge={{
          icon: "shield",
          label: "Sucuri & Imunify360 Güvencesiyle",
          color: "bg-emerald-50 border border-emerald-200 text-emerald-700",
        }}
        title={
          <>
            Siteniz saldırı altında
            <br />
            <span className="text-emerald-700">olmadan önce koruyun</span>
          </>
        }
        subtitle="Malware, WAF ve 7/24 izleme — tam koruma."
        imageSrc="/images/websecurity-hero.png"
        imageAlt="Web security illustration"
        imageGradient="from-[#052e16] via-[#064e3b] to-[#0f172a]"
        floatingCard={{
          icon: "shieldCheck",
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-600",
          eyebrow: "Güvenlik Durumu",
          text: "🛡️ Korunuyor",
        }}
        primaryButton={{ label: "Plan Seç", href: "#planlar" }}
        secondaryButton={{ label: "Nasıl Çalışır?", href: "#nasil-calisir" }}
        items={[
          {
            icon: "search",
            title: "Otomatik malware tarama",
            desc: "Sitenizin tüm dosyaları zararlı kod, arka kapı ve şüpheli içerik için sürekli taranır.",
          },
          {
            icon: "shield",
            title: "WAF ile saldırıları ön cephede durdur",
            desc: "SQL injection, XSS, kötü botlar sunucunuza ulaşmadan WAF katmanında engellenir.",
          },
          {
            icon: "wifi",
            title: "Google Blacklist izleme",
            desc: "Arama motorlarının kara listelerine düşerseniz anında uyarılırsınız.",
          },
        ]}
      />

      <SecurityNavbar />

      <SecurityPricingSection />

      <TrustBar
        id="guven"
        eyebrow="Güven"
        title={
          <>
            Kanıtlanmış altyapı,
            <br />
            ölçülebilir güvenlik
          </>
        }
        description="Sucuri ve Imunify360 altyapısıyla çalışan sistemimiz, her gün 500.000'den fazla tarama gerçekleştirir. Gerçek zamanlı tehdit istihbaratı ve otomatik müdahale ile siteniz her an korunuyor."
        visual={<WebSecurityVisual />}
        imageAlt="Web security infrastructure"
        stats={[
          { value: "500K+", label: "Günlük Tarama" },
          { value: "99.9%", label: "Tehdit Tespiti" },
          { value: "15 dk", label: "Ortalama Temizlik" },
          { value: "7/24", label: "İzleme & Destek" },
        ]}
      />

      <InfoSection
        id="neden-lsg"
        title="LSG Web Güvenliği'ni seçmek için nedenler"
        items={[
          {
            title: "Gerçek zamanlı tehdit tespiti",
            desc: "Zararlı yazılımlar ve saldırılar saniyeler içinde tespit edilir, siz fark etmeden önce engellenir.",
          },
          {
            title: "Otomatik temizlik — el atmadan",
            desc: "Pro planda zararlı içerikler tespit edilir edilmez otomatik temizlenir, siteniz hiç çevrimdışı kalmaz.",
          },
          {
            title: "Google Blacklist'ten koruma",
            desc: "Google, Bing ve güvenlik blacklistleri sürekli izlenir; listeye girerseniz hemen uyarılırsınız.",
          },
          {
            title: "WAF ile saldırıları kaynakta kes",
            desc: "Web Application Firewall, SQL injection, XSS ve kötü botları sitenize ulaşmadan engeller.",
          },
          {
            title: "Kesintisiz uptime, sıfır etki",
            desc: "Tüm tarama ve temizlik operasyonları arka planda çalışır. Ziyaretçileriniz hiçbir şey fark etmez.",
          },
          {
            title: "SSL + güvenlik: tam koruma paketi",
            desc: "SSL sertifikanızla birlikte kullanın — şifreleme + uygulama güvenliği = uçtan uca koruma.",
          },
        ]}
      />

      <HowItWorks
        id="nasil-calisir"
        title="Web güvenliği nasıl çalışır?"
        subtitle="Tarama, engelleme ve izleme döngüsü arka planda kesintisiz işler."
        accentColor="emerald"
        visual="number"
        visualBg="from-[#052e16] via-[#065f46] to-[#0f172a]"
        steps={[
          {
            title: "Tehdit taranıyor",
            desc: "Sitenizin tüm dosyaları zararlı kod ve şüpheli içerik için taranır.",
          },
          {
            title: "WAF devrede",
            desc: "Kötü niyetli istekler sunucuya ulaşmadan WAF katmanında engellenir.",
          },
          {
            title: "Blacklist izleniyor",
            desc: "Google, Bing ve güvenlik veritabanları sürekli kontrol edilir.",
          },
        ]}
        extraSteps={[
          {
            num: "01",
            title: "Planı Seçin",
            desc: "Site büyüklüğünüze ve ihtiyacınıza göre Temel, Pro veya Enterprise planı seçin.",
          },
          {
            num: "02",
            title: "Sitenizi Ekleyin",
            desc: "Domain adresinizi girin. DNS kaydı veya küçük bir doğrulama dosyası yükleyin.",
          },
          {
            num: "03",
            title: "Tarama Başlar",
            desc: "İlk tarama dakikalar içinde tamamlanır, mevcut tehditler raporlanır.",
          },
          {
            num: "04",
            title: "Sürekli Korunun",
            desc: "WAF devreye girer, otomatik tarama çalışır. 7/24 izleme aktif.",
          },
        ]}
      />

      <FeatureGrid
        title="Diğer Güvenlik Çözümleri"
        subtitle="Web güvenliğini SSL ve sunucu güvenliğiyle birleştirerek tam koruma sağlayın."
        ctaHref="/#teklif"
        ctaLabel="Uzmanla Konuşun"
        products={[
          {
            type: "SSL",
            name: "SSL Sertifikaları",
            desc: "HTTPS şifreleme ile veri iletişimini güvence altına alın.",
            icon: "lock",
            color: "bg-blue-50 text-blue-600 border-blue-100",
            href: "/ssl",
          },
          {
            type: "Sunucu",
            name: "Sunucu Güvenliği",
            desc: "Imunify360 ile sunucu genelinde DDoS ve saldırı koruması.",
            icon: "shieldAlert",
            color: "bg-orange-50 text-orange-600 border-orange-100",
            href: "/guvenlik/sunucu",
          },
          {
            type: "Paket",
            name: "SSL + Güvenlik Paketi",
            desc: "Şifreleme ve uygulama güvenliğini bir arada alın, tasarruf edin.",
            icon: "shieldCheck",
            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
            href: "/guvenlik/paket",
          },
        ]}
      />

      <FaqSection
        id="sss"
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        faqs={[
          {
            q: "Web sitesi güvenliği tam olarak ne yapar?",
            a: "Web sitesi güvenliği; sitenizi zararlı yazılımlara (malware), saldırılara, spam ve blacklist'e karşı korur. Sürekli tarama ile tehditleri tespit eder, WAF ile engeller ve Pro planda otomatik olarak temizler.",
          },
          {
            q: "WAF nedir ve neden gereklidir?",
            a: "WAF (Web Application Firewall), sitenize gelen trafiği filtreleyen bir güvenlik katmanıdır. SQL injection, XSS, kötü botlar ve DDoS saldırılarını sunucunuza ulaşmadan engeller.",
          },
          {
            q: "WordPress sitem için uygun mu?",
            a: "Evet, özellikle WordPress ve WooCommerce siteleri için idealdir. Plugin güvenlik açıkları, tema zafiyetleri ve brute-force saldırılarına karşı tam koruma sağlar.",
          },
          {
            q: "Malware tespit edilirse ne olur?",
            a: "Temel planda sizi e-posta ile uyarırız. Pro planda zararlı dosyalar otomatik temizlenir. Enterprise planda öncelikli müdahale ekibimiz 15 dakika içinde devreye girer.",
          },
          {
            q: "Mevcut hosting'imle çalışır mı?",
            a: "Evet. Hosting bağımsız çalışır — cPanel, Plesk, Nginx, Apache veya herhangi bir platform fark etmez. DNS seviyesinde kolayca entegre olur.",
          },
        ]}
      />

      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <CTASection
            title="Başka sorunuz var mı?"
            subtitle="Güvenlik uzmanlarımız 7/24 yanınızda."
            buttonLabel="Ücretsiz Danışmanlık Al"
            buttonHref="/#teklif"
          />
        </div>
      </section>
    </div>
  );
}
