// Realtime Register API — servis katmanı

const BASE_URL =
  process.env.RTR_BASE_URL ??
  "https://api.realtimeregister.com/api/v2";

const AUTH_TOKEN = process.env.RTR_AUTH_TOKEN ?? "";

// 🔥 fetch wrapper
async function rtrFetch(path: string, options?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000); // 8sn timeout

  try {
    console.log("RTR BASE_URL:", BASE_URL);
    console.log("RTR AUTH:", AUTH_TOKEN ? "VAR" : "YOK");

    const res = await fetch(`${BASE_URL}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

        // 🔥 BURASI KRİTİK
        // çoğu RTR hesabında Basic çalışıyor
        Authorization: `Basic ${AUTH_TOKEN}`,

        ...(options?.headers ?? {}),
      },
    });

    const text = await res.text();

    console.log(`RTR [${res.status}] ${path}:`, text);

    if (!res.ok) {
      throw new Error(`RTR ${res.status}: ${text}`);
    }

    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  } catch (err: any) {
    console.error("RTR FETCH ERROR:", err);
    throw new Error("RTR fetch failed");
  } finally {
    clearTimeout(timeout);
  }
}

// 🔥 DOMAIN AVAILABILITY CHECK
export async function checkDomain(domain: string) {
  const data = await rtrFetch(`/domains/check`, {
    method: "POST",
    body: JSON.stringify({
      domains: [domain],
    }),
  });

  const result = data?.results?.[0];

  return {
    domain,
    available: result?.available === true,
    premium: result?.premium === true,
  };
}