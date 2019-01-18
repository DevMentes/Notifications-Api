const SlackMessageSender = require('../notifiers/slack/slack-message-sender');
const send_email = require('../schema/email');

module.exports = class SendSlackMessageService{

     async static sendFromEvent(event){
        try {
            let slackMessageSender = new SlackMessageSender();
            await slackMessageSender.send(event.slackUri, event.message);
        }catch (error) {
            let type = 'slack';
            sendEvent(event, type,error.message);
        }
    }
};

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