//SİDEBAR

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Globe,
  Server,
  Lock,
  Cpu,
  BookOpen,
  HeadphonesIcon,
  ChevronDown,
  X,
  Phone,
  User,
  ShoppingCart,
  Menu,
  ArrowRight,
  FileCheck,
  Zap,
} from "lucide-react";
import { useSession } from "next-auth/react";

type NavbarMobileProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (v: boolean) => void;
  setActiveDropdown: (v: null) => void;
  /** Tüm ekran boyutlarında göster (varsayılan: false = yalnızca lg:hidden) */
  showOnAllScreens?: boolean;
};

const NAV_GROUPS = [
  {
    key: "ssl",
    label: "SSL Sertifikaları",
    icon: <Lock size={18} />,
    badge: "Popüler",
    children: [
      {
        label: "Domain Validation (DV)",
        href: "/ssl/dv",
        desc: "Hızlı & ekonomik",
      },
      {
        label: "Organization Validation (OV)",
        href: "/ssl/ov",
        desc: "Kurumsal güven",
      },
      {
        label: "Extended Validation (EV)",
        href: "/ssl/ev",
        desc: "Maksimum güvenilirlik",
      },
      {
        label: "Wildcard SSL",
        href: "/ssl/wildcard",
        desc: "Alt domain'ler dahil",
      },
      {
        label: "SSL Fiyatları",
        href: "/pricing/ssl",
        desc: "Tüm planları karşılaştır",
      },
    ],
  },
  {
    key: "domain",
    label: "Domain",
    icon: <Globe size={18} />,
    children: [
      { label: "Domain Sorgula", href: "/domain", desc: "Alan adı ara" },
      {
        label: "Domain Transfer",
        href: "/domain/transfer",
        desc: "Taşıma işlemleri",
      },
      { label: "Toplu Domain", href: "/domain/toplu", desc: "Çoklu kayıt" },
    ],
  },
  {
    key: "hosting",
    label: "Hosting",
    icon: <Server size={18} />,
    children: [
      {
        label: "Bayilik Programı",
        href: "/hosting/bayilik",
        desc: "Hosting hizmetlerini kendi markanızla satın",
      },
      {
        label: "Hosting Partner",
        href: "/hosting/hosting-partner",
        desc: "Altyapımızı kullanarak müşterilerinize hosting sağlayın",
      },
      {
        label: "Teknoloji Partner",
        href: "/hosting/teknoloji-partner",
        desc: "Platform ve altyapı entegrasyonu için iş ortaklığı",
      },
    ],
  },
  {
    key: "web-guvenligi",
    label: "Web Güvenliği",
    icon: <ShieldCheck size={18} />,
    children: [
      {
        label: "Imunify360",
        href: "/guvenlik/imunify360",
        desc: "Sunucu koruması",
      },
      {
        label: "Web Uygulama Güvenlik Duvarı",
        href: "/guvenlik/waf",
        desc: "WAF çözümleri",
      },
      {
        label: "DDoS Koruması",
        href: "/guvenlik/ddos",
        desc: "Saldırı engelleme",
      },
    ],
  },
  {
    key: "siber-guvenlik",
    label: "Siber Güvenlik",
    icon: <Cpu size={18} />,
    children: [
      {
        label: "Penetrasyon Testi",
        href: "/siber-guvenlik/pentest",
        desc: "Güvenlik testi",
      },
      {
        label: "Güvenlik Danışmanlığı",
        href: "/siber-guvenlik/danismanlik",
        desc: "Uzman desteği",
      },
    ],
  },
  {
    key: "kaynaklar",
    label: "Bilgi Merkezi",
    icon: <BookOpen size={18} />,
    children: [
      {
        label: "Bilgi Tabanı",
        href: "/kaynaklar/dv-ov-ev-farklari",
        desc: "Teknik dokümantasyon",
      },
      {
        label: "SSL Rehberi",
        href: "/kaynaklar/ssl-nedir",
        desc: "Kurulum kılavuzları",
      },
      {
        label: "Sık Sorulan Sorular",
        href: "/kaynaklar/sss",
        desc: "Hızlı cevaplar",
      },
    ],
  },
  {
    key: "destek",
    label: "Destek",
    icon: <HeadphonesIcon size={18} />,
    children: [
      {
        label: "Destek Talebi Oluştur",
        href: "/iletisim",
        desc: "7/24 teknik destek",
      },
    ],
  },
];

