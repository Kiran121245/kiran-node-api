import { Router } from "express";
const router = Router();

router.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Kiran API!" });
});

export default router;
