"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function CheckoutPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initPayment() {
      try {
        const orderRes = await fetch("/api/lsg/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "demo-key",
          },
          body: JSON.stringify({
            productSlug: "rapid-dv",
            domain: "test.com",
            period: 1,
            email: "test@test.com",
          }),
        });

        const orderData = await orderRes.json();

        const tokenRes = await fetch("/api/paytr/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId: orderData.id,
            email: "test@test.com",
            amount: "1000",
          }),
        });

        const tokenData = await tokenRes.json();

        if (tokenData.token) {
          setToken(tokenData.token);
        }
      } catch (err) {
        console.error("Checkout error:", err);
      } finally {
        setLoading(false);
      }
    }

    initPayment();
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-[400px] text-slate-500">Ödeme hazırlanıyor...</div>;
  if (!token) return <div className="flex items-center justify-center min-h-[400px] text-red-500">Ödeme başlatılamadı ❌</div>;

  return (
    <>
      {/* PayTR resmi iframeResizer — iframe'i içeriğe göre otomatik boyutlandırır */}
      <Script
        src="https://www.paytr.com/js/iframeResizer.min.js"
        onLoad={() => {
          // @ts-ignore
          if (typeof iFrameResize !== "undefined") iFrameResize({}, "#paytriframe");
        }}
      />
      <iframe
        id="paytriframe"
        src={`https://www.paytr.com/odeme/guvenli/${token}`}
        scrolling="no"
        style={{ width: "100%", border: "none" }}
      />
    </>
  );
}
