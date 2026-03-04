export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Product from "@/models/Product"
import { requireApiKey } from "@/lib/auth/api-key"

type Ctx = { params: { slug: string } }

export async function GET(req: NextRequest, { params }: Ctx) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  const product = await Product.findOne({ slug: params.slug, inStock: true })
    .select("name slug category validation productType brand price issuanceTime warranty features featured createdAt")
    .lean()

  if (!product) {
    return NextResponse.json(
      { ok: false, error: { code: "NOT_FOUND", message: "Product not found" } },
      { status: 404 }
    )
  }

  return NextResponse.json({ ok: true, item: product })
}