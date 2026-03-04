import Image from "next/image";
import Link from "next/link";
import SSLComparisonServer from '@/components/SSLComparisonServer'

import {
  Shield,
  Search,
  Lock,
  Zap,
  MessageCircle,
  FileText,
  CheckCircle,
} from "lucide-react";

const trustBrands = ["DigiCert", "Sectigo", "Comodo", "GeoTrust", "Imunify360"];
const platformItems = [
  { title: "SSL Sertifikaları", desc: "DV / OV / EV ve Wildcard seçenekleri" },
  { title: "Web Güvenlik", desc: "WAF, hardening ve katmanlı koruma" },
  { title: "Hosting", desc: "Kurumsal barındırma, yedeklilik, performans" },
  { title: "Imunify360", desc: "Malware tarama, otomatik temizlik ve WAF" },
  { title: "Keeper", desc: "Kurumsal parola & erişim yönetimi" },
];
const packages = [
  {
    name: "Başlangıç",
    tag: "Küçük işletmeler için",
    price: "Teklifli",
    features: [
      "DV SSL + kurulum desteği",
      "Temel güvenlik kontrol listesi",
      "Standart destek",
    ],
  },
  {
    name: "Kurumsal",
    tag: "En çok tercih edilen",
    price: "Teklifli",
    featured: true,
    features: [
      "OV SSL / multi-domain seçenekleri",
      "Hosting güvenlik hardening",
      "Periyodik güvenlik raporu",
      "Öncelikli destek",
    ],
  },
  {
    name: "Kritik Altyapı",
    tag: "Üst seviye koruma",
    price: "Teklifli",
    features: [
      "EV SSL + marka güveni",
      "7/24 izleme & olay yönetimi",
      "Keeper entegrasyonu",
      "Özel mimari & danışmanlık",
    ],
  },
];

function SectionTitle({
  title,
  desc,
  align = "center",
}: {
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {desc ? <p className="mt-4 text-slate-600">{desc}</p> : null}
    </div>
  );
}

