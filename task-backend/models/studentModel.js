const mongoose = require('mongoose');

const { Schema } = mongoose;

Schema()

const imageSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("image", imageSchema);