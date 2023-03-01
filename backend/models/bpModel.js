const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bpSchema = new Schema(
    {
        systolic: {
            type: Number,
            required: true,
        },
        diastolic: {
            type: Number,
            required: true,
        },
        pulserate: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('BP', bpSchema);
