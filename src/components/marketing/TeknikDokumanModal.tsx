"use client";

import { useState } from "react";
import { FileText, X, CheckCircle, Download, Building2, Mail, Phone, User } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  productName: string;
}

export default function TeknikDokumanModal({ open, onClose, productName }: Props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/teknik-dokuman", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, productName }),
      });
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setDone(false);
      setForm({ name: "", email: "", company: "", phone: "" });
    }, 300);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 px-6 pt-6 pb-8">
          <button onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <X size={14} className="text-white" />
          </button>

          <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-4">
            <FileText size={22} className="text-blue-300" />
          </div>

          <h2 className="text-white font-extrabold text-xl mb-1">Teknik Doküman Talep Et</h2>
          <p className="text-slate-400 text-sm">
            <span className="text-white font-semibold">{productName}</span> için teknik doküman
            bilgilerinize e-posta ile gönderilecektir.
          </p>
        </div>

        {/* İçerik */}
        <div className="px-6 py-6">
          {done ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Talebiniz Alındı!</h3>
              <p className="text-sm text-slate-500 mb-1">
                <span className="font-semibold text-slate-700">{form.email}</span> adresine
              </p>
              <p className="text-sm text-slate-500 mb-6">en kısa sürede teknik dokümanı göndereceğiz.</p>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 rounded-xl p-3">
                <Download size={13} />
                Doküman gönderiminde ortalama süre: <span className="font-semibold text-slate-600">1–2 iş günü</span>
              </div>
              <button onClick={handleClose}
                className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Kapat
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name",    icon: User,      placeholder: "Ad Soyad",    required: true,  type: "text" },
                { key: "email",   icon: Mail,      placeholder: "E-posta",     required: true,  type: "email" },
                { key: "company", icon: Building2, placeholder: "Şirket Adı",  required: true,  type: "text" },
                { key: "phone",   icon: Phone,     placeholder: "Telefon (opsiyonel)", required: false, type: "tel" },
              ].map(({ key, icon: Icon, placeholder, required, type }) => (
                <div key={key} className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <div className="pl-3.5">
                    <Icon size={15} className="text-slate-400" />
                  </div>
                  <input
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="flex-1 px-3 py-3 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              ))}

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Bilgileriniz yalnızca doküman gönderimi için kullanılacak, üçüncü taraflarla paylaşılmayacaktır.
              </p>

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm">
                <Download size={15} />
                {loading ? "Gönderiliyor..." : "Teknik Doküman Talep Et"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
