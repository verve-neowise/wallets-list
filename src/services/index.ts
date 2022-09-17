import { PrismaClient } from '@prisma/client'

import WalletsService from "./wallets.service";

const prisma = new PrismaClient()

export const walletService = new WalletsService(prisma)