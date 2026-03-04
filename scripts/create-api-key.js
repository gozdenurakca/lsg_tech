require("dotenv").config({ path: ".env.local" });
const crypto = require("crypto");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI tanımlı değil (.env.local kontrol et)");
  process.exit(1);
}

function sha256(input) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function randomKey() {
  return "lsg_live_" + crypto.randomBytes(24).toString("hex");
}

async function main() {
  // 1) DB'ye bağlan
  await mongoose.connect(MONGODB_URI);

  // 2) ApiKey modelini script içinde tanımla (sorunsuz çalışsın)
  const ApiKeySchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      accountId: { type: String, required: true, index: true },
      keyHash: { type: String, required: true, unique: true },
      isActive: { type: Boolean, default: true },
      allowedIps: [String],
      lastUsedAt: Date,
    },
    { timestamps: true },
  );

  const ApiKey =
    mongoose.models.ApiKey || mongoose.model("ApiKey", ApiKeySchema);

  // 3) Partner bilgisi (istersen değiştir)
  const accountId = process.argv[2] || "partner-001";
  const name = process.argv[3] || "Partner API Key";

  // 4) Key üret
  const rawKey = randomKey();
  const keyHash = sha256(rawKey);

  // 5) DB'ye kaydet
  await ApiKey.create({
    name,
    accountId,
    keyHash,
    isActive: true,
    allowedIps: [],
  });

  console.log("✅ API Key created");
  console.log("accountId:", accountId);
  console.log("RAW KEY (bunu partner'e vereceksin):", rawKey);

  await mongoose.disconnect();
}

main().catch(async (e) => {
  console.error("❌ Error:", e);
  try {
    await mongoose.disconnect();
  } catch {}
  process.exit(1);
});
