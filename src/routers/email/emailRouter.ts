import express from "express";

import emailSendHandler from "@routes/email/send/emailSendHandler";

// init email router
const emailRouter = express.Router();

// defining email routes
emailRouter.post("/send", emailSendHandler);

export default emailRouter;
