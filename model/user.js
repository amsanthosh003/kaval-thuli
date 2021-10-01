const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {  type: String,  required: false },
    email: {type: String, required: false },
    password: { type: String,  required: false },
    mobile: {type: String, required: false},
    
});

module.exports = new mongoose.model('user', userSchema);
