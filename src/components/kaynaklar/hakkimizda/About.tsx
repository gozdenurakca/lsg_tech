"use client";

import { ICONS } from "@/lib/icons";

const features = [
  {
    icon: "shieldCheck",
    label: "10.000+ Aktif Sertifika",
    sub: "Türkiye genelinde aktif kurumsal güvenlik yönetimi",
    c: "#0EA5E9",
  },
  {
    icon: "server",
    label: "Enterprise SLA Garantisi",
    sub: "Öncelikli doğrulama ve hızlı sertifika issuance",
    c: "#6366F1",
  },
  {
    icon: "globe2",
    label: "Global Uyumluluk",
    sub: "Tüm modern tarayıcılar ve platformlar ile tam uyum",
    c: "#10B981",
  },
  {
    icon: "cpu",
    label: "REST API & Otomasyon",
    sub: "Provisioning ve lifecycle yönetimi tek endpoint'ten",
    c: "#F59E0B",
  },
  {
    icon: "activity",
    label: "Partner Ekosistemi",
    sub: "250+ kurumsal referans, bayi ve teknoloji ağı",
    c: "#EC4899",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[.18em] text-sky-600 font-semibold mb-4">
            Biz Kimiz
          </p>

          <h2 className="text-3xl font-bold text-slate-900 leading-tight mb-6">
            Güvenli Altyapılar,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Sürdürülebilir Teknoloji
            </span>
          </h2>

          <div className="space-y-4 text-slate-600 text-[15px] leading-relaxed">
            <p>
              LSG Teknoloji, işletmelerin dijital varlıklarını korumak için
              global sertifika otoriteleri ile entegre çalışan profesyonel
              güvenlik çözümleri sunar.
            </p>

            <p>
              <span className="text-sky-600 font-semibold">
                DigiCert ve Sectigo
              </span>{" "}
              gibi dünya lideri markalarla yetkili bayi anlaşmalarıyla;
              güvenilir, ölçeklenebilir ve yüksek performanslı SSL altyapıları
              sağlıyoruz.
            </p>

            <p>
              Finans, e-ticaret, SaaS ve kurumsal IT altyapılarında binlerce
              aktif sertifika yönetimi ile operasyonel sürekliliği garanti
              ediyoruz.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {features.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${item.c}18`,
                    border: `1px solid ${item.c}30`,
                  }}
                >
                  <Icon size={16} style={{ color: item.c }} strokeWidth={1.8} />
                </div>

                <div>
                  <div className="font-semibold text-slate-900 text-sm mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
