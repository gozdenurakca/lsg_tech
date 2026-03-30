"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isDashboard =
    pathname.startsWith("/panel") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/domain/results");

  const isDomain = pathname.startsWith("/domain");
  const isDemoPage = pathname.startsWith("/demo-giris");
  const isCheckout = pathname.startsWith("/checkout");

  // Admin veya Demo sayfalarında ana site NavBar gizlenir (özel layoutları vardır).
  const hideNavbar = pathname.startsWith("/admin") || isDemoPage;

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!isDashboard && !isDemoPage && (
        <Footer hideCTA={isCheckout || isDomain} />
      )}
    </>
  );
}
