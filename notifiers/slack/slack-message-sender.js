const amqp = require('amqplib/callback_api');
const axios = require('axios');

const queue = 'slackOutput';
const queueUri = 'amqp://localhost';
const slackMessageSenderUrl = 'https://hooks.slack.com/services/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';

module.exports = function(slackMessageSenderUri){

    amqp.connect(queueUri, (err, conn) => {
            conn.createChannel(function(err, ch) {

                ch.assertQueue(queue, { durable: false });

                ch.consume(
                    queue,
                    function(msg) {

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

    async function sendMessage(message, slackMessageSenderUri) {
        let body = {
            text: message
        };
        try {
            let response = await axios.post(slackMessageSenderUri, body);

            return response.data;
        } catch (error) {
            return error.message;
        }
    }
};