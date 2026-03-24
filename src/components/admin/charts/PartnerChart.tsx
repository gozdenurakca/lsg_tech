"use client";

import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

type Props = { data: { date: string; count: number }[] };

function shortDate(date: string) {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}`;
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-md px-3 py-2 text-xs">
      <p className="font-semibold text-slate-700 mb-0.5">{label}</p>
      <p className="text-blue-600">{payload[0].value} başvuru</p>
    </div>
  );
}

export default function PartnerChart({ data }: Props) {
  const display = data.map((d) => ({ ...d, label: shortDate(d.date) }));

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-semibold text-slate-800 text-sm">Son 30 Gün — Başvuru Grafiği</h2>
          <p className="text-xs text-slate-400 mt-0.5">Günlük partner başvuru sayısı</p>
        </div>
        <span className="text-xs bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 rounded-full">
          {data.reduce((s, d) => s + d.count, 0)} toplam
        </span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={display} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#4f46e5"
              strokeWidth={2.5}
              dot={{ fill: "#4f46e5", r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#4f46e5" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
