const SlackMessageSender = require('../notifiers/slack/slack-message-sender');

module.exports = class SendSlackMessageService{

    static sendFromEvent(event){
        try {
            let slackMessageSender = new SlackMessageSender();

            slackMessageSender.send(event.slackUri, event.message);
        }catch (error) {
            //saveError and event
        }
    }
}