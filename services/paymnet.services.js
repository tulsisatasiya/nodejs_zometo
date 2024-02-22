const { paymentSchema } = require("../models");

// Create a new payment
const addPayment = (body) => {
  return paymentSchema.create(body);
};

// Get all payments
const getAllPayments = async () => {
  return paymentSchema.find().populate('order').populate('discount');
};

// Update payment by ID
const updatePayment = (paymentId, body) => {
  return paymentSchema.findByIdAndUpdate(paymentId, { $set: body }).populate('order').populate('discount');
};

// Delete payment by ID
const deletePayment = (paymentId) => {
  return paymentSchema.findByIdAndDelete(paymentId);
};

module.exports = {
  addPayment,
  getAllPayments,
  updatePayment,
  deletePayment,
};
