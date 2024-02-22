const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {  
        menu: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MenuSchema",
        },
        food: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ItemsSchema",
        },
        quantity: {
            type: Number,
    
        },
        total_price: {
            type: Number,
            
        },
        order_Date: {
            type: String,
            
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userSchema",
        },
        order_status: {
            type: Boolean,
            default: true,
        },
    },
);

// Model creation
const Order = mongoose.model("OrderSchema", OrderSchema);

// Module export
module.exports = Order;
