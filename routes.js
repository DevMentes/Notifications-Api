const express = require('express');
const router = express.Router();

const SlackMessageSender = require('./notifiers/slack/slack-message-sender');
const slackMessageSender = new SlackMessageSender();
const EmailSender = require('./notifiers/email/email-sender');
const emailSender = new EmailSender();
const send_email = require('./schema/email');


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

    let event = {
        addressee:"icce.redes@gmail.com",
        subject:"correo de prueba 2",
        message:"mensaje terrible falso"
    };
    let type = 'email';

    try {
        await emailSender.send(
            'icce.redesgmail.com',
            'correo de prueba 2',
            'mensaje terrible falso',
            []
        );
        res.json({
           response:'Message was sended successfully'
        });
    }catch (error) {
        sendEvent(event, type,error.message);

        res.json({
            error:'Something was wrong'
        });
    }
});
function sendEvent(event, type, errorMessage){
    //hacer algo para guardar en mongo estos datos
    let correo = {
        event: event,
        ocurredOn: Date(),
        type:type,
        messageError:errorMessage
    };

    console.log(correo);

    let documents = new send_email.email(correo);
    console.log(JSON.stringify(documents));
    documents.save();
}

module.exports = router;