function AccordionItem({
  group,
  isOpen,
  onToggle,
  onClose,
}: {
  group: (typeof NAV_GROUPS)[0];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-white/[0.04] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-primary">{group.icon}</span>
          <span className="text-sm font-semibold text-gray-200">
            {group.label}
          </span>
          {group.badge && (
            <span className="text-[10px] font-bold bg-primary/20 text-primary px-1.5 py-0.5 rounded-full leading-none">
              {group.badge}
            </span>
          )}
        </div>
        <ChevronDown
          size={15}
          className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="bg-white/[0.02] border-t border-white/[0.04]">
          {group.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="flex items-start gap-3 px-5 py-3 hover:bg-white/[0.05] transition-colors group"
            >
              <ArrowRight
                size={13}
                className="text-gray-600 group-hover:text-primary transition-colors mt-1 shrink-0"
              />
              <div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium leading-tight">
                  {child.label}
                </div>
                <div className="text-[11px] text-gray-600 mt-0.5">
                  {child.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Ana Bileşen ─────────────────────────────────── */
export default function NavbarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setActiveDropdown,
  showOnAllScreens = false,
}: NavbarMobileProps) {
  const { data: session } = useSession();
  const vis = showOnAllScreens ? "" : "lg:hidden";
  const [openKey, setOpenKey] = useState<string | null>(null);

  const close = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setOpenKey(null);
  };

  const toggle = (key: string) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return (
    <>
      {/* ── Hamburger Butonu ── */}
      {!showOnAllScreens && (
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setActiveDropdown(null);
          }}
          aria-label="Menüyü aç/kapat"
          className="lg:hidden fixed top-5 left-6 z-[70] w-10 h-10 rounded-xl bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-md"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* ── Overlay ───────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className={`${vis} fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]`}
          onClick={close}
        />
      )}

      {/* ── Drawer ────────────────────────── */}
      <div
        className={`${vis} fixed top-0 left-0 bottom-0 w-80 max-w-[92vw] bg-[#0d0f14] z-[70] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07] shrink-0">
          <Link
            href="/"
            onClick={close}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-base font-extrabold tracking-tight text-white leading-none">
                LSG
              </div>
              <div className="text-[10px] text-indigo-400 font-medium tracking-widest uppercase -mt-0.5">
                Teknoloji
              </div>
            </div>
          </Link>

          <button
            onClick={close}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Hızlı Aksiyonlar */}
        <div className="flex gap-2 px-4 pt-4 pb-3 shrink-0">
          {session ? (
            <Link
              href={session.user.role === "admin" ? "/admin" : "/panel"}
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-xs font-bold text-blue-400 hover:text-white transition-all"
            >
              <User size={13} />
              Panele Dön
            </Link>
          ) : (
            <Link
              href="/giris"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all"
            >
              <User size={13} />
              Giriş Yap
            </Link>
          )}
          <Link
            href="/sepet"
            onClick={close}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-semibold text-primary hover:text-white transition-all"
          >
            <ShoppingCart size={13} />
            Sepetim
          </Link>
        </div>

        {/* Arama Çubuğu */}
        <div className="px-4 pb-3 shrink-0">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-white/5 rounded-xl border border-white/10">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-xs text-gray-500">
              SSL, Domain, Hosting ara...
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-t border-white/[0.06]">
            {NAV_GROUPS.map((group) => (
              <AccordionItem
                key={group.key}
                group={group}
                isOpen={openKey === group.key}
                onToggle={() => toggle(group.key)}
                onClose={close}
              />
            ))}
          </div>

          <div className="px-4 py-4 flex flex-col gap-1">
            {[
              {
                label: "Hakkımızda",
                href: "/kaynaklar/hakkimizda",
                icon: <FileCheck size={14} />,
              },
              {
                label: "Referanslar",
                href: "/kaynaklar/referanslar",
                icon: <Zap size={14} />,
              },
              {
                label: "Kariyer",
                href: "/kaynaklar/kariyer",
                icon: <User size={14} />,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                <span className="text-gray-600">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-white/[0.07] p-4 space-y-3">
          <a
            href="tel:+902162858578"
            className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <Phone size={14} className="text-primary" />
            </div>
            <div>
              <div className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                7/24 Destek Hattı
              </div>
              <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                0216 285 85 78
              </div>
            </div>
          </a>

          <Link
            href="/iletisim"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            İletişime Geç
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
