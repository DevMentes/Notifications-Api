const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

const email = process.env.EMAIL;

const slackMessageSender = require('./notifiers/slack/slack-message-sender');

router.get('/', function (req, res) {
    res.json({
        status:'working'
    });
});

router.post("/message", async (req, res) => {
    console.log(slackMessageSender('https://hooks.slack.com/services/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'));
});

router.get("/email", function(req, res) {
    sendMail("hola hola pirinola");
});

// NodeMailer
function sendMail(message) {
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
        to: "kmilo93sd@gmail.com",
        subject: "Prueba nodemailer",
        text: message
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.send(500, err.message);
        } else {
            console.log("Email sent");
            res.status(200).jsonp(req.body);
        }
    });
}
module.exports = router;