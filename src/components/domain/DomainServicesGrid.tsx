/*
çok önemli !!
cross-sell :SSL ,Hosting, email
*/
"use client";

import Link from "next/link";
import {
  Globe2,
  Lock,
  Mail,
  HardDrive,
  ShieldAlert,
  Headphones,
} from "lucide-react";

const SERVICES = [
  {
    icon: "Globe",
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Sitenizi bugün yayına alın",
    desc: "Sürükle-bırak editörümüz ve hazır şablonlarımızla tek satır kod yazmadan profesyonel bir web sitesi kurun.",
    cta: "Hosting Partner",
    href: "/hosting/hosting-partner",
  },
  {
    icon: "Lock",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Tarayıcıda kilit simgesi görünsün",
    desc: "SSL sertifikası olmayan siteler ziyaretçileri kaçırır. Alan adınızla aynı anda SSL alın, hem güvende hem Google'da üstte olun.",
    cta: "SSL Sertifikası Alın",
    href: "/pricing/ssl/dv",
  },
  {
    icon: Mail,
    color: "text-violet-600",
    bg: "bg-violet-50",
    title: "Adresinizde firmanız yazsın",
    desc: "siz@firmaniz.com.tr — e-posta adresiniz kurumsal kimliğinizin bir parçası. Detaylar için bize ulaşın.",
    cta: "Bize Ulaşın",
    href: "/iletisim",
  },
  {
    icon: HardDrive,
    color: "text-sky-600",
    bg: "bg-sky-50",
    title: "Verileriniz her gece yedekleniyor",
    desc: "Hosting paketlerimizde günlük otomatik yedekleme dahil. Bir şeyler ters gitse bile verilerinizi geri yükleyebilirsiniz.",
    cta: "Bayilik Programı",
    href: "/hosting/bayilik",
  },
  {
    icon: "shield",
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Rakipler sizi kopyalamasın",
    desc: "Marka adınızı tüm popüler uzantılarda tescil edin. .com.tr aldıysanız .com ve .net'i de güvenceye alın.",
    cta: "Uzantıları Keşfet",
    href: "/domain",
  },
  {
    icon: Headphones,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Her soruya Türkçe cevap",
    desc: "Domain kurulumu mu, SSL yapılandırması mı? Uzman ekibimiz 7/24 Türkçe destek verir — telefon, chat veya e-posta ile.",
    cta: "İletişime Geç",
    href: "/iletisim",
  },
];

export default function DomainServicesGrid() {
  return (
    <section className="bg-[#F7F9FC] py-20 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            İnternetteki her şey birbirine bağlı
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Alan adınız dijital varlığınızın temeli. Site, mail, SSL ve destek —
            hepsini tek yerden, Türkçe olarak yönetin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, color, bg, title, desc, cta, href }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div
                className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} shrink-0`}
              >
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {cta}
                <span className="group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
