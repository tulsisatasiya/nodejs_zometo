const Joi = require("joi");

// Validation
const addItemValidation = {
    body: Joi.object().keys({
        food_name: Joi.string().trim().required(),
        food_desc: Joi.string().trim().required(),
        food_type: Joi.string().trim(),
        food_offer: Joi.string().trim().required(),
        food_price: Joi.string().trim().required(),
        food_rating: Joi.string().trim().required(),
     
      }),
  
};

module.exports = { addItemValidation };