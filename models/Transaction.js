const mongoose = require('mongoose');

const TranscationSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add Amount']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Transcation', TranscationSchema);