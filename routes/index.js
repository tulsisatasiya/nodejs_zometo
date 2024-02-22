const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
const adminRoute = require("./admin.route");
const ownerRoute = require("./restaurants_owner.route");
const resturantRoute = require("./restaurant.route");
const categoryRoute = require("./category.route");
const itemsRoute = require("./items.route");
const menuRoute = require("./menu.route");
const  orderRoute = require("./order.route");
const  paymnetRoute = require("./paymnet.route");


route.use("/user", userRoute);
route.use("/admin", adminRoute);
route.use("/owner", ownerRoute);
route.use("/resturant",  resturantRoute);
route.use("/category",  categoryRoute);
route.use("/item", itemsRoute);
route.use("/order", orderRoute);
route.use("/paymnet", paymnetRoute);




module.exports = route;
