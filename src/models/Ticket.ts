import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    category: String,
    priority: String,
    subject: String,
    message: String,
    name: String,
    email: String,
    orderNo: String,

    status: {
      type: String,
      default: "open",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Ticket ||
  mongoose.model("Ticket", TicketSchema);