const express = require("express");
const validate = require("../middlewares/validate");
const { itemsValidation } = require("../validation");
const { itemsController } = require("../controllers");


const route = express.Router();

route.post("/add", validate(itemsValidation.addItemValidation), itemsController.addItem);
route.get("/get", itemsController.getAllItems);
route.put("/update/:id", validate(itemsValidation.addItemValidation), itemsController.updateItem);
route.delete("/delete/:id", itemsController.deleteItem);

module.exports = route;
