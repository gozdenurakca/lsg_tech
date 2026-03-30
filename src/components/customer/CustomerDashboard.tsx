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
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 md:py-16 shadow-2xl border border-slate-800 group">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-600/30 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-indigo-600/20 rounded-full blur-[70px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sistem Durumu: Çevrimiçi
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 mb-4 tracking-tight drop-shadow-sm">
              Güvenlik Kontrol Merkeziniz
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-lg font-light leading-relaxed">
              Tüm dijital varlıklarınızı, sertifikalarınızı ve destek
              taleplerinizi tek bir akıllı panelden sorunsuzca yönetin.
            </p>
          </div>

          {/* Quick Stats in Hero */}
          <div className="hidden lg:flex gap-4">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col items-center justify-center min-w-[120px] shadow-xl">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                <ICONS.shieldCheck size={20} className="text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-white mb-1">
                {certificatesCount}
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Aktif
              </span>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 flex flex-col items-center justify-center min-w-[120px] shadow-xl">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                <ICONS.checkCircle size={20} className="text-emerald-400" />
              </div>
              <span className="text-2xl font-bold text-white mb-1">
                Sorunsuz
              </span>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Durum
              </span>
            </div>
          </div>
        </div>
      </div>

      {expiringCount > 0 && (
        <div className="relative group overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/60 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all hover:shadow-md hover:border-amber-300">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]" />
          <div className="relative flex items-start gap-5">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
              <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
              <ICONS.alert size={24} className="text-white" />
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-amber-950 text-base md:text-lg flex items-center gap-2">
                Eylem Gerekiyor: {expiringCount} Sertifika
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
              </h3>
              <p className="text-sm text-amber-800/80 mt-1 font-medium">
                Süresi 30 günden az kalan sertifikalarınız var. Çevrimiçi
                kesinti yaşamamak için vakit kaybetmeden yenileyin.
              </p>
            </div>
          </div>
          <Link
            href="/panel/ssl"
            className="relative shrink-0 overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-sm font-bold px-7 py-3 rounded-xl shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Sertifikaları Gör
          </Link>
        </div>
      )}

      {/* KPI GRID */}
      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
          <ICONS.activity size={20} className="text-blue-500" />
          Genel Bakış
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <KpiCard
            title="Aktif Sertifikalar"
            value={certificatesCount}
            desc={
              expiringCount > 0
                ? `${expiringCount} sertifikanın süresi yaklaşıyor`
                : "Tüm sertifikalarınız güncel ve güvenli"
            }
            icon="shield"
            href="/panel/ssl"
            accent={expiringCount > 0 ? "amber" : "blue"}
            trend="+2%"
          />

          <KpiCard
            title="Toplam Sipariş"
            value={ordersCount}
            desc="Şimdiye kadar oluşturulan siparişler"
            icon="receipt"
            href="/panel/orders"
            accent="indigo"
          />

          <KpiCard
            title="Destek Talepleri"
            value={openTicketsCount}
            desc={
              openTicketsCount > 0
                ? "Yanıt bekleyen açık talebiniz var"
                : "Tüm talepleriniz çözümlendi"
            }
            icon="messageSquare"
            href="/panel/support"
            accent={openTicketsCount > 0 ? "rose" : "emerald"}
          />

          <KpiCard
            title="Hesap Durumu"
            value="Aktif ✓"
            desc="Herhangi bir güvenlik sorunu yok"
            icon="checkCircle"
            href="/panel/profile"
            accent="emerald"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
          <ICONS.zap size={20} className="text-blue-500" />
          Hızlı İşlemler
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <QuickAction
            href="/ssl"
            icon="shieldCheck"
            label="Yeni SSL Satın Al"
            desc="Hemen koruma sağlayın"
            color="blue"
          />
          <QuickAction
            href="/panel/domains"
            icon="globe"
            label="Alan Adı Yönetimi"
            desc="DNS ve domain ayarları"
            color="indigo"
          />
          <QuickAction
            href="/support"
            icon="lifeBuoy"
            label="Destek Talebi Aç"
            desc="Uzman ekibimize ulaşın"
            color="violet"
          />
          <QuickAction
            href="/panel/orders"
            icon="file"
            label="Faturalarım"
            desc="Ödeme geçmişini incele"
            color="slate"
          />
        </div>
      </div>
    </div>
  );
}

type Accent =
  | "blue"
  | "indigo"
  | "emerald"
  | "amber"
  | "violet"
  | "slate"
  | "rose";

