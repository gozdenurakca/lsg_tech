import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import connectDB from "@/lib/db"
import User from "@/models/User"

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)

    // Yetki kontrolü
    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { error: "Yetkisiz işlem" },
        { status: 403 }
      )
    }

    await connectDB()

    const user = await User.findById(params.id)

    if (!user) {
      return NextResponse.json(
        { error: "Kullanıcı bulunamadı" },
        { status: 404 }
      )
    }

    // Admin askıya alınamaz
    if (user.role === "admin") {
      return NextResponse.json(
        { error: "Admin askıya alınamaz" },
        { status: 400 }
      )
    }

    // Eğer status undefined ise active kabul et
    const currentStatus = user.status || "active"

    // Toggle
    user.status =
      currentStatus === "active" ? "suspended" : "active"

    await user.save()

    return NextResponse.json({
      success: true,
      newStatus: user.status,
    })
  } catch (error) {
    console.error("User status update error:", error)
    return NextResponse.json(
      { error: "Sunucu hatası" },
      { status: 500 }
    )
  }
}
