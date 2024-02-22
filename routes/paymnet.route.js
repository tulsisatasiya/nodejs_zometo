const express = require("express");
const validate = require("../middlewares/validate");
const {paymentValidation } = require("../validation");
const { paymnetController } = require("../controllers");



const route = express.Router();

route.post("/add", validate(paymentValidation.paymentValidationSchema),paymnetController.addPayment);
route.get("/get",paymnetController.getAllPayments );
route.put("/update/:id", validate(paymentValidation.paymentValidationSchema), paymnetController.updatePayment);
route.delete("/delete/:id", paymnetController.deletePayment);

module.exports = route;
