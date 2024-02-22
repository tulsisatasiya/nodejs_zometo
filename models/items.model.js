const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
    food_name: {
        type: String,
    },
    food_desc: {
        type: String,
    },
    food_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorySchema",
    },
    food_offer: {
        type: String,
    },
    food_price: {
        type: String,
    },
    food_rating: {
        type: Number,
    },

});

// Model creation
const Item = mongoose.model("ItemsSchema", ItemsSchema);

// Module export
module.exports = Item;
