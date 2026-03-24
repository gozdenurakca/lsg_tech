import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/lib/icons";
import { ChevronRightIcon } from "lucide-react";

const METRICS = [
  { kpi: "99.98%", label: "Saldırı Engelleme Oranı" },
  { kpi: "24/7", label: "Aktif İzleme" },
  { kpi: "10K+", label: "Korunan Web Sitesi" },
  { kpi: "0", label: "Kesinti Toleransı" },
];

const THREATS = [
  {
    title: "Bot Trafiği & Brute Force",
    desc: "Otomatik denemeler, credential stuffing ve admin panel saldırıları.",
    icon: "bot",
    tag: "Automation",
  },
  {
    title: "SQL Injection & XSS",
    desc: "Veri sızıntısı, oturum ele geçirme ve yetkisiz işlem riski.",
    icon: "alert",
    tag: "App Layer",
  },
  {
    title: "Malware Yerleştirme",
    desc: "Dosya enjeksiyonu, redirect, SEO spam ve backdoor senaryoları.",
    icon: "bug",
    tag: "Integrity",
  },
];

const CORE = [
  {
    title: "Gelişmiş Web Application Firewall",
    desc: "SQL Injection, XSS, brute-force ve bot saldırılarına karşı gerçek zamanlı koruma.",
    icon: "shield",
  },
  {
    title: "Malware Tespiti & Otomatik Temizleme",
    desc: "Web siteniz düzenli taranır, zararlı içerikler otomatik olarak karantinaya alınır ve temizlenir.",
    icon: "wand2",
  },
  {
    title: "DDoS Koruması",
    desc: "Yoğun trafik ve saldırı anlarında hizmet sürekliliğini korur; performansı stabil tutar.",
    icon: "zap",
  },
];

const BENEFITS = [
  { text: "CDN ile performans + güvenlik", icon: "globe" },
  { text: "Zero-day saldırı koruması", icon: "radar" },
  { text: "SSL entegrasyonu (TLS hardening önerileri)", icon: "lock" },
  { text: "KVKK & GDPR uyum desteği", icon: "activity" },
];

const PIPELINE = [
  { title: "CDN", desc: "Edge cache + trafik filtreleme" },
  { title: "WAF", desc: "L7 koruma: SQLi/XSS/Bot" },
  { title: "App Layer", desc: "Hardening + güvenli header’lar" },
  { title: "Monitoring", desc: "Telemetry + alarm kuralları" },
  { title: "Incident Response", desc: "Analiz, izolasyon, iyileştirme" },
];

