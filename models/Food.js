const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name:{type:String},
    type: {type:String}
})

module.exports = mongoose.model('Food', FoodSchema);