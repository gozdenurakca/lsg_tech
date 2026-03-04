
export const dynamic = "force-dynamic"

import connectDB from "@/lib/db"
import User from "@/models/User"
import UserStatusToggle from "@/components/admin/UserStatusToggle"

interface Props {
  searchParams: {
    role?: string
    search?: string
  }
}

export default async function AdminUsersPage({ searchParams }: Props) {
  await connectDB()

  const roleFilter = searchParams.role
  const searchQuery = searchParams.search

  const query: any = {}

  if (roleFilter && roleFilter !== "all") {
    query.role = roleFilter
  }

  if (searchQuery) {
    query.$or = [
      { email: { $regex: searchQuery, $options: "i" } },
      { firstName: { $regex: searchQuery, $options: "i" } },
      { lastName: { $regex: searchQuery, $options: "i" } },
    ]
  }

  const users = await User.find(query)
    .sort({ createdAt: -1 })
    .lean()

  const totalUsers = await User.countDocuments()
  const adminCount = await User.countDocuments({ role: "admin" })
  const customerCount = await User.countDocuments({ role: "customer" })

  return (
    <div className="space-y-10">

      {/* HEADER + KPI BLOCK */}
<div className="bg-white border rounded-2xl shadow-sm p-8 space-y-8">

  {/* Title Section */}
  <div className="flex items-start justify-between flex-wrap gap-4">
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Kullanıcı Yönetimi
      </h1>
      <p className="text-slate-500 mt-2 text-sm">
        Sistemdeki tüm kullanıcıları yönetin, rollerini ve hesap durumlarını kontrol edin.
      </p>
    </div>

    <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-medium hover:bg-black transition">
      + Yeni Kullanıcı
    </button>
  </div>

  {/* KPI Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Kpi title="Toplam Kullanıcı" value={totalUsers} />
    <Kpi title="Admin" value={adminCount} />
    <Kpi title="Customer" value={customerCount} />
  </div>

</div>


      {/* FILTER BAR */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 flex flex-wrap items-center justify-between gap-4">

        <form className="flex flex-wrap gap-4 items-center">
          <input
            name="search"
            placeholder="İsim veya email ara..."
            className="flex-1 min-w-[280px] border rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"

          />

          <select
            name="role"
            className="border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option value="all">Tüm Roller</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>

          <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm hover:bg-black transition">
            Filtrele
          </button>
        </form>
      </div>

      {/* USERS TABLE */}
<div className="bg-white border rounded-2xl shadow-sm overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 text-left">Kullanıcı</th>
                <th className="px-6 py-4 text-left">Rol</th>
                <th className="px-6 py-4 text-left">Durum</th>
                <th className="px-6 py-4 text-left">Kayıt Tarihi</th>
                <th className="px-6 py-4 text-left">İşlem</th>

              </tr>
            </thead>

            <tbody className="divide-y">
              {users.map((user: any) => (
                <tr key={user._id} className="hover:bg-slate-50 transition">
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                        {user.firstName?.[0] ?? ""}
{user.lastName?.[0] ?? ""}

                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-xs text-slate-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <RoleBadge role={user.role} />
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="px-6 py-4 text-slate-500">
                    {new Date(user.createdAt).toLocaleDateString("tr-TR")}
                  </td>

                  <td className="px-6 py-4">
  <UserStatusToggle
    userId={user._id.toString()}
    status={user.status}
    role={user.role}
  />
</td>


                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  )
}

function Kpi({ title, value }: any) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6">
      <div className="text-xs uppercase text-slate-500">{title}</div>
      <div className="text-3xl font-bold text-slate-900 mt-2">
        {value}
      </div>
    </div>
  )
}

function RoleBadge({ role }: { role: string }) {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${
        role === "admin"
          ? "bg-purple-100 text-purple-600"
          : "bg-blue-100 text-blue-600"
      }`}
    >
      {role}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${
        status === "active"
          ? "bg-green-100 text-green-600"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status === "active" ? "Aktif" : "Askıya Alındı"}
    </span>
  )
}

