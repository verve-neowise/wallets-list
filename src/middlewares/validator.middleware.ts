import { Request, Response, NextFunction } from "express";

export default (schema: any) => {
    return (req: Request, res: Response, next: NextFunction) => {

        next()
    }
}