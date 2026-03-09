"use client";

import { useState } from "react";
import CategoryStep from "@/components/support/CategoryStep";
import DetailsStep from "@/components/support/DetailsStep";
import SummaryStep from "@/components/support/SummaryStep";
import SupportSidebar from "@/components/support/SupportSidebar";

type FormData = {
  category: string;
  priority: string;
  subject: string;
  message: string;
  name: string;
  email: string;
  orderNo: string;
};

const CATEGORIES = [
  { value: "ssl", label: "SSL Sertifikası" },
  { value: "hosting", label: "Hosting" },
  { value: "domain", label: "Alan Adı" },
  { value: "email", label: "E-posta" },
  { value: "web-security", label: "Web Güvenliği" },
  { value: "billing", label: "Fatura & Ödeme" },
  { value: "dns", label: "DNS Ayarları" },
  { value: "other", label: "Diğer" },
];

const PRIORITIES = [
  { value: "low", label: "Düşük", eta: "~24 saat" },
  { value: "medium", label: "Orta", eta: "~8 saat" },
  { value: "high", label: "Yüksek", eta: "~2 saat" },
];

export default function SupportTicketPage() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState<FormData>({
    category: "",
    priority: "medium",
    subject: "",
    message: "",
    name: "",
    email: "",
    orderNo: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    await fetch("/api/support/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    alert("Ticket oluşturuldu");

    setStep(0);
  };

  return (
    <div className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* subtle grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* glow lights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="absolute top-1/3 -left-32 w-[500px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {step === 0 && (
            <CategoryStep
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              next={() => setStep(1)}
            />
          )}

          {step === 1 && (
            <DetailsStep
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              next={() => setStep(2)}
              back={() => setStep(0)}
            />
          )}

          {step === 2 && (
            <SummaryStep
              form={form}
              categories={CATEGORIES}
              priorities={PRIORITIES}
              loading={loading}
              back={() => setStep(1)}
              submit={submit}
            />
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <SupportSidebar />
      </div>
    </div>
  );
}

/*
"use client";
import {
  Shield,
  Server,
  Globe,
  Mail,
  CreditCard,
  Settings,
  MessageCircle,
  Key,
} from "lucide-react";

type FormData = {
  category: string;
  priority: string;
  subject: string;
  message: string;
  name: string;
  email: string;
  orderNo: string;
};
type FormErrors = Partial<{
  category: string;
  subject: string;
  message: string;
  name: string;
  email: string;
}>;
import { useState } from "react";

const CATEGORIES = [
  { value: "", label: "Kategori seçin..." },

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

const STEPS = ["Kategori", "Detaylar", "Özet"];

export default function SupportTicketPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    category: "",
    priority: "medium",
    subject: "",
    message: "",
    name: "",
    email: "",
    orderNo: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p) => ({ ...p, [field]: e.target.value }));
      setErrors((p) => ({ ...p, [field]: undefined }));
    };

  const validateStep = (s: number) => {
    const e: FormErrors = {};
    if (s === 0) {
      if (!form.category) e.category = "Lütfen bir kategori seçin.";
    }
    if (s === 1) {
      if (!form.subject.trim()) e.subject = "Konu zorunludur.";
      if (!form.message.trim() || form.message.length < 20)
        e.message = "En az 20 karakter yazın.";
      if (!form.name.trim()) e.name = "Ad Soyad zorunludur.";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        e.email = "Geçerli e-posta girin.";
    }
    return e;
  };

  const next = () => {
    const e = validateStep(step);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const back = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const submit = async () => {
    setLoading(true);

    await fetch("/api/support/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSubmitted(true);
  };
  const selectedCat = CATEGORIES.find((c) => c.value === form.category);
  const selectedPri = PRIORITIES.find((p) => p.value === form.priority);
  const ticketNo = `TKT-${Math.floor(100000 + Math.random() * 900000)}`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
            ✅
          </div>
          <h2 className="text-2xl font-extrabold text-[#1b2a4a] mb-2">
            Talebiniz Alındı!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Ekibimiz en kısa sürede size dönüş yapacak.
            <br />
            Tahmini yanıt:{" "}
            <span className="font-bold text-[#1b2a4a]">{selectedPri?.eta}</span>
          </p>
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Ticket No</span>
              <span className="font-bold text-[#1b2a4a] font-mono">
                {ticketNo}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Kategori</span>
              <span className="font-semibold">{selectedCat?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Öncelik</span>
              <span className="font-semibold">{selectedPri?.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">E-posta</span>
              <span className="font-semibold">{form.email}</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Onay e-postası <strong>{form.email}</strong> adresine gönderildi.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setForm({
                category: "",
                priority: "medium",
                subject: "",
                message: "",
                name: "",
                email: "",
                orderNo: "",
              });
            }}
            className="w-full py-3 border-2 border-[#2ecc8f] text-[#2ecc8f] hover:bg-[#2ecc8f] hover:text-white font-bold rounded-xl transition-all text-sm"
          >
            Yeni Talep Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-[#1b2a4a] mb-1">
              Destek Talebi Oluştur
            </h1>
            <p className="text-gray-500 text-sm">
              Bir sorun yaşıyorsanız ticket oluşturun. Ekibimiz en kısa sürede
              dönüş yapacaktır.
            </p>
          </div>

          <div className="flex items-center gap-0 mb-8">
            {STEPS.map((label, i) => (
              <div
                key={label}
                className="flex items-center flex-1 last:flex-none"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                    ${i < step ? "bg-[#2ecc8f] text-white" : i === step ? "bg-[#1b2a4a] text-white" : "bg-gray-200 text-gray-400"}`}
                  >
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span
                    className={`text-xs mt-1 font-medium ${i === step ? "text-[#1b2a4a]" : "text-gray-400"}`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 mb-4 transition-all ${i < step ? "bg-[#2ecc8f]" : "bg-gray-200"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {step === 0 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-7">
              <div>
                <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-3">
                  Sorun Kategorisi <span className="text-red-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CATEGORIES.slice(1).map((cat) => {
                    const Icon = cat.icon;

                    return (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => {
                          setForm((p) => ({ ...p, category: cat.value }));
                          setErrors((p) => ({ ...p, category: undefined }));
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
                        setForm((prev) => ({ ...prev, priority: p.value }))
                      }
                      className={`flex flex-col items-start gap-1.5 p-4 rounded-xl border-2 text-left transition-all
                        ${form.priority === p.value ? p.activeColor : p.color + " hover:border-gray-300"}`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${form.priority === p.value ? p.activeDot : p.dot}`}
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
                onClick={next}
                className="w-full py-3.5 bg-[#1b2a4a] hover:bg-[#243660] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
              >
                Devam Et →
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
                  Konu <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={set("subject")}
                  placeholder="Sorununuzu kısaca özetleyin"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all
                    ${errors.subject ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"}`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
                  Açıklama <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Sorununuzu detaylı anlatın. Ne zaman başladı, hata mesajı var mı, hangi tarayıcıyı kullanıyorsunuz?"
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all resize-none
                    ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"}`}
                />
                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-xs text-red-500">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-gray-400">
                    {form.message.length} / 2000
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
                    Ad Soyad <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Ahmet Yılmaz"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all
                      ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
                    E-posta <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="ahmet@ornek.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all
                      ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
                  Sipariş / Hesap No{" "}
                  <span className="text-gray-400 normal-case font-normal">
                    (opsiyonel)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.orderNo}
                  onChange={set("orderNo")}
                  placeholder="ÖRN-123456"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10 text-sm font-medium outline-none transition-all"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={back}
                  className="flex-1 py-3.5 border-2 border-gray-200 text-gray-500 hover:border-gray-300 font-bold rounded-xl transition-all"
                >
                  ← Geri
                </button>
                <button
                  onClick={next}
                  className="flex-[2] py-3.5 bg-[#1b2a4a] hover:bg-[#243660] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
                >
                  Özeti Gör →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-extrabold text-[#1b2a4a] mb-1">
                  Talebinizi Gözden Geçirin
                </h3>
                <p className="text-gray-500 text-sm">
                  Her şey doğruysa gönderebilirsiniz.
                </p>
              </div>

              <div className="flex flex-col gap-3 bg-gray-50 rounded-xl p-5 text-sm">
                {[
                  { label: "Kategori", value: selectedCat?.label },
                  {
                    label: "Öncelik",
                    value: `${selectedPri?.label} (${selectedPri?.eta})`,
                  },
                  { label: "Konu", value: form.subject },
                  { label: "Ad Soyad", value: form.name },
                  { label: "E-posta", value: form.email },
                  ...(form.orderNo
                    ? [{ label: "Sipariş No", value: form.orderNo }]
                    : []),
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-gray-400 w-24 shrink-0">{label}</span>
                    <span className="font-semibold text-[#1b2a4a]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-5 text-sm">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wide mb-2">
                  Açıklama
                </p>
                <p className="text-[#1b2a4a] leading-relaxed whitespace-pre-wrap">
                  {form.message}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={back}
                  className="flex-1 py-3.5 border-2 border-gray-200 text-gray-500 hover:border-gray-300 font-bold rounded-xl transition-all"
                >
                  ← Düzenle
                </button>
                <button
                  onClick={submit}
                  disabled={loading}
                  className="flex-[2] py-3.5 bg-[#2ecc8f] hover:bg-[#27b87d] disabled:opacity-60 text-white font-bold rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    "🎫 Ticket Oluştur"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-extrabold text-[#1b2a4a] text-sm mb-4 flex items-center gap-2">
              ⏱️ Tahmini Yanıt Süreleri
            </h3>
            <div className="flex flex-col gap-3">
              {PRIORITIES.map((p) => (
                <div
                  key={p.value}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${p.activeDot}`} />
                    <span className="text-gray-600">{p.label}</span>
                  </div>
                  <span className="font-bold text-[#1b2a4a]">{p.eta}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-[#2ecc8f] rounded-full animate-pulse" />
              Canlı destek 7/24 aktif
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="font-extrabold text-[#1b2a4a] text-sm mb-4 flex items-center gap-2">
              📚 Önce Burayı Deneyin
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { icon: "🔑", text: "Şifre nasıl sıfırlanır?" },
                { icon: "🌐", text: "DNS ayarları rehberi" },
                { icon: "🔒", text: "SSL kurulum adımları" },
                { icon: "📧", text: "E-posta kurulum rehberi" },
              ].map(({ icon, text }) => (
                <a
                  key={text}
                  href="#"
                  className="flex items-center gap-2.5 text-sm text-gray-600 hover:text-[#2ecc8f] py-1.5 transition-colors group"
                >
                  <span>{icon}</span>
                  <span className="group-hover:underline">{text}</span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#chat"
            className="group flex items-center gap-4 bg-[#152238] rounded-2xl p-5 border border-[#2ecc8f]/20 hover:border-[#2ecc8f]/50 transition-all"
          >
            <div className="w-12 h-12 bg-[#2ecc8f]/15 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
              💬
            </div>
            <div>
              <p className="text-white font-bold text-sm">Canlı Destek</p>
              <p className="text-white/50 text-xs">Ortalama yanıt: 2 dk</p>
            </div>
            <span className="ml-auto text-[#2ecc8f] text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
*/
