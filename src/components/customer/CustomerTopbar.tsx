"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { ICONS } from "@/lib/icons";

interface Notification {
  id: string;
  type: "warning" | "success" | "info";
  message: string;
  time: string;
}

interface Props {
  user: Session["user"];
  notifications?: Notification[];
}

const PAGE_TITLES: Record<string, string> = {
  "/panel": "Dashboard",
  "/panel/ssl": "SSL Sertifikalarım",
  "/panel/domains": "Alan Adlarım",
  "/panel/orders": "Siparişlerim",
  "/panel/billing": "Faturalarım",
  "/panel/support": "Destek Taleplerim",
  "/panel/notifications": "Bildirimler",
  "/panel/profile": "Profil Ayarları",
};

export default function CustomerTopbar({ user, notifications = [] }: Props) {
  const pathname = usePathname();

  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
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

  const userName = user?.name ?? "Kullanıcı";
  const userEmail = user?.email ?? "";
  const userRole = user?.role ?? "customer";

  const initials =
    userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  const pageTitle = PAGE_TITLES[pathname] ?? "Panel";

  const BellIcon = ICONS.bell;
  const ChevronIcon = ICONS.chevronDown;
  const SettingsIcon = ICONS.settings;
  const ReceiptIcon = ICONS.file;
  const LogoutIcon = ICONS.logout;

  const NOTIF_CONFIG = {
    warning: {
      icon: ICONS.alert,
      color: "text-amber-500",
    },
    success: {
      icon: ICONS.success,
      color: "text-emerald-500",
    },
    info: {
      icon: ICONS.info || ICONS.help,
      color: "text-blue-500",
    },
  };

  return (
    <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40 shrink-0">
      {/* SOL */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 leading-none">
          {pageTitle}
        </h1>
        <p className="text-xs text-slate-400 mt-1">Hoş geldiniz, {userName}</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setNotifOpen(!notifOpen);
              setProfileOpen(false);
            }}
            className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors"
          >
            <BellIcon size={17} className="text-slate-500" />

            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 mt-2 w-[340px] bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <span className="text-sm font-semibold text-slate-900">
                  Bildirimler
                </span>
                {notifications.length > 0 && (
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                    {notifications.length} yeni
                  </span>
                )}
              </div>

              <div className="max-h-72 overflow-y-auto divide-y divide-slate-50">
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                    <BellIcon size={28} className="mb-2 opacity-30" />
                    <p className="text-sm">Bildirim yok</p>
                  </div>
                ) : (
                  notifications.map((n) => {
                    const config = NOTIF_CONFIG[n.type];
                    const Icon = config.icon;

                    return (
                      <div
                        key={n.id}
                        className="flex gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                      >
                        <Icon
                          size={14}
                          className={`shrink-0 mt-0.5 ${config.color}`}
                        />

                        <div>
                          <p className="text-sm text-slate-800 leading-snug">
                            {n.message}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {n.time}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <Link
                href="/panel/notifications"
                className="block text-center text-xs font-semibold text-blue-600 py-3 border-t border-slate-100 hover:bg-slate-50 transition-colors"
                onClick={() => setNotifOpen(false)}
              >
                Tümünü Gör →
              </Link>
            </div>
          )}
        </div>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotifOpen(false);
            }}
            className="flex items-center gap-2.5 border border-slate-200 rounded-xl px-3 py-1.5 bg-white hover:bg-slate-50 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
              {initials}
            </div>

            <div className="text-left hidden sm:block leading-none">
              <p className="text-sm font-semibold text-slate-900">{userName}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {userRole === "customer" ? "Müşteri" : "Admin"}
              </p>
            </div>

            <ChevronIcon
              size={14}
              className={`text-slate-400 transition-transform duration-150 ${
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
                <p className="text-xs text-slate-400 mt-0.5 truncate">
                  {userEmail}
                </p>
              </div>

              <div className="py-1">
                <Link
                  href="/panel/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <SettingsIcon size={15} className="text-slate-400" />
                  Profil Ayarları
                </Link>

                <Link
                  href="/panel/billing"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <ReceiptIcon size={15} className="text-slate-400" />
                  Faturalarım
                </Link>
              </div>

              <div className="border-t border-slate-100 py-1">
                <button
                  onClick={() => signOut({ callbackUrl: "/giris" })}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
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
