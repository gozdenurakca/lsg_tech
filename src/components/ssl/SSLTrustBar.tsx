"use client";

import { ICONS } from "@/lib/icons";

type Item = {
  icon: keyof typeof ICONS;
  text: string;
};

type Props = {
  items: Item[];
};

export default function SslTrustBar({ items }: Props) {
  return (
    <section className="relative bg-slate-950 border-y border-white/5 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 py-6">
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? ICONS.shield;

            return (
              <div
                key={item.text}
                className="group flex items-center gap-2 text-slate-300 text-[13px] font-medium transition hover:text-white"
              >
                <Icon
                  size={15}
                  className="text-blue-400 flex-shrink-0 transition group-hover:scale-110"
                />

                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
