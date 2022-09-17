import joi from 'joi'

export default joi.object({
    name: joi.string()
    .required()
    .alphanum()
    .min(5)
    .max(16),

    color: joi.string()
    .required()
    .alphanum()
    .min(5)
    .max(16),

    balance: joi.number()
    .required()
})
