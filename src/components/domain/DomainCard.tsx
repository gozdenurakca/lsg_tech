/*
  Domain result item:
  - domain + extension
  - availability state
  - price + old price
  - add/remove cart
*/
"use client";

import Icon from "@/components/ui/Icon";
import type { DomainResult } from "@/lib/domain/types";

interface Props {
  base: string;
  result: DomainResult;
  inCart: boolean;
  onToggleCart: () => void;

  // optional (future proof)
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function DomainCard({
  base,
  result,
  inCart,
  onToggleCart,
  isFavorite = false,
  onToggleFavorite,
}: Props) {
  const {
    ext,
    price,
    oldPrice,
    available,
    loading,
    period = "yıl",
    textColor,
  } = result;

  const fullDomain = `${base}${ext}`;

  return (
    <div
      className={`group flex items-center gap-4 px-4 py-3.5 border-b border-slate-100 last:border-0 transition
      ${
        !loading && available === false
          ? "bg-slate-50 text-slate-400"
          : "hover:bg-slate-50/60"
      }`}
    >
      {/* FAVORITE */}
      <button
        onClick={onToggleFavorite}
        className={`shrink-0 transition-colors ${
          isFavorite ? "text-red-500" : "text-slate-300 hover:text-red-400"
        }`}
      >
        <Icon name="heart" size={16} />
      </button>

      {/* DOMAIN */}
      <div className="flex-1 min-w-0 flex items-center gap-3">
        {loading ? (
          <div className="h-5 w-40 bg-slate-100 rounded animate-pulse" />
        ) : (
          <>
            <span className="font-bold text-base text-slate-800 truncate">
              {base}
              <span className={`ml-0.5 ${textColor}`}>{ext}</span>
            </span>

            {/* STATUS */}
            {available === false && (
              <span className="shrink-0 text-[10px] font-black uppercase tracking-wider text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">
                Alındı
              </span>
            )}
          </>
        )}
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 shrink-0">
        {loading ? (
          <>
            <div className="h-5 w-20 bg-slate-100 rounded animate-pulse" />
            <div className="h-9 w-9 bg-slate-100 rounded-lg animate-pulse" />
          </>
        ) : available ? (
          <>
            {/* PRICE */}
            <div className="text-right">
              {oldPrice && (
                <span className="text-slate-300 text-xs line-through block">
                  ₺{oldPrice}
                </span>
              )}

              <div className="flex items-baseline gap-1">
                <span className="font-bold text-slate-900">₺{price}</span>
                <span className="text-slate-400 text-xs">/{period}</span>
              </div>
            </div>

            {/* CART */}
            <button
              onClick={onToggleCart}
              title={inCart ? "Sepetten çıkar" : "Sepete ekle"}
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
          </>
        ) : (
          <button
            disabled
            className="w-9 h-9 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center cursor-not-allowed"
          >
            <Icon name="cart" size={14} className="text-slate-200" />
          </button>
        )}
      </div>
    </div>
  );
}
