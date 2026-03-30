"use client";

const trustItems = [
  {
    val: "99.99%",
    label: "Kesintisiz Hizmet",
    desc: "Son 36 ayda ölçülen kesintisiz hizmet oranı.",
  },
  {
    val: "24/7",
    label: "Uzman Teknik Destek",
    desc: "Ortalama 3 dakika yanıt süresi ile 7/24 destek.",
  },
  {
    val: "ISO 27001",
    label: "Kurumsal Standart",
    desc: "Uluslararası güvenlik yönetim sistemi sertifikası.",
  },
];

export default function Trust() {
  return (
    <section className="relative py-24 bg-[#020A18] overflow-hidden">
      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#4A90D9 1px,transparent 1px),linear-gradient(to bottom,#4A90D9 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%,rgba(14,165,233,0.1) 0%,transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[.18em] text-sky-400 mb-4 font-medium">
            Neden LSG Teknoloji
          </p>

          <h2 className="font-display text-4xl font-bold text-blue-100 tracking-tight">
            Rakamlarla{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Güven
            </span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-5">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition"
            >
              <div className="font-display text-3xl font-bold mb-2 text-blue-100">
                {item.val}
              </div>

              <div className="text-xs uppercase tracking-widest text-sky-400 mb-3 font-medium">
                {item.label}
              </div>

              <div className="text-sm text-blue-200/70 leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
