// Alan Adı Yenileme sayfası
// — fiyat hesaplayan, görsel süre seçici.

// Backend bağlandığında handleSubmit içindeki TODO satırı değişir.
"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

type Step = "form" | "success";

const PERIODS = [
  { value: 1, label: "1 Yıl", priceMultiplier: 1, badge: null },
  { value: 2, label: "2 Yıl", priceMultiplier: 1.9, badge: "%5 İndirim" },
  { value: 3, label: "3 Yıl", priceMultiplier: 2.7, badge: "%10 İndirim" },
  { value: 5, label: "5 Yıl", priceMultiplier: 4.2, badge: "%16 İndirim" },
];

const BASE_PRICE = 149;

export default function DomainRenewForm() {
  const [step, setStep] = useState<Step>("form");
  const [domain, setDomain] = useState("");
  const [period, setPeriod] = useState(1);
  const [loading, setLoading] = useState(false);

  const selectedPeriod = PERIODS.find((p) => p.value === period)!;
  const totalPrice = Math.round(BASE_PRICE * selectedPeriod.priceMultiplier);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep("success");
  };

  const GlobeIcon = ICONS.globe;
  const TagIcon = ICONS.tag;
  const CheckIcon = ICONS.check;
  const RefreshIcon = ICONS.refresh;
  const ArrowIcon = ICONS.arrowRight;

  if (step === "success") {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-emerald-100">
          <CheckIcon size={36} className="text-emerald-600" />
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Yenileme Talebi Alındı!
        </h2>

        <p className="text-slate-500 mb-2">
          <span className="font-semibold text-slate-700">{domain}</span>{" "}
          <span className="text-blue-600 font-semibold">{period} yıl</span> için
          yenileniyor.
        </p>

        <button
          onClick={() => {
            setStep("form");
            setDomain("");
            setPeriod(1);
          }}
          className="text-sm font-semibold text-blue-600 hover:underline mt-4"
        >
          Tekrar dene →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <h3 className="text-lg font-extrabold mb-6">
          Yenileme Bilgilerini Gir
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* DOMAIN */}
          <div>
            <label className="text-sm font-semibold mb-1 block">Alan Adı</label>

            <div className="relative">
              <GlobeIcon
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="orneksite.com.tr"
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm"
              />
            </div>
          </div>

          {/* PERIOD */}
          <div>
            <label className="text-sm font-semibold mb-3 block">Süre</label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {PERIODS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPeriod(p.value)}
                  className={`py-3 rounded-xl border text-sm font-bold ${
                    period === p.value
                      ? "border-blue-500 text-blue-700"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {p.badge && (
                    <span className="text-xs text-orange-500">{p.badge}</span>
                  )}
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <div className="flex justify-between bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-sm">
              <TagIcon size={14} />
              {period} yıl
            </div>

            <div className="font-bold">₺{totalPrice}</div>
          </div>

          {/* SUBMIT */}
          <button
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-white py-4 rounded-xl bg-blue-600"
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <>
                <RefreshIcon size={15} />
                Yenile
                <ArrowIcon size={15} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
