"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Globe, Key, ShieldCheck, Zap, Headphones, RefreshCw,
  Check, ArrowRight, AlertCircle, Lock, Clock, BadgeCheck,
} from "lucide-react";

const STEPS = [
  { n: "01", icon: Globe,       title: "Alan Adını Girin",     desc: "Taşımak istediğiniz domain'i forma yazın." },
  { n: "02", icon: Key,         title: "EPP Kodunu Ekleyin",   desc: "Mevcut kayıt şirketinizden auth kodunu alın." },
  { n: "03", icon: ShieldCheck, title: "Transfer Başlatılır",  desc: "Güvenli süreç otomatik olarak başlar." },
  { n: "04", icon: BadgeCheck,  title: "5–7 Günde Tamamlanır", desc: "Alan adınız LSG'ye taşınır, hiçbir kesinti yaşanmaz." },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Güvenli Transfer",    desc: "Verileriniz şifreli protokollerle korunur, hiçbir kesinti yaşanmaz." },
  { icon: Zap,         title: "Hızlı Süreç",         desc: "Ortalama 5–7 iş gününde tamamlanan optimize akış." },
  { icon: Headphones,  title: "7/24 Türkçe Destek",  desc: "Tüm transfer boyunca uzman ekibimiz yanınızda." },
  { icon: RefreshCw,   title: "Kesintisiz Erişim",   desc: "Transfer süresince siteniz ve e-postanız tam olarak çalışır." },
];

const FAQ = [
  { q: "EPP kodu nedir, nereden alırım?", a: "EPP (Extensible Provisioning Protocol) kodu, domain transferlerinde güvenliği sağlayan bir şifredir. Mevcut kayıt şirketinizin panelinden \"Transfer Kilidi\" veya \"Auth Code\" bölümünden alabilirsiniz." },
  { q: "Transfer sırasında sitem kapanır mı?", a: "Hayır. Domain transferi süresince web siteniz, e-postanız ve tüm hizmetleriniz kesintisiz çalışmaya devam eder." },
  { q: "Transfer ne kadar sürer?", a: "Çoğu uzantıda işlem 5–7 iş günü içinde tamamlanır. .com.tr ve diğer Türkiye uzantılarında süre farklılık gösterebilir." },
  { q: "Transfer ücretli mi?", a: "Domain transferi, en az 1 yıllık yenileme ücreti karşılığında gerçekleştirilir. Bu sayede süreniz de uzatılmış olur." },
];

const TICKER = ["domain.com.tr", "sirket.net", "marka.io", "startup.com", "ajans.com.tr", "yazilim.net", "proje.io", "firma.com.tr", "teknoloji.com.tr", "girişim.io"];