export default function WebGuvenligiPage() {
  return (
    <main className="bg-[#f4f6f8] text-slate-900">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer { 0% { transform: translateX(-35%) } 100% { transform: translateX(135%) } }
        .glass { background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.45); }
        .noise { background-image: radial-gradient(rgba(255,255,255,.16) 1px, transparent 1px); background-size: 18px 18px; opacity: .35;
          mask-image: radial-gradient(circle at 30% 20%, rgba(0,0,0,1), rgba(0,0,0,0.35)); }
        .shine::after{ content:""; position:absolute; inset:-40%;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,.22) 45%, transparent 55%);
          transform: translateX(-35%); animation: shimmer 3.2s ease-in-out infinite; }
      `,
        }}
      />

      <section className="bg-slate-100 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-slate-600">
          <Link href="/" className="hover:underline">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          <Link href="/cozumler" className="hover:underline">
            Çözümler
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-semibold">
            Web Sitesi Güvenliği
          </span>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900" />
        <div className="absolute inset-0 noise" />
        <div className="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 w-[520px] h-[520px] rounded-full bg-indigo-400/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/90">
                <span className="text-sm font-semibold tracking-wide">
                  ENTERPRISE WEB SECURITY
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">
                  WAF • DDoS • Malware
                </span>
              </div>

              <h1 className="mt-7 text-4xl md:text-6xl font-extrabold leading-tight">
                Kurumsal Web Sitesi{" "}
                <span className="text-blue-200">Güvenliği</span>
              </h1>

              <p className="mt-6 text-blue-100/90 text-base md:text-lg leading-relaxed max-w-xl">
                Web sitenizi malware, DDoS, bot saldırıları ve veri ihlallerine
                karşı çok katmanlı güvenlik mimarisi ile koruyun.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#teklif"
                  className="group relative overflow-hidden rounded-xl px-8 py-4 font-semibold shadow-2xl bg-white text-blue-950 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5"
                >
                  <span className="relative z-10">
                    Güvenlik Analizi Talep Edin
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-100 to-indigo-100" />
                </Link>

                <Link
                  href="/ssl"
                  className="rounded-xl px-8 py-4 font-semibold border border-white/40 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  SSL ile Birlikte Planla{" "}
                  <span className="inline-block ml-1">→</span>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-blue-100/90">
                {[
                  "SLA",
                  "Threat Intelligence",
                  "Incident Response",
                  "KVKK/GDPR",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-60" />
              <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-indigo-100 blur-3xl opacity-60" />

              <div className="relative bg-white/10 border border-white/15 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="relative p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-blue-200">
                      Live Telemetry
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15">
                      Active
                    </span>
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      { k: "Blocked Requests", v: "12,438", icon: "shield" },
                      { k: "Bot Mitigation", v: "Enabled", icon: "bot" },
                      { k: "Malware Scan", v: "Daily", icon: "bug" },
                      { k: "DDoS Shield", v: "Always-on", icon: "zap" },
                    ].map((row) => {
                      const Icon = ICONS[row.icon];

                      return (
                        <div
                          key={row.k}
                          className="rounded-2xl bg-white/10 border border-white/15 p-5 flex items-center justify-between hover:bg-white/15 transition"
                        >
                          <div className="flex items-center gap-3 text-sm text-blue-100/90">
                            <Icon className="w-4 h-4 text-blue-200" />
                            <span>{row.k}</span>
                          </div>

                          <div className="font-semibold">{row.v}</div>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/#teklif"
                    className="mt-8 relative shine overflow-hidden inline-flex w-full justify-center rounded-2xl bg-white text-blue-950 px-6 py-4 font-bold hover:bg-blue-50 transition"
                  >
                    Ücretsiz Risk Skoru Al
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="glass rounded-2xl p-6 shadow-xl border border-white/30 hover:border-white/45 transition-all hover:-translate-y-0.5 text-left"
              >
                <div className="text-3xl font-extrabold text-white">
                  {m.kpi}
                </div>
                <div className="mt-2 text-sm text-blue-100/90">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Web Siteleri Neden Hedefte?
            </h2>
            <p className="mt-4 text-slate-600">
              Botlar, injection, brute-force ve malware girişimleri saldırı
              yüzeyinizi büyütür. Korumayı “tek ürün” değil, mimari olarak
              düşünmek gerekir.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {THREATS.map((t) => {
              const Icon = ICONS[t.icon]; // 🔥 kritik

              return (
                <div
                  key={t.title}
                  className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200/70 hover:border-blue-200 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
                      {t.tag}
                    </span>
                  </div>

                  <div className="mt-6 text-xl font-bold">{t.title}</div>

                  <div className="mt-3 text-slate-600 leading-relaxed">
                    {t.desc}
                  </div>

                  <div className="mt-6 text-blue-900 font-semibold inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-900" />
                    Katmanlı savunma önerilir
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Çekirdek Yetkinlikler
            </h2>
            <p className="mt-4 text-slate-600">
              Saldırı yüzeyini daralt: WAF + temizleme + DDoS + izleme +
              müdahale.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {CORE.map((c) => {
              const Icon = ICONS[c.icon];

              return (
                <div
                  key={c.title}
                  className="group relative bg-white rounded-3xl p-9 shadow-lg border border-slate-200/70 hover:border-blue-200 hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 to-indigo-50" />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>

                    <h3 className="mt-6 text-xl font-extrabold">{c.title}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-3xl p-8 md:p-10 bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                Hızlı kazanım
              </div>
              <div className="mt-2 text-2xl font-extrabold">
                7 gün içinde “Minimum Güvenlik Baseline” kurulumu
              </div>
              <p className="mt-2 text-slate-600">
                WAF kuralları + bot koruma + izleme + raporlama ile görünür
                sonuç.
              </p>
            </div>
            <Link
              href="/#teklif"
              className="relative shine overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-4 font-bold shadow-lg hover:opacity-95 transition inline-flex items-center gap-2"
            >
              Baseline Kurulumu İste <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              LSG Web Güvenlik Mimarisi
            </h2>
            <p className="mt-4 text-slate-600">
              Çok katmanlı savunma yapımız saldırıları daha kaynağında engeller.
            </p>
          </div>

          <div className="mt-14 bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">
            <div className="grid md:grid-cols-5 gap-4">
              {PIPELINE.map((p, i) => (
                <div key={p.title} className="relative">
                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 h-full hover:bg-white hover:shadow-md transition">
                    <div className="text-sm font-semibold text-blue-900 uppercase tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-lg font-extrabold">{p.title}</div>
                    <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
                  </div>
                  {i !== PIPELINE.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-2xl text-blue-900/40">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-sm text-slate-600">
              CDN → WAF → Application Layer → Monitoring → Incident Response
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 font-semibold text-sm border border-blue-100">
              Approach
              <span className="px-2 py-0.5 rounded-full bg-white border border-blue-100 text-xs">
                Multi-layer
              </span>
            </div>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
              Çok Katmanlı Koruma Yaklaşımı
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              LSG Web Güvenliği çözümü; CDN, davranış analizi ve tehdit
              istihbaratı ile proaktif savunma sağlar.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {BENEFITS.map((b) => {
                const Icon = ICONS[b.icon];

                return (
                  <div
                    key={b.text}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-900 mt-0.5" />

                      <span className="text-slate-800 font-semibold">
                        {b.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#teklif"
                className="rounded-xl bg-blue-900 text-white px-8 py-4 font-bold shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                Mimari Öneri Al <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/ssl"
                className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-50 transition inline-flex items-center gap-2"
              >
                SSL ile Birlikte Paketle{" "}
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/resim4.png"
              alt="Web Security"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
              <div className="text-sm font-semibold text-blue-900">
                “Observability + Response” ile görünür güvenlik
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Alarm kuralları, raporlama ve olay müdahalesi tek süreçte.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Web Sitenizi Güvence Altına Alın
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Güvenlik uzmanlarımız mevcut altyapınızı analiz eder ve size özel
            koruma mimarisi tasarlar.
          </p>

          <Link
            href="/#teklif"
            className="inline-block mt-10 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-12 py-4 font-extrabold shadow-2xl hover:opacity-95 transition relative shine overflow-hidden"
          >
            Hemen Teklif Alın
          </Link>

          <div className="mt-6 text-sm text-slate-500">
            ✓ 24 saat içinde geri dönüş &nbsp; ✓ Taahhütsüz danışmanlık &nbsp; ✓
            SLA opsiyonu
          </div>
        </div>
      </section>
    </main>
  );
}
