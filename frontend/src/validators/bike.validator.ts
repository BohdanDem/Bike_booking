import Joi from "joi";

const bikeValidator = Joi.object({
    ID_slug: Joi.string().min(5).required().messages({
        'string.pattern.base': 'ID_slug should be a text or number with minimum length 5 characters',
        'string.required': 'ID_slug field is required'
    }),
    name: Joi.string().pattern(/^\D{5,}$/).required().messages({
        'string.pattern.base': 'Name should be a text with minimum length 5 characters',
        'string.required': 'Name field is required'
    }),
    type: Joi.string().pattern(/^\D{5,}$/).required().messages({
        'string.pattern.base': 'Type should be a text with minimum length 5 characters',
        'string.required': 'Type field is required'
    }),
    color: Joi.string().pattern(/^\D{5,}$/).required().messages({
        'string.pattern.base': 'Color should be a text with minimum length 5 characters',
        'string.required': 'Color field is required'
    }),
    wheel_size: Joi.number().required().messages({
        'number.base': 'Wheel_size should be a number',
        'number.required': 'Wheel_size field is required'
    }),
    price: Joi.number().required().messages({
        'number.base': 'Price should be a number',
        'number.required': 'Price field is required'
    }),
    description: Joi.string().pattern(/^\D{5,}$/).required().messages({
        'string.pattern.base': 'Description should be a text with minimum length 5 characters',
        'string.required': 'Description field is required'
    }),
})

export {
    bikeValidator
}
