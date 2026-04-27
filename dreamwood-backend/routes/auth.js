// routes/auth.js
import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return res.json({ success: true });
  }

  return res.status(401).json({ success: false });
});

export default router;