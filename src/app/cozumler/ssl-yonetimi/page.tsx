import Link from "next/link";

import {
  TriangleAlert,
  TrendingDown,
  ShieldX,
  CheckCircle,
} from "lucide-react";


const RISKS = [
  {
    title: "Tarayıcı Güven Uyarısı",
    desc: "Ziyaretçiler sitenizi güvensiz olarak görür ve saniyeler içinde terk eder.",
    icon: TriangleAlert,
  },
  {
    title: "SEO Performans Kaybı",
    desc: "Google, güvenli olmayan siteleri sıralamada geri iter; organik trafik düşer.",
    icon: TrendingDown,
  },
  {
    title: "Satış & Güven Kaybı",
    desc: "Ödeme akışları bozulur, dönüşüm oranları ve marka güveni hızla erir.",
    icon: ShieldX,
  },
];


const FEATURES = [
  "Otomatik yenileme sistemi",
  "Süre dolum uyarı paneli",
  "Multi-domain ve wildcard yönetimi",
  "Enterprise SLA izleme",
  "Tek merkezden sertifika kontrolü",
];

const STATS = [
  { kpi: "99.9%", label: "Kesintisiz erişim hedefi" },
  { kpi: "24/7", label: "İzleme & uyarı" },
  { kpi: "< 5dk", label: "Kritik bildirim süresi" },
  { kpi: "SLA", label: "Kurumsal destek modeli" },
];

