import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const merchant_id = process.env.PAYTR_MERCHANT_ID!;
    const merchant_key = process.env.PAYTR_MERCHANT_KEY!;
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT!;

    const user_ip = "127.0.0.1"; // şimdilik sabit
    const merchant_oid = body.orderId;
    const email = body.email;
    const payment_amount = body.amount; // kuruş cinsinden (örn: 1000 = 10₺)

    const basket = JSON.stringify([
      ["SSL Sertifikası", "10.00", 1],
    ]);

    const hash_str =
      merchant_id +
      user_ip +
      merchant_oid +
      email +
      payment_amount +
      basket +
      "0" +
      "0" +
      "TL" +
      "0" +
      "0";

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
        debug_on: "1",
        no_installment: "0",
        max_installment: "0",
        currency: "TL",
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Token error" }, { status: 500 });
  }
}