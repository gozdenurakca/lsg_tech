import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import connectDB from "@/lib/db"

import User from "@/models/User"
import Product from "@/models/Product"
import PartnerApplication from "@/models/PartnerApplication"

import AdminDashboard from "@/components/admin/AdminDashboard"

export default async function AdminPage() {

  // 🔐 SESSION CONTROL
  const session = await getServerSession(authOptions)

  if (!session) redirect("/giris")
  if (session.user.role !== "admin") redirect("/panel")

  // 🗄 DATABASE CONNECT
  await connectDB()

  // ================= USERS =================
  const totalUsers = await User.countDocuments()
  const latestUsers = await User.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .lean()

  // ================= PARTNER APPLICATIONS =================
  const totalApplications = await PartnerApplication.countDocuments()
  const newApplications = await PartnerApplication.countDocuments({ status: "new" })
  const approvedApplications = await PartnerApplication.countDocuments({ status: "approved" })
  const rejectedApplications = await PartnerApplication.countDocuments({ status: "rejected" })

  const technologyCount = await PartnerApplication.countDocuments({ type: "technology" })
  const hostingCount = await PartnerApplication.countDocuments({ type: "hosting" })
  const bayilikCount = await PartnerApplication.countDocuments({ type: "bayilik" })

  // ================= PRODUCTS =================
  const totalProducts = await Product.countDocuments()

  // ================= LAST 30 DAYS CHART =================
  const last30Days = new Date()
  last30Days.setDate(last30Days.getDate() - 30)

  const applicationsLast30 = await PartnerApplication.find({
    createdAt: { $gte: last30Days },
  }).lean()

  const chartMap: Record<string, number> = {}

  applicationsLast30.forEach((app: any) => {
    const date = new Date(app.createdAt)
      .toISOString()
      .split("T")[0]

    chartMap[date] = (chartMap[date] || 0) + 1
  })

  const chartData = Object.entries(chartMap).map(([date, count]) => ({
    date,
    count,
  }))

  // ================= RETURN =================
  return (
    <AdminDashboard
      totalUsers={totalUsers}
      totalApplications={totalApplications}
      newApplications={newApplications}
      approvedApplications={approvedApplications}
      rejectedApplications={rejectedApplications}
      totalProducts={totalProducts}
      latestUsers={latestUsers}
      technologyCount={technologyCount}
      hostingCount={hostingCount}
      bayilikCount={bayilikCount}
      chartData={chartData}
    />
  )
}
