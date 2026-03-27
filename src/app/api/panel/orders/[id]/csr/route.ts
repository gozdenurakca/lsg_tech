export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import connectDB from "@/lib/db"
import SslOrder from "@/models/SslOrder"
import { startProvisioning } from "@/lib/services/provisioning"

function isValidCsrFormat(csr: string): boolean {
  const trimmed = csr.trim()
  return (
    trimmed.startsWith("-----BEGIN CERTIFICATE REQUEST-----") &&
    trimmed.endsWith("-----END CERTIFICATE REQUEST-----")
  )
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ ok: false, error: "Oturum açmanız gerekiyor" }, { status: 401 })
  }

  await connectDB()

  const body = await req.json()
  const { csr } = body

  if (!csr || typeof csr !== "string" || csr.trim().length === 0) {
    return NextResponse.json(
      { ok: false, error: "CSR alanı zorunludur" },
      { status: 400 }
    )
  }

  if (!isValidCsrFormat(csr)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Geçersiz CSR formatı. '-----BEGIN CERTIFICATE REQUEST-----' ile başlayıp '-----END CERTIFICATE REQUEST-----' ile bitmeli.",
      },
      { status: 400 }
    )
  }

  const order = await SslOrder.findOne({
    _id: params.id,
    accountId: session.user.id,
  })

  if (!order) {
    return NextResponse.json({ ok: false, error: "Sipariş bulunamadı" }, { status: 404 })
  }

  if (order.status !== "paid") {
    return NextResponse.json(
      {
        ok: false,
        error: `CSR yalnızca ödeme yapılmış siparişlere gönderilebilir. Mevcut durum: ${order.status}`,
      },
      { status: 400 }
    )
  }

  if (order.csr) {
    return NextResponse.json(
      { ok: false, error: "Bu sipariş için CSR zaten girilmiş." },
      { status: 400 }
    )
  }

  order.csr = csr.trim()
  await order.save()

  try {
    const result = await startProvisioning(params.id, session.user.id)
    return NextResponse.json({
      ok: true,
      message: "CSR kaydedildi, sertifika başvurusu başlatıldı.",
      providerOrderId: result.providerOrderId,
      status: "provisioning",
    })
  } catch (e: any) {
    return NextResponse.json({
      ok: true,
      warning: "CSR kaydedildi fakat provisioning başlatılamadı: " + e?.message,
      status: "paid",
    })
  }
}
