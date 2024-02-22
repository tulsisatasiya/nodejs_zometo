const Joi = require("joi");

// validation
const paymentValidationSchema = {
  body: Joi.object().keys({
    order: Joi.string().trim().required(),
    total_amount: Joi.number().required(),
    discount: Joi.string().trim(),
    final_pay_amount: Joi.number().required(),
    payment_method: Joi.string().trim().required(),
    transaction_time: Joi.string().trim(),
    transaction_status: Joi.boolean(),
  }),
};

module.exports = { paymentValidationSchema };
