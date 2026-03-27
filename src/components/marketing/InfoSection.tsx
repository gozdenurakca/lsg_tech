"use client";

import { ICONS } from "@/lib/icons";

export type InfoItem = {
  title: string;
  desc: string;
  icon?: string;
  highlight?: boolean;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items?: InfoItem[];
};

export default function InfoSection({ id, eyebrow, title, items = [] }: Props) {
  if (items.length === 0) {
    return (
      <section id={id} className="py-28 bg-[#f1f5f9] scroll-mt-24">
        <div className="text-center text-slate-400 text-sm">İçerik bulunamadı</div>
      </section>
    );
  }

  /* Item sınıflandırması:
     - intro   : ilk item, genellikle uzun açıklayıcı metin
     - stats   : kısa başlık + açıklama (ikon var)
     - usecases: "Kullanım alanı" özel item (virgülle ayrılmış desc)
  */
  const intro = items[0];
  const useCaseItem = items.find(
    (it) => it.title.toLowerCase().includes("kullanım") || it.icon === "usecase"
  );
  const statItems = items.filter((it) => it !== intro && it !== useCaseItem);

  return (
    <section id={id} className="py-24 bg-[#f1f5f9] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="text-center mb-16">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-500 font-bold mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="text-[clamp(28px,3vw,42px)] font-bold text-slate-900">
            {title}
          </h2>
        </div>

        {/* ── INTRO CARD ── */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-10 py-8 mb-8 text-center max-w-3xl mx-auto">
          <p className="text-[17px] text-slate-800 leading-relaxed font-medium">
            {intro.title}
          </p>
          {intro.desc && (
            <p className="text-[15px] text-slate-500 mt-2 leading-relaxed">
              {intro.desc}
            </p>
          )}
        </div>

        {/* ── STAT CARDS ── */}
        {statItems.length > 0 && (
          <div className={`grid gap-4 mb-8 ${
            statItems.length <= 2
              ? "grid-cols-2"
              : statItems.length === 3
              ? "md:grid-cols-3"
              : "grid-cols-2 md:grid-cols-4"
          }`}>
            {statItems.map((item) => {
              const IconComp = item.icon ? (ICONS as Record<string, React.ElementType>)[item.icon] : null;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 py-6 flex flex-col items-center text-center gap-1 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {IconComp && (
                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-2">
                      <IconComp size={18} className="text-blue-600" />
                    </div>
                  )}
                  <span className="text-[26px] font-extrabold text-blue-900 leading-none">
                    {item.title}
                  </span>
                  <span className="text-[13px] text-slate-500 font-medium">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* ── USE CASES ── */}
        {useCaseItem && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-8 py-6 flex flex-col items-center gap-4 text-center">
            <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">
              Kullanım Alanları
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {useCaseItem.desc.split(",").map((uc) => (
                <span
                  key={uc}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-blue-50 text-blue-700 border border-blue-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {uc.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
