"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Globe, RefreshCw, Check, ArrowRight, Tag,
  ShieldCheck, Zap, Headphones, Bell, Lock, Clock,
} from "lucide-react";

const PERIODS = [
  { value: 1, label: "1 Yıl",  multiplier: 1,   badge: null,      badgeColor: "" },
  { value: 2, label: "2 Yıl",  multiplier: 1.9,  badge: "%5 İndirim",  badgeColor: "bg-orange-500" },
  { value: 3, label: "3 Yıl",  multiplier: 2.7,  badge: "%10 İndirim", badgeColor: "bg-orange-500" },
  { value: 5, label: "5 Yıl",  multiplier: 4.2,  badge: "%16 İndirim", badgeColor: "bg-red-500" },
];

const BASE_PRICE = 149;

const BENEFITS = [
  { icon: Bell,        title: "Erken Hatırlatma",      desc: "Domain süreniz dolmadan 60 gün önce e-posta ile uyarılırsınız." },
  { icon: RefreshCw,   title: "Otomatik Yenileme",     desc: "İstediğinizde otomatik yenileme özelliğini aktif edebilirsiniz." },
  { icon: Zap,         title: "Anında Aktif",          desc: "Yenileme işlemi birkaç dakika içinde tamamlanır." },
  { icon: Headphones,  title: "7/24 Türkçe Destek",   desc: "Herhangi bir sorunuzda uzman ekibimize ulaşabilirsiniz." },
];

const TICKER = ["domain.com.tr", "sirket.net", "marka.io", "startup.com", "ajans.com.tr", "yazilim.net", "proje.io", "firma.com.tr", "teknoloji.com.tr", "girişim.io"];

