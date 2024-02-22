const express = require("express");
const validate = require("../middlewares/validate");
const { categoryValidation } = require("../validation");
const { categroyController } = require("../controllers");


const route = express.Router();

route.post("/add", validate(categoryValidation.addcategory),categroyController.addCategory);
route.get("/get", categroyController.getAllCategories);
route.delete("/delete/:id", categroyController.deleteCategory);
route.put("/update/:id",validate(categoryValidation.addcategory),categroyController.updateCategory);

module.exports = route;