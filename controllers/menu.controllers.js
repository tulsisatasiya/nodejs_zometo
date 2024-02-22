const { menuService } = require("../services");

// Create a new menu item
const addMenu = async (req, res) => {
  try {
    const body = req.body;
  
    const menu = await menuService.addMenuItem(body);

    res.status(201).json({
      success: true,
      message: "Menu added successfully",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all menu items
const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await menuService.getAllMenuItems();

    res.status(200).json({
      success: true,
      message: "All menu items retrieved successfully",
      data: menuItems,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update menu item by ID
const updateMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;
    const body = req.body;

    const menu = await menuService.updateMenuItem(menuItemId, body);

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete menu item by ID
const deleteMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;

    const menu = await menuService.deleteMenuItem(menuItemId);

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addMenu,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
};
