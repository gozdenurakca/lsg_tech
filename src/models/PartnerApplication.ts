import mongoose, { Schema, Document } from "mongoose"

export interface IPartnerApplication extends Document {
  type: "technology" | "hosting"
  companyName: string
  email: string
  website?: string
  monthlyUsers?: string
  message: string
  status: "new" | "reviewing" | "approved" | "rejected"
  createdAt: Date
}

const PartnerApplicationSchema = new Schema<IPartnerApplication>({
  type: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
  monthlyUsers: { type: String },
  message: { type: String, required: true },
  status: { type: String, default: "new" },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.PartnerApplication ||
  mongoose.model<IPartnerApplication>(
    "PartnerApplication",
    PartnerApplicationSchema
  )
