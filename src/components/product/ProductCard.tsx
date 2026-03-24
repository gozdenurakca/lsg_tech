import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ICONS } from "@/lib/icons";

export type ProductCardData = {
  slug: string;
  name: string;
  desc: string;
  badge?: string;
  icon?: keyof typeof ICONS;
  iconColor?: string;
  iconBg?: string;
  price?: {
    amount: number;
    period?: string;
    currency?: string;
  };
  href?: string;
  buttonLabel?: string;
  featured?: boolean;
};

type Props = {
  product: ProductCardData;
};

const ArrowIcon = ICONS.arrowRight;

export default function ProductCard({ product: p }: Props) {
  const Icon = p.icon ? ICONS[p.icon] : null;
  const href = p.href ?? `/product/${p.slug}`;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg ${
        p.featured
          ? "border-blue-200 shadow-md ring-1 ring-blue-100 bg-blue-50/30"
          : "border-slate-200 bg-white"
      }`}
    >
      {p.badge && (
        <span className="absolute top-4 right-4 text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-900 text-white">
          {p.badge}
        </span>
      )}

      {Icon && (
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
            p.iconBg ?? "bg-blue-50"
          }`}
        >
          <Icon size={20} className={p.iconColor ?? "text-blue-600"} />
        </div>
      )}

      <h3 className="font-bold text-[16px] text-slate-900 mb-2">{p.name}</h3>
      <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
        {p.desc}
      </p>

      {p.price && (
        <div className="flex items-baseline gap-1 mb-5">
          <span className="text-[11px] text-slate-400">
            {p.price.currency ?? "₺"}
          </span>
          <span className="text-[26px] font-extrabold text-slate-900">
            {p.price.amount}
          </span>
          {p.price.period && (
            <span className="text-[12px] text-slate-400">{p.price.period}</span>
          )}
        </div>
      )}

      <Link
        href={href}
        className={`mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold transition ${
          p.featured
            ? "text-blue-900 hover:text-blue-700"
            : "text-blue-600 hover:text-blue-800"
        }`}
      >
        {p.buttonLabel ?? "Detay"} <ArrowIcon size={13} />
      </Link>
    </div>
  );
}
