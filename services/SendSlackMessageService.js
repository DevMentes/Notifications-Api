const SlackMessageSender = require('../notifiers/slack/slack-message-sender');
const FailedEvents = require('../schema/FailedEvents');

module.exports = class SendSlackMessageService{

     static async sendFromEvent(event){
        try {
            let slackMessageSender = new SlackMessageSender();
            await slackMessageSender.send(event.slackUri, event.message);
        }catch (error) {
            let type = 'slack';
            saveEvent(event, type,error.message);
        }
    }
};

function saveEvent(event, type, errorMessage){

    let failedEvent = {
        event: event,
        ocurredOn: Date(),
        type:type,
        messageError:errorMessage
    };

    let failedEVents = new FailedEvents.failedEvent(failedEvent);
    failedEVents.save();
}