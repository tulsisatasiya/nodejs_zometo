const { discountSchema } = require("../models");


// Create a new discount
const addDiscount = (body) => {
  return discountSchema.create(body);
};

// Get all discounts
const getAllDiscounts = async () => {
  return discountSchema.find().populate('restaurant');
};


// Update discount by ID
const updateDiscount = (discountId, body) => {
  return discountSchema.findByIdAndUpdate(discountId, { $set: body }).populate('restaurant');
};

// Delete discount by ID
const deleteDiscount = (discountId) => {
  return discountSchema.findByIdAndDelete(discountId);
};

module.exports = {
  addDiscount,
  getAllDiscounts,
  updateDiscount,
  deleteDiscount,
};
