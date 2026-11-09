require("dotenv").config();

const app = require("./app");
const { bazagaUlanish } = require("./config/db");
const { botniIshgaTushirish } = require("./bot/telegramBot");

const PORT = process.env.PORT || 5000;

async function serverniIshgaTushirish() {
  console.log("Server ishga tushmoqda...");

  await bazagaUlanish();

  app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} manzilida ishga tushdi`);
  });

  botniIshgaTushirish();
}

serverniIshgaTushirish().catch((xato) => {
  console.error("SERVERNI ISHGA TUSHIRISHDA XATO:", xato.message);
  process.exitCode = 1;
});
