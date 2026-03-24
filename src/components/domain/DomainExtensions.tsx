/*
TLD showcase = .com , .net vs
kullanıcıyı TLD page'e gönderir.
*/
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Icon from "@/components/ui/Icon";
import { EXTENSIONS } from "@/lib/domain/extensions";

function extToSlug(ext: string) {
  return ext.replace(/^\./, "").replace(/\./g, "-");
}

const formatPrice = (val: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(val);

export default function DomainExtensions() {
  const router = useRouter();

  const [active, setActive] = useState(
    () => EXTENSIONS.findIndex((e) => e.featured) || 0,
  );

  const selected = EXTENSIONS[active];

  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Alan Adı Uzantıları
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Markanıza uygun uzantıyı seçin
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* LEFT LIST */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {EXTENSIONS.map((e, i) => (
              <button
                key={e.ext}
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between px-5 py-4 text-left transition-all
                ${
                  active === i
                    ? `${e.lightBg} border-l-4 ${e.borderColor}`
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`${e.color} text-white text-xs font-black px-3 py-1.5 rounded-lg min-w-[72px] text-center`}
                  >
                    {e.ext}
                  </span>

                  <span
                    className={`text-sm font-medium ${
                      active === i ? "text-slate-800" : "text-slate-500"
                    }`}
                  >
                    {e.tagline}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {e.oldPrice && (
                    <span className="text-slate-300 text-xs line-through hidden sm:block">
                      {formatPrice(e.oldPrice)}
                    </span>
                  )}

                  <span
                    className={`font-bold text-sm ${
                      active === i ? e.textColor : "text-slate-700"
                    }`}
                  >
                    {formatPrice(e.price)}
                  </span>

                  {active === i && (
                    <div className={`w-1.5 h-1.5 rounded-full ${e.color}`} />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT CARD */}
          <div
            className={`lg:col-span-2 ${selected.lightBg} border ${selected.borderColor} rounded-2xl p-6 flex flex-col gap-5`}
          >
            <div>
              <span
                className={`${selected.color} text-white text-sm font-black px-4 py-2 rounded-xl inline-block mb-4`}
              >
                {selected.ext}
              </span>

              <p className="text-slate-700 text-sm leading-relaxed">
                {selected.tagline}
              </p>
            </div>

            {/* FEATURES */}
            <ul className="flex flex-col gap-2">
              {(selected.highlights ?? []).map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <Icon name="check" size={14} className={selected.textColor} />
                  {h}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-4 border-t border-white/60">
              <div className="flex items-baseline gap-2 mb-4">
                {selected.oldPrice && (
                  <span className="text-slate-400 text-sm line-through">
                    {formatPrice(selected.oldPrice)}
                  </span>
                )}

                <span className={`font-black text-3xl ${selected.textColor}`}>
                  {formatPrice(selected.price)}
                </span>

                <span className="text-slate-500 text-sm">/yıl</span>
              </div>

              <button
                onClick={() =>
                  router.push(`/domain/tld/${extToSlug(selected.ext)}`)
                }
                className={`${selected.color} hover:opacity-90 text-white font-bold w-full py-3 rounded-xl text-sm transition-opacity flex items-center justify-center gap-2`}
              >
                Detayları gör
                <Icon name="arrowUpRight" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
