"use client";

import { useState } from "react";
import { useCart } from "@/components/context/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ICONS } from "@/lib/icons";

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

  // ICONS
  const SuccessIcon = ICONS.success;
  const ArrowIcon = ICONS.arrowRight;
  const UserIcon = ICONS.users;
  const MapIcon = ICONS.mapPin;
  const CardIcon = ICONS.creditCard;
  const LockIcon = ICONS.lock;
  const ShieldIcon = ICONS.shield;
  const TagIcon = ICONS.tag;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1800));

    clearCart();
    setLoading(false);
    setStep("success");
  };

  // ── SUCCESS ─────────────────────────────
  if (step === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <SuccessIcon size={44} className="text-emerald-500 mx-auto mb-6" />

          <h2 className="text-3xl font-extrabold mb-3">Sipariş Alındı!</h2>

          <p className="text-slate-500 mb-6">
            Teşekkürler {form.ad || session?.user?.name}
          </p>

          <button
            onClick={() => router.push("/panel")}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Panele Git <ArrowIcon size={15} />
          </button>
        </div>
      </div>
    );
  }

  // ── FORM ─────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      <form onSubmit={handleSubmit}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-5 gap-6">
          {/* LEFT */}
          <div className="md:col-span-3 space-y-5">
            {/* FATURA */}
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="flex items-center gap-2 mb-4 font-bold">
                <UserIcon size={15} /> Fatura Bilgileri
              </h3>

              <input
                value={form.ad}
                onChange={set("ad")}
                placeholder="Ad Soyad"
                className="input"
              />
            </div>

            {/* ADRES */}
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="flex items-center gap-2 mb-4 font-bold">
                <MapIcon size={15} /> Adres
              </h3>
            </div>

            {/* PAYMENT */}
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="flex items-center gap-2 mb-4 font-bold">
                <CardIcon size={15} /> Ödeme
              </h3>

              <div className="relative">
                <CardIcon className="absolute left-3 top-3" />
                <input className="pl-10 input" />
              </div>

              <div className="relative">
                <LockIcon className="absolute left-3 top-3" />
                <input className="pl-10 input" />
              </div>

              <div className="flex gap-2 mt-4 text-sm text-blue-600">
                <ShieldIcon size={14} />
                SSL ile korunuyor
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="flex items-center gap-2 mb-4 font-bold">
                <TagIcon size={14} /> Sipariş Özeti
              </h3>

              {items.map((item) => {
                const meta = TYPE_META[item.type];
                const Icon = ICONS[meta.icon];

                const displayName =
                  item.type === "domain" ? item.name : item.plan;

                return (
                  <div key={item.id} className="flex items-center gap-2">
                    <Icon size={14} />
                    {displayName}
                  </div>
                );
              })}

              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <LockIcon size={14} />
                Siparişi Tamamla
              </button>
            </div>

            <div className="bg-white p-4 rounded-2xl border space-y-2">
              {[
                { icon: "shield", text: "SSL korumalı" },
                { icon: "building", text: "Türkiye ödeme" },
                { icon: "checkCircle", text: "Anında aktivasyon" },
              ].map(({ icon, text }) => {
                const Icon = ICONS[icon];

                return (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={14} className="text-emerald-500" />
                    {text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
