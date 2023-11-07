import express, { Request, Response } from "express";

import emailRouter from "@routers/email/emailRouter";

// init router
const indexRouter = express.Router();

// routes
indexRouter.get("/", (_req: Request, res: Response) => {
  res.json({ message: "response from ts api" });
});

indexRouter.use("/email", emailRouter);

export default indexRouter;
