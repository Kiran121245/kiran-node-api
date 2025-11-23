import { Router } from "express";
const router = Router();

router.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Kiran" },
    { id: 2, name: "Sai" },
  ];

  res.json({ users });
});

export default router;
