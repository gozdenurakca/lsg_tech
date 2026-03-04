export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import { requireApiKey } from "@/lib/auth/api-key"
import connectDB from "@/lib/db"

export async function GET(req: NextRequest) {
  const auth = await requireApiKey(req)
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.error },
      { status: auth.status }
    )
  }

  await connectDB()

  return NextResponse.json({
    ok: true,
    service: "lsg-api",
    accountId: auth.principal.accountId,
  })
}