const nodemailer = require('nodemailer');

module.exports = class EmailSender
{
    constructor(originEmail, originEmailPassword){
        this.originEmail = originEmail;
        this.transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: originEmail,
                pass: originEmailPassword
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
