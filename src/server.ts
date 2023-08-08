import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import nodemailer, { SentMessageInfo } from "nodemailer";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", (req: Request, res: Response) => {
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

app.get("/", (res: Response) => {
  res.send("hello from ts api");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
