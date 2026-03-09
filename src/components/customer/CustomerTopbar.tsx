"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

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

export default function CustomerTopbar({ user, notifications = [] }: Props) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // null güvenliği
  const userName = user?.name ?? "Kullanıcı";
  const userEmail = user?.email ?? "";
  const userRole = user?.role ?? "customer";

  const initials =
    userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <div className="h-[72px] bg-white border-b flex items-center justify-between px-8 sticky top-0 z-40">
      {/* SOL */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Hoş geldiniz, {userName}</p>
      </div>

      {/* SAĞ */}
      <div className="flex items-center gap-3">
        {/* Bildirim */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileOpen(false);
            }}
            className="w-10 h-10 rounded-lg border bg-white flex items-center justify-center relative hover:bg-slate-50"
          >
            🔔
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {notifications.length}
              </span>
            )}
          </button>

          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-[320px] bg-white border rounded-xl shadow-xl z-50">
              <div className="p-4 border-b font-semibold text-sm">
                Bildirimler
              </div>

              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 && (
                  <div className="p-4 text-sm text-slate-500">Bildirim yok</div>
                )}

                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 border-b last:border-none text-sm hover:bg-slate-50"
                  >
                    <div className="font-medium">{notif.message}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {notif.time}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/panel/notifications"
                className="block text-center text-sm font-semibold text-blue-600 py-3 border-t hover:bg-slate-50"
              >
                Tümünü Gör →
              </Link>
            </div>
          )}
        </div>

        {/* Profil */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationsOpen(false);
            }}
            className="flex items-center gap-3 border rounded-lg px-3 py-1.5 bg-white hover:bg-slate-50"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              {initials}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-sm font-semibold text-slate-900 leading-none">
                {userName}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {userRole === "customer" ? "Müşteri" : "Admin"}
              </div>
            </div>
            ▼
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-[240px] bg-white border rounded-xl shadow-xl z-50">
              <div className="p-4 border-b">
                <div className="text-sm font-semibold">{userName}</div>
                <div className="text-xs text-slate-500 mt-1">{userEmail}</div>
              </div>

              <Link
                href="/panel/profile"
                className="block px-4 py-3 text-sm hover:bg-slate-50"
              >
                Profil Ayarları
              </Link>

              <Link
                href="/panel/billing"
                className="block px-4 py-3 text-sm hover:bg-slate-50"
              >
                Faturalar
              </Link>

              <div className="border-t">
                <button
                  onClick={() => signOut({ callbackUrl: "/giris" })}
                  className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50"
                >
                  Çıkış Yap
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
