"use client";

import PageHero from "@/components/marketing/hero/PageHero";

const metrics = [
  { value: "250+", label: "Kurumsal Referans", sub: "Aktif müşteri portföyü" },
  {
    value: "99.99%",
    label: "Hizmet Sürekliliği",
    sub: "Ölçülen uptime ortalaması",
  },
  { value: "24/7", label: "Teknik Destek", sub: "Ortalama 3 dk yanıt" },
  { value: "10K+", label: "Aktif Sertifika", sub: "Yönetilen toplam" },
];

function MetricGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="ph-stat rounded-2xl p-6">
          <div className="text-3xl font-display font-bold mb-1 text-[#E2EFFF]">
            {m.value}
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-1 text-sky-300/80">
            {m.label}
          </div>
          <div className="text-xs text-blue-200/40">{m.sub}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <PageHero
      label="LSG Teknoloji · Referanslarımız"
      titleShimmer="Güvenilir Kurumsal"
      titleStatic="Referanslar"
      subtitle="Finans kuruluşlarından cumhurbaşkanlığına, telekom devi şirketlerinden holding yapılarına — 250+ kurumsal organizasyon LSG Teknoloji'yi güvenlik altyapısı için tercih ediyor."
      minHeight="70vh"
      bottom={<MetricGrid />}
    />
  );
}
