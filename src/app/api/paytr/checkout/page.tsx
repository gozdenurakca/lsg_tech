"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initPayment() {
      try {
        // 1ORDER OLUŞTUR
        const orderRes = await fetch("/api/lsg/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // şimdilik gerekiyorsa API key koy
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

        if (!orderData.ok) {
          throw new Error("Order oluşturulamadı");
        }

        const orderId = orderData.id;

        // PAYTR TOKEN AL
        const tokenRes = await fetch("/api/paytr/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            email: "test@test.com",
            // daha sonrasında amount : order.totalAmount *100
            amount: "1000",
          }),
        });

        const tokenData = await tokenRes.json();

        if (!tokenData.token) {
          throw new Error("Token alınamadı");
        }

        setToken(tokenData.token);
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
      style={{
        width: "100%",
        height: "600px",
        border: "none",
      }}
    />
  );
}
