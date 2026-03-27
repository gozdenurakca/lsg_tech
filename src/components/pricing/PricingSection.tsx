import type { ReactNode } from "react";

type Props<T> = {
  id?: string;
  eyebrow?: string;
  eyebrowColor?: string;
  title: string;
  subtitle?: string;
  products: T[];
  bgColor?: string;
  layout?: "slider" | "list";
  renderRow: (product: T, idx: number) => ReactNode;
};

export default function PricingSection<T>({
  id,
  eyebrow,
  eyebrowColor = "text-blue-500/60",
  title,
  subtitle,
  products,
  bgColor = "bg-[#f8fafc]",
  renderRow,
  layout = "slider",
}: Props<T>) {
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

        {/* 🔥 SLIDER MODE */}
        {layout === "slider" ? (
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-6">
              {products.map((p, idx) => renderRow(p, idx))}
            </div>
          </div>
        ) : (
          /* 🔥 LIST MODE (DV / OV / EV) */
          <div className="flex flex-col gap-6">
            {products.map((p, idx) => renderRow(p, idx))}
          </div>
        )}
      </div>
    </section>
  );
}
