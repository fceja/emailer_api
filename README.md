## Description
A NodeJS / ExpressJS API that provides an endpoint for email generation.

## Installation
![](https://img.shields.io/badge/OS-Linux%20%7C%20MacOS%20%7C%20Windows-eaeaea)
1. Install Node
   - ```
     https://nodejs.org/en/download
     ```
2. Clone repo
3. Install dependencies, at project root run:
   - ```
     npm install
     ```
4. Update `.env` file at project root.
   - Replace empty strings with actual values:
      - ```
        EMAIL_FORWARDING_SERVICE_ACCOUNT_EMAIL=''
        EMAIL_FORWARDING_SERVICE_ACCOUNT_PASSWORD=''
        RECIPIENT_EMAIL=''
        RECIPIENT_EMAIL_SUBJECT=''
      - Note - Email forwarding service has been successfully tested with Gmail. <br/> Check Nodemailer documentation if you'd like to use another email service.

4. At project root, run:
   - ```
     npm run start
     ```
   - Server should be running on http://localhost:3020/

## Endpoint Usage Example
1. Curl request example:
   - ``` 
      curl -X POST http://localhost:3020/email/send \
        -H "Content-Type: application/json" \
        -d '{
           "contactName": "test1",
           "contactEmail": "test2",
           "contactEmailMessage": "test3"
         }'   
      ```

## Technologies & Tools
<p>
  <a
    href="https://www.typescriptlang.org/"
    target="_blank"
    rel="noreferrer"
    style="text-decoration:none"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      width="40"
      height="40"
    /></a>
  <a href="https://nodejs.org/en/about" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
      alt="nodejs"
      width="40"
      height="40"
    /></a>
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
    <img
      src="https://expressjs.com/images/favicon.png"
      alt="expressjs"
      width="40"
      height="40"
    /></a>
  <a href="https://nodemailer.com/" target="_blank" rel="noreferrer">
    <img
      src="https://nodemailer.com/favicon-96x96.png"
      alt="nodemailer"
      width="40"
      height="40"
    /></a>
  <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
      alt="aws"
      width="40"
      height="40"
    /></a>
</p>
