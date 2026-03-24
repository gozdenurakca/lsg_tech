// backend çağrıları

// 🔥 sonra burası gerçek API olacak
export async function checkAvailability(domain: string): Promise<boolean> {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 400));

  return Math.random() > 0.35;
}