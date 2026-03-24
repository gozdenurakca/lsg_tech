"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FORM_SUBJECTS } from "./data";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormState>;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};

    if (!form.name.trim()) e.name = "Ad Soyad zorunludur.";

    if (!form.email.trim()) e.email = "E-posta zorunludur.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Geçerli bir e-posta girin.";

    if (!form.subject || form.subject === FORM_SUBJECTS[0])
      e.subject = "Lütfen bir konu seçin.";

    if (!form.message.trim()) e.message = "Mesaj zorunludur.";
    else if (form.message.trim().length < 20)
      e.message = "Mesajınız en az 20 karakter olmalıdır.";

    return e;
  };

  const handleChange =
    (field: keyof FormState) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all
     ${
       errors[field]
         ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-100"
         : "border-gray-200 bg-white focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
     }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl">
          ✅
        </div>

        <h3 className="text-xl font-extrabold text-[#1b2a4a]">
          Mesajınız İletildi!
        </h3>

        <p className="text-gray-500 text-sm max-w-xs">
          En kısa sürede size dönüş yapacağız. Ortalama yanıt süresi 4–8
          saattir.
        </p>

        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-bold text-emerald-600 hover:underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#1b2a4a] mb-1.5 uppercase tracking-wide">
            Ad Soyad
          </label>

          <input
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Ahmet Yılmaz"
            className={inputClass("name")}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#1b2a4a] mb-1.5 uppercase tracking-wide">
            E-posta
          </label>

          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="ahmet@ornek.com"
            className={inputClass("email")}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-bold text-[#1b2a4a] mb-1.5 uppercase tracking-wide">
          Konu
        </label>

        <select
          value={form.subject}
          onChange={handleChange("subject")}
          className={inputClass("subject") + " cursor-pointer"}
        >
          {FORM_SUBJECTS.map((s) => (
            <option key={s} value={s} disabled={s === FORM_SUBJECTS[0]}>
              {s}
            </option>
          ))}
        </select>

        {errors.subject && (
          <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-[#1b2a4a] mb-1.5 uppercase tracking-wide">
          Mesajınız
        </label>

        <textarea
          value={form.message}
          onChange={handleChange("message")}
          placeholder="Sorununuzu veya talebinizi detaylıca açıklayın..."
          rows={5}
          className={inputClass("message") + " resize-none"}
        />

        <div className="flex items-start justify-between mt-1">
          {errors.message ? (
            <p className="text-xs text-red-500">{errors.message}</p>
          ) : (
            <span />
          )}

          <span className="text-xs text-gray-400 ml-auto">
            {form.message.length} / 1000
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700
        shadow-lg shadow-emerald-600/25
        disabled:opacity-60 disabled:cursor-not-allowed
        text-white font-bold text-base rounded-xl transition-all
        active:scale-[0.98] flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>Mesaj Gönder ✉️</>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Bir hata oluştu. Lütfen tekrar deneyin veya canlı destekle iletişime
          geçin.
        </p>
      )}
    </form>
  );
}
