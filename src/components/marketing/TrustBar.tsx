"use client";

import Image from "next/image";

export type TrustStat = {
  value: string;
  label: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
  stats?: TrustStat[];
};
type Item = { icon: string; text: string };

export default function TrustBar({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "Trust image",
  visual,
  stats = [],
}: Props) {
  return (
    <section id={id} className="py-28 bg-[#f8fafc] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE or VISUAL */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
          {visual ? (
            visual
          ) : imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent" />
            </>
          ) : null}
        </div>

        {/* CONTENT */}
        <div>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-bold mb-4">
              {eyebrow}
            </p>
          )}

          <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-slate-600 leading-relaxed mb-10 max-w-lg">
            {description}
          </p>

          {/* STATS */}
          {stats.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-[34px] font-extrabold text-blue-900 mb-1">
                    {s.value}
                  </div>
                  <div className="text-[13px] text-slate-500 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 👇 fallback UI (çok önemli)
            <div className="text-sm text-slate-400">
              Henüz istatistik bulunmuyor.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
