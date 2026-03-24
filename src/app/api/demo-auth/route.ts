import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  const secret = process.env.DEMO_SECRET;

  if (!secret || password !== secret) {
    return NextResponse.json({ error: "Hatalı şifre" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  // Cookie'yi 7 gün geçerli olarak set et
  response.cookies.set("demo_access", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: "/",
  });

  return response;
}
