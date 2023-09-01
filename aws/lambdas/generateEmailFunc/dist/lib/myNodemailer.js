"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSendEmail = void 0;
var nodemailer_1 = require("nodemailer");
// return transporter object with configs for email service provider
var getTransporter = function () {
    var transportData = {
        service: process.env.ACCOUNT_EMAIL_SERVICE,
        auth: {
            user: process.env.ACCOUNT_EMAIL_ADDRESS,
            pass: process.env.ACCOUNT_EMAIL_PASSWORD,
        },
    };
    console.log("transportData: ", transportData);
    try {
        var transport = (0, nodemailer_1.createTransport)(transportData);
        console.log("transport: ", transport);
        return transport;
    }
    catch (error) {
        console.log("transport error: ", error);
        return { error: error };
    }
};
// return object with email properties to be sent
var getMailOptions = function (emailFormatStr) { return ({
    to: process.env.VENDOR_EMAIL,
    subject: process.env.VENDOR_EMAIL_SUBJECT,
    text: "".concat(emailFormatStr),
}); };
// send email
var sendEmail = function (mailOptions, transporter) {
    return new Promise(function (resolve, reject) {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            }
            else {
                console.log("Email send: " + info.response);
                resolve();
            }
        });
    });
};
var executeSendEmail = function (emailFormatStr) {
    // init objects to send email
    var mailOptionsObj = getMailOptions(emailFormatStr);
    console.log("mailOptionsObj:", mailOptionsObj);
    var transporterObj = getTransporter();
    console.log("transporterObj:", transporterObj);
    var resp = sendEmail(mailOptionsObj, transporterObj);
    console.log("resp", resp);
    return resp;
};
exports.executeSendEmail = executeSendEmail;
