/**
 * Footer.tsx
 *
 * Site genelinde kullanılan alt bilgi bileşenidir.
 * Yapı:
 *   1. FooterCTA   — "Bugün güvene al" aksiyon bandı
 *   2. TrustBadges — Yetkili iş ortağı logoları
 *   3. Ana grid    — Logo | Şirket | Destek | Kaynaklar | İş Ortaklığı + SSL | İletişim
 *   4. Alt bar     — Telif hakkı · yasal linkler
 *
 * Kolon içerikleri (linkler, başlıklar) sayfanın alt bölümündeki
 * NAV_COLUMNS sabitinde tutulur; JSX'e dokunmadan güncellenebilir.
 */

import Link from "next/link";
import { ICONS } from "@/lib/icons";

const ArrowIcon = ICONS.arrowRight;
const ShieldIcon = ICONS.shield;
const PhoneIcon = ICONS.phone;
const MailIcon = ICONS.mail;
const MapPinIcon = ICONS.mapPin;
const LinkedinIcon = ICONS.linkedin;
const TwitterIcon = ICONS.twitter;
const YoutubeIcon = ICONS.youtube;
const GlobeIcon = ICONS.globe;
const ChevronIcon = ICONS.chevronRight;
const HeadphonesIcon = ICONS.headphones;

const NAV_COLUMNS = [
  {
    heading: "Şirket",
    links: [
      { label: "Hakkımızda", href: "/kaynaklar/hakkimizda" },
      { label: "Kariyer", href: "/kaynaklar/kariyer" },
      { label: "Bize Ulaşın", href: "/iletisim" },
    ],
  },
  {
    heading: "Destek",
    links: [
      { label: "Talep Oluştur", href: "/support" },
      { label: "Sertifika Kurulum Rehberi", href: "/destek/kurulum" },
      { label: "CSR Oluşturma Rehberi", href: "/destek/csr" },
    ],
  },
  {
    heading: "Kaynaklar",
    links: [
      { label: "Sıkça Sorulan Sorular", href: "/kaynaklar/sss" },
      {
        label: "DV, OV ve EV SSL Arasındaki Fark Nedir?",
        href: "/kaynaklar/dv-ov-ev-farklari",
      },
      { label: "SSL Nedir?", href: "/kaynaklar/ssl-nedir" },
    ],
  },
  {
    heading: "İş Ortaklığı",
    links: [
      { label: "Hosting Ortaklığı", href: "/hosting/bayilik", badge: "Yeni" },
      { label: "Teknoloji Ortaklığı", href: "/hosting/teknoloji-partner" },
      { label: "Hosting Partner", href: "/hosting/hosting-partner" },
    ],
  },
  {
    heading: "SSL Sertifikaları",
    links: [
      { label: "Domain Validation (DV)", href: "/ssl/dv", badge: "Popüler" },
      { label: "Organization Validation (OV)", href: "/ssl/ov" },
      { label: "Extended Validation (EV)", href: "/ssl/ev" },
      { label: "Wildcard SSL", href: "/ssl/wildcard", badge: "Çok Alan" },
    ],
  },
];

const FooterCTA = () => (
  <div className="bg-gradient-to-r from-indigo-700 via-primary to-indigo-600">
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200 mb-1">
          7/24 Destek
        </p>
        <h3 className="text-2xl font-bold text-white">
          Web sitenizi bugün güvence altına alın
        </h3>
        <p className="text-indigo-200 text-sm mt-1">
          Uzman ekibimiz sizi doğru sertifika seçimine yönlendirsin.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <Link
          href="/ssl"
          className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition flex items-center gap-2 text-sm"
        >
          SSL Sertifikalarını İncele
          <ArrowIcon size={16} />
        </Link>
        <a
          href="tel:+902162858578"
          className="px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition flex items-center gap-2 text-sm"
        >
          <PhoneIcon size={15} />
          0216 285 85 78
        </a>
      </div>
    </div>
  </div>
);

const TrustBadges = () => (
  <div className="border-b border-white/10 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mr-2">
          Yetkili İş Ortağı
        </span>
        {[
          { letter: "S", color: "#E31837", name: "Sectigo" },
          { letter: "D", color: "#EE2A24", name: "DigiCert" },
          { letter: "G", color: "#0078D4", name: "GlobalSign" },
          { letter: "R", color: "#FF6B35", name: "RapidSSL" },
          { letter: "C", color: "#00A651", name: "Comodo" },
          { letter: "G", color: "#7B2D8B", name: "GeoTrust" },
        ].map((b) => (
          <div
            key={b.name}
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-xs"
              style={{ backgroundColor: b.color }}
            >
              {b.letter}
            </div>
            <span className="text-sm font-semibold text-gray-300">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#0d0f14] text-white">
      <FooterCTA />
      <TrustBadges />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-10 xl:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                <ShieldIcon size={13} className="text-green-500" />
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-tight leading-none">
                  LSG
                </div>
                <div className="text-[11px] text-indigo-400 font-medium tracking-widest uppercase -mt-0.5">
                  Teknoloji
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Türkiye'nin güvenilir SSL sertifikası ve web güvenlik çözümleri
              sağlayıcısı. 2008'den bu yana on binlerce web sitesini korumanın
              gururunu taşıyoruz.
            </p>

            {/* Sosyal medya */}
            <div className="flex gap-2">
              {[
                {
                  href: "#",
                  icon: <LinkedinIcon size={17} />,
                  label: "LinkedIn",
                },
                {
                  href: "#",
                  icon: <TwitterIcon size={17} />,
                  label: "Twitter",
                },
                {
                  href: "#",
                  icon: <YoutubeIcon size={17} />,
                  label: "YouTube",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-5 text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer w-fit">
              <GlobeIcon size={15} />
              <span>Türkçe</span>
              <ChevronIcon size={13} />
            </div>
          </div>
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ChevronIcon size={13} />
                      {item.label}
                      {"badge" in item && item.badge && (
                        <span className="text-[10px] font-semibold bg-primary/20 text-primary px-1.5 py-0.5 rounded-full leading-none">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-5">
              İletişim
            </h4>

            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+902162858578"
                  className="group flex gap-3 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                    <PhoneIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                      Telefon
                    </div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                      0216 285 85 78
                    </div>
                    <div className="text-[11px] text-gray-600">
                      Pzt–Cum 09:00–18:00
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@trlsg.com"
                  className="group flex gap-3 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors">
                    <MailIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                      E-posta
                    </div>
                    <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                      info@trlsg.com
                    </div>
                    <div className="text-[11px] text-gray-600">
                      Ortalama 2 saat yanıt
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <div className="flex gap-3 items-start">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <MapPinIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                      Adres
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      Yapı Kredi Plaza C Blok
                      <br />
                      No:40–41, Levent
                      <br />
                      34330 İstanbul, Türkiye
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <Link
              href="/support"
              className="mt-7 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm text-gray-300 hover:text-white transition-all"
            >
              <HeadphonesIcon size={15} className="text-primary" />
              Destek Talebi Aç
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} LSG Teknoloji Bilişim Hizmetleri Ltd.
            Şti. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-gray-600">
            <ShieldIcon size={13} className="text-green-500" />
            <span>256-bit SSL Şifreli</span>
            <span className="text-gray-700">·</span>
            <span>KVKK Uyumlu</span>
            <span className="text-gray-700">·</span>
            <span>ISO 27001</span>
          </div>

          <div className="flex gap-5 text-xs text-gray-500">
            {[
              { label: "Gizlilik", href: "/gizlilik" },
              { label: "KVKK", href: "/kvkk" },
              { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
              { label: "Çerez Politikası", href: "/cerez" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
