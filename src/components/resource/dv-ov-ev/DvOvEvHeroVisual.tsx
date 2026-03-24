"use client";

import { ICONS } from "@/lib/icons";

const ITEMS = [
  {
    label: "DV",
    desc: "Hızlı doğrulama",
    time: "Dakikalar",
    icon: "shieldCheck",
    color: "emerald",
  },
  {
    label: "OV",
    desc: "Kurumsal doğrulama",
    time: "1–3 gün",
    icon: "shieldHalf",
    color: "sky",
  },
  {
    label: "EV",
    desc: "En yüksek güven",
    time: "3–7 gün",
    icon: "building",
    color: "amber",
  },
] as const;

const COLOR = {
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
  sky: "bg-sky-50 border-sky-200 text-sky-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
};

export default function DvOvEvHeroVisual() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
          SSL Karşılaştırma
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          Doğru doğrulama seviyesini seçin
        </h3>
      </div>

      <div className="space-y-3">
        {ITEMS.map((item) => {
          const Icon = ICONS[item.icon];

          return (
            <div
              key={item.label}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 ${COLOR[item.color]}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4 opacity-80" />
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs opacity-70">{item.desc}</p>
                </div>
              </div>

              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-700">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
