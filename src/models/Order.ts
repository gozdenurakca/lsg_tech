import mongoose, { Schema, Document } from "mongoose"

export interface IOrderItem {
  type: string;
  name: string;
  price: number;
  period: number;
}

export interface IOrder extends Document {
  user: mongoose.Types.ObjectId;
  orderNumber: string;
  amount: number;
  status: "paid" | "pending" | "cancelled" | "failed";
  items: IOrderItem[];
}

const OrderItemSchema = new Schema<IOrderItem>({
  type: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  period: { type: Number, required: true },
});

const OrderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderNumber: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "pending", "cancelled", "failed"], default: "paid" },
    items: [OrderItemSchema],
  },
  { timestamps: true }
)

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema)
