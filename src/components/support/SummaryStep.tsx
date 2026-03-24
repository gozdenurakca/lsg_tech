"use client";
import { ICONS } from "@/lib/icons";
import React from "react";

type FormData = {
  category: string;
  priority: string;
  subject: string;
  message: string;
  name: string;
  email: string;
  orderNo: string;
};

type Priority = {
  value: string;
  label: string;
  eta: string;
};

type Category = {
  value: string;
  label: string;
};

type Props = {
  form: FormData;
  categories: Category[];
  priorities: Priority[];
  loading: boolean;
  back: () => void;
  submit: () => void;
};

export default function SummaryStep({
  form,
  categories,
  priorities,
  loading,
  back,
  submit,
}: Props) {
  const selectedCat = categories.find((c) => c.value === form.category);
  const selectedPri = priorities.find((p) => p.value === form.priority);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col gap-6">
      <div>
        <h3 className="font-extrabold text-[#1b2a4a] mb-1">
          Talebinizi Gözden Geçirin
        </h3>
        <p className="text-gray-500 text-sm">
          Her şey doğruysa ticket oluşturabilirsiniz.
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
            <span className="font-semibold text-[#1b2a4a]">{value}</span>
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
            <span className="flex items-center gap-2">
              <ICONS.loader size={16} className="animate-spin" />
              Gönderiliyor...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <ICONS.ticket size={16} />
              Ticket Oluştur
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