export default function DomainTransferForm() {
  const router = useRouter();
  const [domain, setDomain]     = useState("");
  const [authCode, setAuthCode] = useState("");
  const [loading, setLoading]   = useState(false);
  const [done, setDone]         = useState(false);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!domain || !authCode) return;
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
          <h2 className="text-3xl font-extrabold text-white mb-3">Transfer Başlatıldı!</h2>
          <p className="text-slate-400 mb-2">
            <span className="font-semibold text-white">{domain}</span> için transfer süreci başladı.
          </p>
          <p className="text-sm text-slate-600 mb-8">5–7 iş günü içinde tamamlanacak. E-posta ile bilgilendirileceksiniz.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => { setDone(false); setDomain(""); setAuthCode(""); }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors">
              Yeni transfer başlat <ArrowRight size={14} />
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
              Alan Adı Transfer Hizmeti
            </div>

            <h1 className="text-white font-extrabold leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(36px,4.5vw,60px)" }}>
              Domainini LSG&apos;ye<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                Kesintisiz Taşı
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
              Başka bir kayıt şirketindeki alan adınızı 5–7 iş günü içinde güvenli şekilde LSG Teknoloji&apos;ye transfer edin. Siteniz tek bir saniye bile kapanmaz.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {["Kesintisiz erişim", "7/24 Türkçe destek", "Ücretsiz DNS yönetimi", "Otomatik yenileme"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
                  <Check size={13} className="text-emerald-400 shrink-0" /> {f}
                </div>
              ))}
            </div>

            <a href="#transfer-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40">
              Transfer Başlat <ArrowRight size={16} />
            </a>
          </div>

          {/* Sağ: adım kartları */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 mb-1">
              <p className="text-blue-300 text-xs font-semibold mb-1">Ortalama Tamamlanma Süresi</p>
              <p className="text-white text-4xl font-extrabold">5–7 <span className="text-2xl font-semibold text-slate-400">iş günü</span></p>
            </div>
            {STEPS.map((s) => (
              <div key={s.n} className="flex items-start gap-4 bg-white/4 border border-white/8 rounded-2xl px-5 py-4 backdrop-blur-sm hover:bg-white/6 transition-colors">
                <div className="w-9 h-9 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center shrink-0">
                  <s.icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-extrabold text-blue-500">{s.n}</span>
                    <span className="font-bold text-white text-sm">{s.title}</span>
                  </div>
                  <p className="text-xs text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
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
            {[{ icon: ShieldCheck, label: "ICANN Akrediteli" }, { icon: Lock, label: "256-bit SSL" }, { icon: Clock, label: "Kesintisiz Erişim" }, { icon: Headphones, label: "7/24 Türkçe Destek" }, { icon: BadgeCheck, label: "KVKK Uyumlu" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-slate-600 text-xs hover:text-slate-400 transition-colors">
                <Icon size={11} className="text-blue-500/70 shrink-0" /> {label}
              </div>
            ))}
          </div>
        </div>

        <style>{`@keyframes tickerScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </section>

      {/* ── FORM + ÖZELLİKLER ── */}
      <section id="transfer-form" className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8">
            <h2 className="text-xl font-extrabold text-slate-900 mb-1">Transfer Başlat</h2>
            <p className="text-sm text-slate-500 mb-6">Alan adı ve EPP kodunu girerek transferi başlatın.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Alan Adı</label>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <div className="pl-3.5"><Globe size={15} className="text-slate-400" /></div>
                  <input required value={domain} onChange={(e) => setDomain(e.target.value)}
                    placeholder="orneksite.com" className="flex-1 px-3 py-3 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  EPP / Auth Kodu <span className="font-normal text-slate-400">— mevcut kayıt şirketinizden alın</span>
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <div className="pl-3.5"><Key size={15} className="text-slate-400" /></div>
                  <input required value={authCode} onChange={(e) => setAuthCode(e.target.value)}
                    placeholder="EPP kodunuzu girin" className="flex-1 px-3 py-3 text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400" />
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <AlertCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700">EPP kodunu mevcut kayıt şirketinizin panelinden &quot;Transfer Kilidi&quot; veya &quot;Auth Code&quot; bölümünden alabilirsiniz.</p>
              </div>

              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-sm">
                {loading ? "İşleniyor..." : <><RefreshCw size={15} /> Transfer Başlat</>}
              </button>
            </form>
          </div>

          {/* Özellikler */}
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900">Neden LSG ile transfer?</h3>
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-11 h-11 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <f.icon size={19} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{f.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-[#060d1a] to-[#0f1f3d] rounded-2xl p-5 text-white">
              <p className="text-sm font-bold mb-1">500.000+ kayıtlı domain</p>
              <p className="text-xs text-slate-400">LSG Teknoloji, 20+ yıllık sektör deneyimiyle Türkiye&apos;nin önde gelen kayıt şirketidir.</p>
              <div className="mt-3 flex gap-4 text-[11px] text-slate-500">
                {["ICANN Akrediteli", "256-bit SSL", "KVKK Uyumlu"].map((t) => (
                  <span key={t} className="flex items-center gap-1"><Check size={10} className="text-emerald-500" /> {t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SSS ── */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Sık Sorulan Sorular</p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Transfer hakkında merak edilenler</h2>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors">
                  <span className="font-semibold text-slate-900 text-sm">{item.q}</span>
                  <span className={`text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALT CTA ── */}
      <section className="bg-[#060d1a] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Hemen transfer başlatın</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Herhangi bir sorunuz mu var? 7/24 destek ekibimiz yanınızda.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#transfer-form" className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition inline-flex items-center gap-2">
              Transfer Başlat <ArrowRight size={16} />
            </a>
            <button onClick={() => router.push("/destek")}
              className="h-12 px-6 rounded-xl border border-white/15 text-white hover:bg-white/5 font-semibold transition">
              Destek Al
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
