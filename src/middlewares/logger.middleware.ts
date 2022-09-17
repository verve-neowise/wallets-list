import { NextFunction, Request, Response } from "express"

export default () => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(`${req.method} ${req.originalUrl}`);
        next()
    }
}