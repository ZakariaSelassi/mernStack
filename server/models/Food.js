const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true,
    },
    origineFood: {
        type: String,
        required: true,

    },
    tasty:{
        type: Number,
        required: true,
        min:1,
        max:5,
    }
});

const Food = mongoose.model('Food',FoodSchema)
module.exports = Food;