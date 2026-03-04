import mongoose, { Schema, Document } from "mongoose"

export interface ISupportTicket extends Document {
  user: mongoose.Types.ObjectId
  subject: string
  status: "open" | "closed"
}

const SupportTicketSchema = new Schema<ISupportTicket>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    subject: String,
    status: { type: String, enum: ["open", "closed"], default: "open" },
  },
  { timestamps: true }
)

export default mongoose.models.SupportTicket ||
  mongoose.model<ISupportTicket>("SupportTicket", SupportTicketSchema)
