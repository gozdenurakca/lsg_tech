import Hero from "@/components/hosting/Hero";
import Features from "@/components/hosting/Features";
import Process from "@/components/hosting/Process";
import CTA from "@/components/hosting/CTA";
import type { FeatureItem } from "@/components/hosting/Features";

const TRUST_ITEMS = [
  { text: "WHMCS Entegrasyonu" },
  { text: "REST API" },
  { text: "Otomatik SSL" },
  { text: "7/24 Destek" },
];

const features: FeatureItem[] = [
  {
    icon: "globe",
    tag: "Entegrasyon",
    title: "WHMCS Tam Entegrasyon",
    desc: "Hosting paneliniz ile tam uyumlu SSL satış altyapısı.",
    metric: "100%",
    metricLabel: "uyumluluk",
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.18)",
  },
  {
    icon: "zap",
    tag: "Otomasyon",
    title: "Otomatik SSL Provizyon",
    desc: "Siparişten sonra saniyeler içinde sertifika üretimi.",
    metric: "<5 dk",
    metricLabel: "kurulum",
    accent: "#38BDF8",
    glow: "rgba(56,189,248,0.18)",
  },
  {
    icon: "shield",
    tag: "Güvenlik",
    title: "White-label Altyapı",
    desc: "Müşterileriniz sadece sizin markanızı görür.",
    metric: "24/7",
    metricLabel: "destek",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
  },
];

const steps = [
  {
    number: "01",
    title: "Başvuru",
    desc: "Partner başvuru formunu doldurun.",
    duration: "1–2 gün",
  },
  {
    number: "02",
    title: "İnceleme",
    desc: "Teknik ekip değerlendirme yapar.",
    duration: "1–2 gün",
  },
  {
    number: "03",
    title: "Entegrasyon",
    desc: "WHMCS / API kurulumu yapılır.",
    duration: "3–5 gün",
  },
  {
    number: "04",
    title: "Canlı",
    desc: "Satışa başlayın.",
    duration: "Aktif",
  },
];

export default function HostingPartnerPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">
      <Hero
        variant="hosting"
        badge="LSG Hosting Partner Network"
        title="Hosting Partner"
        highlight="Başvurusu"
        description="WHMCS ve hosting altyapınıza SSL & güvenlik çözümlerini entegre ederek gelir modelinizi büyütün."
        ctas={{
          primary:   { label: "Partner Başvurusu", href: "/partners/hosting/apply" },
          secondary: { label: "Demo Talep Et",      href: "/iletisim" },
        }}
        trustItems={TRUST_ITEMS}
        steps={["Başvuru", "İnceleme", "Entegrasyon", "Canlı"]}
      />

      <Features
        variant="hosting"
        badge="Neden LSG Hosting Partner"
        title="Altyapınızı"
        highlight="Güçlendiren Özellikler"
        features={features}
        trustItems={["WHMCS Sertifikalı", "DigiCert Yetkili Bayi"]}
      />

      <Process
        variant="hosting"
        badge="Nasıl Çalışır"
        title="Entegrasyon"
        highlight="Süreci"
        steps={steps}
        cta={{
          title: "Ortalama kurulum süresi",
          description: "5–7 iş günü",
          button: {
            label: "Hemen Başvur",
            href: "/partners/hosting/apply",
          },
        }}
      />

      <CTA
        badge="Bugün Başlayın"
        title="Hosting altyapınızı"
        highlight="gelir motoruna dönüştürün"
        description="WHMCS modülü ile 15 dakikada kurulum yapın"
        highlights={[
          { value: "15 dk", label: "Kurulum" },
          { value: "~3 dk", label: "SSL" },
          { value: "7/24", label: "Destek" },
        ]}
        primaryCTA={{
          label: "Ücretsiz Başvur",
          href: "/partners/hosting/apply",
        }}
        secondaryCTA={{
          label: "Demo Talep Et",
          href: "/iletisim",
        }}
        note="Sözleşme gerektirmez · İlk 6 ay ücretsiz"
      />
    </main>
  );
}
