/*
landing page for each TLD
mesela ; /domain/com veya /domain/com.tr
SEO + conversion page
*/
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Zap,
  Globe,
  Headphones,
  Check,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Mail,
  Globe2,
  BadgeCheck,
  ShoppingCart,
  Link2,
  Monitor,
  Code2,
  Wifi,
  Wrench,
  Users,
  Heart,
  GraduationCap,
  Leaf,
  Rocket,
  BarChart2,
  Bot,
  Server,
  Lock,
  Wallet,
  type LucideIcon,
} from "lucide-react";

interface Fact {
  icon: LucideIcon;
  bg: string;
  color: string;
  title: string;
  desc: string;
}

const TLD_DATA: Record<
  string,
  {
    ext: string;
    headline: string;
    sub: string;
    price: number;
    oldPrice?: number;
    accentBg: string;
    accentText: string;
    accentIconBg: string;
    heroBg: string;
    tag: string;
    facts: Fact[];
    steps: string[];
  }
> = {
  "com-tr": {
    ext: ".com.tr",
    headline: ".com.tr — Türkiye'deki markanızın dijital kilit taşı",
    sub: "Türk kullanıcıların ilk baktığı uzantı. Hem yerel arama motorlarında hem müşteri güveninde fark yaratır.",
    price: 149,
    oldPrice: 299,
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentIconBg: "bg-blue-100",
    heroBg: "from-blue-50/60 to-white",
    tag: "Türkiye #1",
    facts: [
      {
        icon: MapPin,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Yerel güven",
        desc: "Türk tüketiciler .com.tr'ye güveniyor — bilinçsiz bir tercihin ötesinde bir karar.",
      },
      {
        icon: TrendingUp,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "SEO avantajı",
        desc: "Google Türkiye'de .com.tr adresleri yerel aramalar için daha üst sıralarda çıkar.",
      },
      {
        icon: "ShieldCheck",
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "NIC.tr güvencesi",
        desc: "Yalnızca Türkiye'deki gerçek kişi ve şirketler tarafından tescil edilebilir.",
      },
      {
        icon: Mail,
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Kurumsal e-posta",
        desc: "siz@firmaniz.com.tr adresiyle müşteri yazışmalarınıza profesyonellik katın.",
      },
    ],
    steps: [
      "Alan adı kutusuna marka veya proje adınızı yazın",
      "Müsaitlik kontrolü tamamlandığında size gösterilir",
      "Sepete ekleyin — isteğe bağlı hosting ve SSL ile tamamlayın",
      "Ödemenizin ardından domain dakikalar içinde aktif olur",
    ],
  },
  com: {
    ext: ".com",
    headline: ".com — Küresel sahneye açılan kapı",
    sub: "İnternetteki en tanınan uzantı. Müşterileriniz nerede olursa olsun sizi bulur.",
    price: 299,
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentIconBg: "bg-emerald-100",
    heroBg: "from-emerald-50/60 to-white",
    tag: "Global standart",
    facts: [
      {
        icon: "Globe"2,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "Evrensel tanınırlık",
        desc: "Herhangi bir kullanıcı bir marka adı duyduğunda aklına ilk gelen uzantı .com'dur.",
      },
      {
        icon: BadgeCheck,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Yatırımcı güveni",
        desc: ".com adresi, girişiminizin ciddiye alınmasını kolaylaştıran görünmez bir sinyal.",
      },
      {
        icon: ShoppingCart,
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "E-ticaret için ideal",
        desc: "Uluslararası müşterilere satış yapmayı planlıyorsanız .com olmazsa olmaz.",
      },
      {
        icon: Link2,
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Kolay hatırlanır",
        desc: "Kısa .com adresleri ağızdan ağıza daha hızlı yayılır.",
      },
    ],
    steps: [
      "İstediğiniz marka adını sorgulama kutusuna girin",
      "Müsait .com adresler anında listelenir",
      "Ek hizmetlerle (hosting, e-posta) birlikte sepete ekleyin",
      "Ödeme sonrası alan adınız hemen kullanıma hazır",
    ],
  },
  net: {
    ext: ".net",
    headline: ".net — Yazılım ve teknoloji markalarının doğal adresi",
    sub: "Teknik kimliğinizi taşıyan, sektörde köklü bir uzantı. IT firmalarının ilk tercihlerinden biri.",
    price: 259,
    oldPrice: 349,
    accentBg: "bg-violet-600",
    accentText: "text-violet-600",
    accentIconBg: "bg-violet-100",
    heroBg: "from-violet-50/60 to-white",
    tag: "Teknoloji",
    facts: [
      {
        icon: Monitor,
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "IT sektörü standardı",
        desc: "Yazılım, altyapı ve ağ hizmetleri için onlarca yıldır güvenilen uzantı.",
      },
      {
        icon: "Zap",
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Teknik otorite",
        desc: ".net adresi, teknik bir şirket olduğunuzu kelimesiz anlatır.",
      },
      {
        icon: Code2,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "API & platform",
        desc: "Geliştirici araçları, SaaS ürünleri ve API portalları için ideal.",
      },
      {
        icon: Wifi,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "Ağ altyapısı",
        desc: "ISP, veri merkezi ve ağ sağlayıcıları için geleneksel tercih.",
      },
    ],
    steps: [
      "Proje veya ürün adınızı arama kutusuna yazın",
      ".net uzantısının müsaitliği kontrol edilir",
      "Hosting ve e-posta ile birlikte paketleyin",
      "Ödeme sonrası aktif olur",
    ],
  },
  org: {
    ext: ".org",
    headline: ".org — Fark yaratan projelerin adresi",
    sub: "Kâr amacı gütmeyen her yapı için. Bağışçılarda, gönüllülerde ve medyada güven inşa eder.",
    price: 229,
    accentBg: "bg-rose-600",
    accentText: "text-rose-600",
    accentIconBg: "bg-rose-100",
    heroBg: "from-rose-50/60 to-white",
    tag: "NGO & Vakıflar",
    facts: [
      {
        icon: Users,
        bg: "bg-rose-50",
        color: "text-rose-600",
        title: "Sivil toplum standardı",
        desc: "Dernek, vakıf ve STK'lar için uluslararası düzeyde en tanınan uzantı.",
      },
      {
        icon: Heart,
        bg: "bg-pink-50",
        color: "text-pink-600",
        title: "Bağış güveni",
        desc: ".org adresi olan kuruluşlara bağışçılar daha kolay güvenir.",
      },
      {
        icon: GraduationCap,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Eğitim & araştırma",
        desc: "Üniversiteler, araştırma grupları ve eğitim platformları için uygun.",
      },
      {
        icon: Leaf,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "Sosyal etki",
        desc: "Misyonunuzu ziyaretçiye alan adından iletmenin en dolaysız yolu.",
      },
    ],
    steps: [
      "Kuruluş veya proje adınızı girin",
      ".org müsaitliği saniyeler içinde gösterilir",
      "Kurumsal e-posta ile birlikte ekleyin",
      "Ödeme sonrası domain aktif olur",
    ],
  },
  io: {
    ext: ".io",
    headline: ".io — Ürün odaklı startup'ların tercihi",
    sub: "Yatırımcılar ve geliştiriciler .io'yu tanır. SaaS, API ve teknik ürünler için güçlü sinyal.",
    price: 699,
    accentBg: "bg-cyan-600",
    accentText: "text-cyan-600",
    accentIconBg: "bg-cyan-100",
    heroBg: "from-cyan-50/60 to-white",
    tag: "Startup & SaaS",
    facts: [
      {
        icon: Rocket,
        bg: "bg-cyan-50",
        color: "text-cyan-600",
        title: "Startup kültürü",
        desc: ".io, tech dünyasında 'biz bir ürün şirketiyiz' mesajını sessizce verir.",
      },
      {
        icon: Code2,
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "Geliştirici topluluğu",
        desc: "Developer portalları ve açık kaynak projeleri için doğal seçim.",
      },
      {
        icon: BarChart2,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "SaaS & dashboard",
        desc: "app.sirketiniz.io gibi subdomain kullanımı yaygın ve şık görünür.",
      },
      {
        icon: Bot,
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "AI & veri",
        desc: "Yapay zeka ve veri odaklı girişimler için trend uzantı.",
      },
    ],
    steps: [
      "Ürün veya startup adınızı sorgulayın",
      ".io versiyonunun müsaitliği kontrol edilir",
      "İsteğe bağlı hosting ile paketi tamamlayın",
      "Ödemenizin ardından hemen aktif",
    ],
  },
  "net-tr": {
    ext: ".net.tr",
    headline: ".net.tr — Türkiye'deki teknoloji kimliğiniz",
    sub: "Türk teknoloji şirketleri için yerel güven ile teknik kimliği aynı adreste birleştirin.",
    price: 149,
    oldPrice: 249,
    accentBg: "bg-amber-600",
    accentText: "text-amber-600",
    accentIconBg: "bg-amber-100",
    heroBg: "from-amber-50/60 to-white",
    tag: "Türkiye Teknoloji",
    facts: [
      {
        icon: Server,
        bg: "bg-amber-50",
        color: "text-amber-600",
        title: "Ağ & altyapı",
        desc: "Türkiye'deki ISP, ağ sağlayıcıları ve altyapı firmaları için standart uzantı.",
      },
      {
        icon: MapPin,
        bg: "bg-blue-50",
        color: "text-blue-600",
        title: "Yerel SEO",
        desc: "Türk kullanıcılara yönelik teknoloji hizmetlerinde organik görünürlük avantajı.",
      },
      {
        icon: "Lock",
        bg: "bg-violet-50",
        color: "text-violet-600",
        title: "NIC.tr güvencesi",
        desc: ".com.tr gibi yalnızca Türk kişi ve şirketlere kayıt imkânı tanınır.",
      },
      {
        icon: Wallet,
        bg: "bg-emerald-50",
        color: "text-emerald-600",
        title: "Uygun maliyet",
        desc: "Teknik kimliği yüksek, bütçeye dost bir uzantı seçeneği.",
      },
    ],
    steps: [
      "Marka veya proje adınızı girin",
      ".net.tr müsaitliği kontrol edilir",
      "Hosting ve e-posta ile birlikte tamamlayın",
      "Ödeme sonrası aktif olur",
    ],
  },
};

