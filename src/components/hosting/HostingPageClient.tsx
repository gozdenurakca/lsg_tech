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

function HostingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Modeller", href: "#modeller" },
    { label: "Nasıl Çalışır?", href: "#nasil" },
    { label: "Neden LSG?", href: "#neden-lsg" },
    { label: "SSS", href: "#sss" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-sm text-slate-600 hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto">
          <Link
            href="/teklif"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Başvur
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function HostingPageClient() {
  return (
    <div className="bg-white font-sans">
      {/* HERO */}
      <Hero
        badge={{
          icon: "server",
          label: "Hosting İş Ortaklığı",
          color: "bg-blue-50 border border-blue-200 text-blue-700",
        }}
        title={
          <>
            Hosting İşinizi{" "}
            <span className="text-blue-600">LSG ile Büyütün</span>
          </>
        }
        subtitle="Bayilik, altyapı partnerliği ve teknoloji entegrasyonu ile hosting ekosistemine katılın."
        imageSrc="/images/hosting.png"
        primaryButton={{ label: "Modelleri İncele", href: "#modeller" }}
        secondaryButton={{ label: "Başvur", href: "/teklif" }}
      />

      <HostingNavbar />

      {/* 🔥 ANA MODEL SECTION */}
      <section id="modeller" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-blue-500 font-bold mb-3">
              İş Ortaklığı Modelleri
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Size Uygun Modeli Seçin
            </h2>

            <p className="text-slate-500 max-w-xl mx-auto">
              LSG altyapısını kullanarak hosting işinizi büyütün ve gelir elde
              edin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* BAYİ */}
            <Link
              href="/hosting/bayilik"
              className="group border rounded-3xl p-6 hover:shadow-xl transition"
            >
              <ICONS.users className="text-blue-600 mb-4" size={22} />

              <h3 className="font-bold text-lg mb-2">Bayi Hosting</h3>

              <p className="text-sm text-slate-500 mb-4">
                Kendi markanızla hosting satışı yapın ve recurring gelir elde
                edin.
              </p>

              <span className="text-blue-600 text-sm font-semibold inline-flex items-center gap-2">
                Detayları Gör <ICONS.arrowRight size={14} />
              </span>
            </Link>

            {/* HOSTING PARTNER */}
            <Link
              href="/hosting/hosting-partner"
              className="group border rounded-3xl p-6 hover:shadow-xl transition"
            >
              <ICONS.handshake className="text-indigo-600 mb-4" size={22} />

              <h3 className="font-bold text-lg mb-2">Hosting Partner</h3>

              <p className="text-sm text-slate-500 mb-4">
                Altyapınızı LSG’ye taşıyın, operasyon yükünü azaltın.
              </p>

              <span className="text-indigo-600 text-sm font-semibold inline-flex items-center gap-2">
                Detayları Gör <ICONS.arrowRight size={14} />
              </span>
            </Link>

            {/* TEKNOLOJİ */}
            <Link
              href="/hosting/teknoloji-partner"
              className="group border rounded-3xl p-6 hover:shadow-xl transition"
            >
              <ICONS.boxes className="text-cyan-600 mb-4" size={22} />

              <h3 className="font-bold text-lg mb-2">Teknoloji Partner</h3>

              <p className="text-sm text-slate-500 mb-4">
                API ve entegrasyon ile LSG ürünlerini sisteminize dahil edin.
              </p>

              <span className="text-cyan-600 text-sm font-semibold inline-flex items-center gap-2">
                Detayları Gör <ICONS.arrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <TrustBar
        id="guven"
        eyebrow="Altyapı"
        title="Kurumsal Hosting Altyapısı"
        description="Yüksek uptime, güçlü sunucular ve global erişim."
        imageSrc="/images/hosting2.png"
        stats={[
          { value: "99.9%", label: "Uptime" },
          { value: "500+", label: "Partner" },
          { value: "7/24", label: "Destek" },
        ]}
      />

      {/* HOW */}
      <HowItWorks
        id="nasil"
        title="Nasıl Partner Olursunuz?"
        steps={[
          { title: "Başvur", desc: "Formu doldurun" },
          { title: "Onay", desc: "Hızlı değerlendirme" },
          { title: "Başla", desc: "Satışa başlayın" },
        ]}
      />

      {/* INFO */}
      <InfoSection
        id="neden-lsg"
        title="Neden LSG?"
        items={[
          { title: "Recurring gelir", desc: "Sürekli kazanç modeli" },
          { title: "White-label", desc: "Kendi markanız" },
          { title: "API", desc: "Geliştirici dostu" },
        ]}
      />

      {/* FAQ */}
      <FaqSection
        id="sss"
        title="SSS"
        faqs={[
          {
            q: "Kimler partner olabilir?",
            a: "Ajanslar, yazılım firmaları ve girişimler.",
          },
        ]}
      />

      <CTASection />
    </div>
  );
}
