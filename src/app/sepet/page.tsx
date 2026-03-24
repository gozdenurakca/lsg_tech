// burası sepet ana sayfası

"use client";

import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ICONS, type IconType } from "@/lib/icons";

const TYPE_META: Record<
  "domain" | "ssl" | "hosting",
  {
    icon: IconType;
    label: string;
    color: string;
  }
> = {
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
};

const KDV_RATE = 0.2;

export default function SepetPage() {
  const { items, removeItem, total, count } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  const kdv = Math.round(total * KDV_RATE);
  const genelToplam = total + kdv;
  const ShoppingCartIcon = ICONS.cart;
  const ArrowRightIcon = ICONS.arrowRight;
  const TagIcon = ICONS.tag;
  const TrashIcon = ICONS.trash2;

  const handleCheckout = () => {
    if (!session) {
      router.push("/giris?redirect=/sepet/odeme");
    } else {
      router.push("/sepet/odeme");
    }
  };

  if (count === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShoppingCartIcon size={32} className="text-slate-400" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-800 mb-2">
            Sepetiniz boş
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Henüz herhangi bir ürün eklemediniz.
          </p>
          <Link
            href="/domain"
            className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-xl shadow-md"
            style={{ background: "linear-gradient(135deg, #1d4ed8, #4f46e5)" }}
          >
            Alan Adı Ara <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="relative overflow-hidden pt-16"
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
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <ShoppingCartIcon size={18} className="text-blue-400" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Sepetim</h1>
            <span className="bg-blue-600 text-white text-xs font-black px-2.5 py-1 rounded-full">
              {count}
            </span>
          </div>
          <p className="text-slate-400 text-sm ml-12">
            Siparişinizi gözden geçirin ve ödemeye geçin.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Ürünler ({count})
            </p>

            {items.map((item) => {
              const meta = TYPE_META[item.type];
              const Icon = ICONS[meta.icon];
              const name = item.type === "domain" ? item.name : item.plan;
              const itemTotal = item.price * item.period;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm transition-shadow"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${meta.color}`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        {meta.label}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 truncate">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.period} yıllık · ₺{item.price}/yıl
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-base font-extrabold text-slate-900">
                      ₺{itemTotal}
                    </p>
                    <p className="text-[11px] text-slate-400">KDV hariç</p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-2 w-8 h-8 rounded-lg flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                  >
                    <TrashIcon size={15} />
                  </button>
                </div>
              );
            })}

            <div className="pt-2">
              <Link
                href="/domain"
                className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1"
              >
                ← Alışverişe devam et
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 sticky top-6 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide mb-5 flex items-center gap-2">
                <TagIcon size={14} className="text-slate-400" />
                Sipariş Özeti
              </h3>

              <div className="space-y-3 mb-5">
                {items.map((item) => {
                  const name = item.type === "domain" ? item.name : item.plan;
                  const itemTotal = item.price * item.period;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-slate-500 truncate max-w-[160px]">
                        {name}
                      </span>
                      <span className="font-semibold text-slate-700 shrink-0">
                        ₺{itemTotal}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2.5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Ara Toplam</span>
                  <span className="font-semibold text-slate-700">₺{total}</span>
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
                onClick={handleCheckout}
                className="w-full mt-5 flex items-center justify-center gap-2 text-white font-bold py-4 rounded-xl text-sm shadow-lg shadow-blue-600/20 hover:opacity-90 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)",
                }}
              >
                {session ? "Ödemeye Geç" : "Giriş Yap & Öde"}
                <ArrowRightIcon size={16} />
              </button>

              {!session && (
                <p className="text-center text-xs text-slate-400 mt-3">
                  Ödeme için giriş yapmanız gerekmektedir.
                </p>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="space-y-2.5">
                {[
                  { icon: "shieldCheck", text: "256-bit SSL şifreli ödeme" },
                  { icon: "package", text: "Anında aktivasyon" },
                  { icon: "shield", text: "30 gün iade garantisi" },
                ].map(({ icon, text }) => {
                  const Icon = ICONS[icon];
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
