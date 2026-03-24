"use client";

import Link from "next/link";
import PageHero from "@/components/marketing/hero/PageHero";

const stats = [
  {
    value: "10.000+",
    label: "Aktif Sertifika",
    sub: "Türkiye genelinde yönetilen",
  },
  { value: "99.9%", label: "Uptime SLA", sub: "Yazılı garanti ile" },
  { value: "250+", label: "Kurumsal Referans", sub: "Finans, kamu ve telekom" },
  { value: "24/7", label: "Teknik Destek", sub: "Ortalama 3 dk yanıt" },
];

function StatGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div key={i} className="ph-stat rounded-2xl p-6">
          <div
            className="text-3xl font-bold mb-1"
            style={{ color: "#E2EFFF", fontFamily: "'Syne',sans-serif" }}
          >
            {s.value}
          </div>
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{
              color: "rgba(125,211,252,0.7)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {s.label}
          </div>
          <div
            className="text-xs"
            style={{
              color: "rgba(186,214,255,0.4)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            {s.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <PageHero
      label="LSG Teknoloji · Hakkımızda"
      titleShimmer="Dijital Güvenliğin"
      titleStatic="Kurumsal Adresi"
      subtitle="SSL sertifikaları, web uygulama güvenliği ve kurumsal siber güvenlik çözümlerinde 10+ yıldır güvenilir iş ortağınız. Global CA'larla doğrudan entegre, %99.9 SLA garantili altyapı."
      minHeight="88vh"
      actions={
        <>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white"
            style={{
              background: "linear-gradient(135deg,#0EA5E9,#38BDF8)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            İletişime Geç
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/kaynaklar/referanslar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(186,214,255,0.85)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Referanslarımız
          </Link>
        </>
      }
      bottom={<StatGrid />}
    />
  );
}
