const nodemailer = require('nodemailer');

const email = process.env.EMAIL;

module.exports = function (destination, subject, message, files) {

    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "panalbit.dte.test@gmail.com",
            pass: "Panalbit.Dte.Test"
        }
    });
    // Definimos el email
    var mailOptions = {
        from: email,
        to: destination,
        subject: subject,
        text: message
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error.message);
        } else {
            console.log("Email sent");
        }
    });
}