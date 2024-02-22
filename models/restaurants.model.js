const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema({
    R_Name: {
        type: String,
    },
    address :{
        type: String,
    },
    Description: {
        type: String,
    },
    phone_no: {
        type: String,
    },
    email: {
        type: String,
    },
    active: {
        type: String,
    },
    time: {
        type: String,
    },
    restaurant_owner: {
        type: mongoose.Types.ObjectId,
        ref: "OwnerSchema",
    },
   
});

const Restaurant = mongoose.model("restaurantsSchema", restaurantsSchema);

module.exports = Restaurant;
