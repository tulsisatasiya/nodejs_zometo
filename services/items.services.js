const { itemsSchema } = require("../models");


// Create a new item
const addItem = (body) => {
  return itemsSchema.create(body);
};

// Get all items
const getAllItems = async () => {
  return itemsSchema.find().populate('food_type');
};


// Update item by ID
const updateItem = (itemId, body) => {
  return itemsSchema.findByIdAndUpdate(itemId, { $set: body }).populate('food_type');
};

// Delete item by ID
const deleteItem = (itemId) => {
  return itemsSchema.findByIdAndDelete(itemId);
};

const getitembyname = (food_name) => {
    return itemsSchema.findOne({food_name}).populate("category_id"); 
};

module.exports = {
    addItem,
    getAllItems,
    updateItem,
    deleteItem,
    getitembyname
};
