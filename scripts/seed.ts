import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({ path: ".env.local" })

import Product from "../src/models/Product"
import { dvProducts } from "./seeds/dv"
import { ovProducts } from "./seeds/ov"
import { evProducts } from "./seeds/ev"
import { securesiteProducts } from "./seeds/securesite"
import { sitelockProducts } from "./seeds/sitelock"

async function seed() {
  try {
    const uri = process.env.MONGODB_URI

    if (!uri) {
      throw new Error("MONGODB_URI bulunamadı (.env.local kontrol et)")
    }

    await mongoose.connect(uri)

    console.log("✅ MongoDB bağlandı")

    await Product.deleteMany({})
    console.log("🧹 Eski ürünler temizlendi")

    await Product.insertMany([
      ...dvProducts,
      ...ovProducts,
      ...evProducts,
      ...securesiteProducts,
      ...sitelockProducts,
    ])

    const total = dvProducts.length + ovProducts.length + evProducts.length + securesiteProducts.length + sitelockProducts.length
    console.log(`🚀 ${total} ürün başarıyla eklendi (DV: ${dvProducts.length}, OV: ${ovProducts.length}, EV: ${evProducts.length}, SecureSite: ${securesiteProducts.length}, SiteLock: ${sitelockProducts.length})`)

    process.exit(0)

  } catch (error) {
    console.error("❌ Seed hatası:", error)
    process.exit(1)
  }
}

seed()