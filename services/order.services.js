const { orderSchema } = require("../models");


// Create a new order
const addOrder = (body) => {
  return orderSchema.create(body);
};

// Get all orders
const getAllOrders = async () => {
  return orderSchema.find()
    .populate({
      path: 'menu',
      model: 'MenuSchema',
    })
    .populate({
      path: 'food',
      model: 'ItemsSchema',
      select: 'food_name food_desc food_offer food_price food_rating',
    })
    .populate({
      path: 'user',
      model: 'userSchema',
      select: 'firstName lastName email full_address',
    });
};




// Update order by ID
const updateOrder = (orderId, body) => {
  return orderSchema.findByIdAndUpdate(orderId, { $set: body }).populate('menu').populate('food').populate('user');
};

// Delete order by ID
const deleteOrder = (orderId) => {
  return orderSchema.findByIdAndDelete(orderId);
};

module.exports = {
  addOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
