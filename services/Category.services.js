const { categorySchema } = require("../models");


// Create a new category
const addCategory = (body) => {
  return categorySchema.create(body);
};

// Get all categories
const getAllCategories = async () => {
  return categorySchema.find();
};



// Update category by ID
const updateCategory = (categoryId, body) => {
  return categorySchema.findByIdAndUpdate(categoryId, { $set: body });
};

// Delete category by ID
const deleteCategory = (categoryId) => {
  return categorySchema.findByIdAndDelete(categoryId);
};

// get
const getbycategory = (Category) => {
    return categorySchema.findOne({Category}); 
};

module.exports = {
  addCategory,
  getAllCategories,
  updateCategory,
    deleteCategory,
    getbycategory
};
