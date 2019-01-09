const express = require('express');
const router = express.Router();

const slackMessageSender = require('./notifiers/slack/slack-message-sender');
const emailSender = require('./notifiers/email/email-sender');

router.get('/', function (req, res) {
    res.json({
        status:'working'
    });
});

router.post("/message", async (req, res) => {
    console.log(slackMessageSender('https://hooks.slack.com/services/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'));
});

router.get("/email", function(req, res) {
    emailSender(
        'kmilo93sd@gmail.com',
        'correo de prueba 2',
        'mensaje terrible falso',
        []
    );
});
module.exports = router;