import Hero from "@/components/hosting/Hero";
import Features from "@/components/hosting/Features";
import Process from "@/components/hosting/Process";
import Tiers from "@/components/hosting/Tiers";
import type { FeatureItem } from "@/components/hosting/Features";

const features: FeatureItem[] = [
  {
    icon: "trending",
    tag: "Gelir Modeli",
    title: "Yüksek Gelir Potansiyeli",
    desc: "Satış hacmine göre artan komisyon modeli.",
    metric: "40%",
    metricLabel: "kâr marjı",
    accent: "#1E6ADC",
    glow: "rgba(30,106,220,0.18)",
  },
  {
    icon: "shield",
    tag: "Teknik Altyapı",
    title: "White-Label & API",
    desc: "Kendi markanızla satış imkanı.",
    metric: "99.9%",
    metricLabel: "uptime",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.18)",
  },
  {
    icon: "users",
    tag: "Partner Desteği",
    title: "Dedicated Manager",
    desc: "Özel destek ve büyüme danışmanlığı.",
    metric: "24/7",
    metricLabel: "destek",
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.18)",
  },
];
const steps = [
  {
    number: "01",
    title: "Başvuru",
    desc: "Online form ile başvurunuzu yapın.",
    duration: "1–2 gün",
  },
  {
    number: "02",
    title: "Onboarding",
    desc: "Sözleşme ve panel erişimi.",
    duration: "2–3 gün",
  },
  {
    number: "03",
    title: "Entegrasyon",
    desc: "API / WHMCS kurulum.",
    duration: "3–5 gün",
  },
  {
    number: "04",
    title: "Satış",
    desc: "Canlıya geçiş ve büyüme.",
    duration: "Sürekli",
  },
];

export default function BayilikPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900">
      <Hero
        variant="bayilik"
        badge="Global Partner Network"
        title="LSG Bayilik"
        highlight="Programı"
        description="SSL çözümlerini kendi markanızla sunun."
        ctas={{
          primary: { label: "Başvur", href: "/partners/bayi/apply" },
          secondary: { label: "İletişim", href: "/iletisim" },
        }}
        stats={[
          { value: "150", label: "Partner", suffix: "+" },
          { value: "99.9", label: "SLA", suffix: "%" },
          { value: "40", label: "Kâr", suffix: "%" },
          { value: "24/7", label: "Destek" },
        ]}
      />

      <Features
        variant="bayilik"
        badge="Neden LSG Partner Ağı"
        title="Bayilikte Sizi"
        highlight="Öne Çıkaran Faktörler"
        features={features}
        trustItems={["DigiCert Yetkili Bayi", "ISO 27001", "KVKK"]}
      />

      <Process
        variant="bayilik"
        badge="Nasıl Çalışır"
        title="Bayilik"
        highlight="Süreci"
        steps={steps}
        cta={{
          title: "Başlamaya hazır mısınız?",
          description: "Ortalama onboarding 7 gün",
          button: {
            label: "Hemen Başvur",
            href: "/partners/bayi/apply",
          },
        }}
      />

      <Tiers />
    </main>
  );
}
