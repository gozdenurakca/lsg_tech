
/*
Bu endpoint sadece order status’u "paid" ise çalışacak.
Provisioning işlemi başlatılacak ve order status’u "provisioning" olarak güncellenecek.
Provisioning işlemi başlatıldıktan sonra, Digicert tarafından dönen providerOrderId order’a kaydedilecek.
*/

export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { requireApiKey } from "@/lib/auth/api-key"
import { startProvisioning } from "@/lib/services/provisioning"

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  try {
    const result = await startProvisioning(params.id, auth.principal.accountId)
    return NextResponse.json({ ok: true, ...result })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Provisioning failed" },
      { status: 400 }
    )
  }
}
