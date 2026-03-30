import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  companyName?: string
  role: "admin" | "customer"
  status: "active" | "suspended"
  address?: {
    line1?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  billing?: {
    type?: "bireysel" | "kurumsal"
    taxNumber?: string // T.C. Kimlik No veya Vergi No
    taxOffice?: string
  }
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },
    address: {
      line1: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String, default: "Türkiye" },
    },
    billing: {
      type: { type: String, enum: ["bireysel", "kurumsal"], default: "bireysel" },
      taxNumber: { type: String },
      taxOffice: { type: String },
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
