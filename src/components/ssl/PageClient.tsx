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

import type { Product } from "@/lib/ssl/types";

const SSL_TYPES = [
  {
    type: "DV",
    name: "Domain Validation",
    tagline: "Hızlı & Uygun Fiyatlı",
    desc: "Alan adı sahipliğini doğrular. Blog, kişisel site ve startup landing page'leri için idealdir.",
    price: "₺149",
    priceLabel: "/yıldan başlayan",
    href: "/ssl/dv",
    icon: "lock" as const,
    features: ["5–10 dk aktivasyon", "256-bit şifreleme", "HTTPS güven kilidi"],
    accent: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    type: "OV",
    name: "Organization Validation",
    tagline: "Kurumsal Güven",
    desc: "Şirket kimliğini doğrular. Kurumsal web siteleri ve e-ticaret platformları için uygundur.",
    price: "₺399",
    priceLabel: "/yıldan başlayan",
    href: "/ssl/ov",
    icon: "shieldCheck" as const,
    features: [
      "1–3 gün aktivasyon",
      "Şirket doğrulaması",
      "Kurumsal güven sinyali",
    ],
    accent: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    type: "EV",
    name: "Extended Validation",
    tagline: "Maksimum Güven",
    desc: "En kapsamlı doğrulama seviyesi. Bankacılık, finans ve yüksek güven gerektiren platformlar için.",
    price: "₺799",
    priceLabel: "/yıldan başlayan",
    href: "/ssl/ev",
    icon: "award" as const,
    features: [
      "3–7 gün aktivasyon",
      "Tam şirket doğrulaması",
      "En yüksek güven seviyesi",
    ],
    accent: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeColor: "bg-violet-100 text-violet-700",
    featured: true,
  },
  {
    type: "Wildcard",
    name: "Wildcard SSL",
    tagline: "Tüm Alt Domainler",
    desc: "*.siteniz.com formatındaki tüm subdomainleri tek sertifika ile korur. Ekstra maliyet yok.",
    price: "₺599",
    priceLabel: "/yıldan başlayan",
    href: "/ssl/wildcard",
    icon: "layers" as const,
    features: [
      "Sınırsız subdomain",
      "10–30 dk aktivasyon",
      "Tek sertifika yönetimi",
    ],
    accent: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
  },
];

type Props = {
  products?: Product[];
};

function SslNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    { label: "Fiyatlandırma", href: "#fiyatlandirma" },
    { label: "Güven", href: "#guven" },
    { label: "Neden LSG?", href: "#neden-lsg" },
    { label: "SSL Nasıl Çalışır?", href: "#nasil" },
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
          className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-500 flex items-center justify-center transition-all flex-shrink-0"
        >
          <ICONS.arrowUp size={15} />
        </button>

        <div className="w-px h-5 bg-slate-200 flex-shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-4 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto">
          <a
            href="#fiyatlandirma"
            className="inline-flex items-center gap-1.5 bg-blue-900 text-white text-[13px] font-semibold px-4 py-2 rounded-lg"
          >
            Hemen Al <ICONS.arrowRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function SSLPageClient({ products }: Props) {
  return (
    <div className="bg-white font-sans">
      <Hero
        badge={{
          icon: "ShieldCheck",
          label: "DigiCert Yetkili Türkiye Partneri",
        }}
        title={
          <>
            Her şeyin başı <span className="text-blue-900">GÜVENLİK!</span>
          </>
        }
        subtitle="Sitenizi ve müşterilerinizi güvende tutun!"
        imageSrc="/images/foto.png"
        floatingCard={{
          icon: "ShieldCheck",
          eyebrow: "Bağlantı Durumu",
          text: "🔒 Güvenli",
        }}
        primaryButton={{ label: "Sertifika Seç", href: "#fiyatlandirma" }}
        secondaryButton={{ label: "Nasıl Çalışır?", href: "#nasil" }}
        items={[
          { icon: "Lock", title: "Veri şifreleme", desc: "..." },
          {
            icon: "Star",
            title: "Google sıralamalarında öne geçin",
            desc: "...",
          },
          { icon: "Users", title: "Müşteri güvenini kazanın", desc: "..." },
        ]}
      />

      <SslNavbar />

      <section id="fiyatlandirma" className="py-24 bg-[#f8fafc] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-bold mb-3">
              Sertifika Türleri
            </p>
            <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900 mb-4">
              İhtiyacınıza Uygun SSL'i Seçin
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Her site için doğru doğrulama seviyesi. Hangi sertifikanın size
              uygun olduğundan emin değilseniz uzmanlarımıza sorun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {SSL_TYPES.map((ssl) => {
              const Icon = ICONS[ssl.icon] ?? ICONS.shield;
              return (
                <div
                  key={ssl.type}
                  className={`relative bg-white rounded-3xl border overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    ssl.featured
                      ? "border-violet-200 shadow-lg shadow-violet-100/50"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {ssl.featured && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-violet-600 text-white text-[10px] font-bold tracking-wide uppercase">
                      Popüler
                    </div>
                  )}

                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${ssl.accent}`}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${ssl.iconBg}`}
                      >
                        <Icon size={18} className={ssl.iconColor} />
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${ssl.badgeColor}`}
                      >
                        {ssl.type}
                      </span>
                    </div>

                    <h3 className="text-[16px] font-bold text-slate-900 mb-1">
                      {ssl.name}
                    </h3>
                    <p className="text-[12px] font-semibold text-slate-400 uppercase tracking-wide mb-3">
                      {ssl.tagline}
                    </p>
                    <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                      {ssl.desc}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {ssl.features.map((f) => (
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

                    <div className="relative overflow-hidden border-t border-slate-100 pt-5 mt-auto">
                      <div className="pointer-events-none absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 opacity-10 blur-2xl" />
                      <div className="pointer-events-none absolute -bottom-2 -right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-primary via-blue-600 to-indigo-700 opacity-20 blur-lg" />
                      <div className="mb-4">
                        <span className="text-[24px] font-extrabold text-slate-900">
                          {ssl.price}
                        </span>
                        <span className="text-[12px] text-slate-400 ml-1">
                          {ssl.priceLabel}
                        </span>
                      </div>
                      <Link
                        href={ssl.href}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold transition-all ${
                          ssl.featured
                            ? "bg-violet-600 hover:bg-violet-500 text-white"
                            : "bg-slate-900 hover:bg-slate-700 text-white"
                        }`}
                      >
                        Sertifika Seç
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
            Güvenilir Altyapı <br />
            Güçlü Partner Ekosistemi
          </>
        }
        description="LSG altyapısı ile çalışan yüzlerce partner ve binlerce aktif sertifika ile müşterilerimize kesintisiz güvenlik sağlıyoruz."
        imageSrc="/images/guven.png"
        stats={[
          { value: "10,000+", label: "Aktif Sertifika" },
          { value: "15+", label: "Yıllık Tecrübe" },
          { value: "99.9%", label: "Uptime Garantisi" },
          { value: "7/24", label: "Teknik Destek" },
        ]}
      />

      <InfoSection
        id="neden-lsg"
        title="LSG SSL Sertifikası almak için nedenler"
        items={[
          {
            title: "90 günlük yeniden düzenleme",
            desc: "Her 90 günde bir otomatik yenileme.",
          },
          {
            title: "Üstün müşteri hizmetleri",
            desc: "7/24 destek.",
          },
          {
            title: "Gerçek CA altyapısı",
            desc: "DigiCert güveni.",
          },
          {
            title: "SEO avantajı",
            desc: "HTTPS ile üst sıralar.",
          },
          {
            title: "Uyumluluk",
            desc: "PCI-DSS, GDPR.",
          },
          {
            title: "Güvenli ödeme",
            desc: "Veri şifreleme.",
          },
        ]}
      />

      <HowItWorks
        title="SSL sertifikaları nasıl çalışır?"
        subtitle="SSL sertifikaları kullanıcı verilerini şifreleyerek güvenli bir bağlantı sağlar."
        steps={[
          {
            title: "SSL sözleşmesi",
            desc: "Tarayıcı ile güvenli bağlantı kurulur.",
            imageSrc: "/images/step1.jpg",
          },
          {
            title: "Güven göstergesi",
            desc: "HTTPS görünür.",
            imageSrc: "/images/step2.jpg",
          },
          {
            title: "Veri güvenliği",
            desc: "Tüm veri şifrelenir.",
            imageSrc: "/images/step3.jpg",
          },
        ]}
      />

      <FaqSection
        id="sss"
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        faqs={[
          {
            q: "SSL nedir?",
            a: "Veriyi şifreler.",
          },
          {
            q: "DV / OV / EV farkı?",
            a: "Doğrulama seviyesi farkı.",
          },
          {
            q: "Wildcard nedir?",
            a: "Tüm subdomainleri kapsar.",
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
