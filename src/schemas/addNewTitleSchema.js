import Joi from "joi"

const addNewTitleSchema = async ()=>{

    return Joi.object({
        title: Joi.string().min(3).required().messages({
            "string.base":"title should be a string",
            "string.min":"title should include 3 characters or more ",
            "any.required":"title id required"
        }),
        status: Joi.boolean().messages({
            "boolean.base":"title should be a boolean",
        })
    })
}

export default addNewTitleSchema