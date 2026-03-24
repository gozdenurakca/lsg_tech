"use client";

import { useState } from "react";
import Image from "next/image";

export type HowStep = {
  title: string;
  desc: string;
  imageSrc?: string;
};

export type ExtraStep = {
  num: string;
  title: string;
  desc: string;
};

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  steps: HowStep[];
  accentColor?: "blue" | "emerald";
  visual?: "images" | "number";
  visualBg?: string;
  extraSteps?: ExtraStep[];
};

const ACCENT = {
  blue: {
    active: "border-blue-300",
    num: "text-blue-600",
    circle: "bg-blue-700",
  },
  emerald: {
    active: "border-emerald-300",
    num: "text-emerald-600",
    circle: "bg-emerald-700",
  },
};

export default function HowItWorks({
  id,
  title,
  subtitle,
  steps,
  accentColor = "blue",
  visual = "images",
  visualBg = "from-[#052e16] via-[#065f46] to-[#0f172a]",
  extraSteps,
}: Props) {
  const [active, setActive] = useState(0);
  const a = ACCENT[accentColor];
  const hasImages = visual === "images" && steps.some((s) => s.imageSrc);

  return (
    <section id={id} className="py-24 bg-[#f8fafc] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 max-w-xl mx-auto">{subtitle}</p>
          )}
        </div>

        {hasImages && (
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl mb-12">
            {steps.map((step, i) =>
              step.imageSrc ? (
                <Image
                  key={step.imageSrc}
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : null,
            )}
          </div>
        )}

        {visual === "number" && (
          <div
            className={`relative w-full h-[380px] rounded-3xl overflow-hidden shadow-xl mb-12 bg-gradient-to-br ${visualBg}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[80px] font-extrabold text-white/10 select-none leading-none">
                  {String(active + 1).padStart(2, "0")}
                </div>
                <div className="text-[22px] font-bold text-white mt-2">
                  {steps[active].title}
                </div>
                <div className="text-[14px] text-white/40 mt-2 max-w-xs mx-auto">
                  {steps[active].desc}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`p-6 rounded-2xl border cursor-pointer transition ${
                active === i
                  ? `bg-white ${a.active} shadow-lg`
                  : "bg-white border-slate-200"
              }`}
            >
              {visual === "number" && (
                <div
                  className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${
                    active === i ? a.num : "text-slate-400"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
              <h3 className="font-bold text-[18px] text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {extraSteps && extraSteps.length > 0 && (
          <div className="mt-20 grid md:grid-cols-4 gap-6">
            {extraSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < extraSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-5 left-full h-px bg-slate-200 z-0"
                    style={{ width: "calc(100% - 2rem)" }}
                  />
                )}
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full ${a.circle} text-white text-[13px] font-extrabold flex items-center justify-center mb-4`}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-bold text-slate-900 text-[15px] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
