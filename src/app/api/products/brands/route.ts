import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import Product from "@/models/Product"

export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")
    const validation = searchParams.get("validation")
    const type = searchParams.get("type")
    const tier = searchParams.get("tier")

    const match: any = {}
    if (category) match.category = category
    if (validation) match.validation = validation
    if (type) match.productType = type
    if (tier) match.tier = tier

    const brands = await Product.distinct("brand", match)

    return NextResponse.json({
      success: true,
      data: brands.filter(Boolean).sort(),
    })
  } catch (error) {
    console.error("Brands API error:", error)
    return NextResponse.json(
      { success: false, error: "Brand listesi alınamadı" },
      { status: 500 }
    )
  }
}