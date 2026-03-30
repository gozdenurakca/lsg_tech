"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { ICONS } from "@/lib/icons";

interface Props {
  openOrders: number;
  userName?: string;
  userEmail?: string;
}

const NAV = [
  {
    group: "Genel",
    items: [{ label: "Dashboard", href: "/panel", icon: "dashboard" }],
  },
  {
    group: "Hizmetlerim",
    items: [
      { label: "SSL Sertifikalarım", href: "/panel/ssl", icon: "shield" },
      { label: "Alan Adlarım", href: "/panel/domains", icon: "globe" },
    ],
  },
  {
    group: "Siparişler & Ödeme",
    items: [
      {
        label: "Siparişlerim",
        href: "/panel/orders",
        icon: "cart",
        badgeKey: "orders",
      },
      { label: "Faturalarım", href: "/panel/billing", icon: "file" },
    ],
  },
  {
    group: "Destek",
    items: [
      {
        label: "Destek Taleplerim",
        href: "/panel/support",
        icon: "message",
      },
      { label: "Bildirimler", href: "/panel/notifications", icon: "bell" },
    ],
  },
  {
    group: "Hesap",
    items: [
      { label: "Profil Ayarları", href: "/panel/profile", icon: "users" },
    ],
  },
];

export default function CustomerSidebar({
  openOrders,
  userName = "Kullanıcı",
  userEmail = "",
}: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const badges: Record<string, number> = { orders: openOrders };

  const initials =
    userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "U";
  const LogoutIcon = ICONS.logout;
  const LeftIcon = ICONS.chevronLeft;
  const RightIcon = ICONS.chevronRight;

  return (
    <aside
      className="relative flex flex-col bg-gradient-to-b from-[#060f1e] to-[#0a152e] border-r border-[#1a2b4b] transition-all duration-300 ease-in-out sticky top-0 self-start"
      style={{ width: collapsed ? 72 : 260, height: "calc(100vh - 80px)" }}
    >
      <div className="flex items-center justify-between h-[72px] px-4 border-b border-[#1a2b4b] shrink-0">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-blue-500/20">
              L
            </div>
            <div className="leading-none">
              <p className="text-white font-bold text-[15px] tracking-wide">
                LSG Panel
              </p>
              <p className="text-blue-300/70 text-[11px] font-medium mt-1 uppercase tracking-wider">
                Müşteri Alanı
              </p>
            </div>
          </div>
        )}

        {collapsed && (
          <div className="mx-auto w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
            L
          </div>
        )}
      </div>

      {/* Greeting */}
      {!collapsed && (
        <div className="mx-3 mt-4 mb-1 px-3 py-3 rounded-xl bg-white/5 border border-white/8">
          <p className="text-[11px] text-blue-300/70 font-semibold uppercase tracking-widest mb-0.5">
            Hoş geldiniz 👋
          </p>
          <p className="text-white font-bold text-[14px] truncate">{userName}</p>
          <p className="text-slate-500 text-[11px] truncate mt-0.5">{userEmail}</p>
        </div>
      )}

      <nav className="flex-1 overflow-y-auto py-3 space-y-6 px-3 custom-scrollbar">
        {NAV.map(({ group, items }) => (
          <div key={group}>
            {!collapsed && (
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 pl-3 mb-2.5">
                {group}
              </p>
            )}

            <div className="space-y-1">
              {items.map(({ label, href, icon, badgeKey }) => {
                const Icon = ICONS[icon] || ICONS.box;
                const isActive =
                  pathname === href ||
                  (href !== "/panel" && pathname.startsWith(href + "/"));
                const badge = badgeKey ? badges[badgeKey] : 0;

                return (
                  <Link
                    key={href}
                    href={href}
                    title={collapsed ? label : undefined}
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200
                      ${
                        isActive
                          ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-inner"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 transition-transform ${isActive ? "text-blue-400 rotate-0" : "group-hover:scale-110"}`}
                    />

                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate">{label}</span>

                        {badge > 0 && (
                          <span className="text-[10px] font-bold bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {collapsed && badge > 0 && (
                      <span className="absolute right-3 w-2 h-2 bg-blue-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="shrink-0 border-t border-white/5 p-3 space-y-1">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
              {initials}
            </div>
            <div className="overflow-hidden leading-none">
              <p className="text-white text-sm font-medium truncate">
                {userName}
              </p>
              <p className="text-slate-500 text-xs truncate mt-0.5">
                {userEmail}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={() => signOut({ callbackUrl: "/giris" })}
          title={collapsed ? "Çıkış Yap" : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogoutIcon size={18} className="shrink-0" />
          {!collapsed && <span>Çıkış Yap</span>}
        </button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[84px] w-6 h-6 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white shadow-md transition-colors z-10"
        title={collapsed ? "Genişlet" : "Daralt"}
      >
        {collapsed ? <RightIcon size={12} /> : <LeftIcon size={12} />}
      </button>
    </aside>
  );
}
