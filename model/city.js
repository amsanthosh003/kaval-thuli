const mongoose = require('mongoose');


const citySchema = new mongoose. Schema({

     name: {  type: String,  required: false },

});

module.exports = new mongoose.model('city' ,citySchema);