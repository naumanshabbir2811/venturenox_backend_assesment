const Joi = require('joi');

const validateTenantProfile = (req, res, next) => {
    const schema = Joi.object({
        tenant_name: Joi.string().required(),
        address: Joi.object().required(),
        city: Joi.string().required(),
        state: Joi.string(),
        country: Joi.string().required(),
        zipcode: Joi.string(),
        phone: Joi.string(),
        web: Joi.string(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: `Bad Request. ${error.details[0].message}` });
    }

    next();
};

module.exports = validateTenantProfile;
