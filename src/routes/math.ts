import { Router } from "express";
import { addNumbers } from "../controllers/mathController.js";

const router = Router();

router.post("/add", (req, res) => {
  const { a, b } = req.body;
  const result = addNumbers(Number(a), Number(b));
  res.json({ result });
});

export default router;
