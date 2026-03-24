"use client";

import Link from "next/link";
import { ICONS } from "@/lib/icons";

type Props = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

const ArrowIcon = ICONS.arrowRight;

export default function CTASection({
  title = "Aklınızda başka sorular mı var?",
  subtitle = "Uzman ekibimiz 7/24 yanınızda.",
  buttonLabel = "Ücretsiz Danışmanlık Al",
  buttonHref = "/#teklif",
}: Props) {
  return (
    <div className="mt-14 text-center bg-[#f8fafc] border border-slate-200 rounded-2xl p-10">
      <h3 className="font-bold text-[20px] text-slate-900 mb-2">{title}</h3>

      <p className="text-[14px] text-slate-500 mb-6">{subtitle}</p>

      <Link
        href={buttonHref}
        className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-3.5 rounded-xl font-bold text-[15px] transition shadow-lg shadow-blue-900/15 hover:-translate-y-0.5"
      >
        {buttonLabel}
        <ArrowIcon size={16} />
      </Link>
    </div>
  );
}
