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
    let user_ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    // IPv6 loopback'i IPv4'e normalize et
    if (user_ip === "::1") user_ip = "127.0.0.1";

    const merchant_oid = body.orderId;
    const email = body.email;
    const payment_amount = String(body.amount); 
    // ileride şunu koyacağız buraya const payment_amount = body.amount.toString();
    const user_name = body.userName || "Müşteri";
    const user_address = body.userAddress || "Türkiye";
    const user_phone = body.userPhone || "05000000000";

    const site_url = process.env.NEXT_PUBLIC_SITE_URL || "https://trlsg.com";
    const merchant_ok_url = `${site_url}/odeme/basarili`;
    const merchant_fail_url = `${site_url}/odeme/basarisiz`;

    // PayTR user_basket'i base64 encode ister (ASCII karakter kullan)
    const basket = Buffer.from(
      JSON.stringify([["SSL Sertifikasi", "10.00", 1]])
    ).toString("base64");

    const no_installment = "0";
    const max_installment = "0";
    const currency = "TL";
    const test_mode = "1"; // Canlıya geçince "0" yapın
    const non_3d = "0";

    // non_3d hash'e DAHİL DEĞİL — sadece URLSearchParams'a gider
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
      test_mode;

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

    // GEÇİCİ DEBUG
    console.log("=== PAYTR DEBUG ===");
    console.log("merchant_id:", JSON.stringify(merchant_id));
    console.log("merchant_key:", JSON.stringify(merchant_key));
    console.log("merchant_salt:", JSON.stringify(merchant_salt));
    console.log("user_ip:", user_ip);
    console.log("merchant_oid:", merchant_oid);
    console.log("payment_amount:", JSON.stringify(payment_amount));
    console.log("basket:", basket);
    console.log("test_mode:", test_mode);
    console.log("hash_str:", hash_str);
    console.log("paytr_token:", paytr_token);
    console.log("PayTR response:", JSON.stringify(data, null, 2));
    console.log("==================");

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Token error" }, { status: 500 });
  }
}