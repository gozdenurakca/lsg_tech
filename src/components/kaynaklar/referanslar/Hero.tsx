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
          <div
            className="text-3xl font-bold mb-1"
            style={{ color: "#E2EFFF", fontFamily: "'Syne',sans-serif" }}
          >
            {m.value}
          </div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{
              color: "rgba(125,211,252,0.7)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {m.label}
          </div>
          <div
            className="text-xs"
            style={{
              color: "rgba(186,214,255,0.4)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {m.sub}
          </div>
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
