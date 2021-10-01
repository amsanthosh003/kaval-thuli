const mongoose = require('mongoose');


const tipsSchema = new mongoose. Schema({

     tipstitle: {  type: String,  required: false },
     tipsdescription: {  type: String,  required: false },
     tipsimage: {  type: String,  required: false },


});

module.exports = new mongoose.model('tips' ,tipsSchema);