type Stat = {
  value: string;
  label: string;
  sub?: string;
};

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border border-slate-200 rounded-2xl p-6"
        >
          <div className="text-2xl font-bold text-slate-900">{s.value}</div>
          <div className="text-xs uppercase text-sky-600 font-medium">
            {s.label}
          </div>
          {s.sub && <div className="text-xs text-slate-500">{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}
