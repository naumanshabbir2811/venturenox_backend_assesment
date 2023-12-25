const Joi = require('joi');

const validateIdParam = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().integer().positive().required(),
    });

    const { error } = schema.validate({ id: req.params.id });

    if (error) {
        return res.status(400).json({ error: `Bad Request. ${error.details[0].message}` });
    }

    next();
};
module.exports = validateIdParam