const Joi = require('joi');

const validateUpdateTenantProfile = (req, res, next) => {
  const schema = Joi.object({
    tenant_name: Joi.string(),
    address: Joi.object(),
    city: Joi.string(),
    state: Joi.string(),
    country: Joi.string(),
    zipcode: Joi.string(),
    phone: Joi.string(),
    web: Joi.string(),
    is_active: Joi.boolean(),
  }).min(1); // At least one property is required for an update

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: `Bad Request. ${error.details[0].message}` });
  }

  next();
};

module.exports = validateUpdateTenantProfile;
