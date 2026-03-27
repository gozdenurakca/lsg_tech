import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const merchant_id = process.env.PAYTR_MERCHANT_ID!.trim();
    const merchant_key = process.env.PAYTR_MERCHANT_KEY!.trim();
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT!.trim();

    // Vercel'de gerçek IP'yi al
    const forwarded = req.headers.get("x-forwarded-for");
    const user_ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const merchant_oid = body.orderId;
    const email = body.email;
    const payment_amount = String(body.amount); // kuruş cinsinden (örn: 1000 = 10₺)
    const user_name = body.userName || "Müşteri";
    const user_address = body.userAddress || "Türkiye";
    const user_phone = body.userPhone || "05000000000";

    const site_url = process.env.NEXT_PUBLIC_SITE_URL || "https://trlsg.com";
    const merchant_ok_url = `${site_url}/odeme/basarili`;
    const merchant_fail_url = `${site_url}/odeme/basarisiz`;

    const basket = JSON.stringify([
      ["SSL Sertifikası", "10.00", 1],
    ]);

    const no_installment = "0";
    const max_installment = "0";
    const currency = "TL";
    const test_mode = "1"; // Canlıya geçince "0" yapın
    const non_3d = "0";

    const hash_str =
      merchant_id +
      user_ip +
      merchant_oid +
      email +
      payment_amount +
      basket +
      no_installment +
      max_installment +
      currency +
      test_mode +
      non_3d;

    const paytr_token = crypto
      .createHmac("sha256", merchant_key)
      .update(hash_str + merchant_salt)
      .digest("base64");

    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        merchant_id,
        user_ip,
        merchant_oid,
        email,
        payment_amount,
        paytr_token,
        user_basket: basket,
        user_name,
        user_address,
        user_phone,
        merchant_ok_url,
        merchant_fail_url,
        debug_on: "1",
        no_installment,
        max_installment,
        currency,
        test_mode,
        non_3d,
        lang: "tr",
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Token error" }, { status: 500 });
  }
}