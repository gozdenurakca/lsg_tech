"use client";

import Link from "next/link";
import { ICONS, type IconType } from "@/lib/icons";

interface Props {
  certificatesCount: number;
  expiringCount: number;
  ordersCount: number;
  openTicketsCount: number;
}

export default function CustomerDashboard({
  certificatesCount,
  expiringCount,
  ordersCount,
  openTicketsCount,
}: Props) {
  return (
    <div className="space-y-8">
      {expiringCount > 0 && (
        <div className="flex items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4">
          <div className="flex items-start gap-3">
            <ICONS.alert size={20} className="text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 text-sm">
                {expiringCount} sertifikanız 30 gün içinde sona erecek
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Kesinti yaşamamak için yenileme işlemini başlatmanız önerilir.
              </p>
            </div>
          </div>
          <Link
            href="/panel/ssl"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            Sertifikaları Gör
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KpiCard
          title="Aktif Sertifikalar"
          value={certificatesCount}
          desc={
            expiringCount > 0
              ? `${expiringCount} tanesi yakında sona eriyor`
              : "Tüm sertifikalar güncel"
          }
          icon="shield"
          href="/panel/ssl"
          accent={expiringCount > 0 ? "amber" : "blue"}
        />

        <KpiCard
          title="Toplam Sipariş"
          value={ordersCount}
          desc="Tüm sipariş geçmişiniz"
          icon="bag"
          href="/panel/orders"
          accent="indigo"
        />

        <KpiCard
          title="Açık Destek Talebi"
          value={openTicketsCount}
          desc={
            openTicketsCount > 0
              ? "Yanıt bekleyen talepleriniz var"
              : "Aktif talep bulunmuyor"
          }
          icon="message"
          href="/panel/support"
          accent={openTicketsCount > 0 ? "amber" : "emerald"}
        />

        <KpiCard
          title="Hesap Durumu"
          value="Aktif"
          desc="Herhangi bir kısıtlama yok"
          icon="check"
          href="/panel/profile"
          accent="emerald"
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Hızlı İşlemler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAction
            href="/panel/ssl"
            icon="shield"
            label="SSL Sertifikası Al"
            color="blue"
          />
          <QuickAction
            href="/panel/domains"
            icon="globe"
            label="Alan Adı Yönet"
            color="indigo"
          />
          <QuickAction
            href="/panel/support"
            icon="message"
            label="Destek Talebi Aç"
            color="violet"
          />
          <QuickAction
            href="/panel/billing"
            icon="receipt"
            label="Fatura Görüntüle"
            color="slate"
          />
        </div>
      </div>
    </div>
  );
}

type Accent = "blue" | "indigo" | "emerald" | "amber" | "violet" | "slate";

const accentMap: Record<Accent, { bg: string; icon: string; text: string }> = {
  blue: {
    bg: "bg-blue-50",
    icon: "text-blue-600",
    text: "text-blue-900",
  },
  indigo: {
    bg: "bg-indigo-50",
    icon: "text-indigo-600",
    text: "text-indigo-900",
  },
  emerald: {
    bg: "bg-emerald-50",
    icon: "text-emerald-600",
    text: "text-emerald-900",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "text-amber-600",
    text: "text-amber-900",
  },
  violet: {
    bg: "bg-violet-50",
    icon: "text-violet-600",
    text: "text-violet-900",
  },
  slate: {
    bg: "bg-slate-100",
    icon: "text-slate-600",
    text: "text-slate-900",
  },
};

interface KpiProps {
  title: string;
  value: string | number;
  desc: string;
  icon: IconType;
  href: string;
  accent: Accent;
}

function KpiCard({ title, value, desc, icon, href, accent }: KpiProps) {
  const { bg, icon: iconColor } = accentMap[accent];
  const Icon = ICONS[icon];

  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-slate-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${iconColor}`}
        >
          <Icon size={20} />
        </div>

        <ICONS.arrowRight
          size={14}
          className="text-slate-300 group-hover:text-slate-500 transition-colors mt-1"
        />
      </div>

      <div>
        <p className="text-xs font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-900 mt-1 leading-none">
          {value}
        </p>
        <p className="text-xs text-slate-400 mt-2">{desc}</p>
      </div>
    </Link>
  );
}

interface QuickActionProps {
  href: string;
  icon: IconType;
  label: string;
  color: Accent;
}

function QuickAction({ href, icon, label, color }: QuickActionProps) {
  const { bg, icon: iconColor } = accentMap[color];
  const Icon = ICONS[icon];

  return (
    <Link
      href={href}
      className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 hover:shadow-sm hover:border-slate-300 transition-all duration-150"
    >
      <div
        className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center ${iconColor} shrink-0`}
      >
        <Icon size={18} />
      </div>

      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors flex-1">
        {label}
      </span>

      <ICONS.arrowRight
        size={13}
        className="text-slate-300 group-hover:text-slate-500 transition-colors"
      />
    </Link>
  );
}
