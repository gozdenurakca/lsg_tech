import { NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/db"
import PartnerApplication from "@/models/PartnerApplication"
import { sendPartnerApprovedMail } from "@/lib/mail"
import { sendPartnerRejectedMail } from "@/lib/mail"

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()

    const { status } = await req.json()

    if (!["new", "reviewing", "approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { error: "Geçersiz status" },
        { status: 400 }
      )
    }

    const updated = await PartnerApplication.findByIdAndUpdate(
      params.id,
      { status },
      { returnDocument: "after" } // new: true yerine modern kullanım
    )

    if (!updated) {
      return NextResponse.json(
        { error: "Başvuru bulunamadı" },
        { status: 404 }
      )
    }

    if (status === "approved") {
  await sendPartnerApprovedMail(
    updated.email,
    updated.companyName
  )
}

if (status === "rejected") {
  await sendPartnerRejectedMail(
    updated.email,
    updated.companyName
  )
}


    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Status update hatası:", error)

    return NextResponse.json(
      { error: "Güncelleme hatası" },
      { status: 500 }
    )
  }
}
