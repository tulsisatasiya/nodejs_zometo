const mongoose = require("mongoose");
//Payment model schema defiend
const PaymentSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Types.ObjectId,
            ref: "OrderSchema",
        },
       
       
        total_amount :{
            type : Number,
        },
        discount :{
            type: mongoose.Types.ObjectId,
            ref: "DiscountSchema",

        },
        final_pay_amount :{
            type : Number,
        },
        payment_method: {
            type: String,
        },
        transtion_time: {
            type: String,
            trim: true
        },
        transtion_status :{
             type :Boolean,
             default : true,
        },
    },
   
);
// model create
const Payment = mongoose.model("PaymentSchema", PaymentSchema);
//module expoart
module.exports = Payment;