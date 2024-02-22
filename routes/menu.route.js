const express = require("express");
const validate = require("../middlewares/validate");
const { menuController } = require("../controllers");
const { menuValidation } = require("../validation");
const { upload } = require("../middlewares/multer");

const route = express.Router();

route.post("/add", upload.single("menu_img"),validate(menuValidation.addmenuvalid), menuController.addMenu);
route.get("/get", menuController.getAllMenuItems);
route.put("/update/:id", validate(menuValidation.updateMenuValid), menuController.updateMenuItem);
route.delete("/delete/:id", menuController.deleteMenuItem);

module.exports = route;
