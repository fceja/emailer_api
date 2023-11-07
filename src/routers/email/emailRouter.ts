import express from "express";

import emailSendHandler from "@routes/email/send/emailSendHandler";

// init email router
const emailRouter = express.Router();

// POST /email/send
emailRouter.post("/send", emailSendHandler);

export default emailRouter;
