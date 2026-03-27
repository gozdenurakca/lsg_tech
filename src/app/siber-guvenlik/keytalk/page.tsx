import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import InfoSection from "@/components/marketing/InfoSection";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";

export const metadata = {
  title: "KeyTalk | Sertifika Dağıtım & PKI Otomasyonu | LSG Teknoloji",
  description:
    "Cihazlara ve kullanıcılara sertifikaları otomatik dağıtın. VPN, WiFi ve uygulama erişiminde şifre yerine sertifika ile Zero Trust device authentication. Tam PKI yaşam döngüsü otomasyonu.",
};

/* ── TrustBar visual — auto-enrollment flow ──────────────────── */
const KeyTalkVisual = (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center rounded-2xl overflow-hidden">
    {/* Gradient bg — KeyTalk'ın yeşil marka rengi */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#021a0e] via-[#04331a] to-[#021a0e]" />
    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-emerald-600/20 blur-3xl" />

    <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-6 w-full max-w-sm">

      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logos/keytalk.png" alt="KeyTalk" className="w-6 h-6 object-contain brightness-0 invert opacity-80" />
        <span className="text-white/70 text-xs font-semibold tracking-wide">Certificate Key Management System</span>
      </div>

      {/* Device requests access */}
      <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-slate-500/20 border border-slate-500/30 flex items-center justify-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <rect x="1" y="2" width="9" height="6.5" rx="1.2" stroke="#94a3b8" strokeWidth="1.2"/>
            <path d="M3.5 8.5h4M5.5 8.5v1" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold">Cihaz</p>
          <p className="text-white text-xs font-semibold">VPN / WiFi / Uygulama erişimi talep eder</p>
        </div>
      </div>

      {/* Arrow */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-400 opacity-60">
        <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* CKMS auto-enrollment */}
      <div className="w-full bg-emerald-600/20 border border-emerald-500/40 rounded-xl px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/60 flex items-center justify-center shrink-0 animate-pulse">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1L1.5 3v3c0 2 2 3 4 4 2-1 4-2 4-4V3L5.5 1z" stroke="#6ee7b7" strokeWidth="1.2" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-emerald-300/70 text-[9px] uppercase tracking-wider font-bold">KeyTalk CKMS</p>
            <p className="text-white text-xs font-semibold">Auto-enrollment · Dağıt · Yenile</p>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["Device Auth", "TLS/CLM", "S/MIME", "HSM"].map((m) => (
            <span key={m} className="px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/50 text-[9px] font-semibold">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-emerald-400 opacity-60">
        <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Certified access */}
      <div className="w-full bg-emerald-600/15 border border-emerald-500/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5L4.5 9L10 3" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-emerald-400/70 text-[9px] uppercase tracking-wider font-bold">Erişim Onaylandı</p>
          <p className="text-white text-xs font-semibold">Şifresiz · Sertifika ile · Zero Trust</p>
        </div>
      </div>

      {/* Zero Touch */}
      <div className="w-full bg-gradient-to-r from-emerald-600/15 to-teal-600/10 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <p className="text-emerald-300/80 text-[10px] font-semibold">Auto-enrollment — IT müdahalesi olmadan tam otomasyon</p>
      </div>

    </div>
  </div>
);

/* ── Page ─────────────────────────────────────────────────────── */
export default function KeyTalkPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <Hero
        badge={{ icon: "check", label: "Certificate Key Management System" }}
        title="KeyTalk"
        subtitle="Sertifikaları cihazlara manuel yükleme devri bitti. VPN, WiFi ve uygulama erişimlerinde şifre yerine sertifika ile Zero Trust kimlik doğrulama — tamamen otomatik."
        imageSrc="/images/security.png"
        imageAlt="KeyTalk sertifika dağıtım platformu görseli"
        imageGradient="from-[#021a0e] via-[#065f46] to-[#021a0e]"
        items={[
          { icon: "zap",         title: "Auto-Enrollment",       desc: "Kullanıcı login olur, sertifika otomatik yüklenir — IT müdahalesi sıfır" },
          { icon: "shieldCheck", title: "Zero Trust Device Auth", desc: "VPN ve WiFi erişiminde şifre yerine sertifika ile cihaz doğrulama" },
          { icon: "layers",      title: "Tam PKI Otomasyonu",     desc: "Dağıtım, yenileme ve geri çekme tamamen otomatikleşir" },
        ]}
        primaryButton={{ label: "Demo Talep Et", href: "/#teklif" }}
        secondaryButton={{ label: "Teknik Doküman", href: "/#teklif" }}
      />

      {/* TRUSTBAR */}
      <TrustBar
        id="platform"
        title="Sertifikayı cihaza kullanan sistem"
        description="Venafi sertifikaları görür ve yönetir; KeyTalk ise sertifikaları gerçekten cihazlara dağıtır ve kullanılır hale getirir. PKI'nin operasyonel ayağıdır — auto-enrollment ile kullanıcı login olduğunda sertifika otomatik gelir."
        visual={KeyTalkVisual}
        stats={[
          { value: "Auto",      label: "Enrollment — kullanıcı login olur, sertifika otomatik yüklenir" },
          { value: "802.1X",    label: "WiFi & VPN erişiminde sertifika tabanlı kimlik doğrulama" },
          { value: "HSM",       label: "Anahtarlar donanımsal güvenlik modülünde saklanır — bankacılık seviyesi" },
          { value: "0 Şifre",   label: "Cihaz erişimlerinde şifre tamamen kaldırılabilir" },
        ]}
      />

      {/* 3 USE CASES + FEATURES */}
      <section id="kullanim-alanlari" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 mb-3">
              3 Ana Kullanım Alanı
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              PKI&apos;yi operasyona taşıyan platform
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              KeyTalk, sertifika yaşam döngüsünün üç kritik alanında tam otomasyon sağlar.
            </p>
          </div>

          {/* 3 core use cases */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {[
              {
                icon: "🖥️",
                title: "Device Authentication (DA)",
                desc: "En güçlü kullanım alanı. VPN, WiFi (802.1X) ve kurumsal uygulamalara şifre yerine sertifika ile erişim. Her cihaz kendi kimliğini sertifika ile kanıtlar — Zero Trust device access.",
                tag: "En Kritik Use-Case",
                accent: "border-emerald-200 bg-emerald-50/40",
                badgeClass: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: "🔄",
                title: "TLS/SSL Lifecycle (CLM)",
                desc: "Sertifika dağıtımı, yenileme ve geri çekme otomasyonu. Venafi'nin yönetim perspektifini tamamlayan operasyonel katman — sertifikayı sunuculara gerçekten deploy eden sistem.",
                tag: "PKI Operasyonu",
                accent: "border-teal-200 bg-teal-50/40",
                badgeClass: "bg-teal-100 text-teal-700",
              },
              {
                icon: "📧",
                title: "Secure Email (SES)",
                desc: "S/MIME sertifikası ile kurumsal mail imzalama ve şifreleme. Gönderen kimliği doğrulanır, içerik şifrelenir. NoSpamProxy ile birlikte tam e-posta güvenlik katmanı oluşturur.",
                tag: "S/MIME & İmzalama",
                accent: "border-cyan-200 bg-cyan-50/40",
                badgeClass: "bg-cyan-100 text-cyan-700",
              },
            ].map((u) => (
              <div key={u.title} className={`border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${u.accent}`}>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl">{u.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${u.badgeClass}`}>
                    {u.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-[15px]">{u.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>

          {/* Extra capabilities */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                icon: "⚡",
                title: "Auto-Enrollment",
                desc: "Kullanıcı sisteme login olduğunda sertifika otomatik talep edilir, onaylanır ve cihaza yüklenir. IT müdahalesi gerekmez.",
                badge: "Tam Otomasyon",
                badgeClass: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: "🔒",
                title: "HSM Desteği",
                desc: "Private key'ler donanımsal güvenlik modülünde (HSM) saklanır. Bankacılık ve finans sektörü standartlarına uygun anahtar güvenliği.",
                badge: "Bankacılık Seviyesi",
                badgeClass: "bg-amber-100 text-amber-700",
              },
              {
                icon: "🔗",
                title: "Geniş Entegrasyon",
                desc: "Active Directory, MDM, DigiCert, GlobalSign ve diğer CA'larla tam entegrasyon. Mevcut altyapıyı bozmadan konumlanır.",
                badge: "AD · MDM · CA",
                badgeClass: "bg-blue-100 text-blue-700",
              },
            ].map((c) => (
              <div key={c.title} className="border border-slate-200 bg-white rounded-2xl p-5 flex flex-col gap-2 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xl">{c.icon}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${c.badgeClass}`}>{c.badge}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-[14px]">{c.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Venafi + KeyTalk bundle + full LSG stack */}
          <div className="border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">LSG Stratejik Öneri</p>
            <p className="text-slate-700 font-semibold text-sm mb-4">
              Venafi + KeyTalk = <span className="text-emerald-700 font-bold">Full PKI Lifecycle</span> — Venafi yönetir, KeyTalk dağıtır ve kullandırır.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { logo: "/logos/digicert.svg",   name: "DigiCert",    role: "Üretir",       accent: "border-blue-200 bg-white"    },
                { logo: "/logos/venafi.png",      name: "Venafi",      role: "Yönetir",      accent: "border-cyan-200 bg-white"    },
                { logo: "/logos/keytalk.png",     name: "KeyTalk",     role: "Dağıtır",      accent: "border-emerald-200 bg-white ring-2 ring-emerald-400/30" },
                { logo: "/logos/securenvoy.png",  name: "SecurEnvoy",  role: "Doğrular",     accent: "border-indigo-200 bg-white"  },
                { logo: "/logos/keeper.png",      name: "Keeper",      role: "Saklar",       accent: "border-violet-200 bg-white"  },
                { logo: "/logos/nospamproxy.png", name: "NoSpamProxy", role: "Mail korur",   accent: "border-slate-200 bg-white"   },
              ].map((s) => (
                <div key={s.name} className={`border rounded-xl p-2.5 flex flex-col items-center gap-1.5 text-center ${s.accent}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.logo} alt={s.name} className="w-7 h-7 object-contain" />
                  <p className="text-slate-800 text-[11px] font-bold leading-tight">{s.name}</p>
                  <p className="text-slate-500 text-[9px]">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks
        id="nasil-calisir"
        title="Nasıl Çalışır?"
        subtitle="Sertifikanın üretiminden cihaza teslimine tam otomasyon"
        accentColor="emerald"
        visual="number"
        steps={[
          {
            title: "Cihaz veya kullanıcı sisteme bağlanmak ister",
            desc: "Çalışan VPN, WiFi veya kurumsal uygulamaya erişmeye çalışır. KeyTalk CKMS bu talebi yakalar; kullanıcının ve cihazın Active Directory veya MDM üzerindeki kimliği doğrulanır.",
          },
          {
            title: "Sertifika otomatik talep edilir ve dağıtılır",
            desc: "Kimlik doğrulandıktan sonra CKMS otomatik olarak CA'ya (DigiCert, GlobalSign vb.) sertifika talebi gönderir, onaylı sertifikayı alır ve cihaza yükler. Tüm süreç arka planda, saniyeler içinde tamamlanır.",
          },
          {
            title: "Şifresiz, sertifika tabanlı güvenli erişim",
            desc: "Cihaz sertifikasıyla kimliğini kanıtlar ve sisteme erişir. Sertifika süresine yaklaştığında otomatik yenileme başlar. IT departmanının müdahalesine gerek yoktur.",
          },
        ]}
      />

      {/* INFO */}
      <InfoSection
        title="KeyTalk Nedir?"
        items={[
          {
            title: "KeyTalk, cihazlara ve kullanıcılara sertifikaların otomatik olarak dağıtılmasını ve yönetilmesini sağlayan, PKI süreçlerini tamamen otomatikleştiren bir sertifika anahtar yönetim platformudur.",
            desc: "Venafi sertifikaların nerede olduğunu görmemizi sağlarken, KeyTalk o sertifikaları gerçekten cihazlara ulaştırır ve kullanılır hale getirir. Auto-enrollment sayesinde çalışan sisteme login olduğunda sertifika otomatik gelir; IT birimi tek tek cihaza sertifika yüklemek zorunda kalmaz. 802.1X WiFi, VPN erişimi ve S/MIME mail imzalama için şifreye olan bağımlılığı ortadan kaldırır. DigiCert ve diğer CA'larla doğrudan entegrasyon ile mevcut PKI altyapısı güçlendirilir.",
          },
          { title: "Auto",     desc: "Enrollment otomasyonu",      icon: "zap"        },
          { title: "802.1X",   desc: "WiFi & VPN device auth",     icon: "shieldCheck" },
          { title: "HSM",      desc: "Donanımsal anahtar güvenliği", icon: "lock"      },
          { title: "0 Şifre",  desc: "Cihaz erişiminde passwordless", icon: "trending" },
          {
            title: "Kullanım Alanları",
            desc: "Kurumsal VPN ve WiFi cihaz kimlik doğrulama, S/MIME mail imzalama ve şifreleme, Büyük ölçekli sertifika deployment otomasyonu, Zero Trust altyapısı kuran enterprise'lar, Bankalar ve finans kurumları (HSM desteği)",
          },
        ]}
      />

      {/* FAQ */}
      <FaqSection
        eyebrow="Sık Sorulan Sorular"
        title="KeyTalk Hakkında"
        faqs={[
          {
            q: "Venafi zaten varsa neden ayrıca KeyTalk'a ihtiyacım var?",
            a: "Venafi sertifikaların envanterini tutar, süresini izler ve politikalarını yönetir — yani 'beyin' rolünü üstlenir. KeyTalk ise bu sertifikaları gerçekten cihazlara dağıtır, auto-enrollment ile kullanılır hale getirir — yani 'kas' rolünü üstlenir. İkisi birlikte tam PKI lifecycle oluşturur: Venafi olmadan KeyTalk kör dağıtım yapar, KeyTalk olmadan Venafi yalnızca görünürlük sağlar.",
          },
          {
            q: "Auto-enrollment tam olarak nasıl çalışır?",
            a: "Kullanıcı veya cihaz sisteme bağlanmak istediğinde KeyTalk CKMS Active Directory üzerinden kimliği doğrular, yetkili olduğunu teyit eder, CA'ya otomatik sertifika talebi gönderir, onaylanan sertifikayı alır ve cihaza yükler. Tüm bu süreç saniyeler içinde ve IT müdahalesi olmadan tamamlanır.",
          },
          {
            q: "802.1X WiFi authentication neden önemli?",
            a: "802.1X, kurumsal WiFi ağına erişimi sertifika veya kimlik bilgisi gerektirerek güvence altına alan bir standarttır. Şifre yerine sertifika kullanıldığında ağa yetkisiz cihaz bağlanamaz; şifre paylaşımı veya çalınması gibi riskler tamamen ortadan kalkar. KeyTalk bu sertifikaları otomatik dağıtarak 802.1X kurulumunu operasyonel açıdan uygulanabilir kılar.",
          },
          {
            q: "HSM desteği neden önemli ve kimler için gerekli?",
            a: "HSM (Hardware Security Module), private key'lerin yazılım yerine özel donanımda saklanmasını sağlar. Bu sayede sunucu ele geçirilse bile anahtarlar çıkarılamaz. Bankacılık, finans, kamu ve sağlık sektörü gibi yüksek güvenlik gerektiren ya da PCI-DSS, eIDAS gibi uyumluluk standartlarına tabi kurumlar için zorunludur.",
          },
          {
            q: "Mevcut DigiCert sertifikalarımla uyumlu mu?",
            a: "Evet. KeyTalk, DigiCert başta olmak üzere GlobalSign, Sectigo ve diğer önde gelen CA'larla entegre çalışır. Halihazırda DigiCert kullanıyorsanız KeyTalk bu sertifikaların dağıtım ve yaşam döngüsü otomasyonunu üstlenir. LSG üzerinden DigiCert + KeyTalk kombinasyonu için özel paket oluşturulabilir.",
          },
        ]}
      />

      {/* CTA */}
      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <CTASection
          title="PKI dağıtımını otomatikleştirmek ister misiniz?"
          subtitle="Venafi + KeyTalk ile tam PKI lifecycle kurun. Sertifika dağıtım otomasyonu için uzman ekibimizle görüşün."
          buttonLabel="Ücretsiz Demo Talep Et"
          buttonHref="/#teklif"
        />
      </div>

    </main>
  );
}
