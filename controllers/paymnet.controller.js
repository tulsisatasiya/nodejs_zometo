const { paymnetService } = require("../services");


// Create a new payment
const addPayment = async (req, res) => {
  try {
    const body = req.body;

    const payment = await paymnetService.addPayment(body);

    res.status(201).json({
      success: true,
      message: "Payment added successfully",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await paymnetService.getAllPayments();

    res.status(200).json({
      success: true,
      message: "All payments retrieved successfully",
      data: payments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update payment by ID
const updatePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const body = req.body;

    const payment = await paymnetService.updatePayment(paymentId, body);

    res.status(200).json({
      success: true,
      message: "Payment updated successfully",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete payment by ID
const deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;

    const payment = await paymnetService.deletePayment(paymentId);

    res.status(200).json({
      success: true,
      message: "Payment deleted successfully",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addPayment,
  getAllPayments,
  updatePayment,
  deletePayment,
};
