const { itemsService } = require("../services");

// Create a new item
const addItem = async (req, res) => {
  try {
    const body = req.body;

    const itemExist = await itemsService.getitembyname(body.food_name);

    if (itemExist) {
      throw new Error("Item already exists");
    }

    const item = await itemsService.addItem(body);

    res.status(201).json({
      success: true,
      message: "Item added successfully",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await itemsService.getAllItems();

    res.status(200).json({
      success: true,
      message: "All items retrieved successfully",
      data: items,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update item by ID
const updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const body = req.body;

    const itemExist = await itemsService.getitembyname(body.food_name);

    if (itemExist && itemExist._id != itemId) {
      throw new Error("Item with the same name already exists");
    }

    const item = await itemsService.updateItem(itemId, body);

    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete item by ID
const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    const item = await itemsService.deleteItem(itemId);

    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
      data: item,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addItem,
  getAllItems,
  updateItem,
  deleteItem,
};
