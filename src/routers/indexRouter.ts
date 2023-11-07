import express from "express";

import emailRouter from "@routers/email/emailRouter";

// init index router
const indexRouter = express.Router();

// mount emailRouter to '/email' path
indexRouter.use("/email", emailRouter);

export default indexRouter;
