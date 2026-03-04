export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { requireApiKey } from "@/lib/auth/api-key"
import SslOrder from "@/models/SslOrder"

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  const order = await SslOrder.findOne({
    _id: params.id,
    accountId: auth.principal.accountId,
  }).lean()

  if (!order) {
    return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 })
  }

  return NextResponse.json({ ok: true, order })
}