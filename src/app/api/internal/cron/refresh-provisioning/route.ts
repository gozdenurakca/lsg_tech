export const dynamic = "force-dynamic"

import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import SslOrder from "@/models/SslOrder"
import { refreshProvisioning } from "@/lib/services/provisioning"

function requireCronSecret(req: NextRequest) {
  const secret = req.headers.get("x-cron-secret") || ""
  if (!process.env.CRON_SECRET) {
    return { ok: false as const, status: 500, error: "CRON_SECRET is not set" }
  }
  if (secret !== process.env.CRON_SECRET) {
    return { ok: false as const, status: 401, error: "Unauthorized" }
  }
  return { ok: true as const }
}

export async function POST(req: NextRequest) {
  const auth = requireCronSecret(req)
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status })
  }

  await connectDB()

  // provisioning olanları al (limit koyduk ki patlamasın)
  const orders = await SslOrder.find({ status: "provisioning" })
    .select("_id accountId digicertOrderId status updatedAt")
    .sort({ updatedAt: 1 })
    .limit(50)
    .lean()

  const results: Array<{ id: string; ok: boolean; status?: string; error?: string }> = []

  for (const o of orders) {
    try {
      const r = await refreshProvisioning(String(o._id), o.accountId)
      results.push({ id: String(o._id), ok: true, status: r.status })
    } catch (e: any) {
      results.push({ id: String(o._id), ok: false, error: e?.message || "refresh failed" })
    }
  }

  const summary = {
    scanned: orders.length,
    updatedToIssued: results.filter((x) => x.ok && x.status === "issued").length,
    stillProvisioning: results.filter((x) => x.ok && x.status === "provisioning").length,
    failed: results.filter((x) => !x.ok).length,
  }

  return NextResponse.json({ ok: true, summary, results })
}