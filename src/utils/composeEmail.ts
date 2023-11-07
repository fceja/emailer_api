export const composeEmail = (
  contactName: string,
  contactEmail: string,
  contactEmailMessage: string
) => {
  return `
    Contact Info
      - Name: ${contactName}
      - Email: ${contactEmail}
      - Message: ${contactEmailMessage}


      ------------------------
      AUTOMATED EMAIL
      ACCOUNT IS NOT MONITORED
    `;
};
