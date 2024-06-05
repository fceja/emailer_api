## Description
A NodeJS / ExpressJS API that provides an endpoint for email generation.

## Installation
![](https://img.shields.io/badge/Unix-informational?style=flat&logo=Unix&logoColor=black&color=eaeaea)
1. Clone repo
2. Install Node
   - ```https://nodejs.org/en/download```
3. At project root, run:
   - ```npm install```
   - This will install all project package dependencies
4. Update ```.env``` file at project root.
   - Replace empty strings with actual values:
      - ```EMAIL_FORWARDING_SERVICE_ACCOUNT_EMAIL=''``` - gmail account email
      - ```EMAIL_FORWARDING_SERVICE_ACCOUNT_PASSWORD=''``` - gmail account password
      - ```RECIPIENT_EMAIL=''```
      - ```RECIPIENT_EMAIL_SUBJECT=''```
   - Note - Email forwarding service has been successfully tested with gmail. Check Nodemailer docs if you'd like to use another email service. Will need to adjust ```EMAIL_FORWARDING_SERVICE``` in .env file.

4. At project root, run:
   - ```npm start```
   - Server should now be running on port: ```3020```

## Endpoint Usage Example
1. Endpoint
   - ```POST``` - ```http://localhost:3020/email/send```
   - JSON payload
      - ```
        {
          "contactName": "test1",
          "contactEmail": "test2",
          "contactEmailMessage": "test3"
         }
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
    />
  </a>
  <a href="https://nodejs.org/en/about" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
      alt="nodejs"
      width="40"
      height="40"
    />
  </a>
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
    <img
      src="https://expressjs.com/images/favicon.png"
      alt="expressjs"
      width="40"
      height="40"
    />
  </a>
  <a href="https://nodemailer.com/" target="_blank" rel="noreferrer">
    <img
      src="https://nodemailer.com/favicon-96x96.png"
      alt="nodemailer"
      width="40"
      height="40"
    />
  </a>
  <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
      alt="aws"
      width="40"
      height="40"
    />
  </a>
</p>
