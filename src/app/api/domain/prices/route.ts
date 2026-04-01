import { rrFetch } from "@/lib/api/realtimeRegister";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // 🔥 KRİTİK
export const revalidate = 3600; // opsiyonel ama önerilir

interface RRProduct {
  product: string;
  currency: string;
  create?: number;
  renew?: number;
  transfer?: number;
  [key: string]: unknown;
}

export async function GET() {
  try {
    const data = await rrFetch<{ products: RRProduct[] }>("/products");

    const domainProducts = (data.products ?? []).filter((p) =>
      p.product?.startsWith("DOMAIN_"),
    );

    return NextResponse.json({ products: domainProducts });
  } catch (err) {
    console.error("[domain/prices]", err);
    return NextResponse.json(
      { error: "Fiyat listesi alınamadı", detail: String(err) },
      { status: 502 },
    );
  }
}