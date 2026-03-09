"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface Props {
  openOrders: number;
}

export default function CustomerSidebar({ openOrders }: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuGroups = [
    {
      title: "Genel",
      items: [
        {
          name: "Dashboard",
          href: "/panel",
          icon: (
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
                d="M3 12l2-2 7-7 7 7 2 2M5 10v10h14V10"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "SSL & Siparişlerim",
      items: [
        {
          name: "Sertifikalarım",
          href: "/panel/ssl",
          icon: (
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          ),
        },
        {
          name: "Siparişlerim",
          href: "/panel/orders",
          icon: (
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
                d="M5 9h14l1 12H4L5 9z"
              />
            </svg>
          ),
          badge: openOrders > 0 ? openOrders.toString() : undefined,
        },
      ],
    },
    {
      title: "Destek",
      items: [
        {
          name: "Destek Taleplerim",
          href: "/panel/support",
          icon: (
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
                d="M18 13v6a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h8a2 2 0 012 2v2"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Hesap",
      items: [
        {
          name: "Profil Ayarları",
          href: "/panel/profile",
          icon: (
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
                d="M5.121 17.804A9 9 0 1118.88 6.196M15 21H9"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <aside
      style={{
        width: collapsed ? "80px" : "280px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        padding: "24px 16px",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-700 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <div className="font-semibold text-sm">LSG Panel</div>
              <div className="text-xs text-slate-400">Müşteri Alanı</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-sm px-2 py-1 rounded bg-sky-100 hover:bg-sky-200"
        >
          ⇆
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6">
        {menuGroups.map((group, i) => (
          <div key={i}>
            {!collapsed && (
              <div className="text-xs font-semibold text-slate-400 uppercase mb-2 pl-3">
                {group.title}
              </div>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                      isActive
                        ? "bg-sky-600 text-white"
                        : "text-slate-700 hover:bg-sky-50"
                    }`}
                  >
                    {item.icon}
                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.name}</span>
                        {item.badge && (
                          <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="pt-6 border-t">
        <button
          onClick={() => signOut({ callbackUrl: "/giris" })}
          className="flex items-center gap-3 text-red-500 hover:text-red-600 text-sm"
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
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
          </svg>
          {!collapsed && "Çıkış Yap"}
        </button>
      </div>
    </aside>
  );
}
