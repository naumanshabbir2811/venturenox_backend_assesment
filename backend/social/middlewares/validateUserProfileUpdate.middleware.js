const Joi = require('joi');

const validateUpdateUserProfile = (req, res, next) => {
    const schema = Joi.object({
        first_name: Joi.string(),
        last_name: Joi.string(),
        department: Joi.string(),
        designation: Joi.string(),
        image_url: Joi.string(),
        city: Joi.string(),
        country: Joi.string(),
        zip_code: Joi.string(),
        phone: Joi.string(),
        bio: Joi.string(),
        social_links: Joi.object(),
        employee_id: Joi.number().integer(),
        is_active: Joi.boolean(),
        tenant_id: Joi.number().integer(),
    }).min(1); // At least one property is required for an update

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: `Bad Request. ${error.details[0].message}` });
    }

    next();
};

module.exports = validateUpdateUserProfile;
