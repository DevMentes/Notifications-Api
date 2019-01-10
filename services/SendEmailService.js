const EmailSender = require('../notifiers/email/email-sender');

module.exports = class SendEmailService{

    static async send(event){
        try {
            let emailSender = new EmailSender();
            await emailSender.send(event.addressee, event.subject, event.message, event.files);
        }catch (error) {
            //here should save event data
            return 'Something was wrong';
        }
    }
};