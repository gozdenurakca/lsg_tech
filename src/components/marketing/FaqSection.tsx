"use client";

import { useState } from "react";
import { ICONS } from "@/lib/icons";

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  faqs: FaqItem[];
};

const ChevronIcon = ICONS.chevronDown;

function FaqAccordion({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[15px] text-slate-900">{q}</span>

        <ChevronIcon
          size={18}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-7 pt-4 pb-6 text-[14px] text-slate-600 leading-relaxed border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ id, eyebrow, title, faqs }: Props) {
  return (
    <section id={id} className="py-24 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/60 font-bold mb-3">
              {eyebrow}
            </p>
          )}

          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold text-slate-900">
            {title}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <FaqAccordion key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
