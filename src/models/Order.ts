import mongoose, { Schema, Document } from "mongoose"

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId
  amount: number
  status: "paid" | "pending"
}

const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "pending"], default: "paid" },
  },
  { timestamps: true }
)

export default mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema)
