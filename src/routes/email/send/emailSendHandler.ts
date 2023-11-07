import { Request, Response } from "express";

import { executeSendEmail } from "@lib/nodemailer";
import { composeEmail } from "@utils/composeEmail";

const emailSendHandler = (req: Request, res: Response) => {
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
};

export default emailSendHandler;
