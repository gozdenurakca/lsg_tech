import { rrFetch } from "@/lib/api/realtimeRegister";
import { NextResponse } from "next/server";

// Realtime Register'dan gelen ürün tipi (sadece ihtiyacımız olanlar)
interface RRProduct {
  product: string;       // örn: "DOMAIN_COM"
  currency: string;      // örn: "EUR"
  create?: number;       // kayıt fiyatı
  renew?: number;        // yenileme fiyatı
  transfer?: number;     // transfer fiyatı
  [key: string]: unknown;
}

// GET /api/domain/prices
// Tüm domain ürünlerinin fiyatlarını Realtime Register'dan çeker.
export async function GET() {
  try {
    // Realtime Register: GET /v2/products
    const data = await rrFetch<{ products: RRProduct[] }>("/products");

    // Sadece domain ürünlerini filtrele (SSL, hosting vb. hariç)
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
