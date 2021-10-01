const mongoose = require('mongoose');

const reporterSchema = new mongoose.Schema({

    name: {  type: String,  required: false },
    mobile: {type: String, required: false},
    City:{ type: mongoose.Schema.ObjectId,   required: false  },
    reporterimage:{type: String,  required: false}
});

module.exports = new mongoose.model('reporter', reporterSchema);
