import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { requireApiKey } from "@/lib/auth/api-key"
import SslOrder from "@/models/SslOrder"

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB()

  const isInternal =
    req.headers.get("x-internal-secret") === process.env.INTERNAL_SECRET

  let accountId = null

  if (!isInternal) {
    const auth = await requireApiKey(req)
    if (!auth.ok) {
      return NextResponse.json(
        { ok: false, error: auth.error },
        { status: auth.status }
      )
    }
    accountId = auth.principal.accountId
  }

  const query: any = { _id: params.id }

  if (!isInternal) {
    query.accountId = accountId
  }

  const order = await SslOrder.findOneAndUpdate(
    query,
    { $set: { status: "paid" } },
    { new: true }
  ).lean()

  if (!order) {
    return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 })
  }

  return NextResponse.json({ ok: true, order })
}