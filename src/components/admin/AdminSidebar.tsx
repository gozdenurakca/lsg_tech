"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { ICONS } from "@/lib/icons";

interface Props {
  totalUsers: number;
  pendingOrders: number;
  newPartnerCount?: number;
  userName?: string;
  userEmail?: string;
}

const NAV = (badges: Record<string, number>) => [
  {
    group: "Genel",
    items: [
      { label: "Dashboard", href: "/admin", icon: "dashboard" },
      { label: "Analitik", href: "/admin/analytics", icon: "chart" },
    ],
  },
  {
    group: "Yönetim",
    items: [
      {
        label: "Kullanıcılar",
        href: "/admin/users",
        icon: "users",
        badge: badges.users,
      },
      {
        label: "Siparişler",
        href: "/admin/orders",
        icon: "cart",
        badge: badges.orders,
      },
      { label: "Ürünler", href: "/admin/products", icon: "box" },
      {
        label: "Başvurular",
        href: "/admin/partners",
        icon: "file",
        badge: badges.partners,
      },
    ],
  },
  {
    group: "SSL & Güvenlik",
    items: [
      { label: "SSL Yönetimi", href: "/admin/ssl", icon: "shield" },
      { label: "Sertifikalar", href: "/admin/certificates", icon: "keyRound" },
      {
        label: "Güvenlik Logları",
        href: "/admin/security-logs",
        icon: "alert",
      },
    ],
  },
  {
    group: "Ayarlar",
    items: [
      { label: "Site Ayarları", href: "/admin/settings", icon: "settings" },
    ],
  },
];

export default function AdminSidebar({
  totalUsers,
  pendingOrders,
  newPartnerCount = 0,
  userName = "Admin",
  userEmail = "",
}: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const badges = {
    users: totalUsers,
    orders: pendingOrders,
    partners: newPartnerCount,
  };

  const groups = NAV(badges);

  const initials =
    userName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "A";

  // 🔥 ICONS
  const ExternalIcon = ICONS.externalLink;
  const LogoutIcon = ICONS.logout;
  const LeftIcon = ICONS.chevronLeft;
  const RightIcon = ICONS.chevronRight;

  return (
    <aside
      className="relative flex flex-col bg-[#0f172a] border-r border-white/5 transition-all duration-300 shrink-0"
      style={{ width: collapsed ? 72 : 260, minHeight: "100vh" }}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between h-[72px] px-4 border-b border-white/5">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div>
              <p className="text-white font-semibold text-sm">LSG Admin</p>
              <p className="text-slate-400 text-xs">Yönetim Paneli</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
        )}
      </div>

      {/* NAV */}
      <nav className="flex-1 overflow-y-auto py-4 space-y-5 px-2">
        {groups.map(({ group, items }) => (
          <div key={group}>
            {!collapsed && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 pl-3 mb-1.5">
                {group}
              </p>
            )}

            <div className="space-y-0.5">
              {items.map(({ label, href, icon, badge }) => {
                const Icon = ICONS[icon] || ICONS.box;

                const isActive =
                  pathname === href ||
                  (href !== "/admin" && pathname.startsWith(href + "/"));

                return (
                  <Link
                    key={href}
                    href={href}
                    title={collapsed ? label : undefined}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition
                      ${
                        isActive
                          ? "bg-violet-600 text-white"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <Icon size={18} className="shrink-0" />

                    {!collapsed && (
                      <>
                        <span className="flex-1 truncate">{label}</span>

                        {badge && badge > 0 && (
                          <span className="text-[10px] font-bold bg-violet-500 text-white px-1.5 py-0.5 rounded-full">
                            {badge}
                          </span>
                        )}
                      </>
                    )}

                    {collapsed && badge && badge > 0 && (
                      <span className="absolute right-2 w-2 h-2 bg-violet-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* USER */}
      <div className="border-t border-white/5 p-3 space-y-1">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold">
              {initials}
            </div>
            <div>
              <p className="text-white text-sm">{userName}</p>
              <p className="text-slate-500 text-xs">{userEmail}</p>
            </div>
          </div>
        )}

        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg"
        >
          <ExternalIcon size={18} />
          {!collapsed && <span>Ana Siteye Dön</span>}
        </Link>

        <button
          onClick={() => signOut({ callbackUrl: "/giris" })}
          className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg w-full"
        >
          <LogoutIcon size={18} />
          {!collapsed && <span>Çıkış Yap</span>}
        </button>
      </div>

      {/* TOGGLE */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[84px] w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center text-slate-400"
      >
        {collapsed ? <RightIcon size={12} /> : <LeftIcon size={12} />}
      </button>
    </aside>
  );
}
