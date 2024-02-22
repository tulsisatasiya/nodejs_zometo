const { menuSchema } = require("../models");


// Create a new menu item
const addMenuItem = (body) => {
  return menuSchema.create(body);
};

// Get all menu items
const getAllMenuItems = async () => {
  return menuSchema.find().populate('food').populate('Restaurant');
};


// Update menu item by ID
const updateMenuItem = (menuItemId, body) => {
  return menuSchema.findByIdAndUpdate(menuItemId, { $set: body }).populate('food').populate('Restaurant');
};

// Delete menu item by ID
const deleteMenuItem = (menuItemId) => {
  return menuSchema.findByIdAndDelete(menuItemId);
};

module.exports = {
  addMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
};
