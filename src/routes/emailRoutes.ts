import express, { Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";

const emailRouter = express.Router();

emailRouter.post("/send", (req: Request, res: Response) => {
  // parse contact info from request body
  const { contactName, contactEmail, contactEmailMessage } = req.body;

  // - log into email service provider
  // - this is what emailer_api will leverage for email funtions
  const transporter = nodemailer.createTransport({
    service: process.env.ACCOUNT_EMAIL_SERVICE,
    auth: {
      user: process.env.ACCOUNT_EMAIL_ADDRESS,
      pass: process.env.ACCOUNT_EMAIL_PASSWORD,
    },
  });

  // - intit mail options
  // - email will be sent to vendor email, and will contain contact info
  //   parsed from request body
  const mailOptions = {
    to: process.env.VENDOR_EMAIL,
    subject: process.env.VENDOR_EMAIL_SUBJECT,
    text: `
      Contact Info
      - Name: ${contactName}
      - Email: ${contactEmail}
      - Message: ${contactEmailMessage}


      ------------------------
      AUTOMATED EMAIL
      ACCOUNT IS NOT MONITORED
    `,
  };

  // send email
  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: SentMessageInfo) => {
      if (error) {
        // email send error
        console.log(error);
        res.status(500).send({ message: "Email could not be sent." });
      } else {
        // email sent
        console.log("Email send: " + info.response);
        res.send({ message: "Email sent successfully." });
      }
    }
  );
});

export default emailRouter;
