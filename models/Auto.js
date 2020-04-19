const mongoose = require('mongoose');

const AutoSchema = new mongoose.Schema({
    service:{type:String}
});

module.exports = mongoose.model('Auto', AutoSchema);