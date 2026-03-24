"use client";

// ─── DomainTransferForm
// Backend bağlandığında handleSubmit içindeki TODO satırı değişir.

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Key,
  ShieldCheck,
  Clock,
  Lock,
  Zap,
  HeadphonesIcon,
} from "lucide-react";

type Step = "form" | "success";

const HOW_IT_WORKS = [
  {
    icon: "Globe",
    step: "01",
    title: "Domain'i Girin",
    desc: "Taşımak istediğiniz alan adını forma girin.",
  },
  {
    icon: Key,
    step: "02",
    title: "EPP Kodunu Ekleyin",
    desc: "Mevcut sağlayıcınızdan auth/EPP kodunu alın.",
  },
  {
    icon: "ShieldCheck",
    step: "03",
    title: "Transfer Başlar",
    desc: "LSG güvencesiyle güvenli taşıma başlatılır.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Tamamlandı",
    desc: "5–7 gün içinde domain hesabınıza taşınır.",
  },
];

const FEATURES = [
  { icon: "Lock", text: "SSL dahil güvenli transfer" },
  { icon: "Zap", text: "Hızlı 5–7 iş günü" },
  { icon: HeadphonesIcon, text: "7/24 destek hattı" },
  { icon: "ShieldCheck", text: "Kesintisiz alan adı erişimi" },
];

export default function DomainTransferForm() {
  const [step, setStep] = useState<Step>("form");
  const [domain, setDomain] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim() || !authCode.trim()) return;
    setLoading(true);
    // TODO: await fetch("/api/domain/transfer", { method: "POST", body: JSON.stringify({ domain, authCode }) })
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setStep("success");
  };

  /* ── Başarı ekranı ── */
  if (step === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* İkon */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
          >
            <CheckCircle2 size={44} className="text-white" />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Transfer Başlatıldı!
          </h2>
          <p className="text-slate-500 mb-1">
            <span className="font-bold text-slate-800">{domain}</span> için
            transfer talebiniz alındı.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            Mevcut kayıt şirketinden onay bekleniyor. İşlem 5–7 iş günü
            sürebilir.
          </p>

          {/* Durum çubuğu */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 text-left shadow-sm">
            {[
              "Talep Alındı",
              "Kayıt Şirketi Onayı Bekleniyor",
              "Transfer Tamamlanacak",
            ].map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-3 py-2.5 border-b border-slate-100 last:border-0"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${i === 0 ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}
                >
                  {i === 0 ? "✓" : i + 1}
                </div>
                <span
                  className={`text-sm ${i === 0 ? "font-semibold text-slate-800" : "text-slate-400"}`}
                >
                  {s}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              setStep("form");
              setDomain("");
              setAuthCode("");
            }}
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Yeni transfer başlat →
          </button>
        </div>
      </div>
    );
  }

  /* ── Ana form ── */
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Light Hero ── */}
      <div className="relative bg-white border-b border-slate-100 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(14,165,233,0.07) 0%, transparent 65%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-full px-4 py-1.5 mb-5">
            <ShieldCheck size={13} className="text-sky-600" />
            <span className="text-sky-700 text-xs font-semibold tracking-wide">
              Güvenli Transfer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Alan Adınızı{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              LSG'ye Taşıyın
            </span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-8">
            Mevcut alan adınızı kesintisiz ve güvenli şekilde birkaç adımda
            transfer edin.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {FEATURES.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm"
              >
                <Icon size={13} className="text-sky-500" />
                <span className="text-slate-600 text-xs font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nasıl çalışır ── */}
      <div className="max-w-5xl mx-auto px-6 -mt-1 py-14">
        <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">
          Nasıl Çalışır?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {HOW_IT_WORKS.map(({ icon: Icon, step: s, title, desc }, i) => (
            <div key={title} className="relative group">
              {/* Connector line */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-slate-200 z-0" />
              )}
              <div className="relative z-10 bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  }}
                >
                  <Icon size={20} className="text-blue-600" />
                </div>
                <span className="text-[10px] font-black text-blue-400 tracking-widest">
                  {s}
                </span>
                <p className="text-sm font-bold text-slate-800 mt-0.5 mb-1">
                  {title}
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Split layout: Sol bilgi + Sağ form ── */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Sol — Bilgi paneli */}
          <div className="md:col-span-2 space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-800 mb-4 uppercase tracking-wide">
                Transfer Öncesi
              </h3>
              <ul className="space-y-3">
                {[
                  "Domain 60 günlük kilitte olmamalı",
                  "EPP / Auth kodunu sağlayıcınızdan alın",
                  "WHOIS gizliliğini geçici kaldırın",
                  "Domain en az 60 gündür kayıtlı olmalı",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-emerald-500 mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl p-5 text-white"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #4f46e5)",
              }}
            >
              <HeadphonesIcon size={20} className="mb-3 opacity-80" />
              <p className="text-sm font-bold mb-1">
                Yardıma mı ihtiyacınız var?
              </p>
              <p className="text-xs text-blue-200 mb-3">
                Transfer süreci hakkında 7/24 destek alabilirsiniz.
              </p>
              <a
                href="/destek"
                className="text-xs font-semibold underline underline-offset-2 text-blue-200 hover:text-white"
              >
                Destek hattı →
              </a>
            </div>
          </div>

          {/* Sağ — Form */}
          <div className="md:col-span-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 mb-1">
                Transfer Bilgilerini Girin
              </h2>
              <p className="text-sm text-slate-400 mb-7">
                Bilgileriniz şifreli ve güvenli şekilde iletilir.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Domain */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Transfer Edilecek Alan Adı
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
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-slate-800 font-medium transition text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* EPP kodu */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    EPP / Auth Kodu
                    <span className="ml-2 text-xs font-normal text-slate-400">
                      (mevcut sağlayıcınızdan alın)
                    </span>
                  </label>
                  <div className="relative">
                    <Key
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      placeholder="Örn: aB3$xY7!kLmN"
                      required
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-slate-800 font-medium font-mono transition text-sm bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1.5 ml-1">
                    EPP kodu nedir?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      Nasıl alırım?
                    </a>
                  </p>
                </div>

                {/* Güvenlik notu */}
                <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <ShieldCheck
                    size={16}
                    className="text-blue-500 mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Tüm transfer işlemleri SSL şifreli bağlantı ile
                    gerçekleştirilir. Bilgileriniz üçüncü taraflarla
                    paylaşılmaz.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60 shadow-lg shadow-blue-600/25 text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)",
                  }}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Transfer Başlat <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
