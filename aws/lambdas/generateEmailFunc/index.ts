import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { executeSendEmail } from "./nodemailer";

export const handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const req = event.body ? JSON.parse(event.body) : {} || {};
    const { contactName, contactEmail, contactEmailMessage } = req.body;

    // generate email format string with contact info
    const emailFormatStr = `
      Contact Info
      - Name: ${contactName}
      - Email: ${contactEmail}
      - Message: ${contactEmailMessage}


      ------------------------
      AUTOMATED EMAIL
      ACCOUNT IS NOT MONITORED
    `;

    // execute send email process
    await executeSendEmail(emailFormatStr);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully." }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Email could not be sent." }),
    };
  }
};
