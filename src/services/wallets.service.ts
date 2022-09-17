import { PrismaClient } from '@prisma/client'

import { Wallet } from '../dto';

export default class WalletsService {

    constructor(
        private prisma: PrismaClient
    ) {}

    create(wallet: Wallet) {
        return this.prisma.wallet.create({
            data: wallet
        })       
    }

    findAll() {
        return this.prisma.wallet.findMany({})
    }

    delete(id: number) {
        return this.prisma.wallet.delete({
            where: {
                id
            }
        })
    }

    update(id: number, wallet: Wallet) {
        return this.prisma.wallet.update({
            where: {
                id
            },
            data: wallet
        })        
    }

    updateBalance(id: number, balance: number) {
        return this.prisma.wallet.update({
            where: {
                id
            },
            data: {
                balance
            }
        })
    }
}