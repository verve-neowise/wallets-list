import joi from 'joi'

export default joi.object({
    name: joi.string()
    .required()
    .min(5)
    .max(16),

    color: joi.string()
    .required(),

    balance: joi.number()
    .required()
})
