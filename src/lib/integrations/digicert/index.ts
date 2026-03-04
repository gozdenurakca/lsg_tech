export type DigiCertCreateOrderInput = {
  domain: string
  productSlug: string
  period: 1 | 2 | 3
  csr?: string
}

export type DigiCertCreateOrderResult = {
  provider: "digicert"
  providerOrderId: string
  status: "provisioning" | "issued" | "failed"
}

export interface DigiCertService {
  createOrder(input: DigiCertCreateOrderInput): Promise<DigiCertCreateOrderResult>
}