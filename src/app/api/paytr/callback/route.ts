export async function POST(req: Request) {
  const bodyText = await req.text()
  const params = new URLSearchParams(bodyText)

  const merchant_oid = params.get("merchant_oid")
  const status = params.get("status")

  if (status === "success") {
    await fetch(
      `${process.env.NEXTAUTH_URL}/api/lsg/orders/${merchant_oid}/mark-paid`,
      {
        method: "POST",
        headers: {
          "x-internal-secret": process.env.INTERNAL_SECRET!,
        },
      }
    )
  }

  return new Response("OK")
}