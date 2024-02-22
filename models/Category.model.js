const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    Category: {
        type: String,
    },
    Description: {
        type: String,
    }
});

const Category = mongoose.model("categorySchema", categorySchema);

module.exports = Category;
