import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl

    // Admin route koruma
    if (pathname.startsWith("/admin")) {
      if (token?.role !== "admin") {
        return NextResponse.redirect(new URL("/panel", req.url))
      }
    }

    // Customer route koruma
    if (pathname.startsWith("/panel")) {
      if (token?.role !== "customer") {
        return NextResponse.redirect(new URL("/admin", req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/panel/:path*", "/admin/:path*"],
}
