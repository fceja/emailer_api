import express, { Request, Response } from "express";

import emailRouter from "./emailRoutes";

// init router
const router = express.Router();

// routes
router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "response from ts api" });
});

router.use("/email", emailRouter);

export default router;
