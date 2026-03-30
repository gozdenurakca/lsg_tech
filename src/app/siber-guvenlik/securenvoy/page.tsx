import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import InfoSection from "@/components/marketing/InfoSection";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import { ICONS } from "@/lib/icons";

export const metadata = {
  title: "SecurEnvoy MFA | Kurumsal Kimlik Doğrulama | LSG Teknoloji",
  description:
    "Biyometri, push bildirimi, SMS ve donanım token ile çok faktörlü kimlik doğrulama. Active Directory, Azure AD ve VPN entegrasyonu. 10'dan 500.000+ kullanıcıya kadar ölçeklenebilir.",
};

const MFAVisual = (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-blue-600/25 blur-3xl" />

    {/* Auth flow mock */}
    <div className="relative z-10 flex flex-col items-center gap-3 px-8 py-6 w-full max-w-xs">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/securenvoy.png"
          alt="SecurEnvoy"
          className="w-6 h-6 object-contain brightness-0 invert opacity-80"
        />
        <span className="text-white/70 text-xs font-semibold tracking-wide">
          SecurEnvoy MFA
        </span>
      </div>

      {/* Step 1 – password */}
      <div className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6.5L4.5 9L10 3"
              stroke="#34d399"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-white/50 text-[9px] uppercase tracking-wider font-bold">
            Adım 1
          </p>
          <p className="text-white text-xs font-semibold">
            Kullanıcı adı &amp; şifre
          </p>
        </div>
      </div>

      {/* Arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-blue-400 opacity-60"
      >
        <path
          d="M7 2v10M3 8l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Step 2 – MFA */}
      <div className="w-full bg-blue-600/20 border border-blue-500/40 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/60 flex items-center justify-center shrink-0 animate-pulse">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <rect
              x="1"
              y="5"
              width="9"
              height="5.5"
              rx="1.2"
              stroke="#93c5fd"
              strokeWidth="1.3"
            />
            <path
              d="M3 5V3.5a2.5 2.5 0 015 0V5"
              stroke="#93c5fd"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-blue-300/70 text-[9px] uppercase tracking-wider font-bold">
            Adım 2
          </p>
          <p className="text-white text-xs font-semibold">
            İkinci faktör doğrulama
          </p>
        </div>
      </div>

      {/* Method chips */}
      <div className="flex gap-1.5 flex-wrap justify-center">
        {["Push", "SMS", "Biyometri", "Token"].map((m) => (
          <span
            key={m}
            className="px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/50 text-[9px] font-semibold"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-blue-400 opacity-60"
      >
        <path
          d="M7 2v10M3 8l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Step 3 – access */}
      <div className="w-full bg-emerald-600/15 border border-emerald-500/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6.5L4.5 9L10 3"
              stroke="#34d399"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-emerald-400/70 text-[9px] uppercase tracking-wider font-bold">
            Adım 3
          </p>
          <p className="text-white text-xs font-semibold">
            Güvenli erişim sağlandı
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ── Page ─────────────────────────────────────────────────────── */
export default function SecurEnvoyPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <Hero
        badge={{ icon: "shieldCheck", label: "Multi-Factor Authentication" }}
        title="SecurEnvoy MFA"
        subtitle="Şifre çalınsa bile sisteme girişi engelle. Biyometri, push bildirimi ve akıllı kart ile kurumsal düzeyde çok faktörlü kimlik doğrulama."
        imageSrc="/images/securenvoy.png"
        imageAlt="SecurEnvoy MFA güvenlik görseli"
        items={[
          {
            icon: "shieldCheck",
            title: "Sıfır Güven Mimarisi",
            desc: "Zero Trust yaklaşımı ile her erişim ayrıca doğrulanır",
          },
          {
            icon: "zap",
            title: "Anında Entegrasyon",
            desc: "Active Directory, Azure AD ve VPN ile dakikalar içinde çalışır",
          },
          {
            icon: "users",
            title: "500.000+ Kullanıcı",
            desc: "Küçük ekipten büyük enterprise'a ölçeklenebilir",
          },
        ]}
        primaryButton={{ label: "Demo Talep Et", href: "/#teklif" }}
        secondaryButton={{ label: "Teknik Doküman", href: "#", modal: true, productName: "SecurEnvoy" }}
      />

      {/* TRUSTBAR – MFA flow visual */}
      <TrustBar
        id="nasil-calisir"
        title="Şifre tek başına yetmez"
        description="SecurEnvoy MFA, klasik kullanıcı adı + şifre girişinin üstüne ek doğrulama katmanları ekler. Risk yüksek olduğunda sistem otomatik olarak daha güçlü faktör talep eder."
        visual={MFAVisual}
        stats={[
          {
            value: "6+",
            label:
              "Doğrulama yöntemi (Push, SMS, Biyometri, Token ve daha fazlası)",
          },
          {
            value: "4",
            label: "Deployment seçeneği (On-prem, Cloud, Managed, Private)",
          },
          { value: "500K+", label: "Ölçeklenebilir kullanıcı kapasitesi" },
          { value: "0 Şifre", label: "Passwordless & Zero Trust uyumlu giriş" },
        ]}
      />

      {/* FEATURES SECTION */}
      <section id="ozellikler" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 mb-3">
              Özellikler
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Kurumsal MFA&apos;nın tüm gücü
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              SecurEnvoy, tek bir platformda tüm kimlik doğrulama ihtiyaçlarını
              karşılar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: ICONS.mfa,
                title: "Çok Yönlü Doğrulama",
                desc: "Biyometri (parmak izi, yüz tanıma), push bildirimi, SMS OTP, e-posta OTP, donanım token ve akıllı kart.",
                accent: "border-blue-200 bg-blue-50/50",
                badge: "6+ Yöntem",
                badgeClass: "bg-blue-100 text-blue-700",
              },
              {
                icon: ICONS.adaptive,
                title: "Adaptif MFA",
                desc: "Risk durumuna göre doğrulama gücü otomatik ayarlanır. Farklı ülkeden giriş → ekstra doğrulama.",
                accent: "border-indigo-200 bg-indigo-50/50",
                badge: "Akıllı Risk Analizi",
                badgeClass: "bg-indigo-100 text-indigo-700",
              },
              {
                icon: ICONS.integration,
                title: "Kolay Entegrasyon",
                desc: "Active Directory, LDAP, Azure AD ile entegre olur. VPN ve SaaS platformlarına kolayca eklenir.",
                accent: "border-cyan-200 bg-cyan-50/50",
                badge: "Altyapıyı Koru",
                badgeClass: "bg-cyan-100 text-cyan-700",
              },
              {
                icon: ICONS.cloud,
                title: "Esnek Deployment",
                desc: "On-premise, AWS, Azure veya private cloud. Kuruma uygun esnek yapı.",
                accent: "border-violet-200 bg-violet-50/50",
                badge: "4 Deployment Seçeneği",
                badgeClass: "bg-violet-100 text-violet-700",
              },
              {
                icon: ICONS.passwordless,
                title: "Şifresiz Giriş",
                desc: "Passwordless ile sadece biyometri veya push ile güvenli erişim.",
                accent: "border-emerald-200 bg-emerald-50/50",
                badge: "Zero Trust Uyumlu",
                badgeClass: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: ICONS.scale,
                title: "Enterprise Ölçek",
                desc: "10 kullanıcıdan 500.000+ kullanıcıya kadar sorunsuz ölçeklenir.",
                accent: "border-amber-200 bg-amber-50/50",
                badge: "Sınırsız Büyüme",
                badgeClass: "bg-amber-100 text-amber-700",
              },
            ].map((f) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.title}
                  className={`border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${f.accent}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    {/* 🔥 ICON */}
                    <div className="p-2 rounded-lg bg-white shadow-sm border">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${f.badgeClass}`}
                    >
                      {f.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[15px]">
                    {f.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks
        id="nasil-calisir-adimlar"
        title="Nasıl Çalışır?"
        subtitle="3 basit adımda kurumsal güvenlik"
        accentColor="indigo"
        visual="number"
        visualBg="from-[#0f172a] via-[#1e3a8a] to-[#0f172a]"
        steps={[
          {
            title: "Kullanıcı adı ve şifre gir",
            desc: "Kullanıcı sisteme standart kullanıcı adı ve şifresiyle giriş yapar. Bu ilk faktör doğrulanır.",
          },
          {
            title: "İkinci faktör doğrulaması",
            desc: "SecurEnvoy sistemi kullanıcının profiline ve risk durumuna göre push bildirimi, SMS, biyometri veya token talep eder.",
          },
          {
            title: "Güvenli erişim",
            desc: "Her iki faktör doğrulandıktan sonra kullanıcı sisteme erişir. Şifre çalınsa dahi ikinci faktör olmadan giriş mümkün değildir.",
          },
        ]}
      />

      {/* INFO */}
      <InfoSection
        title="SecurEnvoy MFA Nedir?"
        items={[
          {
            title:
              "SecurEnvoy MFA, kullanıcı girişlerini sadece şifre ile sınırlamayıp ek doğrulama katmanları ekleyen kurumsal bir güvenlik çözümüdür.",
            desc: "Klasik şifre sistemleri tek başına artık yeterli değildir. Kimlik avı, kaba kuvvet saldırıları veya veri sızıntıları ile şifre ele geçirildiğinde bile SecurEnvoy MFA sistemi korur. Zero Trust felsefesiyle tasarlanmış, her erişim noktasında doğrulama yapan bu çözüm; kurumunuzu insider threat ve dış saldırılara karşı güçlendirir.",
          },
          { title: "6+", desc: "Doğrulama yöntemi", icon: "shieldCheck" },
          { title: "%99.9", desc: "Uptime garantisi", icon: "zap" },
          { title: "500K+", desc: "Aktif kullanıcı", icon: "users" },
          { title: "12+ Yıl", desc: "Sektör deneyimi", icon: "trending" },
          {
            title: "Kullanım Alanları",
            desc: "VPN erişimi, Uzak masaüstü (RDP), Web panel ve yönetim panelleri, SaaS ve bulut uygulamalar, Sunucu ve veritabanı girişleri",
          },
        ]}
      />

      {/* FAQ */}
      <FaqSection
        eyebrow="Sık Sorulan Sorular"
        title="SecurEnvoy MFA Hakkında"
        faqs={[
          {
            q: "Mevcut Active Directory altyapım ile çalışır mı?",
            a: "Evet. SecurEnvoy, Active Directory, LDAP, Azure AD ve Google Directory ile tam entegrasyon sağlar. Mevcut kullanıcı veritabanınızı değiştirmenize gerek yoktur; SecurEnvoy mevcut dizininizin üstüne katman olarak eklenir.",
          },
          {
            q: "Kullanıcılar hangi cihazlardan doğrulama yapabilir?",
            a: "iOS ve Android mobil uygulama (push bildirim), SMS, e-posta, donanım token (OATH uyumlu), USB key ve akıllı kart desteklenmektedir. Kullanıcı veya yönetici tarafından en uygun yöntem seçilebilir.",
          },
          {
            q: "Adaptif MFA tam olarak nasıl çalışır?",
            a: "Sistem her giriş denemesini risk skoruyla değerlendirir: konum, cihaz, saat, önceki davranış gibi parametreler analiz edilir. Risk skoru yüksekse (farklı ülke, bilinmeyen cihaz vb.) sistem daha güçlü doğrulama ister; düşük riskli girişlerde kullanıcı deneyimini zorlaştırmaz.",
          },
          {
            q: "Şifresiz (passwordless) giriş nasıl yapılandırılır?",
            a: "SecurEnvoy'un passwordless modunda kullanıcı şifre yerine doğrudan biyometri (parmak izi / yüz tanıma) veya push bildirimi ile kimliğini doğrular. Zero Trust politikasıyla uyumlu olan bu mod, özellikle güvenlik seviyesinin kritik olduğu sistemler için önerilir.",
          },
          {
            q: "Kaç kullanıcıya kadar ölçeklenebilir?",
            a: "SecurEnvoy 10 kullanıcılık küçük ekiplerden 500.000+ kullanıcılı büyük enterprise ortamlara kadar ölçeklenebilir. Yüksek erişilebilirlik için kümeleme (clustering) ve yük dengeleme desteği mevcuttur.",
          },
        ]}
      />

      {/* CTA */}
      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <CTASection
          title="SecurEnvoy MFA'yı değerlendirmek ister misiniz?"
          subtitle="Uzman ekibimiz ihtiyacınıza özel deployment senaryosu hazırlar. Demo ve fiyat teklifi için ulaşın."
          buttonLabel="Ücretsiz Demo Talep Et"
          buttonHref="/#teklif"
        />
      </div>
    </main>
  );
}
