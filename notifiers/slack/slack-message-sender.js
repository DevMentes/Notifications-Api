const axios = require('axios');

module.exports = class SlackMessageSender
{
    async send(slackMessageSenderUri ,message){
        const body = {
                text: message
            };

        const res = await axios.post(slackMessageSenderUri, body);

        return res;

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