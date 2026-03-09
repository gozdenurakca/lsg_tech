"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Crown,
  Layers,
  Asterisk,
  Box,
  ShieldCheck,
  ChevronRight,
  Shield,
  KeyRound,
  LockKeyhole,
  Server,
  ArrowRight,
  CheckCircle2,
  Users,
  Handshake,
  Boxes,
} from "lucide-react";

type DropdownKey =
  | "ssl"
  | "web-guvenligi"
  | "siber-guvenlik"
  | "alan-adlari"
  | "hosting"
  | "kaynaklar"
  | "destek"
  | null;

const SSL_ITEMS = [
  {
    title: "DV SSL",
    desc: "Hızlı doğrulama, bireysel ve küçük siteler.",
    href: "/ssl/dv",
    icon: BadgeCheck,
    badge: "Hızlı",
  },
  {
    title: "OV SSL",
    desc: "Kurumsal doğrulama, marka güveni.",
    href: "/ssl/ov",
    icon: Building2,
    badge: "Kurumsal",
  },
  {
    title: "EV SSL",
    desc: "En yüksek güven seviyesi, enterprise doğrulama.",
    href: "/ssl/ev",
    icon: Crown,
    badge: "Premium",
  },
  {
    title: "Multi-Domain SSL",
    desc: "Birden fazla domaini tek sertifikada yönet.",
    href: "/ssl/multi-domain",
    icon: Layers,
    badge: "SAN",
  },
] as const;
const CYBER_SECURITY_ITEMS = [
  {
    title: "SecurEnvoy",
    desc: "MFA ve kimlik doğrulama çözümleri",
    href: "/siber-guvenlik/securenvoy",
    icon: Shield,
    badge: "MFA",
  },
  {
    title: "NoSpamProxy",
    desc: "E-posta güvenliği ve şifreleme",
    href: "/siber-guvenlik/nospamproxy",
    icon: Server,
    badge: "Email",
  },
  {
    title: "Venafi",
    desc: "Sertifika yaşam döngüsü ve otomasyon",
    href: "/siber-guvenlik/venafi",
    icon: LockKeyhole,
    badge: "CLM",
  },
  {
    title: "Keeper",
    desc: "Parola kasası ve erişim yönetimi",
    href: "/siber-guvenlik/keeper",
    icon: KeyRound,
    badge: "PAM",
  },
  {
    title: "KeyTalk",
    desc: "PKI tabanlı kimlik ve cihaz doğrulama",
    href: "/siber-guvenlik/keytalk",
    icon: CheckCircle2,
    badge: "PKI",
  },
] as const;

const WEB_SECURITY_ITEMS = [
  {
    title: "Secure Site Pro",
    desc: "Web sitenizi koruyan güvenlik ve izleme aracı.",
    href: "/web-guvenligi/secure-site-pro",
    icon: Box,
  },
  {
    title: "Site Lock",
    desc: "Web sitesi güvenlik koruma hizmeti.",
    href: "/web-guvenligi/sitelock",
    icon: ShieldCheck,
  },
] as const;

const NAV_BTN =
  "inline-flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 rounded-lg";
