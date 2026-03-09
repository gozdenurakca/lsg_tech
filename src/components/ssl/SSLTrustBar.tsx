import { Shield, Lock, BadgeCheck, Zap } from "lucide-react";

interface TrustItem {
  icon: "shield" | "lock" | "badge" | "zap";
  text: string;
}

interface SSLTrustBarProps {
  items: TrustItem[];
}

const iconMap = {
  shield: Shield,
  lock: Lock,
  badge: BadgeCheck,
  zap: Zap,
};

export default function SSLTrustBar({ items }: SSLTrustBarProps) {
  return (
    <section className="border-y bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 shadow-sm"
              >
                <Icon className="w-4 h-4 text-blue-900" />
                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
