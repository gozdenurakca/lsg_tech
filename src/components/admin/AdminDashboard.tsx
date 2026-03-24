import Link from "next/link";
import { ICONS } from "@/lib/icons";

import connectDB from "@/lib/db";
import User from "@/models/User";
import PartnerApplication from "@/models/PartnerApplication";
import Product from "@/models/Product";

import PartnerChart from "./charts/PartnerChart";
import PartnerStatusChart from "./charts/PartnerStatusChart";
import PartnerTypeChart from "./charts/PartnerTypeChart";
import { UserIcon } from "lucide-react";

interface UserDoc {
  _id: string;
  email: string;
  name?: string;
  createdAt: string;
}

const UsersIcon = ICONS.users;
const FileIcon = ICONS.file;
const SuccessIcon = ICONS.success;
const BoxIcon = ICONS.box;
const AlertIcon = ICONS.alert;
const ArrowIcon = ICONS.arrowRight;
const CartIcon = ICONS.cart;
const ClockIcon = ICONS.clock;

export default async function AdminDashboard() {
  await connectDB();

  const totalUsers = await User.countDocuments();
  const latestUsers = (await User.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .lean()) as UserDoc[];

  const totalApplications = await PartnerApplication.countDocuments();
  const newApplications = await PartnerApplication.countDocuments({
    status: "new",
  });
  const approvedApplications = await PartnerApplication.countDocuments({
    status: "approved",
  });
  const rejectedApplications = await PartnerApplication.countDocuments({
    status: "rejected",
  });

  const technologyCount = await PartnerApplication.countDocuments({
    type: "technology",
  });
  const hostingCount = await PartnerApplication.countDocuments({
    type: "hosting",
  });
  const bayilikCount = await PartnerApplication.countDocuments({
    type: "bayilik",
  });

  const totalProducts = await Product.countDocuments();

  const last30Days = new Date();
  last30Days.setDate(last30Days.getDate() - 30);

  const recentApplications = (await PartnerApplication.find({
    createdAt: { $gte: last30Days },
  })
    .select("createdAt")
    .lean()) as { createdAt: string }[];

  const chartMap: Record<string, number> = {};
  recentApplications.forEach((app) => {
    const date = new Date(app.createdAt).toISOString().split("T")[0];
    chartMap[date] = (chartMap[date] || 0) + 1;
  });

  const chartData = Object.entries(chartMap)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, count]) => ({ date, count }));

  const typeDistribution = [
    { name: "Technology", value: technologyCount },
    { name: "Hosting", value: hostingCount },
    { name: "Bayilik", value: bayilikCount },
  ];

  const statusDistribution = [
    { name: "Yeni", value: newApplications },
    { name: "Onaylandı", value: approvedApplications },
    { name: "Reddedildi", value: rejectedApplications },
  ];

  return (
    <div className="space-y-8">
      {newApplications > 0 && (
        <div className="flex items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4">
          <div className="flex items-start gap-3">
            <AlertIcon size={20} className="text-amber-500 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-amber-900 text-sm">
                {newApplications} yeni partner başvurusu incelenmeyi bekliyor
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Başvuruları değerlendirmek için Partner Başvuruları sayfasını
                ziyaret edin.
              </p>
            </div>
          </div>
          <Link
            href="/admin/partners"
            className="shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            İncele →
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <KpiCard
          title="Toplam Kullanıcı"
          value={totalUsers}
          desc="Sistemde kayıtlı"
          icon={<UserIcon size={20} />}
          href="/admin/users"
          accent="blue"
        />
        <KpiCard
          title="Partner Başvuruları"
          value={totalApplications}
          desc={`${newApplications} yeni bekliyor`}
          icon={<FileIcon size={20} />}
          href="/admin/partners"
          accent={newApplications > 0 ? "amber" : "violet"}
        />
        <KpiCard
          title="Onaylı Partner"
          value={approvedApplications}
          desc={`${rejectedApplications} reddedildi`}
          icon={<SuccessIcon size={20} />}
          href="/admin/partners"
          accent="emerald"
        />
        <KpiCard
          title="Toplam Ürün"
          value={totalProducts}
          desc="Sistemde tanımlı"
          icon={<BoxIcon size={20} />}
          href="/admin/products"
          accent="indigo"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-slate-800 text-sm">
              Son Kayıt Olan Kullanıcılar
            </h2>
            <Link
              href="/admin/users"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              Tümünü Gör <ArrowIcon size={12} />
            </Link>
          </div>
          <ul className="space-y-3">
            {latestUsers.map((user) => {
              const initials =
                (user.name ?? user.email)
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2) || "U";
              return (
                <li key={user._id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    {user.name && (
                      <p className="text-sm font-medium text-slate-800 truncate">
                        {user.name}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 truncate">
                      {user.email}
                    </p>
                  </div>
                  <ClockIcon size={12} className="text-slate-300 shrink-0" />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-slate-800 text-sm">
              Başvuru Dağılımı
            </h2>
            <Link
              href="/admin/partners"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              Tümünü Gör <ArrowIcon size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {[
              {
                label: "Technology",
                count: technologyCount,
                color: "bg-indigo-500",
              },
              { label: "Hosting", count: hostingCount, color: "bg-sky-500" },
              { label: "Bayilik", count: bayilikCount, color: "bg-violet-500" },
            ].map(({ label, count, color }) => {
              const pct =
                totalApplications > 0
                  ? Math.round((count / totalApplications) * 100)
                  : 0;
              return (
                <div key={label}>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span className="font-medium">{label}</span>
                    <span>
                      {count} başvuru ({pct}%)
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${color} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3">
            <Link
              href="/admin/orders"
              className="group flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2.5 transition-colors"
            >
              <ICONS.cart
                size={15}
                className="text-slate-400 group-hover:text-slate-600"
              />
              Siparişler
            </Link>

            <Link
              href="/admin/ssl"
              className="group flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2.5 transition-colors"
            >
              <ICONS.success
                size={15}
                className="text-slate-400 group-hover:text-slate-600"
              />
              SSL Yönetimi
            </Link>
          </div>
        </div>
      </div>

      <PartnerChart data={chartData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PartnerStatusChart data={statusDistribution} />
        <PartnerTypeChart data={typeDistribution} />
      </div>
    </div>
  );
}

type Accent = "blue" | "indigo" | "emerald" | "amber" | "violet";

const accentMap: Record<Accent, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600" },
  indigo: { bg: "bg-indigo-50", icon: "text-indigo-600" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600" },
  violet: { bg: "bg-violet-50", icon: "text-violet-600" },
};

function KpiCard({
  title,
  value,
  desc,
  icon,
  href,
  accent,
}: {
  title: string;
  value: string | number;
  desc: string;
  icon: React.ReactNode;
  href: string;
  accent: Accent;
}) {
  const { bg, icon: iconColor } = accentMap[accent];
  return (
    <Link
      href={href}
      className="group bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-slate-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${iconColor}`}
        >
          {icon}
        </div>
        <ArrowIcon
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
