"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ICONS } from "@/lib/icons";

import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";

const CYBER_PRODUCTS = [
  {
    type: "Firewall",
    name: "Next-Gen Firewall",
    tagline: "Ağ Güvenliğinin Temeli",
    desc: "Gelişmiş trafik analizi ve uygulama denetimi ile ağınızı iç ve dış tehditlere karşı korur.",
    href: "/siber-guvenlik/firewall",
    icon: "shieldAlert" as const,
    features: [
      "Derin paket inceleme",
      "Uygulama bazlı filtreleme",
      "IPS/IDS entegrasyonu",
    ],
    accent: "from-red-500 to-orange-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    badgeColor: "bg-red-100 text-red-700",
    price: "Teklif Al",
    priceLabel: "kurumsal fiyatlandırma",
  },
  {
    type: "DDoS",
    name: "DDoS Koruması",
    tagline: "Kesintisiz Erişilebilirlik",
    desc: "Saniyeler içinde devreye giren DDoS mitigasyon altyapısı ile servis kesintilerini önleyin.",
    href: "/siber-guvenlik/ddos",
    icon: "radar" as const,
    features: [
      "Anında otomatik mitigasyon",
      "Tbps kapasiteli altyapı",
      "7/24 SOC izleme",
    ],
    accent: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
    price: "Teklif Al",
    priceLabel: "trafik kapasitesine göre",
    featured: true,
  },
  {
    type: "SOC",
    name: "SOC Hizmetleri",
    tagline: "7/24 Güvenlik İzleme",
    desc: "Uzman güvenlik analistleri tarafından yürütülen 7/24 tehdit izleme ve olay müdahale hizmetleri.",
    href: "/siber-guvenlik/soc",
    icon: "monitor" as const,
    features: [
      "Gerçek zamanlı tehdit tespiti",
      "Olay müdahale (IR)",
      "SIEM yönetimi",
    ],
    accent: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeColor: "bg-violet-100 text-violet-700",
    price: "Teklif Al",
    priceLabel: "aylık yönetilen hizmet",
  },
  {
    type: "Pentest",
    name: "Sızma Testi",
    tagline: "Güvenlik Açığı Tespiti",
    desc: "Saldırgan bakış açısıyla sistemlerinizi test edin, açıkları kapatmadan önce siz bulun.",
    href: "/siber-guvenlik/pentest",
    icon: "target" as const,
    features: [
      "Black/grey/white box testler",
      "Web & API güvenlik testi",
      "Kapsamlı raporlama",
    ],
    accent: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-100 text-emerald-700",
    price: "Teklif Al",
    priceLabel: "proje bazlı fiyatlandırma",
  },
];

function CyberNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { label: "Çözümler", href: "#cozumler" },
    { label: "Güven", href: "#guven" },
    { label: "Nasıl Çalışır?", href: "#nasil" },
    { label: "Neden LSG?", href: "#neden-lsg" },
    { label: "SSS", href: "#sss" },
  ];

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
          onClick={scrollTop}
          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-500 flex items-center justify-center transition-all flex-shrink-0"
        >
          <ICONS.arrowUp size={15} />
        </button>

        <div className="w-px h-5 bg-slate-200 flex-shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-4 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-red-700 hover:bg-red-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto">
          <a
            href="/teklif"
            className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
          >
            Teklif Al <ICONS.arrowRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function SiberGuvenlikPageClient() {
  return (
    <div className="bg-white font-sans">
      <Hero
        badge={{
          icon: "shieldAlert",
          label: "Kurumsal Siber Güvenlik",
          color: "bg-red-50 border border-red-200 text-red-700",
        }}
        title={
          <>
            Siber Tehditlere Karşı{" "}
            <span className="text-red-600">Tam Koruma</span>
          </>
        }
        subtitle="Firewall'dan SOC hizmetlerine, DDoS korumasından sızma testine kadar kurumsal düzeyde siber güvenlik çözümleri."
        imageSrc="/images/siber1.png"
        imageGradient="from-[#1a0a0a] via-[#3b0d0d] to-[#0f172a]"
        primaryButton={{ label: "Çözümleri İncele", href: "#cozumler" }}
        secondaryButton={{ label: "Teklif Al", href: "/teklif" }}
        items={[
          {
            icon: "shieldCheck",
            title: "7/24 SOC İzleme",
            desc: "Uzman analistler tehditleri gerçek zamanlı izler.",
          },
          {
            icon: "zap",
            title: "Anında Müdahale",
            desc: "Olaylara dakikalar içinde müdahale edilir.",
          },
          {
            icon: "building",
            title: "Kurumsal Altyapı",
            desc: "Enterprise düzeyde güvenlik çözümleri.",
          },
        ]}
      />

      <CyberNavbar />

      <section id="cozumler" className="py-24 bg-[#f8fafc] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] text-red-500 font-bold mb-3">
              Güvenlik Çözümleri
            </p>
            <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900 mb-4">
              İhtiyacınıza Uygun Güvenlik Çözümü
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Ağ güvenliğinden uç nokta korumasına, 7/24 izlemeden sızma testine
              kadar kapsamlı siber güvenlik hizmetleri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {CYBER_PRODUCTS.map((product) => {
              const Icon = ICONS[product.icon] ?? ICONS.shield;
              return (
                <div
                  key={product.type}
                  className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    product.featured
                      ? "border-blue-200 shadow-lg shadow-blue-100/50"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {product.featured && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase">
                      Popüler
                    </div>
                  )}

                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${product.accent}`}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${product.iconBg}`}
                      >
                        <Icon size={18} className={product.iconColor} />
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${product.badgeColor}`}
                      >
                        {product.type}
                      </span>
                    </div>

                    <h3 className="text-[16px] font-bold text-slate-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-wide mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                      {product.desc}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-[13px] text-slate-600"
                        >
                          <ICONS.checkCircle
                            size={14}
                            className="text-emerald-500 shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-slate-100 pt-5 mt-auto">
                      <div className="mb-4">
                        <span className="text-[18px] font-extrabold text-slate-900">
                          {product.price}
                        </span>
                        <span className="text-[12px] text-slate-400 ml-1">
                          {product.priceLabel}
                        </span>
                      </div>
                      <Link
                        href={product.href}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                          product.featured
                            ? "bg-blue-600 hover:bg-blue-500 text-white"
                            : "bg-slate-900 hover:bg-slate-700 text-white"
                        }`}
                      >
                        Detayları Gör
                        <ICONS.arrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TrustBar
        id="guven"
        eyebrow="Güven"
        title={
          <>
            Türkiye'nin Güvenilir <br />
            Siber Güvenlik Partneri
          </>
        }
        description="LSG altyapısı ile yüzlerce kurumsal müşteri ve kritik altyapılar korunmaktadır. 7/24 aktif izleme ile tehditlere anında müdahale edilir."
        imageSrc="/images/siber2.png"
        stats={[
          { value: "500+", label: "Korunan Kurum" },
          { value: "15+", label: "Yıllık Tecrübe" },
          { value: "7/24", label: "SOC İzleme" },
          { value: "99.9%", label: "Uptime Garantisi" },
        ]}
      />

      <HowItWorks
        id="nasil"
        title="Siber Güvenlik Sürecimiz"
        subtitle="Tehditleri tespit etmekten önlem almaya kadar uçtan uca güvenlik yönetimi."
        visual="number"
        visualBg="from-[#1a0505] via-[#3b0d0d] to-[#0f172a]"
        accentColor="blue"
        steps={[
          {
            title: "Keşif & Analiz",
            desc: "Mevcut altyapınız, açık noktalarınız ve risk seviyeniz kapsamlı biçimde analiz edilir.",
          },
          {
            title: "Çözüm Tasarımı",
            desc: "İhtiyacınıza özel güvenlik mimarisi ve koruma katmanları tasarlanır.",
          },
          {
            title: "Kurulum & Entegrasyon",
            desc: "Çözümler mevcut sistemlerinize kesintisiz entegre edilir ve aktif hale getirilir.",
          },
        ]}
        extraSteps={[
          { num: "01", title: "Keşif", desc: "Altyapı ve risk analizi" },
          { num: "02", title: "Tasarım", desc: "Güvenlik mimarisi" },
          { num: "03", title: "Kurulum", desc: "Entegrasyon ve devreye alma" },
          { num: "04", title: "İzleme", desc: "7/24 aktif SOC takibi" },
        ]}
      />
      <InfoSection
        id="neden-lsg"
        title="LSG ile Siber Güvenlik için Nedenler"
        items={[
          {
            title:
              "LSG, 15+ yıllık siber güvenlik deneyimiyle Türkiye'nin önde gelen güvenlik çözüm sağlayıcılarından biridir.",
            desc: "Kurumsal ve KOBİ müşterilerine yönelik kapsamlı güvenlik hizmetleri sunmaktayız.",
          },
          {
            title: "7/24 SOC",
            desc: "Kesintisiz izleme",
            icon: "monitor",
          },
          {
            title: "15+ Yıl",
            desc: "Sektör deneyimi",
            icon: "award",
          },
          {
            title: "500+",
            desc: "Korunan kurum",
            icon: "building",
          },
          {
            title: "< 5 dk",
            desc: "Ortalama müdahale",
            icon: "zap",
          },
          {
            title: "Kullanım alanı",
            desc: "Finans & bankacılık, E-ticaret, Kamu kurumları, Kritik altyapılar",
          },
        ]}
      />

      <FaqSection
        id="sss"
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        faqs={[
          {
            q: "Siber güvenlik hizmetleriniz hangi sektörlere yöneliktir?",
            a: "Finans, kamu, e-ticaret, sağlık ve üretim başta olmak üzere tüm sektörlerdeki kurumlara yönelik çözümler sunmaktayız.",
          },
          {
            q: "SOC hizmeti ne anlama gelir?",
            a: "Security Operations Center (SOC), güvenlik olaylarını gerçek zamanlı izleyen, tespit eden ve müdahale eden uzman ekip ve altyapının bütünüdür. LSG SOC'u 7/24 aktif olarak çalışır.",
          },
          {
            q: "Sızma testi ne sıklıkla yapılmalıdır?",
            a: "En az yılda bir kez, büyük sistem değişikliklerinin ardından veya yeni düzenleyici gereklilikler doğrultusunda sızma testi yapılması önerilir.",
          },
          {
            q: "DDoS saldırısına uğrarsam ne kadar sürede korunmaya geçilir?",
            a: "LSG DDoS mitigasyon altyapısı, saldırıyı saniyeler içinde otomatik olarak tespit edip trafiği temiz hatlara yönlendirir.",
          },
          {
            q: "Fiyatlandırma nasıl belirleniyor?",
            a: "Siber güvenlik çözümlerinde fiyatlandırma; şirket büyüklüğü, korunacak sistemler ve seçilen hizmet seviyesine göre özelleştirilir. Teklif almak için bizimle iletişime geçebilirsiniz.",
          },
        ]}
      />

      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <CTASection />
        </div>
      </section>
    </div>
  );
}
