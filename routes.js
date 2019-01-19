const express = require('express');
const router = express.Router();


const SendEmailService = require('./services/SendEmailService');
const SendSlackMessageService = require('./services/SendSlackMessageService');

router.get('/', (req, res) => {
    res.json({
        status:'working'
    });
});

router.post("/message", async (req, res) => {

    let event = {
        slackUri:'https://hooks.slack.com/services/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',
        message:'doña limón.'
    };
    await SendSlackMessageService.sendFromEvent(event);
    res.json({
        message:'Message was sent.'
    })

});

router.post("/email", async (req, res) => {

    const addressee = req.body.addressee;
    const subject = req.body.subject;
    const message = req.body.message;
    const files = [];

    let event = {
        addressee:addressee,
        subject:subject,
        message:message,
        files:files
    };

    await SendEmailService.send(event);
    res.json({
        message:'The email was sent.'
    });
});

module.exports = router;