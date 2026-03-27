"use client";

import { useEffect, useState } from "react";

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

  if (loading) return <div>Ödeme hazırlanıyor...</div>;
  if (!token) return <div>Ödeme başlatılamadı ❌</div>;

  return (
    <iframe
      src={`https://www.paytr.com/odeme/guvenli/${token}`}
      style={{ width: "100%", height: "600px", border: "none" }}
    />
  );
}
