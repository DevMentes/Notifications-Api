const express = require('express');
const router = express.Router();


const SendEmailService = require('./services/SendEmailService');
const SendSlackMessageService = require('./services/SendSlackMessageService');

router.get('/', (req, res) => {
    res.json({
        status:'working'
    });
});

router.get("/message", async (req, res) => {

    let event = {
        slackUri:'https://hooks.slack.com/services/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',
        message:'doña limón.'
    };
    await SendSlackMessageService.sendFromEvent(event);
    res.json({
        message:'Message was sent.'
    })

});

router.get("/email", (req, res) => {
    let event = {
        addressee:'kmilo93sd@gmail.com',
        subject:'ascac',
        message:'avva',
        files:[]
    };
    SendEmailService.send(event);
});
module.exports = router;