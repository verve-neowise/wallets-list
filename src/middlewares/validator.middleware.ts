import joi from 'joi'
import { Request, Response, NextFunction } from "express";

export default (schema: joi.ObjectSchema<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body)

        if (error == undefined) {
            next()
        }
        else {
            res.status(400).json({
                status: 400,
                errors: error
            })
        }
    }
}