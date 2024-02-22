const { restaurantsService } = require("../services");


// Create a new restaurant
const addRestaurant = async (req, res) => {
  try {
    const body = req.body;

    const restaurant = await restaurantsService.addRestaurant(body);

    res.status(201).json({
      success: true,
      message: "Restaurant added successfully",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantsService.getAllRestaurants();

    res.status(200).json({
      success: true,
      message: "All restaurants retrieved successfully",
      data: restaurants,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update restaurant by ID
const updateRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const body = req.body;

    const restaurant = await restaurantsService.updateRestaurant(restaurantId, body);

    res.status(200).json({
      success: true,
      message: "Restaurant updated successfully",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete restaurant by ID
const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;

    const restaurant = await restaurantsService.deleteRestaurant(restaurantId);

    res.status(200).json({
      success: true,
      message: "Restaurant deleted successfully",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
