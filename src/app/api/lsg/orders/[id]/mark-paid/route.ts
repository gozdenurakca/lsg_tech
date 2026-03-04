/*
Bu endpoint, bir SSL order'ını "paid" olarak işaretlemek için kullanılır.
Sadece order status'u "pending" olan order'lar güncellenebilir.
Güncelleme başarılı olursa, güncellenmiş order bilgisi döndürülür.
!!!! Not: Bu endpoint’i ileride WHMCS webhook ile değiştireceğiz. Şimdilik “paid oldu” senaryosunu çalıştırmak için ekledim.
*/

export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { requireApiKey } from "@/lib/auth/api-key"
import SslOrder from "@/models/SslOrder"

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  const order = await SslOrder.findOneAndUpdate(
    { _id: params.id, accountId: auth.principal.accountId },
    { $set: { status: "paid" } },
    { new: true }
  ).lean()

  if (!order) {
    return NextResponse.json({ ok: false, error: "Order not found" }, { status: 404 })
  }

  return NextResponse.json({ ok: true, order })
}