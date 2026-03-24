import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

import connectDB from "@/lib/db"
import PartnerApplication from "@/models/PartnerApplication"
import User from "@/models/User"
import Order from "@/models/Order"

import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminTopbar from "@/components/admin/AdminTopbar"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  // 🔐 Auth kontrolü
  if (!session) redirect("/giris")
  if (session.user.role !== "admin") redirect("/panel")

  await connectDB()

  const newPartnerCount = await PartnerApplication.countDocuments({
    status: "new",
  })

  const totalUsers = await User.countDocuments()

  const pendingOrders = await Order.countDocuments({
    status: "pending",
  })

  return (
    <div className="flex min-h-screen bg-[#f1f5f9]">
      <AdminSidebar
        newPartnerCount={newPartnerCount}
        totalUsers={totalUsers}
        pendingOrders={pendingOrders}
        userName={session.user.name ?? "Admin"}
        userEmail={session.user.email ?? ""}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <AdminTopbar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
