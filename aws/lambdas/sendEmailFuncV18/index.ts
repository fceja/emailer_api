import type { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { executeSendEmail } from "./lib/myNodemailer";

const returnError = () => ({
  statusCode: 500,
  body: JSON.stringify({
    message: "Email could not be sent.",
  }),
});

exports.handler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const payload = event.body ? JSON.parse(event.body) : {} || {};
  const { contactName, contactEmail, contactEmailMessage } = payload;

  console.log("payload:", payload);

  if (!contactName || !contactEmail || contactEmailMessage) {
    return returnError();
  }

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

  try {
    // execute send email process
    await executeSendEmail(emailFormatStr);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully." }),
    };
  } catch (error) {
    console.log("error", error);
    return returnError();
  }
};
