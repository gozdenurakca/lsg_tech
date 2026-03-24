// burası korumalı ödeme sayfasıdır

"use client";

import { useState } from "react";
import { useCart } from "@/components/context/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ICONS } from "@/lib/icons";
import { UserIcon } from "lucide-react";

const KDV_RATE = 0.2;

const TYPE_META = {
  domain: {
    icon: "globe",
    label: "Alan Adı",
    color: "bg-blue-100 text-blue-600",
  },
  ssl: {
    icon: "shield",
    label: "SSL",
    color: "bg-emerald-100 text-emerald-600",
  },
  hosting: {
    icon: "server",
    label: "Hosting",
    color: "bg-purple-100 text-purple-600",
  },
} as const;

type FaturaType = "bireysel" | "kurumsal";
type OdemeStep = "form" | "success";

export default function OdemePage() {
  const { items, total, clearCart } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  const [step, setStep] = useState<OdemeStep>("form");
  const [faturaType, setFaturaType] = useState<FaturaType>("bireysel");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    ad: session?.user?.name ?? "",
    email: session?.user?.email ?? "",
    telefon: "",
    adres: "",
    sehir: "",
    postaKodu: "",
    unvan: "",
    vergiNo: "",
    kartNo: "",
    sonKullanma: "",
    cvv: "",
  });

  const set =
    (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const kdv = Math.round(total * KDV_RATE);
  const genelToplam = total + kdv;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: await fetch("/api/orders/create", { method: "POST", body: JSON.stringify({ items, form, total: genelToplam }) })
    await new Promise((r) => setTimeout(r, 1800));
    clearCart();
    setLoading(false);
    setStep("success");
  };

  const SuccessIcon = ICONS.success;
  const ArrowIcon = ICONS.arrowRight;
  const MapIcon = ICONS.mapPin;
  const CardIcon = ICONS.creditCard;
  const LockIcon = ICONS.lock;
  const ShieldIcon = ICONS.shield;
  const TagIcon = ICONS.tag;

  const TRUST_ITEMS = [
    { icon: "shield", text: "256-bit SSL korumalı" },
    { icon: "building", text: "Türkiye'den güvenli ödeme" },
    { icon: "checkCircle", text: "Anında aktivasyon" },
  ];

  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
    <div className="space-y-2.5">
      {TRUST_ITEMS.map(({ icon, text }) => {
        const Icon = ICONS[icon] || ICONS.check;

        return (
          <div
            key={text}
            className="flex items-center gap-2.5 text-sm text-slate-500"
          >
            <Icon size={14} className="text-emerald-500 shrink-0" />
            {text}
          </div>
        );
      })}
    </div>
  </div>;

  if (step === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}
          >
            <SuccessIcon size={44} className="text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Sipariş Alındı!
          </h2>
          <p className="text-slate-500 mb-1">
            Teşekkürler,{" "}
            <span className="font-bold text-slate-800">
              {form.ad || session?.user?.name}
            </span>
            .
          </p>
          <p className="text-sm text-slate-400 mb-8">
            Siparişiniz onaylandı. Detaylar{" "}
            <span className="font-medium text-slate-600">{form.email}</span>{" "}
            adresine gönderildi.
          </p>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 text-left shadow-sm space-y-3">
            {[
              { label: "Sipariş Oluşturuldu", done: true },
              { label: "Ödeme Onaylanıyor", done: false },
              { label: "Ürünler Aktifleştiriliyor", done: false },
            ].map(({ label, done }) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${done ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"}`}
                >
                  {done ? "✓" : "·"}
                </div>
                <span
                  className={`text-sm ${done ? "font-semibold text-slate-800" : "text-slate-400"}`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => router.push("/panel")}
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl shadow-md"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #4f46e5)" }}
          >
            Panele Git <ArrowIcon size={15} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative overflow-hidden pt-20"
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f1b3d 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-center gap-2 mb-4">
            {[
              { label: "Sepet", done: true },
              { label: "Ödeme", active: true },
              { label: "Onay", done: false },
            ].map(({ label, done, active }, i) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${active ? "bg-blue-500 text-white" : done ? "bg-emerald-500 text-white" : "bg-white/10 text-white/40"}`}
                >
                  {done ? "✓" : i + 1}
                </div>
                <span
                  className={`text-xs font-semibold ${active ? "text-white" : done ? "text-emerald-400" : "text-white/40"}`}
                >
                  {label}
                </span>
                {i < 2 && <div className="w-8 h-px bg-white/10 mx-1" />}
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-extrabold text-white">
            Ödeme Bilgileri
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Güvenli ve şifreli bağlantı ile işlem yapıyorsunuz.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-5 gap-6 items-start">
            <div className="md:col-span-3 space-y-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <UserIcon size={15} className="text-slate-400" />
                  Fatura Bilgileri
                </h3>

                <div className="flex gap-2 mb-5">
                  {(["bireysel", "kurumsal"] as FaturaType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFaturaType(t)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all border ${faturaType === t ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}
                    >
                      {t === "bireysel" ? "Bireysel" : "Kurumsal"}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Ad Soyad
                      </label>
                      <input
                        value={form.ad}
                        onChange={set("ad")}
                        required
                        placeholder="Ad Soyad"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Telefon
                      </label>
                      <input
                        value={form.telefon}
                        onChange={set("telefon")}
                        required
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      E-posta
                    </label>
                    <input
                      value={form.email}
                      onChange={set("email")}
                      required
                      type="email"
                      placeholder="ornek@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                    />
                  </div>

                  {faturaType === "kurumsal" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Şirket Unvanı
                        </label>
                        <input
                          value={form.unvan}
                          onChange={set("unvan")}
                          required
                          placeholder="LSG Teknoloji A.Ş."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Vergi No
                        </label>
                        <input
                          value={form.vergiNo}
                          onChange={set("vergiNo")}
                          required
                          placeholder="1234567890"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <MapIcon size={15} className="text-slate-400" />
                  Adres Bilgileri
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Adres
                    </label>
                    <input
                      value={form.adres}
                      onChange={set("adres")}
                      required
                      placeholder="Mahalle, Cadde, No"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Şehir
                      </label>
                      <input
                        value={form.sehir}
                        onChange={set("sehir")}
                        required
                        placeholder="İstanbul"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Posta Kodu
                      </label>
                      <input
                        value={form.postaKodu}
                        onChange={set("postaKodu")}
                        required
                        placeholder="34000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 bg-slate-50 focus:bg-white transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-800 mb-5 flex items-center gap-2">
                  <CardIcon size={15} className="text-slate-400" />
                  Ödeme Yöntemi
                </h3>

                <div className="space-y-4">
                  <div className="relative">
                    <CardIcon
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      value={form.kartNo}
                      onChange={set("kartNo")}
                      required
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 font-mono bg-slate-50 focus:bg-white transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Son Kullanma
                      </label>
                      <input
                        value={form.sonKullanma}
                        onChange={set("sonKullanma")}
                        required
                        placeholder="AA/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 font-mono bg-slate-50 focus:bg-white transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        CVV
                      </label>
                      <div className="relative">
                        <LockIcon
                          size={13}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          value={form.cvv}
                          onChange={set("cvv")}
                          required
                          placeholder="•••"
                          maxLength={4}
                          type="password"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none text-sm text-slate-800 font-mono bg-slate-50 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-4 mt-5">
                  <ShieldIcon
                    size={15}
                    className="text-blue-500 mt-0.5 shrink-0"
                  />
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Kart bilgileriniz 256-bit SSL ile şifrelenir. Hiçbir kart
                    verisi sistemimizde saklanmaz.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 sticky top-6 space-y-4">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide mb-5 flex items-center gap-2 group">
                  <TagIcon
                    size={14}
                    className="text-slate-400 group-hover:text-slate-600 transition"
                  />
                  Sipariş Özeti
                </h3>

                <div className="border-t border-slate-100 pt-4 space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Ara Toplam</span>
                    <span className="font-semibold text-slate-700">
                      ₺{total}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">KDV (%20)</span>
                    <span className="font-semibold text-slate-700">₺{kdv}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold pt-2 border-t border-slate-100">
                    <span className="text-slate-800">Genel Toplam</span>
                    <span className="text-blue-700">₺{genelToplam}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-5 flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-blue-600/20 hover:opacity-90 disabled:opacity-60 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)",
                  }}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <LockIcon size={14} />
                      Siparişi Tamamla
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
