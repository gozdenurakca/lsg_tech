import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import InfoSection from "@/components/marketing/InfoSection";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import { ICONS } from "@/lib/icons";

export const metadata = {
  title: "Keeper | Parola & Gizli Bilgi Yönetimi | LSG Teknoloji",
  description:
    "Şifre kaosunu bitirin. Ekip parolaları, API anahtarları ve hassas bilgileri Zero-Knowledge şifreleme ile güvenli bir kasada yönetin. RBAC, dark web izleme ve secrets management tek platformda.",
};

const KeeperVaultVisual = (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a1e] via-[#1e1040] to-[#0a0f1e]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-violet-600/20 blur-3xl" />

    <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-6 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-1">
        <img
          src="/logos/keeper.png"
          alt="Keeper"
          className="w-6 h-6 object-contain brightness-0 invert opacity-80"
        />
        <span className="text-white/70 text-xs font-semibold tracking-wide">
          Keeper Vault
        </span>
      </div>

      <div className="w-full flex flex-col gap-1.5">
        {[
          {
            label: "Admin şifreleri",
            type: "Password",
            dot: "bg-violet-400",
            secure: true,
          },
          {
            label: "AWS_SECRET_KEY",
            type: "Secret",
            dot: "bg-amber-400",
            secure: true,
          },
          {
            label: "SSH private key",
            type: "SSH",
            dot: "bg-cyan-400",
            secure: true,
          },
          {
            label: "VPN erişim bilgileri",
            type: "Password",
            dot: "bg-violet-400",
            secure: true,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="w-full bg-white/5 border border-white/8 rounded-xl px-3 py-2 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.dot}`}
              />
              <span className="text-white text-[11px] font-semibold font-mono">
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-[9px] bg-white/5 px-1.5 py-0.5 rounded font-mono">
                {item.type}
              </span>
              <div className="w-4 h-4 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <rect
                    x="1"
                    y="3.5"
                    width="6"
                    height="4"
                    rx="0.8"
                    stroke="#34d399"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M2 3.5V2.5a2 2 0 014 0v1"
                    stroke="#34d399"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-gradient-to-r from-violet-600/15 to-purple-600/10 border border-violet-500/25 rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse shrink-0" />
        <p className="text-violet-300/80 text-[10px] font-semibold">
          Zero-Knowledge şifreleme — Keeper bile verinizi göremez
        </p>
      </div>

      <div className="w-full bg-white/4 border border-white/8 rounded-xl px-3 py-2.5">
        <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold mb-1.5">
          Dark Web İzleme
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          <p className="text-white/60 text-[10px]">
            gozdenurakca@lsgtekno.com — Sızıntı tespit edilmedi
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function KeeperPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{ icon: "key", label: "Password & Secrets Management" }}
        title="Keeper"
        subtitle="Şifrelerin Excel'de, Slack'te veya WhatsApp'ta dolaştığı dönemi bitirin. Tüm parola ve gizli bilgileri Zero-Knowledge güvenli bir kasada toplayın, ekiple güvenle paylaşın."
        imageSrc="/images/keeper.png"
        imageAlt="Keeper parola yönetim platformu görseli"
        imageGradient="from-[#0f0520] via-[#3b0764] to-[#0f0520]"
        items={[
          {
            icon: "lock",
            title: "Zero-Knowledge Vault",
            desc: "Şifreleme client-side yapılır — Keeper bile verinizi göremez",
          },
          {
            icon: "users",
            title: "Rol Bazlı Erişim",
            desc: "RBAC ile kim neye erişiyor tam kontrol altında",
          },
          {
            icon: "shieldCheck",
            title: "Secrets Management",
            desc: "API key, SSH credential ve DevOps secret'ları tek platformda",
          },
        ]}
        primaryButton={{ label: "Demo Talep Et", href: "/#teklif" }}
        secondaryButton={{ label: "Teknik Doküman", href: "/#teklif" }}
      />

      <TrustBar
        id="guvenli-kasa"
        title="Şifre kaosunun tek çözümü"
        description="Aynı şifre 10 yerde, Excel'de saklanan erişim bilgileri, Slack'te atılan API key'ler — bunların her biri ciddi bir güvenlik açığıdır. Keeper tüm hassas bilgileri Zero-Knowledge şifreli bir kasada toplar ve erişimi merkezi olarak kontrol eder."
        visual={KeeperVaultVisual}
        stats={[
          {
            value: "Zero-K",
            label: "Zero-Knowledge şifreleme — Keeper bile göremez",
          },
          {
            value: "RBAC",
            label: "Rol bazlı erişim kontrolü — kim neye erişiyor belli",
          },
          {
            value: "Dark Web",
            label: "Sürekli izleme — hesap sızıntısı anında tespit",
          },
          {
            value: "Secrets",
            label: "API key, SSH, DevOps secret yönetimi dahil",
          },
        ]}
      />

      <section id="ozellikler" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-violet-50 text-violet-600 border border-violet-100 mb-3">
              Özellikler
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Şifre güvenliğinin tüm boyutları
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Keeper, bireysel kullanıcıdan büyük enterprise ekibine kadar tüm
              parola ve gizli bilgi ihtiyaçlarını tek platformda çözer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: ICONS.vault,
                title: "Zero-Knowledge Vault",
                desc: "Tüm şifreler, belgeler ve hassas veriler güvenli kasada saklanır...",
                badge: "En Kritik Özellik",
                accent: "border-violet-200 bg-violet-50/40",
                badgeClass: "bg-violet-100 text-violet-700",
              },
              {
                icon: ICONS.team,
                title: "Takım & RBAC Yönetimi",
                desc: "Rol bazlı erişim kontrolü ile her çalışan yalnızca göreviyle ilgili bilgilere ulaşabilir...",
                badge: "IT Kontrolü",
                accent: "border-blue-200 bg-blue-50/40",
                badgeClass: "bg-blue-100 text-blue-700",
              },
              {
                icon: ICONS.key,
                title: "Secrets Management",
                desc: "API key, SSH credential, veritabanı şifresi ve DevOps secret'larını izole eder...",
                badge: "Developer İçin Kritik",
                accent: "border-cyan-200 bg-cyan-50/40",
                badgeClass: "bg-cyan-100 text-cyan-700",
              },
              {
                icon: ICONS.audit,
                title: "Güvenlik Skoru & Audit",
                desc: "Zayıf veya tekrar kullanılan şifreler tespit edilir...",
                badge: "Proaktif Güvenlik",
                accent: "border-amber-200 bg-amber-50/40",
                badgeClass: "bg-amber-100 text-amber-700",
              },
              {
                icon: ICONS.darkweb,
                title: "Dark Web İzleme",
                desc: "Şirket e-posta adresleri dark web veri tabanlarıyla karşılaştırılır...",
                badge: "Erken Uyarı",
                accent: "border-slate-200 bg-slate-50/40",
                badgeClass: "bg-slate-100 text-slate-700",
              },
              {
                icon: ICONS.device,
                title: "Her Cihazda Senkronizasyon",
                desc: "Telefon, laptop ve tarayıcıda otomatik senkronizasyon...",
                badge: "Her Yerde Erişim",
                accent: "border-emerald-200 bg-emerald-50/40",
                badgeClass: "bg-emerald-100 text-emerald-700",
              },
            ].map((f) => {
              const Icon = f.icon;

              return (
                <div
                  key={f.title}
                  className={`border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${f.accent}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    {/* 🔥 ICON FIX */}
                    {Icon && <Icon className="w-5 h-5 text-slate-700" />}

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
          <div className="mt-5 border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-1">
              LSG Stratejik Öneri
            </p>
            <p className="text-slate-700 font-semibold text-sm mb-4">
              SecurEnvoy + Keeper ={" "}
              <span className="text-violet-700 font-bold">
                Access Security Bundle
              </span>{" "}
              — kimlik güvenliğinin iki katmanı birlikte çok daha güçlü.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  logo: "/logos/securenvoy.png",
                  name: "SecurEnvoy",
                  role: "Girişte MFA",
                  accent: "border-blue-200 bg-white",
                },
                {
                  logo: "/logos/keeper.png",
                  name: "Keeper",
                  role: "Giriş bilgisi güvenliği",
                  accent:
                    "border-violet-200 bg-white ring-2 ring-violet-400/30",
                },
                {
                  logo: "/logos/venafi.png",
                  name: "Venafi",
                  role: "Sertifika yönetimi",
                  accent: "border-cyan-200 bg-white",
                },
                {
                  logo: "/logos/nospamproxy.png",
                  name: "NoSpamProxy",
                  role: "Mail güvenliği",
                  accent: "border-indigo-200 bg-white",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className={`border rounded-xl p-3 flex flex-col items-center gap-2 text-center ${s.accent}`}
                >
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-slate-800 text-xs font-bold">{s.name}</p>
                  <p className="text-slate-500 text-[10px]">{s.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks
        id="nasil-calisir"
        title="Nasıl Çalışır?"
        subtitle="Şifre kaosundan güvenli ve kontrollü erişime"
        accentColor="blue"
        visual="number"
        steps={[
          {
            title: "Tüm hassas bilgiler kasaya taşınır",
            desc: "Şifreler, API anahtarları, SSH credential'ları ve belgeler tek bir güvenli kasaya aktarılır. Tarayıcı eklentisi mevcut şifreleri otomatik olarak içe aktarabilir.",
          },
          {
            title: "Erişim rollere göre tanımlanır",
            desc: "RBAC ile her kullanıcı ve ekip yalnızca ilgili olduğu bilgilere erişebilir. Finans ekibi muhasebe sistemine, DevOps ekibi API key'lere erişirken diğerlerini göremez.",
          },
          {
            title: "Merkezi izleme ve otomatik uyarı",
            desc: "Güvenlik skoru takip edilir, zayıf şifreler raporlanır, dark web sızıntıları izlenir. Şüpheli erişimde ve hesap sızıntısında anında bildirim gönderilir.",
          },
        ]}
      />

      <InfoSection
        title="Keeper Nedir?"
        items={[
          {
            title:
              "Keeper, kullanıcıların ve ekiplerin şifrelerini, erişim bilgilerini ve hassas verilerini güvenli bir şekilde saklamasını, paylaşmasını ve yönetmesini sağlayan bir parola ve gizli bilgi yönetim platformudur.",
            desc: "Kurumsal güvenliğin en zayıf halkası çoğunlukla insan faktörüdür: aynı şifrenin birden fazla yerde kullanılması, şifrelerin Excel'de tutulması, API key'lerin Slack'te paylaşılması. Keeper bu davranışları tamamen ortadan kaldırır. Zero-Knowledge mimarisi sayesinde veriler yalnızca cihazda şifrelenerek saklanır; Keeper sunucularında bile okunabilir formatta bulunmaz. 1Password, LastPass ve Bitwarden'a kıyasla enterprise güvenliği ve secrets management tarafı öne çıkar.",
          },
          { title: "Zero-K", desc: "Zero-Knowledge şifreleme", icon: "lock" },
          { title: "RBAC", desc: "Rol bazlı erişim kontrolü", icon: "users" },
          {
            title: "Dark Web",
            desc: "Sürekli sızıntı izleme",
            icon: "shieldCheck",
          },
          { title: "Secrets", desc: "API key & SSH yönetimi", icon: "zap" },
          {
            title: "Kullanım Alanları",
            desc: "Kurumsal şifre yönetimi ve paylaşımı, DevOps secrets ve API key güvenliği, RBAC ile çalışan erişim yönetimi, Eski çalışan çıkışında erişim iptali, KVKK / SOC 2 uyum gerektiren ortamlar",
          },
        ]}
      />

      <FaqSection
        eyebrow="Sık Sorulan Sorular"
        title="Keeper Hakkında"
        faqs={[
          {
            q: "Zero-Knowledge şifreleme ne demek, neden önemli?",
            a: "Zero-Knowledge, şifreleme ve deşifreleme işlemlerinin yalnızca kullanıcının cihazında gerçekleştiği anlamına gelir. Keeper sunucularına yalnızca şifreli veri gönderilir; Keeper çalışanları veya bir saldırgan sunucuya erişse bile veriler okunamaz. Bu, herhangi bir veri sızıntısında bile gerçek verilerin korunduğunu garantiler.",
          },
          {
            q: "Secrets Management ile Password Manager arasındaki fark nedir?",
            a: "Password Manager insan kullanıcıların şifrelerini yönetir (web sitesi girişleri, uygulama şifreleri). Secrets Management ise sistemlerin ve uygulamaların birbirleriyle iletişimde kullandığı kimlik bilgilerini yönetir: API key, SSH key, veritabanı şifresi, token. Keeper her ikisini de tek platformda sunar.",
          },
          {
            q: "Çalışan ayrıldığında erişim gerçekten anında kesilebiliyor mu?",
            a: "Evet. Admin panelinden kullanıcı devre dışı bırakıldığında o kullanıcının tüm vault erişimi anında sonlanır. Paylaşılan klasörlere ve ortak şifrelere bir daha erişemez. RBAC yapısı sayesinde hangi bilgilere erişimin olduğu her zaman tam görünürlükle izlenebilir.",
          },
          {
            q: "Active Directory veya SSO ile entegrasyon var mı?",
            a: "Evet. Keeper; Active Directory, LDAP, Azure AD ve Okta gibi popüler SSO sağlayıcılarıyla entegre olur. Kullanıcı sağlama ve silme AD üzerinden otomatikleştirilebilir. Çalışan sisteme AD hesabıyla bağlandığında Keeper vault'u otomatik açılır.",
          },
          {
            q: "1Password veya LastPass'tan farkı nedir?",
            a: "Keeper'ın öne çıkan farkları: daha güçlü enterprise ve compliance özellikleri, native secrets management modülü, daha kapsamlı denetim ve raporlama. LastPass büyük güvenlik ihlalleri nedeniyle kurumsal güven kaybetti. 1Password daha çok developer odaklıdır. Keeper, compliance gerektiren sektörler (finans, sağlık, kamu) için daha uygun konumlanmaktadır.",
          },
        ]}
      />

      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <CTASection
          title="Şifre kaosunu bitirmek ister misiniz?"
          subtitle="SecurEnvoy MFA + Keeper ile tam Access Security Bundle oluşturun. Demo ve fiyat teklifi için uzman ekibimizle görüşün."
          buttonLabel="Ücretsiz Demo Talep Et"
          buttonHref="/#teklif"
        />
      </div>
    </main>
  );
}
