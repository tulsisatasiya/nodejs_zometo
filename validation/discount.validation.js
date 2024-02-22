const Joi = require("joi");

// Validation
const addDiscountValidation = {
  body: Joi.object().keys({
    code: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    discountPercentage: Joi.number().required(), 
    validFrom: Joi.date().required(), 
    validUntil: Joi.date().required(),
    restaurant: Joi.string().trim().required(),
  }),
};

module.exports = { addDiscountValidation };