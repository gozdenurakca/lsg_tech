"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Globe,
  Search,
  ShieldCheck,
  Building2,
  Mail,
  Link2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import DomainExtensions from "@/components/domain/DomainExtensions";
import DomainServicesGrid from "@/components/domain/DomainServicesGrid";

function DomainInfoHero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/domain/results?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <section className="relative overflow-hidden bg-[#060d1a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-blue-300 mb-5">
              <Globe size={14} />
              Alan Adı Rehberi
            </p>

            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Domain nedir, ne işe yarar ve markanız için neden kritiktir?
            </h1>

            <p className="text-slate-300 text-lg leading-8 max-w-2xl mb-8">
              Domain, markanızın internetteki adresidir. Web sitenizin, kurumsal
              e-postanızın ve dijital güvenilirliğinizin temelini oluşturur.
              Doğru alan adı; bulunabilirlik, marka değeri ve güven açısından
              doğrudan fark yaratır.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
            >
              <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl px-4 h-14 border border-white/10">
                <Search size={18} className="text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="orneksirket.com.tr"
                  className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <button className="h-14 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-bold inline-flex items-center justify-center gap-2">
                Alan Adı Sorgula
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Marka kimliği",
                "Kurumsal güven",
                "SEO görünürlüğü",
                "Profesyonel e-posta",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Web sitenizin adresi",
                desc: "Ziyaretçiler sitenize domain üzerinden ulaşır.",
                icon: Link2,
              },
              {
                title: "Kurumsal e-posta altyapısı",
                desc: "info@markaniz.com gibi profesyonel adresler oluşturursunuz.",
                icon: Mail,
              },
              {
                title: "Dijital güvenin ilk adımı",
                desc: "Markanızı daha ciddi ve güvenilir gösterir.",
                icon: ShieldCheck,
              },
              {
                title: "Marka koruması",
                desc: "Aynı ismin farklı uzantılarını alarak markanızı korursunuz.",
                icon: Building2,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-extrabold mb-2">{title}</h3>
                <p className="text-sm text-slate-300 leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainWhatIsSection() {
  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Domain Nedir?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
            Alan adı, internetteki dijital kimliğinizdir
          </h2>
          <p className="text-slate-600 leading-8 mb-4">
            Domain; kullanıcıların web sitenize ulaşmak için tarayıcıya yazdığı
            adrestir. Teknik olarak IP adreslerinin okunabilir hâle getirilmiş
            versiyonudur; pratikte ise markanızın internetteki görünen adıdır.
          </p>
          <p className="text-slate-600 leading-8">
            Kısacası iyi bir domain, sadece bir adres değil; aynı zamanda
            erişilebilirlik, güven ve profesyonellik göstergesidir.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7">
          <h3 className="text-lg font-extrabold text-slate-900 mb-5">
            Basit örnek
          </h3>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500 mb-1">Web sitesi adresi</p>
              <p className="text-xl font-black text-slate-900">
                www.markaniz.com
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-4">
              <p className="text-sm text-slate-500 mb-1">Kurumsal e-posta</p>
              <p className="text-xl font-black text-slate-900">
                info@markaniz.com
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
              <p className="text-sm text-blue-700 font-semibold">
                Aynı domain, hem web sitenizin hem de e-posta altyapınızın
                temelidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainWhyImportantSection() {
  const items = [
    {
      title: "Marka bilinirliği sağlar",
      desc: "Akılda kalıcı bir domain, kullanıcıların sizi daha kolay hatırlamasını sağlar.",
    },
    {
      title: "Profesyonel görünüm kazandırır",
      desc: "Ücretsiz uzantılar yerine kendi alan adınız kurumsal algıyı güçlendirir.",
    },
    {
      title: "SEO ve bulunabilirliği destekler",
      desc: "Doğru uzantı ve doğru isim, arama görünürlüğünü dolaylı olarak destekler.",
    },
    {
      title: "Markanızı korur",
      desc: "Farklı uzantıları kaydederek başkalarının aynı adı kullanmasını önlersiniz.",
    },
    {
      title: "Kurumsal e-posta oluşturursunuz",
      desc: "Gmail yerine markanıza ait e-posta adresleri kullanabilirsiniz.",
    },
    {
      title: "Dijital yatırımların temelini oluşturur",
      desc: "Web sitesi, SSL, hosting ve e-posta gibi tüm yapılar domain üzerine kurulur.",
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
            Neden Önemli?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            İyi bir domain sadece isim değildir
          </h2>
          <p className="text-slate-600 leading-8">
            Doğru alan adı, markanızın internette nasıl algılandığını etkiler.
            Satıştan güvene, iletişimden görünürlüğe kadar birçok noktada rol
            oynar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-slate-200 p-6"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainGuideSection() {
  const guides = [
    {
      title: ".com.tr kimler için uygun?",
      desc: "Türkiye odaklı şirketler, markalar ve yerel güven vurgusu isteyen işletmeler için güçlü tercihtir.",
    },
    {
      title: ".com ne zaman seçilmeli?",
      desc: "Uluslararası görünmek isteyen, kısa ve global bir yapı isteyen markalar için idealdir.",
    },
    {
      title: ".net ve .io ne zaman mantıklı?",
      desc: "Teknoloji, yazılım, SaaS ve girişim projelerinde modern bir algı oluşturabilir.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Seçim Rehberi
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Doğru domain nasıl seçilir?
          </h2>

          <div className="space-y-4 mt-8">
            {[
              "Kısa, kolay yazılabilir ve kolay hatırlanır olsun",
              "Marka adıyla mümkün olduğunca birebir örtüşsün",
              "Telaffuzu net olsun",
              "Mümkünse tire ve karmaşık karakterlerden kaçının",
              "Hedef kitlenize uygun uzantıyı seçin",
              "Marka koruması için birden fazla uzantı düşünün",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-600 mt-0.5 shrink-0"
                />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="rounded-3xl bg-slate-50 border border-slate-200 p-6"
            >
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                {guide.title}
              </h3>
              <p className="text-slate-600 leading-7">{guide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainBottomCTA() {
  const router = useRouter();

  return (
    <section className="bg-[#060d1a] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
          Hazırsanız Başlayın
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Markanıza uygun alan adını şimdi kontrol edin
        </h2>
        <p className="text-slate-300 leading-8 max-w-2xl mx-auto mb-8">
          İsterseniz tek bir uzantı, isterseniz marka koruması için birden fazla
          uzantıyı birlikte sorgulayın.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push("/domain/results?q=markaniz")}
            className="h-12 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition"
          >
            Alan Adı Sorgula
          </button>

          <button
            onClick={() => router.push("/domain/transfer")}
            className="h-12 px-6 rounded-2xl border border-white/15 text-white hover:bg-white/5 font-semibold transition"
          >
            Domain Transferi
          </button>
        </div>
      </div>
    </section>
  );
}

export default function DomainHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <DomainInfoHero />
      <DomainWhatIsSection />
      <DomainWhyImportantSection />
      <DomainGuideSection />
      <DomainBottomCTA />
    </main>
  );
}
