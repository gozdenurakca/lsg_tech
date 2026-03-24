"use client";

type Period = 1 | 2 | 3;

type Props = {
  value: Period;
  onChange: (period: Period) => void;
};

const OPTIONS: { label: string; value: Period }[] = [
  { label: "1 Yıl", value: 1 },
  { label: "2 Yıl", value: 2 },
  { label: "3 Yıl", value: 3 },
];

export default function PricingToggle({ value, onChange }: Props) {
  return (
    <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${
            value === opt.value
              ? "bg-white text-blue-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
