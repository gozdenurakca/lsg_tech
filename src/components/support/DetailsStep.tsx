"use client";

import React from "react";

type FormData = {
  subject: string;
  message: string;
  name: string;
  email: string;
  orderNo: string;
};

type FormErrors = {
  subject?: string;
  message?: string;
  name?: string;
  email?: string;
};

type Props = {
  form: FormData;
  setForm: (data: any) => void;
  errors: FormErrors;
  setErrors: (data: any) => void;
  next: () => void;
  back: () => void;
};

export default function DetailsStep({
  form,
  setForm,
  errors,
  setErrors,
  next,
  back,
}: Props) {
  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((p: any) => ({ ...p, [field]: e.target.value }));
      setErrors((p: any) => ({ ...p, [field]: undefined }));
    };

  const validate = () => {
    const e: FormErrors = {};

    if (!form.subject.trim()) {
      e.subject = "Konu zorunludur.";
    }

    if (!form.message.trim() || form.message.length < 20) {
      e.message = "En az 20 karakter yazın.";
    }

    if (!form.name.trim()) {
      e.name = "Ad Soyad zorunludur.";
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Geçerli e-posta girin.";
    }

    return e;
  };

  const handleNext = () => {
    const e = validate();

    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setErrors({});
    next();
  };

  return (
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
          ${
            errors.subject
              ? "border-red-400 bg-red-50"
              : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"
          }`}
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
          rows={5}
          placeholder="Sorununuzu detaylı anlatın..."
          className={`w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all resize-none
          ${
            errors.message
              ? "border-red-400 bg-red-50"
              : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"
          }`}
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
            ${
              errors.name
                ? "border-red-400 bg-red-50"
                : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"
            }`}
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
            ${
              errors.email
                ? "border-red-400 bg-red-50"
                : "border-gray-200 focus:border-[#2ecc8f] focus:ring-2 focus:ring-[#2ecc8f]/10"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[#1b2a4a] uppercase tracking-wide mb-1.5">
          Sipariş / Hesap No
          <span className="text-gray-400 normal-case font-normal">
            {" "}
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
          onClick={handleNext}
          className="flex-[2] py-3.5 bg-[#1b2a4a] hover:bg-[#243660] text-white font-bold rounded-xl transition-all active:scale-[0.98]"
        >
          Özeti Gör →
        </button>
      </div>
    </div>
  );
}
