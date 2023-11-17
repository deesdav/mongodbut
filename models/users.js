const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, requierd: true },
    email: { type: String, requierd: true },
    password: { type: String, requierd: true },
    phone: { type: Number, requierd: true },
});

module.exports = mongoose.model("User", userSchema);
