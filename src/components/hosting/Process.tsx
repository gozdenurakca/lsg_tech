"use client";

import Link from "next/link";

type Step = {
  number: string;
  title: string;
  desc: string;
  duration: string;
};

type CTA = {
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
};

type Props = {
  variant?: "bayilik" | "hosting" | "teknoloji";

  badge?: string;
  title: string;
  highlight?: string;

  steps: Step[];

  cta?: CTA;
};

export default function Process({
  variant = "hosting",
  badge,
  title,
  highlight,
  steps,
  cta,
}: Props) {
  const isHosting = variant === "hosting";

  return (
    <section className="relative py-32 bg-[#020A18] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            variant === "hosting"
              ? "radial-gradient(ellipse 80% 50% at 50% 50%,rgba(99,102,241,0.12) 0%,transparent 70%)"
              : "radial-gradient(ellipse 80% 50% at 50% 50%,rgba(30,106,220,0.14) 0%,transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          {badge && (
            <p className="text-xs tracking-[0.18em] uppercase text-indigo-400 mb-4">
              {badge}
            </p>
          )}

          <h2 className="text-4xl font-bold text-white leading-tight">
            {title}{" "}
            {highlight && (
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition">
                <span className="absolute bottom-[-10px] right-4 text-[80px] font-bold text-white/5">
                  {step.number}
                </span>

                <p className="text-indigo-400 text-xs tracking-widest mb-4">
                  ADIM {step.number}
                </p>

                <h3 className="text-white font-semibold mb-3">{step.title}</h3>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>

                <span className="text-indigo-300 text-xs flex items-center gap-2">
                  ⏱ {step.duration}
                </span>
              </div>

              {isHosting && i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-30px] w-[60px] h-[1px] bg-gradient-to-r from-indigo-500 to-indigo-300" />
              )}
            </div>
          ))}
        </div>

        {cta && (
          <div className="mt-20 bg-white/5 border border-white/10 rounded-2xl px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-lg font-semibold text-white">{cta.title}</p>

              <p className="text-sm text-white/70">{cta.description}</p>
            </div>

            <Link
              href={cta.button.href}
              className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/40 transition"
            >
              {cta.button.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
