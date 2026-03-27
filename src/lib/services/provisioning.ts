import connectDB from "@/lib/db"
import SslOrder from "@/models/SslOrder"
import { digicertMock, getOrderStatus } from "@/lib/integrations/digicert/mock"

export async function startProvisioning(orderId: string, accountId: string) {
  await connectDB()

  const order = await SslOrder.findOne({ _id: orderId, accountId })
  if (!order) throw new Error("Order not found")

  if (order.status !== "paid") {
    throw new Error("Only paid orders can be provisioned")
  }

  if (!order.csr) {
    throw new Error("CSR girilmeden provisioning başlatılamaz")
  }

  const result = await digicertMock.createOrder({
    domain: order.domain,
    productSlug: order.productSlug,
    period: order.period,
    csr: order.csr,
  })

  order.digicertOrderId = result.providerOrderId
  order.status = "provisioning"
  await order.save()

  return { providerOrderId: result.providerOrderId }
}

export async function refreshProvisioning(orderId: string, accountId: string) {
  await connectDB()

  const order = await SslOrder.findOne({ _id: orderId, accountId })
  if (!order) throw new Error("Order not found")

  if (order.status !== "provisioning") {
    throw new Error("Only provisioning orders can be refreshed")
  }

  if (!order.digicertOrderId) {
    throw new Error("Missing digicertOrderId on order")
  }

  const statusResult = await getOrderStatus(order.digicertOrderId)

  if (statusResult.status === "issued") {
    order.status = "issued"
    await order.save()
  }

  if (statusResult.status === "failed") {
    order.status = "failed"
    order.errorMessage = "DigiCert provisioning failed (mock)"
    await order.save()
  }

  return {
    providerOrderId: order.digicertOrderId,
    status: order.status,
  }
}