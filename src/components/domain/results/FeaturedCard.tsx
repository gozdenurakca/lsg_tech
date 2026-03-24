"use client";

import Icon from "@/components/ui/Icon";
import type { DomainResult } from "@/lib/domain/types";

interface Props {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
  badge?: string;
  badgeClass?: string;
  whyPoints?: string[];
}

export default function FeaturedCard({
  base,
  result,
  inCart,
  onToggleCart,
  badge,
  badgeClass,
  whyPoints = [],
}: Props) {
  const { ext, available, loading, price } = result;

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(val);

  return (
    <div className="bg-white p-6 rounded-2xl border flex flex-col gap-4">
      {/* BADGE */}
      {badge && (
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full inline-block w-fit ${badgeClass}`}
        >
          {badge}
        </span>
      )}

      {/* DOMAIN */}
      <h2 className="text-3xl font-black text-slate-900">
        {base}
        <span className="text-blue-600">{ext}</span>
      </h2>

      {/* PRICE */}
      {loading ? (
        <div className="h-6 w-24 bg-slate-100 animate-pulse rounded" />
      ) : available ? (
        <p className="text-xl font-bold text-slate-900">{formatPrice(price)}</p>
      ) : (
        <p className="text-sm text-slate-400">Bu alan adı alınmış</p>
      )}

      {/* CTA */}
      <button
        onClick={onToggleCart}
        disabled={!available}
        className={`mt-2 px-4 py-2 rounded-xl text-sm font-bold transition-all
        ${
          !available
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : inCart
              ? "bg-emerald-500 text-white"
              : "bg-slate-900 text-white hover:bg-slate-700"
        }`}
      >
        {inCart ? "Sepette" : "Sepete Ekle"}
      </button>

      {/* WHY POINTS */}
      {whyPoints.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {whyPoints.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <Icon name="check" size={14} className="text-emerald-500" />
              {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* (hero result)
import { Check } from "lucide-react";
import type { DomainResult } from "@/lib/domain/types";
export default function FeaturedCard({
  base,
  result,
  inCart,
  onToggleCart,
  badge,
  badgeClass,
  whyPoints,
}: any) {
  const { ext, available, loading, price } = result;

  return (
    <div className="bg-white p-6 rounded-2xl border">
      <span className={badgeClass}>{badge}</span>

      <h2 className="text-3xl font-black">
        {base}
        <span className="text-blue-600">{ext}</span>
      </h2>

      {available && <p className="text-xl font-bold">₺{price}</p>}

      <button onClick={onToggleCart}>
        {inCart ? "Sepette" : "Sepete Ekle"}
      </button>

      {whyPoints && (
        <ul>
          {whyPoints.map((p: string) => (
            <li key={p}>
              <Check size={12} /> {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
*/
