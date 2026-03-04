export const dynamic = "force-dynamic"

import connectDB from "@/lib/db"
import User from "@/models/User"
import Order from "@/models/Order"
import SupportTicket from "@/models/SupportTicket"
import { notFound } from "next/navigation"
import UserStatusToggle from "@/components/admin/UserStatusToggle"

interface Props {
  params: {
    id: string
  }
}

export default async function UserDetailPage({ params }: Props) {
  await connectDB()

  const user = await User.findById(params.id).lean()

  if (!user) notFound()

  const ordersCount = await Order.countDocuments({ user: user._id })
  const ticketsCount = await SupportTicket.countDocuments({
    user: user._id,
  })

  return (
    <div className="p-8 space-y-8">

      {/* HEADER */}
      <div className="bg-white rounded-2xl shadow-sm border p-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-slate-500 mt-2">{user.email}</p>

          <div className="flex gap-4 mt-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-slate-100">
              Rol: {user.role}
            </span>

            <span
              className={`px-3 py-1 rounded-full ${
                user.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status === "active"
                ? "Aktif"
                : "Askıya Alındı"}
            </span>
          </div>
        </div>

        <UserStatusToggle
          userId={user._id.toString()}
          status={user.status}
          role={user.role}
        />
      </div>

      {/* İSTATİSTİKLER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-sm text-slate-500">
            Toplam Sipariş
          </div>
          <div className="text-2xl font-bold mt-2">
            {ordersCount}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-sm text-slate-500">
            Açık Destek Talebi
          </div>
          <div className="text-2xl font-bold mt-2">
            {ticketsCount}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <div className="text-sm text-slate-500">
            Kayıt Tarihi
          </div>
          <div className="text-lg font-semibold mt-2">
            {new Date(user.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* DETAY BİLGİLER */}
      <div className="bg-white rounded-xl border shadow-sm p-8">
        <h2 className="text-lg font-semibold mb-6">
          Kullanıcı Bilgileri
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <div className="text-slate-500">Telefon</div>
            <div className="mt-1 font-medium">
              {user.phone}
            </div>
          </div>

          <div>
            <div className="text-slate-500">Firma</div>
            <div className="mt-1 font-medium">
              {user.companyName || "-"}
            </div>
          </div>

          <div>
            <div className="text-slate-500">Rol</div>
            <div className="mt-1 font-medium">
              {user.role}
            </div>
          </div>

          <div>
            <div className="text-slate-500">Durum</div>
            <div className="mt-1 font-medium">
              {user.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
