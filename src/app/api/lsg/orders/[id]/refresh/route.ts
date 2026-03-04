/*
Refresh Endpoint : “Bu order’ın DigiCert tarafındaki durumunu kontrol et ve bizim DB’de güncelle.”
*/
export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { requireApiKey } from "@/lib/auth/api-key"
import { refreshProvisioning } from "@/lib/services/provisioning"

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  try {
    const result = await refreshProvisioning(params.id, auth.principal.accountId)
    return NextResponse.json({ ok: true, ...result })
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Refresh failed" },
      { status: 400 }
    )
  }
}