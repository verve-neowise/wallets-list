import { NextFunction, Request, Response } from "express"

export default () => {
    return (error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        res.status(500).send("Internal Server Error")
    }
}