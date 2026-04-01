import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/db";
import User from "@/models/User";

export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ ok: false, error: "Yetkisiz erişim" }, { status: 401 });
    }

    await connectDB();
    const user = await User.findById(session.user.id).select("-password").lean();
    
    if (!user) {
      return NextResponse.json({ ok: false, error: "Kullanıcı bulunamadı" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ ok: false, error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ ok: false, error: "Yetkisiz erişim" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();

    const updatedData = {
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      companyName: body.companyName,
      address: {
        line1: body.address?.line1,
        city: body.address?.city,
        state: body.address?.state,
        zip: body.address?.zip,
        country: body.address?.country || "Türkiye",
      },
      billing: {
        type: body.billing?.type || "bireysel",
        taxNumber: body.billing?.taxNumber,
        taxOffice: body.billing?.taxOffice,
      },
    };

    const user = await User.findByIdAndUpdate(session.user.id, updatedData, { new: true }).select("-password");
    if (!user) {
      return NextResponse.json({ ok: false, error: "Kullanıcı bulunamadı" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json({ ok: false, error: "Sunucu hatası" }, { status: 500 });
  }
}
