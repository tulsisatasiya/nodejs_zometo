const { restaurants_ownerService } = require("../services");


// Add a new restaurant
const addRestaurant = async (req, res) => {
  try {
    const body = req.body;

    const restaurant = await restaurants_ownerService.addOwner(body);

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
    const restaurants = await restaurants_ownerService.getAllOwners();

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
    const id = req.params.id;
    const body = req.body;

    const restaurant = await restaurants_ownerService.updateOwner(id, body);

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
    const id = req.params.id;

    const restaurant = await restaurants_ownerService.deleteOwner(id);

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
