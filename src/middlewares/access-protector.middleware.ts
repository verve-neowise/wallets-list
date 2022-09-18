import { NextFunction, Request, Response } from "express"

export default () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const accessKey = req.header('X-Access-Key')

        console.log("access protector");
        

        if (!accessKey) {
            return res.status(401).send('Access denied')
        }

        if (process.env.API_ACCESS_KEY === accessKey) {
            next()
        } 
        else {
            return res.status(401).send('Access denied')
        }
    }
}