export default function DomainRenewForm() {
  const router = useRouter();
  const [domain, setDomain]   = useState("");
  const [period, setPeriod]   = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);

  const selected   = PERIODS.find((p) => p.value === period)!;
  const totalPrice = Math.round(BASE_PRICE * selected.multiplier);
  const perYear    = Math.round(totalPrice / period);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // TODO: API
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <main className="min-h-screen bg-[#060d1a] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-3">Yenileme Talebi Alındı!</h2>
          <p className="text-slate-400 mb-2">
            <span className="font-semibold text-white">{domain}</span>,{" "}
            <span className="text-blue-400 font-semibold">{period} yıl</span> daha uzatılıyor.
          </p>
          <p className="text-sm text-slate-600 mb-8">İşlem tamamlandığında e-posta ile bilgilendirileceksiniz.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setDone(false); setDomain(""); setPeriod(1); }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
              Başka domain yenile <ArrowRight size={14} />
            </button>
            <button onClick={() => router.push("/panel")}
              className="inline-flex items-center gap-2 border border-white/10 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-white/5 transition-colors">
              Panele Git
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-[#060d1a] overflow-hidden border-b border-white/5">
        {/* Aurora */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)" }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10 lg:grid lg:grid-cols-[1fr_440px] lg:gap-20 lg:items-center">

          {/* Sol */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>
              Alan Adı Yenileme
            </div>

            <h1 className="text-white font-extrabold leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(36px,4.5vw,60px)" }}>
              Domain Sürenin<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Dolmasına İzin Verme
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Kayıtlı alan adınızı kolayca uzatın, kesintisiz çevrimiçi kalın. Çok yıllık yenilemelerde %16&apos;ya kadar tasarruf edin.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {["Anında işlem", "Toplu yenileme indirimi", "Otomatik yenileme seçeneği", "7/24 destek"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
                  <Check size={13} className="text-emerald-400 shrink-0" /> {f}
                </div>
              ))}
            </div>

            <a href="#renew-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40">
              Hemen Yenile <ArrowRight size={16} />
            </a>
          </div>

          {/* Sağ: fiyat kartları */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/15 border border-blue-500/30 rounded-2xl p-5">
              <p className="text-blue-300 text-xs font-semibold mb-1">Başlayan fiyatlarla</p>
              <p className="text-white text-4xl font-extrabold">₺{BASE_PRICE}<span className="text-xl font-semibold text-slate-400">/yıl</span></p>
              <p className="text-slate-500 text-xs mt-1">.com.tr · .com · .net için</p>
            </div>

            {PERIODS.map((p) => {
              const price = Math.round(BASE_PRICE * p.multiplier);
              const active = period === p.value;
              return (
                <button key={p.value} type="button" onClick={() => setPeriod(p.value)}
                  className={`relative flex items-center justify-between px-5 py-4 rounded-2xl border text-left transition-all ${active ? "bg-blue-600/20 border-blue-500/50" : "bg-white/4 border-white/8 hover:bg-white/6"}`}>
                  {p.badge && (
                    <span className={`absolute -top-2 right-4 text-[10px] font-bold text-white ${p.badgeColor} px-2 py-0.5 rounded-full`}>{p.badge}</span>
                  )}
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? "border-blue-400" : "border-white/20"}`}>
                      {active && <div className="w-2 h-2 bg-blue-400 rounded-full" />}
                    </div>
                    <span className={`font-bold text-sm ${active ? "text-white" : "text-slate-400"}`}>{p.label}</span>
                  </div>
                  <span className={`font-extrabold ${active ? "text-white" : "text-slate-500"}`}>₺{price}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Ticker */}
        <div className="relative border-t border-white/5 overflow-hidden py-3">
          <div className="flex gap-0 whitespace-nowrap" style={{ animation: "tickerScroll 28s linear infinite" }}>
            {[...TICKER, ...TICKER].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-6 text-[11px] text-slate-600 font-medium">
                <span className="w-1 h-1 rounded-full bg-blue-500/40 shrink-0" />{item}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#060d1a] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#060d1a] to-transparent pointer-events-none" />
        </div>

        {/* Trust bar */}
        <div className="relative border-t border-white/5 bg-white/[0.015]">
          <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[{ icon: ShieldCheck, label: "Güvenli Ödeme" }, { icon: Lock, label: "256-bit SSL" }, { icon: Clock, label: "Anında Aktif" }, { icon: Headphones, label: "7/24 Destek" }, { icon: Tag, label: "%16'ya Kadar İndirim" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-slate-600 text-xs hover:text-slate-400 transition-colors">
                <Icon size={11} className="text-blue-500/70 shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>

        <style>{`@keyframes tickerScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </section>

      {/* ── FORM + SAĞ PANEL ── */}
      <section id="renew-form" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
            <h2 className="text-xl font-extrabold text-slate-900 mb-1">Yenileme Bilgileri</h2>
            <p className="text-sm text-slate-500 mb-6">Alan adı ve süreyi seçin, toplam tutarı görün.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Domain */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Alan Adı</label>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <div className="pl-3.5"><Globe size={15} className="text-slate-400" /></div>
                  <input required value={domain} onChange={(e) => setDomain(e.target.value)}
                    placeholder="orneksite.com.tr" className="flex-1 px-3 py-3 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400" />
                </div>
              </div>

              {/* Süre */}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2">Süre Seçin</label>
                <div className="grid grid-cols-2 gap-2.5">
                  {PERIODS.map((p) => (
                    <button key={p.value} type="button" onClick={() => setPeriod(p.value)}
                      className={`relative py-3 px-4 rounded-xl border text-sm font-bold transition-all ${period === p.value ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`}>
                      {p.badge && (
                        <span className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white ${p.badgeColor} px-1.5 py-0.5 rounded-full whitespace-nowrap`}>{p.badge}</span>
                      )}
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fiyat özeti */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">{period} yıllık yenileme</p>
                    {period > 1 && <p className="text-xs text-emerald-600 font-semibold mt-0.5">{selected.badge} uygulandı · yılda ₺{perYear}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold text-slate-900">₺{totalPrice}</p>
                    <p className="text-xs text-slate-400">KDV dahil</p>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm">
                <RefreshCw size={15} />
                {loading ? "İşleniyor..." : "Şimdi Yenile"}
              </button>
            </form>
          </div>

          {/* Avantajlar */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Neden LSG ile yenile?</h3>
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <b.icon size={19} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{b.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}

            {/* İndirim kartı */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 text-white">
              <p className="text-sm font-bold mb-1">5 Yıl Yenile, %16 Kazan</p>
              <p className="text-xs text-orange-100">Uzun vadeli yenilemelerde büyük tasarruf edin. 5 yıllık yenileme ile yıllık ₺{Math.round(BASE_PRICE * 0.84)} ödersiniz.</p>
              <button type="button" onClick={() => setPeriod(5)}
                className="mt-3 inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                5 Yılı Seç <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALT CTA ── */}
      <section className="bg-[#060d1a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Domaininizin süresi dolmadan harekete geçin</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Yenileme konusunda yardım mı lazım? 7/24 destek ekibimiz yanınızda.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#renew-form" className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition inline-flex items-center gap-2">
              Hemen Yenile <ArrowRight size={16} />
            </a>
            <button onClick={() => router.push("/domain/transfer")}
              className="h-12 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 font-semibold transition">
              Transfer mi istiyorsunuz?
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
