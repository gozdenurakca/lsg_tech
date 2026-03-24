"use client";

import {
  PieChart, Pie, Cell,
  ResponsiveContainer, Tooltip,
} from "recharts";

type Item = { name: string; value: number };

const COLORS = ["#6366f1", "#10b981", "#ef4444"];
const LABELS: Record<string, string> = {
  "Yeni": "Bekliyor",
  "Onaylandı": "Onaylandı",
  "Reddedildi": "Reddedildi",
};

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-md px-3 py-2 text-xs">
      <p className="font-semibold text-slate-700">{payload[0].name}</p>
      <p style={{ color: payload[0].payload.fill }}>{payload[0].value} başvuru</p>
    </div>
  );
}

export default function PartnerStatusChart({ data }: { data: Item[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="mb-5">
        <h3 className="font-semibold text-slate-800 text-sm">Başvuru Durumu</h3>
        <p className="text-xs text-slate-400 mt-0.5">Toplam {total} başvuru</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-48 w-48 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                innerRadius={48}
                paddingAngle={3}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-3">
          {data.map((item, i) => {
            const pct = total > 0 ? Math.round((item.value / total) * 100) : 0;
            return (
              <div key={item.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-slate-700">{LABELS[item.name] ?? item.name}</span>
                  <span className="text-slate-500">{item.value} ({pct}%)</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: COLORS[i % COLORS.length] }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
