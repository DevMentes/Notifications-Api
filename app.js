const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const axios = require('axios');
const amqp = require('amqplib/callback_api');
app.get('/', (req, res) => res.send('Hello world'));

app.post('/message', async(req, res) => {

    var message = '';

    amqp.connect('amqp://localhost', function(err, conn) {
        conn.createChannel(function(err, ch) {
            var q = 'hello';

            ch.assertQueue(q, {durable: false});
            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
            ch.consume(q, function(msg) {
                sendMessage("Consumiendo eventos desde node js : " + msg.content.toString());
            }, {noAck: true});
        });
    });

    async function sendMessage(message) {
        try{
            console.log(message);
            let response = await axios.post(
                'https://hooks.slack.com/services/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',
                {
                    text: message
                }
            );
            res.json(
                {
                    'message':response.data
                }
            );
        }catch(error){
            res.json(
                {
                    'error':error.message
                }
            );
        }
    }


});

app.listen(port, () => console.log(`App listening from port ${port}`));