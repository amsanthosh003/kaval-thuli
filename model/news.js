const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({

    newstype: {  type: String,  required: false },
    newstitle: {type: String, required: false},
    newsdescription: {type: String, required: false },
    newsimage: { type: String,  required: false },
    galleryimage:{type: String,  required: false},
    videourl: { type: String,  required: false },
    newsdate: {  type: String ,  required: false },
    views: {  type: Number,  required: false },
    


});

module.exports = new mongoose.model('news', newsSchema);
