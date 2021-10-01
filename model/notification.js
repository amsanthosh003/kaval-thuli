const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({

    title: {  type: String,  required: false },
    message: {type: String, required: false},
    image: {type: String, required: false },
    News:{ type: mongoose.Schema.ObjectId,   required: false  },
    externallink:{type: String,  required: false}


});

module.exports = new mongoose.model('notification', notificationSchema);
