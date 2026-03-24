"use client";

// ─── DomainTransferForm
// Backend bağlandığında handleSubmit içindeki TODO satırı değişir.
"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

type IconKey = keyof typeof ICONS;
type StepType = "form" | "success";

type StepItem = {
  icon: IconKey;
  step: string;
  title: string;
  desc: string;
};

const HOW_IT_WORKS: StepItem[] = [
  {
    icon: "globe",
    step: "01",
    title: "Domain'i Girin",
    desc: "Taşımak istediğiniz alan adını forma girin.",
  },
  {
    icon: "key",
    step: "02",
    title: "EPP Kodunu Ekleyin",
    desc: "Auth kodunu alın.",
  },
  {
    icon: "shieldCheck",
    step: "03",
    title: "Transfer Başlar",
    desc: "Güvenli transfer başlatılır.",
  },
  {
    icon: "check",
    step: "04",
    title: "Tamamlandı",
    desc: "5–7 gün içinde taşınır.",
  },
];

const FEATURES = [
  { icon: "lock", text: "SSL dahil" },
  { icon: "zap", text: "Hızlı transfer" },
  { icon: "headphones", text: "7/24 destek" },
  { icon: "shieldCheck", text: "Kesintisiz erişim" },
];

export default function DomainTransferForm() {
  const [step, setStep] = useState<StepType>("form");
  const [domain, setDomain] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain || !authCode) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep("success");
  };

  if (step === "success") {
    const Icon = ICONS.check;

    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <Icon size={40} className="text-green-500 mb-4" />
          <h2 className="text-2xl font-bold">Transfer Başlatıldı</h2>
          <p className="text-gray-500 mt-2">{domain}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Domain Transfer</h1>

        <div className="flex justify-center gap-3 flex-wrap">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <div key={f.text} className="flex items-center gap-2 text-sm">
                <Icon size={14} />
                {f.text}
              </div>
            );
          })}
        </div>
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-6 mb-12">
        {HOW_IT_WORKS.map((s) => {
          const Icon = ICONS[s.icon];

          return (
            <div key={s.title} className="text-center">
              <Icon size={20} className="mx-auto mb-2" />
              <p className="text-xs text-gray-400">{s.step}</p>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-xs text-gray-500">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow"
      >
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="domain.com"
          className="w-full border p-3 rounded mb-3"
        />

        <input
          value={authCode}
          onChange={(e) => setAuthCode(e.target.value)}
          placeholder="EPP code"
          className="w-full border p-3 rounded mb-3"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          {loading ? "Yükleniyor..." : "Transfer Başlat"}
        </button>
      </form>
    </div>
  );
}
