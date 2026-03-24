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

// next-auth koruması gereken path'ler (mevcut mantık korunuyor)
const AUTH_PATHS = ["/panel", "/admin", "/sepet/odeme"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // --- DEMO ŞİFRE KONTROLÜ ---
  // Demo modu aktifse (env var set edilmişse) tüm sayfaları koru
  const demoSecret = process.env.DEMO_SECRET;

  if (demoSecret && !DEMO_EXEMPT.some((p) => pathname.startsWith(p))) {
    const demoCookie = request.cookies.get("demo_access");
    if (demoCookie?.value !== demoSecret) {
      const loginUrl = new URL("/demo-giris", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // --- NEXT-AUTH KONTROLÜ (panel / admin) ---
  if (AUTH_PATHS.some((p) => pathname.startsWith(p))) {
    const token = await getToken({ req: request });

    if (!token) {
      if (pathname.startsWith("/sepet/odeme")) {
        const loginUrl = new URL("/giris", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
      }
      // panel veya admin için yetkisiz erişim
      return NextResponse.redirect(new URL("/giris", request.url));
    }

    // Admin route koruma
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/panel", request.url));
    }

    // Customer route koruma
    if (pathname.startsWith("/panel") && token?.role !== "customer") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
