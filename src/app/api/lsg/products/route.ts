export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Product from "@/models/Product"
import { requireApiKey } from "@/lib/auth/api-key"

export async function GET(req: NextRequest) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  const { searchParams } = new URL(req.url)

  const brand = searchParams.get("brand")
  const validation = searchParams.get("validation")
  const category = searchParams.get("category")
  const featured = searchParams.get("featured")

  const query: any = { inStock: true }

  if (brand) query.brand = brand
  if (validation) query.validation = validation
  if (category) query.category = category
  if (featured) query.featured = featured === "true"

  const products = await Product.find(query)
    .select("name slug category validation productType brand price issuanceTime warranty features featured createdAt")
    .sort({ createdAt: -1 })
    .lean()

  return NextResponse.json({ ok: true, items: products })
}