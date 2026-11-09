const jwt = require("jsonwebtoken");

function admingaRuxsat(req, res, next) {
  const sarlavha = req.headers.authorization;

  if (!sarlavha || !sarlavha.startsWith("Bearer ")) {
    return res.status(401).json({ xabar: "Kirish uchun token talab qilinadi" });
  }

  const token = sarlavha.split(" ")[1];

  try {
    const malumot = jwt.verify(token, process.env.JWT_SECRET);
    req.ustaId = malumot.ustaId;
    next();
  } catch (xato) {
    return res.status(401).json({ xabar: "Token yaroqsiz yoki muddati tugagan" });
  }
}

module.exports = { admingaRuxsat };
