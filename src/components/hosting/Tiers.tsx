"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const tiers = [
  {
    name: "Silver",
    subtitle: "Başlangıç seviyesi",
    discount: "20",
    minVolume: "₺50.000 / ay",
    color: "#8B9EB7",
    glow: "rgba(139,158,183,0.15)",
    border: "rgba(139,158,183,0.25)",
    features: [
      "Tüm SSL ürünlerine erişim",
      "Teknik dokümantasyon",
      "Partner paneli",
      "E-posta destek",
      "Aylık performans raporu",
    ],
    missing: ["Dedicated manager", "API önceliği", "SLA garantisi"],
    cta: "Silver Başvur",
  },
  {
    name: "Gold",
    subtitle: "En popüler seviye",
    discount: "30",
    minVolume: "₺150.000 / ay",
    color: "#D4A843",
    glow: "rgba(212,168,67,0.18)",
    border: "rgba(212,168,67,0.35)",
    features: [
      "Tüm SSL ürünlerine erişim",
      "Teknik dokümantasyon",
      "Partner paneli",
      "Öncelikli destek hattı",
      "Haftalık performans raporu",
      "WHMCS entegrasyonu",
      "White-label portal",
    ],
    missing: ["SLA garantisi"],
    cta: "Gold Başvur",
    badge: "En Popüler",
    featured: true,
  },
  {
    name: "Platinum",
    subtitle: "Kurumsal çözüm",
    discount: "40",
    minVolume: "₺400.000 / ay",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.18)",
    border: "rgba(139,92,246,0.35)",
    features: [
      "Tüm SSL ürünlerine erişim",
      "Teknik dokümantasyon",
      "Partner paneli",
      "7/24 öncelikli destek",
      "Gerçek zamanlı raporlama",
      "WHMCS + REST API",
      "White-label portal",
      "Dedicated partner manager",
      "%99.9 SLA garantisi",
    ],
    missing: [],
    cta: "Platinum Başvur",
    badge: "Kurumsal",
  },
];

const CheckIcon = ICONS.check;
const ZapIcon = ICONS.zap;

export default function Tiers() {
  return (
    <section className="relative py-32 bg-[#F7F9FF] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.18em] text-xs text-blue-600 mb-4">
            Komisyon Yapısı
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Bayilik <span className="text-blue-600">Seviyeleri</span>
          </h2>

          <p className="text-sm text-slate-500 mt-4">
            Satış hacminize göre otomatik yükselen komisyon oranları.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const isFeatured = !!tier.featured;

            return (
              <div
                key={i}
                className={`relative rounded-2xl p-10 flex flex-col border transition hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured
                    ? "bg-slate-900 text-blue-100 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                {tier.badge && (
                  <span
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-medium mb-4"
                    style={{ color: tier.color }}
                  >
                    <ZapIcon size={12} />
                    {tier.badge}
                  </span>
                )}

                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: tier.color }}
                >
                  {tier.name}
                </h3>

                <p className="text-sm text-slate-400 mb-6">{tier.subtitle}</p>

                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-lg font-bold"
                    style={{ color: tier.color }}
                  >
                    %
                  </span>
                  <span className="text-5xl font-bold">{tier.discount}</span>
                </div>

                <p className="text-xs text-slate-400 mb-4">indirim oranı</p>

                <div className="text-xs mb-6 text-slate-500">
                  Min. hacim:{" "}
                  <span className="font-semibold" style={{ color: tier.color }}>
                    {tier.minVolume}
                  </span>
                </div>

                <div className="border-t border-slate-200 mb-6" />

                <div className="space-y-2 mb-8 text-sm">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckIcon size={14} style={{ color: tier.color }} />
                      {f}
                    </div>
                  ))}

                  {tier.missing.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 opacity-40">
                      <span className="w-[14px] h-[14px] border rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  href="/partners/bayi/apply"
                  className={`mt-auto text-center py-3 rounded-lg font-medium transition ${
                    isFeatured
                      ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-lg"
                      : "border hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Tüm seviyeler yıllık sözleşme ile geçerlidir. Hacim hedeflerinize
          ulaştığınızda seviye otomatik güncellenir.
        </p>
      </div>
    </section>
  );
}
