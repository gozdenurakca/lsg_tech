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

  const isDemoPage = pathname.startsWith("/demo-giris");

  return (
    <>
      {!isDashboard && !isDemoPage && <Navbar />}
      {children}
      {!isDashboard && !isDemoPage && <Footer />}
    </>
  );
}
