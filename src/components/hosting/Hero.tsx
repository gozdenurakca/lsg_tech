"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ICONS } from "@/lib/icons";

type IconKey = keyof typeof ICONS;

type Stat = { value: string; label: string; suffix?: string };
type TrustItem = { icon?: IconKey; text: string };
type Step = string;

type Props = {
  variant?: "bayilik" | "hosting" | "teknoloji";
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  ctas?: {
    primary?: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
  stats?: Stat[];
  trustItems?: TrustItem[];
  steps?: Step[];
};

const TOKENS = {
  bayilik: {
    accent: "#3B82F6",
    accentB: "#38BDF8",
    glow: "rgba(59,130,246,0.18)",
    glowStrong: "rgba(59,130,246,0.38)",
    soft: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.20)",
    label: "rgba(147,210,255,0.85)",
    dot: "#38BDF8",
    gradientBtn: "linear-gradient(135deg,#1D6FE8,#38BDF8)",
    gradientTitle: "linear-gradient(90deg,#93C5FD,#38BDF8,#93C5FD)",
    topLine: "linear-gradient(90deg,#1D6FE8,#38BDF8,transparent)",
    shimmerFrom: "#93C5FD",
    shimmerVia: "#38BDF8",
  },
  hosting: {
    accent: "#818CF8",
    accentB: "#A78BFA",
    glow: "rgba(129,140,248,0.18)",
    glowStrong: "rgba(129,140,248,0.38)",
    soft: "rgba(99,102,241,0.08)",
    border: "rgba(129,140,248,0.20)",
    label: "rgba(199,210,254,0.85)",
    dot: "#818CF8",
    gradientBtn: "linear-gradient(135deg,#6366F1,#A78BFA)",
    gradientTitle: "linear-gradient(90deg,#C7D2FE,#818CF8,#C7D2FE)",
    topLine: "linear-gradient(90deg,#6366F1,#A78BFA,transparent)",
    shimmerFrom: "#C7D2FE",
    shimmerVia: "#818CF8",
  },
  teknoloji: {
    accent: "#38BDF8",
    accentB: "#22D3EE",
    glow: "rgba(56,189,248,0.18)",
    glowStrong: "rgba(56,189,248,0.38)",
    soft: "rgba(14,165,233,0.08)",
    border: "rgba(56,189,248,0.20)",
    label: "rgba(186,230,255,0.85)",
    dot: "#38BDF8",
    gradientBtn: "linear-gradient(135deg,#0284C7,#22D3EE)",
    gradientTitle: "linear-gradient(90deg,#BAE6FF,#38BDF8,#BAE6FF)",
    topLine: "linear-gradient(90deg,#0284C7,#22D3EE,transparent)",
    shimmerFrom: "#BAE6FF",
    shimmerVia: "#38BDF8",
  },
} as const;

const CSS = `
  @keyframes hFadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes hFadeIn {
    from { opacity:0; }
    to   { opacity:1; }
  }
  @keyframes hSlideRight {
    from { opacity:0; transform:translateX(36px); }
    to   { opacity:1; transform:translateX(0);    }
  }
  @keyframes hExpandLine {
    from { width:0; opacity:0; }
    to   { width:2.5rem; opacity:1; }
  }
  @keyframes hShimmer {
    0%   { background-position:-200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes hPulse {
    0%,100% { opacity:1;   transform:scale(1);   }
    50%     { opacity:0.4; transform:scale(1.3); }
  }
  @keyframes hFloat {
    0%,100% { transform:translateY(0);    }
    50%     { transform:translateY(-6px); }
  }

  .h-badge  { animation: hFadeUp     .55s cubic-bezier(.22,1,.36,1) both; animation-delay:.05s; }
  .h-title  { animation: hFadeUp     .65s cubic-bezier(.22,1,.36,1) both; animation-delay:.15s; }
  .h-line   { animation: hExpandLine  .6s cubic-bezier(.22,1,.36,1) both; animation-delay:.30s; }
  .h-desc   { animation: hFadeUp     .65s cubic-bezier(.22,1,.36,1) both; animation-delay:.32s; }
  .h-ctas   { animation: hFadeUp     .65s cubic-bezier(.22,1,.36,1) both; animation-delay:.44s; }
  .h-trust  { animation: hFadeUp     .65s cubic-bezier(.22,1,.36,1) both; animation-delay:.54s; }
  .h-right  { animation: hSlideRight .75s cubic-bezier(.22,1,.36,1) both; animation-delay:.25s; }

  .h-shimmer {
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: hShimmer 4s linear infinite;
  }
  .h-dot { animation: hPulse 2.2s ease-in-out infinite; }

  .h-statcard {
    animation: hFadeIn .7s ease both;
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .h-statcard:hover { animation: hFloat 3s ease-in-out infinite; }
`;

