/*
ödeme tamamlanmış bir SSL siparişi için CSR bilgisini alıp kaydeden ve ardından sertifika provisioning sürecini otomatik başlatan bir Next.js API route’udur.

  Müşteri ödeme sonrası CSR'ını bu endpoint'e gönderir.
  Order "paid" durumunda olmalı ve CSR henüz girilmemiş olmalı.
  CSR kaydedildikten sonra provisioning otomatik başlatılır.
*/
export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import { requireApiKey } from "@/lib/auth/api-key"
import SslOrder from "@/models/SslOrder"
import { startProvisioning } from "@/lib/services/provisioning"


// Basit CSR formabunut kontrolü — BEGIN/END satırları var mı?
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
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
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
    accountId: auth.principal.accountId,
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

  // CSR'ı kaydet
  order.csr = csr.trim()
  await order.save()

  // Provisioning'i hemen başlat
  try {
    const result = await startProvisioning(params.id, auth.principal.accountId)
    return NextResponse.json({
      ok: true,
      message: "CSR kaydedildi, sertifika başvurusu başlatıldı.",
      providerOrderId: result.providerOrderId,
      status: "provisioning",
    })
  } catch (e: any) {
    // Provisioning hata verse bile CSR kaydedildi, manuel retry mümkün
    return NextResponse.json({
      ok: true,
      warning: "CSR kaydedildi ancak provisioning başlatılamadı: " + e?.message,
      status: "paid",
    })
  }
}