const accentMap: Record<
  Accent,
  {
    bg: string;
    iconText: string;
    borderHover: string;
    shadowHover: string;
    gradient: string;
  }
> = {
  blue: {
    bg: "bg-blue-50",
    iconText: "text-blue-600",
    borderHover: "hover:border-blue-300",
    shadowHover: "hover:shadow-blue-500/10",
    gradient: "from-blue-500/10 to-transparent",
  },
  indigo: {
    bg: "bg-indigo-50",
    iconText: "text-indigo-600",
    borderHover: "hover:border-indigo-300",
    shadowHover: "hover:shadow-indigo-500/10",
    gradient: "from-indigo-500/10 to-transparent",
  },
  emerald: {
    bg: "bg-emerald-50",
    iconText: "text-emerald-600",
    borderHover: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-500/10",
    gradient: "from-emerald-500/10 to-transparent",
  },
  amber: {
    bg: "bg-amber-50",
    iconText: "text-amber-600",
    borderHover: "hover:border-amber-300",
    shadowHover: "hover:shadow-amber-500/10",
    gradient: "from-amber-500/10 to-transparent",
  },
  rose: {
    bg: "bg-rose-50",
    iconText: "text-rose-600",
    borderHover: "hover:border-rose-300",
    shadowHover: "hover:shadow-rose-500/10",
    gradient: "from-rose-500/10 to-transparent",
  },
  violet: {
    bg: "bg-violet-50",
    iconText: "text-violet-600",
    borderHover: "hover:border-violet-300",
    shadowHover: "hover:shadow-violet-500/10",
    gradient: "from-violet-500/10 to-transparent",
  },
  slate: {
    bg: "bg-slate-100",
    iconText: "text-slate-600",
    borderHover: "hover:border-slate-300",
    shadowHover: "hover:shadow-slate-500/10",
    gradient: "from-slate-500/10 to-transparent",
  },
};

interface KpiProps {
  title: string;
  value: string | number;
  desc: string;
  icon: IconType;
  href: string;
  accent: Accent;
  trend?: string;
}

function KpiCard({ title, value, desc, icon, href, accent, trend }: KpiProps) {
  const styles = accentMap[accent];
  const Icon = ICONS[icon] || ICONS.circle;

  return (
    <Link
      href={href}
      className={`relative group bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 ${styles.borderHover} ${styles.shadowHover} hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Background Gradient Blob on Hover */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-bl ${styles.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative flex items-start justify-between z-10">
        <div
          className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center ${styles.iconText} shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon size={24} strokeWidth={2} />
        </div>

        <div className="flex flex-col items-end">
          <div className="p-1.5 rounded-full bg-slate-50 border border-slate-100 group-hover:bg-slate-100 transition-colors">
            <ICONS.arrowRight
              size={14}
              className="text-slate-400 group-hover:text-slate-700 transition-colors"
            />
          </div>
          {trend && (
            <span className="text-[10px] font-bold text-emerald-600 mt-2 bg-emerald-50 px-2 py-0.5 rounded-full">
              {trend}
            </span>
          )}
        </div>
      </div>

      <div className="relative z-10 mt-2">
        <p className="text-[13px] font-semibold text-slate-500 uppercase tracking-wide mb-1 opacity-80">
          {title}
        </p>
        <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {value}
        </p>
        <p className="text-xs text-slate-500 mt-3 font-medium leading-relaxed">
          {desc}
        </p>
      </div>
    </Link>
  );
}

interface QuickActionProps {
  href: string;
  icon: IconType;
  label: string;
  desc: string;
  color: Accent;
}

function QuickAction({ href, icon, label, desc, color }: QuickActionProps) {
  const styles = accentMap[color];
  const Icon = ICONS[icon] || ICONS.circle;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-3 bg-white border border-slate-200 rounded-2xl p-5 overflow-hidden transition-all duration-300 ${styles.borderHover} ${styles.shadowHover} hover:-translate-y-1 hover:shadow-lg`}
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`}
      />

      <div className="flex items-center justify-between z-10">
        <div
          className={`w-10 h-10 rounded-xl ${styles.bg} flex items-center justify-center ${styles.iconText} transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-sm`}
        >
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <ICONS.arrowRight
          size={18}
          className="text-slate-300 group-hover:text-slate-700 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        />
      </div>

      <div className="z-10 mt-1">
        <span className="block text-[15px] font-bold text-slate-800 group-hover:text-slate-950 transition-colors">
          {label}
        </span>
        <span className="block text-xs text-slate-500 mt-1 font-medium">
          {desc}
        </span>
      </div>
    </Link>
  );
}
