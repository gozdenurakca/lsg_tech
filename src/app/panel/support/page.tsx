import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import connectDB from "@/lib/db";
import Ticket from "@/models/Ticket";
import SupportPageClient from "./SupportPageClient";

export default async function SupportPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/giris");

  await connectDB();

  const rawTickets = await Ticket.find({ email: session.user.email })
    .sort({ createdAt: -1 })
    .lean();

  const tickets = JSON.parse(JSON.stringify(rawTickets));

  return (
    <SupportPageClient
      tickets={tickets}
      userEmail={session.user.email ?? ""}
      userName={session.user.name ?? ""}
    />
  );
}
