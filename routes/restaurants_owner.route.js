const express = require("express");
const validate = require("../middlewares/validate");
const { restaurants_ownerValidation } = require("../validation");
const { restaurants_ownwrController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(restaurants_ownerValidation.ownerValidation),restaurants_ownwrController.addRestaurant);
route.get("/get", restaurants_ownwrController.getAllRestaurants);
route.delete("/delete/:id", restaurants_ownwrController.deleteRestaurant);
route.put("/update/:id",validate(restaurants_ownerValidation.ownerValidation),restaurants_ownwrController.updateRestaurant);

module.exports = route;