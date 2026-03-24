"use client";

import { ICONS } from "@/lib/icons";

const trustItems = [
  { icon: "code", text: "API Sandbox Erişimi" },
  { icon: "layers", text: "Ortak Ürün Geliştirme" },
  { icon: "cpu", text: "Teknik Workshop Desteği" },
  { icon: "gitMerge", text: "Özel Entegrasyon Desteği" },
] as const;

const steps = ["Başvuru", "Teknik İnceleme", "Workshop", "Entegrasyon"];

export default function TechApplyHero() {
  return (
    <section className="relative pt-28 pb-24 px-6 text-center overflow-hidden bg-[#020A18]">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.18em] text-sky-400 mb-6 flex items-center justify-center gap-3">
          <span className="w-6 h-[1px] bg-sky-400/50" />
          LSG Technology Partner Network
          <span className="w-6 h-[1px] bg-sky-400/50" />
        </p>

        <h1 className="text-[clamp(36px,5vw,58px)] font-bold text-white leading-tight">
          Technology Partner
          <br />
          <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Başvurusu
          </span>
        </h1>

        <p className="text-sky-200/70 text-[15px] leading-relaxed mt-6 max-w-xl mx-auto">
          API entegrasyonu ve ortak ürün geliştirme süreçlerine dahil olun.
          Teknik ekibimiz sizinle birebir çalışarak en hızlı entegrasyonu
          sağlayacak.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {trustItems.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ICONS.code;

            return (
              <div
                key={i}
                className="flex items-center gap-2 text-xs font-medium text-sky-300 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-500/10"
              >
                <Icon size={14} />
                {item.text}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  i === 0
                    ? "bg-gradient-to-r from-sky-500 to-sky-400 text-white"
                    : "bg-white/10 text-sky-200"
                }`}
              >
                {i + 1}
              </div>

              <span
                className={`text-xs ${
                  i === 0 ? "text-sky-300" : "text-sky-200/40"
                }`}
              >
                {step}
              </span>

              {i < steps.length - 1 && (
                <span className="text-sky-200/20">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
