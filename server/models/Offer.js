const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const offerSchema = new Schema({
    offerText: {
        type: String,
        required: 'Please leave a messenge',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    offerSender: {
        type: String,
        required: 'Please enter name',
        minlength: 1,
        maxlength: 22,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Offer = model('Offer', offerSchema);
module.exports = Offer;