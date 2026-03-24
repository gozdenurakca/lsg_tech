import Hero from "@/components/hosting/Hero";
import Features from "@/components/hosting/Features";
import Process from "@/components/hosting/Process";
import CTA from "@/components/hosting/CTA";
import type { FeatureItem } from "@/components/hosting/Features";

const features: FeatureItem[] = [
  {
    icon: "shield",
    tag: "Güvenli Altyapı",
    title: "API Entegrasyonu",
    desc: "Sertifika yaşam döngüsünü otomatik yönetin.",
    metric: "99.9%",
    metricLabel: "uptime",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
  },
  {
    icon: "zap",
    tag: "Hızlı Kurulum",
    title: "Sandbox ve Test Ortamı",
    desc: "Entegrasyonu canlıya almadan önce güvenle test edin.",
    metric: "24/7",
    metricLabel: "erişim",
    accent: "#8B5CF6",
    glow: "rgba(139,92,246,0.18)",
  },
  {
    icon: "globe",
    tag: "Ölçeklenebilirlik",
    title: "Webhook & Otomasyon",
    desc: "Sipariş, yenileme ve durum güncellemelerini takip edin.",
    metric: "API",
    metricLabel: "hazır",
    accent: "#10B981",
    glow: "rgba(16,185,129,0.18)",
  },
];

const steps = [
  {
    number: "01",
    title: "Başvuru & Ön Değerlendirme",
    desc: "Teknik ihtiyaçlarınızı paylaşın.",
    duration: "1–2 iş günü",
  },
  {
    number: "02",
    title: "Sandbox & Test",
    desc: "API anahtarları ve test ortamı.",
    duration: "Aynı gün",
  },
  {
    number: "03",
    title: "Prod Entegrasyon",
    desc: "Webhook ve go-live süreçleri.",
    duration: "3–5 iş günü",
  },
  {
    number: "04",
    title: "Büyüme",
    desc: "API raporlama ve scaling.",
    duration: "Süregelen",
  },
];

const HERO_STATS = [
  { value: "99.9", label: "API Uptime", suffix: "%" },
  { value: "5", label: "DV Süre", suffix: "dk<" },
  { value: "100", label: "Entegrasyon", suffix: "+" },
  { value: "24/7", label: "Sandbox", suffix: "" },
];

export default function TeknolojiPartnerPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">
      <Hero
        variant="teknoloji"
        badge="LSG Teknoloji Partner"
        title="Teknoloji Partner"
        highlight="Programı"
        description="REST API ve webhook altyapısıyla SSL sertifika yaşam döngüsünü uygulamanıza entegre edin."
        ctas={{
          primary: {
            label: "Sandbox Erişimi Al",
            href: "/partners/teknoloji/apply",
          },
          secondary: { label: "Dökümanlar", href: "/docs" },
        }}
        stats={HERO_STATS}
      />

      <Features
        variant="teknoloji"
        badge="Neden LSG Teknoloji Partner"
        title="Altyapınızı"
        highlight="Güçlendirin"
        features={features}
        trustItems={[
          "DigiCert Yetkili Partner",
          "Sandbox Test Ortamı",
          "ISO 27001",
          "Webhook Desteği",
        ]}
      />

      <Process
        variant="teknoloji"
        badge="Nasıl Çalışır"
        title="Entegrasyon"
        highlight="Süreci"
        steps={steps}
        cta={{
          title: "Entegrasyona hazır mısınız?",
          description: "Sandbox erişimi aynı gün aktive edilir.",
          button: {
            label: "Sandbox Erişimi Al",
            href: "/partners/teknoloji/apply",
          },
        }}
      />

      <CTA
        badge="Başlayın"
        title="API entegrasyonunuzu"
        highlight="bugün başlatın"
        description="Sandbox ortamı ile dakikalar içinde entegrasyona başlayın."
        highlights={[
          { value: "REST API", label: "Full Access" },
          { value: "<5 dk", label: "DV Süre" },
          { value: "24/7", label: "Destek" },
        ]}
        primaryCTA={{
          label: "Sandbox Al",
          href: "/partners/teknoloji/apply",
        }}
        secondaryCTA={{
          label: "Dokümantasyon",
          href: "/docs",
        }}
        note="Sandbox erişimi ücretsiz · API anahtarı anında"
      />
    </main>
  );
}
