const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Color = require('./Color');

const LedSchema = new Schema({
    isOn: {
        type: Boolean,
        required: true
    },
    color: {
        type: Color,
        required: true
    },
    light: {
        type: Number,
        required: true
    }
});

const Led = mongoose.model('Led', LedSchema);
module.exports = Led;