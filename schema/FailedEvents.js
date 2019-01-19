var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FailedEvents = new Schema({

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

var failedEvent = mongoose.model('failed_event', FailedEvents);

module.exports = failedEvent;