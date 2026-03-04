import mongoose, { Schema, Document } from "mongoose"

export interface IApiKey extends Document {
  name: string
  accountId: string           // bu key hangi müşteri/partner hesabına ait
  keyHash: string             // düz key DB'de tutulmaz
  isActive: boolean
  allowedIps?: string[]       // opsiyonel: IP allowlist
  lastUsedAt?: Date
}

const ApiKeySchema = new Schema<IApiKey>(
  {
    name: { type: String, required: true },
    accountId: { type: String, required: true, index: true },
    keyHash: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    allowedIps: [String],
    lastUsedAt: Date,
  },
  { timestamps: true }
)

export default mongoose.models.ApiKey || mongoose.model<IApiKey>("ApiKey", ApiKeySchema)