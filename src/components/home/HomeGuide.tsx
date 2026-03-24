import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ArrowIcon = ICONS.arrowRight;
const ZapIcon = ICONS.zap;
const GlobeIcon = ICONS.globe;

const CAMPAIGNS = [
  {
    tag: "Sınırlı Süre",
    tagColor: "bg-orange-500",
    title: "Wildcard SSL'de %30 İndirim",
    desc: "Tüm alt domainlerinizi tek sertifikayla koruyun. Mart sonuna kadar geçerli.",
    cta: "Hemen Al",
    href: "/ssl/wildcard",
    bg: "bg-[#EEF4FF]",
    icon: "lock",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    accent: "border-blue-200",
  },
  {
    tag: "Yeni Paket",
    tagColor: "bg-indigo-500",
    title: "Hosting + Alan Adı Paketi",
    desc: "Business hosting alın, .com.tr alan adınız hediyemiz. Tek fatura.",
    cta: "Paketi Gör",
    href: "/hosting/paket",
    bg: "bg-[#F0EEFF]",
    icon: "server",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    accent: "border-indigo-200",
  },
  {
    tag: "Öne Çıkan",
    tagColor: "bg-emerald-500",
    title: "Web Güvenliği + SSL Paketi",
    desc: "WAF, malware tarama ve DV SSL — siteniz uçtan uca güvende.",
    cta: "İncele",
    href: "/guvenlik/paket",
    bg: "bg-[#EDFAF4]",
    icon: "shield",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    accent: "border-emerald-200",
  },
];

export default function HomeGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/50 font-semibold mb-2">
              Kampanyalar
            </p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-slate-900 leading-tight">
              Öne Çıkan Fırsatlar
            </h2>
          </div>
          <Link
            href="/kampanyalar"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-900 hover:gap-2.5 transition-all"
          >
            Tümünü Gör <ArrowIcon size={14} />{" "}
          </Link>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] p-10 md:p-14 mb-6 border border-blue-900/30 shadow-xl">
          <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-blue-500/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-[11px] font-bold mb-5">
                <ZapIcon size={11} className="fill-white" />
                Mart Kampanyası{" "}
              </div>
              <h3 className="text-[clamp(26px,3.5vw,42px)] font-bold text-white leading-tight mb-4">
                Hosting + Domain + SSL
                <br />
                <span className="text-blue-300">Hepsi bir arada paket</span>
              </h3>
              <p className="text-[15px] text-blue-200/60 leading-relaxed mb-8 max-w-sm">
                Business hosting, .com.tr alan adı ve DV SSL sertifikası —
                dijital varlığınızı tek pakette başlatın.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/paketler"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-7 py-3 rounded-xl font-bold text-[14px] hover:bg-blue-50 transition shadow-lg"
                >
                  Paketi İncele <ArrowIcon size={14} />
                </Link>
                <Link
                  href="/ssl"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-7 py-3 rounded-xl font-medium text-[14px] hover:bg-white/8 transition"
                >
                  Tüm Ürünler
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-blue-500/15 border border-blue-400/20 flex items-center justify-center">
                    <GlobeIcon size={48} className="text-blue-300/70" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-6 bg-white rounded-2xl shadow-xl px-4 py-2.5 text-xs">
                  <div className="font-bold text-slate-900">Hosting</div>
                  <div className="text-emerald-600 font-semibold">Aktif ✓</div>
                </div>
                <div className="absolute -bottom-2 -left-6 bg-white rounded-2xl shadow-xl px-4 py-2.5 text-xs">
                  <div className="text-slate-400">Alan Adı</div>
                  <div className="font-bold text-slate-900">.com.tr Dahil</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CAMPAIGNS.map((c) => {
            const Icon = ICONS[c.icon] || ICONS.shield;
            return (
              <div
                key={c.title}
                className={`relative ${c.bg} border ${c.accent} rounded-2xl p-7 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col`}
              >
                <div className="absolute -bottom-3 -right-3 opacity-[0.07]">
                  <Icon size={90} />
                </div>
                <div className="mb-5">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${c.tagColor}`}
                  >
                    {c.tag}
                  </span>
                </div>
                <div
                  className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center mb-4`}
                >
                  <Icon size={18} className={c.iconColor} />
                </div>
                <h4 className="text-[16px] font-bold text-slate-900 mb-2 leading-snug">
                  {c.title}
                </h4>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-6 flex-1">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-900 hover:gap-2.5 transition-all"
                >
                  {c.cta} <ArrowIcon size={13} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
