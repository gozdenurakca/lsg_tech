export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { requireApiKey } from "@/lib/auth/api-key"
import SslOrder from "@/models/SslOrder"

export async function POST(req: NextRequest) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.error },
      { status: auth.status }
    )
  }

  await connectDB()

  const body = await req.json()
  const { productSlug, domain, period = 1, csr } = body

  if (!productSlug || !domain) {
    return NextResponse.json(
      { ok: false, error: "productSlug ve domain zorunlu" },
      { status: 400 }
    )
  }

  const order = await SslOrder.create({
    accountId: auth.principal.accountId,
    productSlug,
    domain,
    period,
    csr,
    status: "created",
    meta: body,
  })

  return NextResponse.json(
    {
      ok: true,
      id: order._id,
      status: order.status,
    },
    { status: 201 }
  )
}

export async function GET(req: NextRequest) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  const orders = await SslOrder.find({ accountId: auth.principal.accountId })
    .sort({ createdAt: -1 })
    .limit(50)
    .lean()

  return NextResponse.json({ ok: true, items: orders })
}