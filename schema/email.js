var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmailSchema = new Schema({

    event: {
        addressee: {
            type: String,
            required: false
        },
        subject: {
            type: String,
            required: false
        },
        message: {
            type: String,
            default: Date.now
        },

    },

    ocurredOn: {
        type: Date,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    messageError: {
        type: String,
        required: false
    },

});

var send_email = mongoose.model('send_email', EmailSchema);
exports.email = send_email;