export default function SSLYonetimiPage() {
  return (
    <main className="bg-[#f4f6f8] text-slate-900">
      {/* Local premium effects */}
      <style>{`
        @keyframes floaty { 
          0%,100%{ transform: translateY(0px) } 
          50%{ transform: translateY(-10px) } 
        }
        @keyframes shimmer {
          0% { transform: translateX(-30%) }
          100% { transform: translateX(130%) }
        }
        .glass {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.45);
        }
        .noise {
          background-image:
            radial-gradient(rgba(255,255,255,.15) 1px, transparent 1px);
          background-size: 18px 18px;
          mask-image: radial-gradient(circle at 30% 20%, rgba(0,0,0,1), rgba(0,0,0,0.35));
          opacity: .35;
        }
        .shine::after{
          content:"";
          position:absolute;
          inset:-40%;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.22) 45%, transparent 55%);
          transform: translateX(-30%);
          animation: shimmer 3.2s ease-in-out infinite;
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-900" />
        <div className="absolute inset-0 noise" />
        <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90">
              <span className="text-sm font-semibold tracking-wide">
                ENTERPRISE SSL LIFECYCLE MANAGEMENT
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">
                Otomasyon + SLA
              </span>
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">
              SSL Sertifikanızın Süresi Dolduğunda <span className="text-blue-200">Ne Olur?</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-blue-100/90 leading-relaxed">
              Güven uyarısı, SEO kaybı ve müşteri güveni erozyonu.
              LSG SSL Yönetim sistemi ile sertifikalarınızı otomatik kontrol edin.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#teklif"
                className="group relative overflow-hidden rounded-xl px-8 py-4 font-semibold shadow-2xl bg-white text-blue-950 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span className="relative z-10">Ücretsiz Altyapı Analizi</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-100 to-indigo-100" />
              </Link>

              <Link
                href="/ssl"
                className="group rounded-xl px-8 py-4 font-semibold border border-white/40 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                SSL Sertifikalarını Gör
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Stats bar */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-5 text-left shadow-xl border border-white/20 hover:border-white/35 transition-all hover:-translate-y-0.5"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-white">
                    {s.kpi}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-blue-100/90">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating hint */}
            <div className="mt-12 text-blue-200/80 text-sm">
              <span className="inline-flex items-center gap-2" style={{ animation: "floaty 4s ease-in-out infinite" }}>
                <span className="w-2 h-2 rounded-full bg-blue-200" />
                Sertifika süresi & uyarılar tek panelde
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RISK SECTION */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Süre Bitince Riskler Zincirleme Başlar
            </h2>
            <p className="mt-4 text-slate-600">
              Bir SSL “küçük detay” gibi görünür; fakat bittiği an etkisi satıştan SEO’ya kadar yayılır.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {RISKS.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200/70 hover:border-blue-200 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 to-indigo-50" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
  <item.icon className="w-6 h-6 text-blue-900" strokeWidth={2} />
</div>


                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                      Risk
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-blue-900 font-semibold">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-900" />
                    Otomasyon ile önleyin
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini CTA */}
          <div className="mt-14 rounded-3xl p-8 md:p-10 bg-white shadow-xl border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                Önleyici yaklaşım
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                Sertifika bitmeden uyarı + otomatik yenileme
              </div>
              <p className="mt-2 text-slate-600">
                Tek bir panelden tüm domain’lerinizi takip edin, unutma riskini sıfıra yaklaştırın.
              </p>
            </div>

            <Link
              href="/#teklif"
              className="relative shine overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 font-bold shadow-lg hover:opacity-95 transition"
            >
              Uyarı Sistemi Kur
            </Link>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 font-semibold text-sm border border-blue-100">
                Platform
                <span className="px-2 py-0.5 rounded-full bg-white border border-blue-100 text-xs">
                  Centralized
                </span>
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
                LSG SSL Yönetim Platformu
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Sertifika sürelerini manuel takip etmeyin. Merkezi yönetim ve otomatik
                yenileme sistemi ile kesintisiz güvenlik sağlayın.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {FEATURES.map((f) => (
                  <div
                    key={f}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" strokeWidth={2} />
                      <span className="text-slate-800 font-semibold">{f}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#teklif"
                  className="rounded-xl bg-blue-900 text-white px-8 py-4 font-bold shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 transition-all"
                >
                  SSL Yönetimini Aktif Et
                </Link>
                <Link
                  href="/ssl"
                  className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-50 transition"
                >
                  Sertifikalara Git →
                </Link>
              </div>
            </div>

            {/* Right “premium” panel */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-80" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-indigo-100 blur-3xl opacity-80" />

              <div className="relative bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="relative text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-blue-200">
                      Sertifika Durumu
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15">
                      Live
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      { d: "example.com", s: "Active", c: "bg-green-500" },
                      { d: "shop.example.com", s: "Expiring (14g)", c: "bg-amber-400" },
                      { d: "api.example.com", s: "Renewing", c: "bg-blue-400" },
                    ].map((r) => (
                      <div
                        key={r.d}
                        className="rounded-2xl bg-white/10 border border-white/15 p-5 flex items-center justify-between hover:bg-white/15 transition"
                      >
                        <div>
                          <div className="font-semibold">{r.d}</div>
                          <div className="text-sm text-blue-100/80 mt-1">
                            TLS/SSL Lifecycle
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${r.c}`} />
                          <span className="text-sm font-semibold">{r.s}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-5">
                    <div className="text-sm text-blue-100/80">
                      Öneri
                    </div>
                    <div className="mt-1 font-semibold">
                      14 gün kala otomatik yenileme ve e-posta/Slack uyarısı aktif edin.
                    </div>
                  </div>

                  <Link
                    href="/#teklif"
                    className="mt-8 inline-flex w-full justify-center rounded-2xl bg-white text-blue-950 px-6 py-4 font-bold hover:bg-blue-50 transition"
                  >
                    Demo Talep Et
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#f4f6f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-10 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">
                  Kurumsal SSL süre yönetimi
                </div>
                <h3 className="mt-2 text-3xl font-extrabold">
                  Unutmayı bitirin. Süreyi biz yönetelim.
                </h3>
                <p className="mt-3 text-blue-100/90 max-w-2xl">
                  Sertifika bitişleri için merkezi panel, otomatik yenileme ve SLA destekli süreç.
                </p>
              </div>

              <Link
                href="/#teklif"
                className="rounded-2xl bg-white text-blue-950 px-8 py-4 font-bold hover:bg-blue-50 transition shadow-lg"
              >
                Hemen Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
