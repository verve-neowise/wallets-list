import { NextFunction, Request, Response } from "express"

export default () => {
    return (req: Request, res: Response, next: NextFunction) => {
        console.log(`--------------------------------------------`);
        console.log(`${req.method} ${req.originalUrl}`);
        console.log(`HEADERS: ${JSON.stringify(req.headers)}`);
        console.log(`BODY: ${JSON.stringify(req.body)}`);
        next()
    }
}