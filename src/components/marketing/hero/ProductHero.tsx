"use client";

import { useState } from "react";
import Image from "next/image";
import { ICONS } from "@/lib/icons";
import TeknikDokumanModal from "@/components/marketing/TeknikDokumanModal";

type FloatingCard = {
  icon: keyof typeof ICONS;
  eyebrow: string;
  text: string;
  iconBg?: string;
  iconColor?: string;
};

type HeroItem = {
  icon: keyof typeof ICONS;
  title: string;
  desc: string;
};

type HeroBadge = {
  icon: keyof typeof ICONS;
  label: string;
  color?: string;
};

type Props = {
  badge: HeroBadge;
  title: React.ReactNode;
  subtitle: string;
  items?: HeroItem[];
  imageSrc: string;
  imageAlt?: string;
  imageGradient?: string;
  floatingCard?: FloatingCard;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
    modal?: boolean;   // true → link yerine lead capture modal açar
    productName?: string;
  };
};

export default function Hero({
  badge,
  title,
  subtitle,
  items = [],
  imageSrc,
  imageAlt = "Hero illustration",
  imageGradient = "from-[#0f172a] via-[#1e3a8a] to-[#0f172a]",
  floatingCard,
  primaryButton,
  secondaryButton,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const BadgeIcon = ICONS[badge.icon] || ICONS.shieldRaw;

  const FloatingIcon = floatingCard
    ? ICONS[floatingCard.icon] || ICONS.shieldRaw
    : null;

  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-0 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[560px]">
          {/* LEFT IMAGE */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl border border-slate-200">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${imageGradient}`}
              />

              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative w-full h-full max-w-[860px] rounded-2xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-contain [clip-path:inset(0_round_16px)]"
                    priority
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

              {floatingCard && FloatingIcon && (
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      floatingCard.iconBg ?? "bg-emerald-100"
                    }`}
                  >
                    <FloatingIcon
                      size={18}
                      className={floatingCard.iconColor ?? "text-emerald-600"}
                    />
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                      {floatingCard.eyebrow}
                    </div>

                    <div className="text-[13px] font-bold text-slate-900">
                      {floatingCard.text}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="py-12">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold mb-6 ${
                badge.color ??
                "bg-emerald-50 border border-emerald-200 text-emerald-700"
              }`}
            >
              <BadgeIcon size={13} />
              {badge.label}
            </div>

            <h1 className="text-[clamp(36px,5vw,58px)] font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-[20px] font-semibold text-slate-600 mb-8">
              {subtitle}
            </p>

            {items.length > 0 && (
              <ul className="space-y-4 mb-10">
                {items.map((item) => {
                  const Icon = ICONS[item.icon] || ICONS.shieldRaw;

                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-blue-700" />
                      </div>

                      <div>
                        <div className="font-semibold text-slate-900 text-[15px]">
                          {item.title}
                        </div>
                        <div className="text-[13px] text-slate-500 leading-relaxed mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="flex flex-wrap gap-3">
              <a
                href={primaryButton.href}
                className="bg-slate-900 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:bg-slate-800 transition"
              >
                {primaryButton.label}
              </a>

              {secondaryButton && (
                secondaryButton.modal ? (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-700 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition hover:-translate-y-0.5"
                  >
                    {secondaryButton.label}
                  </button>
                ) : (
                  <a
                    href={secondaryButton.href}
                    className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-700 px-7 py-3.5 rounded-xl font-semibold text-[15px] transition hover:-translate-y-0.5"
                  >
                    {secondaryButton.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <TeknikDokumanModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={secondaryButton?.productName ?? "Ürün"}
      />
    </section>
  );
}
