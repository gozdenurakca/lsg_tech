import { NextRequest, NextResponse } from "next/server";
import { checkDomain } from "@/lib/services/rtr";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const domainsParam = searchParams.get("domains");

  if (!domainsParam) {
    return NextResponse.json(
      { error: "domains gerekli" },
      { status: 400 }
    );
  }

  // 🔥 sanitize + trim + boşları sil
  const domains = domainsParam
    .split(",")
    .map((d) => d.trim().toLowerCase())
    .filter(Boolean);

  if (domains.length === 0) {
    return NextResponse.json(
      { error: "geçerli domain yok" },
      { status: 400 }
    );
  }

  try {
    const results = await Promise.all(
      domains.map(async (domain) => {
        try {
          const r = await checkDomain(domain);

          return {
            domain,
            available: r.available,
            premium: r.premium,
          };
        } catch (err) {
          console.error("DOMAIN CHECK ERROR:", domain, err);

          return {
            domain,
            available: false,
            premium: false,
            error: true,
          };
        }
      })
    );

    return NextResponse.json(results);
  } catch (err: any) {
    console.error("ROUTE ERROR:", err);

    return NextResponse.json(
      { error: err?.message || "UNKNOWN ERROR" },
      { status: 500 }
    );
  }
}