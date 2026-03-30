import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import connectDB from "@/lib/db";
import Order from "@/models/Order";

import CustomerSidebar from "@/components/customer/CustomerSidebar";

export default async function PanelLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Auth kontrolü
  if (!session) redirect("/giris");
  if (session.user.role !== "customer") redirect("/admin");

  await connectDB();

  const userId = session.user.id;

  const openOrdersCount = await Order.countDocuments({
    user: userId,
    status: "pending",
  });

  return (
    <div className="flex min-h-screen bg-[#f1f5f9] pt-20">
      <CustomerSidebar
        openOrders={openOrdersCount}
        userName={session.user.name ?? "Kullanıcı"}
        userEmail={session.user.email ?? ""}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 md:p-8 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
