const nodemailer = require('nodemailer');
const {ORIGIN_EMAIL, EMAIL_PASS} = require('../../config/config');

module.exports = class EmailSender {

    constructor(){
        this.originEmail = ORIGIN_EMAIL;
        this.transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: ORIGIN_EMAIL,
                pass: EMAIL_PASS
            }
        });
    }

    send(addressee, subject, message, files = []){
        var mailOptions = {
            from: this.originEmail,
            to: addressee,
            subject: subject,
            text: message
        };
        return this.transporter.sendMail(mailOptions);
    }
};
