const EmailSender = require('../notifiers/email/email-sender');
const FailedEvents = require('../schema/FailedEvents');

module.exports = class SendEmailService{

    static async send(event){
        try {

            let emailSender = new EmailSender();
            await emailSender.send(event.addressee, event.subject, event.message, event.files);
        }catch (error) {
            let type = 'email';
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

    let failedEvents = new FailedEvents(failedEvent);

    failedEvents.save();
}