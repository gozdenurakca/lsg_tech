"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { ICONS } from "@/lib/icons";

export default function NavbarProfile() {
  const { data: session } = useSession();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!session) return null;

  const userName = session.user?.name ?? "Kullanıcı";
  const userEmail = session.user?.email ?? "";
  const userRole = session.user?.role ?? "customer";

  const initials =
    userName
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";

  const ChevronIcon = ICONS.chevronDown;
  const SettingsIcon = ICONS.settings;
  const ReceiptIcon = ICONS.file;
  const LogoutIcon = ICONS.logout;
  const DashboardIcon = ICONS.dashboard;

  return (
    <div className="relative hidden lg:block" ref={profileRef}>
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-1.5 bg-white hover:bg-slate-50 transition-colors shadow-sm"
      >
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
          {initials}
        </div>
        <div className="text-left leading-none">
          <p className="text-sm font-semibold text-slate-900">{userName}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            {userRole === "customer" ? "Müşteri" : "Admin"}
          </p>
        </div>
        <ChevronIcon
          size={14}
          className={`text-slate-400 transition-transform duration-150 ${profileOpen ? "rotate-180" : ""}`}
        />
      </button>

      {profileOpen && (
        <div className="absolute right-0 mt-2 w-[220px] bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-900 truncate">{userName}</p>
            <p className="text-xs text-slate-400 mt-0.5 truncate">{userEmail}</p>
          </div>

          <div className="py-1">
            <Link
              href={userRole === "admin" ? "/admin" : "/panel"}
              onClick={() => setProfileOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <DashboardIcon size={15} className="text-slate-400" />
              {userRole === "admin" ? "Admin Panel" : "Müşteri Paneli"}
            </Link>

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
  );
}
