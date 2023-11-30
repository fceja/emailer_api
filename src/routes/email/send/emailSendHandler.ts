import { Request, Response } from "express";

import { executeSendEmail } from "@lib/nodemailer";
import { composeEmail } from "@utils/composeEmail";

const emailSendHandler = async (req: Request, res: Response) => {
  const { contactName, contactEmail, contactEmailMessage } = req.body;

  if (!contactEmail || !contactEmail || !contactEmailMessage) {
    return res.status(400).send({ message: "Email could not be sent" });
  }

  const emailMessage = composeEmail(
    contactName,
    contactEmail,
    contactEmailMessage
  );

  const result = await executeSendEmail(emailMessage);

  if (!result) {
    return res.status(400).send({ message: "Email could not be sent" });
  }

  return res.status(200).send({ message: "Email sent successfully." });
};

export default emailSendHandler;
