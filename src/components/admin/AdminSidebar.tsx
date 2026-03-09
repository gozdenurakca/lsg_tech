"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  FileText,
  Shield,
  KeyRound,
  FileWarning,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Props {
  totalUsers: number;
  pendingOrders: number;
  newPartnerCount?: number;
}

export default function AdminSidebar({
  totalUsers,
  pendingOrders,
  newPartnerCount = 0,
}: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuGroups = [
    {
      title: "Genel",
      items: [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Analitik", href: "/admin/analytics", icon: BarChart3 },
      ],
    },
    {
      title: "Yönetim",
      items: [
        {
          name: "Kullanıcılar",
          href: "/admin/users",
          icon: Users,
          badge: totalUsers > 0 ? String(totalUsers) : undefined,
        },
        {
          name: "Siparişler",
          href: "/admin/orders",
          icon: ShoppingCart,
          badge: pendingOrders > 0 ? String(pendingOrders) : undefined,
        },
        { name: "Ürünler", href: "/admin/products", icon: Package },
        {
          name: "Başvurular",
          href: "/admin/partners",
          icon: FileText,
          badge: newPartnerCount > 0 ? String(newPartnerCount) : undefined,
        },
      ],
    },
    {
      title: "SSL & Güvenlik",
      items: [
        { name: "SSL Yönetimi", href: "/admin/ssl", icon: Shield },
        { name: "Sertifikalar", href: "/admin/certificates", icon: KeyRound },
        {
          name: "Güvenlik Logları",
          href: "/admin/security-logs",
          icon: FileWarning,
        },
      ],
    },
    {
      title: "Ayarlar",
      items: [
        { name: "Site Ayarları", href: "/admin/settings", icon: Settings },
      ],
    },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-72"
      } bg-slate-950 text-slate-300 min-h-screen border-r border-slate-800 transition-all duration-300 flex flex-col`}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800">
        {!collapsed && (
          <div>
            <div className="text-white font-semibold text-lg">LSG Admin</div>
            <div className="text-xs text-slate-500">Yönetim Paneli</div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-500 hover:text-white transition"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-8">
        {menuGroups.map((group, i) => (
          <div key={i}>
            {!collapsed && (
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-3 px-2">
                {group.title}
              </div>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition
                      ${
                        active
                          ? "bg-slate-800 text-white"
                          : "hover:bg-slate-900 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className={`${
                          active ? "text-blue-400" : "text-slate-500"
                        }`}
                      />
                      {!collapsed && <span>{item.name}</span>}
                    </div>

                    {!collapsed && item.badge && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="px-6 py-6 border-t border-slate-800 space-y-3">
        <Link
          href="/"
          className="block text-sm text-slate-500 hover:text-white transition"
        >
          Ana Siteye Dön
        </Link>
        <Link
          href="/giris"
          className="block text-sm text-slate-500 hover:text-white transition"
        >
          Çıkış Yap
        </Link>
      </div>
    </aside>
  );
}
