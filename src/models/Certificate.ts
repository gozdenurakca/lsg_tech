import mongoose, { Schema, Document } from "mongoose"

export interface ICertificate extends Document {
  user: mongoose.Types.ObjectId
  domain: string
  expiresAt: Date
  status: "active" | "expired" | "pending"
}

const CertificateSchema = new Schema<ICertificate>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    domain: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    status: { type: String, enum: ["active", "expired", "pending"], default: "active" },
  },
  { timestamps: true }
)

export default mongoose.models.Certificate ||
  mongoose.model<ICertificate>("Certificate", CertificateSchema)
