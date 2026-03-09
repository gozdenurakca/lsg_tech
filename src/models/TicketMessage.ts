import mongoose from "mongoose";

const TicketMessageSchema = new mongoose.Schema(
  {
    ticketId: String,
    sender: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.models.TicketMessage ||
  mongoose.model("TicketMessage", TicketMessageSchema);