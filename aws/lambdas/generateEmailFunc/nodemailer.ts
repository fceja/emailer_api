import * as nodemailer from "nodemailer";
import { SentMessageInfo } from "nodemailer";

// return transporter object with configs for email service provider
const getTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.ACCOUNT_EMAIL_SERVICE,
    auth: {
      user: process.env.ACCOUNT_EMAIL_ADDRESS,
      pass: process.env.ACCOUNT_EMAIL_PASSWORD,
    },
  });
};

// return object with email properties to be sent
const getMailOptions = (emailFormatStr: String) => ({
  to: process.env.VENDOR_EMAIL,
  subject: process.env.VENDOR_EMAIL_SUBJECT,
  text: `${emailFormatStr}`,
});

// send email
const sendEmail = (
  mailOptions: nodemailer.SendMailOptions,
  transporter: nodemailer.Transporter
) => {
  return new Promise<void>((resolve, reject) => {
    transporter.sendMail(
      mailOptions,
      (error: Error | null, info: SentMessageInfo) => {
        if (error) {
          reject(error);
        } else {
          console.log("Email send: " + info.response);
          resolve();
        }
      }
    );
  });
};

export const executeSendEmail = (emailFormatStr: String) => {
  // init objects to send email
  const mailOptionsObj = getMailOptions(emailFormatStr);
  console.log("mailOptionsObj", mailOptionsObj);
  const transporterObj = getTransporter();

  return sendEmail(mailOptionsObj, transporterObj);
};
