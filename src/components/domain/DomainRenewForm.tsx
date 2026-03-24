"use client";

// Alan Adı Yenileme sayfası
// — fiyat hesaplayan, görsel süre seçici.

// Backend bağlandığında handleSubmit içindeki TODO satırı değişir.

import { useState } from "react";
import { RefreshCw, ArrowRight, CheckCircle2, Globe, Tag } from "lucide-react";

const PERIODS = [
  { value: 1, label: "1 Yıl", priceMultiplier: 1, badge: null },
  { value: 2, label: "2 Yıl", priceMultiplier: 1.9, badge: "%5 İndirim" },
  { value: 3, label: "3 Yıl", priceMultiplier: 2.7, badge: "%10 İndirim" },
  { value: 5, label: "5 Yıl", priceMultiplier: 4.2, badge: "%16 İndirim" },
];

const BASE_PRICE = 149;
// .com.tr baz fiyatı — backend gelince API'dan alınır

type Step = "form" | "success";

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
    // TODO: await fetch("/api/domain/renew", { method: "POST", body: JSON.stringify({ domain, period }) })
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setStep("success");
  };

  if (step === "success") {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "linear-gradient(135deg, #d1fae5, #a7f3d0)" }}
        >
          <CheckCircle2 size={36} className="text-emerald-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
          Yenileme Talebi Alındı!
        </h2>
        <p className="text-slate-500 mb-2">
          <span className="font-semibold text-slate-700">{domain}</span> alan
          adınız{" "}
          <span className="font-semibold text-blue-600">{period} yıl</span>{" "}
          süreyle yenilenmek üzere işleme alındı.
        </p>
        <p className="text-sm text-slate-400 mb-8">
          E-posta adresinize onay gönderilecektir.
        </p>
        <button
          onClick={() => {
            setStep("form");
            setDomain("");
            setPeriod(1);
          }}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Başka bir domain yenile →
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <h3 className="text-lg font-extrabold text-slate-900 mb-6">
          Yenileme Bilgilerini Gir
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Yenilenecek Alan Adı
            </label>
            <div className="relative">
              <Globe
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="orneksite.com.tr"
                required
                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-slate-800 font-medium transition text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Yenileme Süresi
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {PERIODS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPeriod(p.value)}
                  className={`relative py-3.5 rounded-xl border font-bold text-sm transition-all
                    ${
                      period === p.value
                        ? "border-blue-500 text-blue-700 shadow-md shadow-blue-100"
                        : "bg-white border-slate-200 text-slate-600 hover:border-blue-400/60"
                    }`}
                  style={
                    period === p.value
                      ? {
                          background:
                            "linear-gradient(135deg, #eff6ff, #dbeafe)",
                        }
                      : {}
                  }
                >
                  {p.badge && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {p.badge}
                    </span>
                  )}
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-5 py-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Tag size={14} />
              <span>{period} yıllık yenileme</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-extrabold text-slate-900">
                ₺{totalPrice}
              </span>
              <span className="text-xs text-slate-400 ml-1">KDV dahil</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.99] disabled:opacity-60 shadow-lg shadow-blue-600/20"
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)",
            }}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {" "}
                <RefreshCw size={15} /> Yenile — {period} Yıl{" "}
                <ArrowRight size={15} />{" "}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
