"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const openPositions = [
  {
    title: "Frontend Developer",
    location: "Istanbul, Türkiye",
    type: "Tam Zamanlı",
    icon: "code2",
    accent: "#0EA5E9",
    glow: "rgba(14,165,233,0.12)",
    desc: "Next.js, TypeScript ve Tailwind ile kurumsal güvenlik ürünlerinin arayüzlerini şekillendirin. Performans odaklı, erişilebilir ve modern UI'lar tasarlayın.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend Developer",
    location: "Remote",
    type: "Tam Zamanlı",
    icon: "server",
    accent: "#6366F1",
    glow: "rgba(99,102,241,0.12)",
    desc: "SSL lifecycle, WAF entegrasyonu ve sertifika provizyon sistemlerini geliştirin. Yüksek trafikli REST API'ler ve mikroservis mimarileri üzerinde çalışın.",
    tags: ["Node.js", "REST API", "PostgreSQL"],
  },
  {
    title: "DevOps Mühendisi",
    location: "Ankara, Türkiye",
    type: "Tam Zamanlı",
    icon: "zap",
    accent: "#10B981",
    glow: "rgba(16,185,129,0.12)",
    desc: "CI/CD pipeline'ları, Kubernetes cluster yönetimi ve güvenli altyapı otomasyonu üzerinde çalışın. ISO 27001 uyumlu ortamlar inşa edin.",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "Müşteri Başarı Uzmanı",
    location: "Istanbul, Türkiye",
    type: "Part-Time",
    icon: "support",
    accent: "#F59E0B",
    glow: "rgba(245,158,11,0.12)",
    desc: "Kurumsal müşterilerin sertifika onboarding süreçlerini yönetin, teknik sorularına yanıt verin ve uzun vadeli müşteri ilişkileri geliştirin.",
    tags: ["B2B", "SLA Yönetimi", "SSL Bilgisi"],
  },
];

const ArrowIcon = ICONS.arrowRight;
export default function Positions() {
  return (
    <section
      id="pozisyonlar"
      className="relative py-24 bg-[#F7F9FC] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[.18em] text-sky-600 font-semibold mb-3">
            Fırsatlar
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Açık{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Pozisyonlar
            </span>
          </h2>
          <p className="text-sm text-slate-500 mt-3 max-w-md mx-auto">
            Aradığınız pozisyonu göremiyorsanız spontan başvuru yapabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {openPositions.map((job, i) => {
            const Icon = ICONS[job.icon];
            return (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${job.accent}60, ${job.accent}, ${job.accent}60)`,
                  }}
                />

                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: job.glow,
                      border: `1px solid ${job.accent}30`,
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: job.accent }}
                      strokeWidth={1.8}
                    />
                  </div>

                  <span className="text-xs px-3 py-1 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {job.title}
                </h3>

                <p className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1C4.343 1 3 2.343 3 4c0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinejoin="round"
                    />
                    <circle cx="6" cy="4" r="1.2" fill="currentColor" />
                  </svg>
                  {job.location}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  {job.desc}
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  {job.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/iletisim"
                  className="mt-auto text-center py-3 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Başvur
                  <ArrowIcon size={14} />
                </Link>

                <span className="absolute bottom-4 right-5 text-[56px] font-bold text-slate-100 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
