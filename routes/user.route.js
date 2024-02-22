const express = require("express");
const validate = require("../middlewares/validate");
const {  restrict, authanticate } = require("../middlewares/auth");
const { userController } = require("../controllers");
const { userValidation } = require("../validation");
const route = express.Router();

route.get(
  "/profile",
  authanticate,
  restrict(["user"]),
  userController.getProfile
);
route.get("/get", authanticate, restrict(["admin"]), userController.getUser);
route.post(
  "/register",
  validate(userValidation.addUser),
  userController.addUser
);
route.post("/login", userController.loginUser);

module.exports = route;
