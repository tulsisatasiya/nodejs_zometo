const { orderService } = require("../services");

// Create a new order
const addOrder = async (req, res) => {
  try {
    const body = req.body;

    const order = await orderService.addOrder(body);

    res.status(201).json({
      success: true,
      message: "Order added successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();

    res.status(200).json({
      success: true,
      message: "All orders retrieved successfully",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update order by ID
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const body = req.body;

    const order = await orderService.updateOrder(orderId, body);

    res.status(200).json({
      success: true,
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete order by ID
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    const order = await orderService.deleteOrder(orderId);

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
};
