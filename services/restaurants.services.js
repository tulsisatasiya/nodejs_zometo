const { restaurantsSchema } = require("../models");


// Create a new restaurant
const addRestaurant = (body) => {
  return restaurantsSchema.create(body);
};

// Get all restaurants
// const getAllRestaurants = async () => {
//   return restaurantsSchema.find().populate('restaurant_owner');
// };
const getAllRestaurants = async () => {
    return restaurantsSchema.find().populate({
      path: 'restaurant_owner',
      select: 'owner_name email',
    });
  };
  



// Update restaurant by ID
const updateRestaurant = (restaurantId, body) => {
  return restaurantsSchema.findByIdAndUpdate(restaurantId, { $set: body }).populate('restaurant_owner');
};

// Delete restaurant by ID
const deleteRestaurant = (restaurantId) => {
  return restaurantsSchema.findByIdAndDelete(restaurantId);
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
