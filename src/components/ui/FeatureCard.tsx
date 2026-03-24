"use client";

import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent?: string;
};

export default function FeatureCard({
  title,
  desc,
  icon: Icon,
  accent = "#0EA5E9",
}: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-300">
      {/* ICON */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: `${accent}15`,
          border: `1px solid ${accent}30`,
        }}
      >
        <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>

      {/* DESC */}
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
