"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Price {
  oneYear: number;
  twoYear?: number;
  threeYear?: number;
}

interface Props {
  slug: string;
  price: Price;
}

const PERIODS = [
  { label: "1 Yıl", value: 1, key: "oneYear" as keyof Price },
  { label: "2 Yıl", value: 2, key: "twoYear" as keyof Price },
  { label: "3 Yıl", value: 3, key: "threeYear" as keyof Price },
];

export default function ProductPurchaseWidget({ slug, price }: Props) {
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const router = useRouter();

  const availablePeriods = PERIODS.filter((p) => price[p.key]);
  const currentPrice = price[PERIODS.find((p) => p.value === selectedPeriod)!.key] ?? price.oneYear;
  const totalPrice = currentPrice * selectedPeriod;

  function handleAddToCart() {
    const amount = Math.round(totalPrice * 100); // PayTR kuruş cinsinden
    router.push(
      `/checkout?slug=${slug}&period=${selectedPeriod}&amount=${amount}`
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-10 sticky top-28">
      <h3 className="text-xl font-bold mb-6">Ürünü Yapılandır</h3>

      {/* Süre Seçimi */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-600 mb-3">
          Sertifika Süresi
        </label>
        <div className="flex gap-2">
          {availablePeriods.map((p) => (
            <button
              key={p.value}
              onClick={() => setSelectedPeriod(p.value)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition ${
                selectedPeriod === p.value
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Fiyat */}
      <div className="mb-2">
        <span className="text-4xl font-bold text-blue-900">
          ₺{currentPrice.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
        </span>
        <span className="text-slate-400 text-sm ml-1">/ yıl</span>
      </div>

      {selectedPeriod > 1 && (
        <div className="text-sm text-slate-500 mb-8">
          {selectedPeriod} yıl için bugün{" "}
          <span className="font-semibold text-slate-700">
            ₺{totalPrice.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
          </span>{" "}
          ödeyin.
        </div>
      )}

      {selectedPeriod === 1 && <div className="mb-8" />}

      {/* Sepete Ekle */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 active:scale-[0.98] transition shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Sepete Ekle
      </button>

      <p className="text-xs text-slate-400 mt-4 text-center">
        30 gün para iade garantisi
      </p>
    </div>
  );
}
