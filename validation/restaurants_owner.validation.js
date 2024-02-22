const Joi = require("joi");

// Define a validation schema for restaurant owner creation
const ownerValidation = Joi.object({
    owner_name: Joi.string().trim().required(),
    email: Joi.string().email().required(),
    contact_no: Joi.number().integer().required(),
    restaurant: Joi.string().trim().required(), 
    is_active: Joi.boolean().default(true),
    admin:Joi.string().email().required(),
});

module.exports = { ownerValidation };
