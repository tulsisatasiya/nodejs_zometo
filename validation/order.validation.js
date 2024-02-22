const Joi = require("joi");

//validation
const orderValidationSchema = {
  body: Joi.object().keys({
    menu: Joi.string().trim().required(),
    food: Joi.string().trim().required(),
    quantity: Joi.number().required(),
    total_price: Joi.number().required(),
    order_Date: Joi.string().trim().required(),
    user: Joi.string().trim().required(),
    order_status: Joi.boolean(),
  }),
};

module.exports = {orderValidationSchema};
