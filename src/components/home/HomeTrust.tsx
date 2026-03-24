const TESTIMONIALS = [
  {
    quote:
      "LSG ekibi EV SSL kurulumumuzu saatler içinde tamamladı. DigiCert sertifikamız anında aktif oldu, hiç beklemedik.",
    name: "Ahmet Yılmaz",
    title: "CTO, FinTech A.Ş.",
    initials: "AY",
    color: "bg-blue-600",
  },
  {
    quote:
      "Wildcard sertifika seçiminde hangi ürünün bize uygun olduğunu bilemedik. LSG danışmanları doğru seçeneği gösterdi.",
    name: "Selin Kaya",
    title: "IT Müdürü, E-Ticaret Platformu",
    initials: "SK",
    color: "bg-indigo-600",
  },
  {
    quote:
      "Yenileme döneminde sertifikamız otomatik aktif oldu, biz fark etmedik bile. Gerçekten sıfır kesinti.",
    name: "Murat Demir",
    title: "Sistem Yöneticisi, Lojistik Grup",
    initials: "MD",
    color: "bg-sky-600",
  },
];

const LOGOS = [
  "/logos/digicert.svg",
  "/logos/geotrust.png",
  "/logos/thawte.png",
  "/logos/sectigo.png",
  "/logos/cloudflare.png",
  "/logos/keeper.png",
];

export default function HomeTrust() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/50 font-semibold mb-3">
            Referanslar
          </p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-slate-900 leading-tight">
            Müşterilerimiz ne diyor?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="text-[48px] leading-none text-slate-100 font-serif mb-4 select-none">
                "
              </div>

              <p className="text-[14px] text-slate-600 leading-relaxed flex-1 mb-8">
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-[12px] text-slate-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16" />
      </div>
    </section>
  );
}
