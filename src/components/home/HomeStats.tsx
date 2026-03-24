const STATS = [
  { value: "10,000+", label: "Aktif SSL Sertifikası" },
  { value: "5,000+", label: "Hosting Müşterisi" },
  { value: "99.9%", label: "Uptime Garantisi" },
  { value: "7/24", label: "Türkçe Teknik Destek" },
  { value: "15+", label: "Yıllık Tecrübe" },
  { value: "500+", label: "Aktif Bayi" },
];

export default function HomeStats() {
  return (
    <div className="bg-[#040E21] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 divide-x divide-blue-900/30">
          {STATS.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="text-[26px] font-extrabold text-white">
                {s.value}
              </div>
              <div className="text-[11px] text-blue-200/35 mt-0.5 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
