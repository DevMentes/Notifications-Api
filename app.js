require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const axios = require("axios");
const amqp = require("amqplib/callback_api");
const nodemailer = require("nodemailer");

const email = process.env.EMAIL;

app.post("/message", async (req, res) => {
  //conexión a colas en RabbitMQ
  amqp.connect(
    "amqp://localhost",
    function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = "hello";

        ch.assertQueue(q, { durable: false });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(
          q,
          function(msg) {
            //se envía mensaje por slack
            sendMessage(
              "Consumiendo eventos desde node js : " + msg.content.toString()
            );
          },
          { noAck: true }
        );
      });
    }
  );

  //funcion que envía el mensaje por slack
  async function sendMessage(message) {
    try {
      console.log(message);
      let response = await axios.post(
        "https://hooks.slack.com/services/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",
        {
          text: message
        }
      );
      res.json({
        message: response.data
      });
    } catch (error) {
      res.json({
        error: error.message
      });
    }
  }
});

app.get("/email", function(req, res) {
  sendMail("hola hola pirinola");
});

// NodeMailer
function sendMail(message) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "panalbit.dte.test@gmail.com",
      pass: "Panalbit.Dte.Test"
    }
  });
  // Definimos el email
  var mailOptions = {
    from: email,
    to: "kmilo93sd@gmail.com",
    subject: "Prueba nodemailer",
    text: message
  };

  // Enviamos el email
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.send(500, err.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });
}

app.listen(port, () => console.log(`App listening from port ${port}`));
