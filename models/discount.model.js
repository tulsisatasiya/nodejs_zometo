const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
    },
    discountPercentage: {
        type: Number,
    },
    validFrom: {
        type: Date,
    },
    validUntil: {
        type: Date,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurantsSchema',
    },
   
});

// Discount Model
const Discount = mongoose.model("DiscountSchema", DiscountSchema);

// Module export
module.exports = Discount;
