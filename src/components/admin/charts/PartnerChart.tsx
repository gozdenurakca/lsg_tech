"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

type Props = {
  data: { date: string; count: number }[]
}

export default function PartnerChart({ data }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="font-semibold text-slate-800 mb-4">
        Son 30 Gün Başvuru Grafiği
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
