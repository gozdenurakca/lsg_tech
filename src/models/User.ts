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
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
