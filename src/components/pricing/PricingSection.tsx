"use client";

import PricingRow, { type PricingProduct } from "./PricingRow";

export type { PricingProduct };

type Props = {
  id?: string;
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  products: PricingProduct[];
  bgColor?: string;
};

export default function PricingSection({
  id,
  eyebrow,
  eyebrowColor = "text-blue-500/60",
  title,
  subtitle,
  products,
  bgColor = "bg-[#f8fafc]",
}: Props) {
  return (
    <section id={id} className={`py-24 ${bgColor} scroll-mt-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {eyebrow && (
            <p
              className={`text-[11px] uppercase tracking-[0.2em] ${eyebrowColor} font-bold mb-3`}
            >
              {eyebrow}
            </p>
          )}
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[16px] text-slate-500 max-w-lg mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {products.map((p) => (
              <PricingRow key={p.name} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
