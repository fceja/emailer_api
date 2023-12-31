import nodemailer, { SentMessageInfo } from "nodemailer";

// return transporter object with configs for email forwarding service provider
const getTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_FORWARDING_SERVICE,
    auth: {
      user: process.env.EMAIL_FORWARDING_SERVICE_ACCOUNT_EMAIL,
      pass: process.env.EMAIL_FORWARDING_SERVICE_ACCOUNT_PASSWORD,
    },
  });
};

// return object with email properties for recipient
const getMailOptions = (emailFormatStr: String) => ({
  to: process.env.RECIPIENT_EMAIL,
  subject: process.env.RECIPIENT_EMAIL_SUBJECT,
  text: `${emailFormatStr}`,
});

// send email
const sendEmail = (
  mailOptions: nodemailer.SendMailOptions,
  transporter: nodemailer.Transporter
) => {
  return new Promise<string>((resolve, reject) => {
    transporter.sendMail(
      mailOptions,
      (error: Error | null, info: SentMessageInfo) => {
        if (error) {
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info.response);
        }
      }
    );
  });
};

export const executeSendEmail = async (emailFormatStr: String) => {
  // init objects to send email
  const mailOptionsObj = getMailOptions(emailFormatStr);
  const transporterObj = getTransporter();

  const result = await sendEmail(mailOptionsObj, transporterObj);

  return result.includes("2.0.0");
};