function AnimatedNumber({
  target,
  suffix,
}: {
  target: string;
  suffix?: string;
}) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }
    const duration = 1800;
    const step = (ts: number, t0: number) => {
      const p = Math.min((ts - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 4);
      setDisplay((e * numeric).toFixed(target.includes(".") ? 1 : 0));
      if (p < 1) requestAnimationFrame((ts2) => step(ts2, t0));
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame((ts) => step(ts, ts));
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatCard({
  stat,
  t,
  delay,
}: {
  stat: Stat;
  t: (typeof TOKENS)[keyof typeof TOKENS];
  delay: string;
}) {
  return (
    <div
      className="h-statcard relative flex flex-col justify-between p-6 rounded-2xl overflow-hidden cursor-default"
      style={{
        animationDelay: delay,
        background: "rgba(255,255,255,0.045)",
        border: `1px solid ${t.border}`,
        backdropFilter: "blur(16px)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.05) inset, 0 4px 28px rgba(0,0,0,0.35)",
      }}
    >
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-6 right-6 h-px"
        style={{
          background: `linear-gradient(90deg,transparent,${t.accent}70,transparent)`,
        }}
      />
      <div
        className="text-[2.1rem] font-black tracking-tight leading-none mb-2"
        style={{ color: "#F0F8FF" }}
      >
        {stat.value === "24/7" ? (
          "24/7"
        ) : (
          <AnimatedNumber target={stat.value} suffix={stat.suffix} />
        )}
      </div>
      <div
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: t.label }}
      >
        {stat.label}
      </div>
    </div>
  );
}
function FeaturePanel({
  trustItems,
  steps,
  t,
}: {
  trustItems?: TrustItem[];
  steps?: Step[];
  t: (typeof TOKENS)[keyof typeof TOKENS];
}) {
  return (
    <div
      className="rounded-2xl p-8 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${t.border}`,
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 4px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
      }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
        style={{ color: t.label }}
      >
        Partner Süreci
      </p>

      {steps && (
        <div className="space-y-3 mb-6">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={
                  i === 0
                    ? {
                        background: t.gradientBtn,
                        color: "#fff",
                        boxShadow: `0 0 14px ${t.glowStrong}`,
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.25)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {i + 1}
              </div>
              <p
                className="text-sm font-medium"
                style={{
                  color:
                    i === 0
                      ? "rgba(240,248,255,0.95)"
                      : "rgba(255,255,255,0.28)",
                }}
              >
                {step}
              </p>
            </div>
          ))}
        </div>
      )}

      {trustItems && trustItems.length > 0 && (
        <>
          <div
            className="border-t my-5"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
          />
          <div className="grid grid-cols-2 gap-2">
            {trustItems.map((item) => {
              const Icon = item.icon ? ICONS[item.icon] : null;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-[11px] font-medium px-3 py-2 rounded-lg"
                  style={{
                    background: t.soft,
                    border: `1px solid ${t.border}`,
                    color: t.label,
                  }}
                >
                  {Icon ? (
                    <Icon
                      size={12}
                      style={{ color: t.accent, flexShrink: 0 }}
                    />
                  ) : (
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: t.dot }}
                    />
                  )}
                  {item.text}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function Hero({
  variant = "hosting",
  badge,
  title,
  highlight,
  description,
  ctas,
  stats,
  trustItems,
  steps,
}: Props) {
  const t = TOKENS[variant];
  const isBayilik = variant === "bayilik";
  const hasRight = !!(stats && stats.length > 0) || !!(trustItems || steps);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#060D1F",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div
        className="absolute top-0 left-0 w-full h-[3px] z-10"
        style={{ background: t.topLine }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${t.glow} 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle,rgba(255,255,255,0.02) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.032) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.032) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
          style={{
            background: `linear-gradient(90deg,transparent 0%,${t.glow} 35%,${t.glow} 65%,transparent 100%)`,
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
        <div
          className={`grid gap-14 lg:gap-24 items-center ${hasRight ? "lg:grid-cols-2" : "max-w-3xl mx-auto text-center"}`}
        >
          <div className={hasRight ? "" : "flex flex-col items-center"}>
            <div
              className="h-badge inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-1.5 rounded-full mb-8 border"
              style={{
                background: t.soft,
                borderColor: t.border,
                color: t.label,
                boxShadow: `0 0 16px ${t.glow}`,
              }}
            >
              <span
                className="h-dot w-1.5 h-1.5 rounded-full"
                style={{ background: t.dot }}
              />
              {badge}
            </div>

            <h1
              className="h-title font-black leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(38px,4.8vw,64px)", color: "#F0F8FF" }}
            >
              {title}
              {highlight && (
                <span
                  className="h-shimmer block"
                  style={{
                    backgroundImage: `linear-gradient(90deg,${t.shimmerFrom} 0%,${t.shimmerVia} 40%,#fff 55%,${t.shimmerVia} 70%,${t.shimmerFrom} 100%)`,
                  }}
                >
                  {highlight}
                </span>
              )}
            </h1>

            <div
              className="h-line h-[3px] rounded-full mb-5"
              style={{ background: t.gradientBtn }}
            />

            <p
              className="h-desc text-base leading-relaxed max-w-md mb-9"
              style={{ color: "rgba(148,163,184,0.85)" }}
            >
              {description}
            </p>

            {ctas && (
              <div className="h-ctas flex flex-wrap gap-3 mb-10">
                {ctas.primary && (
                  <Link
                    href={ctas.primary.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white transition hover:-translate-y-0.5"
                    style={{
                      background: t.gradientBtn,
                      boxShadow: `0 0 28px ${t.glowStrong}, 0 4px 16px rgba(0,0,0,0.4)`,
                    }}
                  >
                    {ctas.primary.label}
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path
                        d="M2 6.5h9M8 3l3.5 3.5L8 10"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
                {ctas.secondary && (
                  <Link
                    href={ctas.secondary.href}
                    className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold text-sm transition"
                    style={{
                      color: t.label,
                      border: `1px solid ${t.border}`,
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {ctas.secondary.label}
                  </Link>
                )}
              </div>
            )}

            {trustItems && isBayilik && (
              <div className="h-trust flex flex-wrap gap-2">
                {trustItems.map((item) => {
                  const Icon = item.icon ? ICONS[item.icon] : null;
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-lg"
                      style={{
                        color: t.label,
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${t.border}`,
                      }}
                    >
                      {Icon ? (
                        <Icon size={11} style={{ color: t.accent }} />
                      ) : (
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                        >
                          <circle
                            cx="5.5"
                            cy="5.5"
                            r="5"
                            stroke={t.accent}
                            strokeOpacity=".6"
                          />
                          <path
                            d="M3 5.5l1.7 1.7L8 3.5"
                            stroke={t.accent}
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {item.text}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {hasRight && (
            <div className="h-right">
              {stats && stats.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <StatCard
                      key={i}
                      stat={stat}
                      t={t}
                      delay={`${0.3 + i * 0.08}s`}
                    />
                  ))}
                </div>
              ) : (
                <FeaturePanel trustItems={trustItems} steps={steps} t={t} />
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,transparent,rgba(6,13,31,0.8))",
        }}
      />
    </section>
  );
}