const NAV_CHEV = "w-4 h-4 shrink-0 transition-transform duration-200";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount] = useState(2);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sslRef = useRef<HTMLDivElement>(null);
  const webGuvenligiRef = useRef<HTMLDivElement>(null);
  const siberGuvenlikRef = useRef<HTMLDivElement>(null);
  const alanAdlariRef = useRef<HTMLDivElement>(null);
  const hostingRef = useRef<HTMLDivElement>(null);
  const kaynaklarRef = useRef<HTMLDivElement>(null);
  const destekRef = useRef<HTMLDivElement>(null);

  const menuRefs = useMemo(
    () => ({
      ssl: sslRef,
      "web-guvenligi": webGuvenligiRef,
      "siber-guvenlik": siberGuvenlikRef,
      "alan-adlari": alanAdlariRef,
      hosting: hostingRef,
      kaynaklar: kaynaklarRef,
      destek: destekRef,
    }),
    [],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInside = Object.values(menuRefs).some((ref) =>
        ref.current?.contains(target),
      );
      if (!clickedInside) setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRefs]);

  const handleMouseEnter = (key: Exclude<DropdownKey, null>) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const MEGA_BASE =
    "absolute top-full mt-2 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden animate-fade-in-down z-50";
  const MEGA_CENTER = "left-1/2 -translate-x-1/2";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    L
                  </span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-primary to-indigo-700 bg-clip-text text-transparent">
                    LSG
                  </div>
                  <div className="text-xs text-gray-500 -mt-1">Teknoloji</div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {/* SSL (placeholder) */}
              {/* SSL */}
              <div
                ref={menuRefs["ssl"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("ssl")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "ssl"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>SSL</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "ssl" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "ssl" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[760px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="px-6 py-4 border-b border-gray-100 bg-white">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            SSL Sertifikaları
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            DV / OV / EV seçenekleri ile güveni artırın.
                            Multi-Domain çözümleriyle kapsamı genişletin.
                          </div>
                        </div>

                        <Link
                          href="/ssl"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2"
                        >
                          Tüm SSL Ürünleri <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-12">
                      <div className="col-span-7 p-3">
                        <div className="space-y-1 max-h-[340px] overflow-auto pr-1">
                          {SSL_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeAll();
                                }}
                                className="group flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 transition-all"
                              >
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                                  <Icon className="w-5 h-5 text-primary" />
                                </div>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center gap-2">
                                    <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                      {item.title}
                                    </div>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                      {item.badge}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                    {item.desc}
                                  </div>
                                </div>

                                <ArrowRight className="mt-1 w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-3 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-600 flex items-center justify-between">
                          <span>
                            ✅ 2048-bit+ şifreleme • ✅ Modern tarayıcı uyumu •
                            ✅ Kurulum rehberi
                          </span>
                          <Link
                            href="/tools/ssl-checker"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAll();
                            }}
                            className="font-semibold text-primary hover:underline"
                          >
                            SSL Checker
                          </Link>
                        </div>
                      </div>

                      <div className="col-span-5 p-5 border-l border-gray-100 bg-gradient-to-b from-white to-slate-50">
                        <div className="text-sm font-bold text-gray-900">
                          Kurumsal SSL Yönetimi
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Yenileme takibi, çoklu alan adı ve merkezi kontrol.
                        </div>

                        <div className="mt-4 space-y-2 text-xs text-gray-700">
                          {[
                            "Otomatik yenileme uyarıları",
                            "CSR / DCV adım adım kurulum",
                            "Wildcard & SAN optimizasyonu",
                            "Kurumsal destek ve SLA",
                          ].map((t) => (
                            <div key={t} className="flex items-start gap-2">
                              <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary/70" />
                              <span>{t}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 grid grid-cols-1 gap-2">
                          <Link
                            href="/iletisim"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAll();
                            }}
                            className="text-center bg-gradient-to-r from-primary to-indigo-700 text-white font-semibold px-4 py-2.5 rounded-xl hover:shadow-lg hover:scale-[1.01] transition-all"
                          >
                            Teklif Al
                          </Link>

                          <Link
                            href="/karsilastir"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAll();
                            }}
                            className="text-center bg-white border border-gray-200 text-gray-900 font-semibold px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all"
                          >
                            Ürünleri Karşılaştır
                          </Link>
                        </div>

                        <div className="mt-4 text-[11px] text-gray-500">
                          Ürün detayları:{" "}
                          <span className="font-semibold text-gray-700">
                            /ssl/[slug]
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Footer (clean) */}
                    <div className="px-6 py-4 bg-white border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/ssl/rehber"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
                      >
                        Kurulum Rehberi
                      </Link>
                      <Link
                        href="/ssl"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-sm font-semibold text-primary hover:underline flex items-center gap-2 group"
                      >
                        Detaylı incele{" "}
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Web Güvenliği*/}

              <div
                ref={menuRefs["web-guvenligi"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("web-guvenligi")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "web-guvenligi"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Web Güvenliği</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "web-guvenligi" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "web-guvenligi" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[520px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                      <div className="flex items-start justify-between gap-4">
                        <Link
                          href="/web-guvenligi"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="flex items-start gap-2 group"
                        >
                          <div>
                            <div className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                              Web Güvenliği
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Web siteniz için koruma, izleme ve güvenlik
                              katmanları
                            </div>
                          </div>

                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary mt-0.5" />
                        </Link>

                        <Link
                          href="/web-guvenligi"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        ></Link>
                      </div>
                    </div>

                    <div className="p-2">
                      {WEB_SECURITY_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAll();
                            }}
                            className="group flex items-center gap-4 rounded-xl px-4 py-4 hover:bg-gray-50 transition-all"
                          >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-500 mt-0.5 line-clamp-2">
                                {item.desc}
                              </div>
                            </div>

                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                          </Link>
                        );
                      })}
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        Kurulum, izleme ve destek için kurumsal paketler.
                      </div>
                      <Link
                        href="/iletisim"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-sm font-semibold bg-gradient-to-r from-primary to-indigo-700 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        Teklif Al
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/*Siber Güvenlik*/}
              <div
                ref={menuRefs["siber-guvenlik"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("siber-guvenlik")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "siber-guvenlik"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Siber Güvenlik</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "siber-guvenlik" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "siber-guvenlik" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[820px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            Siber Güvenlik Çözümleri
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Kurumsal kimlik, erişim ve e-posta güvenliği
                            portföyü
                          </div>
                        </div>

                        <Link
                          href="/siber-guvenlik"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          Tümünü Gör <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-0">
                      <div className="col-span-2 p-4 border-r border-gray-100">
                        <div className="grid grid-cols-2 gap-2">
                          {CYBER_SECURITY_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  closeAll();
                                }}
                                className="group rounded-xl p-3 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-md transition-all"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                                        {item.title}
                                      </div>
                                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                        {item.badge}
                                      </span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                      {item.desc}
                                    </div>
                                  </div>

                                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                        <div className="text-sm font-bold">Kurumsal Paket</div>
                        <div className="text-xs opacity-90 mt-1">
                          SLA, onboarding ve entegrasyon danışmanlığı
                        </div>

                        <div className="mt-5 space-y-3 text-xs">
                          {[
                            "SSO / SCIM entegrasyon",
                            "Rol bazlı erişim politikaları",
                            "Merkezi denetim logları",
                            "Kurumsal destek & SLA",
                          ].map((t) => (
                            <div key={t} className="flex items-start gap-2">
                              <span className="mt-0.5 inline-block w-2 h-2 rounded-full bg-white/70" />
                              <span className="opacity-95">{t}</span>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/iletisim"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="mt-6 block text-center bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
                        >
                          Demo / Teklif Al
                        </Link>

                        <Link
                          href="/siber-guvenlik"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="mt-3 block text-center text-xs font-semibold underline underline-offset-4 opacity-95 hover:opacity-100"
                        >
                          Ürünleri karşılaştır
                        </Link>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        Uyumluluk & güvenlik: ISO 27001, SOC2, audit-ready
                        opsiyonlar
                      </div>
                      <Link
                        href="/siber-guvenlik"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-sm font-semibold text-primary hover:underline flex items-center gap-2 group"
                      >
                        Detaylı incele{" "}
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* ALAN ADI */}
              <div
                ref={menuRefs["alan-adlari"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("alan-adlari")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "alan-adlari"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Alan Adı</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "alan-adlari" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "alan-adlari" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[700px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-green-500 rounded-full"></span>
                          Alan Adı İşlemleri
                        </h3>
                        <div className="space-y-1">
                          {[
                            {
                              name: "Alan Adı Sorgula",
                              desc: "Uygun domain bul",
                              href: "/domain",
                            },
                            {
                              name: "Alan Adı Tescil",
                              desc: "Yeni domain kayıt",
                              href: "/domain/tescil",
                            },
                            {
                              name: "Alan Adı Transfer",
                              desc: "Mevcut domainini taşı",
                              href: "/domain/transfer",
                            },
                            {
                              name: "Alan Adı Yenileme",
                              desc: "Süre uzatma",
                              href: "/domain/yenileme",
                            },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block px-3 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-1 h-4 bg-teal-500 rounded-full"></span>
                          Popüler Uzantılar
                        </h3>
                        <div className="space-y-1">
                          {[
                            {
                              name: ".com.tr",
                              desc: "Türkiye'nin tercihi",
                              href: "/domain/com-tr",
                            },
                            {
                              name: ".com",
                              desc: "Global standart",
                              href: "/domain/com",
                            },
                            {
                              name: ".net",
                              desc: "Teknoloji alanları",
                              href: "/domain/net",
                            },
                            {
                              name: ".org",
                              desc: "Sivil kuruluşlar",
                              href: "/domain/org",
                            },
                            {
                              name: ".io",
                              desc: "Tech startuplar",
                              href: "/domain/io",
                            },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block px-3 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-green-50/30 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/domain"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-primary font-semibold hover:underline text-sm flex items-center gap-2 group"
                      >
                        Tüm Alan Adlarını Gör{" "}
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                      <Link
                        href="/domain"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-sm font-semibold bg-gradient-to-r from-green-600 to-teal-600 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                      >
                        Domain Sorgula
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* HOSTİNG */}
              <div
                ref={menuRefs["hosting"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("hosting")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "hosting"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Hosting</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "hosting" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "hosting" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[460px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-slate-50 to-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-bold text-gray-900">
                            Hosting İş Ortaklığı
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            Bayilik, partnerlik ve teknoloji iş birlikleri için
                            programlar
                          </div>
                        </div>

                        <Link
                          href="/hosting"
                          onClick={closeAll}
                          className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2"
                        ></Link>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        {
                          name: "Bayilik Programı",
                          desc: "Satış & pazarlama desteğiyle bayilik modeli",
                          href: "/hosting/bayilik",
                          icon: Users,
                          badge: "Reseller",
                        },
                        {
                          name: "Hosting Partner",
                          desc: "Barındırma çözümlerinde ortak operasyon",
                          href: "/hosting/hosting-partner",
                          icon: Handshake,
                          badge: "Partner",
                        },
                        {
                          name: "Teknoloji Partner",
                          desc: "Entegrasyon, API ve ürün iş birlikleri",
                          href: "/hosting/teknoloji-partner",
                          icon: Boxes,
                          badge: "Tech",
                        },
                      ].map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAll();
                            }}
                            className="group flex items-start gap-3 rounded-xl px-4 py-3 hover:bg-gray-50 transition-all"
                          >
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                  {item.name}
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                  {item.badge}
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                {item.desc}
                              </div>
                            </div>

                            <ArrowRight className="mt-1 w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                    <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                      <div className="text-xs text-gray-600">
                        Onboarding, fiyat listesi ve satış kitleri için bizimle
                        iletişime geçin.
                      </div>
                      <Link
                        href="/iletisim"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="shrink-0 text-sm font-semibold bg-gradient-to-r from-primary to-indigo-700 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        Teklif Al
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* KAYNAKLAR */}
              <div
                ref={menuRefs["kaynaklar"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("kaynaklar")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "kaynaklar"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Kaynaklar</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "kaynaklar" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "kaynaklar" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[800px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="grid grid-cols-3 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Kaynak Merkezi
                        </h3>
                        <div className="space-y-1">
                          {[
                            { name: "Blog", href: "/blog" },
                            { name: "Rehberler", href: "/kaynaklar/rehberler" },
                            {
                              name: "Whitepaperlar",
                              href: "/kaynaklar/whitepaper",
                            },
                            {
                              name: "E-Kitaplar",
                              href: "/kaynaklar/e-kitaplar",
                            },
                            { name: "Videolar", href: "/kaynaklar/video" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Öğrenin
                        </h3>
                        <div className="space-y-1">
                          {[
                            {
                              name: "SSL Nedir?",
                              href: "/kaynaklar/ssl-nedir",
                            },
                            {
                              name: "DV / OV / EV Farkı",
                              href: "/kaynaklar/dv-ov-ev-farklari",
                            },
                            { name: "Webinarlar", href: "/kaynaklar/webinar" },
                            { name: "SSS", href: "/kaynaklar/sss" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                          LSG Hakkında
                        </h3>
                        <div className="space-y-1">
                          {[
                            { name: "Hakkımızda", href: "/hosting/hakkimizda" },
                            {
                              name: "Misyon & Vizyon",
                              href: "/hosting/misyon-vizyon",
                            },
                            {
                              name: "Yönetim Ekibi",
                              href: "/hosting/yonetim-ekibi",
                            },
                            {
                              name: "Referanslar",
                              href: "/hosting/referanslar",
                            },
                            { name: "Kariyer", href: "/hosting/kariyer" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg font-medium transition-all"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/kaynaklar"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeAll();
                        }}
                        className="text-primary font-semibold hover:underline text-sm flex items-center gap-2 group"
                      >
                        Tüm Kaynaklar{" "}
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* DESTEK */}
              <div
                ref={menuRefs["destek"]}
                className="relative"
                onMouseEnter={() => handleMouseEnter("destek")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`${NAV_BTN} ${
                    activeDropdown === "destek"
                      ? "text-primary bg-blue-50"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  <span>Destek</span>
                  <svg
                    className={`${NAV_CHEV} ${activeDropdown === "destek" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === "destek" && (
                  <div
                    className={`${MEGA_BASE} ${MEGA_CENTER} w-[900px] max-w-[calc(100vw-32px)]`}
                  >
                    <div className="grid grid-cols-3 gap-0">
                      <div className="p-6 border-r border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Destek Merkezi
                        </h3>
                        <div className="space-y-2">
                          {[
                            { name: "Bilgi Bankası", href: "/bilgi-bankasi" },
                            { name: "Dokümantasyon", href: "/dokumantasyon" },
                            {
                              name: "API Dokümantasyon",
                              href: "/api-dokumantasyon",
                            },
                            { name: "Destek Talebi Aç", href: "/destek/talep" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                        <h3 className="text-lg font-bold mb-6">İletişim</h3>
                        <div className="space-y-4 text-sm">
                          <div>
                            <div className="font-semibold opacity-90">
                              Telefon
                            </div>
                            <div className="opacity-90">
                              +90 (850) 000 00 00
                            </div>
                            <div className="text-xs opacity-70 mt-1">
                              Hafta içi 09:00–18:00
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold opacity-90">
                              E-posta
                            </div>
                            <div className="opacity-90">
                              support@lsgtech.com
                            </div>
                          </div>
                        </div>
                        <Link
                          href="/iletisim"
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          className="mt-6 block text-center bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
                        >
                          Bizimle İletişime Geçin
                        </Link>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Hızlı Linkler
                        </h3>
                        <div className="space-y-2">
                          {[
                            {
                              name: "SSL Kurulum Rehberi",
                              href: "/tools/ssl-install",
                            },
                            {
                              name: "Sertifika Doğrulama",
                              href: "/sertifika-dogrulama",
                            },
                            { name: "Sistem Durumu", href: "/status" },
                          ].map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={(e) => {
                                e.stopPropagation();
                                closeAll();
                              }}
                              className="block text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/iletisim"
                className="bg-gradient-to-r from-primary to-indigo-700 hover:from-indigo-700 hover:to-primary text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                İletişim
              </Link>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
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
              </button>

              <Link
                href="/sepet"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center relative"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/giris"
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveDropdown(null);
              }}
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div
                className="bg-white h-full w-80 max-w-[90%] p-6 shadow-2xl animate-slide-in-right overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-4">
                  {[
                    { name: "SSL", href: "/ssl" },
                    { name: "Web Güvenliği", href: "/web-guvenligi" },
                    { name: "Siber Güvenlik", href: "/siber-guvenlik" },
                    { name: "Alan Adları", href: "/domain" },
                    { name: "Hosting", href: "/hosting" },
                    { name: "Kaynaklar", href: "/kaynaklar" },
                    { name: "Destek", href: "/destek" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-primary transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/iletisim"
                      className="block text-center bg-gradient-to-r from-primary to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      İletişim
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[60] flex items-start justify-center pt-32 animate-fade-in"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 animate-slide-in-down"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="SSL sertifikası, güvenlik, domain, hosting..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  autoFocus
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
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
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Popüler:{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  DV SSL
                </span>
                ,{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  Multi-Domain SSL
                </span>
                ,{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  Kurumsal SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        .animate-slide-in-down {
          animation: slide-in-down 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}