function PlatformDiagram() {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-blue-100 blur-2xl opacity-70" />
      <div className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full bg-indigo-100 blur-2xl opacity-70" />

      <div className="grid lg:grid-cols-2 gap-10 items-center relative">
        <div className="flex justify-center">
          <svg
            width="420"
            height="320"
            viewBox="0 0 420 320"
            className="w-full max-w-[420px]"
            role="img"
            aria-label="LSG Security Core Diagram"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#1e3a8a" />
                <stop offset="1" stopColor="#4338ca" />
              </linearGradient>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#a5b4fc" />
              </linearGradient>
            </defs>

            <circle cx="210" cy="160" r="74" fill="url(#g1)" opacity="0.95" />
            <circle
              cx="210"
              cy="160"
              r="108"
              fill="none"
              stroke="#93c5fd"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle
              cx="210"
              cy="160"
              r="140"
              fill="none"
              stroke="#c7d2fe"
              strokeWidth="2"
              opacity="0.6"
              strokeDasharray="6 8"
            />

            <text
              x="210"
              y="150"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              fontWeight="700"
            >
              LSG
            </text>
            <text
              x="210"
              y="172"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              opacity="0.9"
            >
              Security Core
            </text>

            {[
              { x: 80, y: 70, t: "SSL" },
              { x: 340, y: 70, t: "Hosting" },
              { x: 60, y: 240, t: "Danışmanlık" },
              { x: 360, y: 240, t: "Keeper" },
              { x: 210, y: 20, t: "Web Güvenlik" },
            ].map((n, i) => (
              <g key={i}>
                <line
                  x1="210"
                  y1="160"
                  x2={n.x}
                  y2={n.y}
                  stroke="#93c5fd"
                  strokeWidth="2"
                  opacity="0.7"
                />
                <circle cx={n.x} cy={n.y} r="28" fill="url(#g2)" opacity="0.95" />
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fill="#0f172a"
                  fontSize="10"
                  fontWeight="700"
                >
                  {n.t}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Tek Çatı Altında Güvenlik Mimarisi</h3>
          <p className="mt-4 text-slate-600">
            SSL, web güvenlik, hosting ve Keeper çözümlerini tek bir kurumsal güvenlik
            yaklaşımı altında birleştiriyoruz.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {platformItems.slice(0, 4).map((it, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
              >
                <div className="font-semibold">{it.title}</div>
                <div className="mt-2 text-sm text-slate-600">{it.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#teklif"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Ücretsiz Ön Görüşme
            </a>
            <a
              href="#paketler"
              className="border border-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition"
            >
              Paketleri Gör
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f4f5f7] text-slate-900">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 opacity-90 z-10" />

            <Image
              src="/images/resim1.png"
              alt="LSG Siber Güvenlik"
              width={1400}
              height={600}
              className="w-full h-[500px] object-cover"
              priority
            />

            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-2xl px-8 md:px-16 text-white">
                <h1 className="text-5xl font-bold leading-tight">
                  Kurumsal Siber Güvenlikte
                  <br />
                  Yeni Nesil Yaklaşım
                </h1>

                <p className="mt-6 text-lg text-blue-100">
                  SSL sertifikaları, web güvenlik çözümleri ve hosting hizmetleri ile
                  dijital altyapınızı geleceğe hazırlıyoruz.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
  href="/ssl"
  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-lg transition-all"
>
  SSL Sertifikası Al
</Link>

                  <Link
  href="/#teklif"
  className="border-2 border-white/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
>
  Teklif Al
</Link>

                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-900">10,000+</div>
              <div className="text-sm text-slate-600 mt-1">Aktif SSL Sertifikası</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-900">99.9%</div>
              <div className="text-sm text-slate-600 mt-1">Uptime Garantisi</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-900">24/7</div>
              <div className="text-sm text-slate-600 mt-1">Teknik Destek</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-900">15+</div>
              <div className="text-sm text-slate-600 mt-1">Yıllık Tecrübe</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-10">
      Global Markalar & Teknoloji Ortakları
    </h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center opacity-80">

  {[
    "/logos/digicert.svg",
    "/logos/geotrust.png",
    "/logos/thawte.png",
    "/logos/rapidssl.png",
    "/logos/cloudflare.png",
    "/logos/sectigo.png",
    "/logos/venafi.png",
    "/logos/keeper.png",
    "/logos/securenvoy.png",
    "/logos/nospamproxy.png",
    "/logos/keytalk.png",
    "/logos/positiveSSL.png",
  ].map((logo, i) => (
    <div
      key={i}
      className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
    >
      <img
        src={logo}
        alt="Partner Logo"
        className="h-10 object-contain"
      />
    </div>
  ))}

</div>

  </div>
</section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />

            <div className="relative z-10 p-10 md:p-14 lg:p-16 grid lg:grid-cols-2 gap-10 items-center text-white">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                  2026 Kurumsal SSL
                  <br />
                  Güvenlik Rehberi
                </h2>

                <p className="mt-4 text-blue-100">
                  SSL sertifikaları, web güvenlik çözümleri ve en iyi uygulama önerileri
                  ile dijital güvenliğinizi artırın.
                </p>

                <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-lg hover:shadow-xl">
                  Ücretsiz İndir
                </button>
              </div>

              <div className="justify-self-end w-full">
                <div className="relative w-full max-w-[420px] h-[260px] bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image src="/images/resim2.png" alt="LSG Güvenlik Raporu" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

         <div className="grid md:grid-cols-2 gap-6">
  <Link
    href="/cozumler/ssl-yonetimi"
    className="bg-white p-7 md:p-8 rounded-2xl shadow-md flex items-center justify-between hover:shadow-xl transition-all hover:-translate-y-1 group"
  >
    <div>
      <h3 className="text-lg md:text-xl font-semibold group-hover:text-blue-900 transition-colors">
        SSL Sertifikası Yenilemeyi Mi Unuttunuz?
      </h3>
      <p className="text-slate-600 mt-2">
        Otomatik yenileme ile siteniz kesintisiz güvende kalır.
      </p>
    </div>
    <span className="text-3xl text-blue-900 group-hover:translate-x-2 transition-transform">
      →
    </span>
  </Link>

  <Link
    href="/cozumler/web-guvenligi"
    className="bg-white p-7 md:p-8 rounded-2xl shadow-md flex items-center justify-between hover:shadow-xl transition-all hover:-translate-y-1 group"
  >
    <div>
      <h3 className="text-lg md:text-xl font-semibold group-hover:text-blue-900 transition-colors">
        Malware Saldırıları Endişe Mi Veriyor?
      </h3>
      <p className="text-slate-600 mt-2">
        7/24 otomatik tarama ile sitenizi koruyun.
      </p>
    </div>
    <span className="text-3xl text-blue-900 group-hover:translate-x-2 transition-transform">
      →
    </span>
  </Link>
</div>

        </div>
      </section>

     
      <SSLComparisonServer />

    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-8">
      
      <Link
  href="/cozumler/sunucu-guvenligi"
  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all block"
>
  <div className="flex items-start gap-4 mb-4">
    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
  <Shield className="w-6 h-6 text-orange-600" />
</div>

    <div>
      <h3 className="text-2xl font-bold mb-2">Sunucu Güvenliği</h3>
      <p className="text-slate-600">
        Imunify360 ile sunucunuzu malware, DDoS ve saldırılara karşı koruyun.
        Real-time tarama ve otomatik temizlik.
      </p>
    </div>
  </div>

  <span className="text-blue-900 font-semibold">
    Daha Fazla Bilgi →
  </span>
</Link>

     <Link
  href="/cozumler/web-guvenligi"
  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all block"
>
  <div className="flex items-start gap-4 mb-4">
    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
  <Search className="w-6 h-6 text-green-600" />
</div>

    <div>
      <h3 className="text-2xl font-bold mb-2">Web Sitesi Güvenliği</h3>
      <p className="text-slate-600">
        Securi ile web sitenizi günlük tara, malware'den temizle.
        WAF, DDoS koruması ve CDN dahil.
      </p>
    </div>
  </div>

  <span className="text-blue-900 font-semibold">
    Daha Fazla Bilgi →
  </span>
</Link>

    </div>
  </div>
</section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/resim3.png" alt="Security Testing" fill className="object-cover" />
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold">Ücretsiz SSL Güvenlik Testi</h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Mevcut SSL sertifikanızı analiz edin, güvenlik açıklarını tespit edin ve
              iyileştirme önerilerimizi inceleyin.
            </p>

            <button className="mt-8 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Hemen Test Et
            </button>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold">7/24 Güvenlik İzleme</h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Web sitenizi kesintisiz izliyor, potansiyel tehditlere anında müdahale
              ediyoruz. Güvenliğiniz bizim önceliğimiz.
            </p>

            <ul className="mt-8 space-y-4">
              {["Real-time malware tarama", "Otomatik yedekleme", "Anında alarm sistemi"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />


                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/resim4.png" alt="Security Monitoring" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#f4f5f7] text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold">LSG Güvenlik Platformu</h2>

          <p className="mt-6 text-lg text-slate-600">
            Uçtan uca dijital güvenlik ve altyapı yönetimi çözümleri
          </p>

          <div className="mt-16 grid md:grid-cols-5 gap-6">
            {[
               { name: "SSL Sertifikaları", icon: Lock },
  { name: "Web Güvenlik", icon: Shield },
  { name: "Malware Tarama", icon: Search },
  { name: "DDoS Koruması", icon: Zap },
  { name: "7/24 Destek", icon: MessageCircle },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-50 rounded-xl flex items-center justify-center">
  <item.icon className="w-6 h-6 text-blue-900" />
</div>

                <div className="font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Kaynaklar ve Rehberler</h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { title: "SSL Seçim Rehberi", desc: "Hangi SSL sizin için doğru?" },
              { title: "Güvenlik Checklist", desc: "Web sitenizi koruma adımları" },
              { title: "Kurulum Kılavuzu", desc: "Adım adım SSL kurulumu" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f4f5f7] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="h-40 bg-gradient-to-r from-blue-800 to-indigo-700 flex items-center justify-center">
  <FileText className="w-14 h-14 text-white" />
</div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                  <button className="text-blue-900 font-semibold hover:underline">
                    Ücretsiz İndir →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="teklif"
        className="py-28 bg-gradient-to-br from-blue-900 to-indigo-900 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ücretsiz SSL Danışmanlığı Alın</h2>
          <p className="text-xl text-blue-100 mb-12">
            Uzman ekibimiz size en uygun SSL çözümünü önerir
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className="p-4 rounded-lg border-0 bg-white/90 text-slate-900 placeholder:text-slate-500"
                placeholder="Ad Soyad"
              />
              <input
                className="p-4 rounded-lg border-0 bg-white/90 text-slate-900 placeholder:text-slate-500"
                placeholder="Şirket"
              />
              <input
                className="p-4 rounded-lg border-0 bg-white/90 text-slate-900 placeholder:text-slate-500 md:col-span-2"
                placeholder="E-Posta"
              />
              <textarea
                className="p-4 rounded-lg border-0 bg-white/90 text-slate-900 placeholder:text-slate-500 md:col-span-2 min-h-[140px]"
                placeholder="Hangi güvenlik çözümü ile ilgileniyorsunuz?"
              />
            </div>

            <button className="mt-8 bg-white text-blue-900 px-12 py-4 rounded-lg hover:bg-blue-50 transition font-bold text-lg shadow-xl">
              Ücretsiz Teklif Alın
            </button>

            <p className="mt-6 text-sm text-blue-200">
              ✓ 24 saat içinde geri dönüş &nbsp; ✓ Taahhütsüz danışmanlık &nbsp; ✓ Özel
              fiyat teklifi
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
