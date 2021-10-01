const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    username: {  type: String,  required: false },
    mobile: {type: String, required: false},
    email: {type: String, required: false },
    password: { type: String,  required: false },
    profileimage:{type: String,  required: false}
});

module.exports = new mongoose.model('admin', adminSchema);
