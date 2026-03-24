"use client";

import Link from "next/link";
import React from "react";

import NavbarActions from "./NavbarActions";

import SSLDropdown from "./dropdown/SSLDropdown";
import DomainDropdown from "./dropdown/DomainDropdown";
import HostingDropdown from "./dropdown/HostingDropdown";
import WebSecurityDropdown from "./dropdown/WebSecurityDropdown";
import CyberSecurityDropdown from "./dropdown/CyberSecurityDropdown";
import ResourcesDropdown from "./dropdown/ResourcesDropdown";
import SupportDropdown from "./dropdown/SupportDropdown";

import { DropdownKey } from "./useNavbar";

type Props = {
  isScrolled: boolean;
  activeDropdown: DropdownKey;
  handleMouseEnter: (key: Exclude<DropdownKey, null>) => void;
  handleMouseLeave: () => void;
  closeAll: () => void;
  menuRefs: Record<string, React.RefObject<HTMLDivElement>>;
  cartCount: number;
  setIsSearchOpen: (v: boolean) => void;
};

const NAV_BTN =
  "inline-flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50";

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
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
);

export default function NavbarDesktop({
  isScrolled,
  activeDropdown,
  handleMouseEnter,
  handleMouseLeave,
  closeAll,
  menuRefs,
  cartCount,
  setIsSearchOpen,
}: Props) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
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
            {/* SSL */}
            <div
              ref={menuRefs["ssl"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("ssl")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                SSL
                <Chevron open={activeDropdown === "ssl"} />
              </button>

              {activeDropdown === "ssl" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50">
                  <div className="absolute -top-4 left-0 right-0 h-4" />

                  <SSLDropdown closeAll={closeAll} />
                </div>
              )}
            </div>

            {/* DOMAIN */}
            <div
              ref={menuRefs["alan-adlari"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("alan-adlari")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Domain
                <Chevron open={activeDropdown === "alan-adlari"} />
              </button>
              {activeDropdown === "alan-adlari" && (
                <div
                  onMouseEnter={() => handleMouseEnter("alan-adlari")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <div className="absolute top-full mt-3 left-0">
                    <DomainDropdown closeAll={closeAll} />
                  </div>
                </div>
              )}
            </div>

            {/* HOSTING */}
            <div
              ref={menuRefs["hosting"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("hosting")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Hosting
                <Chevron open={activeDropdown === "hosting"} />
              </button>
              {activeDropdown === "hosting" && (
                <div
                  onMouseEnter={() => handleMouseEnter("hosting")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <div className="absolute top-full mt-3 left-0">
                    <HostingDropdown closeAll={closeAll} />
                  </div>
                </div>
              )}
            </div>

            {/* WEB SECURITY */}
            <div
              ref={menuRefs["web-guvenligi"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("web-guvenligi")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Web Güvenliği
                <Chevron open={activeDropdown === "web-guvenligi"} />
              </button>

              {activeDropdown === "web-guvenligi" && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 z-50">
                  <div className="absolute -top-4 left-0 right-0 h-4" />

                  <WebSecurityDropdown closeAll={closeAll} />
                </div>
              )}
            </div>

            {/* CYBER SECURITY */}
            <div
              ref={menuRefs["siber-guvenlik"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("siber-guvenlik")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Siber Güvenlik
                <Chevron open={activeDropdown === "siber-guvenlik"} />
              </button>
              {activeDropdown === "siber-guvenlik" && (
                <div
                  onMouseEnter={() => handleMouseEnter("siber-guvenlik")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2">
                    <CyberSecurityDropdown closeAll={closeAll} />
                  </div>
                </div>
              )}
            </div>

            {/* RESOURCES */}
            <div
              ref={menuRefs["kaynaklar"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("kaynaklar")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Bilgi Merkezi
                <Chevron open={activeDropdown === "kaynaklar"} />
              </button>
              {activeDropdown === "kaynaklar" && (
                <div
                  onMouseEnter={() => handleMouseEnter("kaynaklar")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <div className="absolute top-full mt-3 right-0">
                    <ResourcesDropdown closeAll={closeAll} />
                  </div>
                </div>
              )}
            </div>

            {/* SUPPORT */}
            <div
              ref={menuRefs["destek"]}
              className="relative"
              onMouseEnter={() => handleMouseEnter("destek")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={NAV_BTN}>
                Destek
                <Chevron open={activeDropdown === "destek"} />
              </button>
              {activeDropdown === "destek" && (
                <div
                  onMouseEnter={() => handleMouseEnter("destek")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute -top-3 left-0 right-0 h-3" />
                  <div className="absolute top-full mt-3 right-0">
                    <SupportDropdown closeAll={closeAll} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <NavbarActions
            setIsSearchOpen={setIsSearchOpen}
            cartCount={cartCount}
          />
        </div>
      </nav>
    </header>
  );
}
