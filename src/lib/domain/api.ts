// backend çağrıları (BULK)

export type DomainCheckResponse = {
  domain: string;
  available: boolean;
  premium: boolean;
};

export async function checkAvailabilityBulk(
  domains: string[]
): Promise<DomainCheckResponse[]> {
  try {
    const res = await fetch(
      `/api/domain/check?domains=${domains.join(",")}`
    );

    if (!res.ok) {
      console.error("API ERROR:", res.status);
      return [];
    }

    const data = await res.json();

    console.log("API RESPONSE:", data);

    return data;
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return [];
  }
}