"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/15 shadow-sm";

const BENEFITS = [
  { icon: "clock", label: "24 saat içinde geri dönüş" },
  { icon: "layoutTemplate", label: "Kurumsal çözüm mimarisi" },
  { icon: "activity", label: "Ücretsiz teknik analiz" },
];

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) {
  const Icon = ICONS[icon] || ICONS.check;

  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <Icon className="h-3.5 w-3.5 text-slate-400" />
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const SuccessIcon = ICONS.success;
  const ErrorIcon = ICONS.alert;
  const ArrowIcon = ICONS.arrowRight;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      companyName: fd.get("companyName"),
      email: fd.get("email"),
      website: fd.get("website"),
      message: fd.get("message"),
      type: "quote",
      source: "teklif-page",
    };

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F7F9FC] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
        <div className="lg:pt-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Ücretsiz Teklif
          </p>

          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-slate-900">
            Projeniz için en doğru{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              çözümü birlikte bulalım
            </span>
          </h2>

          <p className="mb-10 text-base leading-7 text-slate-500">
            Uzman ekibimiz ihtiyaçlarınıza özel analiz yaparak size en uygun
            altyapıyı sunar.
          </p>

          <ul className="space-y-4">
            {BENEFITS.map((b) => {
              const Icon = ICONS[b.icon];

              return (
                <li key={b.label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-600">{b.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          {success ? (
            <div className="flex flex-col items-center py-10 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-200">
                <SuccessIcon className="h-8 w-8 text-emerald-500" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                Talebiniz Alındı
              </h3>

              <p className="max-w-xs text-sm text-slate-500">
                Ekibimiz en geç 24 saat içinde sizinle iletişime geçecek.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="mt-7 text-xs text-slate-400 underline hover:text-slate-600"
              >
                Yeni talep oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <ErrorIcon className="h-4 w-4" />
                  Gönderim başarısız. Lütfen tekrar deneyin.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Şirket Adı" icon="building">
                  <input
                    name="companyName"
                    required
                    placeholder="Şirketinizin adı"
                    className={inputClass}
                  />
                </Field>

                <Field label="Kurumsal E-posta" icon="mail">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@sirket.com"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Web Sitesi" icon="globe">
                <input
                  name="website"
                  placeholder="https://siteniz.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Proje Detayı" icon="message">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="İhtiyaçlarınızı anlatın..."
                  className={inputClass}
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60 transition"
              >
                {loading ? (
                  "Gönderiliyor..."
                ) : (
                  <>
                    Teklifimi Al
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
