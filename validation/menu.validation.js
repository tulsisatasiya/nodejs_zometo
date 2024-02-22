const Joi = require("joi");

//validation
const addmenuvalid = {
  body: Joi.object().keys({
    menu_img: Joi.string().trim(),
    food: Joi.string().trim().required(),
    menu_desc: Joi.string().trim().required(),
    Restaurant: Joi.string().trim().required(),
  }),
};

module.exports = {addmenuvalid};
