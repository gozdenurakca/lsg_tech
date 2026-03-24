"use client";

import Link from "next/link";

type Highlight = {
  value: string;
  label: string;
};

type CTAButton = {
  label: string;
  href: string;
};

type Props = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;

  highlights?: Highlight[];

  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;

  note?: string;
};

export default function CTA({
  badge,
  title,
  highlight,
  description,
  highlights,
  primaryCTA,
  secondaryCTA,
  note,
}: Props) {
  return (
    <section className="relative py-32 bg-[#F7F9FF] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle,#CBD5E1 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {badge && (
          <p className="text-xs tracking-[0.18em] uppercase text-indigo-500 mb-6 flex items-center justify-center gap-3">
            <span className="w-6 h-[1px] bg-indigo-500/50" />
            {badge}
            <span className="w-6 h-[1px] bg-indigo-500/50" />
          </p>
        )}

        <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold text-slate-900 leading-tight mb-6">
          {title} <br />
          {highlight && <span className="text-indigo-500">{highlight}</span>}
        </h2>

        {description && (
          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-14">
            {description}
          </p>
        )}

        {highlights && (
          <div className="grid grid-cols-3 gap-5 max-w-lg mx-auto mb-14">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white border border-indigo-100 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="text-2xl font-bold text-indigo-500 mb-1">
                  {h.value}
                </div>

                <div className="text-[11px] uppercase tracking-wider text-slate-400">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-10 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-400/40 transition"
          >
            {primaryCTA.label}
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="border border-indigo-300 text-indigo-500 px-10 py-4 rounded-xl font-medium hover:bg-indigo-50 transition"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>

        {note && <p className="text-xs text-slate-400 mt-6">{note}</p>}
      </div>
    </section>
  );
}
