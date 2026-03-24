"use client";

import { useEffect, useState } from "react";
import { ICONS } from "@/lib/icons";
import Hero from "@/components/marketing/hero/ProductHero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import TrustBar from "@/components/marketing/TrustBar";
import InfoSection from "@/components/marketing/InfoSection";
import HowItWorks from "@/components/marketing/HowItWorks";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import PricingSection from "@/components/pricing/PricingSection";
import type { PricingProduct } from "@/components/pricing/PricingRow";

type Props = {
  products: PricingProduct[];
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
          title="Başa dön"
          aria-label="Başa dön"
        >
          <ICONS.arrowUp size={15} />
        </button>

        <div className="w-px h-5 bg-slate-200 flex-shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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

        <div className="ml-auto flex-shrink-0">
          <a
            href="#fiyatlandirma"
            className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition"
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
      {/* statik bir şekilde kalabilir.*/}
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

      <PricingSection
        id="fiyatlandirma"
        eyebrow="DV Sertifikaları"
        title="Domain Validation — Hızlı Başlangıç"
        subtitle="Domain sahipliğini doğrulayan, dakikalar içinde aktif olan, uygun fiyatlı SSL sertifikaları."
        products={products}
      />

      {/* statik bir şekilde kalabilir.*/}
      <FeatureGrid
        title="Daha Fazla SSL Sertifikası Seçeneği"
        subtitle="Her ihtiyaca uygun sertifika türleri. Hangisinin size uygun olduğundan emin değilseniz uzmanlarımıza sorun."
        ctaHref="/#teklif"
        products={[
          {
            type: "DV",
            name: "Domain Validation",
            desc: "Hızlı, uygun maliyetli. Blog ve kişisel siteler için.",
            icon: "Lock",
            color: "bg-blue-50 text-blue-600 border-blue-100",
            href: "/ssl/dv",
          },
          {
            type: "OV",
            name: "Organization Validation",
            desc: "Kurumsal kimlik doğrulamalı. KOBİ ve şirketler için.",
            icon: "ShieldCheck",
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
            href: "/ssl/ov",
          },
          {
            type: "EV",
            name: "Extended Validation",
            desc: "En yüksek güven. Finans ve e-ticaret için standart.",
            icon: "award",
            color: "bg-emerald-50 text-emerald-600 border-emerald-100",
            href: "/ssl/ev",
          },
          {
            type: "Wildcard",
            name: "Wildcard SSL",
            desc: "Tüm alt domainlerinizi tek sertifikayla koruyun.",
            icon: "Globe",
            color: "bg-orange-50 text-orange-600 border-orange-100",
            href: "/ssl/wildcard",
          },
        ]}
      />
      {/* statik bir şekilde kalabilir.*/}
      <TrustBar
        id="guven"
        eyebrow="Güven"
        title={
          <>
            Güvenilir Altyapı <br />
            Güçlü Partner Ekosistemi
          </>
        }
        description="LSG altyapısı ile çalışan yüzlerce partner ve binlerce aktif sertifika ile müşterilerimize kesintisiz güvenlik sağlıyoruz. Otomatik provizyon, güçlü API altyapısı ve 7/24 teknik destek ile dijital güvenliğinizi garanti altına alıyoruz."
        imageSrc="/images/guven.png"
        imageAlt="Secure infrastructure"
        stats={[
          { value: "10,000+", label: "Aktif Sertifika" },
          { value: "15+", label: "Yıllık Tecrübe" },
          { value: "99.9%", label: "Uptime Garantisi" },
          { value: "7/24", label: "Teknik Destek" },
        ]}
      />

      {/* statik bir şekilde kalabilir.*/}

      <InfoSection
        id="neden-lsg"
        title="LSG SSL Sertifikası almak için nedenler"
        items={[
          {
            title:
              "90 günlük yeniden düzenleme ile sektör standartlarının ötesinde",
            desc: "Yönetilen SSL'lerimiz sitenizi daha iyi korumak için her 90 günde bir yeniden düzenlenir.",
          },
          {
            title: "Üstün müşteri hizmetleri",
            desc: "Güvenlik uzmanlarımızdan 7/24 uygulamalı destek alabilirsiniz.",
          },
          {
            title: "Gerçek sertifika otoritesi altyapısı",
            desc: "DigiCert altyapısı ile global güven standartlarını sunuyoruz.",
          },
          {
            title: "SEO sıralamasını artırın",
            desc: "HTTPS kullanan siteler arama motorlarında daha üst sıralarda yer alır.",
          },
          {
            title: "Düzenleme standartlarına uyumluluk",
            desc: "PCI-DSS, GDPR ve diğer güvenlik standartlarına uyumluluğa yardımcı olur.",
          },
          {
            title: "Güvenli mobil ve online ödeme",
            desc: "SSL şifreleme müşteri verilerini uçtan uca korur.",
          },
        ]}
      />

      {/* statik bir şekilde kalabilir.*/}

      <HowItWorks
        id="nasil"
        title="SSL sertifikaları nasıl çalışır?"
        subtitle="SSL sertifikaları kullanıcı verilerini şifreleyerek güvenli bir bağlantı sağlar."
        steps={[
          {
            title: "SSL sözleşmesi",
            desc: "Bir ziyaretçi SSL sertifikası olan bir web sitesine eriştiğinde tarayıcı ile şifreli bağlantı kurulur.",
            imageSrc: "/images/step1.jpg",
          },
          {
            title: "Güven göstergesi görünür",
            desc: "HTTPS ve kilit simgesi ziyaretçilere verilerin şifrelendiğini gösterir.",
            imageSrc: "/images/step2.jpg",
          },
          {
            title: "Veriler güvenle iletilir",
            desc: "SSL sertifikası site ile ziyaretçi arasındaki tüm verileri şifreler.",
            imageSrc: "/images/step3.jpg",
          },
        ]}
      />

      {/* statik bir şekilde kalabilir. - zaman içerisinde güncellenir*/}

      <FaqSection
        id="sss"
        eyebrow="SSS"
        title="Sıkça Sorulan Sorular"
        faqs={[
          {
            q: "SSL sertifikası nedir ve neden gereklidir?",
            a: "SSL (Secure Sockets Layer) sertifikası, siteniz ile ziyaretçileri arasındaki veri iletişimini şifreleyen dijital bir sertifikadır. HTTPS bağlantısı sağlar, tarayıcıda kilit ikonu gösterir ve Google sıralamalarını olumlu etkiler. Günümüzde tüm web siteleri için zorunlu hale gelmiştir.",
          },
          {
            q: "DV, OV ve EV sertifika arasındaki fark nedir?",
            a: "DV (Domain Validation) sadece domain sahipliğini doğrular, en hızlı ve uygun fiyatlıdır. OV (Organization Validation) şirket kimliğini de doğrular, kurumsal güven sağlar. EV (Extended Validation) en kapsamlı doğrulamayı yapar, tarayıcıda şirket adınızı gösterir ve finans/e-ticaret siteleri için standarttır.",
          },
          {
            q: "Wildcard SSL nedir, ne zaman kullanmalıyım?",
            a: "Wildcard SSL, *.sirket.com.tr gibi tüm alt domainleri tek sertifikayla korur. blog.sirket.com.tr, shop.sirket.com.tr, panel.sirket.com.tr gibi birden fazla alt domaininiz varsa Wildcard SSL hem ekonomik hem de pratik çözümdür.",
          },
          {
            q: "Sertifika kurulumunda yardım alabilir miyim?",
            a: "Evet! 7/24 Türkçe teknik destek ekibimiz cPanel, Plesk, Nginx, Apache ve IIS dahil tüm popüler platformlarda kurulum desteği sağlar. Ek ücret talep etmiyoruz.",
          },
          {
            q: "Mevcut sertifikamı LSG'ye taşıyabilir miyim?",
            a: "Evet, mevcut sertifikanızın kalan süresini yeni sertifikanıza ekleyebilirsiniz. Taşıma sürecinde ekibimiz size adım adım rehberlik eder.",
          },
        ]}
      />

      {/* statik bir şekilde kalabilir.*/}
      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <CTASection
            title="Aklınızda başka sorular mı var?"
            subtitle="Uzman ekibimiz 7/24 yanınızda."
            buttonLabel="Ücretsiz Danışmanlık Al"
            buttonHref="/#teklif"
          />
        </div>
      </section>
    </div>
  );
}
