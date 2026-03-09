import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Ticket from "@/models/Ticket";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const ticket = await Ticket.create(body);

  return NextResponse.json({
    success: true,
    ticketId: ticket._id,
  });
}