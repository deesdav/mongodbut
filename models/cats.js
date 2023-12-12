const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
});

module.exports = mongoose.model("Cat", catSchema);
