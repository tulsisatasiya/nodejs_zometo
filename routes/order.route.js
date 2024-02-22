const express = require("express");
const validate = require("../middlewares/validate");
const { orderValidation } = require("../validation");
const { orderController } = require("../controllers");


const route = express.Router();

route.post("/add", validate(orderValidation.orderValidationSchema), orderController.addOrder);
route.get("/get", orderController.getAllOrders);
route.put("/update/:id", validate(orderValidation.orderValidationSchema), orderController.updateOrder);
route.delete("/delete/:id", orderController.deleteOrder);

module.exports = route;
