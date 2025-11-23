import { Router } from "express";

const router = Router();

router.post("/add", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Invalid input" });
  }

  res.json({ result: a + b });
});

export default router;
