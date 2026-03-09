import { NextResponse } from "next/server";
import TicketMessage from "@/models/TicketMessage";
import connectDB from "@/lib/db";

export async function POST(req: Request) {
  await connectDB();

  const { ticketId, sender, message } = await req.json();

  await TicketMessage.create({
    ticketId,
    sender,
    message,
  });

  return NextResponse.json({ success: true });
}