const mongoose = require("mongoose");

async function bazagaUlanish() {
  const uri = process.env.MONGODB_URI;

  console.log("MONGODB_URI qiymati:", uri ? "topildi" : "TOPILMADI (bo'sh yoki yo'q)");

  if (!uri) {
    throw new Error("MONGODB_URI .env faylida topilmadi yoki bo'sh");
  }

  await mongoose.connect(uri);
  console.log("MongoDB'ga muvaffaqiyatli ulandi");
}

module.exports = { bazagaUlanish };
