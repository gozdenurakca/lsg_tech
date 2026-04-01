// ─────────────────────────────────────────────
// Realtime Register — temel API client
// Docs: https://dm.realtimeregister.com/docs/api
// ─────────────────────────────────────────────

const BASE_URL = process.env.REALTIME_REGISTER_BASE_URL ?? "https://api.yoursrs.com/v2";
const API_KEY  = process.env.REALTIME_REGISTER_API_KEY ?? "";

export async function rrFetch<T = unknown>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey ${API_KEY}`,
      ...(options?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Realtime Register [${res.status}] ${path} — ${body}`);
  }

  return res.json() as Promise<T>;
}
