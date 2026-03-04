import crypto from "crypto"
import { NextRequest } from "next/server"
import connectDB from "@/lib/db"
import ApiKey from "@/models/ApiKey"

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex")
}

function getClientIp(req: NextRequest) {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) return xff.split(",")[0].trim()
  return req.headers.get("x-real-ip") || "unknown"
}

export async function requireApiKey(req: NextRequest) {
  const auth = req.headers.get("authorization") || ""
  const raw =
    auth.startsWith("Bearer ") ? auth.slice(7).trim() : req.headers.get("x-api-key")?.trim()

  if (!raw) {
    return { ok: false as const, status: 401, error: "Missing API key" }
  }

  const keyHash = sha256(raw)

  await connectDB()
  const apiKey = await ApiKey.findOne({ keyHash }).lean()

  if (!apiKey || !apiKey.isActive) {
    return { ok: false as const, status: 401, error: "Invalid API key" }
  }

  const ip = getClientIp(req)
  if (apiKey.allowedIps?.length) {
    if (!apiKey.allowedIps.includes(ip)) {
      return { ok: false as const, status: 403, error: "IP not allowed" }
    }
  }

  await ApiKey.updateOne({ _id: apiKey._id }, { $set: { lastUsedAt: new Date() } })

  return {
    ok: true as const,
    principal: { accountId: apiKey.accountId, apiKeyId: String(apiKey._id) },
  }
}