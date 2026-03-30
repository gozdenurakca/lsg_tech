import Hero from "@/components/marketing/hero/ProductHero";
import TrustBar from "@/components/marketing/TrustBar";
import HowItWorks from "@/components/marketing/HowItWorks";
import InfoSection from "@/components/marketing/InfoSection";
import FaqSection from "@/components/marketing/FaqSection";
import CTASection from "@/components/marketing/CTASection";
import { ICONS } from "@/lib/icons";

export const metadata = {
  title: "Venafi | Machine Identity Management | LSG Teknoloji",
  description:
    "SSL/TLS sertifikaları, SSH anahtarları ve tüm makine kimliklerini merkezi olarak keşfet, izle ve otomatik yönet. Sertifika süresi dolmasından kaynaklanan kesintilere son ver.",
};

const VenafiVisual = (
  <div className="relative w-full h-full min-h-[260px] flex items-center justify-center rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0c1a3a] to-[#0a0f1e]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-cyan-600/15 blur-3xl" />

    <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-6 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-1">
        <img
          src="/logos/venafi.png"
          alt="Venafi"
          className="w-6 h-6 object-contain brightness-0 invert opacity-80"
        />
        <span className="text-white/70 text-xs font-semibold tracking-wide">
          Machine Identity Management
        </span>
      </div>

      <div className="w-full grid grid-cols-2 gap-2">
        {[
          {
            label: "Discovery",
            desc: "Ağdaki tüm sertifikaları bul",
            color: "border-blue-500/30 bg-blue-500/10",
            dot: "bg-blue-400",
            icon: (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <circle
                  cx="5"
                  cy="5"
                  r="3.5"
                  stroke="#93c5fd"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 8l1.5 1.5"
                  stroke="#93c5fd"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            ),
          },
          {
            label: "Visibility",
            desc: "Durum & süre takibi",
            color: "border-cyan-500/30 bg-cyan-500/10",
            dot: "bg-cyan-400",
            icon: (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M1 5.5C1 5.5 2.8 2 5.5 2s4.5 3.5 4.5 3.5S8.2 9 5.5 9 1 5.5 1 5.5z"
                  stroke="#67e8f9"
                  strokeWidth="1.2"
                />
                <circle cx="5.5" cy="5.5" r="1.3" fill="#67e8f9" />
              </svg>
            ),
          },
          {
            label: "Automation",
            desc: "Otomatik yenileme & deploy",
            color: "border-violet-500/30 bg-violet-500/10",
            dot: "bg-violet-400 animate-pulse",
            icon: (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M2 5.5h7M6.5 3l2.5 2.5L6.5 8"
                  stroke="#c4b5fd"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            label: "Governance",
            desc: "Policy & erişim kontrolü",
            color: "border-emerald-500/30 bg-emerald-500/10",
            dot: "bg-emerald-400",
            icon: (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M5.5 1L1.5 3v3c0 2 2 3.5 4 4 2-.5 4-2 4-4V3L5.5 1z"
                  stroke="#6ee7b7"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 5.5L5 7l2.5-2.5"
                  stroke="#6ee7b7"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ].map((p) => (
          <div
            key={p.label}
            className={`border rounded-xl px-3 py-2.5 flex flex-col gap-1.5 ${p.color}`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <span className="text-white text-[11px] font-bold">
                {p.label}
              </span>
            </div>
            <p className="text-white/40 text-[9px] leading-tight">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="w-full bg-white/4 border border-white/8 rounded-xl px-3 py-2.5">
        <p className="text-white/40 text-[9px] uppercase tracking-wider font-bold mb-1.5">
          Yönetilen Kimlik Tipleri
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "SSL/TLS",
            "Private Keys",
            "SSH Keys",
            "Code Signing",
            "Kubernetes",
          ].map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/50 text-[9px] font-semibold"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-cyan-600/15 to-blue-600/10 border border-cyan-500/20 rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
        <p className="text-cyan-300/80 text-[10px] font-semibold">
          Zero Touch PKI — İnsan müdahalesi olmadan tam otomasyon
        </p>
      </div>
    </div>
  </div>
);

export default function VenafiPage() {
  return (
    <main className="bg-white text-slate-900">
      <Hero
        badge={{ icon: "lockKeyhole", label: "Machine Identity Management" }}
        title="Venafi"
        subtitle="Binlerce sertifikayı manuel yönetmenin sona erdiği yer. SSL/TLS, SSH, code signing ve tüm makine kimliklerini merkezi olarak keşfet, izle, otomatik yenile."
        imageSrc="/images/venafi.png"
        imageAlt="Venafi machine identity management görseli"
        imageGradient="from-[#0f0500] via-[#92400e] to-[#431407]"
        items={[
          {
            icon: "search",
            title: "Otomatik Keşif",
            desc: "Ağdaki tüm sertifikaları ve anahtarları bulur, envanterler",
          },
          {
            icon: "zap",
            title: "Zero Touch PKI",
            desc: "Sertifika oluşturma, dağıtma ve yenileme tamamen otomatik",
          },
          {
            icon: "shieldCheck",
            title: "Kesinti Riski Sıfır",
            desc: "Süresi dolan SSL'den kaynaklanan site çökmelerine son",
          },
        ]}
        primaryButton={{ label: "Demo Talep Et", href: "/#teklif" }}
        secondaryButton={{ label: "Teknik Doküman", href: "#", modal: true, productName: "Venafi" }}
      />

      <TrustBar
        id="platform"
        title="Sertifika kaosunu ortadan kaldırır"
        description="Modern kurumsal altyapılarda binlerce sertifika ve anahtar bulunur. Venafi bunların tamamını keşfeder, durmunu izler, süresini takip eder ve yenilemeyi otomatikleştirir — insan müdahalesi olmadan."
        visual={VenafiVisual}
        stats={[
          {
            value: "G5000",
            label: "Global 5000 şirketi tarafından kullanılıyor",
          },
          {
            value: "5 Kimlik",
            label: "SSL/TLS, SSH, Private Key, Code Signing, Kubernetes",
          },
          {
            value: "0 Dakika",
            label: "Zero Touch PKI ile insan müdahalesi olmadan otomasyon",
          },
          {
            value: "Multi-Cloud",
            label: "AWS, Azure, GCP ve on-premise tek platformdan yönetim",
          },
        ]}
      />

      <section id="platform-ozellikleri" className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-600 border border-cyan-100 mb-3">
              Platform
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              4 temel yetenekle tam kontrol
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Venafi, makine kimliği yönetimini dört katmanlı bir yaklaşımla
              çözer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {[
              {
                num: "01",
                icon: ICONS.discovery,
                title: "Discovery — Keşif",
                desc: "Ağdaki tüm SSL/TLS sertifikaları, SSH anahtarları ve diğer makine kimliklerini otomatik olarak keşfeder...",
                tag: "Envanter Kaosunu Bitir",
                accent: "border-blue-200 bg-blue-50/40",
                badgeClass: "bg-blue-100 text-blue-700",
              },
              {
                num: "02",
                icon: ICONS.visibility,
                title: "Visibility — Görünürlük",
                desc: "Merkezi dashboard ile tüm sertifikaların durumu...",
                tag: "Tam Görünürlük",
                accent: "border-cyan-200 bg-cyan-50/40",
                badgeClass: "bg-cyan-100 text-cyan-700",
              },
              {
                num: "03",
                icon: ICONS.automation,
                title: "Automation — Otomasyon",
                desc: "Sertifika yenileme, deployment ve rotation tamamen otomatikleşir...",
                tag: "İnsan Müdahalesi Yok",
                accent: "border-violet-200 bg-violet-50/40",
                badgeClass: "bg-violet-100 text-violet-700",
              },
              {
                num: "04",
                icon: ICONS.governance,
                title: "Governance — Kontrol",
                desc: "Hangi sertifikanın kim tarafından, hangi politikaya göre kullanıldığı denetlenir...",
                tag: "Zero Trust Uyumu",
                accent: "border-emerald-200 bg-emerald-50/40",
                badgeClass: "bg-emerald-100 text-emerald-700",
              },
            ].map((p) => {
              const Icon = p.icon;

              return (
                <div
                  key={p.title}
                  className={`border rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow ${p.accent}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white shadow-sm border">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>

                      <span className="text-slate-300 text-2xl font-black">
                        {p.num}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${p.badgeClass}`}
                    >
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[15px]">
                    {p.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="border border-slate-200 bg-white rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              LSG Güvenlik Ekosistemi — Her ürünün rolü
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  logo: "/logos/digicert.svg",
                  name: "DigiCert",
                  role: "Sertifika üretir",
                  accent: "border-blue-200 bg-blue-50",
                },
                {
                  logo: "/logos/venafi.png",
                  name: "Venafi",
                  role: "Sertifikayı yönetir",
                  accent: "border-cyan-200 bg-cyan-50 ring-2 ring-cyan-400/30",
                },
                {
                  logo: "/logos/securenvoy.png",
                  name: "SecurEnvoy",
                  role: "Kullanıcıyı doğrular",
                  accent: "border-indigo-200 bg-indigo-50",
                },
                {
                  logo: "/logos/nospamproxy.png",
                  name: "NoSpamProxy",
                  role: "Mail\'i korur",
                  accent: "border-violet-200 bg-violet-50",
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
        subtitle="Sertifika yaşam döngüsünün tamamı otomatikleşir"
        accentColor="amber"
        visual="number"
        visualBg="from-[#0f0500] via-[#92400e] to-[#431407]"
        steps={[
          {
            title: "Ağdaki tüm kimlikler keşfedilir",
            desc: "Venafi, altyapını tarayarak tüm SSL/TLS sertifikalarını, SSH anahtarlarını ve diğer makine kimliklerini tespit eder. Gölgede kalan, unutulmuş veya süresi dolmuş sertifikalar da dahildir.",
          },
          {
            title: "Merkezi izleme ve risk analizi",
            desc: "Bulunan tüm kimlikler merkezi panelde görselleştirilir. Süre bitişine yakın sertifikalar için uyarı gönderilir. Güvenlik politikalarına aykırı kullanımlar raporlanır.",
          },
          {
            title: "Otomatik yenileme ve deployment",
            desc: "Sertifika süresi dolmadan Venafi otomatik olarak yenileme başlatır, CA'dan sertifikayı alır ve ilgili sunuculara deploy eder. Tüm süreç insan müdahalesi olmadan tamamlanır.",
          },
        ]}
      />

      <InfoSection
        title="Venafi Nedir?"
        items={[
          {
            title:
              "Venafi, kurumların SSL/TLS sertifikaları ve diğer makine kimliklerini merkezi olarak keşfetmesini, izlemesini ve otomatik olarak yönetmesini sağlayan bir platformdur.",
            desc: "Modern kurumsal altyapılarda binlerce sertifika ve kriptografik anahtar bulunur. Bunların manuel yönetimi hem operasyonel yük hem de güvenlik riski oluşturur. Venafi bu kaosa son verir: tüm makine kimliklerini otomatik keşfeder, izler ve Zero Touch PKI ile sertifika yaşam döngüsünü tamamen otomatikleştirir. Global 5000 şirketi arasındaki büyük bankalar, sağlık kuruluşları ve teknoloji şirketleri tarafından kullanılmaktadır.",
          },
          { title: "G5000", desc: "Enterprise referanslar", icon: "trending" },
          { title: "5+", desc: "Makine kimliği tipi", icon: "shieldCheck" },
          { title: "Zero Touch", desc: "PKI otomasyonu", icon: "zap" },
          {
            title: "Multi-Cloud",
            desc: "AWS, Azure, GCP & on-prem",
            icon: "layers",
          },
          {
            title: "Kullanım Alanları",
            desc: "Enterprise SSL/TLS sertifika yönetimi, DevOps ve Kubernetes ortamları, CI/CD pipeline sertifika otomasyonu, Büyük banka ve finans kuruluşları, KVKK / PCI-DSS uyum gerektiren altyapılar",
          },
        ]}
      />

      <FaqSection
        eyebrow="Sık Sorulan Sorular"
        title="Venafi Hakkında"
        faqs={[
          {
            q: "Zaten DigiCert sertifikası alıyorum, Venafi'ye neden ihtiyacım var?",
            a: "DigiCert sertifika üretir; Venafi ise o sertifikanın nerede olduğunu, süresini, kimler tarafından kullanıldığını takip eder ve yenilemeyi otomatikleştirir. İkisi birbirini tamamlar. Tek bir sertifikanız varsa Venafi fazla olabilir — ama onlarca, yüzlerce sertifikanız varsa Venafi olmadan yönetim kaosa döner.",
          },
          {
            q: "SSL expire yüzünden site çökmesi gerçekten bu kadar ciddi mi?",
            a: "Evet. Büyük kuruluşlarda bile bu olay yaşanır; örneğin Microsoft, LinkedIn ve büyük bankalar sertifika süresi dolması nedeniyle hizmet kesintisi yaşamıştır. Venafi, sertifika süre bitişini önceden tespit ederek otomatik yenileme başlatır ve bu riski sıfırlar.",
          },
          {
            q: "Zero Touch PKI gerçekten insan müdahalesi olmadan çalışıyor mu?",
            a: "Evet, politikalar ve CA bağlantıları yapılandırıldıktan sonra Venafi sertifika talebini oluşturur, CA onayını alır, sertifikayı uygun sunuculara otomatik dağıtır ve süre dolduğunda süreci baştan başlatır. DevOps ekipleri için CI/CD pipeline entegrasyonu da mevcuttur.",
          },
          {
            q: "Sadece SSL/TLS mi yönetiyor, yoksa başka kimlikler de var mı?",
            a: "Venafi SSL/TLS'in yanı sıra SSH anahtarlarını, code signing sertifikalarını, private key'leri ve Kubernetes secret'larını da yönetir. Bu yüzden 'SSL aracı' değil, Machine Identity Management platformu olarak konumlanır.",
          },
          {
            q: "Küçük veya orta ölçekli işletmeler için uygun mu?",
            a: "Venafi öncelikli olarak büyük enterprise müşterilere yöneliktir; Global 5000 şirketleri, büyük bankalar, sağlık kuruluşları ve çok sayıda sertifika/anahtar yöneten teknoloji şirketleri hedef kitlesidir. SMB için genellikle fazla kapsamlı ve maliyetli olabilir.",
          },
        ]}
      />

      <div className="px-6 pb-20 max-w-4xl mx-auto">
        <CTASection
          title="Sertifika yönetimini otomatikleştirmek ister misiniz?"
          subtitle="Altyapınızdaki makine kimliklerini keşfedelim, riskleri raporlayalım. Venafi demo talebi için uzman ekibimizle görüşün."
          buttonLabel="Ücretsiz Demo Talep Et"
          buttonHref="/#teklif"
        />
      </div>
    </main>
  );
}
