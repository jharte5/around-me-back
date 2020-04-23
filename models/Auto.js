const mongoose = require('mongoose');

const AutoSchema = new mongoose.Schema({
    service:{type:String},
    name:{type:String},
    city:{type:String},
    price:{type:String},
    address:{type:String},
    phone:{type:String},
    website:{type:String}
});

module.exports = mongoose.model('Auto', AutoSchema);