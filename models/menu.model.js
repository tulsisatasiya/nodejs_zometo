const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema(
    {
        menu_img: {
            type: String,
        },
        food: {
            type: mongoose.Types.ObjectId,
            ref: "ItemsSchema",
        },
        menu_desc: {
            type: String,
            trim: true,
            
        },
        Restaurant: {
            type: mongoose.Types.ObjectId,
             ref :"restaurantsSchema",
        },
            
    },
    
);
// model create
const Menu = mongoose.model("MenuSchema", MenuSchema);
//module expoart
module.exports = Menu;