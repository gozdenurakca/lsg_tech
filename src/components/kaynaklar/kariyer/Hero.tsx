"use client";

import Link from "next/link";
import PageHero from "@/components/marketing/hero/PageHero";

const trustItems = [
  "4 Açık Pozisyon",
  "Remote Seçenekleri",
  "Yıllık Eğitim Bütçesi",
  "ISO 27001 Ortamı",
];

function TrustPills() {
  return (
    <div
      className="flex items-center justify-center gap-8 flex-wrap text-xs"
      style={{
        color: "rgba(186,214,255,0.4)",
        fontFamily: "'DM Sans',sans-serif",
      }}
    >
      {trustItems.map((t, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span style={{ color: "rgba(186,214,255,0.2)" }}>·</span>}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke="#38BDF8" strokeOpacity=".5" />
            <path
              d="M3.5 6l1.8 1.8L8.5 4"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <PageHero
      label="LSG Teknoloji · Kariyer"
      titleShimmer="Dijital Güvenlikte"
      titleStatic="Kariyer Yap"
      subtitle="Türkiye'nin kurumsal güvenlik altyapısını şekillendiren ekibe katılın. 250+ referans, 10K+ aktif sertifika ve büyüyen bir partner ağı ile gerçek etki yaratan projelerde çalışın."
      centered
      minHeight="80vh"
      actions={
        <>
          <a
            href="#pozisyonlar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white"
            style={{
              background: "linear-gradient(135deg,#0EA5E9,#38BDF8)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Açık Pozisyonlar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M4 9l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(186,214,255,0.85)",
              fontFamily: "'DM Sans',sans-serif",
            }}
          >
            Spontan Başvuru
          </Link>
        </>
      }
      bottom={<TrustPills />}
    />
  );
}
