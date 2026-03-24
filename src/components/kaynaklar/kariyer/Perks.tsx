"use client";

import { ICONS } from "@/lib/icons";

const perks = [
  {
    icon: "activity",
    title: "Hızlı Büyüme",
    desc: "Türkiye'nin lider siber güvenlik şirketlerinden birinde kariyerinizi hızla ilerletin. Net büyüme yolları ve terfi süreçleri.",
    accent: "#0EA5E9",
  },
  {
    icon: "book",
    title: "Sürekli Öğrenme",
    desc: "Yıllık eğitim bütçesi, sertifikasyon desteği (DigiCert, AWS, CKA) ve teknik workshop'lara tam erişim.",
    accent: "#6366F1",
  },
  {
    icon: "users",
    title: "Güçlü Ekip Kültürü",
    desc: "Açık iletişim, psikolojik güvenlik ve birbirini destekleyen ekip dinamiği. Herkesin sesi duyulur.",
    accent: "#10B981",
  },
];

export default function Perks() {
  return (
    <section className="relative py-32 bg-[#020A18] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%,rgba(14,165,233,0.1) 0%,transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p
            className="text-xs uppercase tracking-[.18em] text-sky-400 mb-4"
            style={{ fontFamily: "'DM Sans',sans-serif" }}
          >
            Avantajlar
          </p>
          <h2
            className="text-4xl font-bold text-blue-100"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Neden{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              LSG Teknoloji?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {perks.map((perk, i) => {
            const Icon = ICONS[perk.icon];
            return (
              <div
                key={i}
                className="relative bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition group"
              >
                <span className="absolute bottom-0 right-4 text-[70px] font-bold text-white/[0.03] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${perk.accent}20`,
                    border: `1px solid ${perk.accent}30`,
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: perk.accent }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-lg font-semibold text-blue-100 mb-3">
                  {perk.title}
                </h3>
                <p
                  className="text-sm text-blue-200/70 leading-relaxed"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
