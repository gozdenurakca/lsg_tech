import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    username: process.env.RTR_USERNAME || null,
    hasApiKey: !!process.env.RTR_API_KEY,
    baseUrl: process.env.RTR_BASE_URL || null,
  });
}