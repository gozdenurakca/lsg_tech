import { NextResponse } from "next/server";
import Ticket from "@/models/Ticket";
import connectDB from "@/lib/db";

export async function GET() {
  await connectDB();

  const tickets = await Ticket.find().sort({ createdAt: -1 });

  return NextResponse.json(tickets);
}