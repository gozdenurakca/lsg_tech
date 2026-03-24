"use client";

import Icon from "@/components/ui/Icon";
import type { DomainResult } from "@/lib/domain/types";

interface Props {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
}

export default function ResultRow({
  base,
  result,
  inCart,
  onToggleCart,
}: Props) {
  const { ext, available, loading, price, period = "yıl" } = result;

  const oldPrice = available ? Math.round(price * 1.8) : null;

  const formatPrice = (val: number) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(val);

  return (
    <div
      className={`flex items-center px-5 py-3 border-b transition
      ${!available ? "opacity-50 bg-slate-50" : "hover:bg-slate-50/60"}`}
    >
      {/* FAVORITE */}
      <button className="text-slate-300 hover:text-red-400 transition-colors shrink-0">
        <Icon name="heart" size={14} />
      </button>

      {/* DOMAIN */}
      <div className="flex-1 min-w-0 ml-3">
        {loading ? (
          <div className="h-5 w-40 bg-slate-100 animate-pulse rounded" />
        ) : (
          <span className="font-semibold text-slate-800 truncate">
            {base}
            <span className="text-blue-600 ml-0.5">{ext}</span>
          </span>
        )}
      </div>

      {/* RIGHT */}
      {available ? (
        <div className="flex items-center gap-3 shrink-0">
          {/* PRICE */}
          <div className="text-right">
            {oldPrice && (
              <span className="line-through text-xs text-slate-300 block">
                {formatPrice(oldPrice)}
              </span>
            )}

            <p className="font-bold text-slate-900">
              {formatPrice(price)}
              <span className="text-xs text-slate-400 ml-1">/{period}</span>
            </p>
          </div>

          {/* CART */}
          <button
            onClick={onToggleCart}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all
            ${
              inCart
                ? "bg-emerald-500 border-emerald-500 text-white"
                : "bg-white border-slate-200 text-slate-500 hover:border-slate-900 hover:text-slate-900"
            }`}
          >
            {inCart ? (
              <Icon name="check" size={14} />
            ) : (
              <Icon name="cart" size={14} />
            )}
          </button>
        </div>
      ) : (
        <span className="text-xs text-slate-400 font-medium ml-4">Alındı</span>
      )}
    </div>
  );
}

/* (single row)

import { Heart, ShoppingCart, Check } from "lucide-react";
import type { DomainResult } from "@/lib/domain/types";

export default function ResultRow({
  base,
  result,
  inCart,
  onToggleCart,
}: {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;
}) {
  const { ext, available, loading, price, period } = result;

  const oldPrice = available ? Math.round(price * 1.8) : null;

  return (
    <div
      className={`flex items-center px-5 py-3 border-b ${!available ? "opacity-40" : ""}`}
    >
      <button className="text-slate-300 hover:text-red-400">
        <Heart size={14} />
      </button>

      <div className="flex-1">
        {loading ? (
          <div className="h-5 w-40 bg-slate-100 animate-pulse rounded" />
        ) : (
          <span className="font-semibold">
            {base}
            <span className="text-blue-600">{ext}</span>
          </span>
        )}
      </div>

      {available ? (
        <div className="flex items-center gap-3">
          <div>
            {oldPrice && (
              <span className="line-through text-xs text-slate-300">
                ₺{oldPrice}
              </span>
            )}
            <p className="font-bold">₺{price}</p>
          </div>

          <button onClick={onToggleCart}>
            {inCart ? <Check /> : <ShoppingCart />}
          </button>
        </div>
      ) : (
        <span className="text-xs text-slate-400">Alındı</span>
      )}
    </div>
  );
}
*/
