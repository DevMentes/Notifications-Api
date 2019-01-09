var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var EmailSchema = new Schema({

    correo: { type: String, required: false }
});

var send_email = mongoose.model('send_email', EmailSchema);
exports.pending_events;