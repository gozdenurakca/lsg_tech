/*
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");
  
  const available = await registrarAPI.check(domain);
  return Response.json({ available });
}

sonra data.ts 'te tek satır değişir.

export async function checkAvailability(domain: string): Promise<boolean> {
  const res = await fetch(`/api/domain/check?domain=${domain}`);
  const data = await res.json();
  return data.available;
}

aşama-3
EXTENSIONS array'i de API'den gelir.

data.ts : 
export async function getExtensions() : Promise <Extensions> []> {
const res = await fetch("/api/domain/extensions");
return res.json();
}
*/

// ----------

/*
app/api/domain/check/route.ts

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain"); // örn: "lsg.com.tr"

  const response = await fetch(
    `https://dm.realtimeregister.com/v2/domains/${domain}/check`,
    {
      headers: {
        "Authorization": `ApiKey ${process.env.RTR_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return Response.json({ available: data.available });
}
  

sonra da components/data.ts için 

export async function checkAvailability(domain: string): Promise<boolean> {
  const res = await fetch(`/api/domain/check?domain=${domain}`);
  const { available } = await res.json();
  return available;
}


*/
