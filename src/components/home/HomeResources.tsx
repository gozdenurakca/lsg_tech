import { ICONS } from "@/lib/icons";

const WHY_CARDS = [
  {
    icon: "lock",
    title: "SSL'den EV'ye eksiksiz sertifika gamı",
    desc: "DigiCert, GeoTrust, Thawte ve Sectigo güvencesiyle dakikalar içinde aktif. Tüm CA'lara tek noktadan erişim.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    size: "large",
  },
  {
    icon: "server",
    title: "Yönetilen hosting, sıfır zahmeti",
    desc: "SSD NVMe diskler, cPanel, günlük yedek. Sunucuyu biz yönetiyoruz, siz işinize odaklanıyorsunuz.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    size: "large",
  },
  {
    icon: "shield",
    title: "Gece rahat uyumanızı sağlayan güvenlik",
    desc: "7/24 malware tarama, WAF ve DDoS koruması.",
    color: "bg-sky-50",
    iconColor: "text-sky-600",
    size: "small",
  },
  {
    icon: "globe",
    title: "500+ TLD ile alan adı tescili",
    desc: ".com.tr'den .io'ya, marka adınıza uygun uzantıyı anında alın.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    size: "small",
  },
  {
    icon: "zap",
    title: "Otomatik yenileme, sıfır kesinti",
    desc: "Sertifika ve hosting yenilemeleri otomatik. Siz hiçbir şey yapmadan.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    size: "small",
  },
  {
    icon: "users",
    title: "Kazançlı bayi & partner programı",
    desc: "SSL, hosting ve güvenliği yeniden satın, %40'a kadar komisyon kazanın.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    size: "small",
  },
  {
    icon: "message",
    title: "7/24 Türkçe teknik destek",
    desc: "Kurulum, yapılandırma veya acil müdahale — her adımda uzman desteği.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    size: "small",
  },
  {
    icon: "refreshCw",
    title: "DigiCert yetkili Türkiye partneri",
    desc: "Global CA'ların resmi yerel partneri olarak doğrudan ve garantili çözüm.",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    size: "small",
  },
];

export default function HomeResources() {
  const large = WHY_CARDS.filter((c) => c.size === "large");
  const small = WHY_CARDS.filter((c) => c.size === "small");

  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/50 font-bold mb-3">
            Neden LSG?
          </p>
          <h2 className="text-[clamp(32px,4.5vw,52px)] font-bold text-slate-900 leading-tight tracking-tight">
            Tek çatı altında
            <br />
            eksiksiz dijital çözüm
          </h2>
          <p className="mt-5 text-[16px] text-slate-500 max-w-lg mx-auto leading-relaxed">
            SSL, hosting, domain, güvenlik ve bayilik — dijitalinize dair her
            şey burada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {large.map((card) => {
            const Icon = ICONS[card.icon] || ICONS.shield;

            return (
              <div
                key={card.title}
                className={`${card.color} rounded-3xl p-10 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.18)] transition-all duration-300`}
              >
                <div className="absolute -bottom-4 -right-4 opacity-[0.07] pointer-events-none select-none">
                  <Icon size={120} />
                </div>

                <div className="w-11 h-11 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={20} className={card.iconColor} />
                </div>

                <h3 className="text-[18px] font-bold text-slate-900 mb-3 leading-snug max-w-[280px]">
                  {card.title}
                </h3>

                <p className="text-[13px] text-slate-500 leading-relaxed max-w-[300px]">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {small.map((card) => {
            const Icon = ICONS[card.icon] || ICONS.shield;

            return (
              <div
                key={card.title}
                className={`${card.color} rounded-3xl p-7 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,130,246,0.18)] transition-all duration-300`}
              >
                <div className="absolute -bottom-4 -right-4 opacity-[0.07] pointer-events-none select-none">
                  <Icon size={90} />
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white/80 flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={18} className={card.iconColor} />
                </div>

                <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="text-[12px] text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
