import express, { Request, Response } from "express";

import { executeSendEmail } from "@utils/nodemailer";
import { composeEmail } from "@utils/composeEmail";

// init email router
const emailRouter = express.Router();

// defining email routes
emailRouter.post("/send", (req: Request, res: Response) => {
  // parse contact info from request payload
  const { contactName, contactEmail, contactEmailMessage } = req.body;

  // compose email message with contact info
  const emailMessage = composeEmail(
    contactName,
    contactEmail,
    contactEmailMessage
  );

  // execute send email process
  executeSendEmail(emailMessage)
    .then(() => {
      res.status(200).send({ message: "Email sent successfully." });
    })
    .catch(() => {
      res.status(500).send({ message: "Email could not be send" });
    });
});

export default emailRouter;
