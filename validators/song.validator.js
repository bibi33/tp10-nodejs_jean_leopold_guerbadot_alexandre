const { Joi } = require("express-validation");
/**
 * Song Validators
 */

const SongValidators = {
    validateCreate: {
        body: Joi.object({
            title: Joi.string().max(80).required(),
            duration: Joi.number().integer(),
            artist: Joi.string().max(100).required(),
            type: Joi.string().max(80),
        }),
    },
    validateUpdate: {
        params: Joi.object({
            id: Joi.string().guid().required(),
        }),
        body: Joi.object({
            title: Joi.string().max(80).required(),
            duration: Joi.number().integer(),
            artist: Joi.string().max(100).required(),
            type: Joi.string().max(80),
        }),
    },
};

module.exports = SongValidators;
