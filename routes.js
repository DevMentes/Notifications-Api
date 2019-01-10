const express = require('express');
const router = express.Router();

const SlackMessageSender = require('./notifiers/slack/slack-message-sender');
const slackMessageSender = new SlackMessageSender();
const EmailSender = require('./notifiers/email/email-sender');
const emailSender = new EmailSender();


//crear controllers
router.get('/', (req, res) => {
    res.json({
        status:'working'
    });
});

router.get("/message", async (req, res) => {
    try {
        await slackMessageSender.send('https://hooks.slack.com/services/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', 'mensaje de prueba bien weno');
        res.json({
            response: 'Message was sended successfully.'
        })
    }catch (e) {
        res.json({
            error:'Something was wrong.'
        });
    }

});

router.get("/email", async (req, res) => {

    try {
        await emailSender.send(
            'kmilo93sd@gmail.com',
            'correo de prueba 2',
            'mensaje terrible falso',
            []
        );
        res.json({
           response:'Message was sended successfully'
        });
    }catch (e) {
        res.json({
            error:'Something was wrong'
        });
    }
});

module.exports = router;