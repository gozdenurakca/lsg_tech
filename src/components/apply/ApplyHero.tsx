"use client";

import { ICONS } from "@/lib/icons";

const trustItems = [
  { icon: "activity", text: "%40'a kadar kâr marjı" },
  { icon: "shield", text: "99.9% SLA garantisi" },
  { icon: "users", text: "Dedicated partner manager" },
];

const steps = ["Başvuru", "Değerlendirme", "Sözleşme", "Onboarding"];

export default function ApplyHero() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <section className="relative pt-24 pb-20 px-6 text-center">
        <p className="uppercase tracking-widest text-xs text-blue-400 mb-6">
          LSG Partner Network
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          <span className="block">Enterprise Bayilik</span>

          <span className="block bg-gradient-to-r from-blue-200 via-sky-400 to-white bg-clip-text text-transparent">
            Başvurusu
          </span>
        </h1>

        <p className="text-blue-200 mt-6 max-w-xl mx-auto text-base leading-relaxed">
          SSL ve siber güvenlik ürünlerimizi kendi markanızla sunarak
          sürdürülebilir ve ölçeklenebilir bir gelir modeli oluşturun.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          {trustItems.map((item, i) => {
            const Icon = ICONS[item.icon] || ICONS.shield;

            return (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-blue-200 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                <Icon size={14} className="text-blue-400" />
                {item.text}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-3 mt-10 text-xs text-blue-300">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span>{s}</span>
              {i < steps.length - 1 && <span className="opacity-40">→</span>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
