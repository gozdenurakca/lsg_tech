"use client";

import {
  Shield,
  Server,
  Globe,
  Mail,
  CreditCard,
  Settings,
  MessageCircle,
} from "lucide-react";

type Props = {
  form: {
    category: string;
    priority: string;
  };
  setForm: (data: any) => void;
  errors: {
    category?: string;
  };
  setErrors: (data: any) => void;
  next: () => void;
};

const CATEGORIES = [
  { value: "ssl", label: "SSL Sertifikası", icon: Shield },
  { value: "hosting", label: "Hosting", icon: Server },
  { value: "domain", label: "Alan Adı", icon: Globe },
  { value: "email", label: "E-posta", icon: Mail },
  { value: "web-security", label: "Web Güvenliği", icon: Shield },
  { value: "billing", label: "Fatura & Ödeme", icon: CreditCard },
  { value: "dns", label: "DNS Ayarları", icon: Settings },
  { value: "other", label: "Diğer", icon: MessageCircle },
];

const PRIORITIES = [
  {
    value: "low",
    label: "Düşük",
    desc: "Genel sorular",
    color: "border-gray-200 bg-white",
    activeColor: "border-blue-400 bg-blue-50",
    dot: "bg-gray-400",
    activeDot: "bg-blue-500",
    eta: "~24 saat",
  },
  {
    value: "medium",
    label: "Orta",
    desc: "Servis etkiliyor",
    color: "border-gray-200 bg-white",
    activeColor: "border-orange-400 bg-orange-50",
    dot: "bg-gray-400",
    activeDot: "bg-orange-400",
    eta: "~8 saat",
  },
  {
    value: "high",
    label: "Yüksek",
    desc: "Servis çalışmıyor",
    color: "border-gray-200 bg-white",
    activeColor: "border-red-400 bg-red-50",
    dot: "bg-gray-400",
    activeDot: "bg-red-500",
    eta: "~2 saat",
  },
];

export default function CategoryStep({
  form,
  setForm,
  errors,
  setErrors,
  next,
}: Props) {
  const handleNext = () => {
    if (!form.category) {
      setErrors({ category: "Lütfen bir kategori seçin." });
      return;
    }

    setErrors({});
    next();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-7">
      {/* KATEGORİ */}
      <div>
        <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-3">
          Sorun Kategorisi <span className="text-red-400">*</span>
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setForm((p: any) => ({ ...p, category: cat.value }));
                  setErrors((p: any) => ({ ...p, category: undefined }));
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all
                  ${
                    form.category === cat.value
                      ? "border-[#2ecc8f] bg-emerald-50 shadow-sm"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
              >
                <Icon size={26} strokeWidth={1.8} />

                <span className="text-xs font-semibold text-[#1b2a4a] leading-tight">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {errors.category && (
          <p className="mt-2 text-xs text-red-500">{errors.category}</p>
        )}
      </div>

      {/* ÖNCELİK */}
      <div>
        <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-3">
          Öncelik Seviyesi
        </label>

        <div className="grid grid-cols-3 gap-3">
          {PRIORITIES.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() =>
                setForm((prev: any) => ({ ...prev, priority: p.value }))
              }
              className={`flex flex-col items-start gap-1.5 p-4 rounded-xl border-2 text-left transition-all
                ${
                  form.priority === p.value
                    ? p.activeColor
                    : p.color + " hover:border-gray-300"
                }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    form.priority === p.value ? p.activeDot : p.dot
                  }`}
                />

                <span className="font-bold text-sm text-[#1b2a4a]">
                  {p.label}
                </span>
              </div>

              <span className="text-xs text-gray-500">{p.desc}</span>

              <span className="text-xs font-semibold text-gray-400">
                {p.eta}
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full py-3.5 bg-[#1b2a4a] hover:bg-[#243660] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
      >
        Devam Et →
      </button>
    </div>
  );
}
