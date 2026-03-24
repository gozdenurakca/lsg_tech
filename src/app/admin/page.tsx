import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

import AdminDashboard from "@/components/admin/AdminDashboard"

export default async function AdminPage() {

  // 🔐 SESSION CONTROL
  const session = await getServerSession(authOptions)

  if (!session) redirect("/giris")
  if (session.user.role !== "admin") redirect("/panel")

  return <AdminDashboard />
}