const TRUST = [
  { icon : "shield", label: "SSL dahil", desc: "Tüm paketlerde" },
  { icon: "Zap", label: "Anında aktif", desc: "Dakikalar içinde" },
  { icon: "Globe", label: "DNS yönetimi", desc: "Tam kontrol sizde" },
  { icon: Headphones, label: "7/24 destek", desc: "Türkçe yardım hattı" },
];

export default function DomainTldPage({ slug }: { slug: string }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const meta = TLD_DATA[slug];

  if (!meta)
    return (
      <main className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Bu uzantı bulunamadı.</p>
          <Link href="/domain" className="text-sky-600 hover:underline">
            Alan adlarına dön
          </Link>
        </div>
      </main>
    );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const t = query.trim();
    if (!t) return;
    router.push(
      `/domain/results?q=${encodeURIComponent(t)}&tld=${encodeURIComponent(meta.ext)}`,
    );
  };

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link
          href="/domain"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-700 text-sm transition-colors"
        >
          <ArrowLeft size={14} /> Tüm uzantılar
        </Link>
      </div>

      <section className={`bg-gradient-to-br ${meta.heroBg} px-6 py-14`}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className={`${meta.accentBg} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4`}
            >
              {meta.tag}
            </span>
            <h1 className="text-slate-900 font-extrabold text-2xl md:text-3xl leading-tight mb-4">
              {meta.headline}
            </h1>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {meta.sub}
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              {meta.oldPrice && (
                <span className="text-slate-300 text-base line-through">
                  ₺{meta.oldPrice}
                </span>
              )}
              <span className={`font-black text-4xl ${meta.accentText}`}>
                ₺{meta.price}
              </span>
              <span className="text-slate-400 text-sm">/yıl</span>
            </div>
            {meta.oldPrice && (
              <p className="text-xs text-slate-400 mb-6">
                İlk yıl {Math.round((1 - meta.price / meta.oldPrice) * 100)}%
                indirimle
              </p>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
            <p className="text-slate-700 font-semibold text-sm mb-1">
              <span className={meta.accentText}>{meta.ext}</span> uzantısını
              sorgula
            </p>
            <p className="text-slate-400 text-xs mb-5">
              Alan adınızı yazın, müsaitliğini anında kontrol edin
            </p>
            <form onSubmit={handleSearch} className="flex flex-col gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="markaniniz"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white"
                autoFocus
              />
              <button
                type="submit"
                className={`${meta.accentBg} hover:opacity-90 text-white font-bold py-3 rounded-xl text-sm transition-opacity`}
              >
                Sorgula →
              </button>
            </form>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
              {[
                { icon: Check, label: "Ücretsiz DNS" },
                { icon: Check, label: "SSL dahil" },
                { icon: Check, label: "7/24 destek" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1 text-xs text-slate-500"
                >
                  <Icon size={11} className={meta.accentText} /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-slate-900 font-extrabold text-xl mb-8 text-center">
            {meta.ext} neden doğru seçim?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {meta.facts.map(({ icon: Icon, bg, color, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 hover:shadow-sm hover:border-slate-300 transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}
                >
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">
                    {title}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-slate-900 font-extrabold text-xl mb-3">
              Nasıl kaydedilir?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Birkaç dakika içinde {meta.ext} alan adınızı tescil
              ettirebilirsiniz. Teknik bilgi gerektirmiyor — sadece aşağıdaki
              adımları izleyin.
            </p>
          </div>
          <ol className="flex flex-col gap-3">
            {meta.steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span
                  className={`w-7 h-7 rounded-full ${meta.accentBg} text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5`}
                >
                  {i + 1}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-slate-100 px-6 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl ${meta.accentIconBg} flex items-center justify-center shrink-0`}
              >
                <Icon size={16} className={meta.accentText} />
              </div>
              <div>
                <p className="text-slate-800 font-semibold text-xs">{label}</p>
                <p className="text-slate-400 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
