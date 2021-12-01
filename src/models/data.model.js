const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    keyword : {
        type : String
    },
    data : {
        type : Array
    }
},{
    timestamps : true,
    versionKey : false
});

const Data = mongoose.model('rss_data', DataSchema);

module.exports = Data;