"use client";

import type { ReactNode } from "react";
import { ICONS } from "@/lib/icons";

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
  @keyframes phFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
  @keyframes phFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
  @keyframes phShimmer{0%{background-position:-200% center}100%{background-position:200% center}}
  .ph-h1{font-family:'Syne',sans-serif;animation:phFadeUp .7s ease both .2s}
  .ph-sub{font-family:'DM Sans',sans-serif;animation:phFadeUp .7s ease both .4s}
  .ph-actions{animation:phFadeUp .7s ease both .55s}
  .ph-bottom{animation:phFadeUp .8s ease both .5s}
  .ph-shimmer{background:linear-gradient(90deg,#fff 0%,#7DD3FC 40%,#38BDF8 60%,#fff 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:phShimmer 4s linear infinite}
  .ph-orb1{animation:phFloat 10s ease-in-out infinite}
  .ph-orb2{animation:phFloat 14s ease-in-out infinite reverse}
  .ph-stat{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);backdrop-filter:blur(12px);transition:transform .25s,border-color .25s}
  .ph-stat:hover{transform:translateY(-4px);border-color:rgba(14,165,233,0.35)}
  .ph-dm{font-family:'DM Sans',sans-serif}
`;

export interface PageHeroProps {
  label: string;
  titleShimmer: string;
  titleStatic: string;
  subtitle: string;
  centered?: boolean;
  minHeight?: string;
  actions?: ReactNode;
  bottom?: ReactNode;
  icon?: keyof typeof ICONS;
}

export default function PageHero({
  label,
  titleShimmer,
  titleStatic,
  subtitle,
  centered = false,
  minHeight = "80vh",
  actions,
  bottom,
  icon,
}: PageHeroProps) {
  return (
    <section
      className="relative bg-[#020A18] text-white overflow-hidden"
      style={{ minHeight }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%,rgba(14,165,233,0.22) 0%,transparent 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg,transparent,#0EA5E9 30%,#38BDF8 60%,transparent)",
        }}
      />

      <div
        className="ph-orb1 absolute bottom-0 -left-40 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 65%)",
        }}
      />
      <div
        className="ph-orb2 absolute top-1/3 -right-48 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 65%)",
        }}
      />

      <div
        className={`relative max-w-6xl mx-auto px-6 lg:px-12 pt-40 pb-32 ${centered ? "text-center" : ""}`}
      >
        <div className={centered ? "max-w-3xl mx-auto" : "max-w-3xl"}>
          <div
            className={`inline-flex items-center gap-2 mb-8 ${centered ? "justify-center" : ""}`}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: "linear-gradient(135deg,#0EA5E9,#38BDF8)",
                boxShadow: "0 0 8px #38BDF8",
              }}
            />
            <span
              className="ph-dm text-xs font-medium tracking-[.18em] uppercase"
              style={{ color: "#7DD3FC" }}
            >
              {label}
            </span>
          </div>

          {!centered && (
            <div
              className="w-12 h-[2px] mb-8 rounded-full"
              style={{
                background: "linear-gradient(90deg,#0EA5E9,#38BDF8)",
              }}
            />
          )}

          <h1 className="ph-h1 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="ph-shimmer">{titleShimmer}</span>
            <br />
            <span style={{ color: "#E2EFFF" }}>{titleStatic}</span>
          </h1>

          <p
            className={`ph-sub text-base leading-relaxed mb-12 ${centered ? "max-w-2xl mx-auto" : "max-w-xl"}`}
            style={{ color: "rgba(186,214,255,0.72)", fontWeight: 300 }}
          >
            {subtitle}
          </p>

          {actions && (
            <div
              className={`ph-actions flex gap-4 flex-wrap ${centered ? "justify-center" : ""}`}
            >
              {actions}
            </div>
          )}
        </div>

        {bottom && <div className="ph-bottom mt-16">{bottom}</div>}
      </div>
    </section>
  );
}
