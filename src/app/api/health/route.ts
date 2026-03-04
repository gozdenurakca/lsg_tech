import mongoose from "mongoose";

export async function GET() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    return Response.json({ status: "Mongo Connected ✅" });
  } catch (error) {
    return Response.json({ status: "Connection Failed ❌" });
  }
}
