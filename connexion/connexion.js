const mongoose = require('mongoose');

// Usamos el método connect para conectarnos a nuestra base de datos
mongoose.connect('mongodb://localhost/pending_events')
    .then(() => {

        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log('La conexión a MongoDB se ha realizado correctamente!!');
    })
    .catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SendEmail = new Schema({
    author: ObjectId,
    remitente: String,
    destinatario: String,
    mensaje: String,
    adjuntos: String,
    date: Date
});

module.exports = SendEmail;
