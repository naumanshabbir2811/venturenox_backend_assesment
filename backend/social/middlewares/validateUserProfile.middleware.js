const Joi = require('joi');

const validateUserProfile = (req, res, next) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        department: Joi.string().required(),
        designation: Joi.string().required(),
        image_url: Joi.string(),
        city: Joi.string(),
        country: Joi.string(),
        bio: Joi.string(),
        social_links: Joi.object(),
        employee_id: Joi.number().required(),
        tenant_id: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        console.error(error);
        return res.status(400).json({ success: false, message: 'Bad Request', data: null, status: 400, error: error.details });
    }

    next();
};

module.exports = validateUserProfile;
