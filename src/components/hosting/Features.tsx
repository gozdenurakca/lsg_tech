"use client";

import { ICONS } from "@/lib/icons";

type IconKey = keyof typeof ICONS;
export type FeatureIconKey = keyof typeof ICONS;

export type FeatureItem = {
  icon: IconKey;
  tag: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  accent?: string;
  bg?: string;
  glow?: string;
  featured?: boolean;
};

type Props = {
  variant?: "bayilik" | "hosting" | "teknoloji";
  badge?: string;
  title: string;
  highlight?: string;
  features: FeatureItem[];
  trustItems?: string[];
};

export default function Features({
  variant = "hosting",
  badge,
  title,
  highlight,
  features,
  trustItems,
}: Props) {
  const isBayilik = variant === "bayilik";

  const CheckIcon = ICONS.check;

  return (
    <section className="relative overflow-hidden bg-[#F7F9FF] py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle,#CBD5E1 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          {badge && (
            <p className="mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-indigo-500">
              <span className="h-[1px] w-7 bg-indigo-500/40" />
              {badge}
              <span className="h-[1px] w-7 bg-indigo-500/40" />
            </p>
          )}

          <h2 className="text-4xl font-bold leading-tight text-slate-900">
            {title}{" "}
            {highlight && <span className="text-indigo-500">{highlight}</span>}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, i) => {
            const Icon = ICONS[item.icon] || ICONS.shield;

            return (
              <div
                key={`${item.title}-${i}`}
                className={`relative rounded-2xl p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  item.featured
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white"
                }`}
              >
                {isBayilik && item.glow && (
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${item.glow}, transparent 70%)`,
                    }}
                  />
                )}

                <span className="absolute bottom-[-10px] right-4 text-[80px] font-bold opacity-[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                    item.bg || "bg-indigo-50"
                  }`}
                  style={
                    isBayilik && item.glow
                      ? {
                          background: item.glow,
                          border: `1px solid ${item.glow}`,
                        }
                      : undefined
                  }
                >
                  <Icon
                    size={20}
                    className={
                      item.accent?.startsWith("#")
                        ? undefined
                        : item.accent || "text-indigo-500"
                    }
                    style={
                      item.accent?.startsWith("#")
                        ? { color: item.accent }
                        : undefined
                    }
                  />
                </div>

                <p
                  className={`mb-3 text-xs uppercase tracking-wider ${
                    item.accent?.startsWith("#")
                      ? ""
                      : item.accent || "text-indigo-500"
                  }`}
                  style={
                    item.accent?.startsWith("#")
                      ? { color: item.accent }
                      : undefined
                  }
                >
                  {item.tag}
                </p>

                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>

                <p
                  className={`mb-8 text-sm leading-relaxed ${
                    item.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {item.desc}
                </p>

                <div
                  className={`flex items-baseline gap-2 rounded-lg border px-4 py-3 ${
                    item.featured
                      ? "border-white/10 bg-white/5"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      item.accent?.startsWith("#")
                        ? ""
                        : item.accent || "text-indigo-500"
                    }`}
                    style={
                      item.accent?.startsWith("#")
                        ? { color: item.accent }
                        : undefined
                    }
                  >
                    {item.metric}
                  </span>

                  <span className="text-xs text-slate-400">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {trustItems && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {trustItems.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-2 text-xs font-medium text-slate-500"
              >
                <CheckIcon size={12} />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
