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

        this.transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error.message);
            } else {
                console.log("Email sent");
            }
        });
    }
};
