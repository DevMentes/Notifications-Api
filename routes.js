const express = require('express');
const router = express.Router();


const SendEmailService = require('./services/SendEmailService');
const SendSlackMessageService = require('./services/SendSlackMessageService');

//crear controllers
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
    SendSlackMessageService.sendFromEvent(event);

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