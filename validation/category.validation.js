const Joi = require("joi");

//validation
const addcategory = {
  body: Joi.object().keys({
    Category: Joi.string().trim().required(),
    Description: Joi.string().trim().required(),
  }),
};

module.exports = {addcategory};
