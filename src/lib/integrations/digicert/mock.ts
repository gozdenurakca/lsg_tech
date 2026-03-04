import crypto from "crypto"
import { DigiCertService, DigiCertCreateOrderInput } from "./index"

export const digicertMock: DigiCertService = {
  async createOrder(_input: DigiCertCreateOrderInput) {
    return {
      provider: "digicert",
      providerOrderId: "dc_" + crypto.randomBytes(10).toString("hex"),
      status: "provisioning",
    }
  },
}

export async function getOrderStatus(providerOrderId: string): Promise<{
  provider: "digicert"
  providerOrderId: string
  status: "provisioning" | "issued" | "failed"
}> {
  // Mock mantığı: orderId'nin son karakteri sayısal ise "issued", değilse "provisioning"
  const last = providerOrderId.slice(-1)
  const issued = /[0-9]/.test(last)

  return {
    provider: "digicert",
    providerOrderId,
    status: issued ? "issued" : "provisioning",
  }
}