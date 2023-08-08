import express, { Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";

const emailRouter = express.Router();

emailRouter.post("/send", (req: Request, res: Response) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const { name, email, message } = req.body;

  const mailOptions = {
    to: "emailerapi61@gmail.com",
    subject: "Marketing Lead",

    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
  };

  transporter.sendMail(
    mailOptions,
    (error: Error | null, info: SentMessageInfo) => {
      if (error) {
        console.log(error);
        res.status(500).send("Email could not be sent.");
      } else {
        console.log("Email send: " + info.response);
        res.send("Email sent successfully.");
      }
    }
  );
});

export default emailRouter;
