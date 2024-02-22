const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema(
    {
        owner_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        contact_no: {
            type: Number,
            trim: true,
        },
        admin: {
            type: mongoose.Types.ObjectId,
            ref: "adminSchema",
        },
       
    }
);
// model create
const owner = mongoose.model("OwnerSchema", OwnerSchema);
//module expoart
module.exports = owner;
