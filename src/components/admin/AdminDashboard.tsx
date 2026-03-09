import connectDB from "@/lib/db";
import User from "@/models/User";
import PartnerApplication from "@/models/PartnerApplication";
import Product from "@/models/Product";

import PartnerChart from "./charts/PartnerChart";
import PartnerStatusChart from "./charts/PartnerStatusChart";
import PartnerTypeChart from "./charts/PartnerTypeChart";

export default async function AdminDashboard() {
  await connectDB();

  const totalUsers = await User.countDocuments();
  const latestUsers = await User.find().sort({ createdAt: -1 }).limit(5).lean();

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

  const recentApplications = await PartnerApplication.find({
    createdAt: { $gte: last30Days },
  })
    .select("createdAt")
    .lean();

  const chartMap: Record<string, number> = {};

  recentApplications.forEach((app: any) => {
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
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-xl flex items-center justify-between">
          <div className="font-medium">
            ⚠ {newApplications} yeni partner başvurusu incelenmeyi bekliyor.
          </div>
          <a href="/admin/partners" className="text-sm font-semibold underline">
            İncele →
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          title="Toplam Kullanıcı"
          value={totalUsers}
          desc="Sistemde kayıtlı kullanıcı"
          color="blue"
        />
        <Card
          title="Partner Başvuruları"
          value={totalApplications}
          desc={`${newApplications} yeni başvuru`}
          color="purple"
        />
        <Card
          title="Onaylı Partner"
          value={approvedApplications}
          desc={`${rejectedApplications} reddedildi`}
          color="green"
        />
        <Card
          title="Toplam Ürün"
          value={totalProducts}
          desc="Sistemde tanımlı ürün"
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-semibold text-slate-800 mb-4">
            Son Kayıt Olan Kullanıcılar
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {latestUsers.map((user: any) => (
              <li key={user._id}>{user.email}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="font-semibold text-slate-800 mb-4">
            Başvuru Dağılımı
          </h2>
          <div className="space-y-2 text-sm text-slate-600">
            <div>Technology: {technologyCount}</div>
            <div>Hosting: {hostingCount}</div>
            <div>Bayilik: {bayilikCount}</div>
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

function Card({ title, value, desc, color }: any) {
  const colors: any = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 relative overflow-hidden">
      <div
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors[color]} opacity-10 rounded-bl-3xl`}
      />
      <h3 className="text-sm text-slate-500">{title}</h3>
      <div className="text-3xl font-bold text-slate-800 mt-2">{value}</div>
      <p className="text-xs text-slate-500 mt-2">{desc}</p>
    </div>
  );
}
