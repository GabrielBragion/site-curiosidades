// models/Curiosity.js
const mongoose = require('mongoose');

// Definir o schema para as curiosidades
const CuriositySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Curiosity', CuriositySchema);
