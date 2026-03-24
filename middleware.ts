import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Demo korumasından muaf path'ler
const DEMO_EXEMPT = [
  "/demo-giris",
  "/api/demo-auth",
  "/api/auth",
  "/_next",
  "/favicon.ico",
  "/images",
];

// next-auth koruması gereken path'ler
const AUTH_PATHS = ["/panel", "/admin", "/sepet/odeme"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔥 1. API'leri tamamen bypass et (EN KRİTİK)
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 🔥 2. DEMO GATE
  const demoSecret = process.env.DEMO_SECRET;

  if (demoSecret && !DEMO_EXEMPT.some((p) => pathname.startsWith(p))) {
    const demoCookie = request.cookies.get("demo_access");

    if (demoCookie?.value !== demoSecret) {
      const loginUrl = new URL("/demo-giris", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 🔐 3. NEXT-AUTH PROTECTION
  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    const token = await getToken({ req: request });

    if (!token) {
      const loginUrl = new URL("/giris", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Admin kontrolü
    if (pathname.startsWith("/admin") && token.role !== "admin") {
      return NextResponse.redirect(new URL("/panel", request.url));
    }

    // Customer kontrolü
    if (pathname.startsWith("/panel") && token.role !== "customer") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

// 🔥 matcher (API hariç her şey)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};