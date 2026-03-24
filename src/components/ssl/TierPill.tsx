"use client";

import { ICONS } from "@/lib/icons";
import type { Product } from "@/lib/ssl/types";

type Props = {
  tier: Product["tier"] | "Basic" | "Premium" | "Enterprise";
};

export default function TierPill({ tier }: Props) {
  if (tier === "Premium") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-bold">
        <ICONS.sparkles className="w-3.5 h-3.5" />
        Premium
      </span>
    );
  }

  if (tier === "Enterprise") {
    return (
      <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-bold">
        Enterprise
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-800 px-3 py-1 text-xs font-bold">
      Basic
    </span>
  );
}
