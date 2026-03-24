"use client";

const milestones = [
  {
    year: "2011",
    title: "Kuruluş",
    desc: "LSG Teknoloji, SSL güvenlik alanında hizmet vermeye başladı.",
  },
  {
    year: "2015",
    title: "DigiCert Ortaklığı",
    desc: "Dünya lideri CA ile yetkili bayi anlaşması imzalandı.",
  },
  {
    year: "2019",
    title: "Enterprise Büyüme",
    desc: "250+ kurumsal referansla kamu ve finans sektörüne girdi.",
  },
  {
    year: "2023",
    title: "API Platform",
    desc: "REST API ve WAF altyapısı ile teknoloji partner ağı kuruldu.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-[#F7F9FC] border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[.18em] text-sky-600 font-semibold mb-3">
            Yolculuğumuz
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Kilometre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Taşları
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="relative bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden"
            >
              <span className="absolute bottom-2 right-3 text-[56px] font-bold text-slate-100 select-none pointer-events-none leading-none">
                {m.year.slice(2)}
              </span>

              <span className="inline-block text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 border border-sky-100 rounded-full px-2.5 py-1 mb-4">
                {m.year}
              </span>

              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {m.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
