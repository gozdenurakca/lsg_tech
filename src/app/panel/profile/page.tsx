"use client";

import { useEffect, useState } from "react";
import { ICONS } from "@/lib/icons";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    address: {
      line1: "",
      city: "",
      state: "",
      zip: "",
      country: "Türkiye",
    },
    billing: {
      type: "bireysel",
      taxNumber: "",
      taxOffice: "",
    },
  });

  useEffect(() => {
    fetch("/api/user/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.user) {
          setForm({
            firstName: data.user.firstName || "",
            lastName: data.user.lastName || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
            companyName: data.user.companyName || "",
            address: {
              line1: data.user.address?.line1 || "",
              city: data.user.address?.city || "",
              state: data.user.address?.state || "",
              zip: data.user.address?.zip || "",
              country: data.user.address?.country || "Türkiye",
            },
            billing: {
              type: data.user.billing?.type || "bireysel",
              taxNumber: data.user.billing?.taxNumber || "",
              taxOffice: data.user.billing?.taxOffice || "",
            },
          });
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setForm((p) => ({ ...p, address: { ...p.address, [field]: value } }));
    } else if (name.startsWith("billing.")) {
      const field = name.split(".")[1];
      setForm((p) => ({ ...p, billing: { ...p.billing, [field]: value } }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setToast(null);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.ok) {
        setToast({
          message: "Profil bilgileriniz başarıyla güncellendi.",
          type: "success",
        });
      } else {
        setToast({
          message: data.error || "Güncelleme başarısız.",
          type: "error",
        });
      }
    } catch (err) {
      setToast({
        message: "Bir hata oluştu. Lütfen tekrar deneyin.",
        type: "error",
      });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 3500);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Profil Ayarları
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Kişisel bilgilerinizi ve fatura adresinizi buradan yönetebilirsiniz.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* KİŞİSEL BİLGİLER */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
              <ICONS.users size={16} className="text-blue-600" />
            </div>
            <h2 className="font-bold text-slate-800">Kişisel Bilgiler</h2>
          </div>
          <div className="p-6 grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                Ad
              </label>
              <input
                required
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                Soyad
              </label>
              <input
                required
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                E-posta (Değiştirilemez)
              </label>
              <input
                disabled
                value={form.email}
                className="w-full border border-slate-100 rounded-xl px-4 py-2.5 bg-slate-100 text-slate-400 cursor-not-allowed outline-none text-sm font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                Telefon
              </label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
              />
            </div>
          </div>
        </div>

        {/* FATURA & ADRES BİLGİLERİ */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
              <ICONS.file size={16} className="text-purple-600" />
            </div>
            <h2 className="font-bold text-slate-800">
              Fatura ve Adres Bilgileri
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex gap-6 pb-2 border-b border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer pb-2">
                <input
                  type="radio"
                  name="billing.type"
                  value="bireysel"
                  checked={form.billing.type === "bireysel"}
                  onChange={handleChange}
                  className="text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-bold text-slate-700">
                  Bireysel
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer pb-2">
                <input
                  type="radio"
                  name="billing.type"
                  value="kurumsal"
                  checked={form.billing.type === "kurumsal"}
                  onChange={handleChange}
                  className="text-purple-600 focus:ring-purple-500 w-4 h-4 cursor-pointer"
                />
                <span className="text-sm font-bold text-slate-700">
                  Kurumsal
                </span>
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {form.billing.type === "kurumsal" && (
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    Şirket Adı / Ünvan
                  </label>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  {form.billing.type === "kurumsal"
                    ? "Vergi Numarası"
                    : "T.C. Kimlik No / VKN"}
                </label>
                <input
                  name="billing.taxNumber"
                  value={form.billing.taxNumber}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Vergi Dairesi (Opsiyonel)
                </label>
                <input
                  name="billing.taxOffice"
                  value={form.billing.taxOffice}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  Açık Adres
                </label>
                <textarea
                  rows={3}
                  name="address.line1"
                  value={form.address.line1}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all resize-none text-sm font-semibold text-slate-700 leading-relaxed"
                  placeholder="Mahalle, Sokak, No, Daire..."
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  İlçe / İl
                </label>
                <input
                  name="address.city"
                  value={form.address.city}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                  placeholder="Örn: Kadıköy, İstanbul"
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    Posta Kodu
                  </label>
                  <input
                    name="address.zip"
                    value={form.address.zip}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    Ülke
                  </label>
                  <input
                    name="address.country"
                    value={form.address.country}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm font-semibold text-slate-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-sm w-full sm:w-auto">
            {toast && (
              <div
                className={`font-semibold px-4 py-2.5 rounded-xl border flex items-center gap-2 ${toast.type === "success" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-red-50 text-red-700 border-red-200"}`}
              >
                <ICONS.check size={16} />
                {toast.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
          >
            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </button>
        </div>
      </form>
    </div>
  );
}
