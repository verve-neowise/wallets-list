import { Request, Response, NextFunction } from "express";

import { Wallet } from "../dto";
import { walletService } from "../services";

export default class WalletsController {

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const wallet: Wallet = req.body
            const newData = await walletService.create(wallet)

            res.json({
                status: 201,
                wallet: newData
            })
        }
        catch(err) {
            next(err)
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const wallets = await walletService.findAll()

            res.json({
                status: 200,
                wallets: wallets
            })
        }
        catch(err) {
            next(err)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = +req.params.id
            const wallet = await walletService.delete(id)

            res.json({
                status: 200,
                wallet: wallet
            })
        }
        catch(err) {
            next(err)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = +req.params.id
            const wallet = req.body

            const newData = await walletService.update(id, wallet)

            res.json({
                status: 200,
                wallet: newData
            })
        }
        catch(err) {
            next(err)
        }
    }

    async updateBalance(req: Request, res: Response, next: NextFunction) {
        try {
            const id = +req.params.id
            const { balance } = req.body

            const newData = await walletService.updateBalance(id, balance)

            res.json({
                status: 201,
                wallet: newData
            })
        }
        catch(err) {
            next(err)
        }
    }
}