/*
Ekranın altında sabit duran sepet / ödeme çubuğu.
Sepette en az 1 domain varsa görünür.
sticky checkout = sabit duran sepet / ödeme çubuğu

kritik conversion tool
*/

"use client";

import { ShoppingCart } from "lucide-react";

interface Props {
  count: number;
  totalPrice: number;
  onCheckout: () => void;
}

export default function DomainCartBar({
  count,
  totalPrice,
  onCheckout,
}: Props) {
  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f172a] border-t border-slate-700 px-6 py-4 shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-white">
          <div className="relative">
            <ShoppingCart size={22} className="text-slate-300" />
            <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {count}
            </span>
          </div>
          <div>
            <p className="text-xs text-slate-400">Seçilen alan adları</p>
            <p className="font-bold text-sm">
              {count} domain ·{" "}
              <span className="text-blue-400">₺{totalPrice}</span>
            </p>
          </div>
        </div>

        <button
          onClick={onCheckout}
          className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-blue-900/30"
        >
          Satın Al →
        </button>
      </div>
    </div>
  );
}
