import Joi from "joi";

export default Joi.object({
    balance: Joi.number()
                .required()
})