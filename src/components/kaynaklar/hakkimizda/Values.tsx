"use client";

import { ICONS } from "@/lib/icons";
const values = [
  {
    icon: "lock",
    title: "Güven",
    desc: "Sertifika yönetiminden WAF çözümlerine kadar her adımda maksimum güvenlik. ISO 27001 sertifikalı süreçlerle verileriniz daima korunur.",
    accent: "#0EA5E9",
  },
  {
    icon: "users",
    title: "Uzmanlık",
    desc: "Kurumsal IT altyapılarında 10+ yıl deneyimli teknik ekip. DigiCert ve Sectigo gibi global CA'larla birinci sınıf iş ortaklığı.",
    accent: "#6366F1",
  },
  {
    icon: "award",
    title: "Sürdürülebilirlik",
    desc: "Uzun vadeli, ölçeklenebilir güvenlik mimarileri. Bugün kurduğunuz altyapı yarının gereksinimlerine de hazır şekilde tasarlanır.",
    accent: "#10B981",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[.18em] text-sky-600 font-semibold mb-3">
            Temel Değerlerimiz
          </p>

          <h2 className="text-3xl font-bold text-slate-900">
            Bizi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Farklı
            </span>{" "}
            Kılan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = ICONS[v.icon];

            return (
              <div
                key={i}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${v.accent}60, ${v.accent}, ${v.accent}60)`,
                  }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 mt-2"
                  style={{
                    background: `${v.accent}15`,
                    border: `1px solid ${v.accent}30`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: v.accent }}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {v.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>

                <span className="absolute bottom-4 right-5 text-[56px] font-bold text-slate-100 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
