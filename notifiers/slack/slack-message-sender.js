const axios = require('axios');

module.exports = class SlackMessageSender
{
    constructor(slackMessageSenderUri){
        this.slackMessageSenderUri = slackMessageSenderUri;
    }

    send(message){
        let body = {
                text: message
            };

        return axios.post(this.slackMessageSenderUri, body);

    }
};
/*
module.exports = function(slackMessageSenderUri){

    amqp.connect(queueUri, (err, conn) => {
            conn.createChannel(function(err, ch) {

                ch.assertQueue(queue, { durable: false });

                ch.consume(
                    queue,
                    function(msg) {
                        console.log(msg);
                        return sendMessage(
                            msg.content.toString(),
                            slackMessageSenderUri
                        );
                    },
                    { noAck: true }
                );
            });
        }
    );
};
*/