import { NextResponse } from "next/server"
import connectDB from "@/lib/db"
import PartnerApplication from "@/models/PartnerApplication"

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const {
      companyName,
      email,
      website,
      monthlyUsers,
      message,
    } = body

    if (!companyName || !email || !message) {
      return NextResponse.json(
        { error: "Eksik alanlar var" },
        { status: 400 }
      )
    }

    const application = await PartnerApplication.create({
      type: "technology",
      companyName,
      email,
      website,
      monthlyUsers,
      message,
      status: "new",
    })

    return NextResponse.json(
      { success: true, id: application._id },
      { status: 201 }
    )

  } catch (error) {
    console.error("Partner application error:", error)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
