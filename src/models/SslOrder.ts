import mongoose, { Schema, Document } from "mongoose"

export type SslOrderStatus =
  | "created"
  | "pending_payment"
  | "paid"
  | "provisioning"
  | "issued"
  | "failed"

export interface ISslOrder extends Document {
  accountId: string
  productSlug: string
  domain: string
  period: 1 | 2 | 3
  csr?: string

  status: SslOrderStatus

  // Entegrasyon mapping alanları
  whmcsInvoiceId?: string
  digicertOrderId?: string

  errorCode?: string
  errorMessage?: string

  meta?: Record<string, any>
}

const SslOrderSchema = new Schema<ISslOrder>(
  {
    accountId: { type: String, required: true, index: true },
    productSlug: { type: String, required: true },
    domain: { type: String, required: true, index: true },
    period: { type: Number, enum: [1, 2, 3], default: 1 },
    csr: { type: String },

    status: { type: String, default: "created", index: true },

    whmcsInvoiceId: { type: String },
    digicertOrderId: { type: String },

    errorCode: { type: String },
    errorMessage: { type: String },

    meta: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
)

export default mongoose.models.SslOrder ||
  mongoose.model<ISslOrder>("SslOrder", SslOrderSchema)