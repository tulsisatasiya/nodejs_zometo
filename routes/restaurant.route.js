const express = require("express");
const validate = require("../middlewares/validate");
const { resturantsValidation } = require("../validation");
const { restaurantsController } = require("../controllers");

const route = express.Router();


route.post("/add", validate(resturantsValidation.restaurantValidationSchema), restaurantsController.addRestaurant);
route.get("/get", restaurantsController.getAllRestaurants);
route.delete("/delete/:id", restaurantsController.deleteRestaurant);
route.put("/update/:id",validate(resturantsValidation.restaurantValidationSchema),restaurantsController.updateRestaurant);


module.exports = route;
