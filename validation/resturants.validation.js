const Joi = require("joi");

//validation
const restaurantValidationSchema = {
  body: Joi.object().keys({
    R_Name: Joi.string().trim().required(),
    address: Joi.string().trim().required(),
    Description: Joi.string().required(), 
    phone_no: Joi.string().trim().required(),
    email: Joi.string().trim().email().required(),
    active: Joi.string().trim().required(),
    time: Joi.string().trim().required(),
    restaurant_owner:Joi.string().trim().required(),
  }),
};

module.exports = { restaurantValidationSchema };
