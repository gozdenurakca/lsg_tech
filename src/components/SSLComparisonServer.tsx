import connectDB from "@/lib/db";
import Product from "@/models/Product";
import SSLProductGrid from "./SSLProductGrid";

export default async function SSLComparisonServer() {
  await connectDB();

  const products = await Product.find({ category: "SSL" }).lean();

  const safeProducts = products.map((p: any) => ({
    ...p,
    _id: p._id?.toString(),
    createdAt: p.createdAt ? new Date(p.createdAt).toISOString() : null,
    updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : null,
  }));

  const grouped = {
    OV: safeProducts.filter((p: any) => p.validation === "OV"),
    EV: safeProducts.filter((p: any) => p.validation === "EV"),
    DV: safeProducts.filter((p: any) => p.validation === "DV"),
  };

  return <SSLProductGrid groupedProducts={grouped} />;
}
