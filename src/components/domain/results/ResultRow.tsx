// (single row)

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
