"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ArrowIcon = ICONS.arrowRight;
const PhoneIcon = ICONS.phone;
export default function CTA() {
  return (
    <section className="py-20 bg-[#F7F9FC] border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[.16em] text-sky-600 bg-sky-50 border border-sky-200 rounded-full px-3 py-1 mb-6">
          Hemen Başlayın
        </span>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Kurumsal Güvenlik Çözümünüz Hazır
        </h2>

        <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Dijital altyapınızı bir üst seviyeye taşımak için ekibimizle iletişime
          geçin.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
          >
            <PhoneIcon size={15} />
            İletişime Geç
            <ArrowIcon size={15} />
          </Link>

          <Link
            href="/kaynaklar/referanslar"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-colors"
          >
            Referanslarımız
          </Link>
        </div>
      </div>
    </section>
  );
}
