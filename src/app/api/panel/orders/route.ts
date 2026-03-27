export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import connectDB from "@/lib/db"
import SslOrder from "@/models/SslOrder"

// Panel için — oturum açmış müşterinin SSL siparişlerini listeler
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ ok: false, error: "Oturum açmanız gerekiyor" }, { status: 401 })
  }

  await connectDB()

  const orders = await SslOrder.find({ accountId: session.user.id })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean()

  return NextResponse.json({ ok: true, items: orders })
}
