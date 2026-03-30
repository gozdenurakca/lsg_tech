import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import InfoSection from "@/components/marketing/InfoSection";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import { ICONS } from "@/lib/icons";

export const metadata = {
  title: "NoSpamProxy | E-posta Güvenlik Gateway | LSG Teknoloji",
  description:
    "Spam, virüs ve phishing'e karşı e-posta güvenlik duvarı. Otomatik şifreleme, büyük dosya transferi ve KVKK uyumu tek pakette.",
};

const EmailGatewayVisual = (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl" />

    <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-6 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-1">
        <img
          src="/logos/nospamproxy.png"
          alt="NoSpamProxy"
          className="w-6 h-6 object-contain brightness-0 invert opacity-80"
        />
        <span className="text-white/70 text-xs font-semibold tracking-wide">
          Email Security Gateway
        </span>
      </div>

      <div className="w-full bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-2.5 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <circle
              cx="5.5"
              cy="5.5"
              r="4.5"
              stroke="#f87171"
              strokeWidth="1.2"
            />
            <path
              d="M5.5 1C5.5 1 3.5 3 3.5 5.5s2 4.5 2 4.5M5.5 1C5.5 1 7.5 3 7.5 5.5S5.5 10 5.5 10M1 5.5h9"
              stroke="#f87171"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-red-300/70 text-[9px] uppercase tracking-wider font-bold">
            İnternet
          </p>
          <p className="text-white text-xs font-semibold">
            Spam · Virüs · Phishing · Zararlı Ekler
          </p>
        </div>
      </div>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-indigo-400 opacity-70"
      >
        <path
          d="M7 2v10M3 8l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="w-full bg-indigo-600/20 border border-indigo-500/40 rounded-xl px-4 py-3 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/60 flex items-center justify-center shrink-0 animate-pulse">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1.5 2.5h8L6.5 6v3.5l-2-1V6L1.5 2.5z"
                stroke="#a5b4fc"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-indigo-300/70 text-[9px] uppercase tracking-wider font-bold">
              NoSpamProxy Gateway
            </p>
            <p className="text-white text-xs font-semibold">
              Filtrele · Şifrele · Denetle
            </p>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["Koruma", "Şifreleme", "Büyük Dosya", "Feragatname"].map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/50 text-[9px] font-semibold"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-indigo-400 opacity-70"
      >
        <path
          d="M7 2v10M3 8l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

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
            Mail Sunucusu
          </p>
          <p className="text-white text-xs font-semibold">
            Exchange / Microsoft 365 — Temiz teslim
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function NoSpamProxyPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{ icon: "server", label: "Email Security Gateway" }}
        title="NoSpamProxy"
        subtitle="Şirketinizin tüm e-posta trafiğinin önüne konulan güvenlik duvarı. Spam, virüs ve phishing saldırılarını kullanıcıya ulaşmadan keser. KVKK uyumlu şifreleme ve büyük dosya transferi tek pakette."
        imageSrc="/images/nospamproxy.png"
        imageAlt="NoSpamProxy e-posta güvenlik gateway görseli"
        imageGradient="from-[#0d0f12] via-[#1e2530] to-[#111418]"
        items={[
          {
            icon: "shieldCheck",
            title: "Mail Firewall",
            desc: "Tüm e-posta trafiği kullanıcıya ulaşmadan önce denetlenir",
          },
          {
            icon: "lock",
            title: "Otomatik Şifreleme",
            desc: "TLS, S/MIME ve portal şifreleme ile KVKK/GDPR uyumu",
          },
          {
            icon: "layers",
            title: "Hepsi Bir Arada",
            desc: "Koruma, şifreleme ve dosya transferi tek platformda",
          },
        ]}
        primaryButton={{ label: "Demo Talep Et", href: "/#teklif" }}
        secondaryButton={{ label: "Teknik Doküman", href: "#", modal: true, productName: "NoSpamProxy" }}
      />

      <TrustBar
        id="nasil-calisir"
        title="E-posta güvenliğinin ilk katmanı"
        description="NoSpamProxy, mail sunucunuzun önüne konumlanır ve internet'ten gelen her mesajı filtreler. Spam, virüs, ransomware ve phishing içerikler kullanıcıya ulaşmadan engellenir."
        visual={EmailGatewayVisual}
        stats={[
          {
            value: "4 Modül",
            label: "Koruma, Şifreleme, Büyük Dosya, Feragatname",
          },
          { value: "%99.9+", label: "Spam tespit oranı" },
          {
            value: "Multi-tenant",
            label: "Tek sistem, çok müşteri — SaaS olarak satılabilir",
          },
          {
            value: "KVKK",
            label: "GDPR & KVKK uyumlu otomatik mail şifreleme",
          },
        ]}
      />

      <section id="moduller" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 mb-3">
              Modüller
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Tek pakette tam e-posta güvenliği
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Rakiplerde ayrı ayrı satılan çözümler NoSpamProxy&apos;de tek
              lisansla gelir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {[
              {
                num: "01",
                icon: ICONS.protection,
                title: "Koruma (Protection)",
                desc: "Spam filtreleme, malware ve ransomware tespiti...",
                tag: "Asıl Savunma Katmanı",
                accent: "border-indigo-200 bg-indigo-50/40",
                badgeClass: "bg-indigo-100 text-indigo-700",
              },
              {
                num: "02",
                icon: ICONS.encryption,
                title: "Şifreleme (Encryption)",
                desc: "Otomatik TLS, S/MIME ve portal şifreleme...",
                tag: "KVKK / GDPR Uyumu",
                accent: "border-violet-200 bg-violet-50/40",
                badgeClass: "bg-violet-100 text-violet-700",
              },
              {
                num: "03",
                icon: ICONS.files,
                title: "Büyük Dosyalar (Large Files)",
                desc: "E-posta eki boyut sınırını aşan dosyaları güvenli link ile gönderir...",
                tag: "Güvenli Dosya Transferi",
                accent: "border-cyan-200 bg-cyan-50/40",
                badgeClass: "bg-cyan-100 text-cyan-700",
              },
              {
                num: "04",
                icon: ICONS.disclaimer,
                title: "Feragatname (Disclaimer)",
                desc: "Giden tüm e-postalara otomatik yasal footer ekler...",
                tag: "Hukuki Uyumluluk",
                accent: "border-amber-200 bg-amber-50/40",
                badgeClass: "bg-amber-100 text-amber-700",
              },
            ].map((m) => {
              const Icon = m.icon;

              return (
                <div
                  key={m.title}
                  className={`border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${m.accent}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white shadow-sm border">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>

                      <span className="text-slate-300 text-2xl font-black">
                        {m.num}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${m.badgeClass}`}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[15px]">
                    {m.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: ICONS.tenant,
                title: "Multi-Tenant Yönetim",
                desc: "Aynı sistemde birden fazla müşteri izole şekilde yönetilir. LSG gibi servis sağlayıcılar için SaaS olarak sunulabilir.",
                badgeClass: "bg-slate-100 text-slate-600",
                badge: "MSP / SaaS",
              },
              {
                icon: ICONS.cloud,
                title: "Esnek Deployment",
                desc: "On-premise, cloud veya hybrid kurulum. Exchange ve Microsoft 365 ile tam uyumlu.",
                badgeClass: "bg-slate-100 text-slate-600",
                badge: "On-prem · Cloud · Hybrid",
              },
              {
                icon: ICONS.report,
                title: "Raporlama & Denetim",
                desc: "Tüm mail trafiği loglanır, izlenebilir ve raporlanabilir. Uyumluluk denetimleri için eksiksiz kayıt.",
                badgeClass: "bg-slate-100 text-slate-600",
                badge: "Tam Görünürlük",
              },
            ].map((c) => {
              const Icon = c.icon;

              return (
                <div
                  key={c.title}
                  className="border border-slate-200 bg-white rounded-2xl p-5 flex flex-col gap-2 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2 rounded-lg bg-slate-50 border">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${c.badgeClass}`}
                    >
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[14px]">
                    {c.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks
        id="nasil-calisir-adimlar"
        title="Nasıl Çalışır?"
        subtitle="E-posta trafiğinizin önüne konulan akıllı güvenlik katmanı"
        accentColor="slate"
        visual="number"
        visualBg="from-[#0d0f12] via-[#1e2530] to-[#111418]"
        steps={[
          {
            title: "İnternet'ten gelen e-posta NoSpamProxy'e ulaşır",
            desc: "Tüm gelen e-posta trafiği, mail sunucunuza (Exchange / M365) ulaşmadan önce NoSpamProxy gateway'inden geçer.",
          },
          {
            title: "Çok katmanlı analiz ve filtreleme",
            desc: "Spam skoru, virüs taraması, phishing tespiti, link analizi ve içerik denetimi eş zamanlı çalışır. Şüpheli mesajlar karantinaya alınır veya reddedilir.",
          },
          {
            title: "Temiz mesaj kullanıcıya teslim edilir",
            desc: "Denetimden geçen temiz e-postalar mail sunucunuza iletilir. Giden mesajlar da aynı süreçten geçer; şifreleme ve feragatname otomatik uygulanır.",
          },
        ]}
      />

      <InfoSection
        title="NoSpamProxy Nedir?"
        items={[
          {
            title:
              "NoSpamProxy, şirketlerin e-posta trafiğini spam, virüs ve phishing saldırılarına karşı koruyan, aynı zamanda güvenli mail şifreleme ve büyük dosya gönderimi sağlayan hepsi bir arada e-posta güvenlik çözümüdür.",
            desc: "Rakiplerde ayrı ürünler olarak sunulan spam filtresi, şifreleme, büyük dosya transferi ve feragatname yönetimi NoSpamProxy'de tek lisans altında toplanmıştır. Kurumsal mail altyapısını bozmadan önüne konumlanır; Exchange, Microsoft 365 ve diğer SMTP sunucularla tam uyumludur. Multi-tenant mimarisi sayesinde servis sağlayıcılar aynı sistemde birden fazla müşteriye hizmet verebilir.",
          },
          { title: "%99.9+", desc: "Spam tespit oranı", icon: "shieldCheck" },
          { title: "4 Modül", desc: "Tek pakette tam çözüm", icon: "layers" },
          { title: "KVKK", desc: "Otomatik uyumluluk", icon: "lock" },
          { title: "M365", desc: "Exchange & 365 uyumlu", icon: "zap" },
          {
            title: "Kullanım Alanları",
            desc: "Kurumsal e-posta güvenliği, KVKK / GDPR mail uyumu, Güvenli büyük dosya gönderimi, MSP / servis sağlayıcı multi-tenant yapılanması, Microsoft 365 ek güvenlik katmanı",
          },
        ]}
      />

      <FaqSection
        eyebrow="Sık Sorulan Sorular"
        title="NoSpamProxy Hakkında"
        faqs={[
          {
            q: "Microsoft 365 kullanıyorum, neden ayrıca NoSpamProxy'e ihtiyacım var?",
            a: "Microsoft'un yerleşik spam filtresi temel koruma sağlar ancak gelişmiş phishing tespiti, otomatik S/MIME şifreleme, büyük dosya transferi ve multi-tenant yönetim gibi kurumsal ihtiyaçları karşılamaz. NoSpamProxy, Microsoft 365'in önüne ek bir güvenlik katmanı olarak konumlanır ve bu eksiklikleri tamamlar.",
          },
          {
            q: "KVKK uyumu için NoSpamProxy yeterli midir?",
            a: "KVKK, kişisel veri içeren iletişimlerin güvenliğini zorunlu kılar. NoSpamProxy'nin otomatik TLS ve S/MIME şifreleme modülleri, e-posta yoluyla iletilen kişisel verilerin yetkisiz erişime karşı korunmasını sağlar. Tam KVKK uyumu için hukuki danışmanlık da alınması önerilir.",
          },
          {
            q: "Multi-tenant yapı nasıl çalışır?",
            a: "Tek bir NoSpamProxy kurulumunda birden fazla müşteri domain'i izole olarak yönetilir. Her müşteri yalnızca kendi mail trafiğini, raporlarını ve karantinasını görür. Bu yapı özellikle hosting ve MSP şirketlerinin müşterilerine e-posta güvenliği hizmeti sunması için idealdir.",
          },
          {
            q: "Büyük dosya modülü tam olarak ne işe yarar?",
            a: "E-posta sunucuları genellikle 10–25 MB ek sınırı uygular. Large Files modülü, bu sınırı aşan dosyaları otomatik olarak güvenli bir indirme linkine dönüştürür. Alıcı linke tıklayarak dosyayı indirir; transfer şifreli ve denetim izli gerçekleşir.",
          },
          {
            q: "Mevcut Exchange altyapım varken kurulum ne kadar sürer?",
            a: "NoSpamProxy, mevcut mail altyapısını değiştirmeden önüne bir gateway olarak konumlanır. Tipik bir kurumsal kurulum yarım gün ile bir gün arasında tamamlanır. MX kaydı güncellenerek tüm trafik NoSpamProxy üzerinden yönlendirilir.",
          },
        ]}
      />

      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <CTASection
          title="E-posta güvenliğinizi güçlendirmek ister misiniz?"
          subtitle="Domain + Hosting + SSL + E-posta Güvenliği — tam çözüm için uzman ekibimizle görüşün."
          buttonLabel="Ücretsiz Demo Talep Et"
          buttonHref="/#teklif"
        />
      </div>
    </main>
  );
}
