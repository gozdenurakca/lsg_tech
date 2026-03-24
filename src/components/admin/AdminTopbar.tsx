"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { ICONS } from "@/lib/icons";

const PAGE_TITLES: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/analytics": "Analitik",
  "/admin/users": "Kullanıcılar",
  "/admin/orders": "Siparişler",
  "/admin/products": "Ürünler",
  "/admin/partners": "Başvurular",
  "/admin/ssl": "SSL Yönetimi",
  "/admin/certificates": "Sertifikalar",
  "/admin/security-logs": "Güvenlik Logları",
  "/admin/settings": "Site Ayarları",
};

export default function AdminTopbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const userName = session?.user?.name ?? "Admin";
  const userEmail = session?.user?.email ?? "";

  const initials =
    userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "A";

  const pageTitle = PAGE_TITLES[pathname] ?? "Admin Paneli";

  const BellIcon = ICONS.bell;
  const ChevronIcon = ICONS.chevronDown;
  const SettingsIcon = ICONS.settings;
  const LogoutIcon = ICONS.logout;
  const ExternalIcon = ICONS.externalLink;

  return (
    <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
      <div>
        <h1 className="text-xl font-bold text-slate-900 leading-none">
          {pageTitle}
        </h1>
        <p className="text-xs text-slate-400 mt-1">Yönetim Paneli</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors">
          <BellIcon size={17} className="text-slate-500" />
        </button>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2.5 border border-slate-200 rounded-xl px-3 py-1.5 bg-white hover:bg-slate-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 text-white flex items-center justify-center text-xs font-bold">
              {initials}
            </div>

            <div className="text-left hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">{userName}</p>
              <p className="text-[11px] text-slate-400">Admin</p>
            </div>

            <ChevronIcon
              size={14}
              className={`text-slate-400 transition-transform ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-[220px] bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  {userName}
                </p>
                <p className="text-xs text-slate-400 truncate">{userEmail}</p>
              </div>

              <div className="py-1">
                <Link
                  href="/admin/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <SettingsIcon size={15} className="text-slate-400" />
                  Site Ayarları
                </Link>

                <Link
                  href="/"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  <ExternalIcon size={15} className="text-slate-400" />
                  Ana Siteye Dön
                </Link>
              </div>

              <div className="border-t border-slate-100 py-1">
                <button
                  onClick={() => signOut({ callbackUrl: "/giris" })}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogoutIcon size={15} />
                  Çıkış Yap
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
