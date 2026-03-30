import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import mongoose from "mongoose";

// Basit schema — ayrı model dosyası açmadan inline tanımlıyoruz
const schema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    email:       { type: String, required: true },
    company:     { type: String, required: true },
    phone:       String,
    productName: String,
  },
  { timestamps: true }
);

const DocRequest =
  mongoose.models.TeknikDokumanRequest ||
  mongoose.model("TeknikDokumanRequest", schema);

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    await DocRequest.create(body);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}
