"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type FeatureItem = {
  type: string;
  name: string;
  desc: string;
  icon: string;
  color: string;
  href: string;
};

type Props = {
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  products: FeatureItem[];
};

export default function FeatureGrid({
  title,
  subtitle,
  ctaHref,
  ctaLabel,
  products,
}: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-500 mt-3 max-w-2xl">{subtitle}</p>
            )}
          </div>

          {ctaHref && ctaLabel && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-700 transition"
            >
              {ctaLabel}
              <ICONS.arrowRight size={14} />
            </Link>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {products.map((item) => {
            const Icon = ICONS[item.icon] ?? ICONS.shield;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border mb-4 ${item.color}`}
                >
                  <Icon size={18} />
                </div>

                <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-bold mb-2">
                  {item.type}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition">
                  İncele
                  <ICONS.arrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
