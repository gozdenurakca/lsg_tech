"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

export type PricingProduct = {
  name: string;
  brand?: string;
  brandColor?: string;
  price: {
    oneYear: number;
    twoYear?: number;
    threeYear?: number;
  };
  tag?: string | null;
  featured?: boolean;
  description: string;
  features: string[];
  warranty?: string;
  issuance?: string;
  href: string;
  buttonLabel?: string;
};

type Props = {
  product: PricingProduct;
};

const StarIcon = ICONS.star;
const CheckIcon = ICONS.checkCircle;
const ArrowIcon = ICONS.arrowRight;

export default function PricingRow({ product: p }: Props) {
  return (
    <div
      className={`snap-start min-w-[320px] max-w-[320px] relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1
        ${p.brandColor || "bg-white"}
        ${
          p.featured
            ? "shadow-[0_8px_48px_rgba(11,61,145,0.15)] ring-2 ring-blue-600/20"
            : "shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.11)]"
        }`}
    >
      <div
        className={`h-[3px] w-full ${
          p.featured
            ? "bg-gradient-to-r from-blue-600 to-indigo-500"
            : "bg-slate-100"
        }`}
      />

      {p.tag && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-900 text-white shadow whitespace-nowrap">
            <StarIcon size={9} className="fill-white" /> {p.tag}
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-7 ${p.tag ? "pt-12" : ""}`}>
        {p.brand && (
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-500/60 mb-1">
            {p.brand}
          </p>
        )}

        <h3 className="text-[18px] font-bold text-slate-900 mb-2">{p.name}</h3>

        <p className="text-[13px] text-slate-400 leading-relaxed mb-5">
          {p.description}
        </p>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-[32px] font-extrabold text-slate-900">
            ₺{p.price?.oneYear}
          </span>
          <span className="text-[13px] text-slate-400">/yıl</span>
        </div>

        <ul className="space-y-2 mb-6">
          {(p.features || []).map((f: string) => (
            <li
              key={f}
              className="flex items-center gap-2.5 text-[13px] text-slate-600"
            >
              <span className="w-4 h-4 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
                <CheckIcon size={9} className="text-blue-600" strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="h-px bg-slate-100 mb-5" />

        <Link
          href={p.href}
          className={`mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-[14px] font-bold transition-all hover:-translate-y-0.5 ${
            p.featured
              ? "bg-blue-900 hover:bg-blue-800 text-white shadow-md shadow-blue-900/20"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          {p.buttonLabel ?? "Hemen Al"} <ArrowIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
