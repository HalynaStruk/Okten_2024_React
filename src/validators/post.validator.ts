import Joi from "joi";

export const postValidator =
    Joi
        .object({
            title: Joi.string().required().messages({'string.required': 'write something, this field cannot be empty'}),
            body: Joi.string().required().messages({'string.required': 'write something, this field cannot be empty'}),
            userId: Joi.number().min(1).max(10).required().messages(
                {
                'number.required': 'write the user id, this field cannot be empty',
                'number.min': 'the minimum number is 1',
                'number.max': 'the maximum number is 10',
            })
    })
