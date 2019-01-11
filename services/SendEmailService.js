const EmailSender = require('../notifiers/email/email-sender');
const send_email = require('../schema/email');

module.exports = class SendEmailService{

    static async send(event){
        try {
            let emailSender = new EmailSender();
            await emailSender.send(event.addressee, event.subject, event.message, event.files);
        }catch (error) {
            let type = 'email';
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

    let documents = new send_email.email(correo);
    documents.save();
}